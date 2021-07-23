export const setNumber = () => {
    return {
        type: 'EDIT_NUMBER'
    }
};

export const setCategory = (id) => {
    return {
        type: 'EDIT_CATEGORY',
        payload: id
    }
}