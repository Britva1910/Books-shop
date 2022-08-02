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

	showBagPage() {
		const bagPage = document.createDocumentFragment();
		const bagWrapper = new Control(bagPage, 'div', 'bag__wrapper');
		const title = new Control(bagWrapper.node, 'h2', 'header__title', 'My bag');
		const container = new Control(bagWrapper.node, 'div', 'bag-page__container');
		this.bookStorage.forEach((element, index) => {
			const bookCard = new Control(container.node, 'div', 'book');
			const bookImage = new Control(bookCard.node, 'img', 'book-image');
			bookImage.node.src = element.imageLink;
			const bookTitle = new Control(bookCard.node, 'div', 'book-title', element.title);
			const bookPrice = new Control(bookCard.node, 'div', 'book-prise', element.price);
			const btnDelete = new Control(bookCard.node, 'div', 'btn-delete');
			btnDelete.node.onclick = () => {
				this.bookStorage.splice(index, 1);
				bookCard.destroy();
				this.showCounter();
			};
		});
		const btnConfirm = new Control(bagWrapper.node, 'a', 'btn btn-active', 'Confirm');
		const btnClose = new Control(bagWrapper.node, 'btn', 'btn btn-active', 'Close');

		btnConfirm.node.href = '../form-page/form.html';

		btnConfirm.node.onclick = () => {
			/* 			const form = new Form();
						form.showForm(); */
			bagWrapper.destroy();


		};
		btnClose.node.onclick = () => {
			bagWrapper.destroy();
		};




		document.body.append(bagPage);
	}
}