import I1 from "./img/I1.jpg";
import I2 from "./img/I2.png";
import I3 from "./img/I3.jpeg";

import "./index.css";

const Brouchers = () => {
  return (
    <>
      <div className="broucher container">
        <h1 className="bg bg-primary text-light d-flex justify-content-center p-3 mt-2">
          BROUCHERS
        </h1>
        <div  className="row mb-2">
          <div id="imageBroucher" className="col">
            <img src={I1} alt="1"></img>
          </div>
          <div id="imageBroucher" className="col">
            <img src={I2} alt="1"></img>
          </div>
          <div id="imageBroucher" className="col">
            <img src={I3} alt="1"></img>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p>
                  <button
                    class="btn btn-primary d-flex justify-content-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample1"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample1"
                  >
                    VISION
                  </button>
                </p>
                <div style={{ minHeight: "120px" }}>
                  <div
                    class="collapse collapse-horizontal"
                    id="collapseWidthExample1"
                  >
                    <div class="card card-body" style={{ width: "300px" }}>
                      To be a World Class Incubator and Accelerator with
                      successful track record of incubating leading products,
                      solutions and services.
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <p>
                  <button
                    class="btn btn-primary d-flex justify-content-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample2"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample2"
                  >
                    MISSION
                  </button>
                </p>
                <div style={{ minHeight: "120px" }}>
                  <div
                    class="collapse collapse-horizontal"
                    id="collapseWidthExample2"
                  >
                    <div class="card card-body" style={{ width: "300px" }}>
                      To increase the successful development of new businesses,
                      job creation and innovations that rapidly scale and create
                      opportunities and value to all stakeholders across a wide
                      spectrum of sectors at global & national level in
                      alignment with Govt. & key Partners.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <p>
                  <button
                    class="btn btn-primary d-flex justify-content-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample3"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample3"
                  >
                    STRATEGIC OBJECTIVES
                  </button>
                </p>
                <div style={{ minHeight: "120px" }}>
                  <div
                    class="collapse collapse-horizontal"
                    id="collapseWidthExample3"
                  >
                    <div class="card card-body" style={{ width: "300px" }}>
                      <ul>
                        <li> Creation of Innovative technology ventures.</li>
                        <li> Commercialize technology & thought leadership.</li>
                        <li> Enable start-ups to survive and scale.</li>
                        <li> Be a key enabler in Job Creation.</li>
                        <li>
                          {" "}
                          Enable effective Industry - Academia collaboration
                          fostering entrepreneurial climate and networking
                        </li>
                        <li>
                          {" "}
                          Create and Sustain a dynamic Ecosystem for innovation
                          and entrepreneurship.
                        </li>
                        <li>
                          {" "}
                          Harness global knowledge, thought leadership and
                          entrepreneurship experience to enhance sources of
                          opportunities, product-market fit and models of
                          commercialization for incubatee startups.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <section>
              <p>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Link with href
                </a>
              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This
                  panel is hidden by default but revealed when the user
                  activates the relevant trigger.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brouchers;
