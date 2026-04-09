// --- NOTIFICATIONS ---
const toastSystem = {
    show(msg) {
        let t = document.getElementById("toast");
        if(t) {
            t.innerText = msg;
            t.classList.add("show");
            setTimeout(() => t.classList.remove("show"), 2500);
        }
    }
};

// --- CART LOGIC ---
const cartCore = {
    data: JSON.parse(localStorage.getItem("mh_cart")) || [],
    save() { localStorage.setItem("mh_cart", JSON.stringify(this.data)); this.render(); },
    add(id) {
        let p = products.find(x => x.id === id);
        let item = this.data.find(x => x.id === id);
        if (item) item.qty++;
        else this.data.push({ ...p, qty: 1 });
        this.save();
        toastSystem.show("🛒 Added to Cart");
    },
    remove(id) { this.data = this.data.filter(x => x.id !== id); this.save(); },
    updateQty(id, delta) {
        let item = this.data.find(i => i.id === id);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) this.remove(id);
            else this.save();
        }
    },
    checkout() {
        if (this.data.length === 0) return alert("Cart is empty");
        let orders = JSON.parse(localStorage.getItem("mh_orders")) || [];
        orders.push({ id: Date.now(), items: this.data, date: new Date().toLocaleString() });
        localStorage.setItem("mh_orders", JSON.stringify(orders));
        this.data = []; 
        this.save();
        toastSystem.show("✅ Order Placed Successfully");
        this.toggle();
    },
    toggle() { 
        const sidebar = document.getElementById("cartSidebar");
        if(sidebar) sidebar.classList.toggle("active"); 
    },
    render() {
        const c = document.getElementById("cartItems");
        const badge = document.getElementById("cartBadge");
        const totalEl = document.getElementById("cartTotal");
        let total = 0;
        if (!c) return;
        c.innerHTML = "";
        this.data.forEach(i => {
            total += i.price * i.qty;
            c.innerHTML += `
            <div class="cart-item">
                <img src="${i.img}">
                <div class="cart-item-info">
                    <h4>${i.name}</h4>
                    <p>₹${i.price}</p>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="cartCore.updateQty(${i.id},-1)">-</button>
                        <span>${i.qty}</span>
                        <button class="qty-btn" onclick="cartCore.updateQty(${i.id},1)">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-trash remove-btn" onclick="cartCore.remove(${i.id})"></i>
            </div>`;
        });
        if(badge) badge.innerText = this.data.reduce((s, i) => s + i.qty, 0);
        if(totalEl) totalEl.innerText = "₹" + total;
    }
};

// --- UI AND FILTER LOGIC ---
const uiCore = {
    renderProducts(list) {
        const grid = document.getElementById("productGrid");
        if(!grid) return;
        
        grid.innerHTML = "";
        if (list.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 18px; padding: 40px;">No products found in this category.</p>`;
            return;
        }
        list.forEach(p => {
            let badgeHtml = p.tag ? `<div class="p-badge">${p.tag}</div>` : '';
            grid.innerHTML += `
            <div class="product-card">
                <div class="p-image">
                    ${badgeHtml}
                    <img src="${p.img}" loading="lazy">
                </div>
                <div class="p-info">
                    <h3>${p.name}</h3>
                    <div class="p-rating">${"★".repeat(p.rating)}<span style="color: #444;">${"★".repeat(5 - p.rating)}</span></div>
                    <div class="p-price">₹${p.price}</div>
                    <div class="p-actions">
                        <button class="btn btn-outline" onclick="cartCore.add(${p.id})">Add to Cart</button>
                        <button class="btn" onclick="cartCore.add(${p.id}); cartCore.toggle();">Buy Now</button>
                    </div>
                </div>
            </div>`;
        });
    },
    filterCategory(cat) {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.toggle("active", btn.innerText.includes(cat) || (cat === "All" && btn.innerText === "All Items"));
        });
        let filtered = cat === "All" ? products : products.filter(p => p.category === cat);
        this.renderProducts(filtered);
    }
};

// --- INITIALIZE ON PAGE LOAD ---
document.addEventListener("DOMContentLoaded", () => {
    // Render all products if grid exists
    if(document.getElementById("productGrid")) {
        uiCore.renderProducts(products);
    }
    // Always render cart
    cartCore.render();

    // Inline Search Logic
    const searchInput = document.getElementById("inlineSearch");
    if (searchInput) {
        searchInput.addEventListener("input", e => {
            let term = e.target.value.toLowerCase();
            let res = products.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
            uiCore.renderProducts(res);
            let arrSection = document.getElementById("arrivals");
            if (term.length > 0 && arrSection) arrSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});