const myFunctions = require("../customFunctions");
const moviesList = myFunctions.jsonParser("./data/movies.json");
const countFilms = moviesList.movies.length;

//titulos
const homeRoute = '(Home)';
const homeTitle = 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas incluso mucho mejor que Netflix, Cuevana y PopCorn​.';
const countFilmsTitle = '🎬Total de peliculas en cartelera: ';
const piePagina =  `Recordá que podés visitar las secciones:\n 📽En Cartelera --- 🍿Más Votadas --- 🎪Sucursales --- ✉️ Contacto ---  🆘Preguntas Frecuentes`;

//listado peliculas en cartelera
const listFilms = moviesList.movies.map(movie => '  ✼ ' + movie.title);
const listFilmsSorted = listFilms.sort().join(myFunctions.lb1);

//response data
const resHomePage = (myFunctions.appName + homeRoute + myFunctions.lb2 + homeTitle + myFunctions.lb2 +
countFilmsTitle + countFilms + myFunctions.lb2 + listFilmsSorted + myFunctions.lb2 + piePagina);

module.exports = resHomePage;