export default function reducer(state, action) {
    // console.log(action);
    if(action.type =='currency/set' ){
        return {        
            ...state,
            currency: action.payload
        }
    }
    return state;
        
}


