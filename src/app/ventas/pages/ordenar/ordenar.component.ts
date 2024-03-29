import { Component, OnInit} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';


@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  enMayusculas: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe [] = [
    {
      nombre: 'Superman',
      vuela : true,
      color : Color.azul
    },
    {
      nombre: 'Duendecillo Verde',
      vuela : true,
      color : Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela : false,
      color : Color.rojo
    },
    {
      nombre: 'Batman',
      vuela : false,
      color : Color.negro
    }
  ]
  // En mayusculas
  toggle() {
    this.enMayusculas = !this.enMayusculas;
  }
  

  cambiarOrden(valor : string) {
    this.ordenarPor = valor;
    return valor
  }
   


  

  
}
