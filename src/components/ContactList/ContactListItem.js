import { useState } from 'react';
import ContactDetail from './ContactDetail/ContactDetail.';

const ContactListItem = ({ contact, onClick }) => {
    return (
        <li className="contact-list__item p-2" onClick={onClick}>
            {`${contact.name.last}, ${contact.name.first}`}
        </li>
    );
};
export default ContactListItem;
