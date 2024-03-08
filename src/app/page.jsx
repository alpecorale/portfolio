"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
    <div className=" overflow-y-scroll h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="Hero Png" fill className="object-contain h-full" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:w-1/2 flex flex-col gap-8">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold mt-12 mb-1">
          Developer, Scientist, Creator
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          My name is Aidan and I created this website to show off my work and hobbies.
          My goal is to work on projects that are interesting to me while sharing and
          documenting some of the procedure behind the work. Right now projects will focus
          on software and web development, but may expand to creating art, journalism, video
          production or building stuff in the future. This site will update as I learn more,
          so keep checking back and see how my journey is going!
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4 mt-auto mb-4">
          <a href="/portfolio">
            <button  className="p-4 mb-4 rounded-lg ring-1 ring-black bg-black text-white ">View My Work</button>
          </a>
          <a href="/contact">
            <button className="p-4 mb-4 rounded-lg ring-1 ring-black">Contact Me</button>
          </a>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
