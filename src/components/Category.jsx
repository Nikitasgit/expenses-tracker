import React from "react";
import ExpenseCard from "./ExpenseCard";

const Category = ({ category, expenses }) => {
  return (
    <article className="category-card">
      <h3>{category}</h3>
      <ul>
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </ul>
      <p className="category-total">
        Total: {expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)} €
      </p>
    </article>
  );
};

export default Category;
