import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='full'>
     

      <div className="right">
        <section className="location">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14592480.76352364!2d70.21855867175688!3d26.75658366761605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1738679250925!5m2!1sen!2sin" width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </section>
      </div>

      <div className="left">
        <h2>Feedback</h2>
        <p className='address'>Uttar Pradesh,India(+91)</p>

        <h6>Name</h6>
        <input className='name' type='text' />

        <h6>Email</h6>
        <input className='name' type='text'  />

        <h6>Message</h6>
        <input className='message' type='text'  />


        <button className='btn'>Submit</button>

      </div>
    </div>
  )
}

export default Contact
