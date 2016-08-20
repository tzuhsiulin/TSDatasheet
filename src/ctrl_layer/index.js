import "../styles/ctrl_layer.scss";

// export { Resizer } from "./resizer";
// export { Selection } from "./selection";
import { RowScrollBar, ColScrollBar } from "./scrollbar";
import { elt } from "../utils/dom";
import { Selection } from "./selection";

export const prefix = "TSDatasheet-ctrl-layer";

export class CtrlLayer {

  constructor(ds) {
    this.ds = ds;
    this.wrapper = this.createContainer();
    const rowScrollbar = new RowScrollBar(this);
    const colScrollbar = new ColScrollBar(this);
    const selection = new Selection(this);
  }

  createContainer() {
    const container = elt("div", { class: prefix });
    this.ds.wrapper.appendChild(container);
    return container;
  }

}
