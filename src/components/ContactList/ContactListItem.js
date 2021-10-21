import { useState } from "react";

const ContactListItem = ({ contact }) => {
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <li className="contact-list__item p-2">
            {`${contact.name.last}, ${contact.name.first}`}
            {/* <ContactDetail open={openModal} setOpen={setOpenModal} /> */}
        </li>
    );
};
export default ContactListItem;
