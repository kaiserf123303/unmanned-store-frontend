/* =========================
   AURA 產品頁 – 前端邏輯
   ========================= */

/* ===== 商品資料（之後可換 API） ===== */
const products = [
  {
    id: 101,
    name: "AURA 遊戲控制器",
    brand: "AURA",
    category: "配件",
    price: 1390,
    image: "images/products/controller.png"
  },
  {
    id: 102,
    name: "AURA Pods",
    brand: "AURA",
    category: "配件",
    price: 990,
    image: "images/products/earbuds.png"
  },
  {
    id: 103,
    name: "AURA 鍵盤",
    brand: "AURA",
    category: "配件",
    price: 1590,
    image: "images/products/keyboard.png"
  },
  {
    id: 104,
    name: "AURA 滑鼠",
    brand: "AURA",
    category: "配件",
    price: 790,
    image: "images/products/mouse.png"
  },
  {
    id: 105,
    name: "AURA 筆記型電腦",
    brand: "AURA",
    category: "筆記型電腦",
    price: 32900,
    image: "images/products/laptop.png"
  },
  {
    id: 106,
    name: "AURA 顯示卡",
    brand: "AURA",
    category: "零組件",
    price: 19900,
    image: "images/products/gpu.png"
  }
];

/* ===== DOM ===== */
const grid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const brandFilter = document.getElementById("brandFilter");
const searchInput = document.getElementById("searchInput");
const sortFilter = document.getElementById("sortFilter");

/* ===== 商品渲染 ===== */
function renderProducts(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = "<p>找不到符合條件的商品</p>";
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="category">${product.category}</p>
      <p class="price">NT$${product.price.toLocaleString()}</p>
      <button>查看詳情</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      window.location.href =
        `product-detail.html?productId=${product.id}`;
    });

    grid.appendChild(card);
  });
}

/* ===== 篩選邏輯 ===== */
function applyFilters() {
  let result = [...products];

  if (categoryFilter.value) {
    result = result.filter(p => p.category === categoryFilter.value);
  }

  if (brandFilter.value) {
    result = result.filter(p => p.brand === brandFilter.value);
  }

  const keyword = searchInput.value.trim().toLowerCase();
  if (keyword) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.brand.toLowerCase().includes(keyword)
    );
  }

  if (sortFilter.value === "priceAsc") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortFilter.value === "priceDesc") {
    result.sort((a, b) => b.price - a.price);
  }

  renderProducts(result);
}

/* ===== 事件 ===== */
categoryFilter.addEventListener("change", applyFilters);
brandFilter.addEventListener("change", applyFilters);
sortFilter.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);

/* ===== 初始化 ===== */
renderProducts(products);
