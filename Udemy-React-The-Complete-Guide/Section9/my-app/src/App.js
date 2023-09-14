import logo from "./assets/investment-calculator-logo.png";
import React, { useState } from "react";

import Header from "./components/Header/Header";
import UserInput from "./components/Form/UserInputField/UserInput";
import ResultTable from "./components/ResultsTable/ResultTable";
function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header
        logoCalin={logo}
        altCalin="logo"
        textCalin="Investment Calculator"
      />

      <UserInput
        htmlForCal="current-savings"
        text="Current Savings"
        typeCal="number"
        HtmlForCal2="yearly-contribution"
        text2="Yearly Savings ($)"
        typeCal2="number"
        HtmlForCal3="expected-return"
        text3="Expected Interest (%, per year)"
        typeCal3="number"
        HtmlForCal4="duration"
        text4="Investment Duration (years)"
        typeCal4="number"
        onCalculate={calculateHandler}
      />
      {!userInput && <p style={{textAlign:"center"}}>No investment has been done yet</p>}
      {userInput && (
        <ResultTable
          text1={"Year"}
          text2={"Total Savings"}
          text3={"Interest (Year)"}
          text4={"Total Interest"}
          text5={"Invested Capital"}
          data={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      )}
    </div>
  );
}

export default App;
