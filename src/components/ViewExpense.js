import React, { useState, useEffect } from "react";

const ViewExpense = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [editIndex, setEditIndex] = useState(null); 

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddOrUpdateExpense = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill all fields!");
      return;
    }

    const newExpense = { title, amount: parseFloat(amount), category, date };

    if (editIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editIndex] = newExpense;
      setExpenses(updatedExpenses);
      setEditIndex(null);
    } else {
      setExpenses([...expenses, newExpense]);
    }

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const handleEditExpense = (index) => {
    const expenseToEdit = expenses[index];
    setTitle(expenseToEdit.title);
    setAmount(expenseToEdit.amount);
    setCategory(expenseToEdit.category);
    setDate(expenseToEdit.date);
    setEditIndex(index);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = filterCategory
      ? expense.category.toLowerCase() === filterCategory.toLowerCase()
      : true;
    const matchesDate = filterDate ? expense.date === filterDate : true;

    return matchesCategory && matchesDate;
  });

  const totalExpense = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h2>{editIndex !== null ? "Edit Expense" : "Add Expense"}</h2>
      <div>
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
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAddOrUpdateExpense}>
          {editIndex !== null ? "Update Expense" : "Add Expense"}
        </button>
      </div>

      <h2>Filter Expenses</h2>
      <div>
        <input
          type="text"
          placeholder="Filter by Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      <h2>Expense Summary</h2>
      <p>
        <strong>Total Expenses:</strong> ₹{totalExpense.toFixed(2)}
      </p>

      <h2>View Expenses</h2>
      <div>
        {filteredExpenses.length > 0 ? (
          <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
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
              {filteredExpenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.title}</td>
                  <td>₹{expense.amount.toFixed(2)}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button onClick={() => handleEditExpense(index)}>Edit</button>
                    <button onClick={() => handleDeleteExpense(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No matching expenses found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewExpense;
