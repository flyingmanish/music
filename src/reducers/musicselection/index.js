const iState = {
   currenturl:"http//:mysong.com",

}; 

const musicselection = (state=iState,action) => {
    if(action.type === "CHANGE_SONG"){
        return {
            ...state,
            currenturl:"demourl"
        }

    }else{
        return {state};
    }
    
}
export default musicselection;