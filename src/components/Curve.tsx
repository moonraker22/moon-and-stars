import { useThree } from "@react-three/fiber";
import {
  BoxGeometry,
  BufferGeometry,
  CatmullRomCurve3,
  LineBasicMaterial,
  LineLoop,
  Mesh,
  MeshBasicMaterial,
  Vector3,
} from "three";

type Props = {};

const CatmullCurve = (props: Props) => {
  const scene = useThree((state) => state.scene);
  const curveHandles = [];
  const initialPoints = [
    { x: 50, y: 0, z: -50 },
    { x: 50, y: 0, z: 50 },
    { x: -50, y: 0, z: 50 },
    { x: -50, y: 0, z: -50 },
  ];

  const boxGeometry = new BoxGeometry(0.1, 0.1, 0.1);
  const boxMaterial = new MeshBasicMaterial({ color: 0xff0000 });

  for (const handlePos of initialPoints) {
    const handle = new Mesh(boxGeometry, boxMaterial);
    handle.position.copy(new Vector3(...Object.values(handlePos)));
    curveHandles.push(handle);
    scene.add(handle);
  }

  const curve = new CatmullRomCurve3(
    curveHandles.map((handle) => handle.position)
  );
  //   curve.curveType = "centripetal";
  //   curve.closed = true;

  const points = curve.getPoints(50);
  const line = new LineLoop(
    new BufferGeometry().setFromPoints(points),
    new LineBasicMaterial({ color: 0x00ff00 })
  );

  scene.add(line);
  return <></>;
};

export default CatmullCurve;
