"use client"

import { use, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"



const Header = () => {

  const[active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100); // Detecta scroll > 100 vh -> active = true
    }

    window.addEventListener('scroll', handleScroll);  // listener para evento scroll

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpieza del evento
    }
  },[]);

  return (
    <header className={`fixed w-full z-50 ${active ? 'bg-[#030315] py-6' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* logo */}
        <Link href={'#'} className="relative flex w-[226px] h-[37.64px] transition-all xl:mb-0">
          <Image 
            src={'/assets/header/logo.svg'} 
            fill 
            className="object-contain"
          />
        </Link>
        {/* nav */}
        <nav>
          nav
        </nav>
        {/* nav mobile */}
        <nav>
          nav mobile
        </nav>
        {/* menu btn */}
        <div>
          menu btn
        </div>
        {/* socials */}
        <div>
          socials icons
        </div>
      </div>
    </header>
  )
}

export default Header