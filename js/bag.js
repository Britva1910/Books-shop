import Control from "./control.js";

export class Bag extends Control {
	constructor() {
		super();
		this.counterOn = false;
		this.bookStorage = [];
	}
	showCounter() {
		if (!this.counterOn) {
			const parentNode = document.querySelector('.header');
			new Control(parentNode, 'div', 'counter', `${this.bookStorage.length}`);
			this.counterOn = true;
		} else {
			document.querySelector('.counter').innerHTML = this.bookStorage.length;
		}
	}
}