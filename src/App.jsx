import React from "react";
import ShelterScene from "./components/shelterScene";
import TradingCentre from "./TradingCentre";
import Companion from "../Companion";

function App() {
  const [screen, setScreen] = React.useState("shelter");
  const [score] = React.useState(50);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* MAIN SCREEN */}
      {screen === "shelter" ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
          }}
        >
          <ShelterScene />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            overflowY: "auto",
          }}
        >
          <TradingCentre />
        </div>
      )}

      {/* COMPANION - ALWAYS PRESENT */}
      <div
        style={{
          position: "fixed",
          right: "40px",
          bottom: "80px",
          zIndex: 1000,
        }}
      >
        <Companion score={score} />
      </div>

      {/* NAVIGATION */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1100,
          display: "flex",
          gap: "12px",
        }}
      >
        <button onClick={() => setScreen("shelter")}>
          SHELTER
        </button>

        <button onClick={() => setScreen("trading")}>
          TRADING
        </button>
      </div>
    </div>
  );
}

export default App;