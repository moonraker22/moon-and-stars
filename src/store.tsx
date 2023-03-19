const randomVector = (r) => [
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
  r / 2 - Math.random() * r,
]
const randomEuler = () => [
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI,
]
export const data = Array.from({ length: 100 }, (r = 55) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
  scale: [0.8, 0.8, 0.8],
}))

export const data2 = Array.from({ length: 100 }, (r = 55) => ({
  random: Math.random(),
  position: randomVector(r),
  rotation: randomEuler(),
}))
