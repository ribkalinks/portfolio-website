import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
return (

<footer className="footer">

<h3>Ribka Ariyanti</h3>
<p>Junior Web Developer</p>

<div className="footer-social">

<a href="mailto:hello@ribka.dev">
<FaEnvelope /> Email
</a>

<a href="https://github.com/" target="_blank">
<FaGithub /> GitHub
</a>

<a href="https://linkedin.com/" target="_blank">
<FaLinkedin /> LinkedIn
</a>

</div>

<div className="footer-bottom">
© 2026 Ribka Ariyanti. All rights reserved.
</div>

</footer>

)
}

export default Footer