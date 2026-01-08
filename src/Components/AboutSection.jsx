/* eslint-disable no-unused-vars */
import React from 'react'
import AboutImage from "../assets/about.jpg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { publicConfig } from '../config/publicConfig.js';

function AboutSection() {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Text */}
        <motion.div variants={fadeIn('left', 0.3)} className="w-full md:w-1/2">
          <motion.span variants={fadeIn('up', 0.4)} className="text-[#00A651]  font-bold text-4xl">
            ABOUT US
          </motion.span>
          <motion.h2 variants={textVariant(0.5)} className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6">
            Smart, Secure & Reliable.
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.6)} className="text-gray-600 mb-8">
            {publicConfig.companyDescription}
          </motion.p>
          <motion.a
           href="#services"
            variants={fadeIn('up', 0.7)}
            className="text-[#00A651] font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Learn more about our work
            <motion.svg
              variants={fadeIn('left', 0.8)}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Image - now side by side with the text */}
        <motion.div variants={fadeIn('right', 0.3)} className="w-full md:w-1/2">
          <motion.img
            variants={fadeIn('up', 0.4)}
            src={AboutImage}
            alt={`About ${publicConfig.companyName}`}
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutSection
