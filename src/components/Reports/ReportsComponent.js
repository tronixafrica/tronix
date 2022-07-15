import React from "react";

const ReportsComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        margin: "25px",
        height: "90vh",
        width: "100%",
      }}
    >
      outer div
      <div
        style={{
          backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
          margin: "20px",
          height: "90%",
          width: "90%",
        }}
      >
        div left
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            margin: "20px",
            height: "40%",
            width: "90%",
          }}
        >
          div up
        </div>
        <div
          style={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            margin: "20px",
            height: "40%",
            width: "90%",
          }}
        >
          div down
        </div>
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          display: "flex",
          flexDirection: "column",
          margin: "20px",
          height: "90%",
          width: "50%",
        }}
      >
        {" "}
        div right
      </div>
    </div>
  );
};

export default ReportsComponent;
