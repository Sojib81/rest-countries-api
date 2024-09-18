import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./Components/Country/Country";
import Cart from "./Components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
        const names = data.map((country) => country.name.common);
        //console.log(names);
      });
  }, []);

  const handleAddCountry = (country) => {
    console.log("Country added", country.name);
    const newCart = [...cart, country.name];
    setCart(newCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Total Country :{countries.length}</h2>

        <Cart cart={cart}></Cart>
        <ul>
          {countries.map((country) => (
            <Country
              country={country}
              handleAddCountry={handleAddCountry}
            ></Country>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
