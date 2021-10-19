import { ACTIONS } from '../constants/actions';

const contactInitialState = {
    contacts: [],
};
const contacts = (state = contactInitialState, action) => {
    switch (action.type) {
        case ACTIONS.CONTACTS.SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
            };
        default:
            return state;
    }
};

export default contacts;
