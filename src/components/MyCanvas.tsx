import { Loader, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

type Props = {};

const MyCanvas = ({ children }) => {
  return (
    <>
      <Suspense>
        <Canvas camera={{ fov: 65 }}>
          <Preload all />
          {children}
        </Canvas>
        <Loader />
      </Suspense>
    </>
  );
};

export default MyCanvas;
