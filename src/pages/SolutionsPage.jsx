
import { Link } from "react-router-dom";
import { solutions } from "../data/solutions";
import "./SolutionPage.css";

function Solutions() {
  return (
    <main className="solutions-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="solutions-hero">

        <div className="solutions-hero-content">

          <span className="solutions-label">
            OUR SOLUTIONS
          </span>

          <h1>
            Intelligent Solutions for
            <span> Modern Manufacturing</span>
          </h1>

          <p>
            We build Industrial IoT and smart manufacturing
            solutions that connect machines, data and people
            to improve industrial operations.
          </p>

        </div>

      </section>


      {/* ==========================================
          SOLUTIONS
      ========================================== */}

      <section className="solutions-section">

        <div className="solutions-container">

          <div className="solutions-heading">

            <span className="solutions-label">
              WHAT WE DO
            </span>

            <h2>
              Technology that
              <span> works for industry.</span>
            </h2>

            <p>
              Explore our digital solutions designed to help
              manufacturers monitor, analyze and optimize
              their operations.
            </p>

          </div>


          <div className="solutions-grid">

            {solutions.map((solution, index) => (

              <Link
                key={solution.id}
                to={`/solutions/${solution.id}`}
                className="solution-card"
              >

                <div className="solution-card-top">

                  <div className="solution-icon">
                    {solution.icon}
                  </div>

                  <span className="solution-number">
                    {solution.number || `0${index + 1}`}
                  </span>

                </div>


                <div className="solution-card-content">

                  <h3>
                    {solution.title}
                  </h3>

                  <p>
                    {solution.shortDescription}
                  </p>

                </div>


                <div className="solution-card-bottom">

                  <span>
                    Explore Solution
                  </span>

                  <span className="solution-arrow">
                    →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ==========================================
          CTA
      ========================================== */}

      <section className="solutions-cta">

        <div className="solutions-cta-content">

          <span className="solutions-label">
            LET'S CONNECT
          </span>

          <h2>
            Ready to Build a
            <span> Smarter Factory?</span>
          </h2>

          <p>
            Let's discuss your industrial challenges and
            explore the right digital solution for your business.
          </p>

          <Link
            to="/contact"
            className="solutions-cta-button"
          >
            Talk to Our Team
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Solutions;
