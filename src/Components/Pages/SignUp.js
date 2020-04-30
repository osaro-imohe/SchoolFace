import React, {Component} from 'react';
import '../../Css/Pages/SignUp.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUpAction} from '../../Store/Actions/signUpAction.js';
import { checkLoading } from '../../Store/Actions/checkLoading';
import { Redirect } from 'react-router-dom'; 


class SignUp extends Component{
    state = {
        userdetails : {
            firstname : '',
            lastname : '',
            email : '',
            password : '',
        },
        error_message : '',

    }
    handleUpdate = (e) =>{
        const emailRegEx = /\S+@\S+\.\S+/;
        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        switch(e.target.id){
            case 'firstname':
                if(e.target.value !== '' ){
                    this.setState({userdetails:{...this.state.userdetails,firstname : e.target.value}});
                    e.target.classList.remove('error');
                    e.target.classList.add('success');
                    if(document.querySelector('#firstname').value !== '' && document.querySelector('#lastname').value !== '' && emailRegEx.test(document.querySelector('#email').value) && passwordRegEx.test(document.querySelector('#password').value)){
                        document.querySelector('.submit').removeAttribute('disabled')
                    }else{
                        document.querySelector('.submit').disabled=true;
                    }
                }else{
                    e.target.classList.remove('success');
                    e.target.classList.add('error');
                    this.setState({userdetails:{...this.state.userdetails,firstname : ''}});
                    document.querySelector('.submit').disabled=true;
                }
                break
            case 'lastname':
                if(e.target.value !== ''){
                    this.setState({userdetails:{...this.state.userdetails,lastname : e.target.value}});
                    e.target.classList.remove('error');
                    e.target.classList.add('success');
                    if(document.querySelector('#firstname').value !== '' && document.querySelector('#lastname').value !== '' && emailRegEx.test(document.querySelector('#email').value) && passwordRegEx.test(document.querySelector('#password').value)){
                        document.querySelector('.submit').removeAttribute('disabled')
                    }else{
                        document.querySelector('.submit').disabled=true;
                    }
                }else{
                    e.target.classList.remove('success');
                    e.target.classList.add('error');
                    this.setState({userdetails:{...this.state.userdetails,lastname : ''}});
                    document.querySelector('.submit').disabled=true;
                }
                
                break
            case 'email':
                if(e.target.value !== ''){
                    if(emailRegEx.test(e.target.value)){
                        this.setState({userdetails:{...this.state.userdetails,email : e.target.value}})
                        e.target.classList.remove('error');
                        e.target.classList.add('success');
                        if(document.querySelector('#firstname').value !== '' && document.querySelector('#lastname').value !== '' && emailRegEx.test(document.querySelector('#email').value) && passwordRegEx.test(document.querySelector('#password').value)){
                            document.querySelector('.submit').removeAttribute('disabled')
                        }else{
                            document.querySelector('.submit').disabled=true;
                        }
                    }else{
                        e.target.classList.remove('success');
                        e.target.classList.add('error');
                    }
                }else{
                    e.target.classList.remove('success');
                    e.target.classList.add('error');
                    this.setState({userdetails:{...this.state.userdetails,email : ''}})
                    document.querySelector('.submit').disabled=true;
                }
                
                break
            case 'password':
                if(e.target.value !== ''){
                    if(passwordRegEx.test(e.target.value)){
                        this.setState({userdetails:{...this.state.userdetails, password : e.target.value}});
                        e.target.classList.remove('error');
                        e.target.classList.add('success');
                        this.setState({error_message : ''})
                        if(document.querySelector('#firstname').value !== '' && document.querySelector('#lastname').value !== '' && emailRegEx.test(document.querySelector('#email').value) && passwordRegEx.test(document.querySelector('#password').value)){
                            document.querySelector('.submit').removeAttribute('disabled')
                        }else{
                            document.querySelector('.submit').disabled=true;
                        }
                    }else{
                        e.target.classList.remove('success');
                        e.target.classList.add('error');
                        this.setState({error_message : 'Please input a password with at least one uppercase letter, one lowercase letter and one number'})
                        document.querySelector('.submit').disabled=true;
                    }
                }else{
                    e.target.classList.remove('success');
                    e.target.classList.add('error');  
                    this.setState({error_message : ''})
                    this.setState({userdetails:{...this.state.userdetails, password : ''}});
                    document.querySelector('.submit').disabled=true;
                }
                
                break
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.checkLoading()
        this.props.signup(this.state.userdetails);
    }
    loadingChecker = () =>{
        switch(this.props.loading){
            case  true:
                return <div class="loader"></div>
            case false:
                return <p>Login</p>

        }
    }
    render(){
        if(this.props.token !== '') return <Redirect to='/dashboard'/>
        return(
            <div className="signup">
                    <div className="signupleft col-sm-12 col-lg-6 d-none d-lg-block"></div>
                    <div className="right col-sm-12 col-lg-6">
                        <div className="rightinner col-sm-12 col-lg-8">
                            <p className="signupheader"></p>
                            <p className="signupsubheader"></p>
                            <form onSubmit={this.handleSubmit}>
                                <input className="inputs" id="firstname" type="text" placeholder="First Name" onKeyUp={this.handleUpdate}/>
                                <input className="inputs" id="lastname" type="text" placeholder="Last Name" onKeyUp={this.handleUpdate}/>
                                <input className="inputs" id="email"type="text" placeholder="Email" onKeyUp={this.handleUpdate}/>
                                <input className="inputs" id="" type="text" placeholder onKeyUp={this.handleUpdate}/>
                                <input type="password" name="" id="password" className="inputs" placeholder="Password" onKeyUp={this.handleUpdate}/>
                                <p className="error_message">{this.state.error_message}</p>
                                <p className="error_message">{this.props.error_message}</p>
                                <button type="submit" className="submit" disabled>{this.loadingChecker()}</button>
                                <p className="alreadysignedup">Already have an account? <Link to="/login">Login</Link></p>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        first_name : state.auth.userdetails.firstname,
        last_name : state.auth.userdetails.lastname,
        email : state.auth.userdetails.email,
        token : state.auth.userdetails.token,
        loading : state.auth.loading,
        error_message : state.auth.error_message,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signup : (details) => dispatch(signUpAction(details)),
        checkLoading : () => dispatch(checkLoading()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);