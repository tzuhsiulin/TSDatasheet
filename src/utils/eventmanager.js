
export class EventManager {

  constructor() {
    this.events = {
      "selectionChange": [],
    };
  }

  on(name, func) {
    if (this.events[name] === undefined) this.events[name] = [];
    this.events[name].push(func);
  }

  remove(name, func) {
    if (!this.events[name]) throw new Error("dose not add this event");
    this.events[name] = this.events[name].filter(val => val !== func);
  }

  signal(name, ...args) {
    if (!this.events[name]) throw new Error("event not found");
    this.events[name].forEach((func) => func(...args));
  }

}
