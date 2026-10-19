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
  { name: "Gubby", price: 67, type: "Gubby", image: "" },
  { name: "Gooby", price: 41, type: "Gubby", image: "" },
  { name: "Goby", price: 61, type: "Gubby", image: "" },
  { name: "Fairs Gooby", price: 1000, type: "Gubby", image: "" },
  {
    name: "Tung Tung Tung Sahur",
    price: 420,
    type: "Italian Brainrot",
    image: "",
  },
  { name: "Tralaleo Tralala", price: 620, type: "Italian Brainrot", image: "" },
  { name: "Mr Whalen 1", price: 1, type: "Whalen", image: "" },
  { name: "Mr Whalen 2", price: 2, type: "Whalen", image: "" },
  { name: "Mr Whalen 3", price: 3, type: "Whalen", image: "" },
  { name: "Mr Whalen 4", price: 4, type: "Whalen", image: "" },
  {
    name: "Justin Lin",
    price: 100000000000000000009999999999991,
    type: "Justin",
    image: "",
  },
  { name: "Other Justin", price: 100000, type: "Justin", image: "" },
  { name: "Justin Choy", price: 6767, type: "Justin", image: "" },
  { name: "Sasuke", price: 25, type: "Tuff", image: "" },
  { name: "BP Ronaldo", price: 52, type: "BP", image: "" },
  { name: "Monarchy", price: 20, type: "Politics", image: "" },
  { name: "Gum", price: 100000, type: "Stuff", image: "" },
  { name: "Gas", price: 1000000000, type: "Stuff", image: "" },
  { name: "Bugging Guy", price: 1023, type: "Tuff", image: "" },
  { name: "Nintendo is Epic", price: 3434, type: "Not Tuff", image: "" },
];

let cart = [];

// IDEA: make it easy to add and remove from cart and make all the heavy lifting go to calculating the cart

function addToCart(cart, item) {
  //add just the name of the item
  console.log(`\n${item} added!`);
  cart.push(item);
}

function removeFromCart(cart, item) {
  // remove item
  console.log(`\n${item} removed!`);
  cart.splice(cart.indexOf(item), 1);
}

function showFilters(products) {
  let filters = [];
  console.log("\n\nFilters=============");

  // for each item, if the filters array doesn't have the item's type, add the item type
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
  // for each item in the cart, look through the products array and find the item.
  // add its price to the total
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
addToCart(cart, "Justin Lin");
removeFromCart(cart, "Tralaleo Tralala");

showFilters(productsArray);
viewCartAndTotal(cart, productsArray);
