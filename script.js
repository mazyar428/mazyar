* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #f7f7f5;
  color: #111;
  direction: rtl;
}

button,
input {
  font-family: inherit;
}

button {
  cursor: pointer;
}

/* NAVBAR */

.navbar {
  height: 78px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  gap: 30px;
  background: rgba(255,255,255,.94);
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(15px);
}

.logo {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 2px;
  direction: ltr;
}

.logo span {
  color: #7c3aed;
}

.search {
  flex: 1;
  max-width: 520px;
  margin: auto;
  background: #f1f1ef;
  border-radius: 15px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 10px;
}

.search span {
  font-size: 25px;
}

.search input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 15px;
  direction: rtl;
}

.nav-actions {
  display: flex;
  gap: 10px;
}

.icon-btn,
.cart-btn {
  border: 0;
  background: #f1f1ef;
  border-radius: 13px;
  height: 45px;
  padding: 0 14px;
  font-size: 19px;
}

.cart-btn b {
  background: #7c3aed;
  color: white;
  border-radius: 20px;
  padding: 2px 7px;
  font-size: 12px;
}

/* HERO */

.hero {
  margin: 35px 6%;
  min-height: 400px;
  border-radius: 30px;
  background: linear-gradient(135deg,#111 0%,#24144c 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 55px 7%;
  overflow: hidden;
}

.small-title {
  color: #b9a0ff;
  font-weight: bold;
  margin-bottom: 8px;
}

.hero h1 {
  font-size: clamp(55px,9vw,105px);
  line-height: .9;
  direction: ltr;
  letter-spacing: 5px;
}

.hero-text > p:not(.small-title) {
  max-width: 500px;
  margin: 25px 0;
  color: #ddd;
  line-height: 1.8;
  font-size: 17px;
}

.main-btn,
.checkout {
  border: 0;
  background: #8b5cf6;
  color: white;
  padding: 15px 25px;
  border-radius: 14px;
  font-weight: bold;
  font-size: 15px;
  transition: .2s;
}

.main-btn:hover,
.checkout:hover {
  transform: translateY(-3px);
  background: #a78bfa;
}

.hero-card {
  width: 280px;
  height: 280px;
  position: relative;
  display: grid;
  place-items: center;
}

.circle {
  width: 240px;
  height: 240px;
  background: #8b5cf6;
  border-radius: 50%;
}

.hero-product {
  position: absolute;
  font-size: 115px;
}

.floating-box {
  position: absolute;
  top: 5px;
  right: 0;
  background: white;
  color: #111;
  padding: 9px 15px;
  border-radius: 12px;
  font-weight: bold;
  transform: rotate(8deg);
}

/* CATEGORIES */

.categories {
  display: flex;
  gap: 10px;
  padding: 0 6%;
  overflow-x: auto;
  scrollbar-width: none;
}

.category {
  white-space: nowrap;
  border: 1px solid #ddd;
  background: white;
  padding: 12px 20px;
  border-radius: 30px;
  font-size: 14px;
}

.category.active,
.category:hover {
  background: #111;
  color: white;
  border-color: #111;
}

/* PRODUCTS */

main {
  padding: 55px 6%;
}

.section-title {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 25px;
}

.section-title p {
  color: #7c3aed;
  font-weight: bold;
  margin-bottom: 5px;
}

.section-title h2 {
  font-size: 32px;
}

#productNumber {
  color: #777;
}

.products {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
}

.product {
  background: white;
  border-radius: 20px;
  padding: 13px;
  border: 1px solid #eee;
  transition: .25s;
  position: relative;
}

.product:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 40px #00000012;
}

.product-image {
  height: 210px;
  border-radius: 15px;
  background: #f3f3f1;
  display: grid;
  place-items: center;
  font-size: 80px;
  margin-bottom: 15px;
}

.favorite {
  position: absolute;
  top: 23px;
  right: 23px;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: white;
  font-size: 20px;
}

.favorite.liked {
  color: #e11d48;
}

.product h3 {
  font-size: 17px;
  margin-bottom: 8px;
}

.product p {
  color: #777;
  font-size: 13px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.price {
  font-size: 20px;
  font-weight: 900;
  direction: ltr;
}

.add {
  border: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #111;
  color: white;
  font-size: 21px;
}

/* MODAL */

.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: #0008;
  z-index: 100;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal.show {
  display: flex;
}

.modal-box {
  background: white;
  width: min(500px,100%);
  max-height: 85vh;
  overflow: auto;
  border-radius: 25px;
  padding: 30px;
  position: relative;
}

.close {
  position: absolute;
  left: 20px;
  top: 20px;
  border: 0;
  background: #f1f1f1;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 22px;
}

.modal-box h2 {
  margin-bottom: 25px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #eee;
  padding: 13px 0;
}

.cart-item-icon {
  width: 55px;
  height: 55px;
  background: #f3f3f1;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 28px;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info strong {
  display: block;
  margin-bottom: 5px;
}

.remove {
  border: 0;
  background: #fee2e2;
  color: #b91c1c;
  padding: 7px;
  border-radius: 8px;
}

.total {
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  font-size: 18px;
}

.checkout {
  width: 100%;
}

/* EMPTY */

.empty {
  text-align: center;
  padding: 40px;
  color: #888;
}

/* FOOTER */

footer {
  margin-top: 50px;
  padding: 40px 6%;
  background: #111;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer p {
  color: #aaa;
}

/* MOBILE */

@media (max-width: 900px) {

  .products {
    grid-template-columns: repeat(2,1fr);
  }

  .hero {
    min-height: 500px;
  }

  .hero-card {
    display: none;
  }
}

@media (max-width: 600px) {

  .navbar {
    height: auto;
    padding: 15px 5%;
    flex-wrap: wrap;
    gap: 12px;
  }

  .logo {
    font-size: 23px;
  }

  .search {
    order: 3;
    flex-basis: 100%;
  }

  .hero {
    margin: 20px 4%;
    padding: 40px 25px;
  }

  .hero h1 {
    font-size: 65px;
  }

  main {
    padding: 40px 4%;
  }

  .products {
    gap: 12px;
  }

  .product-image {
    height: 160px;
    font-size: 60px;
  }

  footer {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
