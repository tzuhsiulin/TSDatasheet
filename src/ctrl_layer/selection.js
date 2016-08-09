import { elt } from "../utils/dom";

export const prefix = "TSDatasheet-selector";

export class Selection {

  constructor(ctrlLayer) {
    this.ds = ctrlLayer.ds;
    this.ctrlLayer = ctrlLayer;
    this.selector = null;
    this.ds.eventManager.on("selectionChange", this.setSelection.bind(this));
    this.init();
  }

  init() {
    const selector = elt("div", { id: prefix });
    this.ctrlLayer.wrapper.appendChild(selector);
    this.selector = selector;
  }

  setSelection(pos, target) {
    const { width, height} = this.ds.getCellSize(pos);
    const { left, top } = target.getBoundingClientRect();
    this.selector.style.display = 'block';
    this.selector.style.top = `${top}px`;
    this.selector.style.left = `${left}px`;
    this.selector.style.width = `${width}px`;
    this.selector.style.height = `${height}px`;
  }

}

