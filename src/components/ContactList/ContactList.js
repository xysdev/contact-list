import { useEffect } from 'react';
import { getContacts } from '../../actions/contacts';
import { useAppState, useDispatch } from '../../context/context';
import ContactListHeader from './ContactListHeader';

const ContactList = () => {
    const contacts = useAppState((state) => state.contacts.contacts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    return (
        <div className="contact-list-container">
            <ContactListHeader contacts={contacts} />
        </div>
    );
};
export default ContactList;
