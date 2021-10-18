import React, { useCallback, useContext } from "react";

const AppContext = React.createContext();
const AppContextUpdate = React.createContext();

export const useAppState = (selector) => {
  return useContext(AppContext).apply(null, [selector]);
};

export const useDispatch = () => {
  return useContext(AppContextUpdate);
};

export const AppContextProvider = ({
  children,
  store: { state, dispatch },
}) => {
  const getState = useCallback(
    (selector) => {
      return selector(state);
    },
    [state]
  );

  const setAppContext = (action) => {
    return dispatch(action);
  };
  return (
    <AppContext.Provider value={getState}>
      <AppContextUpdate.Provider value={setAppContext}>
        {children}
      </AppContextUpdate.Provider>
    </AppContext.Provider>
  );
};
