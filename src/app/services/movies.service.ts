import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../shared/constants';
import { Movie } from '../model/movie';
import { MovieDetailsAPIResponse, PaginatedAPIResponse } from '../model/api';

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

  getMovieDetails(id: string): Observable<MovieDetailsAPIResponse> {
    return this.http.get<MovieDetailsAPIResponse>(
      `${API_BASE_URL}/movie/${id}`
    );
  }
}
