import { Float, Instance, Instances, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Star = ({ random, ...props }) => {
  const ref = useRef<any>()
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime() + random * 10000
    ref.current.rotation.set(
      Math.cos(t / 4) / 2,
      Math.sin(t / 4) / 2,
      Math.cos(t / 1.5) / 2
    )
    ref.current.position.y = Math.sin(t / 1.5) / 2
    ref.current.rotation.y += 0.01
  })
  return (
    <group {...props}>
      <Instance ref={ref} />
    </group>
  )
}

const Stars = ({ range, data }) => {
  // @ts-ignore
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf'
  )

  return (
    <Instances
      range={range * 1.5}
      geometry={nodes.star.geometry}
      material={materials['Yellow.030']}
    >
      <group position={[0, 0, 0]}>
        <Float>
          {data.map((props, i) => (
            <Star key={i} {...props} />
          ))}
        </Float>
      </group>
    </Instances>
  )
}

export default Stars
