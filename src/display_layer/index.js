import { GridView } from "./gridview";
import { Header } from "./header";
import { elt } from "../utils/dom";

export const prefix = "TSDatasheet-display-layer";

export class DisplayView {

  constructor(ds) {
    this.ds = ds;
    this.wrapper = this.createContainer();
    this.createBlankView();

    this.gridview = new GridView(this);
    this.header = new Header(this);
  }

  createContainer() {
    const wrapper = elt("div", { class: prefix });
    this.ds.wrapper.appendChild(wrapper);
    return wrapper;
  }

  createBlankView() {
    const { rowHeaderWidth, cellHeight } = this.ds.options;
    const blank = elt("div", {
      class: "blank",
      style: {
        width: `${rowHeaderWidth}px`,
        height: `${cellHeight}px`,
      },
    });
    this.wrapper.appendChild(blank);
  }

}

export { GridView, Header };
