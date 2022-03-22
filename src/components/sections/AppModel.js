/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import GenericSection from "./GenericSection";
// import SectionHeader from "./partials/SectionHeader";
import classNames from "classnames";
import Button from "../elements/Button";

const AppModel = ({ topDivider, bottomDivider }) => {
  const [model, setModel] = useState("linear");
  const [test_size, setTest_size] = useState(0);
  const [c_value, setC_value] = useState(0);
  const [degree, setDegree] = useState(1);
  const [result, setResult] = useState("-");
  const [train_time, setTrain_time] = useState("-");
  const [loading, setLoading] = useState(false);
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

  const runModel = () => {
    let uri = "https://avinashapi.herokuapp.com/train-svm";
    let payload = {
      kernel: model,
      test_size: test_size,
      c: c_value,
      gamma: "scale",
      degree,
    };
    setLoading(true);
    console.log("started");
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "https://avinashapi.herokuapp.com");
    fetch(uri, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log("done");
        console.log("Success:", data);
        setTrain_time(data.time);
        setResult(data.score);
        setLoading(false);
      })
      //Then with the error genereted...
      .catch((error) => {
        setLoading(false);
        console.log("failed");
        console.error("Error:", error);
        alert(error.message);
      });
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
          <text>Test size- {test_size}</text>
          <input
            type={"range"}
            min={0.1}
            max={0.8}
            step={0.05}
            style={{ width: "70%", marginTop: "15px" }}
            value={test_size}
            onChange={(e) => setTest_size(e.target.value)}
          />

          {model === "linear" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <text>C - {c_value}</text>
              <input
                type={"range"}
                min={1}
                max={100}
                style={{ width: "70%", marginTop: "15px" }}
                value={c_value}
                onChange={(e) => setC_value(e.target.value)}
              />

              {/* <input type={"button"} title={"Execute"} width={50} />
              <button
                onClick={() => runModel()}
                title={"EXECUTE"}
                style={{
                  marginTop: 10,
                  width: "50%",
                  height: 40,
                  background: "#634640",
                  color: "#fff",
                }}
                color={"#634640"}
              /> */}
            </div>
          )}
          {model === "poly" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <text>C - {c_value}</text>
              <input
                type={"range"}
                min={1}
                max={100}
                step={0.1}
                style={{ width: "80%", marginTop: "15px" }}
                value={c_value}
                onChange={(e) => setC_value(e.target.value)}
              />
              <br />
              <text>Degree - {degree}</text>
              <input
                type={"range"}
                min={1}
                max={20}
                step={1}
                style={{ width: "65%", marginTop: "15px" }}
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </div>
          )}
          {model === "rbf" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <text>C - {c_value}</text>
              <input
                type={"range"}
                min={1}
                max={100}
                style={{ width: "70%", marginTop: "15px" }}
                value={c_value}
                onChange={(e) => setC_value(e.target.value)}
              />
            </div>
          )}
          {model === "sigmoid" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <text>C - {c_value}</text>
              <input
                type={"range"}
                min={1}
                max={100}
                style={{ width: "70%", marginTop: "15px" }}
                value={c_value}
                onChange={(e) => setC_value(e.target.value)}
              />
            </div>
          )}
          <Button
            loading={loading}
            tag="a"
            color="primary"
            wideMobile
            onClick={() => runModel()}
          >
            Execute
          </Button>
          {/* <div
            onClick={() => runModel()}
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              padding: 10,
              boxShadow: "inherit",
              // width: "50%",
              background: "#634640",
            }}
          >
            <text style={{ color: "#fff" }}>Execute</text>
          </div> */}
        </div>
      </div>
      <div>
        <h3>Result</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <text>
            The Accuracy score for the model trained above is {result}
          </text>
          <text>The time used in training the model above is {train_time}</text>
        </div>
      </div>
      {/* <SectionHeader data={sectionHeader} /> */}
    </GenericSection>
  );
};

export default AppModel;
