import { Action, State } from "@/types/toastTypes";
import reducer from "./reducer";

export let memoryState: State = { toasts: [] };
export const listeners: Array<(state: State) => void> = [];

export default function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
