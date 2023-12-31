"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ImageModal from "./Preview"; // Import the ImageModal component

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [modalOpen, setModalOpen] = useState(false); // State to manage the modal
  const [modalImage, setModalImage] = useState(""); // State to store the modal image URL
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectsData = [
    {
      id: 1,
      title: "My Portfolio Website",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      description: "Personal portfolio website",
      image: "images/projects/my_portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/RavinduWK/my_portfolio",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Postoffice Management Information System",
      technologies: ["React", "React Native", "Node.js", "Express", "Firebase"],
      description: "Software Engineering Module Project",
      image: "images/projects/postoffice-mockup.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/RavinduWK/post-office-mis-admin-dashboard",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Word Wind",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      description: "Blog Application",
      image: "images/projects/word_wind.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/RavinduWK/MERN-blog-app",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Email Client",
      technologies: ["Java"],
      description: "Object Oriented Programming Project - Java",
      image: "images/projects/email-client.jpeg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/RavinduWK/email_client",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Awurudu App",
      technologies: ["Flutter", "sqflite"],
      description: "Cultures and Traditions associated with New Year Festival",
      image: "images/projects/awurudu-app.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/RavinduWK/flutter_awurudu_app",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Task Tap",
      technologies: ["Flutter", "sqflite"],
      description: "A simple to do app for time management",
      image: "images/projects/to-do-app.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/RavinduWK/ToDoApp-flutter",
      previewUrl: "/",
    },
    {
      id: 7,
      title: "iFiX",
      technologies: ["Figma"],
      description: "A service platform with mSpace APIs",
      image: "images/projects/iFiX.png",
      tag: ["All", "UI/UX"],

      previewUrl: "/",
    },
    {
      id: 8,
      title: "Cosmic Ways",
      technologies: ["React Native", "Firebase"],
      description: "A space ship booking platform",
      image: "images/projects/cosmic-ways.png",
      tag: ["All", "UI/UX"],
      gitUrl: "https://github.com/CoderNavinda/CSEwasps_CosmicWays",
      previewUrl: "/",
    },
  ];

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

  // Function to open the modal when the Eye icon is clicked
  const openModal = (imgUrl) => {
    setModalImage(imgUrl);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects">
      <div className="relative">
        <h2 className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          {/* ...ProjectTag components */}
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
                technologies={project.technologies}
                onEyeClick={() => openModal(project.image)} // Pass the openModal function to ProjectCard
              />
            </motion.li>
          ))}
        </ul>
        {/* Render the ImageModal component if modalOpen is true */}
        {modalOpen && <ImageModal imgUrl={modalImage} onClose={closeModal} />}
      </div>
    </section>
  );
};

export default ProjectsSection;
