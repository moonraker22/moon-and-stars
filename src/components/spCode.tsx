/* eslint-disable */
// @ts-nocheck
export function spCode() {
  return `  
  displace(getRayDirection())
  rotateY(-0.1 * time)
  let s = getRayDirection()

  let n = noise(getSpace() * 50 + time + 10000000)
  color(vec3(0.6, 0.8, 0.8) + normal * 0.2)
  metal(n)
  shine(n)
  sphere(0.5 + n * nsin(time) * 3)
  
  `
}

// export function spText() {
//   let size = input(12, 10, 50.0)
//   let gyroidSteps = input(0.06, 0, 0.1)
//   let s = getSpace()
//   displace(getRayDirection())
//   let col = vec3(0.8, 1.2, 0.8) + normal * 0.2
//   metal(0.2)
//   shine(0.5)

//   col -= length(s) * 0.7
//   color(col)

//   s = vec3(s.x, s.y, s.z - time)
//   let sdf = min(
//     gyroidSteps,
//     sin(s.x * size) + sin(s.y * size) + sin(s.z * size)
//   )
//   setSDF(sdf)
//   intersect()
//   sphere(1)
// }
