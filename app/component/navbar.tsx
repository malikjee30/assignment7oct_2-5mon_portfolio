import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={require("../../public/pictures/logo for portfolio 1.png")}
              alt={"GIAIC"}
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl font-bold">I M Ghulam Nasir</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-red-500 font-bold font-serif">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-red-500 font-bold font-serif">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-red-500 font-bold font-serif">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-red-500 font-bold font-serif">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-red-500 font-bold font-serif">
              Contact
            </Link>
          </nav>
          <a href="/CV/cv.txt">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <FaCloudDownloadAlt className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
