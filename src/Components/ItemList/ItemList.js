import React from 'react'
import Item from '../Item/Item'
import "./styles.css"
import { Link } from "react-router-dom";

import ProductDetailComponent from '../ProductDetailComponent/ProductDetailComponent';


function ItemList({ children, products }) {

  const result = products.filter(category => category.category === "Soft Drinks");

  console.log("filtro", result)


  return (
    <div className='Cards-List'>


      {products.map((producto) => {

        return (
          
          <Link to={`/productDetail/${producto.id}`}>
         
            <Item products={producto} key={producto.id} />
           
          </Link>

        )
          


      })}

   

     



    </div>


  )
}

export default ItemList