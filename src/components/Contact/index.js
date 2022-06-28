import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_73tcxec', 'template_0v6racs', form.current ,'HdwM8AOJcvd4YNoye')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('SUCCESS!');
         }, function(error) {
            console.log('FAILED...', error);
         });
      };

  return (
<div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">Send me an email</h1>
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label htmlFor="name">Name && || Company</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name and/or company name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_body">Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}