import { Scroll, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";

const HtmlContent = () => {
  // const [width, setWidth] = useState(window.innerWidth);
  const width = useThree((state) => state.size.width);
  const rightBox = `${width - 500}px`;
  const leftBox = "20px";

  const scroll = useScroll();
  const moonrakerRef = useRef<HTMLDivElement>(null!);
  const webRef = useRef<HTMLDivElement>(null!);
  const devRef = useRef<HTMLDivElement>(null!);
  const builtRef = useRef<HTMLDivElement>(null!);
  const chevronRef = useRef<SVGSVGElement>(null!);
  // let offset = 1 - scroll.offset
  let offset = scroll.offset;

  // const { height, width } = useThree((state) => state.size)
  useFrame((state, delta) => {
    // The offset is between 0 and 1, you can apply it to your models any way you like
    offset = scroll.offset;
    // console.log(state, "state");
    if (offset > 0.01) {
      chevronRef.current.style.opacity = "0";
    } else {
      chevronRef.current.style.opacity = "1";
    }
    // moonrakerRef.current.style.transform = `translate3d(${
    //   offset * 1500
    // }%, 0, 0)`;
    webRef.current.style.transform = `translate3d(-${offset * 2300}%, 0, 0)`;
    // devRef.current.style.transform = `translate3d(${offset * 200}%, 0, 0)`;
    builtRef.current.style.transform = `translate3d(-${offset * 1000}%, 0, 0)`;
  });
  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  //   console.log(width);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <Scroll html>
      {/* <h1
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
      </h1> */}
      <p
        ref={webRef}
        style={{
          left: width - 80,
          fontSize: "1vw",
          lineHeight: "0.9em",
        }}
        className="absolute top-[3vh]  w-20 text-center text-3xl text-slate-200"
      >
        Site best viewed on desktop in landscape
      </p>
      {/* <p
        ref={webRef}
        style={{
          // position: "absolute",
          // top: "83vh",
          // left: "89vw",
          fontSize: "2vw",
          // color: "#C5C2BA",
          lineHeight: "0.9em",
          // width: "10vw",
        }}
        className=" absolute top-[80vh] left-[90vw] h-10 w-10  text-cyan-500"
      >
        Scroll Down
      </p>{" "} */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="absolute top-[89vh] left-[94vw] h-10 w-10 animate-bounce text-zinc-300"
        ref={chevronRef}
      >
        <path
          // stroke-linecap="round"
          // stroke-linejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </motion.svg>

      <h1
        ref={webRef}
        className="shadow-gray absolute top-[100vh] left-[75vw] h-10 w-10 text-center text-8xl  leading-none text-zinc-300"
      >
        I'm Zac
      </h1>
      <h3
        ref={devRef}
        className="shadow-gray absolute top-[120vh] left-[3.5vw] h-10 w-10 text-center  text-7xl leading-none text-zinc-400"
      >
        I build stuff for the web
      </h3>
      <p
        ref={builtRef}
        className="shadow-gray h-15 w-15 eading-relaxed absolute top-[240vh] left-[65.5vw] text-center  text-6xl text-zinc-300 shadow"
      >
        Here's some of the stuff I've built
      </p>
      <div
        style={{
          left: `${width > 768 ? rightBox : "2vw"}`,
          textShadow: "0 0 0.5em gray",
        }}
        className="project top-[350vh] min-w-[450px] border-cyan-200  text-cyan-500 shadow-cyan-500/50"
      >
        <div className="shadow-cyan m-5  w-96 p-5 text-6xl font-bold">
          Pay Tracker
        </div>
        <p className="m-5  p-5 text-2xl text-slate-200">
          An app I built using React, TypeScript, Firebase, and Chakra UI. It
          allows drivers to calculate pay, miles and time off, and stores it in
          a database.
        </p>
        <div className="m-3">
          <a
            href="https://payroll-spa.web.app//"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="pay-animated.png"
              // Cloudinary URL
              // src="https://res.cloudinary.com/dmmntk6vn/image/upload/v1679871231/Portfolio/pay-animated_s0j90u.png"
              alt="Pay Tracker"
            />
          </a>
        </div>
        <p className="m-5  p-5 text-xl text-slate-200">
          It's in use and on the web{" "}
          <a href="/" className="text-cyan-400">
            here
          </a>
        </p>
        <p className="mx-3  p-5 text-xl text-slate-200">
          Check out the code on GitHub:
          <a
            href=" https://github.com/moonraker22/payroll-spa"
            title="payroll tracker"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className=" mx-auto my-3 h-10 w-10"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </p>
        <p className=" text-sm text-slate-200">
          <a href=" https://github.com/moonraker22/payroll-spa">
            https://github.com/moonraker22/payroll-spa
          </a>
        </p>
      </div>
      {/* </div> */}
      <div
        // ref={inspRef}
        style={{
          position: "absolute",
          top: "550vh",
          left: "2.5vw",
          fontSize: "4vw",
          // color: "gray",
          textShadow: "0 0 0.5em gray",
          // textAlign: "center",
          // width: "30vw",
          // height: "50vw",
          // backgroundColor: "white",
          // borderRadius: "5px",
          // opacity: "0.9",
        }}
        className="project min-w-[450px] border-amber-200  text-yellow-400 shadow-amber-500/50"
      >
        <p className="m-5  p-5 text-5xl font-bold">DiamondHawk</p>
        <p className="m-5  p-5 text-2xl text-slate-200">
          An E-commerce website I built for a local business. It's built using
          HTML, CSS, Handlebars.
        </p>
        <div className="m-3">
          <a
            href="https://diamondhawkusa.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="diamonhawk-home.webp" alt="DiamondHawk" />
          </a>
        </div>
        <p className="mt-10  p-5 text-xl text-slate-200">
          You can check it out{" "}
          <a href="https://diamondhawkusa.com/" className="text-yellow-400">
            here
          </a>
        </p>
      </div>
      <div
        // ref={inspRef}
        style={{
          // position: "absolute",
          top: "750vh",
          left: `${width > 768 ? rightBox : "2vw"}`,

          fontSize: "4vw",
          // color: "gray",
          textShadow: "0 0 0.5em gray",
          // textAlign: "center",
          // width: "30vw",
          // height: "80vw",
          // backgroundColor: "white",
          // borderRadius: "5px",
          // opacity: "0.9",
        }}
        className="project min-w-[450px] border-teal-400 text-teal-300 shadow-teal-500/50"
      >
        <p className="m-5  p-5 text-5xl font-bold">Some Other Projects</p>

        <p className="m-5  p-5 text-xl text-slate-200">
          <a
            href="https://portal-omega-ten.vercel.app"
            className="text-teal-300"
          >
            Portal :{" "}
          </a>{" "}
          A scene built with blender and react three fiber
        </p>
        <a href="/" className="text-teal-300">
          <img
            src="https://github.com/moonraker22/my-three-js-journey/blob/main/38-importing-and-optimizing-the-scene/38-vite/public/resources/portal_readme.jpg?raw=true"
            alt="Portal"
            className=" mx-auto w-96 object-cover"
          />
        </a>
        <p className="m-5  p-5 text-xl text-slate-200">
          <a href="https://marble-madness.vercel.app" className="text-teal-300">
            Marble Madness :{" "}
          </a>{" "}
          A game built with blender and react three fiber
        </p>
        <a href="/" className="text-teal-300">
          <img
            src="https://github.com/moonraker22/my-three-js-journey/raw/main/53-create-a-game-with-r3f/public/Marble_Maddness.jpg"
            alt="Marble Madness"
            className=" mx-auto w-96 object-cover"
          />
        </a>
        <p className="mt-3  p-5 text-xl text-slate-200">
          <a href="/" className="text-teal-300">
            Raging Sea :{" "}
          </a>{" "}
          A scene showcasing the use of shaders with simplex noise
        </p>
        <p className="mt-3  p-5 text-xl text-slate-200">
          <a href="/" className="text-teal-300">
            Cans and Bottles :{" "}
          </a>{" "}
          A scene using scroll controls and mouse position
        </p>
      </div>
      <div
        // ref={inspRef}
        style={{
          // position: "absolute",
          top: "950vh",
          left: "2.5vw",
          fontSize: "4vw",
          // color: "gray",
          textShadow: "0 0 0.5em gray",
          // textAlign: "center",
          // width: "30vw",
          // height: "50vw",

          // backgroundColor: "white",
          // borderRadius: "5px",
          // opacity: "0.9",
        }}
        className="project min-w-[420px] border-fuchsia-300  text-fuchsia-300 shadow-fuchsia-500/50"
      >
        {" "}
        <p className="m-5  p-5 text-5xl font-bold">Contact me</p>
        <p className="m-5  p-5 text-xl text-slate-200">
          I'd love to hear from you
        </p>
        <p className="m-5  p-5 text-xl text-slate-200">
          <a
            href="https://www.linkedin.com/in/zachariah-kesler-9945155a"
            className="text-fuchsia-300"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mx-auto my-3 h-10 w-10 text-fuchsia-300"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>{" "}
          Connect with me on LinkedIn
        </p>
        <p className="m-5  p-5 text-xl text-slate-200">
          <a
            href="mailto:zxkst2@gmail.com"
            className="text-fuchsia-300"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mx-auto my-3 h-10 w-10 text-fuchsia-300"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
            </svg>
          </a>{" "}
          Send me an email
        </p>
        <p className="m-5  p-5 text-xl text-slate-200">
          <a href=" https://github.com/moonraker22" title="Github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mx-auto my-3 h-10 w-10 text-fuchsia-300"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          Check out my projects
        </p>
      </div>
      <div className="absolute top-[1250vh] left-[50vw] flex h-full w-full flex-col items-center justify-center ">
        <h1
          ref={devRef}
          style={{
            // position: "absolute",
            // top: "1220vh",
            // left: "42.5vw",
            fontSize: "4vw",
            // color: "#C5C2BA",
            // color: "gray",
            textShadow: "0 0 0.5em gray",
            lineHeight: "1.0em",
            // color: "gradient",
          }}
          className="text-center text-slate-300 opacity-90"
        >
          Thanks for stopping by!{" "}
          <motion.p
            className="inline-block text-center"
            initial={{
              rotate: 0,
              transformOrigin: "bottom right 60",
            }}
            animate={{
              rotate: [-2, 2],
              transformOrigin: "top right 60",
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              damping: 10,
            }}
          >
            👋
          </motion.p>
        </h1>
      </div>
    </Scroll>
  );
};

export default HtmlContent;
