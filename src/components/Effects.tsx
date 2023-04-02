import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
export default function Effects() {
  return (
    <>
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0}
          luminanceSmoothing={0.2}
          intensity={2.5}
          // width={Resizer.AUTO_SIZE} // render width
          // height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          // luminanceThreshold={0.3} // luminance threshold. Raise this value to mask out darker elements in the scene.
          // luminanceSmoothing={0.001}
          // height={500}
          blendFunction={BlendFunction.ADD}
        />
        {/* <Glitch /> */}
      </EffectComposer>
    </>
  );
}
