import { useState } from 'react'

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

function MobileNav({open, setOpen}) {
  return (
    
      <div className={`absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-90 transform z-20 ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
         
          <div className="flex flex-col justify-center items-center mt-28">
              <a className="text-2xl font-bold text-white my-4 hover:text-yellow-500" href="#about" >
              About 
              </a>
              <a className="text-2xl font-bold my-4 text-white hover:text-yellow-500" href="#Values" >
                Our values 
              </a>
              <a className="text-2xl font-bold my-4 text-white hover:text-yellow-500" href="#Projects" >
              Projects
              </a>
              <a className="text-2xl font-bold my-4 text-white hover:text-yellow-500" href="#Services" >
              Services
              </a>
               <a className="text-2xl font-bold my-4 text-white hover:text-yellow-500" href="#Contact" >
              Contact Us 
             </a>
          </div>  
      </div>
  )
}

export default function Navbar() {

  const [open, setOpen] = useState(false)
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
      <nav className="flex justify-between items-center  px-4 py-2">
          <MobileNav open={open} setOpen={setOpen}/>
          <div className="flex items-center justify-center ">
          
          <img
          src="/Le CDigital Logo-07.png"
          alt="logo"
          className="w-auto h-[40px] object-contain "
        />
        
      </div>
              <div className="group z-50 relative w-6 h-6  cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                  setOpen(!open)
              }}>
                  {/* hamburger button */}
                  <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                  <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                  <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
              </div>
         
      </nav>
      </motion.nav>
  )
}