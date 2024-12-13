import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useExpenseContext } from "../context/ExpenseContext";

const ExpenseCard = ({ expense }) => {
  const { handleClick } = useExpenseContext();
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };
  return (
    <li className="expense-card">
      <h4>{expense.amount}€</h4>
      <div className="date-and-bin">
        <h6>{formatDate(expense.date)}</h6>
        <MdDeleteOutline
          className="bin"
          onClick={() => handleClick(expense.id)}
        />
      </div>
    </li>
  );
};

export default ExpenseCard;
