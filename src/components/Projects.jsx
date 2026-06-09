import React from 'react';

const projects = [
  {
    title: "Personal Scheduling & Booking System",
    description: "A high-performance web application engineered to streamline personal appointments. Built with Next.js, strict TypeScript type-safety, and integrated with Cloud Firestore for real-time persistence.",
    link: "https://ribka.dev/booking"
  },
  {
    title: "Indosight Official Corporate Website",
    description: "Developed the official corporate website for Indosight using React.js and Vite. Focused on delivering a highly responsive user experience, modern layout, and clean modular component architecture.",
    link: "https://indosight.co"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React",
    link: "https://ribka.dev/"
  },
  {
    title: "Landing Page",
    description: "Responsive landing page design",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target={project.link.includes('booking') ? "_self" : "_blank"} 
              rel="noopener noreferrer"
              className="view-project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;