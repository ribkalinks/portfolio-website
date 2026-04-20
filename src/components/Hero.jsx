import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* TEXT SECTION */}
        <div className="hero-text">

          <h1>Ribka Ariyanti</h1>

          <h2>Junior Web Developer</h2>

          <p>
            I am a passionate Junior Web Developer focused on building responsive
            and user-friendly websites. Currently learning React and modern web
            development to create clean and professional web experiences.
          </p>

          <div className="hero-buttons">

            <a
              href="https://github.com/ribkalinks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">GitHub</button>
            </a>

            <a
              href="https://www.linkedin.com/in/ribka-ariyanti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-secondary">LinkedIn</button>
            </a>

          </div>

        </div>

        {/* IMAGE SECTION */}
        <div className="hero-image">
          <img src={profile} alt="Ribka Ariyanti" />
        </div>

      </div>

    </section>
  );
}

export default Hero;