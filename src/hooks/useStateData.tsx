import { StateContext } from "@/context/StateContext";
import { useContext } from "react";

export default function useStateData() {
  const context = useContext(StateContext);
  if (typeof context === "undefined") {
    throw new Error("useStateData hook error");
  }
  return context;
}
