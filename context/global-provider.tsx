import React, { createContext, useContext, useState, useEffect } from "react";

import { getCurrentUser } from "@/lib/actions/user.action";
import type { GlobalContextType } from "@/types";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => useContext(GlobalContext);

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getCurrentUser()
      .then(response => {
        if (response) {
          setIsLoggedIn(true);
          setUser(response);
        } else {
          setIsLoading(false);
          setUser(null);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
