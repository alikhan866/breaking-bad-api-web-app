import { SELECTED_ACTION,NUMBER_OF_CHARACTERS} from '../actions/actions';

const initialState = {
    actionName: '',
    numberOfCharacters:''
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_ACTION:
            return {
                ...state,
                actionName:action.actionName
            };
        case NUMBER_OF_CHARACTERS:
            return {
                ...state,
                numberOfCharacters:action.numberOfCharacters
            }
        default:
            return state;
    }
};

export default Reducer;
