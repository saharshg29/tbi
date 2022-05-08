import "./index.css";

const Timeline = () => {
  return (
    <>
<div className="timeline">
    <h1 className="heading">Programs</h1>
    <div className="left">this is left</div>
    <div className="right">this is right</div>
</div>

      <section id="timeline">
        <h1>
          <strong>Programs</strong>
        </h1>
        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1">
            <div data-aos="flip-up">
              <div className="head">
                <div className="number-box">
                  <span>01</span>
                </div>
                <h2>
                  <span style={{ fontSize: "large" }}>DST Nidhi CoE</span>
                </h2>
              </div>
              <div className="body">
                <p>
                  National Initiative for Developing and Harnessing Innovations
                  (NIDHI) is an umbrella programme conceived and developed for
                  nurturing ideas and innovations into successful startups.
                  <br />
                  <a
                    href="nidhicoe.php"
                    style={{ float: "right", color: "#303179" }}
                  >
                    Read more...
                  </a>
                </p>
                <img src="images/nidhicoe.jpeg" alt="Nidhi CoE" />
              </div>
            </div>
          </div>

          <div className="demo-card demo-card--step2">
            <div data-aos="flip-down">
              <div className="head">
                <div className="number-box">
                  <span>02</span>
                </div>
                <h2>
                  <span style={{ fontSize: "large" }}>
                    DST seed support system
                  </span>
                </h2>
              </div>
              <div className="body">
                <p>
                  A Seed Fund Support Scheme has been Started by Vel Tech TBI
                  with the support from TDB, NSTEDB, Department of Science and
                  Technology, Government of India.
                  <br />
                  <a
                    href="sss.php"
                    style={{ float: "right", color: "#303179" }}
                  >
                    Read more...
                  </a>
                </p>
                <img src="images/seed.jpeg" alt="Seed Support System" />
              </div>
            </div>
          </div>
          <div className="demo-card demo-card--step3">
            <div data-aos="flip-up">
              <div className="head">
                <div className="number-box">
                  <span>03</span>
                </div>
                <h2>
                  <span style={{ fontSize: "large" }}>dst Nidhi prayas</span>
                </h2>
              </div>
              <div className="body">
                <p>
                  The scheme suggest is to help – young and aspiring innovators.
                  The focus is to provide support/funding from idea to
                  prototype.The maximum support can be provided per innovator/
                  incubatee is upto Rs. 10 lakhs.
                  <br />
                  <a
                    href="nidhiprayas.php"
                    style={{ float: "right", color: "#303179" }}
                  >
                    Read more...
                  </a>
                </p>
                <img src="images/prayas.jpeg" alt="Nidhi Prayas" />
              </div>
            </div>
          </div>
          <div className="demo-card demo-card--step4">
            <div data-aos="flip-down">
              <div className="head">
                <div className="number-box">
                  <span>04</span>
                </div>
                <h2>
                  <span style={{ fontSize: "large" }}>meity tide 2.0</span>
                </h2>
              </div>
              <div className="body">
                <p>
                  To promote e-Governance for empowering citizen and enhancing
                  efficiency through digital services and ensuring a secure
                  cyber space.
                  <br />
                  <a
                    href="meity.php"
                    style={{ float: "right", color: "#303179" }}
                  >
                    Read more...
                  </a>
                </p>
                <img src="images/meity.jpeg" alt="meity tide" />
              </div>
            </div>
          </div>
          <div className="demo-card demo-card--step5">
            <div data-aos="flip-up">
              <div className="head">
                <div className="number-box">
                  <span>05</span>
                </div>
                <h2>
                  <span style={{ fontSize: "large" }}>
                    edii-tn knowledge partner
                  </span>
                </h2>
              </div>
              <div className="body">
                <p>
                  {" "}
                  The Government of Tamil Nadu has initiated the IVP, a
                  grant-in-aid scheme to encourage research and innovation among
                  MSMEs and start-ups in the manufacturing sectors.
                  <br />
                  <a
                    href="https://www.editn.in/pages/view/ivp"
                    style={{ float: "right", color: "#303179" }}
                  >
                    Read more...
                  </a>
                </p>
                <img src="images/edii.jpeg" alt="edii-tn" />
              </div>
            </div>
          </div>
          <div className="demo-card demo-card--step6">
            <div data-aos="flip-down">
              <div className="head">
                <div className="number-box">
                  <span>06</span>
                </div>
                <h2>
                  <span style={{ fontSize: "large" }}>
                    startup india seed fund scheme
                  </span>
                </h2>
              </div>
              <div className="body">
                <p>
                  The Startup India initiative of the Government of India
                  envisages building a robust Start-up ecosystem in the country
                  for nurturing innovation and providing opportunities to
                  budding entrepreneurs.
                  <br />
                  <a
                    href="sfs.php"
                    style={{ float: "right", color: "#303179" }}
                  >
                    Read more...
                  </a>
                </p>
                <img src="images/startup.jpeg" alt="startup india" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
