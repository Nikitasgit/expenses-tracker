import React from "react";
import { useExpenseContext } from "../context/ExpenseContext";

const Form = () => {
  const { state, handleChange, submitExpense } = useExpenseContext();

  return (
    <form onSubmit={(e) => submitExpense(e)} className="form">
      <label>
        Montant:
        <input
          type="number"
          min={0}
          value={state.expense.amount === 0 ? "" : state.expense.amount}
          name="amount"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Catégorie:
        <select
          name="category"
          value={state.expense.category}
          onChange={(e) => handleChange(e)}
        >
          {state.categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button role="button">Ajouter ma dépense</button>
      {state.message !== "" && <span className="message">{state.message}</span>}
    </form>
  );
};

export default Form;
