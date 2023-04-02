import { Scroll, ScrollControls, Stars } from "@react-three/drei";
import "./App.css";

// components
import CameraTrac from "./components/CameraTrac";
import Earth from "./components/Earth";
import Effects from "./components/Effects";
import HtmlContent from "./components/HtmlContent";
import MyCanvas from "./components/MyCanvas";
import MyPlane from "./components/Plane";
import Spaceship from "./components/SpaceshipMerged";
import StarsModel from "./components/StarsModel";
import TextIntro from "./components/TextIntro";
import TextOutro from "./components/TextOutro";
import { data } from "./store";

export default function App() {
  return (
    <>
      <MyCanvas>
        <directionalLight intensity={1.1} castShadow position={[10, 10, 0]} />
        <ScrollControls pages={14} damping={1} maxSpeed={0.1}>
          <CameraTrac>
            <Stars />
            <Effects />
            <Spaceship
              rotation={[Math.PI, Math.PI / 4, Math.PI]}
              scale={[4, 4, 4]}
            />
            <StarsModel data={data} range={35 * 5.5} />
            <Scroll>
              <HtmlContent />
            </Scroll>
            <MyPlane args={[10, 10]} position={[0, 0, -10]} />
          </CameraTrac>
          <Earth position={[0, 0, 350]} rotation-x={Math.PI} />
          <TextIntro />
          <TextOutro />
          {/* <Perf position={"top-left"} /> */}
        </ScrollControls>
      </MyCanvas>
    </>
  );
}
