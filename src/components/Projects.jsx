import React from 'react';

const projects = [
  {
    title: "Finance Web App",
    description: "A comprehensive financial management platform designed to track income, expenses, and budget allocation. Engineered with React.js for a responsive interface and integrated with robust state management to handle complex financial calculations securely.",
    link: "https://finance-web-app-sable.vercel.app/"
  },
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
            
            <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
              <a 
                href={project.link} 
                // Menggunakan _self hanya untuk booking, sisanya _blank
                target={project.link.includes('booking') ? "_self" : "_blank"} 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#10b981',
                  color: '#171717',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                  fontSize: '14px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;