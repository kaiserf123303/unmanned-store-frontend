/* =========================
   AURA 商品詳情頁（維持原版型）
========================= */

/* 取得 productId */
const params = new URLSearchParams(location.search);
const productId = Number(params.get("productId"));

const container = document.getElementById("productDetail");

/* 從共用資料取得商品 */
const product = PRODUCTS.find(p => p.id === productId);

/* 找不到商品 */
if (!product) {
  container.innerHTML = `
    <section class="product-main">
      <div class="product-info">
        <h1>找不到商品</h1>
        <p>此商品可能已下架或不存在。</p>
        <a href="products.html">← 返回產品列表</a>
      </div>
    </section>
  `;
  throw new Error("Product not found");
}

/* 渲染商品（完全沿用你原本的 HTML 結構） */
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
        <span class="tag operating">供應中</span>
        ${
          product.tags
            ? product.tags.map(tag => `<span class="tag">${tag}</span>`).join("")
            : ""
        }
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
      ${
        product.specs
          ? product.specs.map(spec => `<li>${spec}</li>`).join("")
          : "<li>暫無規格資料</li>"
      }
    </ul>
  </section>
`;
