import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { solutions } from "../data/solutions";
import DashboardPreview from "../components/DashboardPreview";
import Clients from "../components/Clients";
import "./Home.css";

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className={`heroS ${show ? "show" : ""}`}>

        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        {/* TECH DECORATIONS */}

        <div className="tech-node node-1"></div>
        <div className="tech-node node-2"></div>
        <div className="tech-node node-3"></div>

        <div className="tech-line tech-line-1"></div>
        <div className="tech-line tech-line-2"></div>

        <div className="hero-container">

          {/* LEFT */}

          <div className="hero-content">

            <div className="hero-badge">
              <span className="badge-dot"></span>
              INDUSTRY 4.0 SOLUTIONS
            </div>

            <h1>
              Transform Your
              <span> Factory </span>
              With Intelligent Technology
            </h1>

            <p>
              Connecting machines, people and data to create
              smarter, more efficient and future-ready
              manufacturing environments.
            </p>

            <div className="hero-buttons">

              <Link
                to="/solutions"
                className="primary-btn"
              >
                <span>Explore Solutions</span>
                <strong>→</strong>
              </Link>

              <Link
                to="/contact"
                className="secondary-btn"
              >
                <span>Talk to an Expert</span>
                <strong>↗</strong>
              </Link>

            </div>

            <div className="hero-trust">

              <div className="trust-item">
                <strong>IIoT</strong>
                <span>Connected Factory</span>
              </div>

              <div className="trust-line"></div>

              <div className="trust-item">
                <strong>AI</strong>
                <span>Smart Analytics</span>
              </div>

              <div className="trust-line"></div>

              <div className="trust-item">
                <strong>OEE</strong>
                <span>Performance</span>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-dashboard">

            <div className="dashboard-orbit orbit-one"></div>
            <div className="dashboard-orbit orbit-two"></div>

            <div className="dashboard-label">
              <span></span>
              LIVE FACTORY MONITORING
            </div>

            <DashboardPreview />

            <div className="floating-status status-one">
              <span className="status-dot"></span>
              Machine Online
            </div>

            <div className="floating-status status-two">
              <span className="status-icon">⚡</span>
              Energy Optimized
            </div>

            <div className="floating-data data-one">
              <small>PRODUCTION</small>
              <strong>1,248</strong>
              <span>↑ 12.8%</span>
            </div>

          </div>

        </div>

        <div className="hero-bottom-line">
          <span>SMART MANUFACTURING</span>
          <span>REAL-TIME DATA</span>
          <span>CONNECTED MACHINES</span>
          <span>DATA-DRIVEN DECISIONS</span>
        </div>

      </section>


      {/* ==========================================
          SOLUTIONS
      ========================================== */}

      <section className="section solutions">

        <div className="section-bg-circle"></div>

        <div className="section-container">

          <div className="section-heading">

            <div className="heading-left">

              <div className="section-label">
                <span></span>
                OUR SOLUTIONS
              </div>

              <h2>
                Intelligent Solutions for
                <span> Modern Manufacturing</span>
              </h2>

              <p>
                Digital solutions designed to connect,
                monitor and optimize your manufacturing
                operations.
              </p>

            </div>

            <Link
              to="/solutions"
              className="text-btn"
            >
              View All Solutions
              <span>→</span>
            </Link>

          </div>

          <div className="solutions-grid">

            {solutions.slice(0, 6).map((solution, index) => (

              <Link
                key={solution.id}
                to={`/solutions/${solution.id}`}
                className="solution-card"
              >

                <div className="card-glow"></div>

                <div className="solution-card-top">

                  <div className="solution-icon">
                    {solution.icon}
                  </div>

                  <div className="solution-number">
                    {solution.number || `0${index + 1}`}
                  </div>

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
          WORKFLOW
      ========================================== */}

      <section className="workflow-section">

        <div className="workflow-pattern"></div>

        <div className="section-container">

          <div className="workflow-heading">

            <div className="section-label">
              <span></span>
              HOW IT WORKS
            </div>

            <h2>
              From Factory Data to
              <span> Smart Decisions</span>
            </h2>

            <p>
              A connected digital ecosystem that turns
              machine data into actionable insights.
            </p>

          </div>

          <div className="workflow">

            <div className="workflow-connector"></div>

            <div className="workflow-item">

              <div className="workflow-number">
                01
              </div>

              <div className="workflow-icon">
                <span>◉</span>
              </div>

              <h3>Connect</h3>

              <p>
                Connect machines, sensors and
                industrial systems.
              </p>

            </div>


            <div className="workflow-item">

              <div className="workflow-number">
                02
              </div>

              <div className="workflow-icon">
                <span>◇</span>
              </div>

              <h3>Collect</h3>

              <p>
                Capture real-time production
                and machine data.
              </p>

            </div>


            <div className="workflow-item">

              <div className="workflow-number">
                03
              </div>

              <div className="workflow-icon">
                <span>◎</span>
              </div>

              <h3>Analyze</h3>

              <p>
                Turn raw data into meaningful
                insights and analytics.
              </p>

            </div>


            <div className="workflow-item">

              <div className="workflow-number">
                04
              </div>

              <div className="workflow-icon">
                <span>↗</span>
              </div>

              <h3>Optimize</h3>

              <p>
                Improve productivity, quality
                and operational efficiency.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          CLIENTS
      ========================================== */}

      <Clients />


      {/* ==========================================
          CTA
      ========================================== */}

      <section className="cta-section">

        <div className="cta-grid"></div>
        <div className="cta-glow"></div>

        <div className="cta-container">

          <div className="cta-content">

            <div className="section-label">
              <span></span>
              LET'S BUILD TOGETHER
            </div>

            <h2>
              Ready to Make Your
              <span> Factory Smarter?</span>
            </h2>

            <p>
              Talk to our team about your manufacturing
              challenges and discover how IIoT can
              transform your operations.
            </p>

          </div>

          <Link
            to="/contact"
            className="cta-button"
          >
            <span>Get in Touch</span>
            <strong>→</strong>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;