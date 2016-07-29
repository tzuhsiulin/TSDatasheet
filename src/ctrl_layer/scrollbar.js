import { elt } from "../utils/dom";

export const rowPrefix = "TSDatasheet-row-scrollbar";
export class RowScrollBar {

  constructor(ctrlLayer) {
    this.ds = ctrlLayer.ds;
    this.ctrlLayer = ctrlLayer;
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
    this.ctrlLayer.wrapper.appendChild(scrollbar);
    return scrollbar;
  }

}

export const colPrefix = "TSDatasheet-col-scrollbar";
export class ColScrollBar {

  constructor(ctrlLayer) {
    this.ds = ctrlLayer.ds;
    this.ctrlLayer = ctrlLayer;
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
    this.ctrlLayer.wrapper.appendChild(scrollbar);
    return scrollbar;
  }

}
