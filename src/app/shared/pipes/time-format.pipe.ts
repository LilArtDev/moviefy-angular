import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true,
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 0) return '0m';
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}h${minutes}m`;
  }
}
