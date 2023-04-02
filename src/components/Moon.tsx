import { useTexture } from "@react-three/drei";
import { Vector3 } from "three";

import moonFrag from "../assets/glsl/moonFrag.glsl?raw";
import moonVert from "../assets/glsl/moonVert.glsl?raw";

const Moon = () => {
  return (
    <group position={[0, 0, 200]}>
      <mesh>
        <sphereGeometry args={[30, 32, 32]} />
        <shaderMaterial
          attach="material"
          uniforms={{
            uTexture: { value: useTexture("/moon.jpeg") },
            uSunDirection: { value: new Vector3(10, 10, 5) },
            uScale: { value: 1.0 },
          }}
          vertexShader={moonVert}
          fragmentShader={moonFrag}
        />
      </mesh>
    </group>
  );
};

export default Moon;
