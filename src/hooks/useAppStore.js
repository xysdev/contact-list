import { useCallback } from 'react';
import { useAppState } from 'store/context/Provider';

//Must be used inside of the <Provider />
//if you want to change the app state management modify this hook

export const useAppStore = (selector) => {
    const state = useAppState();
    const stateSelector = useCallback(
        (selector) => {
            return selector(state);
        },
        [state],
    );

    return stateSelector(selector);
};
