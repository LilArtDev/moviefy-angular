import { Movie } from '@/app/model/movie';
import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MovieCardComponent } from '../../core/movie-card/movie-card.component';
import { GenresService } from '@/app/services/genres.service';
import { ListGenresAPIResponse } from '@/app/model/api';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  imports: [CommonModule, MovieCardComponent],
})
export class MovieListComponent implements OnChanges, OnInit {
  @Input() public movies: Movie[] = [];
  public genres: Record<number, string> = {};
  public errorMessage: string | undefined;

  constructor(private genresService: GenresService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movies']) {
      this.updateMovieList(changes['movies'].currentValue);
    }
  }

  ngOnInit(): void {
    this.fetchGenres();
  }

  fetchGenres(): void {
    const observer = {
      next: (data: ListGenresAPIResponse) => {
        data.genres.forEach(({ id, name }) => {
          this.genres = Object.assign(this.genres, { [id]: name });
        });
      },
      error: (err: any) =>
        (this.errorMessage = 'Error fetching items: ' + err.message),
      complete: () => console.log('Item fetch complete'),
    };

    this.genresService.getGenres().subscribe(observer);
  }

  updateMovieList(movies: Movie[]): void {
    this.movies = movies;
  }

  getGenres(movie: Movie): string[] {
    return movie.genre_ids.map((id) => this.genres[id]);
  }
}
