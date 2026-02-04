/* =========================
   AURA 智慧門市 – 前端邏輯
   ========================= */

/* ===== 門市資料（之後可換 API） ===== */
const stores = [
  {
    id: 1,
    name: "AURA 台北旗艦門市",
    city: "台北市",
    district: "中正區",
    address: "台北市 台北大道一段 1 號",
    status: "operating",
    tags: ["筆記型電腦", "配件", "零組件"],
    image: "images/store.png"
  },
  {
    id: 2,
    name: "AURA 信義門市",
    city: "台北市",
    district: "信義區",
    address: "台北市 信義路 88 號",
    status: "restocking",
    tags: ["智慧型手機", "配件"],
    image: "images/store.png"
  },
  {
    id: 3,
    name: "AURA 台北萬華門市",
    city: "台北市",
    district: "萬華區",
    address: "台北市 萬華街 27 號",
    status: "maintenance",
    tags: ["筆記型電腦", "智慧型手機", "配件"],
    image: "images/store.png"
  }
];

/* =========================
   DOM
   ========================= */
const storeGrid = document.getElementById("storeGrid");
const searchInput = document.querySelector(".filter-input");
const citySelect = document.querySelectorAll(".filter-select")[0];
const districtSelect = document.querySelectorAll(".filter-select")[1];
const locationBtn = document.querySelector(".location-btn");

/* =========================
   狀態
   ========================= */
let currentStatus = "all";

/* =========================
   工具函式
   ========================= */
function getStatusText(status) {
  switch (status) {
    case "operating":
      return "● 營運中";
    case "restocking":
      return "● 補貨中";
    case "maintenance":
      return "● 維護中";
    default:
      return "";
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
    const card = document.createElement("div");
    card.className = "store-card";

    card.innerHTML = `
      <img src="${store.image}" class="store-image" alt="${store.name}" />

      <h3>${store.name}</h3>
      <p class="address">${store.address}</p>

      <div class="tags">
        ${store.tags
          .map(tag => `<span class="tag blue">${tag}</span>`)
          .join("")}
      </div>

      <div class="status ${store.status}">
        ${getStatusText(store.status)}
      </div>

      <a href="store-detail.html?storeId=${store.id}">
        <button class="detail-btn">查看詳情 →</button>
      </a>
    `;

    storeGrid.appendChild(card);
  });
}

/* =========================
   Filter Logic
   ========================= */
function applyFilters() {
  const keyword = searchInput.value.trim();
  const city = citySelect.value;
  const district = districtSelect.value;

  let result = [...stores];

  // 狀態
  if (currentStatus !== "all") {
    result = result.filter(store => store.status === currentStatus);
  }

  // 城市
  if (city !== "城市") {
    result = result.filter(store => store.city === city);
  }

  // 行政區
  if (district !== "行政區") {
    result = result.filter(store => store.district === district);
  }

  // 關鍵字（門市名稱）
  if (keyword) {
    result = result.filter(store =>
      store.name.includes(keyword)
    );
  }

  renderStores(result);
}

/* =========================
   Events
   ========================= */
searchInput.addEventListener("input", applyFilters);
citySelect.addEventListener("change", applyFilters);
districtSelect.addEventListener("change", applyFilters);

/* 定位（示意） */
locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("瀏覽器不支援定位功能");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    () => {
      alert("已取得你的位置（示意）\n未來可串 Google Maps API");
    },
    () => {
      alert("無法取得目前位置");
    }
  );
});

/* =========================
   Init
   ========================= */
renderStores(stores);
