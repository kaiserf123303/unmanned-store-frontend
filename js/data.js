const stores = [
  {
    id: "S001",
    name: "台北車站無人商店",
    location: "台北車站",
    status: "normal",
    devices: [
      { name: "門禁系統", status: "normal" },
      { name: "付款系統", status: "normal" },
      { name: "冷藏設備", status: "error" }
    ],
    products: [
      { name: "可樂", price: 35, stock: 10 },
      { name: "便當", price: 80, stock: 1 }
    ]
  },
  {
    id: "S002",
    name: "內湖辦公室無人商店",
    location: "內湖",
    status: "low",
    devices: [
      { name: "門禁系統", status: "normal" },
      { name: "付款系統", status: "error" }
    ],
    products: [
      { name: "礦泉水", price: 20, stock: 0 },
      { name: "餅乾", price: 25, stock: 3 }
    ]
  }
];
