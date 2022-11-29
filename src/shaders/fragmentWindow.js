export default /* glsl */`uniform float uTime;

varying vec2 vUv;
uniform float alpha;

void coswarp(inout vec3 trip, float warpsScale ){

    trip.xyz += warpsScale * .1 * sin(3. * trip.yzx + (uTime * .15));
    trip.xyz += warpsScale * .05 * sin(11. * trip.yzx + (uTime * .15));
    trip.xyz += warpsScale * .025 * sin(17. * trip.yzx + (uTime * .15));
    
  }  

  void uvRipple(inout vec2 uv, float intensity){

	vec2 p = uv -.5;


    float cLength=length(p);

     uv= uv +(p/cLength)*cos(cLength*15.0-(uTime * 2.)*.5)*intensity;

} 

void main()
{
 
    vec2 uv = vUv;
    uvRipple(uv, .25);
    vec2 uv2 = uv;
    uv = fract(uv * 20.);
    vec3 color = vec3(uv.x, uv.y, 1.);

    
    vec3 color2 = vec3(uv2.x, uv2.y, 1.);
   
    coswarp(color, 3.);
    coswarp(color, 3.);
    coswarp(color, 3.);
    color2 = color;
    uv = vUv;
    uvRipple(uv, .25);
    color = vec3(uv.x, uv.y, 1.);
    coswarp(color, 3.);
    coswarp(color, 3.);
    coswarp(color, 3.);
    // color = mix( vec3(.1, 0.,color2.r), color, color2.b);
   

    color = vec3(color.b,1., 1.);

    if(alpha > .1){

    color = vec3(step(color2.r, .05));
    }


    gl_FragColor = vec4(color, alpha);
}`