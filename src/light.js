export default class Light {
  constructor() {
    this.light = new THREE.PointLight(0xffffff, 1, 1000);
  }

  setLightPosition(x, y, z) {
    this.light.position.set(x, y, z);
  }
}
