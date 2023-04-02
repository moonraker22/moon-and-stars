import { animated, easings, useSpring } from "@react-spring/three";
import {
  Billboard,
  Text3D,
  useMatcapTexture,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, Mesh, MeshMatcapMaterial } from "three";

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
  const textMaterialRef = useRef<MeshMatcapMaterial>(null!);
  const textMaterialRef2 = useRef<MeshMatcapMaterial>(null!);

  const width = useThree((state) => state.size.width);
  const scaleWidth = width < 600 ? 1 : 1.1;

  const [scale] = useState(scaleWidth);

  const [matcapTexture] = useMatcapTexture("7877EE_D87FC5_75D9C7_1C78C0", 256);
  const scroll = useScroll();

  const [springs, api] = useSpring(
    () => ({
      from: {
        scale: [scale, scale, scale],
      },
      to: {
        scale: [scale, scale, scale],
      },
      config: {
        duration: 4000,
        bounce: 3.5,
        easing: easings.easeOutQuad,
      },
    }),
    [scale]
  );

  useFrame(() => {
    let visable = scroll.visible(0, 0.68);
    let offset = scroll.offset;

    // textRef.current.position.x = -offset * 150;
    // textRef1.current.visible = offset > 0.9;
    // textRef2.current.visible = offset > 0.9;
    // textMaterialRef.current.visible = offset > 0.68;
    // textMaterialRef2.current.visible = offset > 0.68;

    textMaterialRef.current.visible = !visable;
    textMaterialRef2.current.visible = !visable;

    textMaterialRef.current.opacity = offset - 0.68;
    textMaterialRef2.current.opacity = offset - 0.68;

    // textRef2.current.position.x = scroll.range(0, 13 / scroll.pages) * 72;
  });
  return (
    <>
      <animated.group
        {...props}
        position={[104, -44, 19]}
        // scale={scaleWidth}
        scale={springs.scale.to((x, y, z) => [x, y, z])}
        ref={textRef2}
      >
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
            <meshMatcapMaterial
              ref={textMaterialRef}
              attach="material"
              transparent
              opacity={0.9}
              matcap={matcapTexture}
            />
          </Text3D>
          <Text3D
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
            <meshMatcapMaterial
              ref={textMaterialRef2}
              attach="material"
              matcap={matcapTexture}
              transparent
              opacity={0.9}
            />
          </Text3D>
        </Billboard>
      </animated.group>
    </>
  );
};

export default TextOutro;
