import React from 'react'
import { useParams } from 'react-router-dom'
import { Descriptions } from 'antd';

function ProductDetailComponent({data})  {

  console.log("productDetailComponent", data)

  return (
    <Descriptions title={"User Info"}>
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
    {data.brand}
    </Descriptions.Item>
  </Descriptions>
  
  )
}

export default ProductDetailComponent