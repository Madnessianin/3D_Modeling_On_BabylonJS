import { stateType } from "./types";

export const getConnections = (state: stateType) => {
  return state.mine.connections;
};
