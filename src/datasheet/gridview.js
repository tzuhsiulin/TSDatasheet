import "../styles/gridview.scss";

import { elt } from "../utils/dom";
import { Pos } from "../datasheet/pos";

export const prefix = "TSDatasheet-gridview";

export class GridView {
  constructor(ds) {
    this.ds = ds;
    this.gridview = null;
    this.cells = [];
  }

  init() {
    const ds = this.ds;
    const { cellHeight, rowHeaderWidth } = ds.options;
    const { width, height } = ds.gridviewSize;
    const trItems = [];
    for (let i = 0; i < ds.visibleCount.row; i++) {
      this.cells = [];
      for (let j = 0; j < ds.visibleCount.col; j++) {
        const { width: cWidth, height: cHeight } = ds.getCellSize(new Pos(i, j));
        const cell = elt("td", { style: { minWidth: `${cWidth}px`, height: `${cHeight}px` } });
        cell.addEventListener("click", e => ds.eventManager.signal("selectionChange", new Pos(i, j), e.target));
        this.cells.push(cell);
      }
      trItems.push(elt("tr", null, this.cells));
    }
    const table = elt("table", null, trItems);
    const gridview = elt("div", {
      class: prefix,
      style: {
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute",
        top: `${cellHeight}px`,
        left: `${rowHeaderWidth}px`,
      },
    }, table);
    this.gridview = gridview;
    return gridview;
  }

}
