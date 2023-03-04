import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89889fb",
        "template_2icf50i",
        e.target,
        "5VmGb4b7JewjV6yOC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">
            Let's connect{" "}
            <img
              src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
              width="28px"
              alt="hi"
            ></img>
          </h3>
          <p className="contact__details">Always happy to hear from you!</p>
        </div>

        <form action="" className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                name="name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                name="email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              name="subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              name="message"
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
