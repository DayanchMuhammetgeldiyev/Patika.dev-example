import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Money from "./components/Money";
import Receipt from "./components/Reciept";
function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Receipt />
      <Money />
    </div>
  );
}

export default App;
