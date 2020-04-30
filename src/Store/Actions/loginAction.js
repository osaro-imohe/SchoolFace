import axios from 'axios';


export const loginAction = (details) =>{
    return(dispatch,getState) => {
        axios.post('http://127.0.0.1:8000/login',details)
            .then(resp => {dispatch({ type:'LOGIN_ACTION', payload:resp.data,})})
                .catch(err => {dispatch({ type:'ERROR', payload:err,})})
    }
}