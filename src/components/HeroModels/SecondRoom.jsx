import React from "react";
import { useGLTF } from "@react-three/drei";

export function SecondRoom(props) {
  const { nodes, materials } = useGLTF("/models/low_poly_living_room.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane_Material_0.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.7}
      />
    </group>
  );
}

useGLTF.preload("/models/low_poly_living_room.glb");
