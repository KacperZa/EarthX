import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import earthTextureImg  from  '../earth.jpg';
import Text_Bubble from "./Text_Bubble";

function Globe() {
  const canvasRef = useRef(null);
  const [bubble, setBubble] = useState({ visible: false,  text: "", x:0, y:0});
  useEffect(() =>{
    const canvas = canvasRef.current;
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000) 
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.position.setZ(250);

    const geometry = new THREE.SphereGeometry(100,64,64);
    const earthTexture = new THREE.TextureLoader().load(earthTextureImg)
    const material = new THREE.MeshPhysicalMaterial( { 
      map: earthTexture
    });
    const sphere = new THREE.Mesh(geometry, material)

    scene.add(sphere);

    const starsGroup = new THREE.Group();
    scene.add(starsGroup)

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(200,200,200);

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add( pointLight, ambientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200,50);
    // scene.add(lightHelper, gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0,0,0);
    controls.enablePan = false;
    controls.minDistance = 120;
    controls.maxDistance = 400;
    controls.maxPolarAngle = Math.PI;
    controls.minPolarAngle = 0;
    
    const geometry2 = new THREE.SphereGeometry(0.25, 24, 24);
    const material2 = new THREE.MeshStandardMaterial( {color: 0xffffff})

    function addStar(){
      const star = new THREE.Mesh(geometry2, material2)

      const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ))
      star.position.set(x,y,z)
      starsGroup.add(star)
    }

    Array(200).fill().forEach(addStar)


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
      sphere.rotation.y += 0.005;

      controls.update();
      renderer.render( scene, camera );
    }

    
    const raycaster = new THREE.Raycaster();
    
    
    function onMouseDown(event) {
      const coords = new THREE.Vector2(
        (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
      );
      
      raycaster.setFromCamera(coords, camera);
      
      const intersections = raycaster.intersectObjects(scene.children, true);
      if (intersections.length > 0) {
        setBubble({
          visible: true,
          text: "TEST",
          x: event.clientX,
          y: event.clientY,
        })
      }
    }
    canvas.addEventListener('mousedown', onMouseDown);
    
    animate()

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      renderer.dispose();
    };
  }, [])
  return<> <canvas id="bg" ref={canvasRef} style={{ display: "block", width: "100vw", height: "100vh" }} />
    {bubble.visible && (<Text_Bubble text={bubble.text} style={{ left:bubble.x + "px", top:bubble.y + "px", position:"absolute", pointerEvents: "none"}}/>)}
  </>
}

export default Globe;
