require("../styles/input.scss");

const { elt } = require("../utils/dom");

class Input {

  constructor(ds) {
    this.ds = ds;
    this.domNode = null;
    this.ds.eventManager.on("selectionChange", this.reset.bind(this));
    this.ds.eventManager.on("input", this.display.bind(this));
  }

  init() {
    const input = elt("input", { class: "non-edit" });
    this.domNode = input;
    return input;
  }

  reset() {
    this.domNode.value = "";
    this.domNode.className = "non-edit";
  }

  display(target, pos) {
    this.domNode.className = "edit";
    if (!target.contains(this.domNode)) {
      target.appendChild(this.domNode);
    }
    this.domNode.focus();
  }

}
exports.Input = Input;
