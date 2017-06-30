const imdb = require('imdb-api');

function MovieService(){};

MovieService.search = (term) => {
	return imdb.search({
  	title: term.trim()
	}, {
  	apiKey: '8bb183ed'
	})
	.then(response => response.results)
	.catch(error => console.log(error))
	.then(results => results.map(result => result.title))
	.catch(error => console.log(error));
}

export default MovieService;