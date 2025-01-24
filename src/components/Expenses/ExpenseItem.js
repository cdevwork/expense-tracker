import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <h3>{expense.title}</h3>
      <p>Amount: ₹{expense.amount}</p>
      <p>Category: {expense.category}</p>
      <p>Date: {expense.date}</p>
    </li>
  );
};

export default ExpenseItem;
