import b1 from "../img/b1.jpg";
import b2 from "../img/b2.jpg";
import b3 from "../img/b3.jpeg";

const Carousel = () => {
  return (
    <>
      <section id="carousel">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={b1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={b2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={b3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Carousel;
