import { useEffect, useState } from "react";
import "./App.css";
import AdviceGenerator from "./components/adviceGenrator";

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
    <>
    <AdviceGenerator 
      fetchAdvice={fetchAdvice} 
      setAdvice={setAdvice}
      advice={advice}  
    />
    
    </>
  );
};

export default App;
