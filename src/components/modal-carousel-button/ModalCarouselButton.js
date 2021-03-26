import './ModalCarouselButton.css';
import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

function ModalCarouselButton(props) {
  const {id, title, carouselItems, buttonLabel, buttonVariant, buttonSize, buttonClasses} = {...props};

  const modalId = `${id}-pics`;
  const modalLabel = `${id}Label`;
  const carouselId = `${id}Carousel`;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button
        variant={buttonVariant ?? "outline-secondary"}
        size={buttonSize ?? "sm"}
        className={buttonClasses ?? ""}
        onClick={handleShow}>
        {buttonLabel ?? "show"}
      </Button>
      <Modal
        show={show} onHide={handleClose}
        id={modalId}
        tabIndex={-1}
        role="dialog"
        aria-labelledby={modalLabel}
        aria-hidden="true"
        centered>

        <Modal.Header closeButton>
          <Modal.Title id={modalLabel}>
            {title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default ModalCarouselButton;
