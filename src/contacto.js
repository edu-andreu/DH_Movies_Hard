const myFunctions = require("../customFunctions");
const moviesList = myFunctions.jsonParser("./data/movies.json");

//titulos
const contactoRoute = '(Conctacto)';
const contactoTitle = '✉️ Contactanos: ';

//mensages
const message1 = ' ✼ Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes.';
const message2 = ' ✼ Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales.';
const message3 = ' ✼ Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible.';
const message4 = ' ✼ Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.';

//response data
const resContacto = (myFunctions.appName + contactoRoute + myFunctions.lb2 + contactoTitle + myFunctions.lb2 +
message1 + myFunctions.lb1 + message2 + myFunctions.lb1 + message3 + myFunctions.lb1 + message4);

module.exports = resContacto;