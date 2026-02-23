uniform float uTime;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
    vUv = uv;
    
    vPosition = position;
    
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vPosition = worldPosition.xyz;

    vNormal = normalize(mat3(modelMatrix) * normal);
    

    // MVP
    vec4 modelViewPosition = modelViewMatrix * vec4( position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
    // gl_Position = projectedPosition;
}