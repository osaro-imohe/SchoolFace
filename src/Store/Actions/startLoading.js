export const startLoading = () =>{
    return(dispatch, getState) => {
        dispatch({type:'START_LOADING',payload:true})
    }
}