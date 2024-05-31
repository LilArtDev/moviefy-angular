import { Pipe, PipeTransform } from '@angular/core';
import { REMOTE_ASSETS_BASE_URL } from '../constants';

@Pipe({
  name: 'remoteAsset',
  standalone: true,
})
export class RemoteAssetTransformPipe implements PipeTransform {
  transform(posterPath: string, width = 500): string {
    return `${REMOTE_ASSETS_BASE_URL}/w${width}/${posterPath}`;
  }
}
