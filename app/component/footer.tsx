import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-slate-100'>
        
     <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start 
        justify-center text-gray-900">
           <Image
              src={require("../../public/pictures/logo for portfolio 1.png")}
              alt={"GIAIC"}
              width={100}
              height={100}
              className="w-[50px]"
            />
          <span className="ml-3 text-xl">Student of GIAIC</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 GIAIC 
         
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href={"https://www.facebook.com/ghulam.nasir.14661"} 
          className="text-blue-400 text-2xl hover:text-[blue]">
           
          <BsFacebook />
          </Link>
          <Link href={"https://x.com/NasirGhulam4/status/908344228933013504"} 
          className="ml-3 text-2xl text-slate-600 hover:text-[black] ">
          <BsTwitterX />
          </Link>
          <Link href={"https://www.instagram.com/ghulamnasir3006"} 
          className="ml-3 text-2xl text-pink-400 hover:text-[#f62d2d]">
          <SlSocialInstagram />
          </Link>
          <Link href={"https://www.linkedin.com/in/ghulam-nasir-1478a227a/"}
           className="ml-3 text-2xl text-gray-800 hover:text-[#b50000]">
          <BsLinkedin />
          </Link>
        </span>
      </div>
    </footer>
    
    <p />
    </div>
  
  )
}


export default Footer