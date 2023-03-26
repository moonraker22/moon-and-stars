import { animated } from '@react-spring/three'
import { Plane, useScroll, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useContext, useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { Context } from './CameraTrac'

type Props = {}

// end pos is 13, -35, 15

const MyPlane = ({ ...props }) => {
  const planeRef = useRef<any>()
  const endRef = useRef<any>()
  const AnimatedPlane = animated(Plane)
  const scroll = useScroll()
  const tubeRef = useContext(Context)

  const [nextPosition, setNextPosition] = useState(new Vector3())

  const [position, setPosition] = useState(
    new Vector3(tubeRef?.geometry.parameters.path.getPointAt(0.01))
  )

  const [endPosition, setEndPosition] = useState(
    new Vector3(tubeRef?.geometry.parameters.path.getPointAt(0.99))
  )
  console.log('🚀 ~ file: Plane.tsx:25 ~ MyPlane ~ endPosition:', endPosition)
  const viewDirection = new Vector3()

  //   const [springs, api] = useSpring(() => ({
  //     position: new Vector3(tubeRef?.geometry.parameters.path.getPointAt(0.01)),
  //     rotation: [0, 0, 0],
  //   }))
  //   console.log(springs)

  const cameraRotation = useThree((state) => state.camera.rotation)
  const cameraPosition = useThree((state) => state.camera.position)
  //   viewDirection.set(0, 0, -1).applyQuaternion(cameraRotation)
  viewDirection.setFromEuler(cameraRotation)

  useEffect(() => {
    let test = new Vector3()
    if (tubeRef) {
      test = tubeRef?.geometry.parameters.path.getPointAt(0.01)
      setPosition(test)

      setNextPosition(tubeRef?.geometry.parameters.path.getPointAt(0.09))
      setEndPosition(tubeRef?.geometry.parameters.path.getPointAt(0.99))
    }
    // console.log(tubeRef?.geometry.parameters.path.getPointAt(1.5))
  }, [tubeRef])

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

  const texture = useTexture('moon.jpeg')

  return (
    <>
      <group
      // position={[0, 0, 10]}
      // rotation={[Math.PI / 2, Math.PI / 2, 0]}
      >
        <AnimatedPlane
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
        />
        <AnimatedPlane
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
        />

        <mesh position={[13, -35, 15]}>
          <sphereGeometry args={[10, 32, 32]} />
          <meshStandardMaterial color="white" map={texture} />
        </mesh>
      </group>
    </>
  )
}

export default MyPlane
