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

		reviewsButton.onclick = () => {
			const section = document.getElementById('popular-reviews')

			if(section.style.display == 'block') {
				section.style.display = 'none'
				reviewsButton.innerHTML = 'Show Reviews'
			}
			else {
				section.style.display = 'block'
				reviewsButton.innerHTML = 'Hide Reviews'
			}
		}

		document.getElementsByClassName('film-recent-reviews').at(0).appendChild(reviewsButton)
	}
})()
