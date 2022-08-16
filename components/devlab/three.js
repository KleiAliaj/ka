import * as THREE from "three";
import React, { Suspense, useRef, useMemo } from "react";
import {
  Canvas,
  useFrame,
  useThree,
  extend,
  useLoader,
} from "@react-three/fiber";
import {
  Cloud,
  Sky,
  OrbitControls,
  ScrollControls,
  Scroll,
  TransformControls,
  Environment,
  Plane,
  GizmoViewcube,
  PresentationControls,
} from "@react-three/drei";
// import Sea from "./sea";
import { Water } from "three-stdlib";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { PerspectiveCamera } from "three";
import Intro from "../intro";
import IntroSection from "./intro";
// import { RepeatWrapping } from "three";
extend({ Water });

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    TextureLoader,
    "/assets/other/scene/waternormals.jpeg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x006e70,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, -480, 500]}
      // onClick={(e) => console.log(e)}
    />
  );
}

function Box() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20;
    ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z +=
        delta;
  });
  return (
    <mesh ref={ref} scale={2}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

function CameraHelper() {
  const camera = new PerspectiveCamera(50, 1, 5, 600);
  return <cameraHelper args={[camera]} />;
}

export default function ThreeTest() {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 50, near: 1, far: 2000 }}>
      {/* <OrbitControls /> */}
      {/* <CameraHelper /> */}
      {/* <fog attach="fog" args={[0xfff0ea, 10, 60]} /> */}

      <ambientLight intensity={0.8} />
      <pointLight intensity={0.2} position={[0, 0, -1000]} />
      {/* <pointLight position={[100, 100, 100]} /> */}
      <pointLight position={[100, 100, 100]} />

      <ScrollControls damping={6} pages={10} distance={10}>
        <Suspense fallback={null}>
          <Scroll>
            <PresentationControls
              global={false} // Spin globally or by dragging the model
              speed={1} // Speed factor
              rotation={[0, 0, 0]} // Default rotation
              polar={[-0.2, 0.4]} // Vertical limits
              azimuth={[-0.1, 0.1]} // Horizontal limits
              config={{ mass: 1, tension: 170, friction: 126 }} // Spring config
            >
              <IntroSection />

              {/* <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
              <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
              <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
              <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} /> */}
              <Box />

              {/* <Sea /> */}

              {/* <Environment
              ground
              preset="forest"
              near={1}
              far={1000}
              resolution={256}
            > */}
              {/* <Plane position={[0, 0, 0]} rotation={[1.55, 0, 0]} scale={500} /> */}

              {/* </Environment> */}
              {/* <TransformControls mode="translate"> */}
              <Ocean />
            </PresentationControls>
            {/* </TransformControls> */}
          </Scroll>
          <Sky
            azimuth={0.9}
            turbidity={1}
            rayleigh={0.5}
            inclination={0.6}
            distance={10000}
          />
        </Suspense>
      </ScrollControls>

      {/* <Rig /> */}
    </Canvas>
  );
}
