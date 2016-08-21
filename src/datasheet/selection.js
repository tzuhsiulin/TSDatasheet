import "../styles/selection.scss";

import { elt } from "../utils/dom";

export const prefix = "TSDatasheet-selector";

export class Selection {

  constructor(ds) {
    this.ds = ds;
    this.selector = null;
    ds.eventManager.on("selectionChange", this.setSelection.bind(this));
    this.init();
  }

  init() {
    const selector = elt("div", { id: prefix });
    this.selector = selector;

    const autofill = elt("div", { class: "autofill" });
    selector.appendChild(autofill);

    return selector;
  }

  setSelection(pos, target) {
    const { width, height } = this.ds.getCellSize(pos);
    const { left, top } = target.getBoundingClientRect();
    this.selector.style.display = "block";
    this.selector.style.top = `${top}px`;
    this.selector.style.left = `${left}px`;
    this.selector.style.width = `${width + 1}px`;
    this.selector.style.height = `${height + 1}px`;
  }

}
