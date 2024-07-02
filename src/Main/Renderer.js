import * as THREE from "three";

import Main from "./Main";

export default class Renderer {
  constructor() {
    this.main = new Main();
    this.sizes = this.main.sizes;
    this.scene = this.main.scene;
    this.canvas = this.main.canvas;
    this.camera = this.main.camera;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor("#211d20");
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
  
  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
