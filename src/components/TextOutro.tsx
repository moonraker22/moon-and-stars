import {
  Billboard,
  Text3D,
  useMatcapTexture,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh } from "three";

const TextOutro = (texture, ...props) => {
  // const { xPos } = useControls("X", {
  //   xPos: {
  //     value: 104,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  // const { yPos } = useControls("Y", {
  //   yPos: {
  //     value: -23,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  // const { zPos } = useControls("Z", {
  //   zPos: {
  //     value: 14,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });
  const textRef1 = useRef<Mesh>(null!);
  const textRef2 = useRef<Group>(null!);

  const width = useThree((state) => state.size.width);
  const scale = width < 600 ? 1 : 1.1;
  // const xPosition = width < 600 ? 104 : 104;
  // const yPosition = width < 600 ? -44 : -23;
  // const zPosition = width < 600 ? 19 : 14;
  // const xPosition = width < 600 ? 104 : 104;
  // const yPosition = width < 600 ? -44 : -44;
  // const zPosition = width < 600 ? 19 : 19;
  // const position = new Vector3(xPosition, yPosition, zPosition);

  const [matcapTexture] = useMatcapTexture("515151_DCDCDC_B7B7B7_9B9B9B", 256);
  const scroll = useScroll();
  useFrame(() => {
    let visable = scroll.visible(0, 5 / scroll.pages);
    // console.log("🚀 ~ file: TextIntro.tsx:48 ~ useFrame ~ visable:", visable);
    let offset = scroll.offset;
    // textRef.current.position.x = -offset * 150;
    textRef1.current.visible = offset > 0.9;
    textRef2.current.visible = offset > 0.9;

    // console.log(
    //   "🚀 ~ file: TextOutro.tsx:68 ~ useFrame ~ offset",
    //   scroll.range(0, 13 / scroll.pages) * 72
    // );
    // textRef2.current.position.x = scroll.range(0, 13 / scroll.pages) * 72;
  });
  return (
    <>
      <group {...props} position={[104, -44, 19]} scale={scale} ref={textRef2}>
        <Billboard>
          <Text3D
            ref={textRef1}
            font="fonts/Audiowide_Regular.json"
            size={6}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Thanks for
            <meshMatcapMaterial attach="material" matcap={matcapTexture} />
          </Text3D>
          <Text3D
            // ref={textRef2}
            font="fonts/Audiowide_Regular.json"
            size={6}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[0, -40, 0]}
          >
            stopping by!
            <meshMatcapMaterial attach="material" matcap={matcapTexture} />
          </Text3D>
        </Billboard>
      </group>
    </>
  );
};

export default TextOutro;
