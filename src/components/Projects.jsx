import React from 'react';

const projects = [
  {
    title: "Personal Scheduling & Booking System",
    description: "A high-performance web application engineered to streamline personal appointments. Built with Next.js, strict TypeScript type-safety, and integrated with Cloud Firestore for real-time persistence.",
    link: "https://ribka.dev/booking" // 👈 Pakai link absolut domain utamamu langsung!
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
    <section id="projects" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-emerald-400">{project.title}</h3>
                <p className="text-neutral-400 mb-6">{project.description}</p>
              </div>

              {/* 🛠️ Tombol yang menggunakan tag <a> murni agar diproses langsung oleh Netlify Redirects */}
              <div className="mt-auto">
                <a 
                  href={project.link} 
                  // Khusus untuk project booking, dibuka di tab yang sama agar URL-nya berubah anggun
                  target={project.link.includes('booking') ? "_self" : "_blank"} 
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-neutral-900 font-bold py-2 px-4 rounded transition-colors duration-300"
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