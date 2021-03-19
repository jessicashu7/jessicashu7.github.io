import './ModalCarousel.css';

function ModalCarousel(props) {
  const {id, title, carouselItems} = {...props};

  const modalId = `${id}-pics`;
  const modalLabel = `${id}Label`;
  const carouselId = `${id}Carousel`;

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex={-1}
      role="dialog"
      aria-labelledby={modalLabel}
      aria-hidden="true">
      <div
        className="modal-dialog modal-dialog-centered"
        role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={modalLabel}>
              {title}
            </h5>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            {carouselItems.length > 1 ? (
              <div
                id={carouselId}
                className="carousel slide"
                data-ride="carousel"
                data-interval="false">
                <ol className="carousel-indicators">
                  {
                    carouselItems.map((_, i) => {
                      return (
                        <li
                          key={`${carouselId}-${i}-carousel-indicator`}
                          data-target={`#${carouselId}`}
                          data-slide-to={i}
                          className={i === 0 ? "active" : ""}
                        />
                      );
                    })
                  }
                </ol>

                <div className="carousel-inner">
                  {
                    carouselItems.map((item, i) => {
                      const {src, alt} = {...item};
                      return (
                        <div key={`${carouselId}-${i}-carousel-item`} className={i === 0 ? "carousel-item active" : "carousel-item"}>
                          <img
                            className="d-block w-100"
                            src={src}
                            alt={alt} />
                        </div>
                      );
                    })
                  }
                </div>

                <a
                  className="carousel-control-prev"
                  href={`#${carouselId}`}
                  role="button"
                  data-slide="prev">
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href={`#${carouselId}`}
                  role="button"
                  data-slide="next">
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            ) : (
              <img
                className="d-block w-100"
                src={carouselItems[0].src}
                alt={carouselItems[0].alt} />
            )
            }
          </div>

          <div className="modal-footer">

          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCarousel;
