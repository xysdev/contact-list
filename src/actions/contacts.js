import { getContactsApi } from "../api/contactsApi";

export const getContacts = () => {
    return async (dispatch) => {
        const contactsResult = await getContactsApi();
        debugger
    };
};
const setContacts = (contacts) => {
    return {
        action: '',
        payload: contacts,
    };
};
