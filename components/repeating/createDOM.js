
export const createElement = (tagName, classList, textContent, attributeList) => {
	const element = document.createElement(tagName);
	if (classList) element.classList.add(...classList);
	element.textContent = textContent;
	if (attributeList) attributeList.forEach(item => element.setAttribute(...item));
	return element;
}

// export const createElements = (amount, tagName, classList, textContent, attributeList) => {
// 	const elementList = [];
// 	for (let i = 0; i < amount; i++) {
// 		createElement()
// 	}
// }