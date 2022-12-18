import React from "react";
//export
export const TercerComponente = (props) => {
    console.log('Resultado de propiedades: ' + JSON.stringify(props));
    return (
        <div>
            <h1>Comunicacion entre componentes</h1>
        </div>
    )
}
