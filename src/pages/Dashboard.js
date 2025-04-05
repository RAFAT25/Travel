
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";

export default function Dashboard() {
  return (
    <div style={{ height: "100vh", background: "#eef" }}>
      <h1 style={{ padding: 20 }}>لوحة التحكم</h1>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="orange" />
        </Box>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
