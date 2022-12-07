import { tagAttributes } from "./tagAttributes.js";
import { createElement } from "../repeating/createDOM.js";



export const createIntro = () => {
	const elements = {};
	for (let key in tagAttributes) {
		const tag = tagAttributes[key];
		elements[key] = [];
		for (let i = 0; i < tag.amount; i++) {
			elements[key].push(createElement(...tag.attributes(i)));
			if (tag.dependency && elements[tag.dependency]) {
				elements[tag.dependency][0].append(...elements[key]);
			} else {
				document.body.append(...elements[key]);
			}
		}
	}
	introGo(...elements.mask, elements.images);
}

const introGo = (element, images) => {
	const axisX = element.clientWidth / 2;
	const axisY = element.clientHeight / 2;
	const factor = 10;
	const centalPosition = -50;
	element.addEventListener("mousemove", (e) => {
		const posX = Math.floor((axisX - e.x) / axisX * factor);
		const posY = Math.floor(axisY - e.y) / axisY * factor;
		images.forEach(item => {
			item.style.transform = `translate( ${centalPosition + posX * 2}%, ${centalPosition + posY}%)`;
		});
	})
}