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
        }}
      >
        <div className={innerClasses}>
          <h2>SVM model</h2>
        </div>
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
