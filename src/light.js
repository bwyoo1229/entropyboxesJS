export default class Light {
  constructor() {
    this.light = new Three.PointLight(0xfffff, 1, 1000);
  }

  setLight(x, y, z) {
    this.light.position.set(x, y, z);
  }
}

// Scene.scene.add(Light.setLight(0, 0, 25));
