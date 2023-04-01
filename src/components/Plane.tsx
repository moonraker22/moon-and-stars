import { useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef, useState } from "react";
import { Color, Vector3 } from "three";
import { Context } from "./CameraTrac";

type Props = {};

// end pos is 13, -35, 15

const MyPlane = ({ ...props }) => {
  const planeRef = useRef<any>();
  const endRef = useRef<any>();
  // const AnimatedPlane = animated(Plane);
  const scroll = useScroll();
  const tubeRef = useContext(Context);

  // const [nextPosition, setNextPosition] = useState(new Vector3());

  const [position, setPosition] = useState(
    new Vector3(tubeRef?.geometry.parameters.path.getPointAt(0.01))
  );

  // const [endPosition, setEndPosition] = useState(
  //   new Vector3(tubeRef?.geometry.parameters.path.getPointAt(0.99))
  // );
  const viewDirection = new Vector3();

  //   const [springs, api] = useSpring(() => ({
  //     position: new Vector3(tubeRef?.geometry.parameters.path.getPointAt(0.01)),
  //     rotation: [0, 0, 0],
  //   }))
  //   console.log(springs)

  const cameraRotation = useThree((state) => state.camera.rotation);
  const cameraPosition = useThree((state) => state.camera.position);
  //   viewDirection.set(0, 0, -1).applyQuaternion(cameraRotation)
  viewDirection.setFromEuler(cameraRotation);

  useEffect(() => {
    let test = new Vector3();
    if (tubeRef) {
      test = tubeRef?.geometry.parameters.path.getPointAt(0.01);
      setPosition(test);

      // setNextPosition(tubeRef?.geometry.parameters.path.getPointAt(0.09));
      // setEndPosition(tubeRef?.geometry.parameters.path.getPointAt(0.9999));
    }
    // console.log(tubeRef?.geometry.parameters.path.getPointAt(1.5))
  }, [tubeRef]);

  //   const handlePointerEnter = () => {
  //     api.start({
  //       position: nextPosition,
  //     })
  //   }

  //   useEffect(() => {
  //     if (planeRef) {
  //       planeRef.current.lookAt(cameraPosition)
  //       console.log(planeRef.current, 'planeref')
  //     }
  //     if (endRef) {
  //       endRef.current.lookAt(cameraPosition)
  //     }
  //   }, [cameraPosition])

  const moonTex = useTexture("moon.jpeg");
  // const earthTex = useTexture("earth-color.jpg");
  const moonRef = useRef<any>();

  useFrame(() => {
    if (moonRef) {
      moonRef.current.rotation.x += 0.0013;
      // moonRef.current.rotation.y += 0.009;
    }
  });

  // ! TODO change plane to 3d text
  return (
    <>
      <group
      // position={[0, 0, 10]}
      // rotation={[Math.PI / 2, Math.PI / 2, 0]}
      >
        {/* <Billboard
          follow={true}
          lockX={false}
          lockY={false}
          lockZ={false}
          position={[position.x - 2, position.y, position.z]}
        >
          <mesh scale={4}>
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial color={"white"}>
              <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={["tomato", "dodgerblue"]} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
              />
            </meshBasicMaterial>
          </mesh>
        </Billboard> */}
        {/* <Plane
 
          position={[position.x - 2, position.y - 1, position.z]}
          rotation={[
            cameraRotation.x - Math.PI * 2,
            cameraRotation.y,
            cameraRotation.z,
          ]}
          scale={[2, 4, 1]}
          //   onClick={handlePointerEnter}
          ref={planeRef}
          visible={false}
          // visible={true}
        >
          <Html>
            <motion.h1
              className="text-center text-9xl text-zinc-300 subpixel-antialiased"
           
              initial={{ opacity: 0, scale: 0.5, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi
            </motion.h1>
          </Html>
     
        </Plane> */}
        {/* <AnimatedPlane
          //   position={[-1.2246467991473532e-14, 60, -1.469576158976824e-14]}
          //   position={[position.x + 2, position.y - 2, position.z]}
          position={[endPosition.x + 2, endPosition.y - 20, endPosition.z]}
          rotation={[
            cameraRotation.x - Math.PI * 2,
            cameraRotation.y,
            cameraRotation.z,
          ]}
          scale={[20, 20, 20]}
          //   onClick={handlePointerEnter}
          ref={endRef}
        /> */}

        {/* <mesh position={[29, -35, 10]}> */}
        <mesh position={[130, -61, 244]} scale={7} ref={moonRef}>
          {/* <mesh position={[xPos, yPos, zPos]} scale={4} ref={moonRef}> */}

          <sphereGeometry args={[14, 64, 64]} />
          <meshStandardMaterial
            color={new Color(3.0, 3.0, 3.0)}
            map={moonTex}
          />
        </mesh>
        {/* <mesh position={[xPos, yPos, zPos]} scale={1} ref={moonRef}>
          <sphereGeometry args={[14, 32, 32]} />
          <meshStandardMaterial
            map={earthTex}
            emissive={new Color(0, 0, 0.1)}
            //
          />
        </mesh> */}
      </group>
    </>
  );
};

export default MyPlane;
