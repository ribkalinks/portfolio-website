import React from 'react';

const projects = [
  {
    title: "Personal Scheduling & Booking System",
    description: "A high-performance web application engineered to streamline personal appointments. Built with Next.js, strict TypeScript type-safety, and integrated with Cloud Firestore for real-time persistence.",
    link: "https://ribka.dev/booking" // 👈 Jalur aman dan sukses kita!
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
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-action">
                <a 
                  href={project.link} 
                  target={project.link.includes('booking') ? "_self" : "_blank"} 
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;