var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
console.log(renderer)
renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
var geo = new THREE.EdgesGeometry(cube.geometry);
var mat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 });
var wireframe = new THREE.LineSegments(geo, mat);
cube.add(wireframe);
camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
document.body.addEventListener("keyup", (ev) => {
    // console.log(ev)
    if (ev.key === "ArrowUp") {
        camera.position.z -= 0.1;
    } else {
        if (ev.key === "ArrowDown") {
            camera.position.z += 0.1;
        }
    }
})
