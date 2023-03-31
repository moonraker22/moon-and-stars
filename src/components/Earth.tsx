import { useTexture } from "@react-three/drei";
import { Color, Mesh } from "three";

// import earthDay from "../assets/images/earth-day.jpg";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Earth = ({ ...props }) => {
  const ref = useRef<Mesh>(null!);
  const earthDay = useTexture("images/earth-clouds.jpg");
  const emmisiveMap = useTexture("images/earth-water.jpg");

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <group {...props}>
      <mesh position-z={-20} position-x={-1} position-y={-3}>
        <sphereGeometry args={[21.75, 32, 32]} />
        <meshStandardMaterial
          emissive={"dodgerblue"}
          color={new Color(3.0, 3.0, 3.0)}
          emissiveIntensity={0.9}
        />
      </mesh>
      <mesh ref={ref}>
        <sphereGeometry args={[20, 32, 32]} />
        {/* <shaderMaterial
          uniforms={{
            uDayTexture: { value: earthDay },
            uNightTexture: { value: earthDay },
            uSpecularTexture: { value: earthDay },
            uSunDirection: { value: new Vector3(1.0, 0.0, 0.0) },
            uScale: { value: 1.0 },
          }}
          vertexShader={earthVert}
          fragmentShader={earthFrag}
        /> */}
        <meshStandardMaterial
          // emissiveMap={emmisiveMap}
          // emissiveIntensity={0.07}
          // emissive={"dodgerblue"}
          map={earthDay}
          color={new Color(2.0, 2.0, 2.0)}
        />
      </mesh>
    </group>
  );
};

export default Earth;
// const EarthMaterial = shaderMaterial(
//   {
//     uDayTexture: null,
//     uNightTexture: null,
//     uSpecularTexture: null,
//     uSunDirection: new Vector3(1.0, 0.0, 0.0),
//     uScale: null,
//   },
//   earthVert,
//   earthFrag
// );

// extend({ EarthMaterial });
