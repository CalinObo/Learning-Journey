import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterchangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterchangedHandler}
        />
        {props.items.map((expense)=>(
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
