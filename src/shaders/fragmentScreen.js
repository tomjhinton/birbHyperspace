export default /* glsl */`uniform float uTime;

varying vec2 vUv;

void coswarp(inout vec3 trip, float warpsScale ){

    trip.xyz += warpsScale * .1 * sin(3. * trip.yzx + (uTime * .15));
    trip.xyz += warpsScale * .05 * sin(11. * trip.yzx + (uTime * .15));
    trip.xyz += warpsScale * .025 * sin(17. * trip.yzx + (uTime * .15));
    
  }  

  void uvRipple(inout vec2 uv, float intensity){

	vec2 p = uv -.5;


    float cLength=length(p);

     uv= uv +(p/cLength)*cos(cLength*15.0-uTime*.5)*intensity;

} 

void main()
{
 
    vec2 uv = vUv;
    vec3 color = vec3(0.);
    float t = uTime +length(uv-.5);
    vec2 uv2 = fract(uv * 10.);

    color.b  = step(fract(sin(uv2.y) + sin(uv.x *( (24. * sin(t)) ) ) * .1),.1 );
  


    gl_FragColor = vec4(color, 1.0);
}`