"use client";

import { LoginProps } from "@/types/login";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

type UserContextProps = {
  login: (data: LoginProps) => void;
  logout: () => void;
  user: LoginProps | null;
};

const UserContext = createContext<UserContextProps | null>(null);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
}

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<LoginProps | null>(null);

  const login = (userData: LoginProps) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    toast.error("Logout realizado!")
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
