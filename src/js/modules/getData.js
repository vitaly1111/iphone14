export const getData=() => {
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(res => {
			if (res.ok){
				return res.json()
			}else{
				return new Error("Что то пошло не так");
			}
			
		})
		.then(data => {
			console.log(data)
		})
		.catch(err=>{
			console.error(err)
		})
		.finally(()=>{
			console.log('finaly')
		})
}