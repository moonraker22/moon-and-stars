/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Space Shuttle Orbiter by Zoe XR [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/bIAMfx1bHVY)
*/

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh726625651: THREE.Mesh;
    mesh726625651_1: THREE.Mesh;
    mesh726625651_2: THREE.Mesh;
    mesh1040749795: THREE.Mesh;
    mesh1040749795_1: THREE.Mesh;
    mesh124037832: THREE.Mesh;
    mesh124037832_1: THREE.Mesh;
    mesh1439717331: THREE.Mesh;
    mesh1439717331_1: THREE.Mesh;
    mesh1922035755: THREE.Mesh;
    mesh1922035755_1: THREE.Mesh;
    mesh566807635: THREE.Mesh;
    mesh566807635_1: THREE.Mesh;
    mesh1854527572: THREE.Mesh;
    mesh1854527572_1: THREE.Mesh;
    group1848871834: THREE.Mesh;
    group879436036: THREE.Mesh;
    group1853460324: THREE.Mesh;
    group1326452984: THREE.Mesh;
  };
  materials: {
    mat23: THREE.MeshStandardMaterial;
    mat21: THREE.MeshStandardMaterial;
    mat5: THREE.MeshStandardMaterial;
    mat14: THREE.MeshStandardMaterial;
  };
};

export default function Spaceshuttle(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("spaceshuttle.glb") as GLTFResult;
  const ref = useRef<THREE.Group>();

  // const { xPos } = useControls("X", {
  //   xPos: {
  //     value: -327,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  // const { yPos } = useControls("Y", {
  //   yPos: {
  //     value: -717,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  // const { zPos } = useControls("Z", {
  //   zPos: {
  //     value: 182,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });
  return (
    <group {...props} dispose={null} ref={ref} position={[-404, -189, 252]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh726625651.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh726625651_1.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh726625651_2.geometry}
        material={materials.mat5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1040749795.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1040749795_1.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh124037832.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh124037832_1.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1439717331.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1439717331_1.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1922035755.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1922035755_1.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh566807635.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh566807635_1.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1854527572.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1854527572_1.geometry}
        material={materials.mat14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1848871834.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group879436036.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1853460324.geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1326452984.geometry}
        material={materials.mat23}
      />
    </group>
  );
}

useGLTF.preload("spaceshuttle.glb");
