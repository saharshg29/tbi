import I5 from "../../img/I5.jpeg";
import { Link } from "react-router-dom";
const L3 = () => {
  return (
    <>
      <div class="card" style={{ width: "25rem", height: "60vh" }}>
        <img src={I5} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">EDII-TN KNOWLEDGE PARTNER</h5>
          <p class="card-text">
            The Government of Tamil Nadu has initiated the IVP, a grant-in-aid
            scheme to encourage research and innovation among MSMEs and
            start-ups in the manufacturing sectors.
          </p>
          <Link to="/" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
};
export default L3;
