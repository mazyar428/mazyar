const products = [
  {id:1,name:"iPhone Pro",category:"phone",price:999,icon:"📱"},
  {id:2,name:"Smart Watch",category:"tech",price:149,icon:"⌚"},
  {id:3,name:"Premium Hoodie",category:"fashion",price:59,icon:"👕"},
  {id:4,name:"Wireless Headphones",category:"tech",price:129,icon:"🎧"},
  {id:5,name:"Laptop Pro",category:"tech",price:1299,icon:"💻"},
  {id:6,name:"Modern Shoes",category:"fashion",price:89,icon:"👟"},
  {id:7,name:"Home Speaker",category:"home",price:79,icon:"🔊"},
  {id:8,name:"Professional Camera",category:"tech",price:699,icon:"📷"}
];

let cart = [];
let favorites = new Set();
let currentCategory = "all";

function renderProducts(list = products) {
  const container = document.getElementById("products");

  if (list.length === 0) {
    container.innerHTML = `<div class="empty">هیچ کاڵایەک نەدۆزرایەوە 😔</div>`;
    return;
  }

  container.innerHTML = list.map(product => `
    <div class="product">

      <button
        class="favorite ${favorites.has(product.id) ? "liked" : ""}"
        onclick="toggleFavorite(${product.id})">
        ${favorites.has(product.id) ? "♥" : "♡"}
      </button>

      <div class="product-image">
        ${product.icon}
      </div>

      <h3>${product.name}</h3>

      <p>کاڵای کوالیتی بەرز لە MAZYAR</p>

      <div class="price-row">
        <span class="price">$${product.price}</span>

        <button
          class="add"
          onclick="addToCart(${product.id})">
          +
        </button>
      </div>

    </div>
  `).join("");

  document.getElementById("productNumber").textContent =
    `${list.length} کاڵا`;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  cart.push(product);

  document.getElementById("cartCount").textContent =
    cart.length;

  showMessage("کاڵاکە زیادکرا بۆ سەبەتە 🛒");
}

function removeFromCart(index) {
  cart.splice(index, 1);

  document.getElementById("cartCount").textContent =
    cart.length;

  renderCart();
}

function renderCart() {
  const box = document.getElementById("cartItems");

  if (cart.length === 0) {
    box.innerHTML =
      `<div class="empty">سەبەتەکەت بەتاڵە 🛒</div>`;
  } else {

    box.innerHTML = cart.map((item,index) => `
      <div class="cart-item">

        <div class="cart-item-icon">
          ${item.icon}
        </div>

        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span>$${item.price}</span>
        </div>

        <button
          class="remove"
          onclick="removeFromCart(${index})">
          سڕینەوە
        </button>

      </div>
    `).join("");
  }

  const total = cart.reduce(
    (sum,item) => sum + item.price,
    0
  );

  document.getElementById("cartTotal").textContent =
    `$${total}`;
}

function openCart() {
  renderCart();

  document.getElementById("cartModal")
    .classList.add("show");
}

function closeCart() {
  document.getElementById("cartModal")
    .classList.remove("show");
}

function toggleFavorite(id) {

  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }

  applyFilters();
}

function showFavorites() {

  const favoriteProducts =
    products.filter(p => favorites.has(p.id));

  document.getElementById("productsSection")
    .scrollIntoView({behavior:"smooth"});

  renderProducts(favoriteProducts);
}

function filterProducts(category,button) {

  currentCategory = category;

  document.querySelectorAll(".category")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");

  applyFilters();
}

function applyFilters() {

  const search =
    document.getElementById("searchInput")
      .value
      .toLowerCase();

  const list = products.filter(product => {

    const categoryMatch =
      currentCategory === "all" ||
      product.category === currentCategory;

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search);

    return categoryMatch && searchMatch;
  });

  renderProducts(list);
}

document
  .getElementById("searchInput")
  .addEventListener("input",applyFilters);

function scrollToProducts() {

  document.getElementById("productsSection")
    .scrollIntoView({behavior:"smooth"});
}

function checkout() {

  if (cart.length === 0) {
    alert("سەبەتەکەت بەتاڵە!");
    return;
  }

  alert("سوپاس بۆ کڕین لە MAZYAR ❤️");
}

function showMessage(text) {

  const message =
    document.createElement("div");

  message.textContent = text;

  Object.assign(message.style,{
    position:"fixed",
    bottom:"25px",
    left:"50%",
    transform:"translateX(-50%)",
    background:"#111",
    color:"white",
    padding:"14px 22px",
    borderRadius:"14px",
    zIndex:"200",
    fontWeight:"bold"
  });

  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  },1800);
}

renderProducts();
<script src="script.js"></script>
