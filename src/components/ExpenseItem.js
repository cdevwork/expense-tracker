const ExpenseItem = ({ expense }) => {
    return (
      <li>
        <span>{expense.title}</span> - <span>₹{expense.amount}</span> - <span>{expense.category}</span> - <span>{expense.date}</span>
      </li>
    );
  };
  
  export default ExpenseItem;
  