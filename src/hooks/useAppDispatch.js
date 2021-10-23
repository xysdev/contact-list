import { useDispatch } from 'store/context/Provider';

//Must be used inside of the <Provider />
//if you want to change the app state management modify this hook

export const useAppDispatch = () => {
    const dispatch = useDispatch();
    const setAppState = (action) => {
        return dispatch(action);
    };
    return setAppState;
};
