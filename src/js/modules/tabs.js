export const tabs= ()=>{
	const tabsHeandlerList=document.querySelectorAll('.card-detail__change')
	const tabsTile=document.querySelector('.card-details__title')
	const tabsPrice=document.querySelector('.card-details__price')
	const tabsImage=document.querySelector('.card__image_item')

	const documentTitle=document.querySelector('title')

	const tabsOption=[
		{
			name: 'Graphite',
			memory: '128',
			price: '60000',
			image: 'iPhone-graphite.webp'
		},
		{
			name: 'Silver',
			memory: '256',
			price: '70000',
			image: 'iPhone-silver.webp'
		},
		{
			name: 'Sierra Blue',
			memory: '512',
			price: '75000',
			image: 'iPhone-sierra_blue.webp'
		}
	]

	const changeContent=(index)=>{
		tabsTile.textContent=`
		Смартфон Apple iPhone 13 Pro ${tabsOption[index].memory}GB ${tabsOption[index].name}`;
		documentTitle.textContent=`
		iPhone 13 Pro ${tabsOption[index].memory}GB ${tabsOption[index].name}`;
		tabsPrice.textContent=`${tabsOption[index].price}₽ `;
		tabsImage.setAttribute('src',`img/${tabsOption[index].image}`)
	}

	tabsHeandlerList.forEach((tab,i)=>{
		tab.addEventListener('click',()=>{
			tabsHeandlerList.forEach((item,index)=>{
				if(index===i){
					item.classList.add('active')
				}else{
					item.classList.remove('active')
				}
			})
			changeContent(i)
		})
	})
	changeContent(0)
}