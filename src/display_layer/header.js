import { elt } from "../utils/dom";
import { numToAlphabet } from "../utils/utils";

export const prefix = "TSDatasheet-header";

export class Header {

  constructor(displayView) {
    this.ds = displayView.ds;
    this.displayView = displayView;
    this.rowHeader = this.createRowHeader();
    this.colHeader = this.createColHeader();
  }

  createRowHeader() {
    // const items = [];
    // for (let i = 1; i <= this.context.options.rowCount; i++) {
    //   items.push(elt("th", {
    //     style: {
    //       width: `${this.context.options.rowHeaderSize[i - 1]}px`,
    //     },
    //   }, numToAlphabet(i)));
    // }

    // const blankWidth = this.context.gridview.rowScrollbarWidth;
    // if (blankWidth > 0) {
    //   items.push(elt("th", {
    //     style: {
    //       width: `${blankWidth}px`,
    //     },
    //   }));
    // }
    const { rowHeaderWidth, cellHeight } = this.ds.options;
    const { width } = this.ds.gridviewSize;
    const rowHeader = elt("div", {
      class: `${prefix}-row`,
      style: {
        position: "absolute",
        top: "0px",
        left: `${rowHeaderWidth + 1}px`,
        backgroundColor: "red",
        width: `${width}px`,
        height: `${cellHeight}px`,
      },
    });
    this.displayView.wrapper.appendChild(rowHeader);
    return rowHeader;
  }

  createColHeader() {
    // const items = [];
    // for (let i = 1; i <= this.context.options.colCount; i++) {
    //   items.push(elt("tr", null, elt("th", null, i.toString())));
    // }

    // const blankHeight = this.context.gridview.colScrollbarHeight;
    // if (blankHeight > 0) {
    //   items.push(elt("tr", null, elt("th", {
    //     style: {
    //       height: `${blankHeight}px`,
    //     },
    //   })));
    // }

    // const table = elt("table", null, items);
    // return elt("div", { className: "TSDatasheet-header-col-container" }, table);

    const { rowHeaderWidth, cellHeight } = this.ds.options;
    const { height } = this.ds.gridviewSize;
    const rowHeader = elt("div", {
      class: `${prefix}-row`,
      style: {
        position: "absolute",
        top: `${cellHeight + 1}px`,
        left: "0px",
        backgroundColor: "red",
        width: `${rowHeaderWidth}px`,
        height: `${height}px`,
      },
    });
    this.displayView.wrapper.appendChild(rowHeader);
    return rowHeader;
  }

}
