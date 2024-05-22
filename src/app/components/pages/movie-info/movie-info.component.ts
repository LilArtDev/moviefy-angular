import { MoviesService } from '@/app/services/movies.service';
import { Movie } from '@/app/model/movie';
import { Component, OnInit } from '@angular/core';
import { RemoteAssetTransformPipe } from '../../../shared/pipes/remote-asset-transform.pipe';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../../core/rating/rating.component';
import { TimeFormatPipe } from '@/app/shared/pipes/time-format.pipe';
import { YearFormatPipe } from '../../../shared/pipes/year-format.pipe';
import { MovieDetailsAPIResponse } from '@/app/model/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.css',
  imports: [
    RemoteAssetTransformPipe,
    TimeFormatPipe,
    CommonModule,
    RatingComponent,
    YearFormatPipe,
  ],
})
export class MovieInfoComponent implements OnInit {
  public movie: MovieDetailsAPIResponse | undefined;
  public errorMessage: string | undefined;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchMovieDetails();
  }

  private fetchMovieDetails(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (!movieId) return;

    const observer = {
      next: (data: MovieDetailsAPIResponse) => {
        this.movie = data;
      },
      error: (err: any) =>
        (this.errorMessage = 'Error fetching items: ' + err.message),
      complete: () => console.log('Item fetch complete'),
    };

    this.moviesService.getMovieDetails(movieId).subscribe(observer);
  }
}
