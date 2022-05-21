import "./index.css";
import Right from "./Right";
const Timeline = () => {
  return (
    <>
      <div className="mw-100 bg bg-primary mb-3 d-flex justify-content-center">
        <h1 className="p-3 text-light ">Programs</h1>
      </div>
      <div className="container h-100 bg bg-primary">
        <div className="row">
          <div className="col d-flex justify-content-end pl-5">
            <Right></Right>
          </div>
          <div className="col d-flex justify-content-left"></div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
