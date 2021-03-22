const SET_DATA: string = "3dmodelingBabylonJS/SET_DATA";

const initialState: Object = {
  id: "",
  title: "",
  created: "",
  updated: "",
  nodes: [],
};

type stateType = typeof initialState;

const mineReducer = (state: Object = initialState, action: any): stateType => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        ...action.data,
        nodes: [...action.data.nodes],
      };
    }
    default: {
      return state;
    }
  }
};

export const setData = (data: Object) => ({ type: SET_DATA, data });

/* Thunk */

export const loadData = (fileName: string) => async (dispatch: any) => {
  const data = await (await fetch(`http://localhost:5000/${fileName}`)).json();
  dispatch(setData(data));
};

export default mineReducer;
