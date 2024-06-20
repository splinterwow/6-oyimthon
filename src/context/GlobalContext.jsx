// import { createContext, useReducer } from "react";

// export const GlobalContext = createContext();

// const changeState = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "LOG_IN":
//       return { ...state, user: payload };
//     case "LOG_OUT":
//       return { ...state, user: null };
//     case "IS_AUTH_CHANGE":
//       return { ...state, isAuthChange: true };
//     default:
//       return state;
//   }
// };

// function GlobalContextProvider({ children }) {
//   const [state, dispatch] = useReducer(changeState, {
//     user: null,
//     product: [],
//     total: 0,
//     isAuthChange: false,
//   });
//   return (
//     <GlobalContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// }
// export default GlobalContextProvider;


import { createContext, useState } from 'react';

// Kontekst yaratish
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Foydalanuvchi ma'lumotlari

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
