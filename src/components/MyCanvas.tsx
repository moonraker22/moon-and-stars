import { AdaptiveDpr, Loader, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

type Props = {};

const MyCanvas = ({ children }) => {
  return (
    <>
      <Canvas camera={{ fov: 65 }} gl={{ antialias: true }} dpr={[1, 2]}>
        <Suspense>
          <AdaptiveDpr pixelated />
          <Preload all />
          {children}
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{ background: "black" }} // Flex layout styles
        innerStyles={{ border: "1px solid", borderRadius: "10px" }} // Inner container styles
        barStyles={{ height: "10px" }} // Loading-bar styles
        dataStyles={{ color: "white", fontSize: "2em" }} // Text styles
        // dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
        initialState={(active) => {
          return active;
        }} // Initial black out state/
      />
    </>
  );
};

export default MyCanvas;
