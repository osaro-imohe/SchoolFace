import React, {Component} from  'react';
import NewPost from '../Sections/NewPost.js';
import '../../Css/Sections/PostContainer.css';
import {connect} from 'react-redux';
import {newPostAction} from '../../Store/Actions/newPostAction.js';

class PostsContainer extends Component{
    details = {
        post_details : {
            catergory:'',
            post : '',
            image : '',
            video : '',
        },
        token : this.props.token,
    }
    submitPost = (e) =>{
        e.preventDefault();
        if(document.querySelector('.custom-select__trigger span').textContent != 'Choose a post category' && document.querySelector('.postinput').value != ''){
            document.querySelector('.postinterests').classList.remove('error')
            document.querySelector('.postinput').classList.remove('error')
            this.details.post_details['catergory'] = document.querySelector('.custom-select__trigger span').textContent;
            this.details.post_details['post'] = document.querySelector('.postinput').value
            this.props.newPostAction(this.details)
        }else if(document.querySelector('.custom-select__trigger span').textContent === 'Choose a post category' && document.querySelector('.postinput').value != ''){
            document.querySelector('.postinterests').classList.add('error')
        }else if(document.querySelector('.custom-select__trigger span').textContent != 'Choose a post category' && document.querySelector('.postinput').value === ''){
            document.querySelector('.postinput').classList.add('error')
        }
    }
    render(){
        console.log(this.props.interests)
        return(
            <div className="postscontainer">
                <NewPost interests={this.props.interests} submitPost={this.submitPost}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        interests: state.posts.interests,
        token : state.auth.userdetails.token,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{ 
        newPostAction : (details) => dispatch(newPostAction(details))
    }
}  

export default connect(mapStateToProps,mapDispatchToProps)(PostsContainer);