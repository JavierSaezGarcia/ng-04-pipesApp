import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../interfaces/ventas.interfaces";

@Pipe({
    name: 'color',    
})
export class ColorPipe implements PipeTransform {
    transform(color: Color): string | any{    
       
       switch(color){
        case 0:
            return 'Rojo'
        case 1:
            return 'Negro'
        case 2:
            return 'Azul'
        case 3:
            return 'Verde'

       }
    }

}