import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../shared/constants';
import { CastAPIResponse, Crew } from './casting.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CastService {
  constructor(private http: HttpClient) {}

  getCastingByMovieId(id: string): Observable<CastAPIResponse> {
    return this.http.get<CastAPIResponse>(
      `${API_BASE_URL}/movie/${id}/credits`
    );
  }

  getMovieDirectorsByCrew(crew: Crew[]): string[] {
    return crew
      .filter(({ department }) => department === 'Directing')
      .map(({ name }) => name);
  }
}
