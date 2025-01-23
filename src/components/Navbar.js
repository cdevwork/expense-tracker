import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginRight: "15px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li style={{ marginRight: "15px" }}>
          <Link to="/add-expense" style={{ textDecoration: "none", color: "black" }}>
            Add Expense
          </Link>
        </li>
        <li>
          <Link to="/expenses" style={{ textDecoration: "none", color: "black" }}>
            View Expenses
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;