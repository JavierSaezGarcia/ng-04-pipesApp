import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string  = 'pipesApp';
  nombre: string  = 'JaVieR sáeZ';
  numero: number = 1000; 
  obj = {
    nombre: 'Javier'
  }
  

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.numero);
  }
}
