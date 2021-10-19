const ContactListItem = ({contact}) => {
    return (
        <li>
            {`${contact.name.last}, ${contact.name.first}`}
            {/* <ContactDetail open={open} setOpen={setOpen} /> */}
        </li>
    );
};
export default ContactListItem;
