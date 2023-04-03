import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";

const MyPlane = ({ ...props }) => {
  // const planeRef = useRef<any>();
  // const endRef = useRef<any>();
  // const scroll = useScroll();
  // const tubeRef = useContext(Context);

  // const [position, setPosition] = useState(
  //   new Vector3(tubeRef?.geometry.parameters.path.getPointAt(0.01))
  // );

  // const viewDirection = new Vector3();

  // const cameraRotation = useThree((state) => state.camera.rotation);
  // const cameraPosition = useThree((state) => state.camera.position);
  // //   viewDirection.set(0, 0, -1).applyQuaternion(cameraRotation)
  // viewDirection.setFromEuler(cameraRotation);

  // useEffect(() => {
  //   let test = new Vector3();
  //   if (tubeRef) {
  //     test = tubeRef?.geometry.parameters.path.getPointAt(0.01);
  //     setPosition(test);

  //     // setNextPosition(tubeRef?.geometry.parameters.path.getPointAt(0.09));
  //     // setEndPosition(tubeRef?.geometry.parameters.path.getPointAt(0.9999));
  //   }
  // }, [tubeRef]);

  const moonTex = useTexture("images/moon.jpeg");
  const moonRef = useRef<any>();

  useFrame(() => {
    if (moonRef) {
      moonRef.current.rotation.x += 0.0013;
    }
  });

  return (
    <>
      <group>
        <mesh position={[130, -61, 244]} scale={7} ref={moonRef}>
          <sphereGeometry args={[14, 64, 64]} />
          <meshStandardMaterial
            color={new Color(3.0, 3.0, 3.0)}
            map={moonTex}
          />
        </mesh>
      </group>
    </>
  );
};

export default MyPlane;
