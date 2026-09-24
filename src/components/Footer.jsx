import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer>

      <div className="footer-container">

        <div className="footer-brand">

          <div className="logo">

            <span className="logo-mark">
              IT
            </span>

            <div>
              <strong>INGENIOUS</strong>
              <small>TECHZOID</small>
            </div>

          </div>

          <p>
            Intelligent Industrial IoT solutions for
            connected and future-ready factories.
          </p>

        </div>


        <div className="footer-column">

          <h4>Solutions</h4>

          <Link to="/solutions/machine-monitoring">
            Machine Monitoring
          </Link>

          <Link to="/solutions/ai-vision">
            AI Vision Inspection
          </Link>

          <Link to="/solutions/predictive-maintenance">
            Predictive Maintenance
          </Link>

          <Link to="/solutions/energy-management">
            Energy Management
          </Link>

        </div>


        <div className="footer-column">

          <h4>Company</h4>

          <Link to="/about">
            About
          </Link>

          <Link to="/solutions">
            Solutions
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        <div className="footer-column">

          <h4>Contact</h4>

          <span>
            admin@ingenioustechz.in
          </span>

          <span>
            Chakan, Maharashtra
          </span>

        </div>

      </div>


      <div className="copyright">
        © 2026 Ingenious Techzoid. All rights reserved.
      </div>

    </footer>

  );
}

export default Footer;