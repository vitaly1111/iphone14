export const accorodion=() => {
	const chItems=document.querySelectorAll('.characteristics__item')
	chItems.forEach((item,i) => {
		const chButton=item.querySelector('.characteristics__title')

		chButton.addEventListener('click',() => {


			chItems.forEach((item,index) => {

				const chContent=item.querySelector('.characteristics__description')
				if (index===i) {
					chContent.classList.toggle('open')
					chButton.classList.toggle('active')
					if (chContent.classList.contains('open')) {

						chContent.style.height=chContent.scrollHeight+'px'
					} else {
						chContent.style.height=0
					}
				} else {
					chContent.classList.remove('open')
					chButton.classList.remove('active')
					chContent.style.height=0
				}
			})


		})
	})
}