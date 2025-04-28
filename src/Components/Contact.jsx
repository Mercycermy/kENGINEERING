import React from 'react';

function Contact() {
  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.25579599635!2d38.613335424304594!3d8.96314037112025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1745298086890!5m2!1sen!2set"
            width="100%" 
            height="100%" 
            className="absolute inset-0" 
            frameBorder="0" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Addis Ababa, Ethiopia</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:Kengineers24@gmail.com" className="text-indigo-500 leading-relaxed">Kengineers24@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+251 945 662 432</p>
              <p className="leading-relaxed">+251 657 987 98</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font mt-8">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">We value your feedback and strive to improve every day!</p>
          
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col">
            {/* Required Web3Form Access Key */}
            <input type="hidden" name="access_key" value="YOUR_WEB3FORM_ACCESS_KEY_HERE" />

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 border-0 py-2 px-4 focus:outline-none rounded-full text-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact;
