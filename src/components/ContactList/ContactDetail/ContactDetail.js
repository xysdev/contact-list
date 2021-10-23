import { useRef } from 'react';
import { useOutsideClick } from 'hooks/useOutsideClick';

const ContactDetail = ({ setOpen, contact, modalStyle }) => {
    const contactDetail = useRef(null);
    useOutsideClick(contactDetail, () => {
        setOpen(false);
    });
    return (
        <div className="contact-detail" ref={contactDetail} style={modalStyle} data-testid="contact-detail">
            <span
                className="contact-detail__close-button"
                onClick={() => {
                    setOpen(false);
                }}
            >
                &#10006;
            </span>
            
            <div className="contact-detail__image-container">
                <img className="contact-detail__image " src={contact.picture.medium} alt="contact" data-testid="user-image"/>
            </div>
            <div>
                <span className="contact-detail__full-name">{`${contact.name.last}, ${contact.name.first}`}</span>
                <div className="contact-detail__username-badge">username {contact.login.username}</div>
                <table className="contact-detail__info-table">
                    <tbody>
                        <tr>
                            <td>
                                <strong>email</strong>
                            </td>
                            <td>{contact.email}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>phone</strong>
                            </td>
                            <td>{contact.phone}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>street</strong>
                            </td>
                            <td>{contact.location.street.name}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>city</strong>
                            </td>
                            <td>{contact.location.city}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>state</strong>
                            </td>
                            <td>{contact.location.state}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>postcode</strong>
                            </td>
                            <td>{contact.location.postcode}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ContactDetail;
