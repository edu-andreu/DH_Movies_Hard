const myData = require('./src');

module.exports = {
	routes: (req, res) => {
		switch (req.url) {
			case '/':
				res.end(myData.home);
				break;
			case '/en-cartelera':
			    res.end(myData.enCartelera);
			    break;
			case '/mas-votadas':
			    res.end(myData.masVotadas);
			    break;
			case '/sucursales':
			 	res.end(myData.sucursales);
			 	break;
			case '/contacto':
			 	res.end(myData.contacto);
			 	break;
			case '/preguntas-frecuentes':
			 	res.end(myData.faqs);
			 	break;
			default:
			 	res.end('404 not found');
		}
	}
}