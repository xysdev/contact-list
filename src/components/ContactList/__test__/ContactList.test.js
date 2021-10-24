import { cleanup, render, fireEvent } from '@testing-library/react';
import ContactList from './../ContactList';
 import { useAppStore } from 'hooks/useAppStore';
import { contacts } from './constants';

afterEach(cleanup);

const mockDispatch = jest.fn();
jest.mock('hooks/useAppStore', () => ({
    useAppStore: jest.fn(),
}));
jest.mock('hooks/useAppDispatch', () => ({
    useAppDispatch: () => mockDispatch,
}));


test('test rendering in initial state without error', () => {
    useAppStore.mockImplementation((selectorFn) => {
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
    useAppStore.mockImplementation((selectorFn) => {
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
    useAppStore.mockImplementation((selectorFn) => {
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
