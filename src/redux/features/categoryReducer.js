export function categoryReducer(state='',action){
    if(action.type === 'EDIT_CATEGORY'){
        return  action.payload + 1;
    }
    return state
};