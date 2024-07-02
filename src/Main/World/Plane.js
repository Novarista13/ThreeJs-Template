import * as THREE from "three";

import Main from "../Main";

export default class Plane {
  constructor() {
    this.main = new Main();
    this.scene = this.main.scene;
    // this.resources = this.main.resources;

    // this.debug = this.main.debug;

    // // Debug
    // if (this.debug.active) {
    //   this.debugFolder = this.debug.ui.addFolder("model");
    // }

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
  }

  // setTextures() {
  //   this.textures = {};

  //   this.textures.color = this.resources.items.grassColorTexture;
  //   this.textures.color.colorSpace = THREE.SRGBColorSpace;
  //   this.textures.color.repeat.set(1.5, 1.5);
  //   // this.textures.color.wrapS = THREE.RepeatWrapping;
  //   // this.textures.color.wrapT = THREE.RepeatWrapping;

  //   this.textures.normal = this.resources.items.grassNormalTexture;
  //   this.textures.normal.repeat.set(1.5, 1.5);
  //   // this.textures.normal.wrapS = THREE.RepeatWrapping;
  //   // this.textures.normal.wrapT = THREE.RepeatWrapping;
  // }

  setMaterial() {
    this.material = new THREE.MeshBasicMaterial();
    // {
    // map: this.textures.color,
    // normalMap: this.textures.normal,
    // }
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // this.mesh.rotation.x = -Math.PI * 0.5;
    // this.mesh.receiveShadow = true;

    this.scene.add(this.mesh);
  }
}
