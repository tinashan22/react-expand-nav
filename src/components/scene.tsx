"use client";

import { Canvas, useFrame } from "@react-three/fiber";

// import Model from './Model';

import { Environment } from "@react-three/drei";
import { Model } from "./model";
import { useEffect, useRef } from "react";

export default function Scene() {
  return (
    <Canvas style={{ background: "#fff" }}>
      <Model />

      {/* <directionalLight color={"#fff"} intensity={3} position={[2, 6, 3]} /> */}
      <directionalLight color={"#0000FF"} intensity={3} position={[2, 6, 3]} />
      <directionalLight color={"#0000FF"} intensity={2} position={[-2, 6, 1]} />
      <Environment preset="city" />
    </Canvas>
  );
}
