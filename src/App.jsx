import Categories from "./components/Categories";
import Form from "./components/Form";
function App() {
  return (
    <main>
      <h1>Suivez vos dépenses et gérez votre budget!</h1>
      <section className="form-container">
        <h2>Ajouter votre dépense:</h2>
        <Form />
      </section>
      <Categories />
    </main>
  );
}

export default App;
