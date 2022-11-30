import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import Lights from './Lights'
import { KeyboardControls } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <KeyboardControls
    map={[
       
        {name: 'leftward', keys: ['ArrowLeft', 'KeyA']},
        {name: 'rightward', keys: ['ArrowRight', 'KeyD']},
       
    ]}
    
    >
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 1, 3 ]
        } }
    >
        <Lights />
        <Experience />
    </Canvas>
    </KeyboardControls>
)