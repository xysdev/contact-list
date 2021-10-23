import { combineReducers } from 'context/combineReducers';
import contacts from './contacts';

const reducers = {
    contacts,
};

export const rootReducer = combineReducers(reducers);
