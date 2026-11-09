const products = [
  {
    name: "Gubby",
    price: 67,
    type: "Gubby",
    image: "images/gubby.png",
    stock: 10,
  },
  {
    name: "Gooby",
    price: 41,
    type: "Gubby",
    image: "images/gooby.jpg",
    stock: 10,
  },
  {
    name: "Goby",
    price: 61,
    type: "Gubby",
    image: "images/goby.png",
    stock: 10,
  },
  {
    name: "Fairs Gooby",
    price: 1000,
    type: "Gubby",
    image: "images/fairsGooby.jpg",
    stock: 10,
  },
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
  {
    name: "Mr Whalen 1",
    price: 1,
    type: "Whalen",
    image: "images/whalen1.jpg",
    stock: 10,
  },
  {
    name: "Mr Whalen 2",
    price: 2,
    type: "Whalen",
    image: "images/whalen2.jpg",
    stock: 10,
  },
  {
    name: "Mr Whalen 3",
    price: 3,
    type: "Whalen",
    image: "images/whalen3.png",
    stock: 10,
  },
  {
    name: "Mr Whalen 4",
    price: 4,
    type: "Whalen",
    image: "images/woodWhalen.jpg",
    stock: 10,
  },
  {
    name: "Justin Lin",
    price: 100000000000000000009999999999991,
    type: "Justin",
    image: "",
    stock: 10,
  },
  { name: "Other Justin", price: 100000, type: "Justin", image: "", stock: 10 },
  { name: "Justin Choy", price: 6767, type: "Justin", image: "", stock: 10 },
  {
    name: "Sasuke",
    price: 25,
    type: "Tuff",
    image: "images/sasuke-ching-dat-mandem-style.gif",
    stock: 10,
  },
  {
    name: "BP Ronaldo",
    price: 52,
    type: "BP",
    image: "images/cristiano-ronaldo-ronaldo.gif",
    stock: 10,
  },
  { name: "Monarchy", price: 20, type: "Politics", image: "", stock: 10 },
  { name: "Gum", price: 100000, type: "Stuff", image: "", stock: 10 },
  { name: "Gas", price: 1000000000, type: "Stuff", image: "", stock: 10 },
  {
    name: "Bugging Guy",
    price: 1023,
    type: "Tuff",
    image: "images/b-b-buggin.jpg",
    stock: 10,
  },
  {
    name: "Nintendo is Epic",
    price: 3434,
    type: "Not Tuff",
    image: "images/nintendo-is-epic-pc-sucks.gif",
    stock: 10,
  },
];

const initialNumberOfKeysInCart = 2;
let cart = {
  total: 0,
  codes: [],
};

const codes = {
  CHINGDATMANDEMSTYLE: 10,
  OBSESSIONDANCE: 20,
  VERITY40: 40,
};

function redeemCode(cart, code) {
  if (codes[code]) {
    console.log(`\nCode Redeemed: -$${codes[code]}`);
    cart.codes.push(code);
  } else {
    console.log("\nINVALID CODE");
  }
}

// IDEA: make it easy to add and remove from cart and make all the heavy lifting go to calculating the cart

function findItemFromString(products, item) {
  const product = products.find((x) => x.name == item);
  return product;
}

function addToCart(cart, products, item) {
  const product = findItemFromString(products, item);

  if (!product) {
    console.log(`${item} does not exist`);
    return;
  }

  if (product.stock <= 0) {
    console.log(`Can't add ${item} to cart sorry!`);
    return;
  }

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

function calculateTotal(cart, products) {
  cart.total = 0;
  const cartKeys = Object.keys(cart);

  for (
    let index = initialNumberOfKeysInCart;
    index < cartKeys.length;
    index++
  ) {
    const item = cartKeys[index];
    const quantity = cart[item];
    const product = findItemFromString(products, item);

    cart.total += product.price * quantity;
  }

  for (let index = 0; index < cart.codes.length; index++) {
    const code = cart.codes[index];
    const codeValue = codes[code];
    cart.total -= codeValue;
  }
}

function viewAndCalculateTotal(cart, products) {
  calculateTotal(cart, products);
  console.log("\nTOTAL:\n$" + String(cart.total));
}

function viewCart(cart, products) {
  console.log("\n\n\nCart=============");
  // for each item in the cart, look through the products array and find the item.
  // add its price to the total
  const cartKeys = Object.keys(cart);

  for (
    let index = initialNumberOfKeysInCart;
    index < cartKeys.length;
    index++
  ) {
    const item = cartKeys[index];
    const quantity = cart[item];
    const product = findItemFromString(products, item);

    console.log(item + " x" + String(quantity) + " $" + String(product.price));
  }

  /*cart.forEach((item) => {
    const product = products.find((x) => item == x.name);
    console.log(product.name + " $" + String(product.price));
    total += product.price;
  });
  console.log("\nTOTAL:\n$" + String(total));*/
}

function showReciept(cart, products, codes) {
  console.log("\nCart=============");
  const cartKeys = Object.keys(cart);

  cart.total = 0;

  for (
    let index = initialNumberOfKeysInCart;
    index < cartKeys.length;
    index++
  ) {
    const item = cartKeys[index];
    const quantity = cart[item];
    const product = findItemFromString(products, item);

    console.log(item + " x" + String(quantity) + " $" + String(product.price));

    cart.total += product.price * quantity;
  }

  console.log("");

  for (let index = 0; index < cart.codes.length; index++) {
    const code = cart.codes[index];
    const codeValue = codes[code];
    console.log(code + " -$" + String(codeValue));
    cart.total -= codeValue;
  }

  console.log("\nTOTAL:\n$" + String(cart.total));
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

//html timeee

function addItemsHTML(items, filter) {
  const productsContainer = document.getElementById("product-container");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log(productsContainer, item.name, item.image, item.stock);
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="product">
                <div class="product-text">
                    <h2>${item.name}</h2>
                    <h3>$${item.price}</h3>
                    <h4>Type: ${item.type}</h4>

                    <p>Stock: ${item.stock}</p>
                    <button class="product-addtocart-button" data-item="${item.name}">Buy</button>

                </div>
                <div class="product-image">
                    <img src="${item.image}" alt="">
                </div>
            </div>
      `,
    );
  }
}


addItemsHTML(products);

const buyButtons = document.getElementsByClassName("product-addtocart-button");

Array.from(buyButtons).forEach((buyButton) => buyButton.addEventListener("click",function(event){
  addToCart(cart,products,event.target.getAttribute("data-item"));
  console.log(event.target.getAttribute("data-item"));
}
) )
