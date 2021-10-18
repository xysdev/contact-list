import { useEffect, useMemo, useReducer } from "react";
import { useCallback } from "react/cjs/react.development";
import { wrapAsync } from "./thunk";

export const ConfigureStore = (rootReducer) => {
  const [state, normalDispatch] = useReducer(rootReducer, {});
  useEffect(() => {
    normalDispatch({ type: "@INIT" });
  }, []);

  const stateGetter = useCallback(() => {
    return state;
  }, [state]);

  const dispatch = useMemo(
    () => wrapAsync(normalDispatch, stateGetter),
    [normalDispatch, stateGetter]
  );

  return { state, dispatch };
};
