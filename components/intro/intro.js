// 
import { introTags } from "../createSections/createSections.js";

const { mask, images } = introTags;

export const introGo = () => {
	const axisX = mask[0].clientWidth / 2;
	const axisY = mask[0].clientHeight / 2;
	const factor = 10;
	const centalPosition = -50;
	mask[0].addEventListener("mousemove", (e) => {
		const posX = Math.floor((axisX - e.x) / axisX * factor);
		const posY = Math.floor(axisY - e.y) / axisY * factor;
		images.forEach(item => {
			item.style.transform = `translate( ${centalPosition + posX}%, ${centalPosition + posY}%)`;
		});
	})
}