/* =========================
   AURA 智慧門市資料（六都完整版）
========================= */

const STORES = [

/* ==================================================
   台北市
================================================== */
{ id: 1, name: "AURA 台北旗艦門市", city: "台北市", district: "中正區",
  address: "台北市中正區台北大道一段 1 號",
  status: "operating",
  tags: ["筆電", "智慧型手機", "配件", "零組件"],
  image: "images/store.png"
},
{ id: 2, name: "AURA 中正南昌門市", city: "台北市", district: "中正區",
  address: "台北市中正區南昌路一段 88 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 3, name: "AURA 信義旗艦門市", city: "台北市", district: "信義區",
  address: "台北市信義區信義路五段 88 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 4, name: "AURA 信義松高門市", city: "台北市", district: "信義區",
  address: "台北市信義區松高路 19 號",
  status: "restocking",
  tags: ["配件", "零組件"],
  image: "images/store.png"
},
{ id: 5, name: "AURA 大安科技門市", city: "台北市", district: "大安區",
  address: "台北市大安區復興南路一段 102 號",
  status: "operating",
  tags: ["筆電", "配件"],
  image: "images/store.png"
},
{ id: 6, name: "AURA 大安和平門市", city: "台北市", district: "大安區",
  address: "台北市大安區和平東路二段 45 號",
  status: "restocking",
  tags: ["零組件", "配件"],
  image: "images/store.png"
},

/* ==================================================
   新北市
================================================== */
{ id: 7, name: "AURA 板橋門市", city: "新北市", district: "板橋區",
  address: "新北市板橋區文化路一段 188 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 8, name: "AURA 板橋府中門市", city: "新北市", district: "板橋區",
  address: "新北市板橋區府中路 12 號",
  status: "restocking",
  tags: ["筆電", "配件"],
  image: "images/store.png"
},
{ id: 9, name: "AURA 新莊門市", city: "新北市", district: "新莊區",
  address: "新北市新莊區中正路 321 號",
  status: "operating",
  tags: ["筆電", "配件", "零組件"],
  image: "images/store.png"
},
{ id: 10, name: "AURA 新莊副都心門市", city: "新北市", district: "新莊區",
  address: "新北市新莊區中央路 558 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 11, name: "AURA 三重門市", city: "新北市", district: "三重區",
  address: "新北市三重區重新路二段 45 號",
  status: "restocking",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 12, name: "AURA 三重正義門市", city: "新北市", district: "三重區",
  address: "新北市三重區正義北路 66 號",
  status: "operating",
  tags: ["配件", "零組件"],
  image: "images/store.png"
},

/* ==================================================
   桃園市
================================================== */
{ id: 13, name: "AURA 桃園站前門市", city: "桃園市", district: "桃園區",
  address: "桃園市桃園區中正路 88 號",
  status: "operating",
  tags: ["筆電", "智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 14, name: "AURA 桃園藝文門市", city: "桃園市", district: "桃園區",
  address: "桃園市桃園區藝文一路 12 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 15, name: "AURA 中壢門市", city: "桃園市", district: "中壢區",
  address: "桃園市中壢區中山路 210 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 16, name: "AURA 中壢SOGO門市", city: "桃園市", district: "中壢區",
  address: "桃園市中壢區元化路 357 號",
  status: "restocking",
  tags: ["筆電", "配件"],
  image: "images/store.png"
},

/* ==================================================
   台中市
================================================== */
{ id: 17, name: "AURA 台中一中門市", city: "台中市", district: "北區",
  address: "台中市北區一中街 99 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 18, name: "AURA 台中公益門市", city: "台中市", district: "南屯區",
  address: "台中市南屯區公益路二段 51 號",
  status: "operating",
  tags: ["筆電", "配件"],
  image: "images/store.png"
},
{ id: 19, name: "AURA 台中逢甲門市", city: "台中市", district: "西屯區",
  address: "台中市西屯區文華路 100 號",
  status: "restocking",
  tags: ["配件", "零組件"],
  image: "images/store.png"
},

/* ==================================================
   台南市
================================================== */
{ id: 20, name: "AURA 台南站前門市", city: "台南市", district: "中西區",
  address: "台南市中西區成功路 21 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 21, name: "AURA 台南東區門市", city: "台南市", district: "東區",
  address: "台南市東區東門路一段 158 號",
  status: "operating",
  tags: ["筆電", "配件"],
  image: "images/store.png"
},

/* ==================================================
   高雄市
================================================== */
{ id: 22, name: "AURA 高雄巨蛋門市", city: "高雄市", district: "左營區",
  address: "高雄市左營區博愛二路 777 號",
  status: "operating",
  tags: ["智慧型手機", "配件"],
  image: "images/store.png"
},
{ id: 23, name: "AURA 高雄夢時代門市", city: "高雄市", district: "前鎮區",
  address: "高雄市前鎮區中華五路 789 號",
  status: "restocking",
  tags: ["筆電", "配件"],
  image: "images/store.png"
},
{ id: 24, name: "AURA 高雄三多門市", city: "高雄市", district: "苓雅區",
  address: "高雄市苓雅區三多四路 56 號",
  status: "operating",
  tags: ["配件", "零組件"],
  image: "images/store.png"
}

];
