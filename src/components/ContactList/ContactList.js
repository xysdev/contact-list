import { useEffect, useState } from 'react';
import { getContacts } from '../../actions/contacts';
import { useAppState, useDispatch } from '../../context/context';
import ContactListHeader from './ContactListHeader';
import ContactListItem from './ContactListItem';

const ContactList = () => {
    const contacts = useAppState((state) => state.contacts.contacts);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    return (
        <div className="contact-list-container">
            <ContactListHeader contacts={contacts} selectCategory={setSelectedContacts} />
            <ul>
                {selectedContacts.map((contact) => {
                    return <ContactListItem contact={contact} key={contact.id} />;
                })}
            </ul>
        </div>
    );
};
export default ContactList;
