// Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит 
// обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), 
// где вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов. 
// Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.

function getData( iteration ) {
	return new Promise( ( resolve, reject ) => {
		fetch('https://jsonplaceholder.typicode.com/users/' + iteration)
		.then( ( result ) => {
			resolve( result.json() )
		})
		.catch( ( error ) => {
			reject( error )
		});
	});
};

let arr = [];

for ( let i = 1; i <= 10; i++) {
	arr.push( getData( i ) )
};

Promise.all( arr ).then( results => { console.log( results ) }, error => { console.log( error ) });