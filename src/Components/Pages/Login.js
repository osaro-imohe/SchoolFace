import React, {Component} from 'react';
import '../../Css/Pages/Login.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginAction} from '../../Store/Actions/loginAction.js';
import {checkLoading} from '../../Store/Actions/checkLoading.js';
import {Redirect} from 'react-router-dom';

class Login extends Component{
    state = {
        userdetails : {
            email : '',
            password : '',
        },
        error_message : '',
    }
    handleUpdate = (e) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        const passwordRegEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
        switch(e.target.id){
            case 'email':
                if(e.target.value == ''){
                    e.target.classList.remove('success');
                    e.target.classList.add('error');
                    this.setState({userdetails : {...this.state.userdetails, email : ''}})
                    document.querySelector('.submit').disabled = true;
                }else{
                    if(emailRegEx.test(e.target.value)){
                        e.target.classList.remove('error');
                        e.target.classList.add('success');
                        this.setState({userdetails : {...this.state.userdetails, email : e.target.value}});
                        if(emailRegEx.test(document.querySelector('#email').value) && passwordRegEX.test(document.querySelector('#password').value)){
                            document.querySelector('.submit').removeAttribute('disabled');
                        }else{
                            document.querySelector('.submit').disabled = true;
                        }
                    }else{
                        e.target.classList.remove('success');
                        e.target.classList.add('error');
                        this.setState({userdetails : {...this.state.userdetails, email : e.target.value}})
                        document.querySelector('.submit').disabled = true;
                    }
                }

                break
            case 'password':
                if(e.target.value == ''){
                    e.target.classList.remove('success');
                    e.target.classList.add('error');
                    this.setState({userdetails : {...this.state.userdetails, password : ''}, error_message : ''})
                    document.querySelector('.submit').disabled = true;
                }else{
                    if(passwordRegEX.test(e.target.value)){
                        e.target.classList.remove('error');
                        e.target.classList.add('success');
                        this.setState({userdetails : {...this.state.userdetails, password : e.target.value}, error_message : ''})
                        if(emailRegEx.test(document.querySelector('#email').value) && passwordRegEX.test(document.querySelector('#password').value)){
                            document.querySelector('.submit').removeAttribute('disabled');
                        }else{
                            document.querySelector('.submit').disabled = true;
                        }
                    }else{
                        e.target.classList.remove('success');
                        e.target.classList.add('error');
                        this.setState({userdetails : {...this.state.userdetails, password : e.target.value}, error_message : 'Please input a password with at least one uppercase letter, one lowercase letter and one number'})
                        document.querySelector('.submit').disabled = true;
                    }
                }
                break
        }
    }
    loadingChecker = () => {
        switch(this.props.loading){
            case true:
                return <div class="loader"></div>
            case false:
                return <p>Login</p>
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.checkLoading();
        this.props.login(this.state.userdetails);
    }
    render(){
        if(this.props.token !== '') return <Redirect to='/dashboard'/>
        return(
             <div className="login">
                    <div className="loginleft col-sm-12 col-lg-6 d-none d-lg-block"></div>
                    <div className="right col-sm-12 col-lg-6">
                        <div className="rightinner col-sm-12 col-lg-8">
                            <p className="loginheader"></p>
                            <p className="loginsubheader"></p>
                            <form onSubmit={this.handleSubmit}>
                                <p>{this.props.email}</p>
                                <p>{this.props.firstname}</p>
                                <p>{this.props.lastname}</p>
                                <p>{this.props.token}</p>
                                <input className="inputs" id="email" type="text" placeholder="Email" onKeyUp={this.handleUpdate}/>
                                <input type="password" name="" id="password" className="inputs" placeholder="Password" onKeyUp={this.handleUpdate}/>
                                <p className="error_message">{this.state.error_message}</p>
                                <p className="error_message">{this.props.error_message}</p>
                                <button type="submit" className="submit" disabled>{this.loadingChecker()}</button>
                                <p className="alreadysignedup">Already have an account? <Link to="/signup">Signup</Link></p>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
       firstname : state.auth.userdetails.firstname,
       lastname : state.auth.userdetails.lastname,
       email : state.auth.userdetails.email,
       token : state.auth.userdetails.token,
       loading: state.auth.loading, 
       error_message : state.auth.error_message,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        login : (details) => dispatch(loginAction(details)),
        checkLoading : () => dispatch(checkLoading())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);