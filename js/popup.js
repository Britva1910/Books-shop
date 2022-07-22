import { Control } from './control.js';

export class Popup extends Control {
	constructor(dataObject) {
		super();
		this.data = dataObject;
		this.fragment = document.createDocumentFragment();
	}
	showPopup(positionY) {
		/* const content = `
		<img class="popup__image" src="${this.data.imageLink}" alt="">
		<div class="popup__inner-container-left"></div>
		<div class="popup__inner-container-right">
			<div class="card-description__title">${this.data.title}</div>
			<div class="card-description__author">${this.data.author}</div>
			<div class="card-description__description">${this.data.description}</div>
			<div class="card-description__price">$${this.data.price}</div>
			<div class="btn-wrapper">
				<button type="submit" class="btn btn-active"> Buy</button>
				<button type="submit" class="btn btn-active"> Close</button>
			</div>
		</div>
		`; */
		const popup = new Control(this.fragment, 'div', 'popup__wrapper');
		//popup.node.style.top = `${positionY - 250}px`;
		const popupImg = new Control(popup.node, 'img', 'popup__image');
		popupImg.node.src = this.data.imageLink;
		const wrapperLeft = new Control(popup.node, 'div', 'popup__inner-container-left');
		const wrapperRight = new Control(popup.node, 'div', 'popup__inner-container-right');
		const popupTitle = new Control(wrapperRight.node, 'div', 'card-description__title', this.data.title);
		const popupAuthor = new Control(wrapperRight.node, 'div', 'card-description__author', this.data.author);
		const popupDescription = new Control(wrapperRight.node, 'div', 'card-description__description', this.data.description);
		const popupPrice = new Control(wrapperRight.node, 'div', 'card-description__price', `$${this.data.price}`);

		const btnWrapper = new Control(wrapperRight.node, 'div', 'btn-wrapper');
		const btnBuy = new Control(wrapperRight.node, 'button', 'btn btn-active', 'Buy');
		const btnClose = new Control(wrapperRight.node, 'button', 'btn btn-active', 'Close');

		btnClose.node.onclick = () => {
			popup.destroy();
		}


		document.body.appendChild(this.fragment);

	}
}