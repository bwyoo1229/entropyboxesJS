export default class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
  }

  setCamera(x = 0, y = 0, z = 0) {
    this.camera.position.set = (x, y, z);
  }

  setRenderer(color) {
    this.renderer.setClearColor(color);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }

  setResponsiveWindow() {
    this.handleWindowResize();
  }

  handleWindowResize() {
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;

      this.camera.updateProjectionMatrix();
    });
  }
}
