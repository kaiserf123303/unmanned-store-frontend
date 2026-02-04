/* =========================
   AURA 商品詳情頁
   ========================= */

/* ===== 商品資料（暫時與 products.js 相同） ===== */
const products = [
  {
    id: 101,
    name: "AURA 遊戲控制器",
    brand: "AURA",
    price: 1390,
    image: "images/products/controller.png",
    description: "無線控制器，相容於 PC、Nintendo Switch 與 Android 裝置。",
    status: "供應中",
    tags: ["PC", "Switch"],
    specs: [
      "連線方式：Bluetooth / USB",
      "電池：可充電式",
      "相容平台：PC / Switch"
    ]
  },
  {
    id: 102,
    name: "AURA Pods",
    brand: "AURA",
    price: 990,
    image: "images/products/earbuds.png",
    description: "真無線藍牙耳機，支援降噪與快速配對。",
    status: "供應中",
    tags: ["Bluetooth", "iOS", "Android"],
    specs: [
      "連線方式：Bluetooth",
      "續航：最長 24 小時",
      "支援系統：iOS / Android"
    ]
  }
];

/* ===== 取得 productId ===== */
const params = new URLSearchParams(location.search);
const productId = Number(params.get("productId"));

const container = document.getElementById("productDetail");

/* ===== 找商品 ===== */
const product = products.find(p => p.id === productId);

/* ===== 找不到商品 ===== */
if (!product) {
  container.innerHTML = `
    <section class="product-main">
      <h1>找不到商品</h1>
      <p>此商品可能已下架或不存在。</p>
      <a href="products.html">← 返回產品列表</a>
    </section>
  `;
  throw new Error("Product not found");
}

/* ===== 渲染商品 ===== */
container.innerHTML = `
  <section class="product-main">
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="product-info">
      <h1>${product.name}</h1>
      <p class="price">NT$${product.price.toLocaleString()}</p>

      <p class="description">
        ${product.description}
      </p>

      <div class="product-status">
        <span class="tag operating">${product.status}</span>
        ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>

      <div class="product-actions">
        <button class="primary">加入購物車</button>
      </div>
    </div>
  </section>

  <hr class="divider" />

  <section class="product-specs">
    <h2>產品規格</h2>
    <ul>
      ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
    </ul>
  </section>
`;
