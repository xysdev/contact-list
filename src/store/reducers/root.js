import { combineReducers } from 'store/context/combineReducers';
import contacts from './contacts';

const reducers = {
    contacts,
};

export const rootReducer = combineReducers(reducers);
