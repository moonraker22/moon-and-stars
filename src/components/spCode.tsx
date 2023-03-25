/* eslint-disable */
// @ts-nocheck
export const spCode = `  
  displace(getRayDirection())
  rotateY(-0.1 * time)
  let s = getRayDirection()

  let n = noise(getSpace() * 50 + time + 10000000)
  color(vec3(0.6, 0.8, 0.8) + normal * 0.2)
  metal(n)
  shine(n)
  sphere(0.5 + n * nsin(time) * 3)
  
  `

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

function ShaderPark() {
  const mouse = useRef(new Vector2(0, 0))
  const windowHalfX = window.innerWidth / 2
  const windowHalfY = window.innerHeight / 2
  const onDocumentMouseMove = (event: MouseEvent) => {
    mouse.current.x = event.clientX - windowHalfX
    mouse.current.y = event.clientY - windowHalfY
  }
  document.addEventListener('mousemove', onDocumentMouseMove, false)

  let params = { time: 0 }

  const shaderCode = `
    float gyroid(vec3 p) {
      float t = time * 0.1;
      float a = sin(p.x + t) + cos(p.y + t) + sin(p.z + t);
      float b = cos(p.x + t) + sin(p.y + t) + cos(p.z + t);
      return sin(a) + cos(b);
    }

    float shape(vec3 p) {
      float d = 0.0;
      for (float i = 0.0; i < size; i++) {
        d += gyroid(p + i * gyroidSteps);
      }
      return d;
    }

    void main() {
      vec3 p = position;
      float d = shape(p);
      float f = smoothstep(0.0, 0.5, d);
      vec3 color = mix(vec3(0.0), vec3(1.0), f);
      gl_FragColor = vec4(color, 1.0);
    }
  `
  const spCode = `  let size = input(12, 10, 50.0);
    
  let gyroidSteps = input(.09, 0, .1)
  let s = getSpace() + .3;

  let col = vec3(1, 1, 1.5) + normal * .2;
  metal(.2);
  shine(.5);
  col -= length(s);
  color(col);

  s += time *.1;
  shape(() =>{
    setSDF(min(gyroidSteps, sin(s.x * size) + sin(s.y * size) + sin(s.z * size)));
    intersect();
    sphere(.5);
  })()
  
  displace(mouse);
  
  blend(.2)
  sphere(.2)`

  const base = ` 
  //let mouse = input();
  //displace(getRayDirection())
  rotateY(-0.1 * mouse.x * PI / 2 + time*.5);
  let n = noise(getSpace() * 40 + time + 10000000);
  color(vec3(0, 0, .5) + normal * .2);
  metal(n);
  shine(n);
  sphere(0.5 + n * nsin(time) * 3);`

  const mouseInt = ` 
  rotateY(mouse.x * PI / 4 + time*.5);
  rotateX(mouse.y * PI / 4);
  metal(.5);
  shine(.4);
  color(getRayDirection()+.2);
  rotateY(getRayDirection().y*4+time)
  boxFrame(vec3(.4), .02);
  expand(.02);
  blend(nsin(time)*.6)
  sphere(.2);`

  const sphere = ` 
 //rotateY(mouse.x * PI / 4 + time*.5);
  //rotateX(mouse.y * PI / 4);
  metal(.5);
  shine(.4);
  //color(getRayDirection()+.2 * noise(normal * 40 + time + 10000000));
  color(normal);

  //rotateY(getRayDirection().y*4+time)
  //boxFrame(vec3(.4), .02);
  expand(.02);
  blend(nsin(time)*.6)
  sphere(.2);`

  let lines = `
  let s = getSpace() 
  let r = getRayDirection()
  let p1 = vec3(0.2)
  let p2 = vec3(0.7)
  let p3 = vec3(0.5)
  let p4 = vec3(0.3)
  //line(p3,p4, 0.2)
  let n = noise(getSpace() * 60 + mouse.y + 10000000);

  color(vec3(normal.y , s.x, s.y))
  metal(n);
  shine(n);
  displace(n * 0.1 * getRayDirection() + time * 0.1 * getRayDirection())
  
  //line(p1,p2, 0.2)
  fresnel(0.9)
boxFrame(vec3(.4), .02);
mixGeo(0.8)
sphere(.8)
  `

  let morph = `let scale = 4;
let s = getSpace();
let n = noise(s*scale+vec3(0, 0, time) + noise(s*scale+vec3(0, 0, time)));
setStepSize(.4)

color(vec3(n)*.5+.5+normal*.2+vec3(0, 0, 1));
sphere(.9+.1*n)`

  let moon = `let s = getSpace() 
  let r = getRayDirection()
  let t = vec3(time)
  let n = noise(s * 60 + time + 10000000)
  let mc = vec3(mouse.x * n, s.x * n, s.y * time)
  let oc = vec3(mouse.y + n, normal.z + n, s.x * time)
  let nx = 0.03*noise(8*r+time )
  
  
  //mirrorX()
  function M() {
      let p1 = vec3(-0.9,0.4,0)
  	let p2 = vec3(-0.9,-0.4,0)
  
  	let p3 = vec3(-0.9,0.4,0)
  	let p4 = vec3(-0.7,-0.1,0)
  
  	let p5 = vec3(-0.7,-0.1,0)
  	let p6 = vec3(-0.5,0.4,0)
  
  	let p7 = vec3(-0.5,0.4,0)
  	let p8 = vec3(-0.5,-0.4,0)
  
	line(p2,p1, 0.09)
	line(p3,p4,0.09)
	line(p5,p6,0.09)
	line(p7,p8,0.09)
  }

  function N() {
      let p1 = vec3(0.3,0.4, 0)
  	let p2 = vec3(0.3,-0.4, 0)
  
  	let p3 =  vec3(0.3, 0.4, 0)
  	let p4 = vec3(0.6, -0.4, 0)
  
  	let p5 = vec3(0.6, -0.4, 0)
  	let p6 = vec3(0.6,0.4,0)
  
  	let p7 = vec3(-0.5,0.4,0)
  	let p8 = vec3(-0.5,-0.4,0)
  
	line(p2,p1, 0.09)
	line(p3,p4,0.09)
	line(p5,p6,0.09)
	//line(p7,p8,0.09)
  }

  

color(mc)
metal(0.5)
shine(0.5)
M()
reset()

//o
color(oc)
displace(vec3(-0.2,0,0))
sphere(0.25)
expand(nx)

//o
reset()
//color(vec3(.1))
displace(vec3(0.2,0,0))
sphere(0.25)

color(mc)
N()
expand(nx)
`

  let geo = new PlaneGeometry(20, 20, 10, 10)
  geo.computeBoundingSphere()
  geo.center()
  let sculpture = createSculptureWithGeometry(geo, morph, () => ({}))
  // let sculpture = createSculpture(mouseInt, () => ({
  //   time: params.time,
  //   mouse: mouse.current,
  // }))

  useFrame(() => {
    params.time += 0.01
  })

  // scene.add(shader)
  return (
    <group>
      <primitive object={sculpture} position={[0, 0, 0]} />
    </group>
  )
}

const mouseInt = ` 
  rotateY(mouse.x * PI / 4 + time*.5);
  rotateX(mouse.y * PI / 4);
  metal(.5);
  shine(.4);
  color(getRayDirection()+.2);
  rotateY(getRayDirection().y*4+time)
  boxFrame(vec3(.4), .02);
  expand(.02);
  blend(nsin(time)*.6)
  sphere(.2);`

let lines = `
  let s = getSpace() 
  let r = getRayDirection()
  let p1 = vec3(0.2)
  let p2 = vec3(0.7)
  let p3 = vec3(0.5)
  let p4 = vec3(0.3)
  //line(p3,p4, 0.2)
  let n = noise(getSpace() * 60 + mouse.y + 10000000);

  color(vec3(normal.y , s.x, s.y))
  metal(n);
  shine(n);
  displace(n * 0.1 * getRayDirection() + time * 0.1 * getRayDirection())
  
  //line(p1,p2, 0.2)
  fresnel(0.9)
boxFrame(vec3(.4), .02);
mixGeo(0.8)
sphere(.8)
  `

let morph = `let scale = 4;
let s = getSpace();
let n = noise(s*scale+vec3(0, 0, time) + noise(s*scale+vec3(0, 0, time)));
setStepSize(.4)

color(vec3(n)*.5+.5+normal*.2+vec3(0, 0, 1));
sphere(.9+.1*n)`

let moon = `let s = getSpace() 
  let r = getRayDirection()
  let t = vec3(time)
  let n = noise(s * 60 + time + 10000000)
  let mc = vec3(mouse.x * n, s.x * n, s.y * time)
  let oc = vec3(mouse.y + n, normal.z + n, s.x * time)
  let nx = 0.03*noise(8*r+time )
  
  
  //mirrorX()
  function M() {
      let p1 = vec3(-0.9,0.4,0)
  	let p2 = vec3(-0.9,-0.4,0)
  
  	let p3 = vec3(-0.9,0.4,0)
  	let p4 = vec3(-0.7,-0.1,0)
  
  	let p5 = vec3(-0.7,-0.1,0)
  	let p6 = vec3(-0.5,0.4,0)
  
  	let p7 = vec3(-0.5,0.4,0)
  	let p8 = vec3(-0.5,-0.4,0)
  
	line(p2,p1, 0.09)
	line(p3,p4,0.09)
	line(p5,p6,0.09)
	line(p7,p8,0.09)
  }

  function N() {
      let p1 = vec3(0.3,0.4, 0)
  	let p2 = vec3(0.3,-0.4, 0)
  
  	let p3 =  vec3(0.3, 0.4, 0)
  	let p4 = vec3(0.6, -0.4, 0)
  
  	let p5 = vec3(0.6, -0.4, 0)
  	let p6 = vec3(0.6,0.4,0)
  
  	let p7 = vec3(-0.5,0.4,0)
  	let p8 = vec3(-0.5,-0.4,0)
  
	line(p2,p1, 0.09)
	line(p3,p4,0.09)
	line(p5,p6,0.09)
	//line(p7,p8,0.09)
  }

  

color(mc)
metal(0.5)
shine(0.5)
M()
reset()

//o
color(oc)
displace(vec3(-0.2,0,0))
sphere(0.25)
expand(nx)

//o
reset()
//color(vec3(.1))
displace(vec3(0.2,0,0))
sphere(0.25)

color(mc)
N()
expand(nx)
`
const mouse = useRef(new Vector2(0, 0))
const windowHalfX = window.innerWidth / 2
const windowHalfY = window.innerHeight / 2
const onDocumentMouseMove = (event: MouseEvent) => {
  mouse.current.x = event.clientX - windowHalfX
  mouse.current.y = event.clientY - windowHalfY
}
document.addEventListener('mousemove', onDocumentMouseMove, false)

let params = { time: 0 }
let geo = new PlaneGeometry(20, 20, 10, 10)
geo.computeBoundingSphere()
geo.center()
let sculpture = createSculpture(lines, () => ({
  time: params.time,
  mouse: mouse.current,
}))

useFrame(() => {
  params.time += 0.01
})
