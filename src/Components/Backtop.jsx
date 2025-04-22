import React, { useState ,useEffect } from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function Backtop() {
    const [showButton,setShowButton]=useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // smooth scroll
        });
      };
    
      useEffect(() => {
        const handleScroll = () => {
          setShowButton(window.scrollY > 300);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <>
     {showButton && (
    <button className='fixed bottom-4 right-4 '
    onClick={scrollToTop}>
    <MdKeyboardDoubleArrowUp className='text-3xl text-blue-600 animate-bounce' />
        </button>
        )}
    </>
  )
}

export default Backtop