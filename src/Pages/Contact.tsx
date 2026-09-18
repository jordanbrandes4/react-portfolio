import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <main className="contact">
      <h1>Contact Me</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Feel free to contact me using the form if you would like to
            connect or learn more about my work.
          </p>

          <p><strong>Name:</strong> Jordan Brandes</p>
          <p><strong>Email:</strong> jordan.brandes11@gmail.com</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            required
          />

          <input
            type="tel"
            placeholder="Contact Number"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <textarea
            placeholder="Message"
            rows={6}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </main>
  )
}

export default Contact