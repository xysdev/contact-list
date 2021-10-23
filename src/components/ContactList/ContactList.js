import { useEffect, useState } from 'react';
import { getContacts, setSelectedTab } from 'actions/contacts';
import { useAppState, useDispatch } from 'context/context';
import ContactDetail from './ContactDetail/ContactDetail';
import ContactListHeader from './ContactListHeader';
import ContactListItem from './ContactListItem';

const ContactList = () => {
    const { contacts, pending, selectedTab } = useAppState((state) => state.contacts);
    const [open, setOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(false);
    const [modalStyle, setModalStyle] = useState({});

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, []);
    const selectTab = (tab) => {
        dispatch(setSelectedTab(tab));
    };
    const selectContact = (event, contact) => {
        debugger
        setOpen(true);
        setModalStyle({ top: event.target.offsetTop+event.target.offsetHeight, left: event.target.offsetLeft, width: '500px' });
        setSelectedContact(contact);
    };
    return (
        <div className="d-flex">
            <div className="contact-list-container">
                <ContactListHeader contacts={contacts} selectTab={selectTab} selectedTab={selectedTab} />
                {pending ? (
                        <span>loading...</span>
                    ) : (
                        <ul className="contact-list p-4">
                            {contacts[selectedTab].map((contact) => {
                                return (
                                    <ContactListItem
                                        contact={contact}
                                        key={contact.id.value}
                                        onClick={(event) => {
                                            selectContact(event, contact);
                                        }}
                                    />
                                );
                            })}
                        </ul>
                    )}
                {/* <div className="contact-list-body">
                   
                </div> */}
                {open && <ContactDetail setOpen={setOpen} contact={selectedContact} modalStyle={modalStyle} />}
            </div>
        </div>
    );
};
export default ContactList;
