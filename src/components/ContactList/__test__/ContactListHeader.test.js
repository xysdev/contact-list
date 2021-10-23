import { contacts } from './constants';
import ContactListHeader from './../ContactListHeader';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { config } from 'config/config';

afterEach(cleanup);

test('test rendering the contact list header', () => {
    const selectedTab = Object.keys(contacts)[0];
    const { getAllByTestId } = render(<ContactListHeader contacts={contacts} selectedTab={selectedTab} />);
    const listItems = getAllByTestId('contact-list-header-item');
    expect(listItems).toHaveLength(config.culture.alphabet.length);
    listItems.forEach((listItem) => {
        if (listItem.querySelector('sub').textContent < '1') {
            expect(listItem).toHaveClass('contact-list-header__item--disabled');
        }
        if (listItem.querySelector('span').textContent[0] === selectedTab) {
            expect(listItem).toHaveClass('contact-list-header__item--active');
        }
    });
});
