/* =========================
   AURA Login Logic
   ========================= */

// 假帳號資料（之後可換 API）
const USERS = [
  { email: "admin@aura.com", password: "123456", role: "admin" },
  { email: "user@aura.com", password: "123456", role: "user" }
];

const form = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

// 如果已登入，直接回首頁
if (localStorage.getItem("isLogin") === "true") {
  window.location.href = "index.html";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = USERS.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    msg.textContent = "帳號或密碼錯誤";
    msg.style.color = "#e53935";
    return;
  }

  // 登入成功
  localStorage.setItem("isLogin", "true");
  localStorage.setItem("user", JSON.stringify(user));

  msg.textContent = "登入成功，正在跳轉...";
  msg.style.color = "#2e7d32";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 800);
});
