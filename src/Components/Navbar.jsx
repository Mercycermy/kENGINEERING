/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from "framer-motion"
import { fadeIn} from "../utils/motion.js"
import logo from '../assets/logo.png' 

function Navbar() {

    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const [activeLink, setActiveLink]=useState('#')
    
    const navLinks=[
        {
            href:"#", label:"Home"
        },
        {
            href:"#about", label:"About"
        },
        {
            href:"#services", label:"Services"
        },
        {
            href:"#testimonials", label:"Testimonials"
        },
    ]
    const handleLogoClick = () => {
        setActiveLink('#')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  return (
    <motion.nav  variants={fadeIn('down', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
     className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
    <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
     

 {/* Logo */}
 <motion.div
  variants={fadeIn('right', 0.3)}
  onClick={handleLogoClick}
  className="cursor-pointer"
>
  <a href="#">
    <motion.img
      whileHover={{ scale: 1.05 }}
      src={logo}
      alt="Logo"
      className="h-10 w-auto"
    />
  </a>
</motion.div>


        <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
            {
                isMenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
            }
        </button>


        {/* desktop menu */}
        <div className='hidden md:flex items-center gap-10 '>
            {
                navLinks.map((link, index) => {
                    return (
                        <a
                            key={index}
                            onClick={() => setActiveLink(link.href)}
                            href={link.href}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#00A651] after:transition-all ${
                              activeLink === link.href
                                ? 'text-[#00A651] after:w-full'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            {link.label}
                        </a>
                    )
                })
            }
        </div>
        {/* button */}
        <button className='hidden md:block bg-[#00C853] text-white px-6 py-2.5 rounded-lg hover:bg-[#00A651] text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#00A651] ' >
            <a href='#contact'> Get in touch</a>
        </button>
        {/* mobile menu */}




    </div>

    {/* mobile menu items */}
    {
        isMenuOpen && (
            <div className='md:hidden bg-white border-t border-gray-100 py-4'>
                <div className=' container mx-auto px-4 space-y-3'>
                {navLinks.map((link, index) => (
        <a
          key={index}
          className={`block text-sm font-medium py-2 ${
            activeLink === link.href
              ? "text-[#00C853]"
              : "text-gray-600 hover:text-gray-900"
          }`}
          href={link.href}
          onClick={() => {
            setActiveLink(link.href);
            setIsMenuOpen(false); // Close menu after click
          }}
        >
          {link.label}
        </a>
      ))}
                    {/* button */}
        <button className='w-full bg-[#00C853] text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500' >
            <a href='#contact'> Get in touch</a>
        </button>
                </div>
            </div>
        )
    }


    </motion.nav>

  )
}

export default Navbar