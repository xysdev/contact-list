import { useState, useMemo, useReducer,useCallback } from 'react';
import { wrapAsync } from 'utils/thunk';

export const useAppReducer = (rootReducer) => {
    const [isInitialized, setIsInitialized] = useState(false);
    //Creating a global State for app
    const [state, normalDispatch] = useReducer(rootReducer, {});

    const stateGetter = useCallback(() => {
        //Deep cloning the state in order to prevent
        // passing it by reference and having a read only value
        return JSON.parse(JSON.stringify(state));
    }, [state]);
    //creating an async dispatch
    const dispatch = useMemo(() => wrapAsync(normalDispatch, stateGetter), [normalDispatch, stateGetter]);
    ///TODO: improve the functionality
    if (!isInitialized) {
        normalDispatch({ type: '@INIT' });
        setIsInitialized(true);
    }

    return [state, dispatch];
};
