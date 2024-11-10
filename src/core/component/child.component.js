export default class ChildComponent {
	/**
	 * This method should return HTML-string of the component.
	 * It will be called by the parent component and then rendered.
	 * @returns {HTMLElement} - HTML-string of the component
	 */
	render() {
		throw new Error('Method "render" must be implemented')
	}
}
