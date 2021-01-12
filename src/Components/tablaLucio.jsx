import React from 'react'
//import ButtonLucio from './botonLucio'
import ModalLucio from './modalLucio';

const vM = [
    {
        type: "email",
        name: "email",
        description: "Correo"
    },
    {
        type: "text",
        name: "user",
        description: "Usuario"
    }
]


function TablaLucio(props) {
    return (
        props.lista.map((x, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{x.descripcion}</td>
                <td>
                    {<ModalLucio listaForms={vM} />}
                </td>
            </tr>
        )
    )
}
export default TablaLucio