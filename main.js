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
  BuggingGuy: { price: 1023, type: "Tuff" },
};

let cart = [];

function addToCart(cart, item) {
  console.log(`\n${item} added!`);
  cart.push(item);
}

function removeFromCart(cart, item) {
  console.log(`\n${item} removed!`);
  cart.pop(item); // pop doesnt take in an arguement fix ts
}

function showFilters(products) {
  let filters = [];
  console.log("\n\nFilters========");
  const keyToIndexTable = Object.keys(products);
  for (let index = 0; index < Object.keys(products).length; index++) {
    const productKey = keyToIndexTable[index];
    const product = products[productKey];

    if (filters.find((x) => x == product.type)) {
      continue;
    }

    console.log(product.type);
    filters.push(product.type);
  }
}

function viewCartAndTotal(cart, products) {
  console.log("\n\n\nCart=============");
  let total = 0;
  cart.forEach((item) => {
    console.log(item + " $" + products[item].price);
    total += products[item].price;
  });
  console.log("\nTOTAL:\n$" + String(total));
}

function renderProducts(products, filter) {
  console.log("\n\n\nPRODUCTS=========");

  const keyToIndexTable = Object.keys(products);
  for (let index = 0; index < Object.keys(products).length; index++) {
    const productKey = keyToIndexTable[index];
    const product = products[productKey];

    if (filter) {
      if (products[keyToIndexTable[index]].type == filter) {
        console.log(`${productKey} $${product.price}`);
      }
      continue;
    }

    console.log(`${productKey} $${product.price}`);
  }
}

renderProducts(products);
addToCart(cart, "Gubby");
addToCart(cart, "Tralaleo Tralala");
addToCart(cart, "Justin Lin");
removeFromCart(cart, "Gubby");

showFilters(products);
viewCartAndTotal(cart, products);
