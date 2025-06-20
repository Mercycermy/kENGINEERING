import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Attendance from '../assets/Attendance.jpg';
import Attendace2 from '../assets/attendance2.jpg';
import Cctv from '../assets/cctv.jpg';
import Cctv2 from '../assets/cctv2.jpg';
import ElectricFence from '../assets/electricfence.jpg';
import ElectricFence2 from '../assets/electricfence2.jpg';
import FireAlarm from '../assets/firealarm.jpg';
import FireAlarm2 from '../assets/firealarm2.jpg';
import Inverter from '../assets/inverter.jpg';
import Inverter2 from '../assets/inverter2.jpg';
import PaSystem from '../assets/pasystem.jpg';
import PaSystem2 from '../assets/pasystem2.jpg';

function ServicesSection() {
  const services = [
    {
      image: Cctv,
      image2: Cctv2,
      title: "CCTV Surveillance Systems",
      hero: "Keep an eye on what matters—24/7.",
      description:
        "We install high-resolution security cameras for homes, offices, schools, and businesses. Night vision, motion detection, mobile monitoring, and more. Brands: Hikvision, Dahua.",
      ctaText: " Get a free camera consultation today!",
      ctaAction: "Call Now",
    },
    {
      image: FireAlarm,
      image2: FireAlarm2,
      title: "Fire Alarm Systems",
      hero: "Early warning saves lives.",
      description:
        "Smoke detectors, heat sensors, full alarm systems with sirens and control panels. Ideal for homes, schools, warehouses. Integration available.",
      ctaText: " Request a fire safety check-up.",
      ctaAction: "Schedule an Inspection",
    },
    {
      image: Attendance,
      image2: Attendace2,
      title: "Time Attendance Systems",
      hero: "Track time the smart way.",
      description:
        "Biometric, facial recognition, and RFID tracking. Cloud storage and real-time HR reports for accurate automation.",
      ctaText: "Automate your attendance system today.",
      ctaAction: "Contact for a Demo",
    },
    {
      image: ElectricFence,
      image2: ElectricFence2,
      title: "Electric Fence & Alarm Systems",
      hero: "Strong perimeter. Stronger peace of mind.",
      description:
        "High-voltage fences and intrusion alarms for any property. Solar-powered options available.",
      ctaText: "Secure your boundary today.",
      ctaAction: "Request a Quote",
    },
    {
      image: Inverter,
      image2: Inverter2,
      title: "Inverter & Energy Backup Solutions",
      hero: "Power that never stops.",
      description:
        "Inverter systems, energy audits, custom backup power installs. Battery and solar options available.",
      ctaText: "Stay powered during blackouts.",
      ctaAction: "Get a Power Plan",
    },
    {
      image: PaSystem,
      image2: PaSystem2,
      title: "Public Address (PA) Systems",
      hero: "Clear sound. Seamless communication.",
      description:
        "Installations for schools, churches, offices. Wired/wireless mics, high-quality speakers, multi-zone control.",
      ctaText: "Enhance communication with professional PA setup.",
      ctaAction: "Book a Consultation",
    },
  ];
  

  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-[#00A651] mb-4">Our Services</h2>
        <p className="text-black text-lg">Helping you stay secure, smart, and connected.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white cursor-pointer rounded-3xl shadow-lg overflow-hidden transition-shadow duration-300"
            onClick={() => setSelected(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
              <p className="text-[#00A651] italic">{service.hero}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DETAIL VIEW MODAL */}
      <AnimatePresence>
  {selected && (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4 overflow-y-auto"
    >
      <div className="relative bg-white rounded-2xl max-w-3xl w-full my-8 p-6">
        <button
          className="sticky top-4 left-full transform -translate-x-4 text-black text-2xl z-10"
          onClick={() => setSelected(null)}
        >
          ✖
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <img src={selected.image} alt="Service Primary" className="rounded-lg w-full h-60 object-cover" />
          <img src={selected.image2} alt="Service Secondary" className="rounded-lg w-full h-60 object-cover" />
        </div>
        <h3 className="text-3xl font-bold text-black mb-2">{selected.title}</h3>
        <p className="text-[#00A651] italic mb-4">{selected.hero}</p>
        <p className="text-black mb-4">{selected.description}</p>
        <p className="text-[#00A651] font-semibold mb-4">{selected.ctaText}</p>
        <a
          href="tel:+251945662432"
          className="inline-block bg-[#00A651] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          {selected.ctaAction}
        </a>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}

export default ServicesSection;
