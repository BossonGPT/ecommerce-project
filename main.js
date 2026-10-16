const products = {
  // object of product name, price, and type
  Gubby: { price: 67, type: "Gubby" },
  Gooby: { price: 41, type: "Gubby" },
  Goby: { price: 61, type: "Gubby" },
  FairsGooby: { price: 1000, type: "Gubby" },
  "Tung Tung Tung Sahur": { price: 420, type: "Italian Brainrot" },
  "Tralaleo Tralala": { price: 620, type: "Italian Brainrot" },
  "Mr Whalen 1": { price: 1, type: "Whalen" },
  "Mr Whalen 2": { price: 2, type: "Whalen" },
  "Mr Whalen 3": { price: 3, type: "Whalen" },
  "Mr Whalen 4": { price: 4, type: "Whalen" },
  "Mr Whalen 5": { price: 5, type: "Whalen" },
  "Justin Lin": { price: 100000000000000000009999999999991, type: "Justin" },
  "Other Justin": { price: 100000, type: "Justin" },
  "Justin Choy": { price: 6767, type: "Justin" },
  Sasuke: { price: 25, type: "Tuff" },
  "BP Ronaldo": { price: 52, type: "BP" },
  Monarchy: { price: 20, type: "Politics" },
  Capitalism: { price: 16, type: "Politics" },
  "Bob Ross": { price: 894, type: "Tuff" },
  Gum: { price: 100000, type: "Stuff" },
  Gas: { price: 1000000000, type: "Stuff" },
  "Bugging Guy": { price: 1023, type: "Tuff" },
  "Nintendo is Epic": { price: 3434, type: "Not Tuff" },
};

const productsArray = [
  { name: "Gubby", price: 67, type: "Gubby" },
  { name: "Gooby", price: 41, type: "Gubby" },
  { name: "Goby", price: 61, type: "Gubby" },
  { name: "FairsGooby", price: 1000, type: "Gubby" },
  { name: "Tung Tung Tung Sahur", price: 420, type: "Italian Brainrot" },
  { name: "Tralaleo Tralala", price: 620, type: "Italian Brainrot" },
  { name: "Mr Whalen 1", price: 1, type: "Whalen" },
  { name: "Mr Whalen 2", price: 2, type: "Whalen" },
  { name: "Mr Whalen 3", price: 3, type: "Whalen" },
  { name: "Mr Whalen 4", price: 4, type: "Whalen" },
  { name: "Mr Whalen 5", price: 5, type: "Whalen" },
  {
    name: "Justin Lin",
    price: 100000000000000000009999999999991,
    type: "Justin",
  },
  { name: "Other Justin", price: 100000, type: "Justin" },
  { name: "Justin Choy", price: 6767, type: "Justin" },
  { name: "Sasuke", price: 25, type: "Tuff" },
  { name: "BP Ronaldo", price: 52, type: "BP" },
  { name: "Monarchy", price: 20, type: "Politics" },
  { name: "Capitalism", price: 16, type: "Politics" },
  { name: "Bob Ross", price: 894, type: "Tuff" },
  { name: "Gum", price: 100000, type: "Stuff" },
  { name: "Gas", price: 1000000000, type: "Stuff" },
  { name: "Bugging Guy", price: 1023, type: "Tuff" },
  { name: "Nintendo is Epic", price: 3434, type: "Not Tuff" },
];

let cart = [];

// IDEA: make it easy to add and remove from cart and make all the heavy lifting go to calculating the cart

function addToCart(cart, item) {
  console.log(`\n${item} added!`);
  cart.push(item);
}

function removeFromCart(cart, item) {
  console.log(`\n${item} removed!`);
  cart.splice(cart.indexOf(item), 1); // pop doesnt take in an arguement fix ts
}

function showFilters(products) {
  let filters = [];
  console.log("\n\nFilters=============");
  products.forEach(function (item) {
    if (!filters.includes(item.type)) {
      console.log(item.type);
      filters.push(item.type);
    }
  });
}

function viewCartAndTotal(cart, products) {
  console.log("\n\n\nCart=============");
  let total = 0;
  cart.forEach((item) => {
    const product = products.find((x) => item == x.name);
    console.log(product.name + " $" + String(product.price));
    total += product.price;
  });
  console.log("\nTOTAL:\n$" + String(total));
}

function renderProducts(products, filter) {
  console.log("\n\n\nPRODUCTS=============");

  products.forEach(function (item) {
    if (filter) {
      if (item.type == filter) {
        console.log(item.name + " $" + String(item.price));
      }
    } else {
      console.log(item.name + " $" + String(item.price));
    }
  });
}

renderProducts(productsArray);
addToCart(cart, "Gubby");
addToCart(cart, "Tralaleo Tralala");
addToCart(cart, "Justin Lin");
removeFromCart(cart, "Tralaleo Tralala");

showFilters(productsArray);
viewCartAndTotal(cart, productsArray);
