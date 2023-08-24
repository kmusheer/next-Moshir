'use client'
import React, { useState, useEffect } from 'react';

import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = ()=>{
    if(window.scrollY > 0){
      setIsScrolled(true)
    }else{
      setIsScrolled(false)
    }
  }

  useEffect(()=>{

    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  return <header className={`absolute md:fixed z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ${isScrolled ? 'scrolled' : ''}`}>
  {/* // <header className=" fixed z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]"> */}
     <div className="container mx-auto">
      <div className=" flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        <Link href={'/'}>
          {/* <Image src={"/images/logo.svg"} width={220} height={48} alt=" Msk log" priority= {true} className="" /> */}
          <div width={220} height={48} alt=" Msk log" className=" sm:inline-block"><span className=" font-bold text-2xl">Moshir</span> <span className=" font-normal text-lg">Khan</span></div>
        </Link>
        <Socials />
      </div>
     </div>
  </header>;
};

export default Header;
