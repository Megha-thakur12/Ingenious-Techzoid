// import { useEffect, useState } from "react";
// import "./App.css";

// const solutions = [
//   {
//     icon: "⌁",
//     title: "IIoT & Machine Monitoring",
//     text: "Real-time machine data, production monitoring and intelligent dashboards.",
//   },
//   {
//     icon: "◈",
//     title: "AI Vision Inspection",
//     text: "AI-powered visual inspection to detect defects and improve product quality.",
//   },
//   {
//     icon: "⚙",
//     title: "Predictive Maintenance",
//     text: "Monitor machine health and identify potential failures before downtime.",
//   },
//   {
//     icon: "▣",
//     title: "Production Management",
//     text: "Track production, OEE, downtime and performance from one platform.",
//   },
//   {
//     icon: "⚡",
//     title: "Energy Management",
//     text: "Monitor energy consumption and identify opportunities for optimization.",
//   },
//   {
//     icon: "◉",
//     title: "Traceability",
//     text: "Track products, processes and production history across your factory.",
//   },
// ];

// const industries = [
//   "Automotive",
//   "Manufacturing",
//   "Metal",
//   "Engineering",
//   "Pharmaceutical",
//   "Food & Beverage",
// ];

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSolution, setActiveSolution] = useState(null);
//   const [counters, setCounters] = useState({
//     projects: 0,
//     machines: 0,
//     clients: 0,
//     experience: 0,
//   });

//   useEffect(() => {
//     const target = {
//       projects: 100,
//       machines: 500,
//       clients: 50,
//       experience: 10,
//     };

//     const duration = 1600;
//     const start = Date.now();

//     const animate = () => {
//       const progress = Math.min((Date.now() - start) / duration, 1);

//       setCounters({
//         projects: Math.floor(target.projects * progress),
//         machines: Math.floor(target.machines * progress),
//         clients: Math.floor(target.clients * progress),
//         experience: Math.floor(target.experience * progress),
//       });

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });

//     setMenuOpen(false);
//   };

//   return (
//     <div className="app">

//       {/* NAVBAR */}
//       <header className="navbar">
//         <div className="nav-container">

//           <div className="logo">
//             <span className="logo-mark">IT</span>

//             <div>
//               <strong>INGENIOUS</strong>
//               <small>TECHZOID</small>
//             </div>
//           </div>

//           <nav className={menuOpen ? "nav-links open" : "nav-links"}>
//             <button onClick={() => scrollTo("home")}>Home</button>
//             <button onClick={() => scrollTo("about")}>About</button>
//             <button onClick={() => scrollTo("solutions")}>
//               Solutions
//             </button>
//             <button onClick={() => scrollTo("industries")}>
//               Industries
//             </button>
//             <button onClick={() => scrollTo("contact")}>Contact</button>
//           </nav>

//           <button
//             className="demo-btn nav-demo"
//             onClick={() => scrollTo("contact")}
//           >
//             Request Demo
//           </button>

//           <button
//             className="menu-btn"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>

//         </div>
//       </header>


//       {/* HERO */}
//       <section id="home" className="hero">

//         <div className="hero-grid"></div>

//         <div className="hero-container">

//           <div className="hero-content">

//             <div className="hero-badge">
//               <span></span>
//               INDUSTRY 4.0 SOLUTIONS
//             </div>

//             <h1>
//               Transform Your
//               <span> Factory </span>
//               With Intelligent Technology
//             </h1>

//             <p>
//               Connecting machines, people and data to create smarter,
//               more efficient and future-ready manufacturing environments.
//             </p>

//             <div className="hero-buttons">
//               <button
//                 className="primary-btn"
//                 onClick={() => scrollTo("solutions")}
//               >
//                 Explore Solutions
//                 <span>→</span>
//               </button>

//               <button
//                 className="secondary-btn"
//                 onClick={() => scrollTo("contact")}
//               >
//                 Talk to an Expert
//               </button>
//             </div>

//             <div className="hero-trust">
//               <div>
//                 <strong>100+</strong>
//                 <span>Projects</span>
//               </div>

//               <div>
//                 <strong>500+</strong>
//                 <span>Machines Connected</span>
//               </div>

//               <div>
//                 <strong>50+</strong>
//                 <span>Clients</span>
//               </div>
//             </div>

//           </div>


//           {/* INTERACTIVE FACTORY VISUAL */}
//           <div className="factory-visual">

//             <div className="orbit orbit-one"></div>
//             <div className="orbit orbit-two"></div>

//             <div className="factory-core">
//               <div className="core-icon">⚙</div>
//               <strong>SMART</strong>
//               <span>FACTORY</span>
//             </div>

//             <div className="floating-card card-one">
//               <span>⚡</span>
//               <div>
//                 <strong>Energy</strong>
//                 <small>87% Optimized</small>
//               </div>
//             </div>

//             <div className="floating-card card-two">
//               <span>📊</span>
//               <div>
//                 <strong>Production</strong>
//                 <small>94.6% OEE</small>
//               </div>
//             </div>

//             <div className="floating-card card-three">
//               <span>🔧</span>
//               <div>
//                 <strong>Machine</strong>
//                 <small>Healthy</small>
//               </div>
//             </div>

//           </div>

//         </div>
//       </section>


//       {/* STATS */}
//       <section className="stats">

//         <div className="stat">
//           <strong>{counters.projects}+</strong>
//           <span>Projects Delivered</span>
//         </div>

//         <div className="stat">
//           <strong>{counters.machines}+</strong>
//           <span>Machines Connected</span>
//         </div>

//         <div className="stat">
//           <strong>{counters.clients}+</strong>
//           <span>Happy Clients</span>
//         </div>

//         <div className="stat">
//           <strong>{counters.experience}+</strong>
//           <span>Years Experience</span>
//         </div>

//       </section>


//       {/* ABOUT */}
//       <section id="about" className="section about">

//         <div className="section-container">

//           <div className="section-label">
//             ABOUT US
//           </div>

//           <div className="about-grid">

//             <div>
//               <h2>
//                 Building the
//                 <span> Factory of Tomorrow</span>
//               </h2>
//             </div>

//             <div>
//               <p>
//                 Ingenious Techzoid provides Industrial IoT and smart
//                 manufacturing solutions that help organizations connect
//                 their machines, collect meaningful data and make
//                 better operational decisions.
//               </p>

//               <p>
//                 From machine monitoring and production management to
//                 AI vision inspection and predictive maintenance,
//                 our solutions help manufacturers move toward
//                 Industry 4.0.
//               </p>

//               <button
//                 className="text-btn"
//                 onClick={() => scrollTo("solutions")}
//               >
//                 Discover our solutions →
//               </button>
//             </div>

//           </div>

//         </div>

//       </section>


//       {/* SOLUTIONS */}
//       <section id="solutions" className="section solutions">

//         <div className="section-container">

//           <div className="section-heading">

//             <div>
//               <div className="section-label">
//                 OUR SOLUTIONS
//               </div>

//               <h2>
//                 Intelligent Solutions for
//                 <span> Modern Manufacturing</span>
//               </h2>
//             </div>

//             <p>
//               Digital technologies designed to improve productivity,
//               quality, efficiency and visibility.
//             </p>

//           </div>


//           <div className="solutions-grid">

//             {solutions.map((solution, index) => (

//               <article
//                 className={
//                   activeSolution === index
//                     ? "solution-card active"
//                     : "solution-card"
//                 }
//                 key={solution.title}
//                 onClick={() =>
//                   setActiveSolution(
//                     activeSolution === index ? null : index
//                   )
//                 }
//               >

//                 <div className="solution-icon">
//                   {solution.icon}
//                 </div>

//                 <div className="solution-number">
//                   0{index + 1}
//                 </div>

//                 <h3>{solution.title}</h3>

//                 <p>{solution.text}</p>

//                 <span className="solution-arrow">
//                   →
//                 </span>

//               </article>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* INDUSTRIES */}
//       <section id="industries" className="section industries">

//         <div className="section-container">

//           <div className="section-label">
//             INDUSTRIES WE SERVE
//           </div>

//           <h2>
//             Technology Across
//             <span> Multiple Industries</span>
//           </h2>

//           <div className="industry-grid">

//             {industries.map((industry, index) => (

//               <div className="industry-card" key={industry}>

//                 <div className="industry-icon">
//                   {["🚗", "🏭", "🔩", "⚙️", "💊", "🥫"][index]}
//                 </div>

//                 <span>{industry}</span>

//                 <b>↗</b>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* CTA */}
//       <section id="contact" className="cta-section">

//         <div className="cta-container">

//           <div>
//             <div className="section-label">
//               LET'S BUILD TOGETHER
//             </div>

//             <h2>
//               Ready to Make Your
//               <span> Factory Smarter?</span>
//             </h2>

//             <p>
//               Talk to our team about your manufacturing challenges
//               and discover how IIoT can transform your operations.
//             </p>
//           </div>

//           <div className="cta-actions">

//             <button
//               className="primary-btn"
//               onClick={() =>
//                 window.location.href =
//                   "mailto:admin@ingenioustechz.in"
//               }
//             >
//               Get in Touch →
//             </button>

//             <button
//               className="secondary-btn light"
//               onClick={() =>
//                 window.location.href = "tel:+919999999999"
//               }
//             >
//               Call Us
//             </button>

//           </div>

//         </div>

//       </section>


//       {/* FOOTER */}
//       <footer>

//         <div className="footer-container">

//           <div className="footer-brand">

//             <div className="logo">
//               <span className="logo-mark">IT</span>

//               <div>
//                 <strong>INGENIOUS</strong>
//                 <small>TECHZOID</small>
//               </div>
//             </div>

//             <p>
//               Intelligent Industrial IoT solutions for
//               connected and future-ready factories.
//             </p>

//           </div>

//           <div className="footer-column">
//             <h4>Solutions</h4>
//             <span>Machine Monitoring</span>
//             <span>AI Vision Inspection</span>
//             <span>Predictive Maintenance</span>
//             <span>Energy Management</span>
//           </div>

//           <div className="footer-column">
//             <h4>Company</h4>
//             <span onClick={() => scrollTo("about")}>About</span>
//             <span onClick={() => scrollTo("industries")}>
//               Industries
//             </span>
//             <span onClick={() => scrollTo("contact")}>
//               Contact
//             </span>
//           </div>

//           <div className="footer-column">
//             <h4>Contact</h4>
//             <span>admin@ingenioustechz.in</span>
//             <span>Chakan, Maharashtra</span>
//           </div>

//         </div>

//         <div className="copyright">
//           © 2026 Ingenious Techzoid. All rights reserved.
//         </div>

//       </footer>

//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Industries from "./pages/Industries";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import Solutions from "./components/Solutions";
import SolutionDetails from "./pages/SolutionDetails";
import ContactPage from "./pages/ContactPage";
// function Contact() {
//   return (
//     <div className="page-placeholder">
//       <h1>Let's Talk</h1>

//       <p>Email us at:</p>

//       <a href="mailto:admin@ingenioustechz.in">
//         admin@ingenioustechz.in
//       </a>
//     </div>
//   );
// }
// import Clients from "./components/Clients";
function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
  <Route
    path="/industries"
    element={<Industries />}
  />
        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/solutions"
          element={<Solutions />}
        />

        <Route
          path="/solutions/:id"
          element={<SolutionDetails />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>
{/* <Clients /> */}
      <Footer />
    </>
  );
}

export default App;