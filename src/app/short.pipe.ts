import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  // transform(value: any): any {
  transform(value: string, size: number): string {
    if(value.length >= size)
      return value.slice(0, size) + '...';
    else
      return value;

  }

}
