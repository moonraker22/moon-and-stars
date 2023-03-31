import { AdaptiveDpr, Loader, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

type Props = {};

const MyCanvas = ({ children }) => {
  return (
    <>
      <Suspense>
        <Canvas camera={{ fov: 65 }} gl={{ antialias: true }} dpr={[1, 2]}>
          <AdaptiveDpr pixelated />
          <Preload all />
          {children}
        </Canvas>
        <Loader />
      </Suspense>
    </>
  );
};

export default MyCanvas;
