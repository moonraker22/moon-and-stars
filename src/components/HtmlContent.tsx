import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const HtmlContent = () => {
  const scroll = useScroll();
  const moonrakerRef = useRef<HTMLDivElement>(null!);
  const webRef = useRef<HTMLDivElement>(null!);
  const devRef = useRef<HTMLDivElement>(null!);
  const inspRef = useRef<HTMLDivElement>(null!);
  // let offset = 1 - scroll.offset
  let offset = scroll.offset;

  // const { height, width } = useThree((state) => state.size)
  useFrame((state, delta) => {
    // The offset is between 0 and 1, you can apply it to your models any way you like
    offset = scroll.offset;
    moonrakerRef.current.style.transform = `translate3d(${
      offset * 100
    }%, 0, 0)`;
    webRef.current.style.transform = `translate3d(-${offset * 100}%, 0, 0)`;
    devRef.current.style.transform = `translate3d(${offset * 100}%, 0, 0)`;
  });
  return (
    <Scroll html>
      <h1
        ref={moonrakerRef}
        style={{
          position: "absolute",
          top: "60vh",
          left: "0.9em",
          fontSize: "10vw",
          color: "#C5C2BA",
          transform: `translateX(-${offset * 100}%)`,
        }}
      >
        Hi
      </h1>
      <h1
        ref={webRef}
        style={{
          position: "absolute",
          top: "100vh",
          left: "75vw",
          fontSize: "8vw",
          color: "#C5C2BA",
        }}
      >
        I'm Zac
      </h1>
      <h3
        ref={devRef}
        style={{
          position: "absolute",
          top: "110.5vh",
          left: "3.5vw",
          fontSize: "7vw",
          color: "#C5C2BA",
          lineHeight: "0.8em",
        }}
      >
        I build stuff for the web
      </h3>
      <p
        ref={inspRef}
        style={{
          position: "absolute",
          top: "240vh",
          left: "75.5vw",
          fontSize: "4vw",
          color: "gray",
          textShadow: "0 0 0.5em gray",
          textAlign: "center",
          lineHeight: "1.2em",
        }}
      >
        Here's some of the stuff I've built
      </p>
      <div
        ref={inspRef}
        style={{
          // position: "absolute",
          top: "350vh",
          left: "73.5vw",
          fontSize: "4vw",
          // color: "gray",
          textShadow: "0 0 0.5em gray",
          // textAlign: "center",
          // width: "30vw",
          height: "60vw",
          // backgroundColor: "white",
          // borderRadius: "5px",
          // opacity: "0.9",
        }}
        className={
          "w-100 top absolute mx-auto  flex max-w-sm transform items-center space-x-4 rounded-xl bg-gradient-to-b from-zinc-300 to-cyan-200 p-6  text-center text-cyan-700 antialiased opacity-90 shadow-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
        }
      >
        This is a placeholder for a project
      </div>
      <div
        ref={inspRef}
        style={{
          position: "absolute",
          top: "550vh",
          left: "2.5vw",
          fontSize: "4vw",
          color: "gray",
          textShadow: "0 0 0.5em gray",
          textAlign: "center",
          width: "30vw",
          height: "60vw",
          backgroundColor: "white",
          borderRadius: "5px",
          opacity: "0.9",
        }}
      >
        This is a placeholder for a project
      </div>
      <div
        ref={inspRef}
        style={{
          position: "absolute",
          top: "750vh",
          left: "73.5vw",
          fontSize: "4vw",
          color: "gray",
          textShadow: "0 0 0.5em gray",
          textAlign: "center",
          width: "30vw",
          height: "60vw",
          backgroundColor: "white",
          borderRadius: "5px",
          opacity: "0.9",
        }}
      >
        This is a placeholder for a project
      </div>
      <div
        ref={inspRef}
        style={{
          position: "absolute",
          top: "950vh",
          left: "2.5vw",
          fontSize: "4vw",
          color: "gray",
          textShadow: "0 0 0.5em gray",
          textAlign: "center",
          width: "30vw",
          height: "60vw",
          backgroundColor: "white",
          borderRadius: "5px",
          opacity: "0.9",
        }}
      >
        This is a placeholder for contact info
      </div>
      <h1
        ref={devRef}
        style={{
          position: "absolute",
          top: "1150vh",
          left: "0.5vw",
          fontSize: "8vw",
          color: "#C5C2BA",
        }}
      >
        Thanks for stopping by! 💫
      </h1>
    </Scroll>
  );
};

export default HtmlContent;
