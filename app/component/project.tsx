import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/project/electrical world.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    THE ELECTRICAL WORLD PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Electrical accessaries and work
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    The project which have a Electrical fundamentals and about
                    Electricity and all accesseries for electronics and
                    electrical etc,
                  </p>
                  <Link target="blank"
                    href={
                      "https://electrical-world.vercel.app/?vercelToolbarCode=Ag7x7wFkEZPDGo2"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/project/dr qadeer.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    THE GREAT SCIENTIST PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Dr,Abdul Qadeer Khan
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Dr. Abdul Qadeer Khan, often regarded as the father of
                    Pakistan's nuclear program, played a pivotal role in making
                    Pakistan the first Muslim-majority country with nuclear
                    capabilities. His work was instrumental in ensuring the
                    country's defense through the development of nuclear
                    weapons,
                  </p>
                  <Link target="blank" href={"https://dr-qadeer.vercel.app/"}>
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project...
                  </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../public/project/tigers.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    HOW MANY TIGERS PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    A Test Game Project
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A very exited and knowledging game we create with HTML,CSS And JavaScript.
                  </p>
                  <Link target="blank" href={"https://how-many-tigers-project.vercel.app/"}>
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    View Project...
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
