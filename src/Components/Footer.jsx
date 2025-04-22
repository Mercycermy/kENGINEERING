/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function Footer() {
  const footerLinks = {
    gallery: [
      { name: 'See Our Work', href: 'https://t.me/Kengineeringcctv' },
      { name: 'Client Feedback', href: 'https://t.me/Kengineeringcctv' },
    ],
    contact: [
      { name: 'WhatsApp', href: 'https://wa.me/+251945662432' },
      { name: 'Support 24', href: 'tel:+25165798798' },
    ],
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com/Kengineeringcctv' },
      { name: 'Twitter', href: 'https://twitter.com/Kengineers24' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/kengineers/' },
      { name: 'TikTok', href: 'https://www.tiktok.com/@kengineers24' },
    ],
  }

  return (
    <motion.footer variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show" className="bg-white/90 border-t border-gray-100 shadow-sm relative">
      <div className='absolute -top-30 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/15 rounded-full blur-[80px ] -z-20 to-gray-100'></div>
      <motion.div variants={fadeIn('up', 0.3)} className='px-4 sm:px-6 lg:px-8 py-16 container mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            className="lg:col-span-4"
          >
            <motion.div
              variants={fadeIn('down', 0.5)}
              className="flex items-center gap-1 mb-6"
            >
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
              <span className="text-xl font-medium ml-1">M.M</span>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.6)}
              className="text-gray-600 mb-6"
            >
              K-Engineering is a proudly Ethiopian company committed to modern security and energy solutions.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.7)}
              className="flex gap-4"
            >
              {footerLinks.social.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href={link.href}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {link.name === 'Facebook' && <FaFacebookF className="w-5 h-5" />}
                  {link.name === 'Twitter' && <FaTwitter className="w-5 h-5" />}
                  {link.name === 'LinkedIn' && <FaLinkedinIn className="w-5 h-5" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div
                  key={category}
                >
                  <motion.h3
                    variants={textVariant(0.2)}
                    className="text-lg font-medium mb-4"
                  >
                    {category === 'gallery' && '📸 Gallery'}
                    {category === 'aboutUs' && '📃 About Us'}
                    {category === 'contact' && '📞 Contact Us'}
                  </motion.h3>
                  <motion.ul variants={fadeIn('up', 0.4)}
                    className="space-y-3"
                  >
                    {links.map((link, index) => (
                      <motion.li
                        key={index}
                        variants={fadeIn('up', 0.1 * (index + 1))}
                      >
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={link.href}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
              variants={fadeIn('right', 1.0)}
              className="text-gray-600 text-sm"
            >
              Copyright © {new Date().getFullYear()} M.M
            </motion.p>
            <motion.p
              variants={fadeIn('left', 1.0)}
              className="text-gray-600 text-sm"
            >
              Created by M.M
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer
