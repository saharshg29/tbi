import "./index.css";

import R1 from "./Right/R1";
import R2 from "./Right/R2";
import R3 from "./Right/R3";

import L1 from "./Left/L1";
import L2 from "./Left/L2";
import L3 from "./Left/L3";

const Timeline = () => {
  return (
    <>
      <div className="mw-100 bg bg-primary mb-3 d-flex justify-content-center">
        <h1 className="p-3 text-light ">Programs</h1>
      </div>
      <div className="container h-100 bg bg-primary">

        {/* ROW 1 */}
        <div className="row" style={{ height: "100vh" }}>
          <div
            style={{ height: "50vh", marginTop: "20vh" }}
            className="col d-flex justify-content-end pl-5"
          >
            <L1></L1>
          </div>
          <div className="col d-flex justify-content-left"></div>
        </div>

        {/* ROW 2 */}
        <div className="row" style={{ height: "100vh" }}>
          <div className="col d-flex justify-content-end pl-5"></div>
          <div
            className="col d-flex justify-content-left"
            style={{ height: "50vh" }}
          >
            <R1></R1>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row" style={{ height: "100vh" }}>
          <div
            style={{ height: "50vh" }}
            className="col d-flex justify-content-end pl-5"
          >
            <L2></L2>
          </div>
          <div className="col d-flex justify-content-left"></div>
        </div>

        {/* ROW 4 */}
        <div className="row" style={{ height: "100vh" }}>
          <div className="col d-flex justify-content-end pl-5"></div>
          <div
            className="col d-flex justify-content-left"
            style={{ height: "50vh" }}
          >
            <R2></R2>
          </div>
        </div>

        {/* ROW 5 */}
        <div className="row" style={{ height: "100vh" }}>
          <div
            style={{ height: "50vh" }}
            className="col d-flex justify-content-end pl-5"
          >
            <L3></L3>
          </div>
          <div className="col d-flex justify-content-left"></div>
        </div>

        {/* ROW 6 */}
        <div className="row" style={{ height: "100vh" }}>
          <div className="col d-flex justify-content-end pl-5"></div>
          <div
            style={{ height: "50vh" }}
            className="col d-flex justify-content-left"
          >
            <R3></R3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
