import { SafePipe } from '@/app/shared/pipes/safe.pipe';
import { Component, Input } from '@angular/core';
import { YoutubeUrlPipe } from "../../../shared/pipes/youtube-url.pipe";

@Component({
    standalone: true,
    selector: 'app-youtube-video',
    templateUrl: './youtube-video.component.html',
    styleUrls: ['./youtube-video.component.css'],
    providers: [SafePipe],
    imports: [YoutubeUrlPipe, SafePipe]
})
export class YoutubeVideoComponent {
  @Input() videoKey: string = '';
}
