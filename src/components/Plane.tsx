import { Plane } from '@react-three/drei'

type Props = {}

const MyPlane = ({ ...props }) => {
  console.log(props)

  return (
    <>
      <group
      // position={[0, 0, 10]}
      // rotation={[Math.PI / 2, Math.PI / 2, 0]}
      >
        <Plane {...props} />

        {/* <mesh>
                  <planeGeometry args={[10, 10]} />
                  <meshStandardMaterial color="red" />
                </mesh> */}
      </group>
    </>
  )
}

export default MyPlane
