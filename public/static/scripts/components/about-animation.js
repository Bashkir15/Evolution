
let camera,
scene,
renderer,
geometry,
material,
mesh;

const insertElement = document.querySelector('.about-header');
const clock = new THREE.Clock();
const smokeParticles = [];
var cubeSineDriver = 0;
var delta;


export function init() {
	renderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.z = 1000;
	scene.add(camera);

	geometry = new THREE.CubeGeometry(200, 200, 200);
	material = new THREE.MeshLambertMaterial({color: 0xaa6666, wireframe: false});
	mesh = new THREE.Mesh(geometry, material);

	const light = new THREE.DirectionalLight(0xffffff, 0.5);
	light.position.set(-1, 0, 1);
	scene.add(light);

	var loader = new THREE.TextureLoader();
	loader.crossOrigin = '';
	var smokeTexture;
	var smokeMaterial;
	var smokeGeo;

	loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png', (resource) => {
		smokeTexture = resource;
		smokeMaterial = new THREE.MeshLambertMaterial({color: 0x00dddd, map: smokeTexture, transparent: true});
		smokeGeo = new THREE.PlaneGeometry(300, 300);

		for (let p = 0; p < 150; p++) {
			var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
			particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
			particle.rotation.z = Math.random() * 360;
			scene.add(particle);
			smokeParticles.push(particle);
		}
	});

	insertElement.appendChild(renderer.domElement);
}

export function animate() {
	delta = clock.getDelta();
	requestAnimationFrame(animate);
	evolveSmoke();
	render();
}

function evolveSmoke() {
	let sp = smokeParticles.length;

	while(sp--) {
		smokeParticles[sp].rotation.z += (delta * 0.2);
	}
}

function render() {
	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;
	cubeSineDriver += .01;
	mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
	renderer.render(scene, camera);
}

