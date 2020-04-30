export const checkLoading = () =>{
    return(dispatch,getState) =>{
        dispatch({type:'CHECK_LOADING_STATUS',payload:true,})
    }
}