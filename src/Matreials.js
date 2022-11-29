import {  shaderMaterial } from "@react-three/drei";

import vertexShader from './shaders/vertex.js'
import fragmentWindowShader from './shaders/fragmentWindow.js'
import fragmentScreenShader from './shaders/fragmentScreen.js'
import fragmentScreen2Shader from './shaders/fragmentScreen2.js'
import fragmentButtonShader from './shaders/fragmentButton.js'

import { extend , useFrame} from "@react-three/fiber";

export const WindowMaterial = shaderMaterial(
   
    {
        uTime: 0,
        alpha: .1
        
    },
    vertexShader,
    fragmentWindowShader
)
extend({WindowMaterial})


export const ScreenMaterial = shaderMaterial(

    {
        uTime: 0,
       
        
    },
    vertexShader,
    fragmentScreenShader

)
extend({ScreenMaterial})


export const Screen2Material = shaderMaterial(

    {
        uTime: 0,
        
    },
    vertexShader,
    fragmentScreen2Shader
)
extend({Screen2Material})

export const ButtonMaterial = shaderMaterial(

    {
        uTime: 0,
        
    },
    vertexShader,
    fragmentButtonShader
)
extend({ButtonMaterial})