/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function FeatureSection() {
  const features = [
    {
      icon: "👷‍♂️",
      title: "Experienced Technicians",
      description: "Our certified experts ensure every job is done right the first time."
    },
    {
      icon: "🛠️",
      title: "Latest Tech & Products",
      description: "We use only top-quality tools and cutting-edge solutions."
    },
    {
      icon: "⚡",
      title: "Fast, Clean Installation",
      description: "Quick turnarounds with minimal disruption to your space."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Top-tier service at prices that respect your budget."
    }
  ];

  return (
    <motion.section  variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView="show" className="max-w-7xl mx-auto px-4 py-16">
        <motion.div variants={fadeIn('up', 0.3)} className="text-center mb-12">
            <motion.h2 variants={textVariant(0.2)} className="text-3xl font-bold mb-4">
            Why Choose K-ENGINEERING?
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} className="text-gray-600">
            We're more than service providers—we're your trusted tech partners.
            </motion.p>

        </motion.div>

        <motion.div variants={fadeIn('up', 0.5)} className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
{

// flex flex-col items-center p-6 border rounded-4xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl
// flex flex-col items-center p-6 border rounded-4xl    
// w-24 h-24 rounded-full mb-6 flex items-center justify-center transition-colors duration-300
// w-24 h-24 rounded-full mb-6 flex items-center justify-center
features.map((feature, index) => (
        <motion.div variants={fadeIn('up', 0.3 * (index + 1))} key={index}  className="flex flex-col items-center p-6 border rounded-4xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl
        ">
            <motion.div variants={fadeIn('down', 0.4 * (index + 1))} className="w-24 h-24 rounded-full mb-6 flex items-center justify-center transition-colors duration-300"  style={{ 
                backgroundColor: index === 0 ? '#F1EFFD' : 
                               index === 1 ? '#FFE7E7' : 
                               '#FFF3E4'
              }}>
                <motion.div   variants={fadeIn('up', 0.5 * (index + 1))} className="text-3xl">
                    {feature.icon}
                </motion.div>
            </motion.div>
            <motion.h3  variants={textVariant(0.3)} className="text-2xl font-medium mb-3">
                {feature.title}
            </motion.h3>
            <motion.p   variants={fadeIn('up', 0.6 * (index + 1))} className="text-gray-500 text-center">{feature.description}</motion.p>

        </motion.div>
    ))
}
        </motion.div>
    </motion.section>
  )
}

export default FeatureSection