import React, {Component} from 'react';
import '../../Css/Sections/InterestSelect.css';
import Art from '../../Images/Interests/art.svg';
import Books from '../../Images/Interests/books.svg';
import Business from '../../Images/Interests/business.svg';
import Cooking from '../../Images/Interests/cooking.svg';
import Design from '../../Images/Interests/design.svg';
import Economics from '../../Images/Interests/economics.svg';
import Education from '../../Images/Interests/education.svg';
import Fashion from '../../Images/Interests/fashion.svg';
import Finance from '../../Images/Interests/finance.svg';
import Food from '../../Images/Interests/food.svg';
import Health from '../../Images/Interests/health.svg';
import Journalism from '../../Images/Interests/journalism.svg';
import Marketing from '../../Images/Interests/marketing.svg';
import Mathematics from '../../Images/Interests/mathematics.svg';
import Movies from '../../Images/Interests/movies.svg';
import Music from '../../Images/Interests/music.svg';
import Photography from '../../Images/Interests/photography.svg';
import Science from '../../Images/Interests/science.svg';
import Sports from '../../Images/Interests/sports.svg';
import Technology from '../../Images/Interests/technology.svg';
import Travel from '../../Images/Interests/travel.svg';
import Writing from '../../Images/Interests/writing.svg';
import {connect} from 'react-redux';
import {updateInterests} from '../../Store/Actions/updateInterests.js';

class InterestSelect extends Component{
    state = {
        interests: [],
        loading:false,
    }
    interests = [
        {id:'1', title:'Art', images:Art,},
        {id:'2', title:'Books', images:Books,},
        {id:'3', title:'Business', images:Business,},
        {id:'4', title:'Cooking', images:Cooking,},
        {id:'5', title:'Design', images:Design,},
        {id:'6', title:'Economics', images:Economics,},
        {id:'7', title:'Education', images:Education,},
        {id:'8', title:'Fashion', images:Fashion,},
        {id:'9', title:'Finance', images:Finance,},
        {id:'10', title:'Food', images:Food,},
        {id:'11', title:'Health', images:Health,},
        {id:'12', title:'Journalism', images:Journalism,},
        {id:'13', title:'Marketing', images:Marketing,},
        {id:'14', title:'Mathematics', images:Mathematics,},
        {id:'15', title:'Movies', images:Movies,},
        {id:'15', title:'Music', images:Music,},
        {id:'16', title:'Photography', images:Photography,},
        {id:'17', title:'Science', images:Science,},
        {id:'18', title:'Sports', images:Sports,},
        {id:'19', title:'Technology', images:Technology,},
        {id:'20', title:'Travel', images:Travel,},
        {id:'21', title:'Writing', images:Writing,},
    ];
    interestClicked = (e) =>{
        e.stopPropagation()
        if(e.target.closest('.interestoptions').classList.contains('selected')){
            e.target.closest('.interestoptions').classList.remove('selected');
            switch(e.target.id){
                case 'Art':
                    if(this.state.interests.includes('Art')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Art'
                        })]})
                    }
                    break
                case 'Books':
                    if(this.state.interests.includes('Books')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Books'
                        })]})
                    }
                    break
                case 'Business':
                    if(this.state.interests.includes('Business')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Business'
                        })]})
                    }
                    break
                case 'Cooking':
                    if(this.state.interests.includes('Cooking')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Cooking'
                        })]})
                    }
                    break
                case 'Design':
                    if(this.state.interests.includes('Design')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Design'
                        })]})
                    }
                    break
                case 'Economics':
                    if(this.state.interests.includes('Economics')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Economics'
                        })]})
                    }
                    break
                case 'Education':
                    if(this.state.interests.includes('Education')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Education'
                        })]})
                    }
                    break
                case 'Fashion':
                    if(this.state.interests.includes('Fashion')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Fashion'
                        })]})
                    }
                    break
                case 'Finance':
                    if(this.state.interests.includes('Finance')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Finance'
                        })]})
                    }
                    break          
                case 'Food':
                    if(this.state.interests.includes('Food')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Food'
                        })]})
                    }
                    break
                case 'Health':
                    if(this.state.interests.includes('Health')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Health'
                        })]})
                    }
                    break
                case 'Journalism':
                    if(this.state.interests.includes('Journalism')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Journalism'
                        })]})
                    }
                    break
                case 'Marketing':
                    if(this.state.interests.includes('Marketing')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Marketing'
                        })]})
                    }
                    break
                case 'Mathematics':
                    if(this.state.interests.includes('Mathematics')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Mathematics'
                        })]})
                    }
                    break
                case 'Movies':
                    if(this.state.interests.includes('Movies')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Movies'
                        })]})
                    }
                    break
                case 'Music':
                    if(this.state.interests.includes('Music')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Music'
                        })]})
                    }
                    break
                case 'Photography':
                    if(this.state.interests.includes('Photography')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Photography'
                        })]})
                    }
                    break
                case 'Science':
                    if(this.state.interests.includes('Science')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Science'
                        })]})
                    }
                    break
                case 'Sports':
                    if(this.state.interests.includes('Sports')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Sports'
                        })]})
                    }
                    break
                case 'Technology':
                    if(this.state.interests.includes('Technology')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Technology'
                        })]})
                    }
                    break
                case 'Travel':
                    if(this.state.interests.includes('Travel')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Travel'
                        })]})
                    }
                    break
                case 'Writing':
                    if(this.state.interests.includes('Writing')){
                        this.setState({interests : [...this.state.interests.filter((interest) => {
                            return  interest !== 'Writing'
                        })]})
                    }
                    break      
            }
        }else if(!e.target.closest('.interestoptions').classList.contains('selected')){
            e.target.closest('.interestoptions').classList.add('selected');
            switch(e.target.id){
                case 'Art':
                        this.setState({interests : [...this.state.interests, 'Art']})
                    break
                case 'Books':
                        this.setState({interests : [...this.state.interests, 'Books']})
                    break
                case 'Business':
                        this.setState({interests : [...this.state.interests, 'Business']})
                    break
                case 'Cooking':
                        this.setState({interests : [...this.state.interests, 'Cooking']})
                    break
                case 'Design':
                        this.setState({interests : [...this.state.interests, 'Design']})
                    break
                case 'Economics':
                        this.setState({interests : [...this.state.interests, 'Economics']})
                    break
                case 'Education':
                        this.setState({interests : [...this.state.interests, 'Education']})
                    break
                case 'Fashion':
                        this.setState({interests : [...this.state.interests, 'Fashion']})
                    break
                case 'Finance':
                        this.setState({interests : [...this.state.interests, 'Finance']})
                    break
                case 'Food':
                        this.setState({interests : [...this.state.interests, 'Food']})
                    break
                case 'Health':
                        this.setState({interests : [...this.state.interests, 'Health']})
                    break
                case 'Journalism':
                        this.setState({interests : [...this.state.interests, 'Journalism']})
                    break
                case 'Marketing':
                        this.setState({interests : [...this.state.interests, 'Marketing']})
                    break
                case 'Mathematics':
                        this.setState({interests : [...this.state.interests, 'Mathematics']})
                    break
                case 'Movies':
                        this.setState({interests : [...this.state.interests, 'Movies']})
                    break
                case 'Music':
                        this.setState({interests : [...this.state.interests, 'Music']})
                    break
                case 'Photography':
                        this.setState({interests : [...this.state.interests, 'Photography']})
                    break
                case 'Science':
                        this.setState({interests : [...this.state.interests, 'Science']})
                    break
                case 'Sports':
                        this.setState({interests : [...this.state.interests, 'Sports']})
                    break
                case 'Technology':
                        this.setState({interests : [...this.state.interests, 'Technology']})
                    break
                case 'Travel':
                        this.setState({interests : [...this.state.interests, 'Travel']})
                    break
                case 'Writing':
                        this.setState({interests : [...this.state.interests, 'Writing']})
                    break
            }
        }
    }
    counter = () =>{
        switch(this.state.interests.length){
            case 0:
                return 'Pick 10 more interests to continue'
            case 1:
                return 'Pick 9 more interests to continue'
            case 2:
                return 'Pick 8 more interests to continue'
            case 3:
                return 'Pick 7 more interest to continue'
            case 4:
                return 'Pick 6 more interests to continue'
            case 5:
                return 'Pick 5 more interests to continue'
            case 6:
                return 'Pick 4 more interests to continue'
            case 7:
                return 'Pick 3 more interests to continue'
            case 8:
                return 'Pick 2 more interests to continue'
            case 9:
                return 'Pick 1 more interest to continue'
            case 10:
                return 'Continue'
            case 11:
                return 'Continue'
            case 12:
                return 'Continue'
            case 13:
                return 'Continue'
            case 14:
                return 'Continue'
            case 15:
                return 'Continue'
            case 16:
                return 'Continue'
            case 17:
                return 'Continue'
            case 18:
                return 'Continue'
            case 19:
                return 'Continue'
            case 20:
                return 'Continue'
            case 21:
                return 'Continue'
            case 22:
                return 'Continue'
        }
    }
    enableSubmit = () =>{
        if(this.state.interests.length >= 10){
            document.querySelector('.done').removeAttribute('disabled');
        }else if(document.querySelector('.done') && this.state.interests.length <= 10){
            document.querySelector('.done').disabled=true;
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const details = {
            interests:this.state.interests,
            token:this.props.token,
        }
        this.props.updateinterests(details)
    }
    render(){
        return(
            <div className="interestselect">
                <p className="theheader">Choose your intersts</p>
                <p className="subheader">We need your interests to help set up your feed.</p>
                <form action="" onSubmit={this.handleSubmit}>
                    <button className="done" type="submit" disabled>
                        {this.enableSubmit()}
                        <p className="counter">{this.counter()}</p>
                    </button>
                </form>
                {this.interests.map((interest) => {

                    return(
                        <div className="interestoptions" id={interest.title} onClick = {(event) => {this.interestClicked(event);}}>
                            <div className="interestinner" id={interest.title}>
                                <img className="interestimages" id={interest.title} src={interest.images}/>
                                <p className="interesttag" id={interest.title}>{interest.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        interestloading : state.posts.interest_loading,
        token : state.auth.userdetails.token,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        updateinterests : (details) => dispatch(updateInterests(details)) 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InterestSelect);