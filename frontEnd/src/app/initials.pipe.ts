import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
        if(value.split(" ").length > 1){
            let x = value.split(" ");
            let string = x[0].charAt(0) + x[1].charAt(0);
            return string.toUpperCase();
        }
        return value.replace(" ", "").charAt(0).toUpperCase();
  }

}
