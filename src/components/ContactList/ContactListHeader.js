import { config } from '../../config/config';

const ContactListHeader = ({ contacts }) => {
    return (
        <ul>
            {config.tabs.map((tab) => {
                <li>
                    <span>{tab}<sub>{contacts[tab].length}</sub></span>
                </li>;
            })}
        </ul>
    );
};
