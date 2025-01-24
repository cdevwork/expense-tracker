import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && amount && category && date) {
      const newExpense = {
        id: Date.now(), 
        title,
        amount: parseFloat(amount),
        category,
        date,
      };

      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

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
    <Navbar />
      <h2>Expense Tracker App</h2>
      <div className="expense-form">
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
      </div>
    </>
  );
};

export default ExpenseForm;
