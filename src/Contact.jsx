import './Contact.css'


export default function Contact() {
function handleFormSubmit(event) {
    event.preventDefault();
    // Get form data and perform actions (e.g., sending the data to a server)
  }

    return (
        <>
        <h3>Contact</h3>
        <div className="formcontainer">
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}