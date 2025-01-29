import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";


const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && amount && category && date) {
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount)) {
        alert("Please enter a valid amount.");
        return;
      }

      const newExpense = {
        id: Date.now(),
        title,
        amount: parsedAmount,
        category,
        date,
      };

      const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
      
      storedExpenses.push(newExpense);

      localStorage.setItem("expenses", JSON.stringify(storedExpenses));

      navigate("/viewexpense");
    } else {
      alert("Please fill in all fields.");
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
          <div className="Add Expense"></div>
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
