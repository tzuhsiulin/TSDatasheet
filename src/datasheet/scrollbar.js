import "../styles/scrollbar.scss";

import { elt } from "../utils/dom";

export const rowPrefix = "TSDatasheet-row-scrollbar";
export class RowScrollBar {

  constructor(ds) {
    this.ds = ds;
    this.scrollbar = null;
  }

  init() {
    const { cellHeight, scrollbarSize } = this.ds.options;
    const { height } = this.ds.gridviewSize;
    const scrollbar = elt("div", {
      class: rowPrefix,
      style: {
        width: `${scrollbarSize}px`,
        height: `${height}px`,
        position: "absolute",
        right: "0px",
        top: `${cellHeight}px`,
      },
    });
    this.scrollbar = scrollbar;
    return scrollbar;
  }

}

export const colPrefix = "TSDatasheet-col-scrollbar";
export class ColScrollBar {

  constructor(ds) {
    this.ds = ds;
    this.scrollbar = null;
  }

  init() {
    const { rowHeaderWidth, scrollbarSize } = this.ds.options;
    const { width } = this.ds.gridviewSize;
    const scrollbar = elt("div", {
      class: colPrefix,
      style: {
        width: `${width}px`,
        height: `${scrollbarSize}px`,
        position: "absolute",
        left: `${rowHeaderWidth}px`,
        bottom: "0px",
      },
    });
    this.scrollbar = scrollbar;
    return scrollbar;
  }

}
