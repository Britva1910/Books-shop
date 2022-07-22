import { App } from "./js/app.js";

fetch('assets/books.json')
	.then(response => {
		return response.json();
	})
	.then(data => {
		const app = new App(data);
		app.renderPage();

	});
