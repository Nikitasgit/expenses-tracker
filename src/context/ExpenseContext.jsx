import { createContext, useContext } from "react";
import { useExpensesReducer } from "../store";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const context = provideExpense();

  return (
    <ExpenseContext.Provider value={context}>
      {children}
    </ExpenseContext.Provider>
  );
};

const provideExpense = () => {
  const [state, dispatch] = useExpensesReducer();

  const handleClick = (id) => {
    dispatch({ type: "delete_expense", payload: id });
  };

  const submitExpense = (e) => {
    e.preventDefault();
    dispatch({ type: "add_expense" });
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const parsedValue = type === "number" ? parseFloat(value) : value;
    dispatch({ type: "set_value", payload: { name, value: parsedValue } });
  };

  return {
    state,
    handleChange,
    handleClick,
    submitExpense,
  };
};

export const useExpenseContext = () => useContext(ExpenseContext);
