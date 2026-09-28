import React from "react";
import ShelterScene from "./components/shelterScene";
import TradingCentre from "./TradingCentre";
import Companion from "../Companion";

function App() {
  const [screen, setScreen] = React.useState("shelter");

  // Temporary score for Companion
  // We can connect this to the real game state later
  const [score] = React.useState(50);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        position: "relative",
        overflow: "hidden",
        background: "#030509",
      }}
    >

      {/* ================= SHELTER ================= */}
      {screen === "shelter" && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
          }}
        >
          <ShelterScene />

          {/* Navigation */}
          <div
            style={{
              position: "fixed",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              onClick={() => setScreen("shelter")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#00ffff",
                border: "1px solid #00ffff",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              SHELTER
            </button>

            <button
              onClick={() => setScreen("companion")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#ffffff",
                border: "1px solid #ffffff",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              COMPANION
            </button>

            <button
              onClick={() => setScreen("trading")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#ff00cc",
                border: "1px solid #ff00cc",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              TRADING
            </button>
          </div>
        </div>
      )}

      {/* ================= COMPANION ================= */}
      {screen === "companion" && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            background:
              "radial-gradient(circle, #18202b 0%, #030509 70%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Companion score={score} />

          {/* Navigation */}
          <div
            style={{
              position: "fixed",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              onClick={() => setScreen("shelter")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#00ffff",
                border: "1px solid #00ffff",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              SHELTER
            </button>

            <button
              onClick={() => setScreen("companion")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#ffffff",
                border: "1px solid #ffffff",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              COMPANION
            </button>

            <button
              onClick={() => setScreen("trading")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#ff00cc",
                border: "1px solid #ff00cc",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              TRADING
            </button>
          </div>
        </div>
      )}

      {/* ================= TRADING CENTRE ================= */}
      {screen === "trading" && (
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <TradingCentre />

          {/* Navigation */}
          <div
            style={{
              position: "fixed",
              bottom: 15,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              onClick={() => setScreen("shelter")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#00ffff",
                border: "1px solid #00ffff",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              SHELTER
            </button>

            <button
              onClick={() => setScreen("companion")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#ffffff",
                border: "1px solid #ffffff",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              COMPANION
            </button>

            <button
              onClick={() => setScreen("trading")}
              style={{
                padding: "10px 22px",
                background: "#030509",
                color: "#ff00cc",
                border: "1px solid #ff00cc",
                fontFamily: "Orbitron, sans-serif",
                cursor: "pointer",
              }}
            >
              TRADING
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
