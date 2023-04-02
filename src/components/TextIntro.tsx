import { Billboard, Text3D, useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector3 } from "three";

const TextIntro = (texture, ...props) => {
  //   const { xPos } = useControls("X", {
  //     xPos: {
  //       value: 62,
  //       min: -1000,
  //       max: 1000,
  //       step: 1,
  //     },
  //   });

  //   const { yPos } = useControls("Y", {
  //     yPos: {
  //       value: -4,
  //       min: -1000,
  //       max: 1000,
  //       step: 1,
  //     },
  //   });

  //   const { zPos } = useControls("Z", {
  //     zPos: {
  //       value: -8,
  //       min: -1000,
  //       max: 1000,
  //       step: 1,
  //     },
  //   });
  const textRef = useRef<Mesh>(null!);

  const width = useThree((state) => state.size.width);
  const xPosition = width < 600 ? 41 : 62;
  const yPosition = width < 600 ? -31 : -4;
  const zPosition = width < 600 ? 10 : -8;
  const position = new Vector3(xPosition, yPosition, zPosition);

  //

  // const [matcapTexture] = useMatcapTexture("515151_DCDCDC_B7B7B7_9B9B9B", 256);
  const matcapTexture = useTexture("images/white-matcap.png");
  const scroll = useScroll();
  useFrame(() => {
    let visable = scroll.visible(0, 5 / scroll.pages);
    // console.log("🚀 ~ file: TextIntro.tsx:48 ~ useFrame ~ visable:", visable);
    let offset = scroll.offset;
    textRef.current.position.x = -offset * 150;
    textRef.current.visible = offset < 0.3;
  });
  return (
    <>
      <group {...props} position={position} scale={width / 1000}>
        <Billboard>
          <Text3D
            ref={textRef}
            font="fonts/Audiowide_Regular.json"
            size={7}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Hi I'm Zac
            <meshMatcapMaterial attach="material" matcap={matcapTexture} />
          </Text3D>
        </Billboard>
      </group>
    </>
  );
};

export default TextIntro;
