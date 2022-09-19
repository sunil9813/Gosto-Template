import React, { useState } from "react"
import { topProducts } from "../../assets/data/data"
import { Heading } from "../../common/Heading"
import { ProductItems } from "../product/ProductItems"

export const TopProduct = () => {
  const [cartItems, setCartItems] = useState(topProducts)
  const allCategories = ["all", ...new Set(cartItems.map((item) => item.category))]
  const [category, setCategory] = useState(allCategories)

  /*console.log(setCartItems)
  console.log(setCategory)
  console.log(allCategories)*/

  const handleFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category)
    setCartItems(newItem)

    if (category === "all") {
      setCartItems(topProducts)
      return
    }
  }
  return (
    <>
      <section className='topproduct'>
        <div className='container'>
          <div className='head'>
            <Heading title='Top Selling Products' desc='Meet our newbies! The latest templates uploaded to the marketplace.' />
            <div className='category'>
              {category.map((category) => (
                <button className='button' onClick={() => handleFilter(category)}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  )
}
