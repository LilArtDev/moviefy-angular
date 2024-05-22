import { Movie } from '@/app/model/movie';
import { Component, Input } from '@angular/core';
import { RemoteAssetTransformPipe } from '../../../shared/pipes/remote-asset-transform.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  imports: [RemoteAssetTransformPipe, CommonModule],
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input()
  public item!: Movie;
  @Input()
  public genres!: string[];

  constructor(private router: Router) {}

  public onClick() {
    this.router.navigate(['movie', { id: this.item.id }]);
  }
}
