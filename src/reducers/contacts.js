import { ACTIONS } from '../constants/actions';

const contactInitialState = {
    contacts: [],
    pending:true
};
const contacts = (state = contactInitialState, action) => {
    switch (action.type) {
        case ACTIONS.CONTACTS.SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                pending:false
            };
        case ACTIONS.CONTACTS.SET_SELECTED_TAB:
            return{
                ...state,
                selectedTab:action.payload
            }
        default:
            return state;
    }
};

export default contacts;
