import React, { useEffect, useState } from "react";
import axios from 'axios';
import TablaLucio from "./tablaLucio";

const baseUrl="https://localhost:44347/api";

function Crud() {
  
  const [products, setProducts] = useState([]);
  //const [product, setProduct] = useState();
  const getData = async () => {
    await axios.get(baseUrl+"/productos/")
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
  }
  // const insertData = async (data) => {
  //   axios.post('/productos', {
  //         descripcion: data
  //   }).then(res => {
          
  //   }).catch(e => {
           
  //   });

  // }


  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="card">
      <div className="card-body">
        <div className="card card-title">
          <b>Api</b>
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
            <TablaLucio lista={products} />
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Crud