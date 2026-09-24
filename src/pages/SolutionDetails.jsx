import { Link, useParams } from "react-router-dom";
import { solutions } from "../data/solutions";
import "./SolutionDetails.css"
function SolutionDetails() {

  const { id } = useParams();

  const solution = solutions.find(
    (item) => item.id === id
  );

  if (!solution) {

    return (

      <div className="not-found">

        <h1>Solution Not Found</h1>

        <Link to="/solutions">
          ← Back to Solutions
        </Link>

      </div>

    );

  }


  return (

    <main>

      <section className="detail-hero">

        <div className="detail-icon">
          {solution.icon}
        </div>

        <div>

          <div className="section-label">
            INDUSTRIAL IoT SOLUTION
          </div>

          <h1>
            {solution.title}
          </h1>

          <p>
            {solution.description}
          </p>

        </div>

      </section>


      <section className="section">

        <div className="section-container">

          <div className="feature-heading">

            <div className="section-label">
              KEY FEATURES
            </div>

            <h2>
              Everything You Need
              <span> In One Platform</span>
            </h2>

          </div>


          <div className="feature-grid">

            {solution.features.map(
              (feature, index) => (

                <div
                  className="feature-card"
                  key={feature}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <h3>
                    {feature}
                  </h3>

                  <p>
                    Intelligent digital tools to
                    improve your manufacturing
                    operations.
                  </p>

                </div>

              )
            )}

          </div>


          <div className="detail-cta">

            <div>

              <h2>
                Interested in this solution?
              </h2>

              <p>
                Talk to our team about your
                requirements.
              </p>

            </div>

            <Link
              to="/contact"
              className="primary-btn"
            >
              Request Demo →
            </Link>

          </div>

        </div>

      </section>

    </main>

  );
}

export default SolutionDetails;