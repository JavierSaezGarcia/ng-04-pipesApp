import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela',
    
})
export class VuelaPipe implements PipeTransform {
    transform(volar: boolean) {       
        
        return ( volar ) 
        ? 'Si vuela'
        : 'No vuela';
       
    }

}