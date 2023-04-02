import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { createContext, useEffect, useRef, useState } from "react";
import {
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  TubeGeometry,
  Vector3,
} from "three";
import { HeartCurve } from "three-stdlib";

type Props = {
  children: React.ReactNode;
};

const CameraTrac = ({ children }: Props) => {
  // const curve = new FigureEightPolynomialKnot();
  const curve = new HeartCurve();
  // nice curve
  // const curve = new KnotCurve();
  // const curve = new VivianiCurve();

  // looks good
  // const curve = new GrannyKnot();

  // const curve = new CinquefoilKnot();

  //looks good but jumps at end
  // const curve = new TrefoilPolynomialKnot();
  // const curve = new FigureEightPolynomialKnot();

  // const curve = new DecoratedTorusKnot4a();
  // const curve = new DecoratedTorusKnot4b();
  // const curve = new DecoratedTorusKnot5c();

  // Test

  //  const curve2 = new CatmullRomCurve3(curveVertices);
  //  curve2.curveType = "centripetal";
  //  curve2.tension = 1.0;
  //  curve2.closed = true;

  //
  // const curveHandles = [];
  // const initialPoints = [
  //   { x: -160, y: 25, z: -160 },
  //   { x: 160, y: 25, z: 160 },
  //   { x: 160, y: -25, z: 160 },
  //   { x: -160, y: -25, z: -160 },
  // ];

  // const boxGeometry = new BoxGeometry(0.1, 0.1, 0.1);
  // const boxMaterial = new MeshBasicMaterial({ color: 0xff0000 });
  // boxMaterial.visible = false;

  // for (const handlePos of initialPoints) {
  //   const handle = new Mesh(boxGeometry, boxMaterial);
  //   handle.position.copy(new Vector3(...Object.values(handlePos)));
  //   curveHandles.push(handle);
  //   // scene.add(handle);
  // }

  // const curve = new CatmullRomCurve3(
  //   curveHandles.map((handle) => handle.position)
  // );
  // // @ts-ignore
  // curve.closed = true;
  //Create a closed wavey loop
  // const curve = new CatmullRomCurve3([
  //   new Vector3(-100, 0, 100),
  //   new Vector3(-50, 5, 50),
  //   new Vector3(0, 0, 0),
  //   new Vector3(50, -5, 50),
  //   new Vector3(100, 0, 100),
  // ]);

  // const curve = new CatmullRomCurve3([
  //   new Vector3(-100, 0, 100),
  //   new Vector3(-50, 5, 50),
  //   new Vector3(50, 0, -100),
  //   new Vector3(50, 0, 100),
  //   new Vector3(50, -5, 50),
  //   new Vector3(100, 0, 100),
  // ]);
  // curve.closed = true;

  // const points = curve.getPoints(50);
  // const geometry = new BufferGeometry().setFromPoints(points);

  // const material = new LineBasicMaterial({ color: 0xff0000 });

  // // Create the final object to add to the scene
  // const curveObject = new Line(geometry, material);

  // function createCirclePoints(centerX, centerY, centerZ, radius, numPoints) {
  //   const circlePoints = [];

  //   for (let i = 0; i < numPoints; i++) {
  //     const theta = (i / numPoints) * Math.PI * 2;
  //     const x = centerX + radius * Math.cos(theta);
  //     const y = centerY + radius * Math.sin(theta);
  //     const z = centerZ;
  //     circlePoints.push(new Vector3(x, y, z));
  //   }

  //   return circlePoints;
  // }

  // const curve = new CubicBezierCurve3(
  //   new Vector3(-100, 0, 100),
  //   new Vector3(-50, 5, 50),
  //   new Vector3(50, 0, -100),
  //   new Vector3(50, 0, 100)
  // );
  // curve.closed = true;
  const tubeGeo = new TubeGeometry(curve, 50, 0.9, 10, true);
  const tubeMat = new MeshBasicMaterial({ color: 0x00ff00 });
  tubeMat.wireframe = true;
  tubeMat.visible = false;
  const tube = new Mesh(tubeGeo, tubeMat);
  // tube.position.set(0, 0, -600);

  const scroll = useScroll();
  const tubeRef = useRef<any>();

  const position = new Vector3();
  const cameraTarget = new Object3D();
  const cameraPosition = new Vector3();

  // function updateCamera({ time, looptime, camera }) {
  //   const t = (time % looptime) / looptime
  //   console.log('🚀 ~ file: CameraTrac.tsx:23 ~ updateCamera ~ t:', t)
  //   const t2 = ((time + 0.1) % looptime) / looptime
  //   console.log('🚀 ~ file: CameraTrac.tsx:25 ~ updateCamera ~ t2:', t2)

  //   const pos = tubeGeo.parameters.path.getPointAt(t)
  //   console.log('🚀 ~ file: CameraTrac.tsx:28 ~ updateCamera ~ pos:', pos)
  //   const pos2 = tubeGeo.parameters.path.getPointAt(t2)
  //   console.log('🚀 ~ file: CameraTrac.tsx:30 ~ updateCamera ~ pos2:', pos2)

  //   cameraPosition.copy(pos)
  //   cameraTarget.position.copy(pos2)
  //   // cameraTarget.position.sub(cameraPosition)
  //   cameraTarget.position.set(pos2.x, pos2.y, pos2.z)
  //   // cameraTarget.position.normalize()
  //   camera.position.copy(cameraPosition)
  //   camera.lookAt(cameraTarget.position)
  // }

  // useFrame(({ clock, camera }) => {
  //   updateCamera({
  //     time: clock.getElapsedTime(),
  //     looptime: 25,
  //     camera,
  //   })
  // })

  // function to move camera based on scroll
  function updateCamera({ time, offset, camera }) {
    const t = (offset % 1) / 1;
    const t2 = ((offset + 0.1) % 1) / 1;

    const pos = tubeGeo.parameters.path.getPointAt(t);
    const pos2 = tubeGeo.parameters.path.getPointAt(t2);

    cameraPosition.copy(pos);
    cameraTarget.position.copy(pos2);
    cameraTarget.position.set(pos2.x, pos2.y, pos2.z);
    camera.position.copy(cameraPosition);
    // camera.lookAt(cameraTarget.position)
    // camera.lookAt(
    //   MathUtils.lerp(camera.position.x, cameraTarget.position.x, 0.1),
    //   MathUtils.lerp(camera.position.y, cameraTarget.position.y, 0.1),
    //   MathUtils.lerp(camera.position.z, cameraTarget.position.z, 0.1)
    // );
    camera.lookAt(
      MathUtils.lerp(cameraTarget.position.x, 40, 0.8),
      MathUtils.lerp(cameraTarget.position.y, -16, 0.8),
      MathUtils.lerp(cameraTarget.position.z, 25, 0.8)
    );
    // camera.lookAt(
    //   MathUtils.lerp(camera.position.x, 0, 0.9),
    //   MathUtils.lerp(camera.position.y, 0, 0.9),
    //   MathUtils.lerp(camera.position.z, 0, 0.9)
    // );
  }
  // [40, -16, 25];
  useFrame(({ clock, camera }) => {
    updateCamera({
      time: clock.getElapsedTime(),
      offset: scroll.offset,
      camera,
    });
  });

  const [tubeState, setTubeState] = useState(tubeRef.current);

  useEffect(() => {
    setTubeState(tubeRef.current);
  }, []);

  return (
    <>
      <Context.Provider value={tubeState}>
        <group>
          <primitive object={tube} ref={tubeRef} />

          {children}
        </group>
      </Context.Provider>
    </>
  );
};
export const Context = createContext(null);

export default CameraTrac;
