import axios from 'axios';


export const loadPostAction = (details) =>{
    return(dispatch,getState) => {
        //NOTE : AXIOS .GET METHOD REQUIRES FOLLOWS THE FOLLOWING STRUCTURE :   URL FOLLOWED BY THE HEADER OR DATA E.G
        //FOR EXAMPLE = axios.get('http://127.0.0.1:8000/dashboard',{ headers: { Authorization: `Token ${details.token}` } }) WOULD WORK
        

        //NOTE : AXIOS .POST METHO REQUEIRES THE FOLLOWING STRUCTURE : URL FOLLOWED BY DATA FOLLOWED BY HEADER
        //FOR EXAMPLE = axios.post('http://127.0.0.1:8000/dashboard',null, { headers: { Authorization: `Token ${details.token}` } }) WOULD WORK FOR A POST REQUEST
        //NULL IS BEING USED IN PLACE OF THE DATA PROPERTY SINCE THERE IS NO DATA PROPERTY BEING PASSED INTO THE AXIOS POST REQUEST

        axios.get('http://127.0.0.1:8000/dashboard',{ headers: { Authorization: `Token ${details.token}` } })
            .then(resp => dispatch({type : 'GET_POSTS', payload : resp.data}))
                .catch(err => dispatch({type: 'ERROR', payload : err}))
    }
}