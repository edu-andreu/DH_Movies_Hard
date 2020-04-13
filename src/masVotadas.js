const myFunctions = require("../customFunctions");
const moviesList = myFunctions.jsonParser("./data/movies.json");

//titulos
const masVotadasRoute = '(Mas Votadas)';
const bestRatedTitle = '🍿Mas Votadas: ';

//listado peliculas cuyo rating sea >=7
const selectBestRatedFilms = moviesList.movies.filter(movie => movie.vote_average >=7);
const listBestRatedFilms = selectBestRatedFilms.map(movie => ' ✼ ' + movie.title + myFunctions.lb1 + '   → ' + movie.overview + myFunctions.lb1 + '   ﹟Rating: ' + movie.vote_average);
const listBestRatedFilmsSorted = listBestRatedFilms.sort().join(myFunctions.lb2);

//response data
const resMasVotadas = (myFunctions.appName + masVotadasRoute + myFunctions.lb2 +
bestRatedTitle + myFunctions.lb2 + listBestRatedFilmsSorted);

module.exports = resMasVotadas;