import { Component, OnInit } from '@angular/core';
import { RemoteAssetTransformPipe } from '../../../shared/pipes/remote-asset-transform.pipe';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../../core/rating/rating.component';
import { TimeFormatPipe } from '@/app/shared/pipes/time-format.pipe';
import { YearFormatPipe } from '../../../shared/pipes/year-format.pipe';
import { ActivatedRoute } from '@angular/router';
import { StringArrayConcatPipe } from '@/app/shared/pipes/string-array-concat.pipe';
import {
  MovieDetailsAPIResponse,
  MoviesService,
  VideoInfo,
  VideosAPIResponse,
} from '@/app/services/movies';
import { CastAPIResponse, CastService } from '@/app/services/casting';
import { YoutubeVideoComponent } from '../../core/youtube-video/youtube-video.component';
import { CastCardComponent } from '../../common/cast-card/cast-card.component';

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
    YoutubeVideoComponent,
    YearFormatPipe,
    StringArrayConcatPipe,
    CastCardComponent,
  ],
})
export class MovieInfoComponent implements OnInit {
  public movie: MovieDetailsAPIResponse | undefined;
  public casting: CastAPIResponse | undefined;
  public trailer: VideoInfo | undefined;
  public errorMessage: string | undefined;
  public directors: string[] = [];
  public genres: string[] = [];
  public industries: MovieDetailsAPIResponse['production_companies'] = [];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private castService: CastService
  ) {}

  ngOnInit(): void {
    this.fetchMovieDetails();
    this.fetchCasting();
    this.fetchMovieVideos();
  }

  private fetchMovieDetails(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (!movieId) return;

    const observer = {
      next: (data: MovieDetailsAPIResponse) => {
        this.movie = data;
        this.genres = data.genres.map(({ name }) => name);
        this.industries = data.production_companies.filter(
          (elements) => elements.logo_path
        );
      },
      error: (err: any) =>
        (this.errorMessage = 'Error fetching items: ' + err.message),
      complete: () => console.log('Item fetch complete'),
    };

    this.moviesService.getMovieDetails(movieId).subscribe(observer);
  }

  private fetchCasting(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (!movieId) return;

    const observer = {
      next: (data: CastAPIResponse) => {
        this.casting = data;
        this.casting.cast = data.cast.sort((a, b) => {
          if (a.profile_path && !b.profile_path) {
            return -1;
          }
          if (!a.profile_path && b.profile_path) {
            return 1;
          }
          return 0;
        });
        this.directors = this.castService.getMovieDirectorsByCrew(data.crew);
      },
      error: (err: any) =>
        (this.errorMessage = 'Error fetching items: ' + err.message),
      complete: () => console.log('Item fetch complete'),
    };

    this.castService.getCastingByMovieId(movieId).subscribe(observer);
  }

  private fetchMovieVideos(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (!movieId) return;

    const observer = {
      next: (data: VideosAPIResponse) => {
        this.trailer = this.moviesService.getMovieTrailerByVideos(data.results);
      },
      error: (err: any) =>
        (this.errorMessage = 'Error fetching items: ' + err.message),
      complete: () => console.log('Item fetch complete'),
    };

    this.moviesService.getMovieVideos(movieId).subscribe(observer);
  }
}
