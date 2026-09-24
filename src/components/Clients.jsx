import "./Clients.css";

const clients = [
  {
    name: "L&T",
    logo: "/L&T.png",
  },
  {
    name: "SKH Metals",
    logo: "/SKH.png",
  },
  {
    name: "Hettich",
    logo: "Hettich.png",
  },
  {
    name: "Gabriel",
    logo: "Gabriel.png",
  },
  {
    name: "Cremica",
    logo: "Cremica.png",
  },
  {
    name: "Vijaynagar",
    logo: "vijayneha.png",
  },
  {
    name: "Foamatomatic",
    logo: "Foamatometic.png",
  },
  {
    name: "Nagata",
    logo: "Nagata.png",
  },
];

function Clients() {
  return (
    <section className="clients-section">

      <div className="clients-container">

        <div className="clients-heading">
          <span>OUR CLIENTS</span>

          <h2>
            Trusted by <strong>Industry Leaders</strong>
          </h2>

          <p>
            We work with businesses across industries to build
            smarter, connected and efficient manufacturing solutions.
          </p>
        </div>

        <div className="clients-slider">

          <div className="clients-track">

            {[...clients, ...clients].map((client, index) => (
              <div className="client-logo" key={index}>
                <img
                  src={client.logo}
                  alt={client.name}
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Clients;