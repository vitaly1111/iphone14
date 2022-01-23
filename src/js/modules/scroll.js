export const scroll = ()=>{
	const links=document.querySelectorAll('.header-menu__item a')
	const linkCharacterisitcs=document.querySelector('.card-details__link-characteristics')
	console.log(links)
const newArray=[...links, linkCharacterisitcs]
	seamless.polyfill();

	newArray.forEach(link=>{
		link.addEventListener('click',e=>{
			e.preventDefault();
			const id=link.getAttribute('href').substring(1)
			console.log(id)
				
				const section = document.getElementById(id)
				if(section){
				
					seamless.elementScrollIntoView(section,{
						behavior: 'smooth',
						block: 'start'
					})
				} else {
					seamless.elementScrollIntoView(document.querySelector("#characteristics"),{
						behavior: "smooth",
						block: "center",
						inline: "center",
					});
				}
	
		})
	})
}