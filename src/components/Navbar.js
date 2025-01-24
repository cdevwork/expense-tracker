import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");

    navigate("/");
  };

  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginRight: "10px" }}>
          <Link
            to="/ExpenseForm"
            style={{ textDecoration: "none", color: "black" }}
          >
            ExpenseForm
          </Link>
        </li>
        <li style={{ marginRight: "10px" }}>
          <Link
            to="/expenses"
            style={{ textDecoration: "none", color: "black" }}
          >
            View Expense
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              border: "none",
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
