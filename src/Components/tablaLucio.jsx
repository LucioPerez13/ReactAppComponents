import React from 'react'
//import ButtonLucio from './botonLucio'
import ModalLucio from './modalLucio';

const vM = [
    {
        type: "text",
        name: "descripcion",
        description: "Descripcion"
    },
    {
        type: "text",
        name: "precio",
        description: "Precio"
    }
]

function TablaLucio(props) {
    return (
        props.lista.map((x, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{x.descripcion}</td>
                <td>{x.precio}</td>
                <td>
                    {<ModalLucio listaForms={vM} />}
                </td>
            </tr>
        )
    )
}
export default TablaLucio