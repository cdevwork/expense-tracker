import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseForm from "./components/Expenses/ExpenseForm";

import './index.css';
import Filters from "./components/Filters";
import AuthPage from "./components/pages/Authpage";
import ViewExpense from "./components/ViewExpense";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />     
        <Route path="/expenseform" element={<ExpenseForm />} />
        <Route path="/ViewExpense" element={<ViewExpense />} />
        <Route path="/filters" element={<Filters />} />
      </Routes>
    </Router>
  );
}

export default App;
