export class Selection {

  constructor(context) {
    this.context = context;
    this.handler = {
      mousedown: this.mousedownListener,
    };
    this.range = null;

    this.bindEventListener();
  }

  bindEventListener() {
    const container = this.context.gridview.container;
    Object.keys(this.handler).forEach(key => {
      container.addEventListener(key, this.handler[key].bind(this));
    });
  }

  mousedownListener(e) {
    const { clientX, clientY } = e;
    const container = this.context.gridview.container;
    const {
      left: containerLeft,
      top: containerTop,
    } = container.getBoundingClientRect();
    const xPos = clientX - containerLeft + container.scrollLeft;
    const yPos = clientY - containerTop + container.scrollTop;
    const x = Math.floor(xPos / 105);
    const y = Math.floor(yPos / 25);
    // this.range = new Range(x, y);
    // this.context.signal("select", this.range);
  }

}
