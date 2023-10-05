"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 font-bold">
        {" "}
        {/* Bold the main lists */}
        <li>University of Moratuwa</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>B.SC Engineering (Hons) - Computer Science and Engineering</li>
        </ul>
        <li>Rahula College - Matara</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>G.C.E Advanced Level</li>
        </ul>
        <li>Sussex College - Matara</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>G.C.E Ordinary Level</li>
        </ul>
      </ul>
    ),
  },

  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2 font-bold">
        {" "}
        <li>mSpace Code Blast Hackathon</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>Selected for final round out of 70+ teams - iFiX App - 2023</li>
        </ul>
        <li>Google devfest HackerRank Competition</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>Selected for final round - 2022</li>
        </ul>
        <li>IEEEEXTREME 16.0 - 24 hours Algorithmic Coding Competition</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>World Rank - 718 | Island Rank - 52, 2022</li>
        </ul>
        <li>MoraXtreme 7.0 - 12 hours Algorithmic Coding Competition</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>Rank - 54 - 2022</li>
        </ul>
        <li>Mahopola Higher Educational Merit Scholarship</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>Merit in GCE AL - 2019</li>
        </ul>
        <li>Obtained School Colors for Academics, Sports</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>2016</li>
        </ul>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 font-bold">
        {" "}
        <li>The Web Developer Bootcamp 2023</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>Udemy</li>
        </ul>
        <li>Learn DevOps for Web Development</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>Microsoft Learn Student Ambassadors</li>
          <li>Google Developer Student Clubs</li>
          <li>DevTown</li>
        </ul>
        <li>SProblem Solving</li>
        <ul className="list-circle pl-2 text-gray-500">
          {" "}
          <li>HackerRank</li>
        </ul>
      </ul>
    ),
  },

  {
    title: "Other_Skills",
    id: "other_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Team Work</li>
        <li>Leadership</li>
        <li>Analytical Skills</li>
        <li>Badminton</li>
        <li>Swimming</li>
        <li>Photography</li>
        <li>Graphic Designing</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-12">
      <div className="flex flex-col items-center">
        {" "}
        {/* Centering main content */}
        <div className="flex flex-row justify-center mt-8 space-x-4">
          {" "}
          {/* Centering tab buttons */}
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("achievements")}
            active={tab === "achievements"}
          >
            Achievements
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certifications
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("other_skills")}
            active={tab === "other_skills"}
          >
            Other Skills
          </TabButton>
        </div>
        <div className="mt-8 w-full max-w-xl text-left">
          {" "}
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
