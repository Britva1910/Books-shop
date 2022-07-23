import { Control } from "./control.js";
import { Card } from "./card.js";
import { Bag } from "./bag.js";

export class App extends Control {
	constructor(data) {
		super();
		this.data = data;
		this.fragment = document.createDocumentFragment();
		this.header = new Control(this.fragment, 'header', 'header');
		this.headerTitle = new Control(this.header.node, 'h1', 'header__title', 'Book Shop');
		this.headerSubtitle = new Control(this.header.node, 'div', 'header__subtitle', 'online store');
		this.bagIcon = new Control(this.header.node, 'div', 'bag__icon');
		this.wrapper = new Control(this.fragment, 'div', 'wrapper');
		this.bag = new Bag();
		this.bagIcon.node.onclick = () => {
			this.bag.showBagPage();
		}

	}

	renderPage() {
		this.data.forEach(element => {
			const { author, imageLink, title, price, description } = element;
			const card = new Card(author, imageLink, title, price, description);
			card.addBookInBag = (object) => {
				this.bag.bookStorage.push(object);
				this.bag.showCounter();
			};

			const item = card.getCard(element);
			this.wrapper.node.appendChild(item);
		});
		document.body.appendChild(this.fragment);
	}


}