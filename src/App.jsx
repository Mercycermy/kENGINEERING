import './App.css'
import { useEffect, useState } from 'react'
import Backtop from './Components/Backtop'
import Contact from './Components/Contact'
import FeatureSection from './Components/FeatureSection'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import ServicesSection from './Components/ServicesSection'
import A4ImageSection from './Components/A4ImageSection'
import Preloader from './Components/Preloader'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
  <main className=' relative min-h-screen overflow-x-hidden'>
    <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/15 rounded-full blur-[80px ] -z-10 to-gray-100'>

    </div>
    <div className='overflow-hidden'>
    
    <Navbar/>
    <Hero/>
    <AboutSection/>
    <FeatureSection/>
    <ServicesSection/>
    <A4ImageSection/>
    <Contact/>
    
    <Footer/>
    <Backtop/>
    
    
    
    </div>
    
    </main>
  )
}

export default App
