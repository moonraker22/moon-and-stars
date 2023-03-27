import { Scroll, ScrollControls, Select, Stars } from "@react-three/drei";
import { Perf } from "r3f-perf";
import StarsModel from "./components/StarsModel";
// import Star from "./Star";
// import { createSculptureWithGeometry, createSculpture } from 'shader-park-core'
import "./App.css";
// import Plane from './components/Plane'
import CameraTrac from "./components/CameraTrac";
import MyCanvas from "./components/MyCanvas";
import { data } from "./store";

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
import { Selection } from "@react-three/postprocessing";
import Effects from "./components/Effects";
import HtmlContent from "./components/HtmlContent";
import MyPlane from "./components/Plane";
import Spaceship from "./components/SpaceshipMerged";
import Spaceshuttle from "./components/Spaceshuttle";

export default function App() {
  // let { range } = useControls(
  //   {
  //     range: { value: 20, min: 0, max: 300, step: 10 },
  //   },
  //   { collapsed: true }
  // )
  const height = window.innerHeight;

  // const tubeRef = useRef<any>()
  // console.log('🚀 ~ file: App.tsx:61 ~ App ~ tubeRef:', tubeRef)
  // const scene = useThree((state) => state.scene)
  // console.log('🚀 ~ file: Plane.tsx:9 ~ MyPlane ~ scene:', scene)

  // const scroll = useScroll()
  // console.log('🚀 ~ file: App.tsx:70 ~ App ~ scroll:', scroll)
  // const t = (scroll.offset % 1) / 1
  // console.log('🚀 ~ file: App.tsx:65 ~ App ~ t:', t)

  return (
    <>
      <MyCanvas>
        <directionalLight intensity={1.1} castShadow position={[10, 10, 5]} />
        <ambientLight intensity={0.2} />
        <color attach="background" args={["#000"]} />
        {/* <OrbitControls /> */}
        <Stars />
        <ScrollControls pages={13} damping={1}>
          <Selection>
            <Effects />

            <Select>
              {/* <Moons data={data2} range={15} /> */}
              {/* <SpaceshipMerged
                    rotation={[Math.PI, Math.PI / 4, Math.PI]}
                    position={[4, -12, 0]}
                  /> */}
              <Spaceship
                rotation={[Math.PI, Math.PI / 4, Math.PI]}
                // position={[4, -12, 0]}
                // position={[23, -5, 25]}
                scale={[4, 4, 4]}
              />
            </Select>
          </Selection>
          <CameraTrac>
            <StarsModel data={data} range={35 * 5.5} />

            <Scroll>
              {/* <Asteroid
              rotation={[Math.PI, Math.PI / 4, Math.PI]}
              position={[65, -14, 30]}
              scale={3.5}
            /> */}
              {/* <Images /> */}

              {/* <Asteroid
              rotation={[Math.PI, Math.PI / 4, Math.PI]}
              position={[-15, -3, 20]}
              scale={[1, 1.5, 1.5]}
            /> */}
              <MyPlane args={[10, 10]} position={[0, 0, -10]} />
            </Scroll>
            <Spaceshuttle scale={50} rotation-y={Math.PI} />
            <HtmlContent />
          </CameraTrac>
        </ScrollControls>
        <Perf position={"top-left"} />
      </MyCanvas>
    </>
  );
}
