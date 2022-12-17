export const genresTagAttributes = {
	'genres': {
		attributes() {
			return [
				'section', ['genres']
			]
		},
		amount: 1,
		dependency: false,
	},
	'circle': {
		attributes() {
			return [
				'div', ['white_circle', 'ab_center']
			]
		},
		amount: 1,
		dependency: 'genres'
	},
	'text': {
		attributes() {
			return [
				'p', ['genres_title'], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, expedita.'
			]
		},
		amount: 1,
		dependency: 'circle'
	}
}