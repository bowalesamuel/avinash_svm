import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
// import ButtonGroup from "../elements/ButtonGroup";
// import Button from "../elements/Button";
import Image from "../elements/Image";
// import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // };

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Machine learning - <span className="text-color-primary">SVM</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Introduction to SVM and models
              </p>
              <p>
                SVM or Support Vector Machine is a linear model for
                classification and regression problems. It can solve linear and
                non-linear problems and work well for many practical problems.
                The idea of SVM is simple: The algorithm creates a line or a
                hyperplane which separates the data into classes.
              </p>

              {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://cruip.com/"
                  >
                    Get started
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    View on Github
                  </Button>
                </ButtonGroup>
              </div> */}
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <Image
              className="has-shadow"
              src={require("./../../assets/images/svm-hyperplane.png")}
              alt="Hero"
              width={796}
              height={404}
            />
          </div>
        </div>
        <p>
          SVM chooses the extreme points/vectors that help in creating the
          hyperplane. These extreme cases are called as support vectors, and
          hence algorithm is termed as Support Vector Machine. Consider the
          below diagram in which there are two different categories that are
          classified using a decision boundary or hyperplane
        </p>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

// https://www.javatpoint.com/machine-learning-support-vector-machine-algorithm
