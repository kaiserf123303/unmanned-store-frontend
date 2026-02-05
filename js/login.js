/* =========================
   AURA Login Logic (Remember Me)
   Shopee-style
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (emailInput && passwordInput) {
    emailInput.value = "admin@aura.com";
    passwordInput.value = "123456";
  }
});
// 假帳號資料
const USERS = [
  { email: "admin@aura.com", password: "123456", name: "AURA 管理員" },
  { email: "user@aura.com", password: "123456", name: "AURA 使用者" }
];

const form = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

// 保護：不是 login 頁就不跑
if (!form || !msg) {
  console.warn("login.js loaded on a non-login page");
} else {

  // 🔥 同時檢查 session / local（自動登入用）
  const storage =
    sessionStorage.getItem("isLogin") === "true"
      ? sessionStorage
      : localStorage;

  const isLogin = storage.getItem("isLogin");
  const storedUser = JSON.parse(storage.getItem("user"));

  if (isLogin === "true" && storedUser && storedUser.name) {
    window.location.href = "index.html";
  }

  // 登入行為
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // ✅ 讀取「記住我」
    const rememberMe =
      document.getElementById("rememberMe")?.checked ?? true;

    const user = USERS.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      msg.textContent = "帳號或密碼錯誤";
      msg.style.color = "#e53935";
      return;
    }

    // 🔥 關鍵：依照勾選決定存哪
    const saveTo = rememberMe ? localStorage : sessionStorage;

    saveTo.setItem("isLogin", "true");
    saveTo.setItem(
      "user",
      JSON.stringify({
        email: user.email,
        name: user.name
      })
    );

    msg.textContent = "登入成功，正在跳轉...";
    msg.style.color = "#2e7d32";

    setTimeout(() => {
      window.location.href = "index.html?is_from_login=true";
    }, 800);
  });
}
