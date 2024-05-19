/* eslint-disable @next/next/no-img-element */
import React from 'react'
import logo from '@/app/assets/logo.jpg'
import Image from 'next/image'
import './style.css'
const Navbar = () => {
  return (
    <nav className={'navbar'}>
      <div className={'navContainer'}>
        <a href='#' className={'navLogo'}>
          <Image src={logo.src} alt='parser logo' width={'200'} height={'50'} />
        </a>
        <ul className={'navMenu'}>
          <li className={'navItem'}>
            <a href='#' className={'navLink'}>
              Home
            </a>
          </li>
          <li className={'navItem'}>
            <a href='#' className={'navLink'}>
              About
            </a>
          </li>
          <li className={'navItem'}>
            <a href='#' className={'navLink'}>
              Services
            </a>
          </li>
          <li className={'navItem'}>
            <a href='#' className={'navLink'}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
