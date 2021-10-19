import { getContactsApi } from '../api/contactsApi';
import { ACTIONS } from '../constants/actions';
import { sortAlphabetical } from '../utils/sortAlphabetical';

export const getContacts = () => {
    return async (dispatch) => {
        // dispatch()
        const contactsResult = await getContactsApi();
        const contacts = sortAlphabetical(contactsResult.data.results);
        dispatch(setContacts(contacts));
    };
};
const setContacts = (contacts) => {
    return {
        type: ACTIONS.CONTACTS.SET_CONTACTS,
        payload: contacts,
    };
};
