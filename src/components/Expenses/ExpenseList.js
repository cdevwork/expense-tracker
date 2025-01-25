import React from "react";

const ExpenseList = ({ expenses }) => {
  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 5);
  };

  return (
    <>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total-expense">
        <h3>Total: {calculateTotal()}</h3>
      </div>
    </>
  );
};

export default ExpenseList;
