import React from "react"
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"

export const ProductItems = ({ data }) => {
  return (
    <>
      <div className='product_items'>
        {data.map((items) => (
          <div className='box' key={items.id}>
            <div className='img'>
              <img src={items.cover} alt='' />
              <div className='overlay'>
                <button className='button'>
                  <FiShoppingBag />
                </button>
                <button className='button'>
                  <AiOutlineHeart />
                </button>
                <button className='button'>
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className='details'>
              <h3>{items.title}</h3>
              <p>{items.author}</p>
              <h4>${items.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
