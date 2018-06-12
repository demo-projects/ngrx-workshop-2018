import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import * as fromRoot from '../../reducers/index';
import * as fromMovies from '../reducers/movies.reducer';
import {FindMovies, GetMovieInfo} from '../actions/movies.actions';

@Component({
  selector: 'app-finder',
  template: `
    <div class="row">
      <app-movie-list [items]="movies$ | async" (select)="selectMovie($event)"></app-movie-list>
    </div>
  `,
})
export class MovieFinderComponent implements OnInit {

  movies$: Observable<any>;

  constructor(private store: Store<fromRoot.State>, public router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(new FindMovies('matrix'));
    this.movies$ = this.store.pipe(select(fromMovies.getResults));
  }

  selectMovie(id: string) {
    this.store.dispatch(new GetMovieInfo(id));
  }

}
