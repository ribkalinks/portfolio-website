import profile from "../assets/profile.png";

function Hero() {
return (

<section className="hero" id="home">

<div className="hero-container">

<div className="hero-text">

<h1>Ribka Ariyanti</h1>

<h2>Junior Web Developer</h2>

<p>
I am a passionate Junior Web Developer focused on building responsive 
and user-friendly websites. Currently learning React and modern web 
development to create clean and professional web experiences.
</p>

<div className="hero-buttons">
<button>GitHub</button>
<button>LinkedIn</button>
</div>

</div>

<div className="hero-image">
<img src={profile} alt="Ribka Ariyanti" />
</div>

</div>

</section>

)
}

export default Hero