import "../styles/blank.scss";

import { elt } from "../utils/dom";

export class Blank {

  constructor(ds) {
    this.ds = ds;
    this.wrapper = ds.wrapper;
    this.init();
  }

  init() {
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
