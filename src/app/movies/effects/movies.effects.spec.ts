import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MoviesEffects } from './movies.effects';

describe('MoviesService', () => {
  let actions$: Observable<any>;
  let effects: MoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MoviesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(MoviesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
