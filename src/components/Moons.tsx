import {
  Float,
  Instance,
  Instances,
  useScroll,
  useTexture,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'

const Moon = ({ random, ...props }) => {
  const ref = useRef<Group>(null!)
  const scroll = useScroll()

  useFrame((state) => {
    const offset = scroll.offset

    // state.camera.position.set(
    //   Math.sin(offset) * -10,
    //   Math.atan(offset * Math.PI * 2) * 5,
    //   Math.cos((offset * Math.PI) / 3) * -10
    // )
    // state.camera.lookAt(0, 0, 0)
    // state.camera.rotation.set(0, offset * Math.PI, 0)

    //   if (!ref.current) return
    //   const t = state.clock.getElapsedTime() + random * 10000
    //   ref.current.position.y = Math.sin(t / 1.5) / 2
    //   ref.current.rotation.y += 0.01
    const t = state.clock.getElapsedTime() + random * 10000
    ref.current.rotation.set(
      Math.cos(t / 4) / 2,
      Math.sin(t / 4) / 2,
      Math.cos(t / 1.5) / 2
    )

    // ref.current.position.y = Math.sin(t / 1.5) / 2
  })

  return <Instance ref={ref} {...props} />
}

const Moons = ({ range, data }) => {
  const texture = useTexture('moon.jpeg')
  return (
    <Instances range={range}>
      <sphereGeometry args={[0.5, 32]} />
      <meshStandardMaterial map={texture} />
      <group position={[0, 0, 0]}>
        <Float>
          {data.map((props, i) => {
            return <Moon key={i} {...props} />
          })}
        </Float>
      </group>
    </Instances>
  )
}

export default Moons
