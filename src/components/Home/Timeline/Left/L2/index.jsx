import I3 from "../../img/I3.jpeg";
import { Link } from "react-router-dom";
const L2 = () => {
  return (
    <>
      <div class="card" style={{ width: "25rem", height: "60vh" }}>
        <img src={I3} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">DST NIDHI PRAYAS</h5>
          <p class="card-text">
            The scheme suggest is to help – young and aspiring innovators. The
            focus is to provide support/funding from idea to prototype.The
            maximum support can be provided per innovator/ incubatee is upto Rs.
            10 lakhs.
          </p>
          <Link to="/" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
};
export default L2;
