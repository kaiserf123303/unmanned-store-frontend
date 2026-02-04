/* =========================
   AURA 共用商品資料（最終版）
   規格 specs 一律使用「顯示用完整字串」
========================= */

const PRODUCTS = [

/* ==================================================
   品牌：AURA
================================================== */
{
  id: 101,
  name: "AURA 遊戲控制器",
  brand: "AURA",
  category: "控制器",
  price: 1390,
  image: "images/products/controller.png",
  description: "無線控制器，相容於 PC、Nintendo Switch 與 Android 裝置。",
  status: "operating",
  tags: ["PC", "Switch"],
  specs: [
    "連線方式：Bluetooth / USB",
    "電池：可充電式",
    "相容平台：PC / Switch"
  ]
},
{
  id: 102,
  name: "AURA Pods Pro",
  brand: "AURA",
  category: "藍芽耳機",
  price: 2990,
  image: "images/products/earbuds.png",
  description: "主動降噪真無線藍牙耳機。",
  status: "operating",
  tags: ["ANC", "Bluetooth"],
  specs: [
    "連線方式：Bluetooth 5.3",
    "續航時間：最長 24 小時",
    "支援系統：iOS / Android"
  ]
},
{
  id: 103,
  name: "AURA Precision Mouse",
  brand: "AURA",
  category: "滑鼠",
  price: 790,
  image: "images/products/mouse.png",
  description: "高 DPI 精準滑鼠，適合遊戲與日常使用。",
  status: "operating",
  tags: ["Gaming", "DPI"],
  specs: [
    "感應器：光學感應",
    "最高 DPI：16000",
    "連線方式：USB"
  ]
},
{
  id: 104,
  name: "AURA Mechanical Keyboard",
  brand: "AURA",
  category: "鍵盤",
  price: 1590,
  image: "images/products/keyboard.png",
  description: "RGB 機械式鍵盤。",
  status: "operating",
  tags: ["RGB", "Mechanical"],
  specs: [
    "軸體類型：紅軸",
    "連線方式：USB-C",
    "背光效果：RGB"
  ]
},
{
  id: 105,
  name: "AURA Pro Laptop",
  brand: "AURA",
  category: "筆電",
  price: 32900,
  image: "images/products/laptop.png",
  description: "高效能筆記型電腦，適合開發與創作。",
  status: "operating",
  tags: ["i7", "16GB"],
  specs: [
    "處理器：Intel Core i7",
    "記憶體：16GB",
    "儲存空間：512GB SSD"
  ]
},
{
  id: 106,
  name: "AURA RTX 顯示卡",
  brand: "AURA",
  category: "顯示卡",
  price: 19900,
  image: "images/products/gpu.png",
  description: "支援光線追蹤的高效能顯示卡。",
  status: "operating",
  tags: ["RTX"],
  specs: [
    "顯示記憶體：8GB GDDR6",
    "介面：PCIe 4.0",
    "最大解析度：4K"
  ]
},

/* ==================================================
   品牌：8BitDo
================================================== */
{
  id: 201,
  name: "8BitDo Pro 2",
  brand: "8BitDo",
  category: "控制器",
  price: 1590,
  image: "images/products/controller.png",
  description: "高自訂性無線控制器。",
  status: "operating",
  tags: ["PC", "Switch"],
  specs: [
    "連線方式：Bluetooth / USB",
    "自訂按鍵：支援",
    "相容平台：PC / Switch"
  ]
},
{
  id: 202,
  name: "8BitDo Lite",
  brand: "8BitDo",
  category: "控制器",
  price: 990,
  image: "images/products/controller.png",
  description: "輕量化無線控制器。",
  status: "operating",
  tags: ["Switch"],
  specs: [
    "連線方式：Bluetooth",
    "重量：輕量設計",
    "相容平台：Nintendo Switch"
  ]
},
{
  id: 203,
  name: "8BitDo Mechanical Keyboard",
  brand: "8BitDo",
  category: "鍵盤",
  price: 1890,
  image: "images/products/keyboard.png",
  description: "復古風格機械式鍵盤。",
  status: "operating",
  tags: ["Mechanical"],
  specs: [
    "軸體類型：青軸",
    "連線方式：USB-C",
    "背光效果：RGB"
  ]
},
{
  id: 204,
  name: "8BitDo Gaming Mouse",
  brand: "8BitDo",
  category: "滑鼠",
  price: 1090,
  image: "images/products/mouse.png",
  description: "電競級滑鼠。",
  status: "operating",
  tags: ["Gaming"],
  specs: [
    "最高 DPI：12000",
    "感應器：光學感應",
    "連線方式：USB"
  ]
},
{
  id: 205,
  name: "8BitDo Gaming Headset",
  brand: "8BitDo",
  category: "耳機",
  price: 2490,
  image: "images/products/headset.png",
  description: "沉浸式電競耳機。",
  status: "operating",
  tags: ["Surround"],
  specs: [
    "音效：7.1 環繞音效",
    "麥克風：降噪麥克風",
    "連線方式：USB"
  ]
},
{
  id: 206,
  name: "8BitDo Bluetooth Earbuds",
  brand: "8BitDo",
  category: "藍芽耳機",
  price: 2290,
  image: "images/products/earbuds.png",
  description: "低延遲真無線藍牙耳機。",
  status: "operating",
  tags: ["Low Latency"],
  specs: [
    "連線方式：Bluetooth",
    "續航時間：最長 20 小時",
    "延遲模式：遊戲低延遲"
  ]
},

/* ==================================================
   品牌：GameSir
================================================== */
{
  id: 301,
  name: "GameSir T4 Pro",
  brand: "GameSir",
  category: "控制器",
  price: 1290,
  image: "images/products/controller.png",
  description: "多平台無線控制器。",
  status: "operating",
  tags: ["PC", "Mobile"],
  specs: [
    "連線方式：Bluetooth / USB",
    "相容平台：PC / Android",
    "電池：可充電式"
  ]
},
{
  id: 302,
  name: "GameSir G7",
  brand: "GameSir",
  category: "控制器",
  price: 1690,
  image: "images/products/controller.png",
  description: "高精度有線控制器。",
  status: "operating",
  tags: ["Xbox"],
  specs: [
    "連線方式：USB",
    "搖桿技術：霍爾感測",
    "相容平台：Xbox / PC"
  ]
},
{
  id: 303,
  name: "GameSir Mechanical Keyboard",
  brand: "GameSir",
  category: "鍵盤",
  price: 1590,
  image: "images/products/keyboard.png",
  description: "RGB 電競鍵盤。",
  status: "operating",
  tags: ["RGB"],
  specs: [
    "軸體類型：紅軸",
    "背光效果：RGB",
    "連線方式：USB-C"
  ]
},
{
  id: 304,
  name: "GameSir Precision Mouse",
  brand: "GameSir",
  category: "滑鼠",
  price: 890,
  image: "images/products/mouse.png",
  description: "高 DPI 電競滑鼠。",
  status: "operating",
  tags: ["DPI"],
  specs: [
    "最高 DPI：14000",
    "感應器：光學感應",
    "連線方式：USB"
  ]
},
{
  id: 305,
  name: "GameSir Gaming Headset",
  brand: "GameSir",
  category: "耳機",
  price: 2190,
  image: "images/products/headset.png",
  description: "封閉式電競耳機。",
  status: "operating",
  tags: ["Gaming"],
  specs: [
    "音效：7.1 環繞音效",
    "麥克風：降噪",
    "連線方式：USB"
  ]
},
{
  id: 306,
  name: "GameSir Wireless Earbuds",
  brand: "GameSir",
  category: "藍芽耳機",
  price: 1990,
  image: "images/products/earbuds.png",
  description: "低延遲藍牙耳機。",
  status: "operating",
  tags: ["Bluetooth"],
  specs: [
    "連線方式：Bluetooth",
    "續航時間：最長 22 小時",
    "遊戲模式：支援"
  ]
},

/* ==================================================
   品牌：Logitech
================================================== */
{
  id: 401,
  name: "Logitech Pro Controller",
  brand: "Logitech",
  category: "控制器",
  price: 1890,
  image: "images/products/controller.png",
  description: "專業級電競控制器。",
  status: "operating",
  tags: ["Esports"],
  specs: [
    "連線方式：USB",
    "反應速度：低延遲",
    "相容平台：PC"
  ]
},
{
  id: 402,
  name: "Logitech MX Keyboard",
  brand: "Logitech",
  category: "鍵盤",
  price: 3290,
  image: "images/products/keyboard.png",
  description: "高階工作用鍵盤。",
  status: "operating",
  tags: ["Office"],
  specs: [
    "連線方式：Bluetooth / USB",
    "背光效果：自動調節",
    "多裝置切換：支援"
  ]
},
{
  id: 403,
  name: "Logitech G Mouse",
  brand: "Logitech",
  category: "滑鼠",
  price: 2490,
  image: "images/products/mouse.png",
  description: "HERO 感測器電競滑鼠。",
  status: "operating",
  tags: ["HERO"],
  specs: [
    "最高 DPI：25600",
    "感應器：HERO",
    "連線方式：USB"
  ]
},
{
  id: 404,
  name: "Logitech Gaming Headset",
  brand: "Logitech",
  category: "耳機",
  price: 2990,
  image: "images/products/headset.png",
  description: "專業電競耳機。",
  status: "operating",
  tags: ["Surround"],
  specs: [
    "音效：7.1 環繞音效",
    "麥克風：可調式",
    "連線方式：USB"
  ]
},
{
  id: 405,
  name: "Logitech Bluetooth Earbuds",
  brand: "Logitech",
  category: "藍芽耳機",
  price: 3490,
  image: "images/products/earbuds.png",
  description: "高音質真無線藍牙耳機。",
  status: "operating",
  tags: ["ANC"],
  specs: [
    "連線方式：Bluetooth",
    "主動降噪：支援",
    "續航時間：最長 30 小時"
  ]
},
{
  id: 406,
  name: "Logitech Creator Laptop",
  brand: "Logitech",
  category: "筆電",
  price: 42900,
  image: "images/products/laptop.png",
  description: "創作者專用高效能筆電。",
  status: "operating",
  tags: ["Creator"],
  specs: [
    "處理器：Intel Core i9",
    "記憶體：32GB",
    "儲存空間：1TB SSD"
  ]
},

/* ==================================================
   品牌：Razer
================================================== */
{
  id: 501,
  name: "Razer Wolverine Controller",
  brand: "Razer",
  category: "控制器",
  price: 2590,
  image: "images/products/controller.png",
  description: "高階電競控制器。",
  status: "operating",
  tags: ["Esports"],
  specs: [
    "連線方式：USB",
    "可程式按鍵：支援",
    "反應速度：極低延遲"
  ]
},
{
  id: 502,
  name: "Razer Mechanical Keyboard",
  brand: "Razer",
  category: "鍵盤",
  price: 3890,
  image: "images/products/keyboard.png",
  description: "RGB 電競機械式鍵盤。",
  status: "operating",
  tags: ["Chroma"],
  specs: [
    "軸體類型：光軸",
    "背光效果：Razer Chroma RGB",
    "連線方式：USB-C"
  ]
},
{
  id: 503,
  name: "Razer Gaming Mouse",
  brand: "Razer",
  category: "滑鼠",
  price: 2990,
  image: "images/products/mouse.png",
  description: "超高 DPI 電競滑鼠。",
  status: "operating",
  tags: ["RGB"],
  specs: [
    "最高 DPI：30000",
    "感應器：光學感應",
    "連線方式：USB"
  ]
},
{
  id: 504,
  name: "Razer Gaming Headset",
  brand: "Razer",
  category: "耳機",
  price: 3490,
  image: "images/products/headset.png",
  description: "THX 空間音效電競耳機。",
  status: "operating",
  tags: ["THX"],
  specs: [
    "音效：THX Spatial Audio",
    "麥克風：降噪",
    "連線方式：USB"
  ]
},
{
  id: 505,
  name: "Razer Wireless Earbuds",
  brand: "Razer",
  category: "藍芽耳機",
  price: 3690,
  image: "images/products/earbuds.png",
  description: "低延遲電競藍牙耳機。",
  status: "operating",
  tags: ["Gaming"],
  specs: [
    "連線方式：Bluetooth",
    "遊戲模式：支援",
    "續航時間：最長 20 小時"
  ]
},
{
  id: 506,
  name: "Razer Blade Laptop",
  brand: "Razer",
  category: "筆電",
  price: 52900,
  image: "images/products/laptop.png",
  description: "高階電競筆記型電腦。",
  status: "operating",
  tags: ["RTX"],
  specs: [
    "處理器：Intel Core i9",
    "顯示卡：RTX 系列",
    "螢幕更新率：240Hz"
  ]
}

];
