import I2 from "../../img/I2.jpeg";
import { Link } from "react-router-dom";
const R1 = () => {
  return (
    <>
      <div class="card" style={{ width: "25rem", height: "60vh" }}>
        <img src={I2} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">DST SEED SUPPORT SYSTEM</h5>
          <p class="card-text">
            A Seed Fund Support Scheme has been Started by Vel Tech TBI with the
            support from TDB, NSTEDB, Department of Science & Technology,
            Government of India.
          </p>
          <Link to="/" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
};
export default R1;
