import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//webpack will inject the styles into our application
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

//as class is a reserved keyword in js
function App() {
  //   const x = "jonas";
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//style is just an object
function Header() {
  //outer {} is for javascript syntax, as we have to pass an js object
  //inner {} is the js object of the styles we want to apply
  const style = {};
  return (
    <header className="header">
      {/*at the end jsx gets converted to javascript syntax */}
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

/*each time we write jsx, it can have only one root element
props => communnication(passing data) between parent and child
=> JSX produces a JavaScript expression
1 We can place other pieces of JSX inside {}
2 We can write JSX anywhere inside a component (in
if/else, assign to variables, pass it into functions)

each time we want to embedd js in jsx we have to use {}
When you include an array of JSX elements like this within curly braces {}, React will iterate over the elements in the array and render them in the order they appear
=> inside {} we have to write some js which produces some value, therefore can't write if-else*/
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* at the end we need all <pizza /> after running map function*/}
      {/* it's a js fragment to wrap elements without affecting the html(adding new div parent) */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from Our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
              /*return (
                <div className="pizza">
                  <img src={pizza.photoName} alt={pizza.name} />
                  <div>
                    <h3>{pizza.name}</h3>
                    <p>{pizza.ingredients}</p>
                    <span>{pizza.price + 3}</span>
                  </div>
                </div>
              );*/
            })}
          </ul>
        </>
      ) : (
        <p> We're still working on our menu. Please come back later :) </p>
      )}

      {/*[
        <div className="pizza">
          <img src={pizzaData[0].photoName} alt={pizzaData[0].name} />{" "}
          <div>
            <h3>{pizzaData[0].name}</h3>
            <p>{pizzaData[0].ingredients}</p>
            <span>{pizzaData[0].price + 3}</span>{" "}
          </div>{" "}
        </div>,
        <div className="pizza">
          <img src={pizzaData[1].photoName} alt={pizzaData[1].name} />{" "}
          <div>
            <h3>{pizzaData[1].name}</h3>
            <p>{pizzaData[1].ingredients}</p>
            <span>{pizzaData[1].price + 3}</span>{" "}
          </div>{" "}
        </div>,
      ]*/}
      {/*<Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      />

      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/focaccia.jpg"
      />

      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18} //passing as a number, not string "18"
        photoName="pizzas/prosciutto.jpg"
      />

      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={18 + 3}
        photoName="pizzas/salamino.jpg"
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price="12"
        photoName="pizzas/funghi.jpg"
  />*/}
    </main>
  );
}

/*function = component
Rules
1. first letter capital
2. return some markup(JSX)
3. one component can only return one element
4. while nesting never write one function declaration inside another
-on calling pizza component, react passes all the arguments
-{} to embedd js into jsx*/

function Pizza({ pizzaObj }) {
  // web bundler know assets are inside the public folder
  // console.log(props, 2);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/*{pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

/*these are just js functions
initializing them = calling functions*/

function Footer() {
  //ele, props, children
  //   return React.createElement("footer", null, "We are currently open");
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) alert("we are currently open");
  //   else alert("sorry we are closed");
  //   console.log(hour);

  //react doesn't render true or false values in the dom

  /* if(!isOpen)
    return (
       <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
    ); */

  return (
    <footer className="footer">
      {/*new Date().toLocaleTimeString()*/} {/*We're currently open*/}
      {/* we are able to write jsx here bec it's just a js exp */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} to {closeHour}{" "}
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order Online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

// const Test = function () {};
// const Test = ()=>{}

//render app component  in dom
//React v18
//components rendered twice in strict mode

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//React before v18
