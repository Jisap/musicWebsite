"use client"

import { use, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
import NavMobile from "./NavMobile"
import Nav from "./Nav"
import MenuBtn from "./MenuBtn"
import Socials from "./Socials"



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
    <header className={`fixed w-full z-50 transition-all ${active ? 'bg-[#030315] py-6' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        
        {/* logo */}
        <Link href={'#'} className="relative flex w-[226px] h-[37.64px] transition-all xl:mb-0">
          <Image 
            src={'/assets/header/logo.svg'} 
            fill 
            className="object-contain"
            alt='logo'
          />
        </Link>

        {/* nav */}
        <nav>
          <Nav 
            containerStyles='hidden xl:flex items-center gap-x-8'
          />
        </nav>

        {/* nav mobile */}
        <nav>
          <NavMobile />
        </nav>

        {/* menu btn */}
        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>

        {/* socials */}
        <div>
          <Socials 
            containerStyles='flex tex-[24px] gap-x-4' 
            iconStyles='hover:text-accent transition-all'
          />
        </div>
        
      </div>
    </header>
  )
}

export default Header