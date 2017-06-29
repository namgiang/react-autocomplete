import { combineEpics } from 'redux-observable';
import { FETCH_SEARCH_RESULT } from './services/actions';
import MovieService from './services/movies';
import Rx from 'rxjs';

const setSearchResult = searchResult => ({ type: 'SET_SEARCH_RESULT', searchResult });

const searchEpic = action$ => 
	action$.ofType(FETCH_SEARCH_RESULT)
    .mergeMap(action => 
    	Rx.Observable.fromPromise(MovieService.search(action.searchTerm))
    	  .map(response => setSearchResult(response))
    	  .catch(error => Rx.Observable.of({
            type: 'FETCH_SEARCH_REJECTED',
            searchResult: [],
            error: true
        }))
    );

const rootEpic = combineEpics(searchEpic);

export default rootEpic;