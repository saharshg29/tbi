import I3 from "../../img/I6.jpeg";
import { Link } from "react-router-dom";
const R3 = () => {
  return (
    <>
      <>
        <div class="card" style={{ width: "25rem", height: "60vh" }}>
          <img src={I3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">STARTUP INDIA SEED FUND SCHEME</h5>
            <p class="card-text">
              The Startup India initiative of the Government of India envisages
              building a robust Start-up ecosystem in the country for nurturing
              innovation and providing opportunities to budding entrepreneurs.
            </p>
            <Link to='/' class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </>
    </>
  );
};

export default R3;
