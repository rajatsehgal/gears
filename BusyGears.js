import './BusyGear.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: none;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 999;
  position: absolute;
}

:host([hidden]) {
  display: none;
}

#container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#clockwiseWrapper {
  display: inline-block;
  vertical-align: middle;
}

#counterclockwiseWrapper {
  display: inline-block;
  vertical-align: middle;
  margin-left: -20px;
  margin-top: 65px;
}
</style>
<div id="container">
  <div id="clockwiseWrapper">
    <busy-gear spindir="clockwise"></busy-gear>
  </div>
  <div id="counterclockwiseWrapper">
    <busy-gear spindir="counterclockwise"></busy-gear>
  </div>
</div>
`;

export default class BusyGears extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('busy-gears', BusyGears);
