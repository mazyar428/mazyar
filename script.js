```javascript
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 29.99,
    image: "https://placehold.co/500x500?text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 39.99,
    image: "https://placehold.co/500x500?text=Smart+Watch"
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: 24.99,
    image: "https://placehold.co/500x500?text=Speaker"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 19.99,
    image: "https://placehold.co/500x500?text=Gaming+Mouse"
  }
];

let cart = [];

const productsContainer = document.getElementById("products");
const search = document.getElementById("search");

function showProducts(list = products) {
  productsContainer.innerHTML = "";

  list.forEach(product => {
    productsContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Fast delivery available</p>
        <div class="price">$${product.price.toFixed(2)}</div>

        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product) return;

  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;

  const items = document.getElementById("cartItems");

  items.innerHTML = "";

  let total = 0;

  cart.forEach((product, index) => {
    total += product.price;

    items.innerHTML += `
      <div class="cartItem">
        <span>${product.name}</span>
        <strong>$${product.price.toFixed(2)}</strong>

        <button onclick="removeFromCart(${index})">
          ✕
        </button>
      </div>
    `;
  });

  document.getElementById("total").textContent =
    total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  document.getElementById("cartModal").classList.add("show");
}

function closeCart() {
  document.getElementById("cartModal").classList.remove("show");
}

function checkout() {

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  alert(
    "Order total: $" +
    total.toFixed(2) +
    "\n\nNext step: connect a real payment gateway."
  );
}

search.addEventListener("input", function () {

  const value = search.value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  showProducts(filtered);
});

showProducts();
```
