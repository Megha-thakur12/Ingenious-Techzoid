import { useEffect, useState } from "react";
import "./DashboardPreview.css";
function DashboardPreview() {

  const [oee, setOee] = useState(0);
  const [production, setProduction] = useState(0);

  useEffect(() => {

    const oeeTimer = setInterval(() => {

      setOee((value) => {

        if (value >= 94) {
          clearInterval(oeeTimer);
          return 94;
        }

        return value + 1;
      });

    }, 20);


    const productionTimer = setInterval(() => {

      setProduction((value) => {

        if (value >= 86) {
          clearInterval(productionTimer);
          return 86;
        }

        return value + 1;
      });

    }, 25);


    return () => {
      clearInterval(oeeTimer);
      clearInterval(productionTimer);
    };

  }, []);


  return (

    <div className="dashboard-preview">

      <div className="dashboard-header">

        <div>
          <small>LIVE MONITORIG</small>
          <h3>Factory Dashboard</h3>
        </div>

        <span className="live-dot">
          ● LIVE
        </span>

      </div>


      <div className="dashboard-chart">

        <div className="chart-label">
          Production Performance
        </div>

        <div className="bars">

          {[45, 65, 52, 78, 61, 86, 72, 91, 76, 94].map(
            (height, index) => (

              <div
                className="bar"
                key={index}
                style={{
                  height: `${height}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
              />

            )
          )}

        </div>

      </div>


      <div className="dashboard-bottom">

        <div className="metric">

          <span>OEE</span>

          <strong>
            {oee}%
          </strong>

          <small>
            ↑ 4.2%
          </small>

        </div>


        <div className="metric">

          <span>Production</span>

          <strong>
            {production}%
          </strong>

          <small>
            ↑ 8.7%
          </small>

        </div>


        <div className="machine-status">

          <span className="status-circle"></span>

          <div>
            <strong>
              Machines
            </strong>

            <small>
              24 Running
            </small>
          </div>

        </div>

      </div>

    </div>

  );
}

export default DashboardPreview;