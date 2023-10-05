import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaMobile,
  FaGit,
  FaGithub,
  FaCode,
  FaCheck,
  FaPaintBrush,
  FaJava,
  FaPython,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
} from "react-icons/fa";
import {
  DiMysql,
  DiMongodb,
  DiFirebase,
  DiHtml5,
  DiCss3,
  DiJavascript1,
} from "react-icons/di";
import {
  SiReactnative,
  SiFlutter,
  SiVisualstudiocode,
  SiIntellijidea,
  SiPycharm,
  SiFigma,
  SiAdobephotoshop,
  SiGit,
  SiGithub,
} from "react-icons/si";

const techStackData = [
  {
    subheading: "Frontend",
    technologies: [
      { name: "HTML", icon: <FaHtml5 />, proficiency: "Advanced" },
      { name: "CSS", icon: <FaCss3 />, proficiency: "Intermediate" },
      { name: "JavaScript", icon: <FaJs />, proficiency: "Intermediate" },
      { name: "React", icon: <FaReact />, proficiency: "Intermediate" },
      { name: "Bootstrap", icon: <FaBootstrap />, proficiency: "Advanced" },
    ],
  },
  {
    subheading: "Backend",
    technologies: [
      { name: "Java", icon: <FaJava />, proficiency: "Intermediate" },
      { name: "Node.js", icon: <FaNode />, proficiency: "Intermediate" },
    ],
  },
  {
    subheading: "Database",
    technologies: [
      { name: "MongoDB", icon: <DiMongodb />, proficiency: "Intermediate" },
      { name: "FireBase", icon: <DiFirebase />, proficiency: "Intermediate" },
      { name: "MySQL", icon: <DiMysql />, proficiency: "Intermediate" },
    ],
  },
  {
    subheading: "Mobile App Deveopmnet",
    technologies: [
      {
        name: "React Native",
        icon: <FaReact />,
        proficiency: "Intermediate",
      },
      { name: "Flutter", icon: <SiFlutter />, proficiency: "Intermediate" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="my-10">
      <h2 className="text-4xl font-bold text-white text-center mt-4 mb-8 md:mb-12">
        Tech Stack
      </h2>
      {techStackData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="my-8 relative">
          <hr
            style={{
              backgroundColor: "#efae2f",
              opacity: 0.2,
              height: "1px",
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <h3
            className="text-xl font-semibold mb-3 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              color: "#efae2f",
              backgroundColor: "#121212",
              padding: "0 10px",
            }}
          >
            {section.subheading}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 pb-8">
            {" "}
            {section.technologies.map((tech, techIndex) => (
              <div key={techIndex} className="flex flex-col items-center">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <h4 className="text-xl font-semibold">{tech.name}</h4>
                <p className="text-gray-500">{tech.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
