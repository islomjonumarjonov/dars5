import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch ((type, payload)) {
    case "SET_USER":
      console.log(user);
      return { ...state, user: true };
    // case "INCREMENT":
    //   return (state += 1);
    // case "DECREMENT":
    //   return (state -= 1);
    // case "ADD_INCREMENT":
    //   return (state = state + payload);
    // case "ADD_DECREMENT":
    //   return (state = state - payload);
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
