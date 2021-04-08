import {
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Scene,
  Vector3,
  Size,
} from "@babylonjs/core";

export const createCamera = (scene: Scene): void => {
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 4,
    Math.PI / 3,
    150,
    new Vector3(0, 10, 0),
    scene
  ); // Камера (Vector3 - координаты точки(направления))
  camera.setTarget(Vector3.Zero()); // Направление камеры
  const canvas = scene.getEngine().getRenderingCanvas(); // Получение движка сцены -> получение контекстного элемента canvas
  camera.attachControl(canvas, true); // Привязка кнопок клавиатуры
  camera.upperBetaLimit = Math.PI / 2;
  camera.lowerBetaLimit = Math.PI / 6;
  camera.lowerRadiusLimit = 20;
  camera.upperRadiusLimit = 100;
};

export const createLight = (scene: Scene): void => {
  const light = new HemisphericLight("light", new Vector3(0, 100, 0), scene); // Источник света
  light.intensity = 0.7;
};

export const createGround = (scene: Scene): void => {
  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 50, height: 50 },
    scene
  );
  ground.material = new StandardMaterial("groundMaterial", scene);
};

export const createConnection = (scene: Scene) => {
  const connection1 = MeshBuilder.CreateBox(
    "con1",
    { width: 1, height: 1, depth: 10 },
    scene
  );
  connection1.position = new Vector3(0, 0.5, 0);
  const connection2 = MeshBuilder.CreateBox(
    "con1",
    { width: 1, height: 1, depth: 10 },
    scene
  );
  connection2.position = new Vector3(-1, 5, 4.5);
  connection2.rotation.x = Math.PI / 2;
};