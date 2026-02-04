/* =========================
   AURA 門市詳情 – 前端邏輯
   ========================= */

/* ===== 假資料（之後可換 API） ===== */

// 門市資料
const stores = [
  {
    id: 1,
    name: "AURA 台北旗艦門市",
    address: "台北市台北大道一段 1 號",
    status: "operating",
    tags: ["筆記型電腦", "配件", "零組件"],
    image: "images/store-main.png",
    products: [101, 102, 103, 104]
  },
  {
    id: 2,
    name: "AURA 信義門市",
    address: "台北市 信義路 88 號",
    status: "restocking",
    tags: ["智慧型手機", "配件"],
    image: "images/store-main.png",
    products: [103, 105]
  }
];

// 商品資料
const products = [
  {
    id: 101,
    name: "MacBook Pro",
    category: "laptop",
    categoryText: "筆記型電腦",
    price: 68000
  },
  {
    id: 102,
    name: "ASUS ZenBook",
    category: "laptop",
    categoryText: "筆記型電腦",
    price: 42000
  },
  {
    id: 103,
    name: "無線滑鼠",
    category: "accessory",
    categoryText: "配件",
    price: 1290
  },
  {
    id: 104,
    name: "RTX 顯示卡",
    category: "component",
    categoryText: "零組件",
    price: 18900
  },
  {
    id: 105,
    name: "藍牙耳機",
    category: "accessory",
    categoryText: "配件",
    price: 2990
  }
];

/* =========================
   DOM
   ========================= */
const storeNameEl = document.querySelector(".store-name");
const storeAddressEl = document.querySelector(".store-address");
const storeStatusEl = document.querySelector(".store-status");
const storeTagsEl = document.querySelector(".store-tags");
const storeImageEl = document.querySelector(".store-visual img");

const productGrid = document.getElementById("productGrid");
const searchInput = document.querySelector(".filter-search");
const categorySelect = document.getElementById("categoryFilter");

/* =========================
   取得 storeId
   ========================= */
const params = new URLSearchParams(window.location.search);
const storeId = Number(params.get("storeId"));

const store = stores.find(s => s.id === storeId);

if (!store) {
  alert("找不到此門市");
}

/* =========================
   Render Store Info
   ========================= */
function renderStoreInfo() {
  storeNameEl.textContent = store.name;
  storeAddressEl.textContent = store.address;
  storeImageEl.src = store.image;

  storeStatusEl.textContent =
    store.status === "operating" ? "營運中" :
    store.status === "restocking" ? "補貨中" : "維護中";

  storeTagsEl.innerHTML = store.tags
    .map(tag => `<span>${tag}</span>`)
    .join("");
}

/* =========================
   商品處理
   ========================= */
const storeProducts = products.filter(p =>
  store.products.includes(p.id)
);

function renderProducts(list) {
  productGrid.innerHTML = "";

  if (list.length === 0) {
    productGrid.innerHTML = `<p style="color:#888">沒有符合條件的商品</p>`;
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p class="category">${product.categoryText}</p>
      <p class="price">NT$ ${product.price.toLocaleString()}</p>
      <button onclick="goToProduct(${product.id})">
        查看商品 →
      </button>
    `;

    productGrid.appendChild(card);
  });
}

/* =========================
   Filter Logic
   ========================= */
function applyProductFilters() {
  const keyword = searchInput.value.trim();
  const category = categorySelect.value;

  let result = [...storeProducts];

  if (category !== "all") {
    result = result.filter(p => p.category === category);
  }

  if (keyword) {
    result = result.filter(p =>
      p.name.includes(keyword)
    );
  }

  renderProducts(result);
}

/* =========================
   Events
   ========================= */
searchInput.addEventListener("input", applyProductFilters);
categorySelect.addEventListener("change", applyProductFilters);

/* =========================
   Navigation
   ========================= */
function goToProduct(productId) {
  window.location.href = `product-detail.html?productId=${productId}`;
}

/* =========================
   Init
   ========================= */
renderStoreInfo();
renderProducts(storeProducts);
