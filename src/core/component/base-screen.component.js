import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	constructor(title) {
		document.title = getTitle(title)
	}

	render() {
		throw new Error('Method "render" must be implemented')
	}
}
