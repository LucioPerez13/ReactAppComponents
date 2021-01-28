import React from 'react'
import ModalProduct from './modal-product'

const TableProduct = (props) => {
    return (
        props.lista.map((x, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{x.descripcion}</td>
                <td>{x.precio}</td>
                <td>
                    {<ModalProduct forms={x} />}
                </td>
            </tr>
        )
    )
}
export default TableProduct