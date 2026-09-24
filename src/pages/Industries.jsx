import { useEffect, useState } from "react";
import "./Industries.css";

const industries = [
  {
    icon: "🚗",
    title: "Automotive",
    text: "Smart manufacturing solutions for automotive production, monitoring and quality.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    text: "Connected factory solutions for production visibility and operational efficiency.",
  },
  {
    icon: "🔩",
    title: "Metal",
    text: "Real-time monitoring and analytics for metal processing and manufacturing.",
  },
  {
    icon: "⚙️",
    title: "Engineering",
    text: "Digital solutions to improve machine performance, production and maintenance.",
  },
  {
    icon: "💊",
    title: "Pharmaceutical",
    text: "Technology-driven monitoring and traceability for pharmaceutical operations.",
  },
  {
    icon: "🥫",
    title: "Food & Beverage",
    text: "Production, quality and energy monitoring for food and beverage manufacturing.",
  },
];

function Industries() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="industries-page">

      {/* HERO */}

      <section className={`industries-hero ${show ? "show" : ""}`}>
        <div className="industries-container">

          <span className="industry-label">
            INDUSTRIES WE SERVE
          </span>

          <h1>
            Smart Technology for
            <span> Every Industry</span>
          </h1>

          <p>
            Industry-focused digital solutions designed to improve
            productivity, quality, visibility and operational efficiency.
          </p>

        </div>
      </section>


      {/* INDUSTRIES */}

      <section className={`industries-content ${show ? "show" : ""}`}>
        <div className="industries-container">

          <div className="industry-grid">

            {industries.map((industry, index) => (

              <div
                className="industry-card"
                key={industry.title}
              >

                <div className="industry-top">

                  <div className="industry-icon">
                    {industry.icon}
                  </div>

                  <span>
                    0{index + 1}
                  </span>

                </div>

                <h2>
                  {industry.title}
                </h2>

                <p>
                  {industry.text}
                </p>

                <div className="industry-arrow">
                  →
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className={`industry-cta ${show ? "show" : ""}`}>
        <div className="industries-container">

          <span className="industry-label">
            INDUSTRY 4.0
          </span>

          <h2>
            Let's Transform Your
            <span> Industry Together</span>
          </h2>

          <p>
            Explore how Industrial IoT and smart manufacturing
            technologies can improve your operations.
          </p>

          <a href="/contact">
            Talk to Our Team →
          </a>

        </div>
      </section>

    </div>
  );
}

export default Industries;