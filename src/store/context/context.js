import { useAppReducer } from 'hooks/useAppReducer';
import { rootReducer } from 'store/reducers/root';
import React, { useCallback, useContext } from 'react';

const AppContext = React.createContext();
const AppContextUpdate = React.createContext();

export const useAppState = (selector) => {
    //having the same use like redux useSelector hook
    return useContext(AppContext).apply(null, [selector]);
};

export const useDispatch = () => {
    return useContext(AppContextUpdate);
};

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useAppReducer(rootReducer);
    const getState = useCallback(
        (selector) => {
            return selector(state);
        },
        [state],
    );

    const setAppContext = (action) => {
        return dispatch(action);
    };
    return (
        <AppContext.Provider value={getState}>
            <AppContextUpdate.Provider value={setAppContext}>{children}</AppContextUpdate.Provider>
        </AppContext.Provider>
    );
};
