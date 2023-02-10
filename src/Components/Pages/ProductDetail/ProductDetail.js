import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ProductDetailComponent from '../../ProductDetailComponent/ProductDetailComponent'
import { fetchCopyDrinksDetail } from '../../Utils/FetchCopyDrinksDetail';
import { mockedProducts } from '../../Utils/Products';


const ProductDetail = () => {

  let  productoSeleccionado = ""


  const [product, setProducts] = useState({});

  let { id } = useParams();

  console.log(id)

  useEffect(() => {
    fetchCopyDrinksDetail(mockedProducts).then((result) => 
    setProducts(result[id]));
    

  }, [id])


console.log("fueraDelDiv",productoSeleccionado)

  return (
      <div className="CharacterList-detail">
        <div >
          <ProductDetailComponent data={product} />
         
        </div>
      </div>
    )
 
}

export default ProductDetail