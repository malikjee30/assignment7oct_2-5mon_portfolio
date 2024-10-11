
"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-purple-100">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className=" object-cover object-center rounded mx-auto w-[200px]"
          alt="hero"
          width={100}
          height={100}
          src={require("../../public/pictures/portfolio 2.jpg")}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
          <Typewriter
  options={{
    strings: 
    ['a Learner', 
    'a GIAIC Student', 
    'a Strugler', 
    'a human'],
    autoStart: true,
    loop: true,
  }}
/>

          </h1>
          <div className="w-[200px] h-1 bg-blue-600 text-center justify-center"></div>
          <p className="mb-8 leading-relaxed">
            I am Ghulam Nasir I am very proud of my Governor sindh Mr Kamran
            khan Tessorie who's take an initiative for us that we are also know
            about field of IT, that's why I am in quarter 2 & I want to a
            successful person in future, I also paased the examination of IT in
            2002 at Monotechnic institute karachi,
          </p>
          <div className="flex justify-center">
            <Link href={"#contact"}>
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Contact
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
