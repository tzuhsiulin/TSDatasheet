import "../styles/scrollbar.scss";

import { elt } from "../utils/dom";

export const rowPrefix = "TSDatasheet-row-scrollbar";
export class RowScrollBar {

  constructor(ds) {
    this.ds = ds;
    this.wrapper = ds.wrapper;
    this.scrollbar = this.createContainer();
  }

  createContainer() {
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
    this.wrapper.appendChild(scrollbar);
    return scrollbar;
  }

}

export const colPrefix = "TSDatasheet-col-scrollbar";
export class ColScrollBar {

  constructor(ds) {
    this.ds = ds;
    this.wrapper = ds.wrapper;
    this.scrollbar = this.createContainer();
  }

  createContainer() {
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
    this.wrapper.appendChild(scrollbar);
    return scrollbar;
  }

}
