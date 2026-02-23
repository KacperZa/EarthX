import { use, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/Addons.js";

import earthTextureImg from '../earth.jpg';
import moonTextureImg from '../moon.jpg'
import sunTextureImg from '../sun.jpg'
import stars from '../stars.jpg'
import Text_Bubble from "./Text_Bubble";
import './globe.css'
import ID_MAP from '.././earthcolors.jpg';
import Europe from "./EuropaComponents/Europe";

import atmosphereFragmentShader from '../shaders/atmospherefragment.glsl?raw'
import atmosphereVertexShader from '../shaders/atmospherevertex.glsl?raw'

import worldData from '../data.json'

function Globe() {
  const canvasRef = useRef(null);
  const [bubble, setBubble] = useState({ visible: false, text: "", x:0, y:0});
  const [Europa, setEuropa] = useState(false)
  const [Azja, setAzja] = useState(false)
  const [Afryka, setAfryka] = useState(false)
  const [Australia, setAustralia] = useState(false)
  const [AmerykaPoł, setAmerykaPoł] = useState(false)
  const [AmerykaPuł, setAmerykaPuł] = useState(false)
  
  const [selectedContinent, setSelectedContinent] = useState(null)
  
  useEffect(() =>{
    
    const ID_TO_REGION = {
      "254,0,0": "Europa",
      "0,255,1": "Ameryka Południowa",
      "254,0,234": "Ameryka Północna",
      "0,67,0": "Australia",
      "255,255,0": "Afryka",
      "98,0,235": "Azja",
    }
    
    const canvas = canvasRef.current;
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000) 
    camera.position.setZ(125);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Atmosfera ziemi ------------------------------------------------------
    const atmosphereGeometry = new THREE.SphereGeometry(50.25,64,64)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      
      transparent: true,
      blending: THREE.AdditiveBlending,      
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere);
    
    // Ziemia ------------------------------------------------------
    const geometry = new THREE.SphereGeometry(50,64,64);
    const earthTexture = new THREE.TextureLoader().load(earthTextureImg)
    const material = new THREE.MeshPhysicalMaterial( { 
      map: earthTexture
    });

      // Shadery dla ziemii
    // const material = new THREE.ShaderMaterial({
      
    //   vertexShader: vertexShader,
    //   fragmentShader: fragmentShader
    // })
    
    // material.uniforms.uTime = {value: 0}
    // material.uniforms.uRadius = {value: 0.8}
    // material.uniforms.uTexture = {value: new THREE.TextureLoader().load(earthTextureImg)}
    const sphere = new THREE.Mesh(geometry, material)
    sphere.position.set(0,0,0)
    sphere.receiveShadow = true
    sphere.rotation.z = THREE.MathUtils.degToRad(23.5); // nachylenie osi
    scene.add(sphere);

    // Księżyc ------------------------------------------------------
    const moonGeo = new THREE.SphereGeometry(13.5,64,64);
    const moonTexture = new THREE.TextureLoader().load(moonTextureImg);
    const moonMaterial = new THREE.MeshPhysicalMaterial({
      map: moonTexture
    })
    const moon = new THREE.Mesh(moonGeo, moonMaterial)
    moon.castShadow = true

    sphere.add(moon)
    moon.position.z = 500

    // Słońce ------------------------------------------------------
    const sunGeo = new THREE.SphereGeometry(150,64,64);
    const sunTexture = new THREE.TextureLoader().load(sunTextureImg)
    const sunMaterial = new THREE.MeshBasicMaterial({
      depthWrite: false,
      map: sunTexture
      // color: 0xffffff,
      // emissive: 0xffffff,
      // emissiveIntensity: 2,
    })

    const sun = new THREE.Mesh(sunGeo,sunMaterial);
    scene.add(sun);
    sun.position.set(1000,0,0);



    

    // Oświetlenie ------------------------------------------------------
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(100,100,100);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1000,0,0);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.bottom = -500;
    directionalLight.shadow.camera.top = 500;
    directionalLight.shadow.camera.left = -500;
    directionalLight.shadow.camera.right = 500;

    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 2000;

    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
    scene.add(directionalLight, ambientLight);
    
    
      // Linie pomocnicze
    // const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    // scene.add(dLightShadowHelper);
    // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // const gridHelper = new THREE.GridHelper(200,50);
    // scene.add(directionalLightHelper);
    
    const controls = new OrbitControls(camera, renderer.domElement);


    // Właściwości sterowania 
    controls.enabled = true; 
    controls.target.set(0,0,0);
    controls.enablePan = false;
    controls.minDistance = 60;
    controls.maxDistance = 200;
    controls.maxPolarAngle = Math.PI;
    controls.minPolarAngle = 0;
    controls.rotateSpeed = 0.5
    // controls.enablePan = false
    
    controls.dampingFactor = 0.05 // Waga obracania
    controls.enableDamping = true


      // Tło gwiazd ------------------------------------------------------
      let distance
      let stars = new Array(0);
      for ( let i = 0; i < 10000; i ++ ) {
        let x = THREE.MathUtils.randFloatSpread( 2000 );
        let y = THREE.MathUtils.randFloatSpread( 2000 );
        let z = THREE.MathUtils.randFloatSpread( 2000 );

        distance = Math.sqrt(x*x + y*y + z*z);

        if (distance > 400) {
          stars.push(x, y, z);
        }

      }
      let starsGeometry = new THREE.BufferGeometry();
      starsGeometry.setAttribute(
        "position", new THREE.Float32BufferAttribute(stars, 3)
      );
      let starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );
      let starField = new THREE.Points( starsGeometry, starsMaterial );
      scene.add( starField );

    // Przygotowanie do raycastera ------------------------------------------------------
     
    const idImg = new Image();
    idImg.crossOrigin = "anonymous";
    idImg.src = ID_MAP;
    
    const idCanvas = document.createElement("canvas");
    const idCtx = idCanvas.getContext("2d");
    
    idImg.onload = () => {
      idCanvas.width = idImg.width;
      idCanvas.height = idImg.height;
      idCtx.drawImage(idImg,0,0)
    };
    
    
    const raycaster = new THREE.Raycaster();

    let Hovered = false
        
    // Funkcja wywoływana gdy sie kliknie na element ------------------------------------------------------
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
          
          if( region != "Nieznany region"){
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
    
    
    // Funkcja wywoływana gdy kursor znajdzie się nad elementem ------------------------------------------------------
    function onPointerMove(event) {
      const coords = new THREE.Vector2(
        (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
      );
      
      raycaster.setFromCamera(coords, camera);
      
      const intersections = raycaster.intersectObject(sphere);
      
      if (intersections.length > 0) {
        controls.enabled = true;

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
          // console.log("RGB ODCZYTANE:", rgb)
          // console.log(intersections)
          
          const region =  ID_TO_REGION[rgb] || "Nieznany region";
          
          setBubble({
            visible: true,
            text: region,
            x: event.clientX,
            y: event.clientY,
          })
          // Hovered = true
         }
      }else {
        // Hovered = false
        setBubble({visible: false})
      }
  }

  const clock = new THREE.Clock();
  const angularSpeedEarth = Math.PI * 2 / 72;
  const angularSpeedMoon = Math.PI * 2 / 72 / 27.3;

    
  // Wywoływana animacja
    function animate() {
      requestAnimationFrame( animate );
      const delta = clock.getDelta();
      if (!Hovered) {
        sphere.rotation.y += angularSpeedEarth * delta;
      } 
      moon.rotation.y += angularSpeedMoon * delta;

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
