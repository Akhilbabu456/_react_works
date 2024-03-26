import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  console.log(localStorage.getItem("token"))
  const [isLoggedIn, setIsLoggedIn] = useState(
    // JSON.parse(localStorage.getItem("token"))
  );

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
