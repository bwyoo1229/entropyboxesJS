export default class Scene {
  constructor() {
    this.scene = new Three.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialisas: true });

    this.setCamera();
    this.setRenderer();
    this.setResponsiveWindow();
  }

  setCamera() {
    this.camera.position.z = 5;
  }

  setRenderer() {
    this.renderer.setClearColor('#e5e5e5');
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  }

  setResposiveWindow() {
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
