import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { FETCH_SEARCH_RESULT, setSearchResult, fetchSearchRejected } from './services/actions';
import MovieService from './services/movies';

const searchEpic = action$ => 
	action$.ofType(FETCH_SEARCH_RESULT)
    .mergeMap(action => 
    	Observable.fromPromise(MovieService.search(action.searchTerm))
    	  .map(response => setSearchResult(response))
    	  .catch(error => Observable.of(fetchSearchRejected()))
    );

const rootEpic = combineEpics(searchEpic);

export default rootEpic;