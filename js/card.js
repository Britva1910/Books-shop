import Control from "./control.js";
import { Popup } from "./popup.js";

export class Card {
	constructor(author, imageLink, title, price, description) {

		this.author = author;
		this.title = title;
		this.description = description;
		this.imageLink = imageLink;
		this.price = price;
	}

	getCard(dataObject) {
		const card = document.createElement('div');
		card.classList.add('card-wrapper');

		const bookImage = new Control(card, 'img', 'card-book-img');
		bookImage.node.src = this.imageLink;

		const descriptionWrapper = new Control(card, 'div', 'card-description__wrapper');

		const title = new Control(descriptionWrapper.node, 'div', 'card-description__title', this.title);
		const author = new Control(descriptionWrapper.node, 'div', 'card-description__author', this.author);
		const price = new Control(descriptionWrapper.node, 'div', 'card-description__price', `$${this.price}`);

		const btnWrapper = new Control(descriptionWrapper.node, 'div', 'btn-wrapper');

		const btnShowMore = new Control(btnWrapper.node, 'button', 'btn btn-active', 'Show more');
		const btnSendBag = new Control(btnWrapper.node, 'button', 'btn btn-active', 'Send to bag');

		btnShowMore.node.onclick = () => {
			const popup = new Popup(dataObject);
			popup.showPopup();
		}

		btnSendBag.node.onclick = () => {
			this.addBookInBag(dataObject);
		}











		/* 	card.innerHTML = `
				<img class="card-book-img" src="${this.imageLink}"></img>
				<div class="card-description__wrapper">
					<div class="card-description__title">${this.title}</div>
					<div class="card-description__author">${this.author}</div>
					<div class="card-description__price">$${this.price}</div>
					<div class="btn-wrapper">
						<button type="submit" id="btn-description" class="btn btn-active"> Show more </button>
						<button type="submit" id="btn-bag" class="btn btn-active"> Send to bag </button>
					</div>
				</div>
			`; */

		return card;
	}







}