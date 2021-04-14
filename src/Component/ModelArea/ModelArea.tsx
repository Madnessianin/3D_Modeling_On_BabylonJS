import { Engine, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  createCamera,
  createConnection,
  createGround,
  createLight,
} from "../../Babylon/babylon";
import { getMine } from "../../Redux/mineSelectors";
import { sectionType, stateType } from "../../Redux/types";

type CanvasType = {
  antialias: boolean;
  onSceneReady: Function;
  id: string;
};

const ModelArea: FC = () => {

  const onSceneReady = (scene: Scene, data: Array<sectionType>) => {
    createCamera(scene); // Создание камеры
    createLight(scene); // Создание источника света
    createConnection(scene, data);
    //createGround(scene); // Создание земли
  };

  return (
    <div className="modelArea">
      <Canvas antialias={true} onSceneReady={onSceneReady} id="my-canvas" />
    </div>
  );
};

const Canvas: FC<CanvasType> = ({ antialias, onSceneReady, id, ...rest }) => {
  const reactCanvas = useRef(null);
  const data = useSelector((state: stateType) => getMine(state));

  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(
        reactCanvas.current, // ссылка на html элемент canvas
        antialias
      );
      const scene = new Scene(engine);
      if (scene.isReady()) {
        onSceneReady(scene, data);
      } else {
        scene.onReadyObservable.addOnce((scene: Scene) => onSceneReady(scene, data));
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
  }, [reactCanvas, data]);
  return <canvas className="canvas" ref={reactCanvas} {...rest} />;
};

export default ModelArea;
