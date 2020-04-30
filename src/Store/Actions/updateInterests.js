import axios from 'axios'

export const updateInterests = (details) => {
    console.log(details)
    return(dispatch,getState) =>{
        axios.post('http://localhost:8000/interests',{interests:details.interests},{headers:{Authorization : `Token ${details.token}`}})
        .then(res => {dispatch({type:'UPDATE_INTERESTS', payload : res.data,})})
            .catch(err => {dispatch({type:'ERROR', payload:err})})
    }
}