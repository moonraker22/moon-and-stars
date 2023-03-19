/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

function Star(props) {
  const group = useRef()
  // @ts-ignore
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf'
  )
  // console.log(materials);
  // console.log(nodes);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.star.geometry}
        material={materials['Yellow.030']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/star/model.gltf'
)

export default Star
