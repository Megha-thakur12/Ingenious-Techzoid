import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Solutions.css";

function Solutions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="solutions-page">

      <section
        className={`solutions-hero ${show ? "show" : ""}`}
      >
        <div className="solutions-container">

          <span className="section-label">
            OUR SOLUTIONS
          </span>

          <h1>
            Intelligent Solutions for
            <span> Modern Manufacturing</span>
          </h1>

          <p>
            Digital technologies designed to improve productivity,
            quality, efficiency and visibility across your factory.
          </p>

        </div>
      </section>

      <section
        className={`solutions-content ${show ? "show" : ""}`}
      >
        <div className="solutions-container">

          <div className="solutions-grid">

            <Link
              to="/solutions/iiot"
              className="solution-card"
            >
              <span className="solution-icon">⌁</span>

              <small>01</small>

              <h2>IIoT & Machine Monitoring</h2>

              <p>
                Monitor machines and production data in real time
                with intelligent dashboards.
              </p>

              <span className="solution-arrow">→</span>
            </Link>

            <Link
              to="/solutions/ai-vision"
              className="solution-card"
            >
              <span className="solution-icon">◈</span>

              <small>02</small>

              <h2>AI Vision Inspection</h2>

              <p>
                Detect product defects using intelligent
                AI-powered visual inspection.
              </p>

              <span className="solution-arrow">→</span>
            </Link>

            <Link
              to="/solutions/predictive-maintenance"
              className="solution-card"
            >
              <span className="solution-icon">⚙</span>

              <small>03</small>

              <h2>Predictive Maintenance</h2>

              <p>
                Monitor machine health and identify potential
                failures before downtime occurs.
              </p>

              <span className="solution-arrow">→</span>
            </Link>

            <Link
              to="/solutions/production"
              className="solution-card"
            >
              <span className="solution-icon">▣</span>

              <small>04</small>

              <h2>Production Management</h2>

              <p>
                Track production, OEE, downtime and performance
                from one platform.
              </p>

              <span className="solution-arrow">→</span>
            </Link>

            <Link
              to="/solutions/energy"
              className="solution-card"
            >
              <span className="solution-icon">⚡</span>

              <small>05</small>

              <h2>Energy Management</h2>

              <p>
                Monitor energy consumption and identify
                optimization opportunities.
              </p>

              <span className="solution-arrow">→</span>
            </Link>

            <Link
              to="/solutions/traceability"
              className="solution-card"
            >
              <span className="solution-icon">◉</span>

              <small>06</small>

              <h2>Traceability</h2>

              <p>
                Track products, processes and production
                history across your factory.
              </p>

              <span className="solution-arrow">→</span>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Solutions;