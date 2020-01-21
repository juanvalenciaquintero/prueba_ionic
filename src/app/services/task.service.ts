import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService
{

	constructor(public http: HttpClient)
	{
		console.log('Entrado en servicio');
	}
	//private url = '/myshoplist.php';

	getAllArticles()
	{


			// try {
			// 	const url = 'https://www.roninwear.com/_DEV/prueba.php?accion=1';
			// 	const params = {};
			// 	const headers = {};

			// 	this.http.get(url)
			// 		.then(data =>
			// 		{
			// 			console.log(data.status);
			// 			console.log(JSON.parse(data.data)); // JSON data returned by server
			// 			console.log(data.headers);
			// 		});

			// } catch (error) {
			// 	console.error(error.status);
			// 	console.error(error.error); // Error message as string
			// 	console.error(error.headers);
			// }
		}

		// 	this.http.get('https://www.roninwear.com/_DEV/prueba.php?accion=1',{
		// 		headers : new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
		// 		.set("Access-Control-Allow-Origin", '*')
		// 		.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT")
		// 			.set("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me")
		// 	})
		// 		.subscribe(data =>
		// 		{
		// 		resolve(data);
		// 	}, err => {
		// 		console.log(err);
		// 	});
		// });
    // const path = '/myshoplist.php?valor=1';
    // return this.http.get<Article[]>(path);


}
