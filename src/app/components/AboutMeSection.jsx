"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutMeSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white text-center mt-4 mb-8 md:mb-12">
          About Me
        </h2>
        <p className="text-base lg:text-lg text-center mx-auto max-w-2xl">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Node.js, Express, MySQL, HTML, CSS, and Git. I
          am a quick learner and I am always looking to expand my knowledge and
          skill set. I am a team player and I am excited to work with others to
          create amazing applications.I am eager to learn new technologies.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
