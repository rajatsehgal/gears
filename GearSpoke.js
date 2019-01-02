const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  display: block;
  height: calc(var(--inner-radius) + var(--core-thickness) - 2px);
  width: var(--spoke-thickness);
  border-top-width: calc(var(--outer-radius) - (var(--inner-radius) + var(--core-thickness) - 2px));
  border-top-color: var(--color);
  border-top-style: solid;
  border-radius: 3px;
  position: absolute;
  transform-origin: bottom center;
  top: 0;
  left: calc(var(--outer-radius) - (var(--spoke-thickness) / 2));
}

:host([hidden]) {
  display: none;
}
</style>

`;

export default class GearSpoke extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('gear-spoke', GearSpoke);
