/* =========================
   Products Page Logic
   - 分類會動態限制品牌選項
   - 多條件篩選 + 排序 + 分頁
========================= */

const grid = document.getElementById("productGrid");
const pagination = document.getElementById("pagination");

const categoryFilter = document.getElementById("categoryFilter");
const brandFilter = document.getElementById("brandFilter");
const searchInput = document.getElementById("searchInput");
const sortFilter = document.getElementById("sortFilter");

const PER_PAGE = 6;
let currentPage = 1;
let filtered = [...PRODUCTS];

/* ==================================================
   初始化 Select 選單
================================================== */
function initCategoryOptions() {
  const categories = [...new Set(PRODUCTS.map(p => p.category))];
  categoryFilter.innerHTML = `<option value="">所有分類</option>`;
  categories.forEach(c => {
    categoryFilter.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function initBrandOptions(brands) {
  brandFilter.innerHTML = `<option value="">所有品牌</option>`;
  brands.forEach(b => {
    brandFilter.innerHTML += `<option value="${b}">${b}</option>`;
  });
}

/* ==================================================
   根據分類更新品牌選單
================================================== */
function updateBrandOptions() {
  let availableBrands;

  if (!categoryFilter.value) {
    // 沒選分類 → 顯示全部品牌
    availableBrands = [...new Set(PRODUCTS.map(p => p.brand))];
  } else {
    // 有選分類 → 只顯示該分類下實際存在的品牌
    availableBrands = [
      ...new Set(
        PRODUCTS
          .filter(p => p.category === categoryFilter.value)
          .map(p => p.brand)
      )
    ];
  }

  initBrandOptions(availableBrands);

  // 如果目前選到的品牌不在可用清單 → 清掉
  if (brandFilter.value && !availableBrands.includes(brandFilter.value)) {
    brandFilter.value = "";
  }
}

/* ==================================================
   套用篩選條件
================================================== */
function applyFilters() {
  filtered = PRODUCTS.filter(p =>
    (!categoryFilter.value || p.category === categoryFilter.value) &&
    (!brandFilter.value || p.brand === brandFilter.value) &&
    (
      p.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  );

  if (sortFilter.value === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  }
  if (sortFilter.value === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  currentPage = 1;
  render();
}

/* ==================================================
   Render 商品卡片
================================================== */
function render() {
  grid.innerHTML = "";

  const start = (currentPage - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  if (pageItems.length === 0) {
    grid.innerHTML = `<p style="padding:40px;opacity:.6;">找不到符合條件的商品</p>`;
    pagination.innerHTML = "";
    return;
  }

  pageItems.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">NT$${p.price.toLocaleString()}</p>
        <button onclick="location.href='product-detail.html?productId=${p.id}'">
          查看詳情
        </button>
      </div>
    `;
  });

  renderPagination();
}

/* ==================================================
   Render 分頁
================================================== */
function renderPagination() {
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button
        class="${i === currentPage ? "active" : ""}"
        onclick="gotoPage(${i})"
      >
        ${i}
      </button>
    `;
  }
}

function gotoPage(page) {
  currentPage = page;
  render();
}

/* ==================================================
   Event Binding
================================================== */
categoryFilter.onchange = () => {
  updateBrandOptions();
  applyFilters();
};

brandFilter.onchange = applyFilters;
sortFilter.onchange = applyFilters;
searchInput.oninput = applyFilters;

/* ==================================================
   初始化
================================================== */
initCategoryOptions();
updateBrandOptions();
render();
