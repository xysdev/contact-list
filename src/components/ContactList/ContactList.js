import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppStore } from 'hooks/useAppStore';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getContacts, setSelectedTab } from 'store/actions/contacts';
// import {  useDispatch } from 'store/context/context';
import ContactDetail from './ContactDetail/ContactDetail';
import ContactListHeader from './ContactListHeader';
import ContactListItem from './ContactListItem';


const ContactList = () => {
    const { contacts, pending, selectedTab } = useAppStore((state) => state.contacts);
    const [open, setOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(false);
    const [modalStyle, setModalStyle] = useState({});

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getContacts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const selectTab = (tab) => {
        dispatch(setSelectedTab(tab));
    };
    const selectContact = (event, contact) => {
        setOpen(true);
        setModalStyle({ top: event.target.offsetTop + event.target.offsetHeight, left: event.target.offsetLeft, width: '500px' });
        setSelectedContact(contact);
    };

    return (
        <div className="d-flex">
            <div className="contact-list-container">
                <ContactListHeader contacts={contacts} selectTab={selectTab} selectedTab={selectedTab} />
                <ul className="contact-list">
                    {pending
                        ? new Array(10).fill("loading...").map((value,index) => {
                              return (
                                  <li className="contact-list__item" data-testid="loading-contacts" key={index}>
                                      <Skeleton />
                                  </li>
                              );
                          })
                        : contacts[selectedTab].map((contact) => {
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

                {/* <div className="contact-list-body">
                   
                </div> */}
                {open && <ContactDetail setOpen={setOpen} contact={selectedContact} modalStyle={modalStyle} />}
            </div>
        </div>
    );
};
export default ContactList;
