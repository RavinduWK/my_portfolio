"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: "Next.js ",
    image: "images/projects/my_portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Postoffice Management Information System",
    description: "Project 2 description",
    image: "images/projects/postoffice-mockup.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Word Wind",
    description: "Blog Application",
    image: "images/projects/word_wind.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RavinduWK/MERN-blog-app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Email Client",
    description: "Object Oriented Programming Project - Java",
    image: "images/projects/email-client.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RavinduWK/email_client",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Awurudu App",
    description: "Cultures and Traditions associated with New Year Festival",
    image: "images/projects/awurudu-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/RavinduWK/flutter_awurudu_app",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Note Scribe",
    description: "A simple to do app",
    image: "images/projects/to-do-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/RavinduWK/ToDoApp-flutter",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "iFiX",
    description: "A service platform with mSpace APIs",
    image: "images/projects/iFiX.png",
    tag: ["All", "UI/UX"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Cosmic Ways",
    description: "A space ship booking platform - React Native",
    image: "images/projects/cosmic-ways.png",
    tag: ["All", "UI/UX"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
