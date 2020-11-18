let homePage = require('./homePage')

let movies = homePage.leerJSON()

module.exports = {
    homePage : function(req,res){
        res.write('Bienvenidos a DH  Movies el mejor sitio para encontrar las mejores peliculas, incluso mucho mejor que Netflix, Cuevana y PopCorn. \n\n')
        res.write(`Total de películas en cartelera: ${movies.total_movies} \n \n`)
        res.write('Listado de películas \n \n')
       
       let orden = []
        movies.movies.forEach(movie => {
            orden.push(movie.title +'\n')
        });
        orden.sort();
        orden.forEach(function(pelis){
            res.write(`► ${pelis} \n`)
        })
        res.write('\n')
        res.write("Recordá que podés visitar las secciones:\n")
        res.write('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n')
        res.write(" → En Cartelera \n → Más Votadas \n → Sucursales \n → Contacto \n → Preguntas Frecuentes")

        res.end();  

        
    },
    enCartelera : function(req,res){
        res.write
    },

    /*
    Sucursales (/sucursales)
a. Título: Nuestras Salas.
b. Total de salas: (total de salas)
c. Listados de salas. Para cada sala mostrar:
i. Nombre (nombre de la sala)
ii. Dirección (ubicación de la sala)
iii. Descripción (descripción de la sala)

    */

    sucursales : function(req,res){
        res.write(`Nuestras Salas.`)
        res.write(`Total de salas: ${movies.total_theaters} \n`)
        res.end()
    }

}