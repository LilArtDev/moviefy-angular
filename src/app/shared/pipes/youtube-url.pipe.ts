import { Pipe, PipeTransform } from '@angular/core';
import { YOUTUBE_BASE_URL } from '../constants';

@Pipe({
  name: 'youtubeUrl',
  standalone: true,
})
export class YoutubeUrlPipe implements PipeTransform {
  transform(value: string): string {
    return `${YOUTUBE_BASE_URL}/embed/${value}`;
  }
}
