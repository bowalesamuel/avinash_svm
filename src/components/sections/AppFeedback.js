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
          <h2>User Feedback</h2>
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
          title="user Feedback"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfISeWoJZ4u-hV_ZphvUGMuzM-fSeNN8yU-M82C4EOllBnD7A/viewform?embedded=true"
          width="640"
          height="709"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
        {/* <iframe
          title="svmModel"
          src="demo/demosvm.html"
          style={{
            width: "80%",
            height: "800px",
          }}
        >
          {" "}
        </iframe> */}
      </div>
    </GenericSection>
  );
}

//   render(){
//      return (<div dangerouslySetInnerHTML={htmlDoc} />)
// }}
