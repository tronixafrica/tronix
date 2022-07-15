const Dashboard = () => {
  return (
    <div
      style={{
        backgroundColor: "#464646",
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
        height: "80%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          backgroundColor: "#464646",
          height: "100%",
          width: "70%",
        }}
      >
        <div
          style={{
            backgroundColor: "#464646",
            height: "20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              backgroundColor: "#121212",
              height: "100%",
              width: "48%",
              padding: "20px",
              border: "1px solid #777",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "Raleway",
                  fontSize: "90%",
                  color: "#D4D4D4",
                }}
              >
                TOTAL DEVICES
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "150%",
                  fontWeight: 500,
                  marginRight: "10px",
                  color: "#D4D4D4",
                }}
              >
                40
              </h1>
              <p
                style={{
                  fontSize: "70%",
                  color: "#D4D4D4",
                }}
              >
                12 ON
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#121212",
              height: "100%",
              width: "48%",
              padding: "20px",
              border: "1px solid #777",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "Raleway",
                  fontSize: "90%",
                  color: "#D4D4D4",
                }}
              >
                TOTAL USERS
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "150%",
                  fontWeight: 500,
                  marginRight: "10px",
                  color: "#D4D4D4",
                }}
              >
                30
              </h1>
              <p
                style={{
                  fontSize: "70%",
                  color: "#059D1D",
                }}
              >
                6 Online
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#121212",
            height: "95%",
            marginTop: "4%",
            padding: "15px",
            border: "1px solid #777",
            borderRadius: "12px",
            overflowY: "scroll",
            scrollbarWidth: "none",
          }}
        >
          <h1
            style={{
              fontSize: "180%",
              fontFamily: "Poppins",
              color: "#D4D4D4",
              marginBottom: "20px",
              marginLeft: "8px",
            }}
          >
            Devices
          </h1>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((i) => (
            <div
              style={{
                borderTop: "1px solid #555",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "100%",
                    fontFamily: "Poppins",
                    color: "#D4D4D4",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  Razor drill
                </h1>
                <p
                  style={{
                    fontSize: "70%",
                    fontFamily: "Poppins",
                    color: "#777",
                  }}
                >
                  Office Lounge
                </p>
              </div>
              <div>
                <h1
                  style={{
                    fontSize: "100%",
                    fontFamily: "Poppins",
                    color: "#059D1D",
                  }}
                >
                  ON
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#121212",
          height: "120%",
          width: "28%",
          padding: "15px",
          border: "1px solid #777",
          borderRadius: "12px",
          overflowY: "scroll",
        }}
      >
        <h1
          style={{
            fontSize: "180%",
            fontFamily: "Poppins",
            color: "#D4D4D4",
            marginBottom: "20px",
            marginLeft: "8px",
          }}
        >
          Notifications
        </h1>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i) => (
          <div
            style={{
              borderTop: "1px solid #555",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "100%",
                  fontFamily: "Poppins",
                  color: "#D4D4D4",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                New device added
              </h1>
              <p
                style={{
                  fontSize: "70%",
                  fontFamily: "Poppins",
                  color: "#777",
                }}
              >
                5 mins ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
