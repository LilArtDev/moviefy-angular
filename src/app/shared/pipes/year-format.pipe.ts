import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFormat',
  standalone: true,
})
export class YearFormatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const date = new Date(value);
    if (!date) return 'Indefinido';
    return date.getFullYear();
  }
}
