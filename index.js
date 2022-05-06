const scene = new THREE.Scene()
scene.background = new THREE.Color(0x212121)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({alpha: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.TorusKnotGeometry(1, .4, 64, 12)
const wireframe = new THREE.WireframeGeometry(geometry)

const line = new THREE.LineSegments(wireframe)
line.material.depthTest = false
line.material.opacity = 0.25
line.material.transparent = true
scene.add(line)

camera.position.z = 5

let hue = 0

function animate() {
	requestAnimationFrame(animate)

    hue += 1
    while (hue > 360) {
        hue -= 360
    }

    line.material.color.setHSL(hue / 360, 1, .5)
    line.rotation.x += 0.01
    line.rotation.y += 0.01

	renderer.render(scene, camera)
}

animate()