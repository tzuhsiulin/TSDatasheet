import "../styles/header.scss";

import { elt } from "../utils/dom";
import { numToAlphabet } from "../utils/utils";

export const prefix = "TSDatasheet-header";

export class Header {

  constructor(ds) {
    this.ds = ds;
    this.wrapper = ds.wrapper;
    this.createContainer();
    this.setColHeaderItem();
    this.setRowHeaderItem();
  }

  createContainer() {
    const { rowHeaderWidth, cellHeight } = this.ds.options;
    const colHeader = elt("tr");
    this.wrapper.appendChild(elt("table", {
      class: `${prefix}-col`,
      style: {
        position: "absolute",
        top: "0px",
        left: `${rowHeaderWidth}px`,
        height: `${cellHeight}px`,
      },
    }, colHeader));
    this.colHeader = colHeader;

    const rowHeader = elt("table", {
      class: `${prefix}-row`,
      style: {
        position: "absolute",
        top: `${cellHeight}px`,
        left: "0px",
        width: `${rowHeaderWidth}px`,
      },
    });
    this.wrapper.appendChild(rowHeader);
    this.rowHeader = rowHeader;
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
