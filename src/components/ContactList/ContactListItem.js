const ContactListItem = ({ contact, onClick }) => {
    return (
        <li className="contact-list__item contact-list__item--hover " onClick={onClick} data-testid="contact-list-item">
            {`${contact.name.last}, ${contact.name.first}`}
        </li>
    );
};
export default ContactListItem;
