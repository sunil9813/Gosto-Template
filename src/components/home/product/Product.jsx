import React, { useState } from "react"
import { Heading } from "../../common/Heading"
import { products } from "../../assets/data/data"

import { ProductItems } from "./ProductItems"

export const Product = () => {
  const [data, setData] = useState(products)
  console.log(setData)
  return (
    <>
      <section className='product'>
        <div className='container'>
          <Heading title='Trendings Products' desc='Check the hottest designs of the week. These rising stars are worth your attention.' />

          <ProductItems data={data} />
        </div>
      </section>
    </>
  )
}
