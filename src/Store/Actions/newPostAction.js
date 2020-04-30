import axios from 'axios';

export const newPostAction = (details) =>{
    return(dispatch,getState)=>{
        axios.post('http://127.0.0.1:8000/posts',{'post_details':details.post_details},{ headers : {Authorization :`Token ${details.token}`}})
        //     .then()
        //         .catch()
        console.log(details)
    }
}