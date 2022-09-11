import React, { useState } from "react"
import { topProducts } from "../../assets/data/data"
import { Heading } from "../../common/Heading"
import { ProductItems } from "../product/ProductItems"

export const TopProduct = () => {
  const [data, setData] = useState(topProducts)
  const allCategories = ["all", ...new Set(data.map((item) => item.category))]
  const [category, setCategory] = useState(allCategories)

  console.log(setData)
  console.log(setCategory)
  console.log(allCategories)
  return (
    <>
      <section className='topproduct'>
        <div className='container'>
          <div className='head'>
            <Heading title='Top Selling Products' desc='Meet our newbies! The latest templates uploaded to the marketplace.' />
            <div className='category'>
              {category.map((category) => (
                <button className='button'>{category}</button>
              ))}
            </div>
          </div>
          <ProductItems data={data} />
        </div>
      </section>
    </>
  )
}
