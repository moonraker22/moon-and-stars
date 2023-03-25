import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  TubeGeometry,
  Vector3,
} from 'three'
import { KnotCurve } from 'three/examples/jsm/curves/CurveExtras'

type Props = {}

const CameraTrac = (props: Props) => {
  // const curve = new FigureEightPolynomialKnot()
  // const curve = new HeartCurve()
  // nice curve
  const curve = new KnotCurve()
  // const curve = new VivianiCurve()

  const tubeGeo = new TubeGeometry(curve, 100, 0.9, 10, true)
  const tubeMat = new MeshBasicMaterial({ color: 0x00ff00 })
  tubeMat.wireframe = true
  // tubeMat.visible = false
  const tube = new Mesh(tubeGeo, tubeMat)

  const scroll = useScroll()

  const position = new Vector3()
  const cameraTarget = new Object3D()
  const cameraPosition = new Vector3()

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
    const t = (offset % 1) / 1
    const t2 = ((offset + 0.1) % 1) / 1

    const pos = tubeGeo.parameters.path.getPointAt(t)
    const pos2 = tubeGeo.parameters.path.getPointAt(t2)

    cameraPosition.copy(pos)
    cameraTarget.position.copy(pos2)
    cameraTarget.position.set(pos2.x, pos2.y, pos2.z)
    camera.position.copy(cameraPosition)
    // camera.lookAt(cameraTarget.position)
    camera.lookAt(
      MathUtils.lerp(camera.position.x, cameraTarget.position.x, 0.1),
      MathUtils.lerp(camera.position.y, cameraTarget.position.y, 0.1),
      MathUtils.lerp(camera.position.z, cameraTarget.position.z, 0.1)
    )
  }

  useFrame(({ clock, camera }) => {
    updateCamera({
      time: clock.getElapsedTime(),
      offset: scroll.offset,
      camera,
    })
  })

  return (
    <>
      <group>
        <primitive object={tube} />
      </group>
    </>
  )
}

export default CameraTrac
