import { useEffect } from 'react';
import { getContacts, setSelectedTab } from '../../actions/contacts';
import { useAppState, useDispatch } from '../../context/context';
import ContactListHeader from './ContactListHeader';
import ContactListItem from './ContactListItem';

const ContactList = () => {
    const { contacts, pending, selectedTab } = useAppState((state) => state.contacts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    const selectTab = (tab) => {
        dispatch(setSelectedTab(tab));
    };
    return (
        <div className="d-flex">
            <div className="contact-list-container">
                <ContactListHeader contacts={contacts} selectTab={selectTab} selectedTab={selectedTab} />
                <div className="contact-list-body">
                    {pending ? (
                        <span>loading...</span>
                    ) : (
                        <ul className="contact-list p-4">
                            {contacts[selectedTab].map((contact) => {
                                return <ContactListItem contact={contact} key={contact.id.value} />;
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ContactList;
