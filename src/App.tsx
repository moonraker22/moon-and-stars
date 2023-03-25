import { Scroll, ScrollControls, Select, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Moons from './components/Moons'
import StarsModel from './components/StarsModel'
// import Star from "./Star";
import { Suspense } from 'react'
// import { createSculptureWithGeometry, createSculpture } from 'shader-park-core'
import './App.css'
import Html from './components/Html'
import Images from './components/ImageComp'
import SpaceshipFlame from './components/SpaceshipFlame'
import { data, data2 } from './store'

// const Torus = () => {
//   const scene = useRef(null)
//   // const [hovered, setHovered] = useState(false);

//   let geometry = new SphereGeometry(1.5, 32, 32)
//   // geometry.scale(4.5, 0.8, 1)
//   geometry.computeBoundingSphere()
//   geometry.center()

//   let params = { time: 0 }
//   // function spCode() {
//   //   return `
//   //     box(vec3(1.5));
//   // `
//   // }
//   let torus = createSculptureWithGeometry(geometry, spCode(), () => ({
//     time: params.time,
//   }))
//   // console.log(torus)

//   useFrame(() => {
//     if (!scene.current) return
//     // scene.current.rotation.y += 0.04
//     // scene.current.rotation.x += 0.04
//     // scene.current.rotation.z += 0.04
//     params.time += 0.01
//   })

//   return (
//     <group ref={scene}>
//       <primitive object={torus} position={[0, 0, 0]} />
//     </group>
//   )
// }
import { Selection } from '@react-three/postprocessing'
import Effects from './components/Effects'

export default function App() {
  // let { range } = useControls(
  //   {
  //     range: { value: 20, min: 0, max: 300, step: 10 },
  //   },
  //   { collapsed: true }
  // )

  return (
    <>
      <Suspense>
        <Canvas>
          <directionalLight intensity={1.9} castShadow position={[10, 10, 5]} />
          <ambientLight intensity={0.2} />
          <color attach="background" args={['#000']} />
          <Stars />
          <ScrollControls pages={3} damping={1}>
            <Scroll>
              <StarsModel data={data} range={15 * 1.5} />
              <Selection>
                <Effects />

                <Select>
                  <Moons data={data2} range={15} />
                  <SpaceshipFlame
                    rotation={[Math.PI, Math.PI / 4, Math.PI]}
                    position={[4, -12, 0]}
                  />
                </Select>
              </Selection>
              {/* <Asteroid
              rotation={[Math.PI, Math.PI / 4, Math.PI]}
              position={[65, -14, 30]}
              scale={3.5}
            /> */}
              <Images />
              {/* <Asteroid
              rotation={[Math.PI, Math.PI / 4, Math.PI]}
              position={[-15, -3, 20]}
              scale={[1, 1.5, 1.5]}
            /> */}
            </Scroll>
            <Html />
          </ScrollControls>
          <Perf position={'top-left'} />
        </Canvas>
      </Suspense>
    </>
  )
}
