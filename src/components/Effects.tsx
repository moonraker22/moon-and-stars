import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <>
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          intensity={4.0}
          height={300}
        />
        {/* <Glitch /> */}
      </EffectComposer>
    </>
  );
}
