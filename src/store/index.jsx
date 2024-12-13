import { useReducer } from "react";
let id = 0;

const initialState = {
  categories: [
    "Alimentation",
    "Logement",
    "Transport",
    "Divertissement",
    "Santé",
    "Éducation",
    "Autres",
  ],
  expense: {
    date: null,
    id: id++,
    amount: 0,
    category: "Autres",
  },
  expenses: [],
  message: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "set_value":
      return {
        ...state,
        expense: {
          ...state.expense,
          [action.payload.name]: action.payload.value,
        },
        message: action.payload.name === "amount" ? "" : state.message,
      };
    case "add_expense":
      if (
        state.expense.amount > 0 &&
        typeof state.expense.amount === "number"
      ) {
        return {
          ...state,
          expense: {
            date: null,
            id: id++,
            amount: 0,
            category: initialState.expense.category,
          },
          expenses: [...state.expenses, { ...state.expense, date: Date.now() }],
          message: "Votre dépense a bien été ajoutée!",
        };
      }
      return {
        ...state,
        message: "⚠️ Merci d'ajouter un montant valide ⚠️",
      };
    case "delete_expense":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const useExpensesReducer = () => useReducer(reducer, initialState);
