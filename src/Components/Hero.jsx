/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion.js";

function Hero() {
  return (
    <section className='w-full bg-white pt-44 pb-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Left Column */}
        <div className='w-full md:w-1/2 space-y-8'>
          <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            K-ENGINEERING
            <br />
            <span className="text-blue-600 relative inline-block">
              Smart Security. Smarter Living.
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-gray-600 text-lg md:text-xl max-w-xl"
          >
            Protect your property, empower your space, and experience peace of mind with our certified security and energy solutions.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex gap-3 max-w-md"
          >
            <button className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
              <a href='#contact'> Contact Us →</a>
            </button>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team working on smart tech"
              className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
