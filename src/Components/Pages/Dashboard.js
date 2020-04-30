import React, {Component} from 'react';
import '../../Css/Pages/Dashboard.css';
import {connect} from 'react-redux';
import Navigation from '../Sections/Navigaton.js';
import SubNavigation from '../Sections/SubNavigation.js';
import Header from '../Sections/Header.js';
import {loadPostAction} from '../../Store/Actions/loadPostAction.js';
import {startLoading} from '../../Store/Actions/startLoading.js';
import InterestSelect from '../Sections/InterestSelect.js';
import PostContainer from '../Sections/PostsContainer.js';

class Dashboard extends Component{
    state = {
        email : this.props.email,
        token : this.props.token,
    }
    closeSubNavigation = (e) =>{
        const mainbody = document.querySelector('.mainbody');
        if(mainbody.classList.contains('expand')){
            mainbody.classList.remove('expand');
        }else{
            mainbody.classList.add('expand');
        }
        
    }
    checkLoaded = () => {
        switch(this.props.loading){
            case true:
                return <div className="loading"></div>
            case false:
                return null
        }
    }
    checkError = () =>{
       if(this.props.error_message === ''){
            return null
       }else{
            return <p id="error_message">{this.props.error_message}</p>;
       }
    }
    componentDidMount = () =>{
        this.props.startloading();
        this.props.getPosts(this.state);
    }
    checkInterests = () =>{
        if(this.props.hasInterests && this.props.error_message === '' && this.props.loading === false){
            return (<PostContainer/>)
        }else if(!this.props.hasInterests && this.props.error_message === '' && this.props.loading === false){
            return(<InterestSelect/>)
        }else{
            return null
        }
    }
    render(){
        console.log(this.props.token)
        return(
            <div className="dashboard">
                <Navigation closeSubNavigation={this.closeSubNavigation}/>
                <SubNavigation/>
                <div className="mainbody">
                    <Header/>
                    {this.checkLoaded()}
                    {this.checkError()}
                    {this.checkInterests()}
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        email : state.auth.userdetails.email,
        token : state.auth.userdetails.token,
        loading : state.posts.loading,
        hasInterests : state.posts.hasInterests,
        error_message : state.posts.error_message,
    }
}

const MapDispatchToProps = (dispatch) => {
    return{
        getPosts : (details) => dispatch(loadPostAction(details)),
        startloading : () => dispatch(startLoading()),
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Dashboard);