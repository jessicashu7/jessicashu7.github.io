import './WorkRow.css';
import {ModalCarousel} from 'components';
import React from 'react';
function WorkRow(props) {
  const {rowInfo} = {...props};

  return (
    <div className="row my-5">
      <div className="col-md-3">
        <img
          className="img-fluid w-100"
          src={rowInfo.image.src}
          alt={rowInfo.image.alt} />
      </div>

      <div className="col-md-9 text-left pt-2">
        <h4>
          {rowInfo.title}
          { /* first item is most right*/
            rowInfo.links != null ? rowInfo.links.map((item, ind) => {
              const classStyles = ind === 0 ? "btn btn-sm btn-outline-secondary float-right" : "btn btn-sm btn-outline-secondary float-right mr-1";

              if (item.type === "modal") {
                return (
                  <button
                    key={`${rowInfo.id}-${ind}-photos`}
                    className={classStyles}
                    type="button"
                    data-toggle="modal"
                    data-target={`#${rowInfo.id}-pics`}> {/* id defined in ModalCarousel */}
                    {item.label}
                  </button>
                );
              } else {
                return (
                  <a
                    key={`${rowInfo.id}-${ind}-link`}
                    href={item.href}
                    target="_blank"
                    className={classStyles}>
                    {item.label}
                  </a>
                );
              }
            })
              : null}
        </h4>

        <h6 className="text-secondary">
          {rowInfo.subtitle} | <em>{rowInfo.timeline}</em>
        </h6>
        <br />
        <p>
          {typeof rowInfo.description === "string" ? rowInfo.description :
            rowInfo.description.map((desc, ind) => {
              return (<React.Fragment key={`${desc.id}-${ind}-description`}>{desc}</React.Fragment>);
            })}
        </p>

        {rowInfo.expandedDescription != null ? (
          <React.Fragment>
            <div
              className="collapse mb-3"
              id={`${rowInfo.id}-expand`}>
              {
                rowInfo.expandedDescription.map((expDescParagraph, i) => {
                  return (
                    <p key={`${rowInfo.id}-${i}-expDesc`}>
                      {typeof expDescParagraph === "string" ? expDescParagraph : (
                        expDescParagraph.map((espDescParagraphItem, ind) => {
                          return (<React.Fragment key={`${rowInfo.id}-${i}-${ind}-expDesc`}>{espDescParagraphItem}</React.Fragment>);
                        })
                      )}
                    </p>);
                })
              }
            </div>

            <button
              className="btn btn-light btn-block expand py-0"
              type="button"
              data-toggle="collapse"
              data-target={`#${rowInfo.id}-expand`}
              aria-expanded="false"
              aria-controls={`${rowInfo.id}-expand`}>
              <img
                className="my-0"
                src="images/expandarrow.png"
                alt="^" />
            </button>
          </React.Fragment>
        ) : null}

        {rowInfo.modalTitle != null && rowInfo.modalCarouselItems != null && rowInfo.modalCarouselItems.length > 0 ? (
          <ModalCarousel
            id={rowInfo.id}
            title={rowInfo.modalTitle}
            carouselItems={rowInfo.modalCarouselItems}>
          </ModalCarousel>
        ) : null}
      </div>
    </div>);
}

export default WorkRow;
