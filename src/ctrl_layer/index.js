// export { Resizer } from "./resizer";
// export { Selection } from "./selection";
import { RowScrollBar, ColScrollBar } from "./scrollbar";
import { elt } from "../utils/dom";

export const prefix = "TSDatasheet-ctrl-layer";

export class CtrlLayer {

  constructor(ds) {
    this.ds = ds;
    this.wrapper = this.createContainer();
    const rowScrollbar = new RowScrollBar(this);
    const colScrollbar = new ColScrollBar(this);
  }

  createContainer() {
    const container = elt("div", { class: prefix });
    this.ds.wrapper.appendChild(container);
    return container;
  }

}
