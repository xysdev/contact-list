import { config } from '../../config/config';

const ContactListHeader = ({ contacts }) => {
    return (
        <ul className="contact-list-header">
            {config.tabs.map((tab) => {
                return (
                    <li className="contact-list-header__contact-list-header-item">
                        <span>
                            {tab}
                            <sub>{contacts[tab] ? contacts[tab].length : 0}</sub>
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default ContactListHeader;
