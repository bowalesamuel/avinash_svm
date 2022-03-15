/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import GenericSection from "./GenericSection";
// import SectionHeader from "./partials/SectionHeader";
import classNames from "classnames";

const AppModel = ({ topDivider, bottomDivider }) => {
  const [model, setModel] = useState("linear");
  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const styles = {
    model_button: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "10em",
      height: "75px",
      background: "#4B66AB",
      paddingTop: "15px",
      paddingLeft: "12px",
      paddingBottom: "15px",
      borderRadius: "10px",
      marginBottom: "10px",
    },
  };

  //   const sectionHeader = {
  //     title: "Build a Model",
  //     paragraph: "Build models and compare the scores to see the best models",
  //   };
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
          <h2>Build a Model</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          background: "#000",
          flexDirection: "row",
          //   alignItems: "center",
          //   justifyContent: "space-between",
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
          paddingRight: "10px",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "40%",
            // justifyContent: "center",
          }}
        >
          <a style={styles.model_button} onClick={() => setModel("linear")}>
            <input
              type={"radio"}
              checked={model === "linear" ? true : false}
              style={{ marginRight: "10px" }}
            />
            <text>Linear</text>
          </a>
          <a style={styles.model_button} onClick={() => setModel("poly")}>
            <input
              type={"radio"}
              style={{ marginRight: "10px" }}
              checked={model === "poly" ? true : false}
            />
            <text>Polynomial</text>
          </a>
          <a style={styles.model_button} onClick={() => setModel("rbf")}>
            <input
              type={"radio"}
              style={{ marginRight: "10px" }}
              checked={model === "rbf" ? true : false}
            />
            <text>RBF</text>
          </a>
          <a
            // href="#"
            onClick={() => setModel("sigmoid")}
            style={styles.model_button}
          >
            <input
              type={"radio"}
              style={{ marginRight: "10px" }}
              checked={model === "sigmoid" ? true : false}
            />
            <text>Sigmoid</text>
          </a>
        </div>
        {/* second side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#373738",
            flex: 1,
            // justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <text>C</text>
            <input
              type={"range"}
              min={1}
              max={100}
              style={{ width: "70%", marginTop: "15px" }}
            />
          </div>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input type={"radio"} />
            <text>type</text>
          </div> */}
        </div>
      </div>
      {/* <SectionHeader data={sectionHeader} /> */}
    </GenericSection>
  );
};

export default AppModel;
