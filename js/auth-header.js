/* =========================
   AURA Global Header Auth
   Shopee-style User Menu (FIXED)
========================= */

const authArea = document.getElementById("authArea");

if (authArea) {

  const isLogin = localStorage.getItem("isLogin");
  const user = JSON.parse(localStorage.getItem("user"));

  // Shopee 參數
  const params = new URLSearchParams(window.location.search);
  const isFromLogin = params.get("is_from_login");

  /* =========================
     Header Render
  ========================= */

  if (isLogin === "true" && user && user.name) {
    authArea.innerHTML = `
      <div class="user-menu">
        <span class="nav-user">
          👤 ${user.name}
          <span class="caret">▾</span>
        </span>

        <div class="user-dropdown">
          <a href="member.html">我的帳戶</a>
          <a href="orders.html">購買清單</a>
          <button type="button" id="logoutBtn" class="logout-btn">
            登出
          </button>
        </div>
      </div>
    `;
  } else {
    authArea.innerHTML = `
      <a href="login.html" class="login">登入</a>
    `;
  }

  /* =========================
     Logout (事件委派，穩定)
  ========================= */

  authArea.addEventListener("click", (e) => {
    if (e.target.id === "logoutBtn") {
      e.preventDefault();
      localStorage.clear();
      window.location.href = "index.html";
    }
  });

  /* =========================
     Login Redirect Cleanup
  ========================= */

  if (isFromLogin === "true") {
    history.replaceState(null, "", window.location.pathname);
  }
}
