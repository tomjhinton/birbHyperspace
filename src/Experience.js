import React, { useRef , useState, Suspense} from "react";
import { useGLTF, shaderMaterial, OrbitControls, CameraShake , Decal, PivotControls, Stars, useKeyboardControls} from "@react-three/drei";

import vertexShader from './shaders/vertex.js'
import fragmentShader from './shaders/fragmentWindow.js'
import { extend , useFrame, useLoader} from "@react-three/fiber";
import { WindowMaterial, ScreenMaterial, Screen2Material, ButtonMaterial } from "./Matreials.js";
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'

import Title from "./Title.js";

export default function Experience(props) {
    const { nodes, materials } = useGLTF("./HYPERSPACE2.glb");
   const [active, setActive] = useState(true)
    const [hyper, setHyper] = useState(false)
    const [spin, setSpin] = useState(false)

    const [subscribeKeys, getKeys] = useKeyboardControls() 
    const decal = useLoader(THREE.TextureLoader, './decal.png')


    const { position } = useSpring({ position: active ? 0 : -.01 })
    const { alpha } = useSpring({ config: { duration: 1000 }, alpha: active ? .1 : 1. })
   
   

   function pushButton(){
    setActive(!active)
    setHyper(!hyper)
    
   
  
   }

   function spinSetter(){
       setSpin(!spin)
       console.log(spin)
   }

   const ship = useRef()

    const windowMaterial = useRef()
    const screenMaterial = useRef()
    const screen2Material = useRef()
    
    const buttonMaterial = useRef()
    const buttonMaterial2 = useRef()
    const buttonMaterial3 = useRef()
    const buttonMaterial4 = useRef()
    const buttonMaterial5 = useRef()
    const buttonMaterial6 = useRef()
    const buttonMaterial7 = useRef()
    const buttonMaterial8 = useRef()
    const buttonMaterial9 = useRef()
    const buttonMaterial10 = useRef()
    const buttonMaterial11 = useRef()
    const buttonMaterial12 = useRef()
    const buttonMaterial13 = useRef()
    const buttonMaterial14 = useRef()
    const buttonMaterial15 = useRef()
    const buttonMaterial16 = useRef()
    const buttonMaterial17 = useRef()
    const buttonMaterial18 = useRef()

    const bigButton = useRef()

    const [smoothedCameraPosition] = useState(() => new THREE.Vector3(0, 1, 3))
    const [smoothedCameraTarget] = useState(() => new THREE.Vector3())

    useFrame((state, delta) => {
        const { leftward, rightward} = getKeys()
        windowMaterial.current.uTime += delta
      
        windowMaterial.current.alpha = bigButton.current.alpha
       screenMaterial.current.uTime += delta
       screen2Material.current.uTime += delta
      
        buttonMaterial.current.uTime += delta
      buttonMaterial2.current.uTime += delta * .25
      buttonMaterial3.current.uTime += delta * .8
      buttonMaterial4.current.uTime += delta * .77
      buttonMaterial5.current.uTime += delta * .3
      buttonMaterial6.current.uTime += delta * .7
      buttonMaterial7.current.uTime += delta * .4
      buttonMaterial8.current.uTime += delta * .2
      buttonMaterial9.current.uTime += delta * .66
      buttonMaterial10.current.uTime += delta * .23
      buttonMaterial11.current.uTime += delta * .43
      buttonMaterial12.current.uTime += delta *  .88
      buttonMaterial13.current.uTime += delta * .71
      buttonMaterial14.current.uTime += delta * .29
      buttonMaterial15.current.uTime += delta * .34
      buttonMaterial16.current.uTime += delta * .77
      buttonMaterial17.current.uTime += delta * .44
      buttonMaterial18.current.uTime += delta * .23

       // Camera

       const bodyPosition = ship.current.position

       const cameraPosition = new THREE.Vector3()
       
       if(!spin){cameraPosition.copy(bodyPosition)
       cameraPosition.z += 3.2
       cameraPosition.y += .7

       const cameraTarget = new THREE.Vector3()
       cameraTarget.copy(bodyPosition)
       cameraTarget.y+= 0.25

       smoothedCameraPosition.lerp(cameraPosition, 2 * delta)
       smoothedCameraTarget.lerp(cameraTarget, 2 * delta)

       state.camera.position.copy(smoothedCameraPosition)
       state.camera.quaternion.copy(ship.current.quaternion)
       state.camera.lookAt(smoothedCameraTarget)
}
      if(leftward){
          console.log( ship.current)
          ship.current.position.x -= .01
         
         
      }

      if(rightward){
        ship.current.position.x += .01
        
    }
     
    })

    const config = {
        maxYaw: 0.1, // Max amount camera can yaw in either direction
        maxPitch: 0.1, // Max amount camera can pitch in either direction
        maxRoll: 0.1, // Max amount camera can roll in either direction
        yawFrequency: 0.5, // Frequency of the the yaw rotation
        pitchFrequency: 0.5, // Frequency of the pitch rotation
        rollFrequency: 0.5, // Frequency of the roll rotation
        intensity: 1, // initial intensity of the shake
        decay: false, // should the intensity decay over time
        decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
        controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
      }
      
      materials["Material.001"].side =  THREE.DoubleSide
    return (
        <Suspense>
      <group {...props} dispose={null} ref={ship}>
              {spin && <OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI * .5}/> }

        {hyper && <CameraShake
        {...config} />}
        <Stars radius={20} depth={50} count={5000} factor={4} saturation={0} fade speed={3} />
           <Title />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.004"]}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.windows.geometry}
         
        >
        <windowMaterial ref={windowMaterial} transparent alpha={alpha}/>
        </animated.mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen1.geometry}
         
        >
        <screenMaterial ref={screenMaterial} />
        </mesh>
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen2.geometry}
          >
          <screen2Material ref={screen2Material}/>
          </mesh>
          <animated.mesh position-y={position}  ref={bigButton} onClick={(e) => {
              pushButton()
          }}
          castShadow
          receiveShadow
          geometry={nodes.hyperscape.geometry}
          alpha={alpha}
          onPointerOver={ ()=>  document.body.style.cursor = 'pointer'
        }
         onPointerOut={()=>  document.body.style.cursor = 'auto'}
       
        >
             <meshBasicMaterial color="red"/>
             {/* <PivotControls> */}
            <Decal
     // Makes "bounding box" of the decal visible
    position={[.25, .125, 1.52]} // Position of the decal
    rotation={[-1.6,0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
    scale={.2} // Scale of the decal
    
  >
    <meshStandardMaterial map={decal} depthTest= {true} transparent
     depthWrite= {false}
                polygonOffset= {true}
                polygonOffsetFactor={ - 4}/>
  </Decal>
  {/* </PivotControls> */}

            </animated.mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons018.geometry}
          >
          <buttonMaterial ref={buttonMaterial}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons001.geometry}
          >
          <buttonMaterial ref={buttonMaterial2}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons002.geometry}
          >
          <buttonMaterial ref={buttonMaterial3}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons003.geometry}
          >
          <buttonMaterial ref={buttonMaterial4}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons004.geometry}
          >
          <buttonMaterial ref={buttonMaterial5}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons005.geometry}
          >
          <buttonMaterial ref={buttonMaterial6}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons006.geometry}
          >
          <buttonMaterial ref={buttonMaterial7}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons007.geometry}
          onClick={() =>{
            spinSetter()}}
            onPointerOver={ ()=>  document.body.style.cursor = 'pointer'
        }
         onPointerOut={()=>  document.body.style.cursor = 'auto'}
          >
          <buttonMaterial ref={buttonMaterial8}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons008.geometry}
          >
          <buttonMaterial ref={buttonMaterial9}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons009.geometry}
          >
          <buttonMaterial ref={buttonMaterial10}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons010.geometry}
          >
          <buttonMaterial ref={buttonMaterial11}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons011.geometry}
          >
          <buttonMaterial ref={buttonMaterial12}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons012.geometry}
          >
          <buttonMaterial ref={buttonMaterial13}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons013.geometry}
          >
          <buttonMaterial ref={buttonMaterial14}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons014.geometry}
          >
          <buttonMaterial ref={buttonMaterial15}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons015.geometry}
          >
          <buttonMaterial ref={buttonMaterial16}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons016.geometry}
          >
          <buttonMaterial ref={buttonMaterial17}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons017.geometry}
          >
          <buttonMaterial ref={buttonMaterial18}/>
          </mesh>
      </group>
      </Suspense>
    );
  }

useGLTF.preload("/HYPERSPACE2.glb");
