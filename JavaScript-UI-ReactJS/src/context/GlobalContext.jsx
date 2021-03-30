import React, { useState } from "react";
import { useInterval } from "react-use";

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }) => {
  const [createDate, _] = useState(() => new Date());
  const [currentDate, setUpdateDate] = useState(() => new Date());

  useInterval(() => {
    setUpdateDate(new Date());
  }, 1);

  return (
    <GlobalContext.Provider
      value={{
        createDate,
        currentDate
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
