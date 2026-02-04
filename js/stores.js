const storeList = document.getElementById("storeList");

stores.forEach(store => {
  const div = document.createElement("div");
  div.className = `store-card ${store.status}`;

  div.innerHTML = `
    <h2>${store.name}</h2>
    <p>📍 地點：${store.location}</p>
    <p>📦 商品數：${store.products}</p>
    <span class="status">${store.status}</span>
  `;

  storeList.appendChild(div);
});
