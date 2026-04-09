function loadOrders() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  let container = document.getElementById("orders");

  if (!container) return;

  container.innerHTML = "";

  orders.forEach(order => {
    container.innerHTML += `
      <div>
        <h3>Order ID: ${order.id}</h3>
        <p>Name: ${order.name}</p>
      </div>
    `;
  });
}

window.onload = loadOrders;