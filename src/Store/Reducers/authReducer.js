const initState = {
    userdetails : {
        firstname : '',
        email : '',
        lastname : '',
        token : '',
    },
    loading : false,
    error_message : '',
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'SIGNUP':
            if(action.payload === "error"){
                return {...state, error_message:'This email address is alredy being used by another account',loading:false,};
            }else{
                return {userdetails : {...state.userdetails, firstname:action.payload.first_name, lastname:action.payload.last_name, email:action.payload.email, token:action.payload.token,},loading:false,};
            }
        
        case 'CHECK_LOADING_STATUS':
            return {...state,loading:action.payload,}
        
        case 'LOGIN_ACTION' :
            if(action.payload === 'Incorrect password'){
                return{...state, error_message : 'Incorrect password', loading : false,}
            }else if(action.payload === 'Incorrect Email Address'){
                return{...state, error_message : 'Incorrect Email Address', loading : false,}
            }else{
                return {userdetails:{...state.userdetails, firstname:action.payload.first_name, lastname:action.payload.last_name, email:action.payload.email, token:action.payload.token,},loading:false, error_message : '',}
            }
        case 'ERROR':
            console.log(action.payload)
            return {...state, error_message : 'Opps! Something went wrong. Please check your internet connection.', loading : false,}
            
            default:
                return state;
    }
    // return state;
}

export default authReducer;