//Importar modulos de react / dependencias
import React from "react";
// funcion del componente
const Micomponente = () => {

let usuario = {
    nombre: "Alex",
    apellidos: "Umana",
    web: "testing.com"
};
    return  (
        <div className="mi-componente">
        <hr/>
        <h2>Componente Creado</h2>
        <h3>Datos del Usuario</h3>
        <ul>
            <li>Nombre: <strong>{usuario.nombre+ ' ' +usuario.apellidos}</strong> </li>
            <li>Web: <strong>{usuario.web}</strong>  </li>
        </ul>
        <p>Este es mi primer componente</p>
        <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
        </ul>
        </div>
    );
}

export default Micomponente;