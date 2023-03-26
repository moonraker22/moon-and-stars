import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

type Props = {}

const MyCanvas = ({ children }) => {
  return (
    <>
      <Suspense>
        <Canvas>{children}</Canvas>
      </Suspense>
    </>
  )
}

export default MyCanvas
