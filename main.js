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
    image: "images/tungtung.png",
    stock: 10,
  },
  {
    name: "Ballerina Cappuccina",
    price: 620,
    type: "Italian Brainrot",
    image: "images/Ballerina_Cappuccina.png",
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
  {
    name: "Monarchy",
    price: 20,
    type: "Politics",
    image: "images/monarchy.jpg",
    stock: 10,
  },
  {
    name: "Gum",
    price: 100000,
    type: "Stuff",
    image: "images/gum.jpg",
    stock: 10,
  },
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
  {
    name: "Verity",
    price: 3434,
    type: "Verity",
    image: "images/verity.png",
    stock: 10,
  },
  {
    name: "Lord Verity",
    price: 3434,
    type: "Verity",
    image: "images/lordverity.jpe",
    stock: 10,
  },
  {
    name: "Married Verity",
    price: 3434,
    type: "Verity",
    image: "images/marriedVerity.png",
    stock: 10,
  },
  {
    name: "Cruelty",
    price: 3434,
    type: "Verity",
    image: "images/cruelty.png",
    stock: 10,
  },
  {
    name: "Falsity",
    price: 3434,
    type: "Verity",
    image: "images/falsity.jpe",
    stock: 10,
  },
  {
    name: "Lovity",
    price: 3434,
    type: "Verity",
    image: "images/lovity.png",
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

let activeFilters = [];

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

  updateProducts();
}

function removeFromCart(cart, products, item) {
  // remove item
  console.log(`\n${item} removed!`);

  const product = findItemFromString(products, item);

  if (cart[item]) {
    product.stock += 1;
    cart[item] -= 1;
    if (cart[item] <= 0) {
      delete cart[item];
    }
  }

  updateProducts();
}

function showFilters(products) {
  let filters = [];

  // for each item, if the filters array doesn't have the item's type, add the item type
  products.forEach(function (item) {
    if (!filters.includes(item.type)) {
      filters.push(item.type);
    }
  });

  return filters;
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

function updateCart(cart, products, codes) {
  document.getElementById("cart-products").replaceChildren();
  document.getElementById("cart-coupons").replaceChildren();
  document.getElementById("cart-total").textContent = "TOTAL: $--";

  const cartKeys = Object.keys(cart);
  cart.total = 0;

  console.log(cartKeys.length);
  for (
    let index = initialNumberOfKeysInCart;
    index < cartKeys.length;
    index++
  ) {
    const item = cartKeys[index];
    const quantity = cart[item];
    const product = findItemFromString(products, item);

    const itemElement = document.createElement("li");
    itemElement.textContent = `${item} x${String(quantity)} $${String(product.price * quantity)}`;
    document
      .getElementById("cart-products")
      .insertAdjacentElement("afterbegin", itemElement);

    console.log(item + " x" + String(quantity) + " $" + String(product.price));

    cart.total += product.price * quantity;
  }

  for (let index = 0; index < cart.codes.length; index++) {
    const code = cart.codes[index];
    const codeValue = codes[code];

    const codeElement = document.createElement("li");
    codeElement.textContent = `${code} -$${String(codeValue)}`;
    document
      .getElementById("cart-coupons")
      .insertAdjacentElement("afterbegin", codeElement);

    cart.total -= codeValue;
  }

  if (cart.total < 0) {
    cart.total = 0;
  }

  const totalElement = document.getElementById("cart-total");
  totalElement.textContent = `TOTAL: $${cart.total}`;
}

/*function renderProducts(products, filter) {
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
}*/

//html timeee

function clearItemsHTML() {
  const productsContainer = document.getElementById("product-container");
  productsContainer.replaceChildren();
}

function implementBuyButtonFunction() {
  const buyButtons = document.getElementsByClassName(
    "product-addtocart-button",
  );

  Array.from(buyButtons).forEach((buyButton) =>
    buyButton.addEventListener("click", function (event) {
      addToCart(cart, products, event.target.getAttribute("data-item"));
      const body = document.querySelector("body");
      const id = Date.now();
      body.insertAdjacentHTML(
        "beforeend",
        `<div class="notification" id="${id}">
          <p>${event.target.getAttribute("data-item")} added to cart!</p>
      </div>`,
      );

      const notification = document.getElementById(String(id));
      notification.style.transition = `all 0.5s ease-in 0.1s`;
      notification.style.transform = `translate(-50%,-50%)`;
      notification.style.opacity = `100%`;

      void notification.offsetHeight;

      notification.style.transform = `translate(-50%,-200%)`;
      notification.style.opacity = `0%`;

      notification.addEventListener("transitionend", function () {
        notification.remove();
      });

      console.log(notification, notification.transform);
    }),
  );
}

function implementSellButtonFunction() {
  const sellButtons = document.getElementsByClassName(
    "product-removefromcart-button",
  );

  Array.from(sellButtons).forEach((sellButton) =>
    sellButton.addEventListener("click", function (event) {
      removeFromCart(cart, products, event.target.getAttribute("data-item"));
      const body = document.querySelector("body");
      const id = Date.now();
      body.insertAdjacentHTML(
        "beforeend",
        `<div class="notification" id="${id}">
          <p>${event.target.getAttribute("data-item")} removed from cart!</p>
      </div>`,
      );

      const notification = document.getElementById(String(id));
      notification.style.transition = `all 0.5s ease-in 0.1s`;
      notification.style.transform = `translate(-50%,-50%)`;
      notification.style.opacity = `100%`;

      void notification.offsetHeight;

      notification.style.transform = `translate(-50%,-200%)`;
      notification.style.opacity = `0%`;

      notification.addEventListener("transitionend", function () {
        notification.remove();
      });

      console.log(notification, notification.transform);
    }),
  );
}

function addItemsHTML(items, filter) {
  function insertHTML(item) {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `
                  <div class="product">
                      <div class="product-text">
                          <h2>${item.name}</h2>
                          <h3>$${item.price}</h3>
                          <h4>Type: ${item.type}</h4>

                          <p>Stock: ${item.stock}</p>
                          
                          <div>
                            <p><button class="product-removefromcart-button" data-item="${item.name}">-</button> ${cart[item.name] ? cart[item.name] : 0} <button class="product-addtocart-button" data-item="${item.name}">+</button></p>
                          </div>

                      </div>
                      <div class="product-image">
                          <img src="${item.image}" alt="">
                      </div>
                  </div>
            `,
    );
  }

  // am i the goat or what
  const productsContainer = document.getElementById("product-container");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (filter) {
      if (filter.length > 0) {
        if (filter.includes(item.type)) {
          // bruh nesting if statements 😭😭😭😭😭
          insertHTML(item);
          continue;
        } else {
          continue;
        }
      }
    }

    insertHTML(item);
  }

  implementBuyButtonFunction();
  implementSellButtonFunction();
}

function updateProducts() {
  clearItemsHTML();
  addItemsHTML(products, activeFilters);
}

updateProducts();

function addFiltersHTML(items) {
  const filters = showFilters(items);
  const filterList = document.getElementById("filter-list");

  filters.forEach(function (filter) {
    const element = document.createElement("li");
    element.innerHTML = `<button data-filter="${filter}" data-on="">${filter}</button>`;
    element.className = "filter";
    filterList.insertAdjacentElement("afterbegin", element);

    console.log(element);
    element.addEventListener("click", function (event) {
      const isOn =
        event.target.getAttribute("data-on") == "true" ? true : false;
      console.log(event.target, isOn);

      switch (isOn) {
        case true: // will be false
          event.target.setAttribute("data-on", "false");
          event.target.style.backgroundColor = "#ffffff";
          activeFilters = activeFilters.filter(
            (filter) => filter != event.target.getAttribute("data-filter"),
          );
          break;

        case false: // will be true
          event.target.setAttribute("data-on", "true");
          event.target.style.backgroundColor = "#111111";
          activeFilters.push(event.target.getAttribute("data-filter"));
          break;
      }

      clearItemsHTML();
      updateProducts();
    });
  });
}

addFiltersHTML(products);

// open cart
document
  .getElementById("cart-button")
  .addEventListener("click", function (event) {
    document.getElementById("cart-container").style.visibility = "visible";
    updateCart(cart, products, codes);
  });

//close cart
document
  .getElementById("cart-exit")
  .addEventListener("click", function (event) {
    document.getElementById("cart-container").style.visibility = "hidden";
  });

//redeem code
document
  .getElementById("cart-coupon-redeem")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const codeBox = document.getElementById("cart-coupon-redeem-text-box");
    if (codes[codeBox.value] && !cart.codes.includes(codeBox.value)) {
      cart.codes.push(codeBox.value);
      updateCart(cart, products, codes);
    }
    codeBox.value = "";
  });
