const myFunctions = require("../customFunctions");
const theatersList = myFunctions.jsonParser("./data/theaters.json");

//titulos
const sucursalesRoute = '(Sucursales)';
const theatersTitle = '🎪Nuestas salas: ';

//lisado de sucursales
const listTheaters = theatersList.theaters.map(theater => ' ✼ ' + theater.name + myFunctions.lb1 + ' 🏁 ' + theater.address + myFunctions.lb1 + ' → ' + theater.description);
const listTheatersSorted = listTheaters.sort().join(myFunctions.lb2);

//response data
const resSucursales = (myFunctions.appName + sucursalesRoute + myFunctions.lb2 +
theatersTitle + myFunctions.lb2 + listTheatersSorted);

module.exports = resSucursales;