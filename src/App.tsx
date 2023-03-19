import { Scroll, ScrollControls, Stars } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { createSculptureWithGeometry } from 'shader-park-core'
import Moons from './components/Moons'
import StarsModel from './components/StarsModel'
// import Star from "./Star";
import { Suspense, useRef } from 'react'
import { SphereGeometry } from 'three'
import './App.css'
import Html from './components/Html'
import Images from './components/ImageComp'
import { spCode } from './components/spCode'

const randomVector = (r) => [
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
]
const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
]
const data = Array.from({ length: 100 }, (r = 35) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
  scale: [0.8, 0.8, 0.8],
}))

const data2 = Array.from({ length: 100 }, (r = 35) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
}))

const Torus = () => {
  const scene = useRef(null)
  // const [hovered, setHovered] = useState(false);

  let geometry = new SphereGeometry(1.5, 32, 32)
  // geometry.scale(4.5, 0.8, 1)
  geometry.computeBoundingSphere()
  geometry.center()

  let params = { time: 0 }
  // function spCode() {
  //   return `
  //     box(vec3(1.5));
  // `
  // }
  let torus = createSculptureWithGeometry(geometry, spCode(), () => ({
    time: params.time,
  }))
  console.log(torus)

  useFrame(() => {
    if (!scene.current) return
    // scene.current.rotation.y += 0.04
    // scene.current.rotation.x += 0.04
    // scene.current.rotation.z += 0.04
    params.time += 0.01
  })

  return (
    <group ref={scene}>
      <primitive object={torus} position={[0, 0, 0]} />
    </group>
  )
}
// const Images = () => {
//   const scroll = useScroll()

//   useFrame((state, delta) => {
//     // The offset is between 0 and 1, you can apply it to your models any way you like
//     const offset = 1 - scroll.offset

//     state.camera.position.set(
//       Math.sin(offset) * -10,
//       Math.atan(offset * Math.PI * 2) * 5,
//       Math.cos((offset * Math.PI) / 3) * -10
//     )
//     state.camera.lookAt(0, 0, 0)
//   })
//   return <group></group>
// }

export default function App() {
  let { range } = useControls({
    range: { value: 30, min: 0, max: 300, step: 10 },
  })

  return (
    <Suspense fallback={null}>
      <Canvas>
        {/* <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer> */}
        <directionalLight intensity={0.9} />
        <ambientLight intensity={0.2} />
        <color attach="background" args={['#000']} />
        {/* <OrbitControls /> */}
        <Stars />
        <Torus />
        <ScrollControls pages={3} damping={1}>
          <Scroll>
            <StarsModel data={data} range={range * 1.5} />
            <Moons data={data2} range={range} />
            <Images />
          </Scroll>
          <Html />
        </ScrollControls>
        {/* <StarsModel data={data} range={range * 1.5} /> */}
        <Perf position={'top-left'} />
        {/* <Scene /> */}
      </Canvas>
    </Suspense>
  )
}

// import {
//   Box,
//   Environment,
//   OrbitControls,
//   QuadraticBezierLine,
//   Sparkles,
//   Sphere as Sphere3,
//   SpotLight,
//   TorusKnot,
//   useNormalTexture,
// } from '@react-three/drei'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { useRef } from 'react'
// import * as THREE from 'three'
// import { Mesh } from 'three'

// import './App.css'
// import Images from './components/ImageComp';

// export function App() {
//   // const [normalMap, url] = useNormalTexture(
//   //   26, // index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json

//   //   {
//   //     offset: [0, 0],
//   //     repeat: [1, 1],
//   //     anisotropy: 8,
//   //   }
//   // )
//   // const texture = useTexture(
//   //   'https://github.com/emmelleppi/normal-maps/raw/master/normals/176_norm.JPG'
//   // )
//   // console.log(texture)

//   return (
//     <div className="App">
//       <div className="html">Hi</div>
//       <Canvas>
//         <OrbitControls />
//         <ambientLight />
//         <color attach="background" args={['#000']} />
//         <Environment
//           // ground
//           background={false} // can be true, false or "only" (which only sets the background) (default: false)
//           blur={0} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
//           // files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
//           path="/"
//           preset={'lobby'}
//           scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
//           encoding={undefined} // adds the ability to pass a custom THREE.TextureEncoding (default: THREE.sRGBEncoding for an array of files and THREE.LinearEncoding for a single texture)
//         />
//         <SpotLight
//           distance={5}
//           angle={0.15}
//           attenuation={5}
//           anglePower={5}
//           position={[3, 4, 2]} // Diffuse-cone anglePower (default: 5)
//         />
//         <Box position={[-1.2, 0, 0]}>
//           <meshNormalMaterial attach="material" />
//         </Box>
//         <TorusKnot position={[1.2, 0, 0]}>
//           <meshNormalMaterial attach="material" />
//         </TorusKnot>
//         <Sparkles count={50} scale={1 * 2} size={6} speed={0.4} />

//         <QuadraticBezierLine
//           start={[-5, -5, 0]} // Starting point, can be an array or a vec3
//           end={[5, 5, 5]} // Ending point, can be an array or a vec3
//           mid={[0, 0, 5]} // Optional control point, can be an array or a vec3
//           color="pink" // Default
//           lineWidth={5} // In pixels (default)
//           dashed={false} // Default
//         />
//         <Sphere />
//       </Canvas>
//     </div>
//   )
// }

// export default App

// function Sphere() {
//   const three = useThree()
//   console.log('🚀 ~ file: App.tsx:33 ~ App ~ three:', three)
//   const mouseX = useRef(0)
//   const mouseY = useRef(0)
//   const windowHalfX = window.innerWidth / 2
//   const windowHalfY = window.innerHeight / 2
//   const onDocumentMouseMove = (event: MouseEvent) => {
//     mouseX.current = event.clientX - windowHalfX
//     mouseY.current = event.clientY - windowHalfY
//   }
//   document.addEventListener('mousemove', onDocumentMouseMove, false)

//   const threeCamera = useThree((state) => state.camera.position)
//   const camera = useRef<THREE.Camera>(null!)
//   console.log('🚀 ~ file: App.tsx:96 ~ Sphere ~ threeCamera:', threeCamera)
//   useFrame((state, delta) => {
//     // move camera slightly based on mouse position
//     threeCamera.x = THREE.MathUtils.lerp(
//       threeCamera.x,
//       mouseX.current * 0.001,
//       0.05
//     )
//   })

//   const sphereRef = useRef<Mesh>(null!)
//   const [normalMap, url] = useNormalTexture(
//     60, // index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
//     {
//       offset: [0, 0],
//       repeat: [1, 1],
//       anisotropy: 8,
//     }
//   )
//   useFrame((state, delta) => {
//     // console.log(state.mouse.y)
//     // console.log(delta)
//     sphereRef.current.rotation.y += 0.01
//     sphereRef.current.translateX(0.01)
//     sphereRef.current.translateY(Math.sin(state.clock.getElapsedTime()) * 0.01)
//   })
//   return (
//     <>
//       <mesh position={[3, 0, 0]} ref={sphereRef}>
//         <Sphere3 args={[1, 64, 64]}>
//           <meshPhysicalMaterial
//             roughness={0}
//             color={'green'}
//             emissive={'green'}
//             envMapIntensity={0.2}
//             normalMap={normalMap}
//             emissiveIntensity={0.9}
//           />
//         </Sphere3>
//         {/* <Shadow
//           rotation={[-Math.PI / 2, 0, 0]}
//           scale={1}
//           position={[0, -3, 0]}
//           color={'green'}
//           opacity={0.5}
//         />
//         <Sparkles count={50} scale={1 * 2} size={6} speed={0.4} /> */}
//       </mesh>
//     </>
//   )
// }
