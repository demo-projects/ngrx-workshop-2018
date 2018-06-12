import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {FindMovies} from '../actions/movies.actions';
import * as fromRoot from '../../reducers/index';
import * as fromMovies from '../reducers/movies.reducer';

@Component({
  selector: 'app-movie-collection',
  template: `
    <div class="row">
      <app-movie-list [items]="movies$ | async"></app-movie-list>
    </div>
  `,
  styles: []
})
export class MovieCollectionComponent implements OnInit {

  movies$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new FindMovies('matrix'));
    this.movies$ = this.store.pipe(select(fromMovies.getCollection));
  }

}
