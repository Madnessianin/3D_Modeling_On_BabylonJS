export type pointType = {
  x: number;
  y: number;
  z: number;
};

export type elemType = {
  id: string;
  point: pointType;
  linkedNodes: Array<string>;
};

export type dataType = {
  id: string;
  title: string;
  created: string;
  updated: string;
  nodes: Array<elemType>;
};

export type connectElemType = {
  id: string;
  point: {
    x: number;
    y: number;
    z: number;
  };
};

export type connectType = {
  pointOne: connectElemType;
  pointTwo: connectElemType;
};

export type stateMineType = {
  dataMine: {
    id: string;
    title: string;
    created: string;
    updated: string;
    nodes: Array<elemType>;
  };
  scale: pointType;
  connections: Array<connectType>;
};

export type stateType = {
  mine: stateMineType;
};
