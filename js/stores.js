const table = document.getElementById("storeTable");

table.innerHTML = `
  <tr>
    <th>商店</th>
    <th>地點</th>
    <th>狀態</th>
    <th>操作</th>
  </tr>
`;

stores.forEach(store => {
  table.innerHTML += `
    <tr>
      <td>${store.name}</td>
      <td>${store.location}</td>
      <td>${store.status}</td>
      <td>
        <a href="store-detail.html?id=${store.id}">查看</a>
      </td>
    </tr>
  `;
});
