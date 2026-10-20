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
  { name: "Gubby", price: 67, type: "Gubby", image: "", stock: 10 },
  { name: "Gooby", price: 41, type: "Gubby", image: "", stock: 10 },
  { name: "Goby", price: 61, type: "Gubby", image: "", stock: 10 },
  { name: "Fairs Gooby", price: 1000, type: "Gubby", image: "", stock: 10 },
  {
    name: "Tung Tung Tung Sahur",
    price: 420,
    type: "Italian Brainrot",
    image: "",
    stock: 10,
  },
  {
    name: "Tralaleo Tralala",
    price: 620,
    type: "Italian Brainrot",
    image: "",
    stock: 10,
  },
  { name: "Mr Whalen 1", price: 1, type: "Whalen", image: "", stock: 10 },
  { name: "Mr Whalen 2", price: 2, type: "Whalen", image: "", stock: 10 },
  { name: "Mr Whalen 3", price: 3, type: "Whalen", image: "", stock: 10 },
  { name: "Mr Whalen 4", price: 4, type: "Whalen", image: "", stock: 10 },
  {
    name: "Justin Lin",
    price: 100000000000000000009999999999991,
    type: "Justin",
    image: "",
    stock: 10,
  },
  { name: "Other Justin", price: 100000, type: "Justin", image: "", stock: 10 },
  { name: "Justin Choy", price: 6767, type: "Justin", image: "", stock: 10 },
  { name: "Sasuke", price: 25, type: "Tuff", image: "", stock: 10 },
  { name: "BP Ronaldo", price: 52, type: "BP", image: "", stock: 10 },
  { name: "Monarchy", price: 20, type: "Politics", image: "", stock: 10 },
  { name: "Gum", price: 100000, type: "Stuff", image: "", stock: 10 },
  { name: "Gas", price: 1000000000, type: "Stuff", image: "", stock: 10 },
  { name: "Bugging Guy", price: 1023, type: "Tuff", image: "", stock: 10 },
  {
    name: "Nintendo is Epic",
    price: 3434,
    type: "Not Tuff",
    image: "",
    stock: 10,
  },
];

let cart = {
  total: 0,
};

const codes = {
  CHINGDATMANDEMSTYLE: 10,
  OBSESSIONDANCE: 20,
  VERITY40: 40,
};

function checkAndApplyDiscountCodes(cart, code) {
  if (codes[code]) {
    console.log("\nYayayay Code");
    cart.total = cart.total - codes[code];
  } else {
    console.log("\nBooo no code");
  }
}

// IDEA: make it easy to add and remove from cart and make all the heavy lifting go to calculating the cart

function findItemFromString(product, item) {
  const product = products.find((x) => x.name == item);
  return product;
}

function addToCart(cart, products, item) {
  const product = findItemFromString(products, item);
  product.stock -= 1;

  //add just the name of the item
  console.log(`\n${item} added!`);
  if (cart[item]) {
    cart[item] += 1;
  } else {
    cart[item] = 1;
  }
}

function removeFromCart(cart, products, item) {
  // remove item
  console.log(`\n${item} removed!`);

  const product = findItemFromString(products, item);
  product.stock += 1;

  if (cart[item]) {
    cart[item] -= 1;
    if (cart[item] <= 0) {
      delete cart[item];
    }
  }
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

function showTotal(cart) {
  console.log("\nTOTAL:\n$" + String(cart.total));
}

function viewCart(cart, products) {
  console.log("\n\n\nCart=============");
  // for each item in the cart, look through the products array and find the item.
  // add its price to the total
  cart.total = 0;
  const cartKeys = Object.keys(cart);

  for (let index = 1; index < cartKeys.length; index++) {
    const item = cartKeys[index];
    const quantity = cart[item];
    const product = findItemFromString(products, item);

    console.log(item + " x" + String(quantity) + " $" + String(product.price));
    cart.total += product.price * quantity;
  }

  /*cart.forEach((item) => {
    const product = products.find((x) => item == x.name);
    console.log(product.name + " $" + String(product.price));
    total += product.price;
  });
  console.log("\nTOTAL:\n$" + String(total));*/
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
addToCart(cart, products, "Gubby");
addToCart(cart, products, "Tralaleo Tralala");
addToCart(cart, products, "Justin Lin");
addToCart(cart, products, "Justin Lin");
removeFromCart(cart, products, "Justin Lin");
removeFromCart(cart, products, "Justin Lin");

showFilters(productsArray);
viewCart(cart, productsArray);
showTotal(cart);
checkAndApplyDiscountCodes(cart, "CHINGDATMANDEMSTYLE");
showTotal(cart);
