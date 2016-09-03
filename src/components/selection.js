require("../styles/selection.scss");

const { elt } = require("../utils/dom");
const { Pos } = require("../datasheet/pos");

const prefix = "TSDatasheet-selector";

class Selection {

  constructor(ds) {
    this.ds = ds;
    this.selector = null;
    this.currentPos = null;
    ds.eventManager.on("selectionChange", this.setSelection.bind(this));
    this.init();
  }

  init() {
    const selector = elt("div", { id: prefix });
    this.selector = selector;

    const autofill = elt("div", { class: "autofill" });
    selector.appendChild(autofill);

    selector.addEventListener("dblclick", e => {
      this.ds.eventManager.signal("input", e.target, this.currentPos);
    });

    return selector;
  }

  setSelection(target, pos) {
    this.currentPos = pos;

    const { width, height } = this.ds.getCellSize(pos);
    const { left, top } = target.getBoundingClientRect();
    this.selector.style.display = "block";
    this.selector.style.top = `${top}px`;
    this.selector.style.left = `${left}px`;
    this.selector.style.width = `${width + 1}px`;
    this.selector.style.height = `${height + 1}px`;
  }

}
exports.Selection = Selection;
