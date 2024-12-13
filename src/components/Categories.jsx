import { useExpenseContext } from "../context/ExpenseContext";
import Category from "./Category";

const Categories = () => {
  const { state } = useExpenseContext();

  const total = state.expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const categoriesWithExpenses = state.categories.map((category) => {
    const filteredExpenses = state.expenses.filter(
      (expense) => expense.category === category
    );
    return { category, expenses: filteredExpenses };
  });
  //sorts the arrays depending on their length (for better UX)
  const sortedCategories = categoriesWithExpenses.sort(
    (a, b) => b.expenses.length - a.expenses.length
  );

  return (
    <section className="categories-container">
      <h2>Total: {total.toFixed(2)} €</h2>
      <div className="categories">
        {sortedCategories.map(({ category, expenses }, i) => (
          <Category key={i} category={category} expenses={expenses} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
