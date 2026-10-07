const products = {
  // object of product name, price, and type
  Gubby: { price: 67, type: "Gubby" },
  Gooby: { price: 41, type: "Gubby" },
  Goby: { price: 61, type: "Gubby" },
  "Tung Tung Tung Sahur": { price: 420, type: "Italian Brainrot" },
  "Tralaleo Tralala": { price: 620, type: "Italian Brainrot" },
};

let cart = [];

function addToCart(cart, item) {
  console.log(`${item} added!`);
  cart.append(products[item]);
}

function removeFromCart(cart, item) {
  console.log(`${item} removed!`);
  cart.pop(products[item]);
}

function viewCart(cart) {
  console.log(cart);
}

function renderProducts(products, filter) {
  console.log("\n\n\nPRODUCTS=========");

  const keyToIndexTable = Object.keys(products);
  for (let index; index < Object.keys(products).length; index++) {
    products[keyToIndexTable[index]];
  }
}

renderProducts(products);
renderProducts(products, "Italian Brainrot");
