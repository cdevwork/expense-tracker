import React, { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && amount && category && date) {
      const newExpense = {
        title,
        amount: parseFloat(amount),
        category,
        date,
      };

      const existingExpenses =
        JSON.parse(localStorage.getItem("expenses")) || [];

      existingExpenses.push(newExpense);

      localStorage.setItem("expenses", JSON.stringify(existingExpenses));

      setTitle("");
      setAmount("");
      setCategory("");
      setDate("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <h2>Expense Tracker App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </>
  );
};

export default ExpenseForm;
