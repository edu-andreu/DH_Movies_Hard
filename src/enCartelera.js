const myFunctions = require("../customFunctions");
const moviesList = myFunctions.jsonParser("./data/movies.json");
const countFilms = moviesList.movies.length;

//titulos
const enCarteleraRoute = '(En Cartelera)';
const countFilmsTitle = '🎬Total de peliculas en cartelera: ';

//listado peliculas en cartelera y su reseña
const listFilmsAndOverview = moviesList.movies.map(movie => '  ✼ ' + movie.title + myFunctions.lb1 + '    → ' + movie.overview);
const listFilmsAndOverviewSorted = listFilmsAndOverview.sort().join(myFunctions.lb2);

//response data
const resEnCartelera = (myFunctions.appName + enCarteleraRoute + myFunctions.lb2 + countFilmsTitle +
countFilms + myFunctions.lb2 + listFilmsAndOverviewSorted);

module.exports = resEnCartelera;