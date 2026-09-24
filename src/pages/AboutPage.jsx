import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">ABOUT INGENIOUS TECHZOID</span>

          <h1>
            Engineering a
            <span> Smarter Industrial Future</span>
          </h1>

          <p>
            We build Industrial IoT and smart manufacturing solutions
            that connect machines, data and people to create smarter
            and more efficient industrial operations.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <div className="about-container about-grid">

          <div className="about-heading">
            <span className="about-label">WHO WE ARE</span>

            <h2>
              Technology that
              <span> works for industry.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              Ingenious Techzoid focuses on Industrial IoT, automation,
              data visualization and smart manufacturing technologies.
            </p>

            <p>
              Our goal is to help industries connect their machines,
              monitor operations in real time and turn industrial data
              into useful business insights.
            </p>

            <p>
              From machine monitoring and production visibility to
              predictive maintenance and energy management, we create
              solutions designed around real manufacturing requirements.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="about-container">

          <div className="about-label">OUR PURPOSE</div>

          <div className="mission-grid">

            <div className="mission-card">
              <div className="mission-icon">◈</div>

              <h3>Our Mission</h3>

              <p>
                To simplify industrial technology and help manufacturers
                make better decisions through connected machines,
                real-time data and intelligent digital solutions.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">◎</div>

              <h3>Our Vision</h3>

              <p>
                To contribute towards a future where factories are
                connected, intelligent, efficient and continuously
                improving through technology.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section capabilities">
        <div className="about-container">

          <div className="about-label">WHAT WE DO</div>

          <h2>
            From Industrial Data to
            <span> Actionable Intelligence</span>
          </h2>

          <div className="capability-grid">

            <div className="capability-card">
              <span>01</span>
              <h3>Connect</h3>
              <p>
                Connect machines, sensors and industrial equipment
                to collect meaningful operational data.
              </p>
            </div>

            <div className="capability-card">
              <span>02</span>
              <h3>Monitor</h3>
              <p>
                Visualize production, machine health, quality,
                energy and performance in real time.
              </p>
            </div>

            <div className="capability-card">
              <span>03</span>
              <h3>Analyze</h3>
              <p>
                Convert collected industrial data into useful
                insights for better decision making.
              </p>
            </div>

            <div className="capability-card">
              <span>04</span>
              <h3>Improve</h3>
              <p>
                Identify inefficiencies and continuously improve
                productivity, quality and operational performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <span className="about-label">LET'S CONNECT</span>

          <h2>
            Ready to Build a
            <span> Smarter Factory?</span>
          </h2>

          <p>
            Let's discuss your industrial challenges and explore
            the right digital solution for your business.
          </p>

          <a href="mailto:admin@ingenioustechz.in">
            Talk to Our Team →
          </a>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;