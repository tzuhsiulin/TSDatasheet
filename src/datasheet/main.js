require("../styles/main.scss");
const { Blank, GridView, Header, RowScrollBar, ColScrollBar,
  Selection, Input } = require("../components");
const { elt, createFragment } = require("../utils/dom");
const { EventManager } = require("../utils/eventmanager");
const { Pos } = require("./pos");

const prefix = "TSDatasheet";

class Datasheet {

  constructor(options) {
    this.options = this.initOptions(options);
    this.wrapper = this.createContainer();

    this.visibleCount = { row: 0, col: 0 };
    this.currPos = new Pos(0, 0);
    this.getVisibleSize();

    this.eventManager = new EventManager();
    this.initComponents();
  }

  initComponents() {
    const fragment = createFragment();
    const components = [Blank, Header, GridView, RowScrollBar, ColScrollBar, Selection, Input];
    for (let i = 0; i < components.length; i++) {
      const className = components[i].name;
      const component = new (components[i])(this);
      const items = component.init();
      if (Array.isArray(items)) {
        for (let j = 0; j < items.length; j++) {
          fragment.appendChild(items[j]);
        }
      } else {
        fragment.appendChild(items);
      }
      this[className.toLowerCase()] = component;
    }
    this.wrapper.appendChild(fragment);
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
module.exports = Datasheet;
