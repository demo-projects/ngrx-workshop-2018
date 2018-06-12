# Instructions

1. initialize a feature module 
2. create actions and action creators
    FindMovies = '[Movies] Find movies',
    FindMoviesSuccess = '[Movies] Find Movies Success',
    FindMoviesError = '[Movies] Find Movies Error',
    GetMovieInfo = '[Movies] Get Movie Info',
    GetMovieInfoSuccess = '[Movies] Get Movie Info Success',
    
3. Implement a movies reducer and additional sub reducers
export interface State {
  selectedMovie: Movie;
  results: Movie[];
  collection: {[id: string]: Movie};
}

export const reducers: ActionReducerMap<State> = {
    results : resultsReducer,
    collection: collectionReducer,
    selectedMovie: selectedReducer
};

4. Implement a movie service using HTTPClient
findMoviesByTitle(title: string) {
    return this.http
      .get(`${this.baseUrl}?apikey=${this.apiKey}&s=${title}`).pipe(
        map((response: any) => response.Search)
      );
  }

  findMoviesById(id: string) {
    return this.http
      .get(`${this.baseUrl}?apikey=${this.apiKey}&i=${id}`);
  }
 
5. Implement Side Effects for this flow

ng generate feature user/User -m user.module.ts --group  
