import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import React, { useEffect, useRef } from "react";



const ModelArea = (props) => {
  let box;

  const onSceneReady = (scene: Scene) => {
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7
    box = MeshBuilder.CreateBox("box", {size: 2}, scene);
    box.position.y = 1;
    MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene)
  }

  const onRender = (scene: Scene) => {
    if (box !== undefined) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();
      const rpm = 10;
      box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  }

  return (
  <div className="modelArea">
    <Canvas antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
  </div>);
};

const Canvas = (props)=> {
  const reactCanvas = useRef(null);
  const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest } = props;

  useEffect(()=>{
    if (reactCanvas.current) {
      const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
      const scene = new Scene(engine, sceneOptions);
      if (scene.isReady()) {
        props.onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce(scene => props.onSceneReady(scene));
      }

      engine.runRenderLoop(()=>{
        if (typeof onRender === "function") {
          onRender(scene)
        }
        scene.render();
      });

      const resize = () => {
        scene.getEngine().resize();
      }

      if (window) {
        window.addEventListener("resize", resize)
      }

      return () => {
        scene.getEngine().dispose();

        if (window) {
          window.removeEventListener("resize", resize);
        }
      }

    }
  }, [reactCanvas])
  return (<canvas ref={reactCanvas} {...rest} />)
}

export default ModelArea;
