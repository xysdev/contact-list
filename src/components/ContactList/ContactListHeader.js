import { config } from '../../config/config';

const ContactListHeader = ({ contacts, selectCategory }) => {
    return (
        <ul className="contact-list-header">
            {config.tabs.map((tab) => {
                tab = tab.toLocaleLowerCase();
                const availableContacts = contacts[tab] ? contacts[tab].length : 0;
                return (
                    <li
                        key={tab}
                        className={`contact-list-header__item ${availableContacts <= 0 ? 'contact-list-header__item--disabled' : ''}`}
                        onClick={() => {
                            selectCategory(contacts[tab] ? contacts[tab] : []);
                        }}
                    >
                        <span>
                            {tab}
                            <sub>{availableContacts}</sub>
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default ContactListHeader;
