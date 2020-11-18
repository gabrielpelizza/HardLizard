const index = require('./src/index')


module.exports = function(req,res){
    switch (req.url) {
        case '/':
            index.homePage(req,res)
            break;
        case '/en-cartelera':
            index.enCartelera(req,res)
            break;
        case '/mas-votadas' :
            //masVotadas
            break;
        case '/sucursales' :
            //sucursales
            break;
        case '/contacto' :
            //contacto
            break;
        case 'preguntas-frecuentes' :
            //preguntasFrecuentes
            break;
        default:
            res.end('Página no encontrada')
            break;
    }
}
