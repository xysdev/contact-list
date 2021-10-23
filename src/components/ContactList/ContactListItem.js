const ContactListItem = ({ contact, onClick }) => {
    return (
        <li className="contact-list__item p-2" onClick={onClick} data-testid="contact-list-item">
            {`${contact.name.last}, ${contact.name.first}`}
        </li>
    );
};
export default ContactListItem;
