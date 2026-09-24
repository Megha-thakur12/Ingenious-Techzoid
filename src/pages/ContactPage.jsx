import { useEffect, useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-page">

      <section className={`contact-hero ${show ? "show" : ""}`}>
        <div className="contact-container">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            Let's Build a
            <span> Smarter Factory</span>
          </h1>

          <p>
            Have a manufacturing challenge?
            Let's discuss how Industrial IoT and smart
            technologies can help your business.
          </p>

        </div>
      </section>


      <section className={`contact-content ${show ? "show" : ""}`}>
        <div className="contact-container">

          <div className="contact-grid">

            {/* LEFT */}
            <div className="contact-info">

              <span className="contact-label">
                CONTACT US
              </span>

              <h2>
                Let's start a
                <span> conversation.</span>
              </h2>

              <p>
                Reach out to our team to discuss your
                industrial requirements, automation
                challenges or IIoT project.
              </p>

              <div className="contact-details">

                <div className="contact-item">
                  <div className="contact-icon">✉</div>

                  <div>
                    <small>Email</small>
                    <a href="mailto:admin@ingenioustechz.in">
                      admin@ingenioustechz.in
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">⌖</div>

                  <div>
                    <small>Location</small>
                    <strong>Chakan, Maharashtra</strong>
                  </div>
                </div>

              </div>

            </div>


            {/* RIGHT */}
            <div className="contact-form">

              <h3>Tell us about your requirement</h3>

              <div className="form-row">

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Company name"
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <label>Requirement</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement..."
                ></textarea>
              </div>

              <button
                className="contact-submit"
                onClick={() =>
                  (window.location.href =
                    "mailto:admin@ingenioustechz.in")
                }
              >
                Send Enquiry →
              </button>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default ContactPage;