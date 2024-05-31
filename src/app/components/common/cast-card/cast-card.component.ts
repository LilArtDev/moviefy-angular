import { Cast, Crew } from '@/app/services/casting';
import { CastAPIResponse } from '@/app/services/casting';
import { Component, Input } from '@angular/core';
import { RemoteAssetTransformPipe } from '@/app/shared/pipes/remote-asset-transform.pipe';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cast-card',
  standalone: true,
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.css',
  imports: [RemoteAssetTransformPipe, CommonModule, FontAwesomeModule],
})
export class CastCardComponent {
  faUser = faUser;

  @Input()
  public cast!: Cast;
}
