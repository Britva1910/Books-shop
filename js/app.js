import { Control } from "./control.js";
import { Card } from "./card.js";

export class App extends Control {
	constructor(data) {
		super();
		this.data = data;
		this.fragment = document.createDocumentFragment();
	}

	renderPage() {
		const header = new Control(this.fragment, 'header', 'header');
		const headerTitle = new Control(header.node, 'h1', 'header__titl', 'Book Shop');
		const headerSubtitle = new Control(header.node, 'div', 'header__subtitle', 'online store');

		const wrapper = new Control(this.fragment, 'div', 'wrapper');

		this.data.forEach(element => {
			const { author, imageLink, title, price, description } = element;
			const card = new Card(author, imageLink, title, price, description).getCard(element);
			wrapper.node.appendChild(card);
		});

		document.body.appendChild(this.fragment);
	}
}