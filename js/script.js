var scene, camera, glRenderer;

function init() {
    var canvas = document.getElementById('3d-canvas');

    // Create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x444444);

    // Create the camera
    var fov = 75;
    var aspectRatio = canvas.width / canvas.height;
    var nearPlane = 0.1;
    var farPlane = 1000;
    camera = new THREE.PerspectiveCamera( fov, aspectRatio, nearPlane, farPlane );

    // Create the WebGLRenderer
    glRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
}

init();

// Render the scene using the camera
glRenderer.render( scene, camera );