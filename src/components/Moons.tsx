import { Float, Instance, Instances, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'

const Moon = ({ random, ...props }) => {
  const ref = useRef<Group>(null!)

  useFrame((state) => {
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
      <meshStandardMaterial map={texture} toneMapped={false} emissive={1.5} />
      <Instance />
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
