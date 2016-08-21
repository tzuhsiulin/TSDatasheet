import "../styles/blank.scss";

import { elt } from "../utils/dom";

export class Blank {

  constructor(ds) {
    this.ds = ds;
  }

  init() {
    const { rowHeaderWidth, cellHeight, scrollbarSize } = this.ds.options;
    return [
      // The upper left
      elt("div", {
        class: "blank",
        style: {
          width: `${rowHeaderWidth}px`,
          height: `${cellHeight}px`,
        },
      }),
      // The upper right
      elt("div", {
        class: "blank",
        style: {
          width: `${scrollbarSize}px`,
          height: `${cellHeight}px`,
          position: "absolute",
          top: "0px",
          right: "0px",
        },
      }),
      // The lowwer left
      elt("div", {
        class: "blank",
        style: {
          width: `${rowHeaderWidth}px`,
          height: `${scrollbarSize}px`,
          position: "absolute",
          bottom: "0px",
          left: "0px",
        },
      }),
      // The lowwer right
      elt("div", {
        class: "blank",
        style: {
          width: `${scrollbarSize}px`,
          height: `${scrollbarSize}px`,
          position: "absolute",
          bottom: "0px",
          right: "0px",
        },
      }),
    ];
  }

}
