const ContactListItem = ({ contact, onClick }) => {
    return (
        <li className="contact-list__item " onClick={onClick} data-testid="contact-list-item">
            {`${contact.name.last}, ${contact.name.first}`}
        </li>
    );
};
export default ContactListItem;
