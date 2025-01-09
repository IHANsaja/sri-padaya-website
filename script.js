import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.172.0/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.172.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.172.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('container3D').appendChild(renderer.domElement);

let object;
let mouseX = 0, mouseY = 0;
let objToRender = 'eye'; // Ensure this is a valid value with corresponding model path

// Load the butterfly model
const loader = new GLTFLoader();
loader.load(
    `models/${objToRender}/butterfly.glb`,
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr) {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    function (error) {
        console.error('An error occurred:', error);
    }
);

// Camera and lighting setup
camera.position.z = objToRender === 'eye' ? 25 : 500;

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === 'eye' ? 5 : 1);
scene.add(ambientLight);

// Optional: OrbitControls (if desired for interaction)
const controls = new OrbitControls(camera, renderer.domElement);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (object && objToRender === 'eye') {
        object.rotation.y += -3 * (mouseX / window.innerWidth) * 3;
        object.rotation.x += 3 * (mouseY * 2.5) / window.innerHeight;
    }

    renderer.render(scene, camera);
}

// Resize handler
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Mouse movement
document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
};

// Start animation
animate();
