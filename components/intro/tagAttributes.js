export const tagAttributes = {
	'intro': {
		attributes() {
			return [
				'section', ['intro']
			]
		},
		amount: 1,
		dependency: false,
	},
	'mask': {
		attributes() {
			return [
				'div', ['mask_intro']
			]
		},
		amount: 1,
		dependency: 'intro'
	},
	'title': {
		attributes() {
			return [
				'h1', ['intro_title'], 'One good thing about music, when it hits you, you feel no pain.'
			]
		},
		amount: 1,
		dependency: 'intro',
	},
	'wrapper': {
		attributes() {
			return [
				'div', ['intro_wrapper']
			]
		},
		amount: 1,
		dependency: 'intro',
	},
	'images': {
		attributes(i) {
			return [
				'img', ['img_intro', `img_intro-${i}`], '', [['alt', 'Img Intro'], ['src', `./assets/images/intro/${i}.jpg`]]
			]
		},
		amount: 10,
		dependency: 'wrapper',
	},
}