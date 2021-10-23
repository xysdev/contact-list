import { config } from 'config/config';

const ContactListHeader = ({ contacts, selectTab, selectedTab }) => {
    return (
        <ul className="contact-list-header">
            {config.culture.alphabet.map((tab) => {
                tab = tab.toLocaleLowerCase();
                const availableContacts = contacts[tab] ? contacts[tab].length : 0;
                return (
                    <li
                        data-testid="contact-list-header-item"
                        key={tab}
                        className={`contact-list-header__item px-2 py-2 ${availableContacts < 1 ? 'contact-list-header__item--disabled' : ''} ${
                            selectedTab === tab ? 'contact-list-header__item--active' : ''
                        }`}
                        onClick={() => {
                            if (availableContacts > 0) {
                                selectTab(tab);
                            }
                        }}
                    >
                        <span>
                            {tab}
                            <sub className="ml-2">{availableContacts}</sub>
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default ContactListHeader;
