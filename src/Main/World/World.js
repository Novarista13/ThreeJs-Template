import Main from "../Main";
import Environment from "./Environment";
import Floor from "./Floor";
import Model from "./Model";
import Plane from "./Plane";

export default class World {
  constructor() {
    this.main = new Main();
    this.scene = this.main.scene;
    this.resources = this.main.resources;

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      // this.floor = new Floor();
      // this.model = new Model();
      this.plane = new Plane();
      this.environment = new Environment();
    });
  }

  update() {
    if (this.model) this.model.update();
  }
}
