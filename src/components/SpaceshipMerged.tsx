/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube005_2: THREE.Mesh;
    Cube005_3: THREE.Mesh;
    Cube005_4: THREE.Mesh;
    Cube005_5: THREE.Mesh;
    Cube005_6: THREE.Mesh;
  };
  materials: {
    Flame: THREE.MeshStandardMaterial;
    Mat0: THREE.MeshStandardMaterial;
    Mat1: THREE.MeshStandardMaterial;
    Mat2: THREE.MeshStandardMaterial;
    Window_Frame: THREE.MeshStandardMaterial;
    Mat4: THREE.MeshStandardMaterial;
    Mat3: THREE.MeshStandardMaterial;
    Window: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Cube.003" | "CylinderAction";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Spaceship(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/spaceship.glb"
  ) as GLTFResult;

  // @ts-ignore
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(() => {
    actions["CylinderAction"].play().fadeIn(0.5);
    //   actions["Cube.003"].play();
  }, [actions]);

  // mesh emission material
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(1.5, 1.5, 0.3),
    emissive: new THREE.Color(1.7, 1.2, 1), // WHITE emissive COLOR
    emissiveIntensity: 4, // Intensity of emissive COLOR
  });
  material.toneMapped = false;
  material.needsUpdate = true;

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.set(
      Math.cos(t / 4) / 2,
      Math.sin(t / 4) / 2,
      Math.sin(t / 4) / 2
    );
  });
  for (const key in nodes) {
    if (nodes[key].isMesh) {
      nodes[key].castShadow = true;
      nodes[key].receiveShadow = true;
    }
  }

  // const { xPos } = useControls("X", {
  //   xPos: {
  //     value: 40,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  // const { yPos } = useControls("Y", {
  //   yPos: {
  //     value: -16,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  // const { zPos } = useControls("Z", {
  //   zPos: {
  //     value: 25,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  //
  // // });
  return (
    <group ref={group} {...props} dispose={null} position={[40, -16, 25]}>
      <group name="Scene">
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          //   material={materials.Flame}
          material={material}
          position={[0.01, -0.48, -1.61]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 0.46, 1]}
        />
        <group name="Cube003">
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials.Mat0}
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials.Mat1}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials.Mat2}
          />
          <mesh
            name="Cube005_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={materials.Window_Frame}
          />
          <mesh
            name="Cube005_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_4.geometry}
            material={materials.Mat4}
          />
          <mesh
            name="Cube005_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_5.geometry}
            material={materials.Mat3}
          />
          <mesh
            name="Cube005_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_6.geometry}
            material={materials.Window}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/spaceship.glb");

// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */

// import { Merged, useAnimations, useGLTF } from "@react-three/drei";
// import { createContext, useContext, useMemo, useRef } from "react";
// import * as THREE from "three";
// import { GLTF } from "three-stdlib";

// type ActionName = "Cube.003" | "CylinderAction";
// // type GLTFActions = Record<ActionName, THREE.AnimationAction>;
// interface GLTFAction extends THREE.AnimationClip {
//   name: ActionName;
// }

// type GLTFResult = GLTF & {
//   nodes: {
//     Cylinder: THREE.Mesh;
//     Cube005: THREE.Mesh;
//     Cube005_1: THREE.Mesh;
//     Cube005_2: THREE.Mesh;
//     Cube005_3: THREE.Mesh;
//     Cube005_4: THREE.Mesh;
//     Cube005_5: THREE.Mesh;
//     Cube005_6: THREE.Mesh;
//   };
//   materials: {
//     Flame: THREE.MeshStandardMaterial;
//     Mat0: THREE.MeshStandardMaterial;
//     Mat1: THREE.MeshStandardMaterial;
//     Mat2: THREE.MeshStandardMaterial;
//     Window_Frame: THREE.MeshStandardMaterial;
//     Mat4: THREE.MeshStandardMaterial;
//     Mat3: THREE.MeshStandardMaterial;
//     Window: THREE.MeshStandardMaterial;
//   };
// };

// const context = createContext(null!);
// export function Instances({ children, ...props }) {
//   const { nodes } = useGLTF("/spaceship.glb") as GLTFResult;
//   console.log("🚀 ~ file: SpaceshipMerged.tsx:42 ~ Instances ~ nodes:", nodes);
//   const instances = useMemo(
//     () => ({
//       Cylinder: nodes.Cylinder,
//       Cube: nodes.Cube005,
//       Cube1: nodes.Cube005_1,
//       Cube2: nodes.Cube005_2,
//       Cube3: nodes.Cube005_3,
//       Cube4: nodes.Cube005_4,
//       Cube5: nodes.Cube005_5,
//       Cube6: nodes.Cube005_6,
//     }),
//     [nodes]
//   );
//   return (
//     <Merged meshes={instances} {...props}>
//       {(instances) => (
//         <context.Provider value={instances} children={children} />
//       )}
//     </Merged>
//   );
// }

// export function SpaceshipMerged(props: JSX.IntrinsicElements["group"]) {
//   const instances = useContext(context);
//   const group = useRef<THREE.Group>();
//   //   const { actions } = useAnimations<GLTFActions>(animations, group);
//   const { nodes, materials, animations } = useGLTF(
//     "/spaceship.glb"
//   ) as GLTFResult;
//   const { actions } = useAnimations(animations, group);
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <instances.Cylinder
//           name="Cylinder"
//           position={[0.01, -0.48, -1.61]}
//           rotation={[Math.PI / 2, 0, 0]}
//           scale={[1, 0.46, 1]}
//         />
//         <group name="Cube003">
//           <instances.Cube name="Cube005" />
//           <instances.Cube1 name="Cube005_1" />
//           <instances.Cube2 name="Cube005_2" />
//           <instances.Cube3 name="Cube005_3" />
//           <instances.Cube4 name="Cube005_4" />
//           <instances.Cube5 name="Cube005_5" />
//           <instances.Cube6 name="Cube005_6" />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/spaceship.glb");
