import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({ selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html', imports: [RouterOutlet, NavbarComponent, FontAwesomeModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppComponent {
  title = 'movies-galery';
}
