const imdb = require('imdb-api');

function MovieService(){};

MovieService.search = (term) => {
	return imdb.search({
  	title: term
	}, {
  	apiKey: '8bb183ed'
	});
}

export default MovieService;