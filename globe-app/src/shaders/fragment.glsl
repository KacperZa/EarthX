uniform sampler2D uTexture;
uniform float uTime;
uniform vec3 vCameraPosition;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;



void main() {


    vec4 color = texture2D(uTexture, vUv);
    gl_FragColor = vec4(color.xyz, 1);
}