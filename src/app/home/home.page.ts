import { Component } from '@angular/core';
import { TaskService } from './../services/task.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage
{

	articulos: any;
	mensaje: any;
	constructor(public http: HttpClient)
	{
		this.getAllArticles();
	}

	getAllArticles() {
	 return new Promise(resolve => {
			this.http.get('http://www.estadisticas.dx.am/myshoplist.php?valor=1')
				.subscribe(data =>
				{
					this.mensaje = data;
				resolve(data);
			}, err => {
				console.log(err);
			});
		});
	}

}
