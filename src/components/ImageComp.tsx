import { Html, Image as ImageImpl, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Color } from 'three'

function Image({ c = new Color(), url, ...props }) {
  const ref = useRef<any>()
  const [hovered, hover] = useState(false)
  useFrame(() => {
    ref.current.material.color.lerp(
      c.set(hovered ? 'white' : '#ccc'),
      hovered ? 0.4 : 0.05
    )
  })
  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      url={url}
      {...props}
    />
  )
}

function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef<any>()
  const imageRef = useRef<any>()
  const [hovered, setHover] = useState(null)
  useFrame(() => {
    // const t = data.offset * 100
    // group.current.position.y = MathUtils.lerp(group.current.position.y, -t, 0.1)
    // group.current.rotation.y = MathUtils.lerp(
    //   group.current.rotation.y,
    //   MathUtils.degToRad(data.delta * 10),
    //   0.1
    // )
  })
  // let { rotationX } = useControls('rotation', {
  //   rotationX: {
  //     value: 3.9,
  //     min: 0,
  //     max: 120,
  //     step: 0.1,
  //   },
  // })
  // let { rotationY } = useControls('rotation', {
  //   rotationY: {
  //     value: 11.7,
  //     min: 0,
  //     max: 120,
  //     step: 0.1,
  //   },
  // })
  // let { rotationZ } = useControls('rotation', {
  //   rotationZ: {
  //     value: 3.8,
  //     min: 0,
  //     max: 120,
  //     step: 0.1,
  //   },
  // })

  return (
    <group ref={group} position={[0, 0, 0]} rotation={[3.9, 11.7, 3.8]}>
      <Image
        url="lunar_surface_rover.jpg"
        // position={[0, -height * 1.8 - height / 4, 0]}
        position={[-2, -30, -11]}
        scale={[width, height, 1]}
        onPointerOver={(e) => setHover(e.object)}
        onPointerOut={(e) => setHover(null)}
      />
      <Html>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '3em',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            pointerEvents: 'none',
          }}
        >
          ✨
        </div>
      </Html>
    </group>
  )
}

export default Images
