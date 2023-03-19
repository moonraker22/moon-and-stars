import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Html = () => {
  const scroll = useScroll()
  const moonrakerRef = useRef<HTMLDivElement>(null!)
  const webRef = useRef<HTMLDivElement>(null!)
  const devRef = useRef<HTMLDivElement>(null!)
  const inspRef = useRef<HTMLDivElement>(null!)
  let offset = 1 - scroll.offset

  // const { height, width } = useThree((state) => state.size)
  useFrame((state, delta) => {
    // The offset is between 0 and 1, you can apply it to your models any way you like
    offset = scroll.offset
    moonrakerRef.current.style.transform = `translate3d(${offset * 100}%, 0, 0)`
    webRef.current.style.transform = `translate3d(-${offset * 100}%, 0, 0)`
    devRef.current.style.transform = `translate3d(${offset * 100}%, 0, 0)`
  })
  return (
    <Scroll html>
      <h1
        ref={moonrakerRef}
        style={{
          position: 'absolute',
          top: '60vh',
          left: '0.9em',
          fontSize: '10vw',
          color: '#C5C2BA',
          transform: `translateX(-${offset * 100}%)`,
        }}
      >
        MooNRakeR
      </h1>
      <h1
        ref={webRef}
        style={{
          position: 'absolute',
          top: '120vh',
          left: '60vw',
          fontSize: '8vw',
          color: '#C5C2BA',
        }}
      >
        WeB
      </h1>
      <h1
        ref={devRef}
        style={{
          position: 'absolute',
          top: '110.5vh',
          left: '0.5vw',
          fontSize: '25vw',
          color: '#C5C2BA',
        }}
      >
        DeV
      </h1>
      <p
        ref={inspRef}
        style={{
          position: 'absolute',
          top: '240vh',
          left: '35.5vw',
          fontSize: '4vw',
          color: 'gray',
          textShadow: '0 0 0.5em gray',
          textAlign: 'center',
        }}
      >
        Stay Inspired💫
      </p>
    </Scroll>
  )
}

export default Html
