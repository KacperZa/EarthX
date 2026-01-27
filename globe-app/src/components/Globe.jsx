import { use, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import earthTextureImg  from  '../earth.jpg';
import Text_Bubble from "./Text_Bubble";
import './globe.css'
import ID_MAP from '.././earthcolors.jpg';
import Europe from "./EuropaComponents/Europe";

import worldData from '../data.json'

function Globe() {
  const canvasRef = useRef(null);
  const [bubble, setBubble] = useState({ visible: false, text: "", x:0, y:0});
  const [isHovered, setIsHovered] = useState(false);
  const [Europa, setEuropa] = useState(false)
  const [Azja, setAzja] = useState(false)
  const [Afryka, setAfryka] = useState(false)
  const [Australia, setAustralia] = useState(false)
  const [AmerykaPoł, setAmerykaPoł] = useState(false)
  const [AmerykaPuł, setAmerykaPuł] = useState(false)
  
  const [selectedContinent, setSelectedContinent] = useState(null)
  
  
  const ID_TO_REGION = {
    "254,0,0": "Europa",
    "0,255,1": "Ameryka Południowa",
    "254,0,234": "Ameryka Północna",
    "0,67,0": "Australia",
    "255,255,0": "Afryka",
    "98,0,235": "Azja",
  }
  
  
  
  
  useEffect(() =>{
    
    function rgbKey(r,g,b) {
      return `${r},${g},${b}`;
    }
    
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
    sphere.rotation.z = THREE.MathUtils.degToRad(23.5); // nachylenie osi
    
    
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
    
    controls.enabled = false;
    // console.log( container.clientWidth,container.clientHeight);
    
    controls.target.set(0,0,0);
    controls.enablePan = false;
    controls.minDistance = 120;
    controls.maxDistance = 400;
    controls.maxPolarAngle = Math.PI;
    controls.minPolarAngle = 0;
    controls.rotateSpeed = 0.5
    // controls.enablePan = false
    
    controls.dampingFactor = 0.05 // Waga obracania
    controls.enableDamping = true

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
     
    const idImg = new Image();
    idImg.crossOrigin = "anonymous";
    idImg.src =ID_MAP;
    
    const idCanvas = document.createElement("canvas");
    const idCtx = idCanvas.getContext("2d");
    
    idImg.onload = () => {
      idCanvas.width = idImg.width;
      idCanvas.height = idImg.height;
      idCtx.drawImage(idImg,0,0)
    };
    
    
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    
    let isHovered = false
    
    // Funkcja wywoływana gdy sie kliknie na element
    function onMouseDown(event) {
      const coords = new THREE.Vector2(
        (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
      );
      
      
      raycaster.setFromCamera(coords, camera);
      
      const intersections = raycaster.intersectObjects(scene.children, true);
      
      if (intersections.length > 0) {
        
        const hit = intersections[0];
        
        if (!idImg.complete) {
          console.warn("ID mapa jeszcze nie załadowana");
          return;
        }
        
        if (hit.uv) {
          const u = hit.uv.x;
          const v = 1 - hit.uv.y;
          
          const px = Math.floor(u * idImg.width)
          const py = Math.floor(v * idImg.height)
          
          const pixel = idCtx.getImageData(px,py,1,1).data;
          const rgb = `${pixel[0]},${pixel[1]},${pixel[2]}`;
          console.log("RGB ODCZYTANE:", rgb)
          
          const region =  ID_TO_REGION[rgb] || "Nieznany region";
          
          setSelectedContinent(region)
          
          if( region === "Europa"){
            setEuropa(true)
          }
          
          setBubble({
            visible: true,
            text: region,
            x: event.clientX,
            y: event.clientY,
          })
          
          
        }
      }
    }
    
    // Funkcja wywoływana gdy kursor znajdzie się nad elementem
    function onPointerMove(event) {
      const coords = new THREE.Vector2(
        (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
      );
      
      raycaster.setFromCamera(coords, camera);
      
      const intersections = raycaster.intersectObject(sphere);
      
      if (intersections.length > 0) {
        setIsHovered(true)
        isHovered = true
        controls.enabled = true
      } else {
        isHovered = false
      }
    }

    
    function animate() {
      requestAnimationFrame( animate );
      if (!isHovered){
        sphere.rotation.y += 0.001;
        // sphere.rotation.z += 0.0005;
      }
      controls.update();
      renderer.render( scene, camera );
    }
    
    function onPointerUp() {
      controls.enabled = false;
    }
    
    
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerdown', onPointerUp)
    // canvas.addEventListener('mouseenter', onMouseEnter)
    // canvas.addEventListener('mouseleave');
    
    animate()
    
    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerdown', onPointerUp)
      
      renderer.dispose();
    };
  }, [])
  return<> 
  {bubble.visible && (  <div className="test"style={{ position: "absolute", top: bubble.y + "px", left: bubble.x + "px", zIndex: 10}}>
  {bubble.text}
</div>)}
    <div className="container">
    {Europa && (<Europe style={{ position:"absolute", width: "80vw", height: "80vh", zIndex:20}} selectedContinent={selectedContinent} worldData={worldData} setEuropa={setEuropa} Europa={Europa}> HALO TO EUROPA</Europe>)}
    </div>
  <canvas id="bg" ref={canvasRef} style={{ display: "block", width: "100vw", height: "100vh", zIndex:1 }}  />
    {/* {bubble.visible && (<Text_Bubble text={bubble.text} style={{ left:bubble.x + "px", top:bubble.y + "px", position:"absolute", pointerEvents: "none"}}/>)} */}
  </>
}

export default Globe;
