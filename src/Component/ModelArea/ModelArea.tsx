import {
  Engine,
  FreeCamera,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";
import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getConnections } from "../../Redux/mineSelectors";
import { stateType } from "../../Redux/types";

type CanvasType = {
  antialias: boolean;
  onSceneReady: Function;
  id: string;
};



const ModelArea:FC = () => {
  const data = useSelector((state: stateType) => getConnections(state));
  //console.log(data)
  const onSceneReady = (scene: Scene) => {
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene); // Камера (Vector3 - координаты точки(направления))
    camera.setTarget(Vector3.Zero()); // Направление камеры
    const canvas = scene.getEngine().getRenderingCanvas(); // Получение движка сцены -> получение контекстного элемента canvas
    camera.attachControl(canvas, true); // Привязка кнопок клавиатуры
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene); // Источник света
    light.intensity = 0.7;
    /* let boxOne: Mesh = MeshBuilder.CreateBox("box", { height: .1, width: .1, depth: 10 }, scene); // Создание коробки
    boxOne.position = new Vector3(0, 0, 0);
    boxOne.rotation.z =  Math.PI / 2;
    let boxTwo: Mesh = MeshBuilder.CreateBox("box", { height: .1, width: .1, depth: 10 }, scene); // Создание коробки
    boxTwo.position = new Vector3(0, 0, 0);
    boxTwo.rotation.y = Math.PI / 2; */
    let boxThree: Mesh = MeshBuilder.CreateBox("box", { height: .1, width: .1, depth: 10 }, scene); // Создание коробки
    boxThree.position = new Vector3(-5, -5, -5);
    //boxThree.rotation.x = Math.PI / 2;
    MeshBuilder.CreateGround("ground", { width: 2, height: 2 }, scene); // Создание земли
  };

  return (
    <div className="modelArea">
      <Canvas
        antialias
        onSceneReady={onSceneReady}
        id="my-canvas"
      />
    </div>
  );
};

const Canvas:FC<CanvasType> = ({
  antialias,
  onSceneReady,
  id,
  ...rest
}) => {
  const reactCanvas = useRef(null);

  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(
        reactCanvas.current, // ссылка на контекс
        antialias);
      const scene = new Scene(engine);
      if (scene.isReady()) {
        onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
      }
      engine.runRenderLoop(() => {
        scene.render();
      });

      const resize = () => {
        scene.getEngine().resize(); // Подгонка размеров отрисовки к размерам canvas
      };

      if (window) {
        window.addEventListener("resize", resize);
      }

      return () => {
        scene.getEngine().dispose(); // Некое выключение

        if (window) {
          window.removeEventListener("resize", resize);
        }
      };
    }
  }, [reactCanvas]);
  return <canvas className="canvas" ref={reactCanvas} {...rest} />;
};



export default ModelArea;
