import { Engine, Scene } from "@babylonjs/core";
import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  createCamera,
  createConnection,
  createGround,
  createLight,
} from "../../Babylon/babylon";
import { getConnections } from "../../Redux/mineSelectors";
import { stateType } from "../../Redux/types";

type CanvasType = {
  antialias: boolean;
  onSceneReady: Function;
  id: string;
};

const ModelArea: FC = () => {
  const data = useSelector((state: stateType) => getConnections(state));
  console.log(data);

  const onSceneReady = (scene: Scene) => {
    createCamera(scene); // Создание камеры
    createLight(scene); // Создание источника света
    createConnection(scene);
    createGround(scene); // Создание земли
  };

  return (
    <div className="modelArea">
      <Canvas antialias={true} onSceneReady={onSceneReady} id="my-canvas" />
    </div>
  );
};

const Canvas: FC<CanvasType> = ({ antialias, onSceneReady, id, ...rest }) => {
  const reactCanvas = useRef(null);

  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(
        reactCanvas.current, // ссылка на html элемент canvas
        antialias
      );
      const scene = new Scene(engine);
      if (scene.isReady()) {
        onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce((scene: Scene) => onSceneReady(scene));
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
