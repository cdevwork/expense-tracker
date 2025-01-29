import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./ViewExpense.css";
import { FaIndianRupeeSign } from "react-icons/fa6";
import ExpenseChart from "./Expenses/ExpenseChart";

const ViewExpense = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editExpenseId, setEditExpenseId] = useState(null);
  const [updatedExpense, setUpdatedExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["Food", "Travel", "Shopping"];

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  const calculateTotal = () => {
    return expenses.reduce(
      (total, expense) => total + parseFloat(expense.amount || 0),
      0
    );
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const handleEdit = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setEditExpenseId(id);
    setUpdatedExpense({
      title: expenseToEdit.title,
      amount: expenseToEdit.amount,
      category: expenseToEdit.category,
      date: expenseToEdit.date,
    });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === editExpenseId ? { ...expense, ...updatedExpense } : expense
    );
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    setEditExpenseId(null);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <Navbar />
      <div className="view-expense-container">
        <h2 className="page-title">View Expenses</h2>

        <div className="filter-container">
          <h3>Filter by Category</h3>
          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="category-select"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="table-c">
          <table className="expenses-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(expense.id)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(expense.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="total-container">
          <h3>
            Total:
            <FaIndianRupeeSign className="arup" /> {calculateTotal().toFixed(2)}
          </h3>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Expense</h3>
            <form>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={updatedExpense.title}
                  onChange={handleChange}
                />
              </label>
              <label>
                Amount:
                <input
                  type="number"
                  name="amount"
                  value={updatedExpense.amount}
                  onChange={handleChange}
                />
              </label>
              <label>
                Category:
                <select
                  name="category"
                  value={updatedExpense.category}
                  onChange={handleChange}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={updatedExpense.date}
                  onChange={handleChange}
                />
              </label>
              <div className="modal-actions">
                <button type="button" onClick={handleSave} className="save-btn">
                  Save
                </button>
                <button type="button" onClick={closeModal} className="close-btn">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewExpense;
