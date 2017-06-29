import Rx from 'rxjs';
const imdb = require('imdb-api');

function MovieService(){};

MovieService.search = (term) => {
	return imdb.search({
  	title: term
	}, {
  	apiKey: '8bb183ed'
	})
	.then(response => response.results)
	.then(results => results.map(result => result.title));
	
	// imdb.search({
 //  	title: term
	// }, {
 //  	apiKey: '8bb183ed'
	// }).then(response => {console.log(response.result)});

	// return Rx.Observable.fromPromise(promise)
	// 										.map(response => response.results)
	// 										.map(results => results.map(result => result.title));
}

export default MovieService;