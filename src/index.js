const { read } = require('fs')
let homePage = require('./homePage')
let preguntasFrecuentes = require('./preguntasFrecuentes')
let sucursales = require ('./sucursales')
let movies = homePage.leerJSON()
<<<<<<< HEAD
let salas = sucursales.leerJSON()
=======
let enCartelera = require('./enCartelera')
let cartelera = enCartelera.leerJSON()
//let contactanos = require("./contacto")
//let contactoP = contactanos.leerJSON()

//let salas = sucursales.leerJSON()
>>>>>>> a0d0e3022de2a0091f08c06ccb1bd881c1d84f14


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
<<<<<<< HEAD
        res.write
        
=======
        res.write("En cartelera")
        res.write(`Total de películas en cartelera: ${cartelera.total_movies} \n \n`)
        cartelera.movies.forEach(movie => {
            res.write('Titulo: ' + movie.title +'\n' + 'Reseña: ' + movie.overview + '\n\n')
        });
>>>>>>> a0d0e3022de2a0091f08c06ccb1bd881c1d84f14
    },


    sucursales : function(req,res){

        let theaters=[];
        
        res.write(`Nuestras Salas.`)
        res.write(`Total de salas: ${salas.total_theaters} \n`)
        res.write(`Nombre ${theaters.name}\n`)
        res.write(`Dirección ${theaters.addres}\n`)
        res.write(`Descripción ${theaters.description}\n`)



        res.end()
    }
    //,
    //ontacto : function(req,res){
    //   contactoP.contacto.forEach(cont =>{
    //       res.write(`${cont.titulo}`)
    //   })
    //   
    //

    faqs : function(req,res){
        res.write('Preguntas frecuentes \n')
        res.write('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n\n')
        res.write(`Total de preguntas:  `)
        res.end()
    } 

}