import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * Create a new BaseScreen instance
	 * @param {Object} options - The options object for the BaseScreen instance
	 * @param {string} options.title - The title of the page
	 */

	constructor({ title }) {
		document.title = getTitle(title)
	}

	render() {
		throw new Error('Method "render" must be implemented')
	}
}
