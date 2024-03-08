import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, Image, MeshTransmissionMaterial } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    Torus002: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/torus.glb") as GLTFResult;
  const torus = useRef(null);

  const { viewport } = useThree();

  useFrame(() => {
    if (torus != null && torus.current != null) {
      // @ts-ignore
      torus.current.rotation.x += 0.01;
      //   torus.current.rotation.z = angle;

      // @ts-ignore
    }
  });
  const angle = THREE.MathUtils.degToRad(-30);

  //   const materialPropsControl = useControls({
  //     thickness: { value: 1.1, min: 0, max: 3, step: 0.05 },

  //     roughness: { value: 0.15, min: 0, max: 1, step: 0.01 },

  //     transmission: { value: 1, min: 0, max: 1, step: 0.1 },

  //     ior: { value: 0.2, min: 0, max: 3, step: 0.1 },

  //     chromaticAberration: { value: 0.8, min: 0, max: 1 },

  //     backside: { value: true },
  //   });

  const materialProps = {
    thickness: 1.5,

    roughness: 0.15,

    transmission: 1,

    ior: 2.5,

    chromaticAberration: 0.45,

    backside: true,
  };

  return (
    <group>
      {/* <Text
        // position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        // anchorX="center"
        // anchorY="middle"
      >
        hello world!
      </Text> */}
      <Image position={[0, -0.25, -1]} scale={[6, 8]} url="/bg2.png"></Image>

      <mesh
        ref={torus}
        // position={[0, 0.75, 0]}
        rotation={[0, 0, angle]}
        geometry={nodes.Torus002.geometry}
        material={materials["Material.001"]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/torus.glb");
