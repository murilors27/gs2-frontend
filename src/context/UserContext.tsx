"use client";

import { createContext, ReactNode, useContext } from "react";

type GenericContextProps = {
};

const GenericContext = createContext<GenericContextProps | null>(null);

export function useGeneric() {
  const context = useContext(GenericContext);
  if (!context) {
    throw new Error("useGeneric deve ser usado dentro de um GenericProvider");
  }
  return context;
}

export default function GenericProvider({ children }: { children: ReactNode }) {
  return (
    <GenericContext.Provider value={{}}>
      {children}
    </GenericContext.Provider>
  );
}
