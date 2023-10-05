"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 text-[40px] lg:text-[60px]">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 text-[40px] lg:text-[60px]">
              Ravindu Wickramage
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[40px]"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl">
            I am a Computer Science and Engineering undergraduate from the
            Department of Computer Science and Engineering, University of
            Moratuwa, Sri Lanka. I am eager to learn new technologies.I am a
            full stack web developer with a passion for creating interactive and
            responsive web applications. I have experience working with
            JavaScript, React, Node.js, Express, MySQL, HTML, CSS, and Git. I am
            a quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-4 border-[#FBBF24]">
            <Image
              src="images/ravindu_image.jpeg"
              alt="Ravindu Wickramage"
              className="absolute inset-0 rounded-full"
              width={400} // Adjust the width and height as needed
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
