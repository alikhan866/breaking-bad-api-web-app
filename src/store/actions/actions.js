export const SELECTED_ACTION = 'SELECTED_ACTION';
export const NUMBER_OF_CHARACTERS = 'NUMBER_OF_CHARACTERS'
export const selectAction = name => {
    return { type: SELECTED_ACTION, actionName: name };
};

export const numberOfCharacters = number => {
    return {
        type:NUMBER_OF_CHARACTERS,
        numberOfCharacters:number
    }
}