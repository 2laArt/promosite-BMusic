
export const createElement = (tagName, classList, textContent, attributeList) => {
	const element = document.createElement(tagName);
	if (classList) element.classList.add(...classList);
	element.textContent = textContent;
	if (attributeList) attributeList.forEach(item => element.setAttribute(...item));
	return element;
}

export const createSection = (tags) => {
	const elements = {};
	for (let key in tags) {
		const tag = tags[key];
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
	return elements;
}