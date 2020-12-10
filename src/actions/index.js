// Action creator
export const selectDoll = doll => {
    // Return an action
    return {
        type: 'DOLL_SELECTED',
        payload: doll
    };
};
