import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../shared/constants';
import { ListGenresAPIResponse } from './genres.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  private apiUrl = API_BASE_URL + '/genre/movie/list';

  constructor(private http: HttpClient) {}

  getGenres(): Observable<ListGenresAPIResponse> {
    return this.http.get<ListGenresAPIResponse>(this.apiUrl);
  }
}
