/* =========================
   AURA 共用商品資料（最終完整版）
   specs 一律為顯示用字串
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
    "最高 DPI：16000",
    "感應器：光學",
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
    "軸體：紅軸",
    "連線方式：USB-C",
    "背光：RGB"
  ]
},
{
  id: 105,
  name: "AURA Pro Laptop",
  brand: "AURA",
  category: "筆電",
  price: 32900,
  image: "images/products/laptop.png",
  description: "高效能筆電，適合開發與創作。",
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
{
  id: 107,
  name: "AURA Phone X",
  brand: "AURA",
  category: "智慧型手機",
  price: 18990,
  image: "images/products/phone.png",
  description: "AURA 自研智慧型手機。",
  status: "operating",
  tags: ["5G", "Android"],
  specs: [
    "螢幕：6.5 吋 OLED",
    "處理器：Snapdragon",
    "網路：5G"
  ]
},
{
  id: 108,
  name: "AURA NVMe SSD 1TB",
  brand: "AURA",
  category: "零組件",
  price: 2990,
  image: "images/products/ssd.png",
  description: "高速 NVMe 固態硬碟。",
  status: "operating",
  tags: ["NVMe"],
  specs: [
    "容量：1TB",
    "介面：PCIe",
    "讀取速度：高速"
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
    "重量：輕量",
    "平台：Switch"
  ]
},
{
  id: 203,
  name: "8BitDo Mechanical Keyboard",
  brand: "8BitDo",
  category: "鍵盤",
  price: 1890,
  image: "images/products/keyboard.png",
  description: "復古風格機械鍵盤。",
  status: "operating",
  tags: ["Mechanical"],
  specs: [
    "軸體：青軸",
    "連線：USB-C",
    "背光：RGB"
  ]
},
{
  id: 204,
  name: "8BitDo Gaming Mouse",
  brand: "8BitDo",
  category: "滑鼠",
  price: 1090,
  image: "images/products/mouse.png",
  description: "電競滑鼠。",
  status: "operating",
  tags: ["Gaming"],
  specs: [
    "最高 DPI：12000",
    "感應器：光學",
    "連線：USB"
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
    "音效：7.1 環繞",
    "麥克風：降噪",
    "連線：USB"
  ]
},
{
  id: 206,
  name: "8BitDo Bluetooth Earbuds",
  brand: "8BitDo",
  category: "藍芽耳機",
  price: 2290,
  image: "images/products/earbuds.png",
  description: "低延遲真無線耳機。",
  status: "operating",
  tags: ["Low Latency"],
  specs: [
    "連線：Bluetooth",
    "續航：20 小時",
    "遊戲模式：支援"
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
    "連線：Bluetooth / USB",
    "平台：PC / Android",
    "電池：充電式"
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
    "連線：USB",
    "搖桿：霍爾感測",
    "平台：Xbox / PC"
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
    "軸體：紅軸",
    "背光：RGB",
    "連線：USB-C"
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
    "感應器：光學",
    "連線：USB"
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
    "音效：7.1",
    "麥克風：降噪",
    "連線：USB"
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
    "連線：Bluetooth",
    "續航：22 小時",
    "遊戲模式：支援"
  ]
},

/* ==================================================
   品牌：Logitech
================================================== */
{
  id: 401,
  name: "Logitech MX Keyboard",
  brand: "Logitech",
  category: "鍵盤",
  price: 3290,
  image: "images/products/keyboard.png",
  description: "高階工作用鍵盤。",
  status: "operating",
  tags: ["Office"],
  specs: [
    "連線：Bluetooth / USB",
    "背光：自動調節",
    "多裝置：支援"
  ]
},
{
  id: 402,
  name: "Logitech G Mouse",
  brand: "Logitech",
  category: "滑鼠",
  price: 2490,
  image: "images/products/mouse.png",
  description: "HERO 感測器滑鼠。",
  status: "operating",
  tags: ["HERO"],
  specs: [
    "最高 DPI：25600",
    "感應器：HERO",
    "連線：USB"
  ]
},
{
  id: 403,
  name: "Logitech Gaming Headset",
  brand: "Logitech",
  category: "耳機",
  price: 2990,
  image: "images/products/headset.png",
  description: "專業電競耳機。",
  status: "operating",
  tags: ["Surround"],
  specs: [
    "音效：7.1",
    "麥克風：可調",
    "連線：USB"
  ]
},
{
  id: 404,
  name: "Logitech Creator Laptop",
  brand: "Logitech",
  category: "筆電",
  price: 42900,
  image: "images/products/laptop.png",
  description: "創作者專用筆電。",
  status: "operating",
  tags: ["Creator"],
  specs: [
    "處理器：i9",
    "記憶體：32GB",
    "儲存：1TB SSD"
  ]
},

/* ==================================================
   品牌：Razer
================================================== */
{
  id: 501,
  name: "Razer Mechanical Keyboard",
  brand: "Razer",
  category: "鍵盤",
  price: 3890,
  image: "images/products/keyboard.png",
  description: "RGB 電競鍵盤。",
  status: "operating",
  tags: ["Chroma"],
  specs: [
    "軸體：光軸",
    "背光：Chroma RGB",
    "連線：USB-C"
  ]
},
{
  id: 502,
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
    "感應器：光學",
    "連線：USB"
  ]
},
{
  id: 503,
  name: "Razer Gaming Headset",
  brand: "Razer",
  category: "耳機",
  price: 3490,
  image: "images/products/headset.png",
  description: "THX 空間音效耳機。",
  status: "operating",
  tags: ["THX"],
  specs: [
    "音效：THX Spatial",
    "麥克風：降噪",
    "連線：USB"
  ]
},
{
  id: 504,
  name: "Razer Blade Laptop",
  brand: "Razer",
  category: "筆電",
  price: 52900,
  image: "images/products/laptop.png",
  description: "高階電競筆電。",
  status: "operating",
  tags: ["RTX"],
  specs: [
    "處理器：i9",
    "顯示卡：RTX",
    "螢幕：240Hz"
  ]
}

];
