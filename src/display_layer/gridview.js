import { elt } from "../utils/dom";
import { Pos } from "../datasheet/pos";

export const prefix = "TSDatasheet-gridview";

export class GridView {
  constructor(displayView) {
    this.ds = displayView.ds;
    this.displayView = displayView;
    this.gridview = this.createTable(this.ds);
  }

  createTable(ds) {
    const { cellHeight, rowHeaderWidth } = ds.options;
    const { width, height } = ds.gridviewSize;
    const trItems = [];
    for (let i = 0; i < ds.visibleCount.row; i++) {
      const items = [];
      for (let j = 0; j < ds.visibleCount.col; j++) {
        const { width: cWidth, height: cHeight } = ds.getCellSize(new Pos(i, j));
        items.push(elt("td", { style: { minWidth: `${cWidth}px`, height: `${cHeight}px` } }));
      }
      trItems.push(elt("tr", null, items));
    }
    const table = elt("table", null, trItems);
    const gridview = elt("div", {
      class: prefix,
      style: {
        width, height,
        position: "absolute",
        top: `${cellHeight}px`,
        left: `${rowHeaderWidth}px`,
      },
    }, table);
    this.displayView.wrapper.appendChild(gridview);
    return gridview;
  }

}
