import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./index.css";

import ExpenseForm from "./components/Expenses/ExpenseForm";
import Filters from "./components/Filters";
import AuthPage from "./components/pages/Authpage";
import ViewExpense from "./components/ViewExpense";

const App = () => {
  const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route
          path="/expenseform"
          element={
            <PrivateRoute>
              <ExpenseForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/viewexpense"
          element={
            <PrivateRoute>
              <ViewExpense />
            </PrivateRoute>
          }
        />
        <Route
          path="/filters"
          element={
            <PrivateRoute>
              <Filters />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
