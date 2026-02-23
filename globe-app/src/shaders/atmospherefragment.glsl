


uniform sampler2D uTexture;
uniform float uTime;
uniform vec3 vCameraPosition;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;



void main() {


    // vec4 color = texture2D(uTexture, vUv);
    // gl_FragColor = vec4(color.xyz, 1);
    vec3 normalDir = normalize(vNormal);
    vec3 viewDirection = normalize(cameraPosition - vPosition);

    float fresnel1 = pow(1.0 - dot(viewDirection, normalDir),2.0);
	gl_FragColor = vec4(0.13, 0.31 * fresnel1, 0.73 , fresnel1);
    // float fresnel2 = pow( dot(viewDirection, normalDir),0.5);

    // float finalFresnel = fresnel2 * 0.2 + fresnel1 * 0.6;
}