const initState = {
    interests: [],
    posts : [],
    hasInterests : false,
    loading : false,   
    error_message : '',
    interest_loading : false,
}

const postReducer = (state = initState, action) =>{
    switch(action.type){
        case 'GET_POSTS':
            if(action.payload.status === 'no interests'){
                return {...state,hasInterests : false, loading:false,error_message:'',}
            }else{
                return {...state, loading:false,hasInterests : true,error_message:'',interests : action.payload.interests,}
            }
        case 'START_LOADING':
            return{...state, loading : action.payload}
        case 'UPDATE_INTERESTS':
            return {...state,loading:false,interest_loading:true,hasInterests : true,}
        case 'ERROR':
            return {...state, loading:false, error_message : `Something went wrong, please make sure you're connected to the internet.`,}
    }
    return state;   
}

export default postReducer;