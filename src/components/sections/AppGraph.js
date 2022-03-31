import React from "react";
import GenericSection from "./GenericSection";
import classNames from "classnames";
// import Page from "../../html/demo/demosvm.html";
// var htmlDoc = { __html: Page };

export default function AppGraph({ topDivider, bottomDivider }) {
  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );
  return (
    <GenericSection>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className={innerClasses}>
          <h2>SVM Parameter Introduction</h2>
        </div>
        <p>
          <b>RBF Kernel Sigma </b>
          controls the influence of new features — Φ(x, center) on the decision
          boundary. The higher the gamma, the more influence of the features
          will have on the decision boundary, more wiggling the boundary will
          be.
        </p>
        <p>
          <b>C </b>
          is an essential hyper-parameter for the SVM model it is how much
          tolerance we want to offer while determining the decision boundary
          (both linear and RBF kernel). It is represented as the penalty term —
          '<b> C </b>' in Sklearn. When SVM produces a misclassification, the
          higher the
          <b> C </b>, the more penalty it receives. As a result, the decision
          boundary will rely on fewer support vectors as the margin becomes
          smaller.
        </p>
        <p>
          {" "}
          To test the influence of <b> C </b>, in the diagram below, choose a
          linear kernel and toggle increase or decrease the value of <b> C </b>{" "}
          by sliding the bar
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title="svmModel"
          src="demo/demosvm.html"
          frameBorder="0"
          style={{
            width: "80%",
            height: "800px",
          }}
        >
          {" "}
        </iframe>
      </div>
    </GenericSection>
  );
}

//   render(){
//      return (<div dangerouslySetInnerHTML={htmlDoc} />)
// }}
//  https://towardsdatascience.com/support-vector-machine-simply-explained-fee28eba5496
//
