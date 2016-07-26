import { elt } from "../utils/dom";

export default class Resizer {

  constructor(context, container) {
    this.context = context;
    this.container = container;

    this.init();
  }

  init() {
    let position = 0;
    for (let i = 0; i < this.context.options.rowHeaderSize.length; i++) {
      position += this.context.options.rowHeaderSize[i];
      const dom = elt("div", {
        className: "row-header-resizer",
        style: { left: `${position - 3}px` },
      });
      this.container.appendChild(dom);
    }
  }

}
