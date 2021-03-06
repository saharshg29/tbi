import I4 from "../../img/I4.jpeg";
import { Link } from "react-router-dom";
const R2 = () => {
  return (
    <>
      <div class="card" style={{ width: "25rem", height: "60vh" }}>
        <img src={I4} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">MEITY TIDE 2.0</h5>
          <p class="card-text">
            To promote e-Governance for empowering citizen and enhancing
            efficiency through digital services and ensuring a secure cyber
            space.
          </p>
          <Link to="/" class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
};

export default R2;
