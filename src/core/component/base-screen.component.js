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
	/**
	 * This method should return HTML-string of the component.
	 * It will be called by the parent component and then rendered.
	 * @returns {HTMLElement} - HTML-string of the component
	 */
	render() {
		throw new Error('Method "render" must be implemented')
	}
}
