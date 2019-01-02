import './GearSpoke.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  display: block;
  --outer-radius: 30px;
  --inner-radius: 8px;
  --core-thickness: 12px;
  --spoke-thickness: 12px;
  --color: #333;
  height: calc(2 * var(--outer-radius));
  width: calc(2 * var(--outer-radius));
  animation: 3s infinite linear;
}

:host([hidden]) {
  display: none;
}

@keyframes clockwise {
  100% { transform: rotate(360deg) }
}

@keyframes counterclockwise {
  100% { transform: rotate(-360deg) }
}

div {
  box-sizing: border-box;
  height: calc(2 * (var(--inner-radius) + var(--core-thickness)));
  width: calc(2 * (var(--inner-radius) + var(--core-thickness)));
  border-radius: 50%;
  border-width: var(--core-thickness);
  border-style: solid;
  border-color: var(--color);
  position: absolute;
  top: calc(var(--outer-radius) - var(--inner-radius) - var(--core-thickness));
  left: calc(var(--outer-radius) - var(--inner-radius) - var(--core-thickness));
}
</style>
<div></div>
<slot>
`;

export default class BusyGear extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    let numSpokes = 6;
    const Spokes = [];

    while (numSpokes > 0) {
      const spoke = document.createElement('gear-spoke');
      spoke.style.transform = `rotate(${numSpokes * 60}deg)`;
      this.appendChild(spoke);
      numSpokes -= 1;
    }

    this.style.animationName = this.getAttribute('spindir');
  }
}

window.customElements.define('busy-gear', BusyGear);
