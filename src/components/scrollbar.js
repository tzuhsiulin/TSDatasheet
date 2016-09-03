require("../styles/scrollbar.scss");

const { elt } = require("../utils/dom");

const rowPrefix = "TSDatasheet-row-scrollbar";
const colPrefix = "TSDatasheet-col-scrollbar";

class RowScrollBar {

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
exports.RowScrollBar = RowScrollBar;

class ColScrollBar {

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
exports.ColScrollBar = ColScrollBar;
