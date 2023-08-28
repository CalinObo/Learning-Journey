import logo from "./assets/investment-calculator-logo.png";
import React from "react";

import Header from "./components/Header/Header";
import UserInput from "./components/Form/UserInputField/UserInput";
import ResultTable from "./components/ResultsTable/ResultTable";
function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
  };

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
      />
      <ResultTable
        text1={"Year"}
        text2={"Total Savings"}
        text3={"Interest (Year)"}
        text4={"Total Interest"}
        text5={"Invested Capital"}
      />
    </div>
  );
}

export default App;
