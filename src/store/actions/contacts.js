import { getContactsApi } from 'api/contactsApi';
import { ACTIONS } from 'constants/actions';
import { sortAlphabetical } from 'utils/sortAlphabetical';

export const getContacts = () => {
    return async (dispatch) => {
        try {
            const contactsResult = await getContactsApi();
            const contacts = sortAlphabetical(contactsResult.data.results);
            const selectedTab = Object.keys(contacts).sort()[0];
            dispatch(setSelectedTab(selectedTab));
            dispatch(setContacts(contacts));
        } catch (error) {
            ///TODO: add toast later
            throw error;
        }
    };
};
export const setSelectedTab = (selectedTab) => {
    return {
        type: ACTIONS.CONTACTS.SET_SELECTED_TAB,
        payload: selectedTab,
    };
};
const setContacts = (contacts) => {
    return {
        type: ACTIONS.CONTACTS.SET_CONTACTS,
        payload: contacts,
    };
};
