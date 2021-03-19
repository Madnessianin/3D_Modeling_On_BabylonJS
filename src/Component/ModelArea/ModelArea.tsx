import {
  Engine,
  FreeCamera,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";
import React, { Ref, useEffect, useRef } from "react";

const ModelArea = (props) => {
  let box: Mesh;

  const onSceneReady = (scene: Scene) => {
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene); // Камера (Vector3 - координаты точки(направления))
    camera.setTarget(Vector3.Zero()); // Направление камеры
    const canvas = scene.getEngine().getRenderingCanvas(); // Получение движка сцены -> получение контекстного элемента canvas
    camera.attachControl(canvas, true); // Привязка кнопок клавиатуры
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene); // Источник света
    light.intensity = 0.7;
    box = MeshBuilder.CreateBox("box", { size: 3 }, scene); // Создание коробки
    box.position.y = 1;
    MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene); // Создание земли
  };

  const onRender = (scene: Scene) => {
    if (box !== undefined) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime(); // Возвращает время между кадрами
      const rpm = 10;
      box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000); // Задает скорость вращения
    }
  };

  return (
    <div className="modelArea">
      <Canvas
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="my-canvas"
      />
    </div>
  );
};

const Canvas = (props) => {
  const reactCanvas = useRef(null);
  const {
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    onSceneReady,
    ...rest
  } = props;

  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(
        reactCanvas.current, // ссылка на контекс
        antialias, // включение сглаживания
        engineOptions, // дополнитедьные параметры движка
        adaptToDeviceRatio // фдаптированость к конкретному устройству
      );
      const scene = new Scene(engine, sceneOptions);
      if (scene.isReady()) {
        props.onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce((scene) => props.onSceneReady(scene));
      }
      engine.runRenderLoop(() => {
        if (typeof onRender === "function") { // Запуск рендоринга
          onRender(scene);
        }
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
  return <canvas ref={reactCanvas} {...rest} />;
};

export default ModelArea;
