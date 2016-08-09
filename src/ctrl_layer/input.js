import { elt } from "../utils/dom";

export class Input {

  constructor(ctrlLayer) {
    this.ds = ctrlLayer.ds;
    this.ctrlLayer = ctrlLayer;
    this.init();
  }

  init() {
    const input = elt("input", null);
    const wrapper = elt("div", null, input);
    this.input = input;
    this.wrapper = wrapper;
  }

}
