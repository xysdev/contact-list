import { useAppReducer } from 'hooks/useAppReducer';
import { rootReducer } from 'store/reducers/root';
import React, { useContext } from 'react';

const AppContext = React.createContext();
const AppContextUpdate = React.createContext();

export const useAppState = () => {
    return useContext(AppContext);
};

export const useDispatch = () => {
    return useContext(AppContextUpdate);
};

export const Provider = ({ children }) => {
    const [state, dispatch] = useAppReducer(rootReducer);
    return (
        <AppContext.Provider value={state}>
            <AppContextUpdate.Provider value={dispatch}>{children}</AppContextUpdate.Provider>
        </AppContext.Provider>
    );
};
