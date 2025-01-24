import React from "react";
const Filters = ({ setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, category: e.target.value }));
  };

  const handleDateChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, date: e.target.value }));
  };

  return (
    <div>
      <select onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>
      <input type="date" onChange={handleDateChange} />
    </div>
  );
};
export default Filters;

