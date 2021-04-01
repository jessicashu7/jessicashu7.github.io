import './WorkRow.css';
import {ModalCarouselButton} from 'components';
import {AnimatedRow} from 'components/animated-components';
import React from 'react';
import {Col, Image, Button} from 'react-bootstrap';
import {useInView} from 'react-intersection-observer';
import {useSpring, config} from 'react-spring';
import {isMobileOnly} from "react-device-detect";
import {Color} from "Colors";

function WorkRow(props) {
  const {rowInfo, style} = {...props};
  const propStyle = style != null ? style : {};

  const {ref, inView, entry} = useInView({
    /* Optional options */
    threshold: isMobileOnly ? 0.25 : 0.75,
  });

  const {border} = useSpring({from: {border: 0}, to: {border: inView ? 1 : 0}, config: config.slow});

  return (
    <AnimatedRow ref={ref} className="my-5" style={{
      ...propStyle,
      borderLeft:
        border.to(
          {
            range: [0, 1],
            output: [Color.blueTransparent, Color.blue]
          }
        ).to((b) => `solid 5px ${b}`),
      borderRadius: 2,
    }}>
      <Col md={3}>
        <Image
          fluid
          className="w-100"
          src={rowInfo.image.src}
          alt={rowInfo.image.alt} />
      </Col>
      <Col md={9} className="text-left pt-2">
        <h4>
          {rowInfo.title}
          { /* first item is most right*/
            rowInfo.links != null ? rowInfo.links.map((item, ind) => {
              const classStyles = ind === 0 ? "float-right" : "float-right mr-1";
              if (item.type === "modal") {
                if (rowInfo.modalTitle != null && rowInfo.modalCarouselItems != null && rowInfo.modalCarouselItems.length > 0) {
                  return (
                    <React.Fragment key={`${rowInfo.id}-${ind}-photos`}>
                      <ModalCarouselButton
                        id={rowInfo.id}
                        title={rowInfo.modalTitle}
                        carouselItems={rowInfo.modalCarouselItems}
                        buttonLabel={item.label}
                        buttonVariant="outline-secondary"
                        buttonSize="sm"
                        buttonClasses={classStyles}
                      >
                      </ModalCarouselButton>
                    </React.Fragment>
                  );
                } else {
                  return null;
                }
              } else {
                return (
                  <Button
                    key={`${rowInfo.id}-${ind}-link`}
                    variant="outline-secondary"
                    size="sm"
                    className={classStyles}
                    href={item.href}
                    target="_blank">
                    {item.label}
                  </Button>
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

            <Button
              variant="light"
              size="lg"
              block
              className="expand py-0"
              data-toggle="collapse"
              data-target={`#${rowInfo.id}-expand`}
              aria-expanded="false"
              aria-controls={`${rowInfo.id}-expand`}>
              <Image
                className="my-0"
                src="images/expandarrow.png"
                alt="^" />
            </Button>
          </React.Fragment>
        ) : null}
      </Col>
    </AnimatedRow >
  );
}

export default WorkRow;
