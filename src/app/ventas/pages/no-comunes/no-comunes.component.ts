import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
  // i18nSelect
  nombre: string = 'Javier';
  genero: string = 'masculino';
  nombre2: string = 'Aleth';
  genero2: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitada'
  }

  // i18nPlural
  clientes: string[] = ['Maria','Javier','Aleth','Luis','Laura','Oscar'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  

  cliente: string = '';

  addCliente(cliente: string){
    this.cliente = cliente;
    if(cliente.length!=0){
      this.clientes.push(cliente);
      this.nombre = cliente;
      this.clearSearch()
    }  

  }
  restCliente(){

    if(this.clientes.length > 0){
      this.clientes.pop()
      this.nombre = this.clientes[this.clientes.length-1];
    }
    
  }  
  clearSearch() {
    (<HTMLInputElement>document.getElementById("nom")).value = '';
    (<HTMLInputElement>document.getElementById("nom")).focus();
  }

  // keyvalue Pipe
  persona = {
    nombre:'Javier',
    edad:59,
    direccion: 'Otawa, Canadá'
  }

  // JsonPipe
  heroes = 
  [
    {
      alias: 'Spiderman',
      nombre: 'Peter Parker',
      vuela: 'no'
    },
    {
      alias: 'Ironman',
      nombre: 'Tony Stark',
      vuela: 'si'
    },
    {
      alias: 'Daredevil',
      nombre: 'Dan Murdock',
      vuela: 'no'
    }  
  ];

  // Async Pipe
  miObservable = interval(3500); // 0,1,2,3,4,5,6 ... 
  valorPromesa = new Promise( (resolve, reject)=> {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  } );


}
