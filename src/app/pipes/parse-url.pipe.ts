import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseUrl',
  standalone: true
})
export class ParseUrlPipe implements PipeTransform {

  transform(value: string): string {
    let title:string = value.substring(0)[0].toUpperCase()+value.substring(1);
    return title;
  }
}
