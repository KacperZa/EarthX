import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import earthTextureImg  from  '../earth.jpg';

function Globe() {
  const canvasRef = useRef(null);

  useEffect(() =>{
    const canvas = canvasRef.current;
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000) 
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.position.setZ(30);

    const geometry = new THREE.SphereGeometry(15,52,52);
    const earthTexture = new THREE.TextureLoader().load(earthTextureImg)
    const material = new THREE.MeshStandardMaterial( { 
      map: earthTexture
    });
    const sphere = new THREE.Mesh(geometry, material)

    scene.add(sphere);

    const starsGroup = new THREE.Group();
    scene.add(starsGroup)

    const pointLight = new THREE.PointLight(0xffffff);


    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add( pointLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200,50);
    // scene.add(lightHelper, gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0,0,0);
    controls.enablePan = false;
    controls.minDistance = 30;
    controls.maxDistance = 60;
    controls.maxPolarAngle = Math.PI;
    controls.minPolarAngle = 0;
    
    const geometry2 = new THREE.SphereGeometry(0.25, 24, 24);
    const material2 = new THREE.MeshStandardMaterial( {color: 0xffffff})

    // function addStar(){
    //   const star = new THREE.Mesh(geometry2, material2)

    //   const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ))
    //   star.position.set(x,y,z)
    //   starsGroup.add(star)
    // }

    // Array(200).fill().forEach(addStar)


    // const spaceTexture = new THREE.TextureLoader().load(spaceTextureImg)

    // const spaceGeo = new THREE.SphereGeometry(500, 32,32)
    // const spaceMat = new THREE.MeshBasicMaterial({
    //   map: spaceTexture,
    //   side: THREE.BackSide
    // });

    // const spaceMesh = new THREE.Mesh(spaceGeo,spaceMat)
    // scene.add(spaceMesh)

    function animate() {
      requestAnimationFrame( animate );
      sphere.rotation.y += 0.00005;

      pointLight.position.set(
        camera.position.x+10,
        camera.position.y+10,
        camera.position.z+10
    );
      controls.update();
      renderer.render( scene, camera );
    }

    animate()
  }, [])
  return <canvas id="bg" ref={canvasRef} style={{ display: "block", width: "100vw", height: "100vh" }}></canvas>
}

export default Globe;
