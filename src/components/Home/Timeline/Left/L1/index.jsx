import I1 from "../../img/I1.jpeg";
import { Link } from "react-router-dom";
const L1 = () => {
  return (
    <>
      <div class="card" style={{ width: "25rem", height: "60vh" }}>
        <img src={I1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">DST NIDHI COE</h5>
          <p class="card-text">
            National Initiative for Developing and Harnessing Innovations
            (NIDHI) is an umbrella programme conceived and developed for
            nurturing ideas and innovations into successful startups
          </p>
          <Link to="/" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
};
export default L1;
