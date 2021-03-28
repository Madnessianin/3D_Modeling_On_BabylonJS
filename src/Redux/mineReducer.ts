const SET_DATA: string = "3dmodelingBabylonJS/SET_DATA",
  SET_SCALE_MINE: string = "3dmodelingBabylonJS/SET_SCALE_MINE",
  SET_CONNECTIONS: string = "3dmodelingBabylonJS/SET_CONNECTIONS";
type pointType = {
  x: number;
  y: number;
  z: number;
};

type elemType = {
  id: string;
  point: pointType;
  linkedNodes: Array<string>;
};

type dataType = {
  id: string;
  title: string;
  created: string;
  updated: string;
  nodes: Array<elemType>;
};

type connectElemType = {
  id: string;
  point: {
    x: number;
    y: number;
    z: number;
  };
};

type connectType = {
  pointOne: connectElemType;
  pointTwo: connectElemType;
};

const changePoint = (point: pointType, scale: pointType): pointType => {
  const newPoint: pointType = {
    x: point.x / scale.x,
    y: point.y / scale.y,
    z: point.z / scale.z
  }
  return newPoint
}

const createConnection = (array: Array<elemType>, scale: pointType): Array<connectType> => {
  type listPoint = {
    [key: string]: pointType;
  };

  let listPoint: listPoint = {};
  const arraysLinks: Array<Array<string>> = [];
  array.forEach((item) => {
    const point = { [item.id]: changePoint(item.point, scale) };
    listPoint = {
      ...listPoint,
      ...point,
    };
    arraysLinks.push([...item.linkedNodes]);
  });

  const arrayIdPoint: Array<string> = Object.keys(listPoint);
  const arrayIdProcessedPoint: Array<string> = [];
  const connections: Array<connectType> = [];

  arraysLinks.forEach((item, index) => {
    arrayIdProcessedPoint.push(arrayIdPoint[index]);
    item.forEach((elem) => {
      if (arrayIdProcessedPoint.indexOf(elem) === -1) {
        connections.push({
          pointOne: {
            id: arrayIdPoint[index],
            point: {
              ...listPoint[arrayIdPoint[index]],
            },
          },
          pointTwo: {
            id: elem,
            point: {
              ...listPoint[elem],
            },
          },
        });
      }
    });
  });
  return connections;
};

const initialState: Object = {
  dataMine: {
    id: "",
    title: "",
    created: "",
    updated: "",
    nodes: [],
  },
  scale: {
    x: 100,
    y: 100,
    z: 10,
  },
  connections: [],
};

type stateType = typeof initialState;

type actionTypes = setDataType & setScaleType & setConnectionsType;

const mineReducer = (
  state: stateType = initialState,
  action: actionTypes
): stateType => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        dataMine: {
          ...action.data,
          nodes: [
            ...action.data.nodes
          ],
        }
      };
    }
    case SET_SCALE_MINE: {
      return {
        ...state,
        scale: {
          ...action.scale,
        },
      };
    }
    case SET_CONNECTIONS: {
      return {
        ...state,
        connections: [
          ...action.connections
        ],
      };
    }
    default: {
      return state;
    }
  }
};
type setDataType = {
  type: typeof SET_DATA;
  data: dataType;
};
export const setData = (data: dataType): setDataType => ({
  type: SET_DATA,
  data,
});

type setScaleType = {
  type: typeof SET_SCALE_MINE;
  scale: pointType;
};
export const setScale = (scale: pointType): setScaleType => ({
  type: SET_SCALE_MINE,
  scale,
});

type setConnectionsType = {
  type: typeof SET_CONNECTIONS,
  connections: Array<connectType>
}
export const setConnections = (connections: Array<connectType>): setConnectionsType => ({
  type: SET_CONNECTIONS,
  connections
})

/* Thunk */

export const loadData = (fileName: string): Function => async (dispatch: Function) => {
  const data = await (await fetch(`http://localhost:5000/${fileName}`)).json();
  dispatch(setData(data));
  dispatch(changeConnections())
};

export const changeConnections = (): Function => (dispatch: Function, getState: Function) => {
  const nodes: Array<elemType> = getState().mine.dataMine.nodes;
  const scale: pointType = getState().mine.scale;
  const connections: Array<connectType> = createConnection(nodes, scale);
  dispatch(setConnections(connections));
}

export const changeScale = (scale: pointType): Function => (dispatch: Function) => {
  dispatch(setScale(scale))
  dispatch(changeConnections())
}

export default mineReducer;
