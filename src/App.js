import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseForm from "./components/Expenses/ExpenseForm";

import './index.css';
import ExpenseList from "./components/Expenses/ExpenseList";
import Filters from "./components/Filters";
import AuthPage from "./components/pages/Authpage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />     
        <Route path="/ExpenseForm" element={<ExpenseForm />} />
        <Route path="/list" element={<ExpenseList />} />
        <Route path="/filters" element={<Filters />} />
      </Routes>
    </Router>
  );
}

export default App;
