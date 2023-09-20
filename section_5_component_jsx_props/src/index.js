import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
    photoName: "pizzas/funghi.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpeg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpeg",
    soldOut: false,
  },
];

function App() {
  const openHour = 12;
  const closeHour = 22;
  const hour = new Date().getHours();
  console.log("Hour", hour);
  const isOpen = hour >= openHour && hour < closeHour ? true : false;
  return (
    <div className="menu">
      <Header />
      <Menu />
      <Footer isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer({ isOpen, openHour, closeHour }) {
  return (
    <footer className="footer">
      <span>
        {new Date().toLocaleTimeString()}. We're open from {openHour}:00 to{" "}
        {closeHour}:00.
      </span>
      <span> We're currently {isOpen ? "open" : "closed"}.</span>
    </footer>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  );
}
function Pizza() {
  return (
    <div className="pizzas">
      {pizzaData.map((pizza) => (
        <div
          className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
          key={pizza.name}
        >
          <img src={pizza.photoName} alt="spinaci" />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.soldOut ? "Sold Out" : pizza.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
