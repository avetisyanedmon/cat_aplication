export function numberReducer(state=0, action){
    if(action.type === 'EDIT_NUMBER'){
        return state + 10;
    }
    return state;
}
