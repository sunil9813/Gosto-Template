import React from "react"
import { blog } from "../../assets/data/data"
import { Heading } from "../../common/Heading"

export const Blog = () => {
  return (
    <>
      <section className='blog'>
        <Heading title='LATEST BLOG POSTS' desc='Latest marketplace news, success stories and tutorials.' />

        <div className='posts'>
          {blog.slice(0, 3).map((items) => (
            <div className='post' key={items.id}>
              <div className='content'>
                <div className='img'>
                  <img src={items.cover} alt='' />
                </div>
                <div className='text'>
                  <button className='button'>{items.category}</button>
                  <p>
                    Post Date : <span> {items.date}</span>
                  </p>
                  <h3>{items.title.slice(0, 35)}...</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
