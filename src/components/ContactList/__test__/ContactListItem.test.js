import { render } from '@testing-library/react';
import ContactListItem from './../ContactListItem';
import { contacts } from './constants';

test('contact list item render without issue', () => {
    const contact = contacts.a[0];
    const { getByText } = render(<ContactListItem contact={contact} />);
    expect(getByText(`${contact.name.last}, ${contact.name.first}`)).toBeTruthy();
});
