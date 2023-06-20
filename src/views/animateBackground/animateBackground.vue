<template>
    <div
        ref="canvasRef"
        class="canvas"
        @mousemove="handleMouseMove"
    />
</template>

<script setup lang="ts">
import * as THREE from "three";
import { Lensflare, LensflareElement } from "three/addons/objects/Lensflare.js";
import { onMounted, ref, watchEffect } from "vue";

import { sunTexture, eartTexture, lensflare, milkSpace } from "@/assets/image/image";
import useMousePosition from "@/utils/my-mouse-plugin";


const canvasRef = ref<HTMLElement | null>(null);
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let planet: THREE.Mesh;
const { mouseX, mouseY } = useMousePosition();


// Создание сцены, камеры и 3D объекта
function init(): void {
    // Создание сцены
    scene = new THREE.Scene();

    // Создание камеры
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    
    //Добавление звездного поля
    const stars = createStars();
    scene.add(stars);

    // Создание 3D объекта
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader().load(eartTexture);
    const textureSun = new THREE.TextureLoader().load(sunTexture);
    const textureLoader3 = new THREE.TextureLoader().load(lensflare);

    const material = new THREE.MeshStandardMaterial({
        map: textureLoader,
    });
    planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    // Создание двух направленных источников света (солнце и "восход")
    const lights = new THREE.DirectionalLight(0xffffff, .2);
    lights.position.set(1, 1, 1);
    scene.add(lights);

    // lensflares
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.05);
    dirLight.position.set(-2, -2, -2).normalize();
    dirLight.color.setHSL(0.1, 0.7, 0.5);
    scene.add(dirLight);
    addLight(1.995, 0.5, 1.9, 2.4, 1, -0.3);

    function addLight(h: number, s: number, l: number, x: number, y: number, z: number) {
        const light = new THREE.PointLight(0xffffff, 1.2, 1000);
        light.color.setHSL(h, s, l);
        light.position.set(x, y, z);

        scene.add(light);

        const lensflare = new Lensflare();
        lensflare.addElement(new LensflareElement(textureSun, 400, 0, light.color));
        lensflare.addElement(new LensflareElement(textureLoader3, 60, 0.6));
        lensflare.addElement(new LensflareElement(textureLoader3, 70, 0.7));
        lensflare.addElement(new LensflareElement(textureLoader3, 120, 0.9));
        lensflare.addElement(new LensflareElement(textureLoader3, 70, 1));
        light.add(lensflare);
    }

    // Создание рендерера
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.value!.appendChild(renderer.domElement);
}

// Анимация кручения 3D объекта
function animate(): void {
    requestAnimationFrame(animate);
    planet.rotation.y += 0.001;
    camera.position.x += (mouseX.value - camera.position.x) * 0.05;
    camera.position.y += (mouseY.value - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}

function createStars(): THREE.Points {
    const geometry = new THREE.BufferGeometry();  
    const vertices = [];

    // Создание 1000 рандомных точек
    for (let i = 0; i < 1000; i ++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;
        vertices.push(x, y, z);
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    // Создание текстуры звездного поля
    const sprite = new THREE.TextureLoader().load(milkSpace);
    sprite.wrapS = THREE.RepeatWrapping;
    sprite.wrapT = THREE.RepeatWrapping;
    sprite.repeat.set(4, 4);
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2.5, // <--- увеличить размер
        map: sprite,
        blending: THREE.AdditiveBlending, // <--- добавить параметр `blending`
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: false,
    });
 
    const stars = new THREE.Points(geometry, starMaterial);

    return stars;
}

// Обработка изменений размеров окна браузера
function handleResize(): void {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Динамическое изменение размеров 3D объекта в зависимости от ширины экрана
watchEffect(() => {
    const scaleFactor = window.innerWidth <= 768 ? 0.5 : 1;
    if (planet) {
        planet.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
});

//Отслеживание координат по осям X und Y
function handleMouseMove(event: MouseEvent): void {
    mouseX.value = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY.value = -(event.clientY / window.innerHeight) * 2 + 1;
}

onMounted(() => {
    init();
    animate();
    window.addEventListener("resize", handleResize);
});

</script>

<style scoped lang="scss">
.canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>