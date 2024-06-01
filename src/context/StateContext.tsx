"use client";
import { ReactNode, createContext } from "react";

interface StateContextProps {}

export const StateContext = createContext<StateContextProps | null>(null);

export default function StateContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
}
