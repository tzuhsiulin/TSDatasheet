
function createFragment(child) {
  const fragment = document.createDocumentFragment();
  if (child) {
    for (let i = 0; i < child.length; i++) {
      fragment.appendChild(child[i]);
    }
  }
  return fragment;
}
exports.createFragment = createFragment;

function elt(name, attrs, child) {
  const dom = document.createElement(name);
  if (attrs) {
    Object.keys(attrs).forEach(key => {
      if (key === "class") {
        dom.className = attrs[key];
      } else if (key === "style") {
        Object.keys(attrs[key]).forEach(styleKey => {
          dom.style[styleKey] = attrs[key][styleKey];
        });
      } else {
        dom.setAttribute(key, attrs[key]);
      }
    });
  }
  if (typeof child === "string") {
    dom.textContent = child;
  } else if (Array.isArray(child)) {
    for (let i = 0; i < child.length; i++) dom.appendChild(child[i]);
  } else if (child) {
    dom.appendChild(child);
  }
  return dom;
}
exports.elt = elt;
