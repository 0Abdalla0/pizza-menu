import React from "react";
import ReactDOM from "react-dom/client";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>FAST React Pizza Company</h1>;
} 
const Menu = () =>{
  return(
    <div>
      <h2>Our Menu Today Is:</h2>
      <Pizza />
      <Pizza />
    </div>
  )
}
function Pizza() {
  return (
    <div>
      <h1>Pizza Spinaci</h1>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Right Now it is {new Date().toLocaleTimeString()}</p>
      <p>OPENS 24/7</p>
      <p>© 2021 FAST React Pizza Company</p>
    </footer>
  );
}

export default Footer;




//React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
root.render(
  <React.StrictMode>
    <App />
    {/* <Pizza /> */}
  </React.StrictMode>
);
