import * as THREE from "three";

import Main from "../Main";

export default class Model {
  constructor() {
    this.main = new Main();
    this.scene = this.main.scene;
    this.resources = this.main.resources;
    this.time = this.main.time;
    this.debug = this.main.debug;

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("model");
    }

    // Setup
    this.resource = this.resources.items.foxModel;

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(0.02, 0.02, 0.02);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }

  // setAnimation() {
  //   this.animation = {};
  //   this.animation.mixer = new THREE.AnimationMixer(this.model);

  //   this.animation.actions = {};

  //   this.animation.actions.idle = this.animation.mixer.clipAction(
  //     this.resource.animations[0]
  //   );
  //   this.animation.actions.walking = this.animation.mixer.clipAction(
  //     this.resource.animations[1]
  //   );
  //   this.animation.actions.running = this.animation.mixer.clipAction(
  //     this.resource.animations[2]
  //   );

  //   this.animation.actions.current = this.animation.actions.idle;
  //   this.animation.actions.current.play();

  //   this.animation.play = (name) => {
  //     const newAction = this.animation.actions[name];
  //     const oldAction = this.animation.actions.current;

  //     newAction.reset();
  //     newAction.play();
  //     newAction.crossFadeFrom(oldAction, 1);

  //     this.animation.actions.current = newAction;
  //   };

  //   // Debug
  //   if (this.debug.active) {
  //     const debugObject = {
  //       playIdle: () => this.animation.play("idle"),
  //       playWalking: () => this.animation.play("walking"),
  //       playRunning: () => this.animation.play("running"),
  //     };
  //     this.debugFolder.add(debugObject, "playIdle");
  //     this.debugFolder.add(debugObject, "playWalking");
  //     this.debugFolder.add(debugObject, "playRunning");
  //   }
  // }

  // update() {
  //   if (this.animation.mixer) {
  //     this.animation.mixer.update(this.time.delta * 0.001);
  //   }
  // }
}