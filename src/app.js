import Scene from './scene.js';
import Box from './box.js';
import Light from './light.js';
import Raycaster from './raycaster.js';

export default class App {
  constructor() {
    this.scene = new Scene();
    this.box = new Box();
    this.light = new Light();
    this.raycaster = new Raycaster();

    this.setScene();
    this.setBox();
    this.setLight();
    this.setRaycaster();

    this.render = this.render.bind(this);
  }

  setScene() {
    this.scene.setCamera(0, 0, 5);
    this.scene.setRenderer('#505050');
    this.scene.setResponsiveWindow();
  }

  setBox() {
    this.box.setBoxGeometry(1, 1, 1);
    this.box.setBoxMaterial({ color: 0xffcc00 });
    this.box.createRandomPositionBox(this.scene.scene, 100);
  }

  setLight() {
    this.light.setLightPosition(0, 0, 0);
    this.scene.scene.add(this.light.light);
  }

  setRaycaster() {
    window.addEventListener('mousemove', this.raycaster.onMouseMove);
  }

  render() {
    window.requestAnimationFrame(this.render);

    this.raycaster.raycaster.setFromCamera(
      this.raycaster.mouse,
      this.scene.camera
    );

    const intersects = this.raycaster.raycaster.intersectObjects(
      this.scene.scene.children,
      true
    );

    if (intersects[0]) {
      window.tl = new TimelineMax().delay(0.2);

      window.tl.to(intersects[0].object.scale, 1, { x: 2, ease: Expo.easeOut });
      window.tl.to(intersects[0].object.scale, 0.5, {
        x: 0.5,
        ease: Expo.easeOut,
      });
      window.tl.to(intersects[0].object.position, 0.5, {
        x: 2,
        ease: Expo.easeOut,
      });
      window.tl.to(intersects[0].object.rotation, 0.5, {
        y: Math.PI * 0.5,
        ease: Expo.easeOut,
      });
    }

    this.scene.renderer.render(this.scene.scene, this.scene.camera);
  }
}
