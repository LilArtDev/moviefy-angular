import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../shared/constants';
import { Movie } from '../../model/movie';
import { PaginatedAPIResponse } from '@/app/shared/interfaces/api.interfaces';
import {
  MovieDetailsAPIResponse,
  VideoInfo,
  VideosAPIResponse,
} from './movies.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<PaginatedAPIResponse<Movie>> {
    return this.http.get<PaginatedAPIResponse<Movie>>(
      `${API_BASE_URL}/movie/popular`
    );
  }

  getMovieDetails(movieId: string): Observable<MovieDetailsAPIResponse> {
    return this.http.get<MovieDetailsAPIResponse>(
      `${API_BASE_URL}/movie/${movieId}`
    );
  }

  getMovieVideos(movieId: string): Observable<VideosAPIResponse> {
    return this.http.get<any>(`${API_BASE_URL}/movie/${movieId}/videos`);
  }

  getMovieTrailerByVideos(videos: VideoInfo[]) {
    return videos.filter(({ type }) => type === 'Trailer')[0];
  }
}
