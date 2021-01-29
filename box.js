export default class Box {
  constructor() {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshLambertMaterial({ color: 0xffcc00 });
  }

  createRandomPositionBox(numberOfBox) {
    let mesh;
    for (let i = 0; i < numberOfBox; i++) {
      mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 15;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 1) * 10;
      scene.add(mesh);
    }
  }
}
