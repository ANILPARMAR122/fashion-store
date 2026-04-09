function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
  let cart = getCart();
  let product = products.find(p => p.id == id);

  let existing = cart.find(item => item.id == id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  alert("Added to cart");
}

function removeFromCart(id) {
  let cart = getCart().filter(item => item.id != id);
  saveCart(cart);
  loadCart();
}

function updateQty(id, qty) {
  let cart = getCart();

  cart.forEach(item => {
    if (item.id == id) {
      item.quantity = parseInt(qty);
    }
  });

  saveCart(cart);
  loadCart();
}

function loadCart() {
  let cart = getCart();
  let container = document.getElementById("cart-items");
  let total = 0;

  if (!container) return;

  container.innerHTML = "";

  cart.forEach(item => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div>
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <input type="number" min="1" value="${item.quantity}"
        onchange="updateQty(${item.id}, this.value)">
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "₹" + total;
}