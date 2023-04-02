import { useTexture } from "@react-three/drei";
import { AdditiveBlending, BackSide, Color, Mesh, Vector3 } from "three";

// import earthDay from "../assets/images/earth-day.jpg";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import atmoFrag from "../assets/glsl/atmoFrag.glsl?raw";
import atmoVert from "../assets/glsl/atmoVert.glsl?raw";
import earthFrag from "../assets/glsl/earthFrag.glsl?raw";
import earthVert from "../assets/glsl/earthVert.glsl?raw";

const Earth = ({ ...props }) => {
  const ref = useRef<Mesh>(null!);
  const earthDay = useTexture("images/earth-clouds.jpg");
  // const emmisiveMap = useTexture("images/earth-water.jpg");

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <group {...props}>
      <mesh scale={1.1} position-z={-20} position-x={-1} position-y={-3}>
        <sphereGeometry args={[20, 32, 32]} />
        <shaderMaterial
          uniforms={{
            uDayTexture: { value: earthDay },
          }}
          vertexShader={atmoVert}
          fragmentShader={atmoFrag}
          blending={AdditiveBlending}
          transparent={true}
          side={BackSide}
        />
      </mesh>
      <mesh ref={ref}>
        <sphereGeometry args={[20, 32, 32]} />
        <shaderMaterial
          uniforms={{
            uDayTexture: { value: earthDay },
            uNightTexture: { value: earthDay },
            uSpecularTexture: { value: earthDay },
            uSunDirection: { value: new Vector3(10, 10, 0) },
            uScale: { value: 1.0 },
          }}
          vertexShader={earthVert}
          fragmentShader={earthFrag}
        />
        <meshStandardMaterial map={earthDay} color={new Color(2.0, 2.0, 2.0)} />
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
