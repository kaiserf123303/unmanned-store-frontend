/* =========================
   AURA 智慧門市 – 前端邏輯
========================= */

const storeGrid = document.getElementById("storeGrid");
const searchInput = document.querySelector(".filter-input");
const citySelect = document.querySelectorAll(".filter-select")[0];
const districtSelect = document.querySelectorAll(".filter-select")[1];
const locationBtn = document.querySelector(".location-btn");

let currentStatus = "all";

/* =========================
   Init Select Options
========================= */
function initCityOptions() {
  const cities = [...new Set(STORES.map(s => s.city))];
  citySelect.innerHTML = `<option value="">城市</option>`;
  cities.forEach(c => {
    citySelect.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function initDistrictOptions(districts) {
  districtSelect.innerHTML = `<option value="">行政區</option>`;
  districts.forEach(d => {
    districtSelect.innerHTML += `<option value="${d}">${d}</option>`;
  });
}

/* =========================
   City → District 聯動
========================= */
function updateDistrictOptions() {
  let districts;

  if (!citySelect.value) {
    districts = [];
  } else {
    districts = [
      ...new Set(
        STORES
          .filter(s => s.city === citySelect.value)
          .map(s => s.district)
      )
    ];
  }

  initDistrictOptions(districts);

  if (districtSelect.value && !districts.includes(districtSelect.value)) {
    districtSelect.value = "";
  }
}

/* =========================
   Status Text
========================= */
function getStatusText(status) {
  switch (status) {
    case "operating": return "● 營運中";
    case "restocking": return "● 補貨中";
    case "maintenance": return "● 維護中";
    default: return "";
  }
}

/* =========================
   Render
========================= */
function renderStores(list) {
  storeGrid.innerHTML = "";

  if (list.length === 0) {
    storeGrid.innerHTML = `<p style="color:#888">沒有符合條件的門市</p>`;
    return;
  }

  list.forEach(store => {
    storeGrid.innerHTML += `
      <div class="store-card">
        <img src="${store.image}" class="store-image" />

        <h3>${store.name}</h3>
        <p class="address">${store.address}</p>

        <div class="tags">
          ${store.tags.map(t => `<span class="tag blue">${t}</span>`).join("")}
        </div>

        <div class="status ${store.status}">
          ${getStatusText(store.status)}
        </div>

        <a href="store-detail.html?storeId=${store.id}">
          <button class="detail-btn">查看詳情 →</button>
        </a>
      </div>
    `;
  });
}

/* =========================
   Filter Logic
========================= */
function applyFilters() {
  let result = [...STORES];
  const keyword = searchInput.value.trim();

  if (currentStatus !== "all") {
    result = result.filter(s => s.status === currentStatus);
  }

  if (citySelect.value) {
    result = result.filter(s => s.city === citySelect.value);
  }

  if (districtSelect.value) {
    result = result.filter(s => s.district === districtSelect.value);
  }

  if (keyword) {
    result = result.filter(s => s.name.includes(keyword));
  }

  renderStores(result);
}

/* =========================
   Events
========================= */
searchInput.addEventListener("input", applyFilters);

citySelect.addEventListener("change", () => {
  updateDistrictOptions();
  applyFilters();
});

districtSelect.addEventListener("change", applyFilters);

locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("瀏覽器不支援定位功能");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    () => alert("已取得你的位置（示意）"),
    () => alert("無法取得目前位置")
  );
});

/* =========================
   Init
========================= */
initCityOptions();
updateDistrictOptions();
renderStores(STORES);
