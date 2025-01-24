import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    {
      title: "Groceries",
      amount: 1500,
      category: "Food",
      date: "2025-01-20",
    },
    {
      title: "Electricity Bill",
      amount: 2000,
      category: "Utilities",
      date: "2025-01-15",
    },
  ];

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;