function Projects() {

const projects = [
{
title: "Portfolio Website",
description: "Personal portfolio built using React",
link: "#"
},

{
title: "Landing Page",
description: "Responsive landing page design",
link: "#"
}

]

return (

<section className="projects" id="projects">

<h2>My Projects</h2>

<div className="projects-container">

{projects.map((project, index) => (

<div className="project-card" key={index}>

<h3>{project.title}</h3>

<p>{project.description}</p>

<a href={project.link} className="project-btn">
View Project
</a>

</div>

))}

</div>

</section>

)
}

export default Projects