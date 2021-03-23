const SET_DATA: string = "3dmodelingBabylonJS/SET_DATA",
  SET_SCALE_MINE: string = "3dmodelingBabylonJS/SET_SCALE_MINE";

const initialState: Object = {
  id: "",
  title: "",
  created: "",
  updated: "",
  nodes: [],
  scale: {
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1
  }
};

type stateType = typeof initialState;

type actionTypes = setDataType | setScaleType

const mineReducer = (state: Object = initialState, action: actionTypes): stateType => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        ...action.data,
        nodes: [...action.data.nodes],
      };
    }
    case SET_SCALE_MINE: {
      return {
        ...state,
        scale: {
          ...action.scale
        }
      }  
    }
    default: {
      return state;
    }
  }
};

export const setData = (data: Object): Object => ({type: SET_DATA, data });
type setDataType = {
  type: typeof SET_DATA,
  data: Object
}
export const setScale = (scale: Object): Object => ({type: SET_SCALE_MINE, scale})
type setScaleType = {
  type: typeof SET_SCALE_MINE,
  scale: Object
}
/* Thunk */

export const loadData = (fileName: string) => async (dispatch: any) => {
  const data = await (await fetch(`http://localhost:5000/${fileName}`)).json();
  dispatch(setData(data));
};

export default mineReducer;
