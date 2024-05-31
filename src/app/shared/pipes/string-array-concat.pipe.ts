import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArrayConcat',
  standalone: true,
})
export class StringArrayConcatPipe implements PipeTransform {
  transform(value: string[]): string {
    return value.join(', ') + '.';
  }
}
