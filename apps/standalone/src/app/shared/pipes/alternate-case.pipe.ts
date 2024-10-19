import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternateCase',
  standalone: true,
})
export class AlternateCasePipe implements PipeTransform {
  transform(value: string) {
    return value.split('').map((char, index) => (index % 2 === 0) ? char.toUpperCase() : char.toLowerCase()).join('');
  }
}
