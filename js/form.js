import Control from "./control.js";

export class Form extends Control {
	constructor() {
		super();
		this.fragment = document.createDocumentFragment();


	}
	showForm() {
		document.querySelector('.wrapper').innerHTML = '';
		const wrapper = new Control(this.fragment, 'div', 'wrapper');
		const title = new Control(wrapper.node, 'div', 'title');

	}
};