const fs = require('fs')

/*a. Título: Bienvenidos a DH Movies el mejor sitio para encontrar las mejores
películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.
b. Total de películas en cartelera: (total de películas)
c. Listados de películas
i. Mostrar el listado de películas organizadas alfabéticamente por
título.

d. Pié de página: Recordá que podés visitar las secciones:
i. En Cartelera
ii. Más Votadas
iii. Sucursales
iv. Contacto
v. Preguntas Frecuentes
*/
module.exports = {
    bd : './data/movies.json',
    leerJSON : function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'));
    }
}