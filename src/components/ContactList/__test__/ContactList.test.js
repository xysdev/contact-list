import { cleanup, render, fireEvent } from '@testing-library/react';
import ContactList from './../ContactList';
import { useAppState } from 'store/context/context';
import { contacts } from './constants';

afterEach(cleanup);

const mockDispatch = jest.fn();
jest.mock('store/context/context', () => ({
    useAppState: jest.fn(),
    useDispatch: () => mockDispatch,
}));

test('test rendering in initial state without error', () => {
    useAppState.mockImplementation((selectorFn) => {
        return {
            contacts: {},
            pending: true,
            selectedTab: 'a',
        };
    });
    const { getAllByTestId } = render(<ContactList />);
    expect(getAllByTestId('loading-contacts')).toHaveLength(10);
});

test('test rendering the component with data', () => {
    useAppState.mockImplementation((selectorFn) => {
        return {
            contacts,
            pending: false,
            selectedTab: 'a',
        };
    });
    const { getAllByTestId } = render(<ContactList />);
    expect(getAllByTestId('contact-list-item')).toHaveLength(contacts['a'].length);
});


test('clicking on the contacts ', () => {
    useAppState.mockImplementation((selectorFn) => {
        return {
            contacts,
            pending: false,
            selectedTab: 'a',
        };
    });
    const { getAllByTestId, getByTestId } = render(<ContactList />);

    fireEvent.click(getAllByTestId('contact-list-item')[0]);

    expect(getByTestId("contact-detail")).toBeTruthy();
});
