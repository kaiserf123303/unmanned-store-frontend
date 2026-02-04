/* =========================
   AURA 門市詳情頁（正式版）
   - 使用共用 STORES / PRODUCTS
========================= */

/* =========================
   DOM
========================= */
const storeNameEl = document.querySelector(".store-name");
const storeAddressEl = document.querySelector(".store-address");
const storeStatusEl = document.querySelector(".store-status");
const storeTagsEl = document.querySelector(".store-tags");
const storeImageEl = document.querySelector(".store-visual img");

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

/* =========================
   取得 storeId
========================= */
const params = new URLSearchParams(window.location.search);
const storeId = Number(params.get("storeId"));

const store = STORES.find(s => s.id === storeId);

if (!store) {
  alert("找不到此門市");
}

/* =========================
   狀態文字
========================= */
function getStatusText(status) {
  switch (status) {
    case "operating": return "營運中";
    case "restocking": return "補貨中";
    case "maintenance": return "維護中";
    default: return "";
  }
}

/* =========================
   Render Store Info
========================= */
function renderStoreInfo() {
  storeNameEl.textContent = store.name;
  storeAddressEl.textContent = store.address;
  storeImageEl.src = store.image;

  storeStatusEl.textContent = getStatusText(store.status);
  storeStatusEl.className = `store-status ${store.status}`;

  storeTagsEl.innerHTML = store.tags
    .map(tag => `<span>${tag}</span>`)
    .join("");
}

/* =========================
   取得此門市販售商品
   （依 tags / category 關聯）
========================= */
const storeProducts = PRODUCTS.filter(p =>
  store.tags.includes(p.category) ||
  store.tags.some(tag => p.tags?.includes(tag))
);

/* =========================
   初始化分類選單
========================= */
[...new Set(storeProducts.map(p => p.category))].forEach(cat => {
  categoryFilter.innerHTML += `<option value="${cat}">${cat}</option>`;
});

/* =========================
   Render Products
========================= */
function renderProducts(list) {
  productGrid.innerHTML = "";

  if (list.length === 0) {
    productGrid.innerHTML = `<p style="color:#888">沒有符合條件的商品</p>`;
    return;
  }

  list.forEach(p => {
    productGrid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">NT$ ${p.price.toLocaleString()}</p>
        <button onclick="goToProduct(${p.id})">
          查看商品 →
        </button>
      </div>
    `;
  });
}

/* =========================
   Filter Logic
========================= */
function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  let result = [...storeProducts];

  if (category) {
    result = result.filter(p => p.category === category);
  }

  if (keyword) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.brand?.toLowerCase().includes(keyword)
    );
  }

  renderProducts(result);
}

/* =========================
   Navigation
========================= */
function goToProduct(productId) {
  location.href = `product-detail.html?productId=${productId}`;
}

/* =========================
   Events
========================= */
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);

/* =========================
   Init
========================= */
renderStoreInfo();
renderProducts(storeProducts);
