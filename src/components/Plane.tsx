import { Html, Plane, useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { Vector3 } from "three";
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

  // const { xPos } = useControls("X", {
  //   xPos: {
  //     value: 140,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  // const { yPos } = useControls("Y", {
  //   yPos: {
  //     value: -183,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  // const { zPos } = useControls("Z", {
  //   zPos: {
  //     value: -2,
  //     min: -1000,
  //     max: 1000,
  //     step: 1,
  //   },
  // });

  return (
    <>
      <group
      // position={[0, 0, 10]}
      // rotation={[Math.PI / 2, Math.PI / 2, 0]}
      >
        <Plane
          //   position={[-1.2246467991473532e-14, 60, -1.469576158976824e-14]}
          //   position={[position.x + 2, position.y - 2, position.z]}
          position={[position.x + 2, position.y - 2, position.z]}
          rotation={[
            cameraRotation.x - Math.PI * 2,
            cameraRotation.y,
            cameraRotation.z,
          ]}
          scale={[2, 1, 1]}
          //   onClick={handlePointerEnter}
          ref={planeRef}
          visible={false}
        >
          <Html>
            <motion.h1
              // ref={moonrakerRef}
              style={{
                // position: "absolute",
                // top: "60vh",
                // left: "0.9em",
                fontSize: "10vw",
                color: "#C5C2BA",
                // transform: `translateX(-${offset * 100}%)`,
              }}
              initial={{ opacity: 0, scale: 0.5, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi
            </motion.h1>
          </Html>
        </Plane>
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
        <mesh position={[140, -183, -2]} scale={5} ref={moonRef}>
          <sphereGeometry args={[14, 32, 32]} />
          <meshStandardMaterial color="white" map={moonTex} />
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
