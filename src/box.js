export default class Box {
  constructor() {
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  setBoxGeometry(x = 1, y = 1, z = 1) {
    this.geometry = new THREE.BoxGeometry(x, y, z);
  }

  setBoxMaterial(property) {
    this.material = new THREE.MeshLambertMaterial(property);
  }

  setBoxPosition(scene, numberOfBox) {
    let mesh;
    for (let i = 0; i < numberOfBox * numberOfBox; i++) {
      mesh = new THREE.Mesh(this.geometry, this.material);
      mesh.position.x = Math.floor(i % numberOfBox) - 5.5;
      mesh.position.y = Math.floor(i / numberOfBox) - 5;
      mesh.position.z = -10;
      scene.add(mesh);
    }
  }

  handleMouseMove() {
    if (
      this.material.color.r === 1 &&
      this.material.color.g === 1 &&
      this.material.color.b === 0.8901960784313725
    ) {
      this.material.color.setHex(0xffffe4);
    } else {
      if (Math.floor(Math.random() * 50) + 1 < 2) {
        this.material.color.setHex('0xffffe3');
      } else {
        this.material.color.setHex('0x101010');
      }
    }
  }
}
