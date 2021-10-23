import { render } from '@testing-library/react';
import { contacts } from 'components/ContactList/__test__/constants';
import ContactDetail from '../ContactDetail';

test('contact list item render without issue', () => {
    const contact = contacts.a[0];
    const { getByText,getByTestId } = render(<ContactDetail contact={contact} />);
    expect(getByText(`${contact.name.last}, ${contact.name.first}`)).toBeTruthy();
    expect(getByText(`username ${contact.login.username}`)).toBeTruthy();
    expect(getByTestId("user-image")).toBeTruthy();
    expect(getByText(contact.email)).toBeTruthy();
    expect(getByText(contact.phone)).toBeTruthy();
    expect(getByText(contact.location.street.name)).toBeTruthy();
    expect(getByText(contact.location.city)).toBeTruthy();
    expect(getByText(contact.location.state)).toBeTruthy();
    expect(getByText(contact.location.postcode)).toBeTruthy();
    
});
