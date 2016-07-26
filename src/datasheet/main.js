import { DisplayView } from "../display_layer";
import { Selection } from "../ctrl_layer";
import { elt } from "../utils/dom";
import { Pos } from "./pos";

export const prefix = "TSDatasheet";

export default class Datasheet {

  constructor(options) {
    this.options = this.initOptions(options);
    this.wrapper = this.createContainer();
    this.listeners = {};

    this.visibleCount = { row: 0, col: 0 };
    this.currPos = new Pos(0, 0);
    this.getVisibleSize();

    this.displayView = new DisplayView(this);
    // this.select = new Selection(this);
  }

  on(eventName, func) {
    if (!this.listeners[eventName]) this.listeners[eventName] = [];
    this.listeners[eventName].push(func);
  }

  signal(eventName, ...args) {
    if (!this.listeners[eventName]) return;
    for (let i = 0; i < this.listeners[eventName].length; i++) {
      this.listeners[eventName][i](...args);
    }
  }

  initOptions(options) {
    if (!options.container) throw new Error("need specify the container");

    const validParams = ["container"];
    Object.keys(options).forEach(key => {
      if (validParams.indexOf(key) === -1) delete options[key];
    });

    return {
      width: window.innerWidth,
      height: window.innerHeight,
      cellWidth: 105,
      cellHeight: 25,
      rowHeaderWidth: 45,
      scrollbarSize: 12,
      data: {},
      ...options,
    };
  }

  get gridviewSize() {
    const { width, height, rowHeaderWidth, scrollbarSize, cellHeight } = this.options;
    return {
      width: width - (scrollbarSize + rowHeaderWidth),
      height: height - (scrollbarSize + cellHeight),
    };
  }

  getVisibleSize() {
    const { x, y } = this.currPos;
    const { data, cellWidth, cellHeight } = this.options;
    const { width, height } = this.gridviewSize;
    let currWidth = 0;
    let currHeight = 0;
    let totalRow = 0;
    let totalCol = 0;
    for (let i = x; currWidth < width; i++) {
      const key = `${x}-${y}`;
      currWidth += (data[key] && data[key].width) || cellWidth;
      totalCol++;
    }
    for (let i = y; currHeight < height; i++) {
      const key = `${x}-${y}`;
      currHeight += (data[key] && data[key].height) || cellHeight;
      totalRow++;
    }
    this.visibleCount.col = totalCol;
    this.visibleCount.row = totalRow;
  }

  // FIXME, Using the real data to calculate cell size
  getCellSize(pos) {
    return {
      width: this.options.cellWidth,
      height: this.options.cellHeight,
    };
  }

  createContainer() {
    const dom = elt("div", { class: prefix });
    this.options.container.appendChild(dom);
    return dom;
  }

}
