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
  useScroll,
  Loader,
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
      fog: true,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return (
    <>
      <water
        ref={ref}
        args={[geom, config]}
        rotation-x={-Math.PI / 2}
        position={[0, -480, 500]}
        fog={true}
        // onClick={(e) => console.log(e)}
      />
    </>
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

function ScrollContents() {
  const scrollRef = useRef();
  const data = useScroll();
  useFrame(() => {
    // console.log(data);
    // data.offset = current scroll position, between 0 and 1, dampened
    // data.delta = current delta, between 0 and 1, dampened
    // // Will be 0 when the scrollbar is at the starting position,
    // // then increase to 1 until 1 / 3 of the scroll distance is reached
    // const a = data.range(0, 1);
    // // console.log(a);
    // // Will start increasing when 1 / 3 of the scroll distance is reached,
    // // and reach 1 when it reaches 2 / 3rds.
    // const b = data.range(1 / 3, 1 / 3);
    // // Same as above but with a margin of 0.1 on both ends
    // const c = data.range(1 / 3, 1 / 3, 0.1);
    // // Will move between 0-1-0 for the selected range
    // const d = data.curve(1 / 3, 1 / 3);
    // // Same as above, but with a margin of 0.1 on both ends
    // const e = data.curve(1 / 3, 1 / 3, 0.1);
    // // Returns true if the offset is in range and false if it isn't
    // const f = data.visible(1 / 3, 2 / 3);
    // // The visible function can also receive a margin
    // const g = data.visible(2 / 3, 1 / 3, 0.1);
  });
  return (
    <group ref={scrollRef}>
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
            <IntroSection data={data} />

            {/* <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} />
              <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} />
              <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} />
              <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} /> */}
            {/* <Box /> */}

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
          turbidity={0.1}
          sunPosition={[5, 2, 1]}
          rayleigh={0.2}
          inclination={0.2}
          distance={10000}
        />
      </Suspense>
    </group>
  );
}
export default function ThreeTest() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 50], fov: 50, near: 1, far: 2000 }}>
        {/* <OrbitControls /> */}
        {/* <CameraHelper /> */}
        {/* <fogExp2 attach="fog" args={[0xffffff, 0.0005]} /> */}
        <fog attach="fog" args={[0xffffff, 50, 60]} />

        <ambientLight intensity={0.8} />
        <pointLight intensity={0.2} position={[0, 0, -1000]} />
        {/* <pointLight position={[100, 100, 100]} /> */}
        <pointLight position={[100, 100, 100]} />
        <ScrollControls damping={6} pages={10} distance={2}>
          <ScrollContents />
        </ScrollControls>

        {/* <Rig /> */}
      </Canvas>
      <Loader />
    </>
  );
}
