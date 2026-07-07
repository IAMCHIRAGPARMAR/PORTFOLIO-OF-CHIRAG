import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        
        <div className="contact-header">
          <h1 className="contact-title-gradient">Let's talk data.</h1>
          <p className="contact-subtitle">
            Open to Business Analyst, Data Analyst, and Operations Analyst roles.
          </p>
        </div>

        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Chiragparmar7777@yahoo.com" data-cursor="disable">
                Chiragparmar7777@yahoo.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:6476467353" data-cursor="disable">
                647-646-7353
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2 style={{ fontSize: "1.2rem", color: "#455a64" }}>
              © 2026 Chirag Parmar <br /> Burlington, ON
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
