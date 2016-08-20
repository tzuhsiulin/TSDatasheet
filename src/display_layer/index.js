import "../styles/display_layer.scss";

import { GridView } from "./gridview";
import { Header } from "./header";
import { elt } from "../utils/dom";

export const prefix = "TSDatasheet-display-layer";

export class DisplayLayer {

  constructor(ds) {
    this.ds = ds;
    this.wrapper = this.createContainer();
    this.createBlankView();

    this.gridview = new GridView(this);
    this.header = new Header(this);
  }

  createContainer() {
    const wrapper = elt("div", { class: prefix });
    this.ds.wrapper.appendChild(wrapper);
    return wrapper;
  }

  createBlankView() {
    const { rowHeaderWidth, cellHeight, scrollbarSize } = this.ds.options;
    // The upper left
    this.wrapper.appendChild(elt("div", {
      class: "blank",
      style: {
        width: `${rowHeaderWidth}px`,
        height: `${cellHeight}px`,
      },
    }));
    // The upper right
    this.wrapper.appendChild(elt("div", {
      class: "blank",
      style: {
        width: `${scrollbarSize}px`,
        height: `${cellHeight}px`,
        position: "absolute",
        top: "0px",
        right: "0px",
      },
    }));
    // The lowwer left
    this.wrapper.appendChild(elt("div", {
      class: "blank",
      style: {
        width: `${rowHeaderWidth}px`,
        height: `${scrollbarSize}px`,
        position: "absolute",
        bottom: "0px",
        left: "0px",
      },
    }));
    // The lowwer right
    this.wrapper.appendChild(elt("div", {
      class: "blank",
      style: {
        width: `${scrollbarSize}px`,
        height: `${scrollbarSize}px`,
        position: "absolute",
        bottom: "0px",
        right: "0px",
      },
    }));
  }

}

export { GridView, Header };
