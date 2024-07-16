import Cart from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { Meal } from "./components/meal/Meal";
import { MealsSummary } from "./components/mealsSummary/MealsSummary";
import Modal from "./components/UI/Modal";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <Meal />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
