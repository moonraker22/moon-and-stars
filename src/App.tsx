import { Scroll, ScrollControls, Stars } from "@react-three/drei";
import { Perf } from "r3f-perf";
import StarsModel from "./components/StarsModel";
// import Star from "./Star";
// import { createSculptureWithGeometry, createSculpture } from 'shader-park-core'
import "./App.css";
// import Plane from './components/Plane'
import CameraTrac from "./components/CameraTrac";
import MyCanvas from "./components/MyCanvas";
import TextIntro from "./components/TextIntro";
import TextOutro from "./components/TextOutro";
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
import Earth from "./components/Earth";
import Effects from "./components/Effects";
import HtmlContent from "./components/HtmlContent";
import MyPlane from "./components/Plane";
import Spaceship from "./components/SpaceshipMerged";

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
        <directionalLight intensity={1.1} castShadow position={[10, 10, 0]} />
        <ScrollControls pages={14} damping={1} maxSpeed={0.1}>
          <CameraTrac>
            <Stars />
            {/* <Selection> */}
            <Effects />
            {/* <Select enabled> */}
            <Spaceship
              rotation={[Math.PI, Math.PI / 4, Math.PI]}
              // position={[4, -12, 0]}
              // position={[23, -5, 25]}
              scale={[4, 4, 4]}
            />
            {/* <Spaceshuttle scale={50} rotation-y={Math.PI} /> */}
            {/* </Select> */}
            <StarsModel data={data} range={35 * 5.5} />
            {/* </Selection> */}
            <Scroll>
              <HtmlContent />
            </Scroll>
            <MyPlane args={[10, 10]} position={[0, 0, -10]} />
          </CameraTrac>
          <Earth position={[0, 0, 350]} rotation-x={Math.PI} />
          <TextIntro />
          <TextOutro />
          <Perf position={"top-left"} />
        </ScrollControls>
      </MyCanvas>
    </>
  );
}
