import { Cloud, Text3D, Text, Image, Float, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

function IntroSection() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  console.log(w, h);

  return (
    <>
      {/* <Cloud
        position={[5, 5, -5]}
        speed={0.2}
        opacity={1}
        width={10}
        depth={1.5}
        segments={20}
      /> */}
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-1, 1.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <group
          scale={w > 38 ? 20 : 15}
          position={[w > 38 ? w / 4 : w / -120, w > 38 ? h / 6 : h / 9, -4]}
          rotation={[0, w > 38 ? -0.1 : 0, -0.005]}
        >
          <Image url="/assets/other/Ty-lofi.webp" alt="Ty" />
        </group>
      </Float>

      <group
        position={[w / -2.5, w > 38 ? h / 5 : h / 2.8, 0]}
        rotation={[0, 0.1, -0.005]}
        scale={w > 38 ? 1 : 0.7}
      >
        <Cloud scale={4} position={[34, 2, -45]} speed={0.8} opacity={0.5} />
        <Cloud position={[14, 2, -14]} speed={0.8} opacity={1} />
        <Cloud position={[4, -2, -35]} speed={0.8} opacity={0.5} />
        <Cloud position={[4, 2, -30]} speed={0.8} opacity={0.75} />
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.7} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Sparkles
            position={[25, 2, 0]}
            scale={8}
            color={0xffffff}
            count={10}
            size={20}
            speed={0.2}
          />

          <Text3D
            font={"/assets/other/scene/Baloo.json"}
            scale={5}
            color="0x44B7EF"
            bevelEnabled
            bevelSize={0.04}
          >
            Hi, I&apos;m Ty!
            <meshPhysicalMaterial attach="material" color="#44B7EF" />
          </Text3D>
          <group position={[15, -2.4, 0]}>
            <Text
              font={"/assets/other/scene/Baloo.json"}
              color="black"
              scale={18}
            >
              I am a developer, artist, and musician
            </Text>
            <Text
              font={"/assets/other/scene/Baloo.json"}
              color="black"
              scale={18}
              position={[-5.8, -2, 0]}
            >
              in Seattle Washington.
            </Text>
          </group>
        </Float>
      </group>
    </>
  );
}

export default IntroSection;
