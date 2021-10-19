import { useAppState } from '../../context/context';

const ContactList = () => {
    const contacts = useAppState((state) => {
      debugger
        return state;
    });
    return <div className="contact-list-container"></div>;
};
export default ContactList;
