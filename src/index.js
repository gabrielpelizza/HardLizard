let homePage = require('./homePage')

let movies = homePage.leerJSON()

module.exports = {
    homePage : function(req,res){
        res.write('Bienvenidos a DH  Movies el mejor sitio para encontrar las mejores peliculas, incluso mucho mejor que Netflix, Cuevana y PopCorn. \n')
       res.write(`Total de películas en cartelera: ${movies.total_movies} \n`)
       
        movies.movies.forEach(movie => {
            res.write(movie.title +'\n')
        });
        
        res.end()
    },
    enCartelera : function(req,res){

    }
}