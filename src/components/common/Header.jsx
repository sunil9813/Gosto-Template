import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import { BiSearch } from "react-icons/bi"
import { BsBagCheck } from "react-icons/bs"
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { navlist } from "../assets/data/data"

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })

  const [mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container'>
          <nav>
            <div className='toggle'>
              <button onClick={() => setMobile(!mobile)}>{mobile ? <AiOutlineClose className='close heIcon' /> : <AiOutlineMenu className='open heIcon' />}</button>
            </div>
            <div className='left'>
              <img src={logo} alt='logo' />
            </div>
            <div className='center'>
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav) => (
                  <li key={nav.id}>
                    <a href={nav.path}>{nav.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className='right'>
            <div className='right_search'>
              <input type='text' placeholder='Search Products...' />
              <BiSearch className='serachIcon heIcon' />
            </div>
            <div className='right_user'>
              <RiUser3Line className='userIcon heIcon' />
              <AiOutlineHeart className='userIcon heIcon' />
            </div>
            <div className='right_card'>
              <button className='button'>
                <BsBagCheck className='shop heIcon' />
                MY CART (0)
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
