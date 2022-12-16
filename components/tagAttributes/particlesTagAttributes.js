export const particlesTagAttributes = {
	'particles': {
		attributes() {
			return [
				'section', ['particles']
			]
		},
		amount: 1,
		dependency: false,
	},
	'canvas': {
		attributes() {
			return [
				'canvas', ['canvas_particles']
			]
		},
		amount: 1,
		dependency: 'particles'
	},
	'title': {
		attributes() {
			return [
				'h1', ['particles_title', 'ab_center'], 'musical euphoria'
			]
		},
		amount: 1,
		dependency: 'particles'
	}
}