import React, { useEffect } from "react"
import TableProduct from './table-product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productsDuck'

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products.arrayProducts)

  useEffect(() => {
    dispatch(getProducts())
  })

  return (
    <div className="card">
      <div className="card-body">
        <div className="card card-title text-center">
          <h1><b>Productos de Electrónica</b></h1>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <TableProduct lista={products} />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Product