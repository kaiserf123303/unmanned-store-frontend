const grid = document.getElementById("productGrid");
const pagination = document.getElementById("pagination");

const categoryFilter = document.getElementById("categoryFilter");
const brandFilter = document.getElementById("brandFilter");
const searchInput = document.getElementById("searchInput");
const sortFilter = document.getElementById("sortFilter");

const PER_PAGE = 6;
let currentPage = 1;
let filtered = [...PRODUCTS];

/* 初始化選單 */
[...new Set(PRODUCTS.map(p => p.category))].forEach(c =>
  categoryFilter.innerHTML += `<option>${c}</option>`
);
[...new Set(PRODUCTS.map(p => p.brand))].forEach(b =>
  brandFilter.innerHTML += `<option>${b}</option>`
);

function applyFilters() {
  filtered = PRODUCTS.filter(p =>
    (!categoryFilter.value || p.category === categoryFilter.value) &&
    (!brandFilter.value || p.brand === brandFilter.value) &&
    p.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  if (sortFilter.value === "priceAsc") filtered.sort((a,b)=>a.price-b.price);
  if (sortFilter.value === "priceDesc") filtered.sort((a,b)=>b.price-a.price);

  currentPage = 1;
  render();
}

function render() {
  grid.innerHTML = "";
  const start = (currentPage - 1) * PER_PAGE;
  filtered.slice(start, start + PER_PAGE).forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>NT$${p.price.toLocaleString()}</p>
        <button onclick="location.href='product-detail.html?productId=${p.id}'">查看詳情</button>
      </div>
    `;
  });
  renderPagination();
}

function renderPagination() {
  const total = Math.ceil(filtered.length / PER_PAGE);
  pagination.innerHTML = "";
  for (let i = 1; i <= total; i++) {
    pagination.innerHTML += `<button class="${i===currentPage?'active':''}" onclick="goto(${i})">${i}</button>`;
  }
}

function goto(p) { currentPage = p; render(); }

[categoryFilter, brandFilter, sortFilter].forEach(el => el.onchange = applyFilters);
searchInput.oninput = applyFilters;

render();
