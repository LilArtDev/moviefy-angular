import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../common/movie-list/movie-list.component';
import { MoviesService } from '@/app/services/movies/movies.service';
import { Movie } from '@/app/model/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [MovieListComponent],
})
export class HomeComponent implements OnInit {
  moviesList: Movie[] = [];
  errorMessage: string | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    const observer = {
      next: (data: any) => {
        this.moviesList = data.results;
      },
      error: (err: any) =>
        (this.errorMessage = 'Error fetching items: ' + err.message),
      complete: () => console.log('Item fetch complete'),
    };

    this.moviesService.getMovies().subscribe(observer);
  }
}
