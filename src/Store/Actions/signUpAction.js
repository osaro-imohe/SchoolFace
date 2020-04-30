import axios from 'axios';

export const signUpAction = (details) =>{
    return( dispatch, getState ) => {
        axios.post('http://127.0.0.1:8000/signup',details)
            .then(resp => {dispatch({type:'SIGNUP', payload:resp.data})})
                .catch(err => {dispatch({type : 'ERROR', payload : err,})})
    }
};