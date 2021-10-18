import { useEffect, useMemo, useReducer } from "react";
import { useCallback } from "react/cjs/react.development";
import { wrapAsync } from "./thunk";

export const ConfigureStore = (rootReducer) => {
  //Creating a global State for app
  const [state, normalDispatch] = useReducer(rootReducer, {});
  useEffect(() => {
    //Dispatching the INIT for setting the initial state values
    normalDispatch({ type: "@INIT" });
  }, []);

  const stateGetter = useCallback(() => {
    //Deep cloning the state in order to prevent
    // passing it by reference and having a read only value
    return JSON.parse(JSON.stringify(state));
  }, [state]);
  //creating an async dispatch
  const dispatch = useMemo(
    () => wrapAsync(normalDispatch, stateGetter),
    [normalDispatch, stateGetter]
  );

  return { state, dispatch };
};
