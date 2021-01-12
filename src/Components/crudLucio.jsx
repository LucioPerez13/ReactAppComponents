import React, { useEffect, useState } from "react";
import axios from 'axios';
import TablaLucio from "./tablaLucio";

function Crud() {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    await axios.get("https://localhost:44347/api/productos/")
      .then(res => {
        console.log(res.data)
        setProducts(res.data)
      })
  }
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
              <th>Hablidades</th>
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