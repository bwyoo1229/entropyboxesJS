import Scene from './scene.js';
import Box from './box.js';
import Light from './light.js';
import Raycaster from './raycaster.js';

export default class App {
  constructor() {
    this.scene = new Scene();
    this.box = new Box();
    this.light1 = new Light();
    this.light2 = new Light();
    this.light3 = new Light();

    this.raycaster = new Raycaster();
    this.raycaster.mouse.x = 999;
    this.raycaster.mouse.y = 999;

    this.setScene();
    this.setBox();
    this.setLight();
    this.setRaycaster();

    this.render = this.render.bind(this);
  }

  setScene() {
    this.scene.setCamera(0, 0, 50);
    this.scene.setRenderer('#505050');
    this.scene.setResponsiveWindow();
  }

  setBox() {
    this.box.setBoxGeometry(1, 1, 1);
    this.box.setBoxMaterial({ color: 0x101010 });
    this.box.setBoxPosition(this.scene.scene, 12);
    window.addEventListener('mousemove', this.box.handleMouseMove);
  }

  setLight() {
    this.light1.setLightPosition(-10, 10, 0);
    this.light2.setLightPosition(10, 10, 0);

    this.scene.scene.add(this.light1.light);
    this.scene.scene.add(this.light2.light);
  }

  setRaycaster() {
    window.addEventListener('mousemove', this.raycaster.handleMouseMove);
  }

  render() {
    window.requestAnimationFrame(this.render);

    this.raycaster.raycaster.setFromCamera(
      this.raycaster.mouse,
      this.scene.camera
    );

    const intersects = this.raycaster.raycaster.intersectObjects(
      this.scene.scene.children
    );

    this.animate(intersects);

    this.scene.renderer.render(this.scene.scene, this.scene.camera);
  }

  animate(intersects) {
    let tl = new TimelineMax().delay(0.1);

    for (let i = 0; i < intersects.length; i++) {
      tl.to(intersects[i].object.position, 0.3, {
        x: intersects[i].object.position.x + (Math.random() - 0.5) * 5,
        ease: Bounce.easeOut,
      });
      tl.to(intersects[i].object.position, 0.3, {
        y: intersects[i].object.position.y + (Math.random() - 0.5) * 5,
        ease: Bounce.easeOut,
      });
      tl.to(intersects[i].object.position, 0.3, {
        z: intersects[i].object.position.z + (Math.random() - 0.5) * 5,
        ease: Bounce.easeOut,
      });
      tl.to(intersects[i].object.position, 0.3, {
        x: intersects[i].object.position.x + (Math.random() - 0.5) * 5,
        ease: Bounce.easeOut,
      });
      tl.to(intersects[i].object.position, 0.3, {
        y: intersects[i].object.position.y + (Math.random() - 0.5) * 5,
        ease: Bounce.easeOut,
      });
      tl.to(intersects[i].object.position, 0.3, {
        z: intersects[i].object.position.z + (Math.random() - 0.5) * 5,
        ease: Bounce.easeOut,
      });
      tl.to(intersects[i].object.position, 0.3, {
        x: intersects[i].object.position.x + (Math.random() - 0.5) * 5,
        ease: Bounce.easeOut,
      });
    }
  }
}
