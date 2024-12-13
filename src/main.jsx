/* import { StrictMode } from "react"; */
import { createRoot } from "react-dom/client";
import "./style/index.scss";
import App from "./App.jsx";
import { ExpenseProvider } from "./context/ExpenseContext.jsx";

createRoot(document.getElementById("root")).render(
  <ExpenseProvider>
    <App />
  </ExpenseProvider>
);
