(function() {
	'use strict'
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init)
	}
	else {
		init()
	}
	
	function init() {
		const reviewsButton = document.createElement('BUTTON')
		reviewsButton.appendChild(document.createTextNode('Show Reviews'))
		reviewsButton.id = 'ratings-remover-show-reviews-button'

		let reviewsOpen = false

		reviewsButton.onclick = () => {
			const reviews = document.getElementsByClassName('film-reviews')

			if(reviewsOpen) {
				[...reviews].forEach(element => element.style.display = 'none')
				reviewsButton.innerHTML = 'Show Reviews'
				reviewsOpen = false
			}
			else {
				[...reviews].forEach(element => element.style.display = 'block')
				reviewsButton.innerHTML = 'Hide Reviews'
				reviewsOpen = true
			}
		}

		document.getElementsByClassName('film-recent-reviews')[0].appendChild(reviewsButton)
	}
})()
