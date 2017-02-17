import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namecolor'
})
export class NamecolorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const first = this.getRandomArbitrary(value.charCodeAt(0) - 93);
    const middle = this.getRandomArbitrary(value.length + 5);
    const last = this.getRandomArbitrary(value.charCodeAt(value.length - 1) - 99);
    const rgba = 'rgba(' + first + ',' + middle + ',' + last + ', 0.5)';
    return rgba;
  }
  getRandomArbitrary(value) {
    return value * 9;
  }
}
