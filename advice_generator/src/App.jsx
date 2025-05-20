import React, { useEffect, useState } from "react";
import IconDice from "./assets/images/iconDice.svg";
import PatternDividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import PatternDividerMobile from "./assets/images/pattern-divider-mobile.svg";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState({
    id: 0,
    advice: "Click the dice to get some advice",
  });

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice({
        id: data.slip.id,
        advice: data.slip.advice,
      });
    } catch (error) {
      console.error("Failed to fetch advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="mainDiv">
      <div className="card">
        <h1>Advice #{advice.id}</h1>
        <p>"{advice.advice}"</p>
        <div className="divider">
          <img
            src={PatternDividerDesktop}
            alt="Divider"
            className="divider-desktop"
          />
          <img
            src={PatternDividerMobile}
            alt="Divider"
            className="divider-mobile"
          />
        </div>
        <button className="btn" onClick={fetchAdvice}>
          <img src={IconDice} alt="Dice Icon" />
        </button>
      </div>
    </div>
  );
};

export default App;
