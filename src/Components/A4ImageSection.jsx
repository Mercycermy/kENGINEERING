import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Cert1 from '../assets/cert1.jpg';
import Cert2 from '../assets/cert2.jpg';
import Cert3 from '../assets/cert3.jpg';
import Cert4 from '../assets/cert4.jpg'; // ✅ Added 4th image

function A4ImageSection() {
  const documents = [
    { id: 1, image: Cert1 },
    { id: 2, image: Cert2 },
    { id: 3, image: Cert3 },
    { id: 4, image: Cert4 }, // ✅ Include in array
  ];

  return (
    <section id="company-testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00A651]">
          Company Testimonials & Certifications
        </h2>
        <p className="text-gray-600">
          Proof of performance and trust from the companies we've worked with.
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
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="a4-image-swiper md:mb-12"
        >
          {documents.map((doc) => (
            <SwiperSlide key={doc.id} className="py-4">
              <div className="bg-white shadow-md rounded-md overflow-hidden max-w-xs mx-auto">
                <img
                  src={doc.image}
                  alt={`Testimonial Document ${doc.id}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00C853] hover:text-white transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#00C853] hover:text-white transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default A4ImageSection;
