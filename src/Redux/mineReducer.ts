import {
  connectType,
  dataType,
  elemType,
  pointType,
  sectionType,
  stateMineType,
} from "./types";

const SET_DATA: string = "3dmodelingBabylonJS/SET_DATA",
  SET_SCALE_MINE: string = "3dmodelingBabylonJS/SET_SCALE_MINE",
  SET_MINE: string = "3dmodelingBabylonJS/SET_MINE";

const rounded = (numb: number, sign: number): number => {
  return parseFloat(numb.toFixed(sign));
};

const calculateSection = (
  { pointOne, pointTwo }: connectType,
  scale: pointType
): sectionType => {
  const X: number = pointTwo.point.x - pointOne.point.x;
  const Y: number = pointTwo.point.y - pointOne.point.y;
  const Z: number = pointTwo.point.z - pointOne.point.z;

  const len: number = Math.sqrt(X ** 2 + Y ** 2 + Z ** 2);

  const cosAlpha: number = X / len;
  const cosBetta: number = Y / len;
  const cosTetta: number = Z / len;

  return {
    center: {
      x: rounded((pointOne.point.x + X / 2) / 100, 3),
      y: rounded((pointOne.point.y + Y / 2) / 100, 3),
      z: rounded((pointOne.point.z + Z / 2) / 10, 3),
    },
    len: rounded(len / 100, 3),
    alpha: rounded(Math.acos(cosAlpha), 5),
    betta: rounded(Math.acos(cosBetta), 5),
    tetta: rounded(Math.acos(cosTetta), 5),
  };
};

const createConnection = (array: Array<elemType>): Array<connectType> => {
  type listPoint = {
    [key: string]: pointType;
  };

  let listPoint: listPoint = {};
  const arraysLinks: Array<Array<string>> = [];
  array.forEach((item) => {
    const point = { [item.id]: item.point };
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

const createMine = (
  connections: Array<connectType>,
  scale: pointType
): Array<sectionType> => {
  const mine = connections.map((item) => {
    return calculateSection(item, scale);
  });
  return mine;
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
  mine: [],
};

type stateType = typeof initialState | stateMineType;

type actionTypes = setDataType & setScaleType & setMineType;

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
          nodes: [...action.data.nodes],
        },
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
    case SET_MINE: {
      return {
        ...state,
        mine: [...action.mine],
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

type setMineType = {
  type: typeof SET_MINE;
  mine: Array<sectionType>;
};
export const setMine = (
  mine: Array<sectionType>
): setMineType => ({
  type: SET_MINE,
  mine,
});

/* Thunk */

export const loadData = (fileName: string): Function => async (
  dispatch: Function
) => {
  const data = await (await fetch(`http://localhost:5000/${fileName}`)).json();
  dispatch(setData(data));
  dispatch(changeConnections());
};

export const changeConnections = (): Function => (
  dispatch: Function,
  getState: Function
) => {
  const nodes: Array<elemType> = getState().mine.dataMine.nodes;
  const scale: pointType = getState().mine.scale;
  const connections: Array<connectType> = createConnection(nodes);
  const mine: Array<sectionType> = createMine(connections, scale)
  dispatch(setMine(mine));

};

export const changeScale = (scale: pointType): Function => (
  dispatch: Function
) => {
  dispatch(setScale(scale));
  dispatch(changeConnections());
};

export default mineReducer;
