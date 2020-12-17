import dollData from '../data/kukuclara.json';

export const dollsReducer = () => JSON.parse(JSON.stringify(dollData));

export const selectedDollReducer = (selectedDoll = null, action) => {
    if (action.type === 'DOLL_SELECTED') {
        return action.payload;
    }
    return selectedDoll;
};