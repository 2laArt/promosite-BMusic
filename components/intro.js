
import { createElement } from "./repeating/createDOM.js";

export const createDOM = () => {
	const intro =
		createElement('section', ['intro'], '', [['data-custom', 'custom']]);
	const mask = createElement('div', ['mask_intro']);
	const title = createElement(
		'h1', ['intro_title'], 'One good thing about music, when it hits you, you feel no pain.'
	);
	const wrapper = createElement('div', ['intro_wrapper']);

	for (let i = 0; i < 10; i++) {
		const img = createElement('img', ['img_intro', `img_intro-${i}`], '', [['alt', 'Img Intro'], ['src', `./../assets/images/intro/${i}.jpg`]]);
		wrapper.appendChild(img);
	}

	intro.appendChild(mask);
	intro.appendChild(title);
	intro.appendChild(wrapper);

	document.body.append(intro)

	introGo(mask, '.img_intro')
}

const introGo = (element, img) => {
	const images = document.querySelectorAll(img);
	const width = element.clientWidth / 2;
	const height = element.clientHeight / 2;
	element.addEventListener("mousemove", (e) => {
		let mouseX = e.x;
		let mouseY = e.y;
		let posX = (width - mouseX) / width * 10;
		let posY = (height - mouseY) / height * 10;
		images.forEach(item => {
			item.style.transform = `translate( ${-50 + posX * 2}%, ${-50 + posY}%)`;
		});
	})
}
