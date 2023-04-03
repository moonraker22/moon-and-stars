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
        containerStyles={{
          backgroundImage: "linear-gradient(to bottom, #434343 0%, black 100%)",
        }} // Flex layout styles
        innerStyles={{ border: "1px solid", borderRadius: "10px" }} // Inner container styles
        barStyles={{ height: "10px" }} // Loading-bar styles
        dataStyles={{
          color: "white",
          fontSize: "1.75em",
          background: "-webkit-linear-gradient(#fff, #444, #fff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }} // Text styles
        // dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} // Text
        initialState={(active) => {
          return active;
        }} // Initial black out state/
      />
    </>
  );
};

export default MyCanvas;
