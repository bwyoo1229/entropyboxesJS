export default class Box {
  setBoxGeometry(x = 1, y = 1, z = 1) {
    this.geometry = new THREE.BoxGeometry(x, y, z);
  }

  setBoxMaterial(property) {
    this.material = new THREE.MeshLambertMaterial(property);
  }

  createRandomPositionBox(scene, numberOfBox) {
    let mesh;
    for (let i = 0; i < numberOfBox; i++) {
      mesh = new THREE.Mesh(this.geometry, this.material);
      mesh.position.x = (Math.random() - 0.5) * 15;
      mesh.position.y = (Math.random() - 0.5) * 15;
      mesh.position.z = (Math.random() - 1) * 10;
      scene.add(mesh);
    }
  }
}
