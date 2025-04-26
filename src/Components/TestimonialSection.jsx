import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Eliana Mekonnen",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The CCTV installation was fast, clean, and super professional. I feel so much safer at home now. Their techs really know their stuff!",
    },
    {
      id: 2,
      name: "Samuel Tesfaye",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "I got an inverter and battery backup set up through them. No more power outage headaches! They gave me options that matched my budget perfectly.",
    },
    {
      id: 3,
      name: "Hanna Getachew",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      text: "We upgraded our school’s PA system with their help and the results are amazing. Crystal clear sound in every block. Totally worth it!",
    },
    {
      id: 4,
      name: "Dereje Abebe",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "I’ve worked with a lot of service providers, but their team is on another level. Courteous, punctual, and the system works flawlessly.",
    },
    {
      id: 5,
      name: "Lidya Tadesse",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      text: "From consultation to installation, it was smooth sailing. Their fire alarm system gave us the peace of mind we were looking for.",
    },
    {
      id: 6,
      name: "Nahom Alemu",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "We installed biometric attendance for our small company. It streamlined everything. Now payroll is accurate and on time. Highly recommend!",
    },
  ];
  
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00A651]">
        What Our Satisfied Clients Are Saying
        </h2>
        <p className="text-gray-600">
        Real feedback from clients who trust our solutions for security, reliability, and innovation.
        </p>
        </div>
        <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <div 
               
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <div 
                
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <img
                   
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div 
                  
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <span 
                      key={starIndex} 
                      
                      className="text-[#00C853]"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h3 
                  
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </h3>
                <p 
                  
                  className="text-gray-600"
                >
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div 
         
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#00C853] hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#00C853] hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </div>



        </div>


    </section>
  )
}

export default TestimonialSection