import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false)
const [active, setActive] = useState("home")

useEffect(() => {

const handleScroll = () => {

const sections = document.querySelectorAll("section")

sections.forEach(section => {
const top = window.scrollY
const offset = section.offsetTop - 150
const height = section.offsetHeight
const id = section.getAttribute("id")

if(top >= offset && top < offset + height){
setActive(id)
}

})

}

window.addEventListener("scroll", handleScroll)

return () => window.removeEventListener("scroll", handleScroll)

}, [])

return (
<nav className="navbar">

<div className="nav-logo">
<a href="#home">
<img src={logo} alt="ribka.dev" />
</a>
</div>

<div 
className="hamburger"
onClick={() => setMenuOpen(!menuOpen)}
>
☰
</div>

<ul className={`nav-links ${menuOpen ? "active" : ""}`}>

<li className={active === "home" ? "active" : ""}>
<a href="#home">Home</a>
</li>

<li className={active === "about" ? "active" : ""}>
<a href="#about">About</a>
</li>

<li className={active === "skills" ? "active" : ""}>
<a href="#skills">Skills</a>
</li>

<li className={active === "projects" ? "active" : ""}>
<a href="#projects">Projects</a>
</li>

<li className={active === "contact" ? "active" : ""}>
<a href="#contact">Contact</a>
</li>

</ul>

</nav>
)

}

export default Navbar