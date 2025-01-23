import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
import './index.css';
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ExpenseForm />} />
        <Route path="/list" element={<ExpenseList />} />
        <Route path="/filters" element={<Filters />} />
      </Routes>
    </Router>
  );
}

export default App;
