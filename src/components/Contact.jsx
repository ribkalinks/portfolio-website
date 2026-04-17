function Contact() {
return (

<section className="contact" id="contact">

<h2>Let's Connect</h2>

<div className="contact-container">

<form className="contact-form">

<input 
type="text" 
placeholder="Your Name" 
required
/>

<input 
type="email" 
placeholder="Your Email" 
required
/>

<textarea 
placeholder="Your Message"
required
></textarea>

<button type="submit">
Send Message
</button>

</form>

</div>

</section>

)
}

export default Contact