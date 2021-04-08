import { sectionType, stateType } from "./types";


export const getMine = (state: stateType): Array<sectionType> => {
  return state.mine.mine;
};
