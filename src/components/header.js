require("../styles/header.scss");

const { elt } = require("../utils/dom");
const { numToAlphabet } = require("../utils/utils");

const prefix = "TSDatasheet-header";

class Header {

  constructor(ds) {
    this.ds = ds;
    this.colHeaderContainer = this.colHeader = this.rowHeader = null;
  }

  init() {
    this.createHeaderContainer();
    this.setColHeaderItem();
    this.setRowHeaderItem();
    return [this.colHeaderContainer, this.rowHeader];
  }

  createHeaderContainer() {
    const { rowHeaderWidth, cellHeight } = this.ds.options;
    // col
    this.colHeader = elt("tr");
    this.colHeaderContainer = elt("table", {
      class: `${prefix}-col`,
      style: {
        position: "absolute",
        top: "0px",
        left: `${rowHeaderWidth}px`,
        height: `${cellHeight}px`,
      },
    }, this.colHeader);
    // row
    this.rowHeader = elt("table", {
      class: `${prefix}-row`,
      style: {
        position: "absolute",
        top: `${cellHeight}px`,
        left: "0px",
        width: `${rowHeaderWidth}px`,
      },
    });
  }

  setColHeaderItem() {
    const { col: colCount } = this.ds.visibleCount;
    for (let i = 1; i <= colCount; i++) {
      const { width, height } = this.ds.getCellSize(i);
      const item = elt("th", {
        class: "col-header-item",
        style: {
          minWidth: `${width}px`,
          height: `${height}px`,
        },
      }, numToAlphabet(i + this.ds.currPos.x));
      this.colHeader.appendChild(item);
    }
  }

  setRowHeaderItem() {
    const { row: rowCount } = this.ds.visibleCount;
    for (let i = 1; i <= rowCount; i++) {
      const { height } = this.ds.getCellSize(i);
      const a = elt("th", {
        class: "row-header-item",
        style: {
          minWidth: `${this.ds.options.rowHeaderWidth}px`,
          height: `${height}px`,
        },
      }, (i + this.ds.currPos.y).toString());
      this.rowHeader.appendChild(elt("tr", null, a));
    }
  }

}
exports.Header = Header;
