//imports
import React from "react";
//exports
export const SegundoComponente = () => {
    const listadolibros = ["Harry Potter","Juego de Tronos","Clean Code"]
    const librosaux = [];
    return (
        <div>
            <h2>Listado de libros</h2>
            {librosaux.length >= 1 ?
              <ul>
              {
               listadolibros.map((libro,indice) => {
                   return <li key={indice}>{libro}</li>;
               }) 
              }
           </ul>
           :(<p>No se encuentran libros disponibles!</p>)
         }
          
        </div>
    )
} 