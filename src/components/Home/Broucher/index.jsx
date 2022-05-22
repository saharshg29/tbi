import "./broucher.css";
import I1 from "./img/I1.jpg";
import I2 from "./img/I2.png";
import I3 from "./img/I3.jpeg";

import { Link } from "react-router-dom";

const Broucher = () => {
  return (
    <>
      <div className="broucher pb-3">
        <span className="d-flex justify-content-center mt-2 bg bg-warning text-light">
          <h1>BROUCHERS</h1>
        </span>
        <div className="container">
          <div className="row pt-2 pb-2">
            <div className="broucher col">
              <Link to={"/"}>
                <img style={{ width: "25vw" }} src={I1} alt="" />
              </Link>
            </div>
            <div className="broucher col">
              <Link to={"/"}>
                <img style={{ width: "25vw" }} src={I2} alt="" />
              </Link>
            </div>
            <div className="broucher col">
              <Link to={"/"}>
                <img style={{ width: "25vw" }} src={I3} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row container">
          <div className="col-8">
            <section>
              {/* COLLAPSE BUTTON */}

              <span
                className="mt-3 btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                Link with href
              </span>
              <div class="collapse" id="collapseExample1">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
                </div>
              </div>
              <br />
              {/* COLLAPSE BUTTON */}

              <span
                className="mt-3 btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Link with href
              </span>
              <div class="collapse" id="collapseExample2">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
                </div>
              </div>
              <br />
              {/* COLLAPSE BUTTON */}

              <span
                className="mt-3 btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample3"
              >
                Link with href
              </span>
              <div class="collapse" id="collapseExample3">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
                </div>
              </div>
            </section>
          </div>
          <div className="col-4">
            <span
              className="d-flex justify-content-center border border-dark text-light p-3"
              style={{ fontWeight: "bolder", backgroundColor: "blueviolet" }}
            >
              Recent Updates
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Broucher;
