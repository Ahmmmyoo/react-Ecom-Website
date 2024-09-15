// src/data/products.js
const products = [
  // iPhones (12 items)
  {
    id: 1,
    name: "iPhone 14 Pro",
    image: "https://regen.pk/cdn/shop/products/REGEN-iPhone14ProMax-Frontback-DeepPurple-Pakistan_1_cf318a55-4d9c-49bc-890c-f481de0a1bbe.png?v=1681907898&width=1946",
    specs: {
      display: "6.1‑inch Super Retina XDR display",
      processor: "A16 Bionic chip",
      camera: "Pro camera system (48MP Main)",
      storage: "128GB, 256GB, 512GB, 1TB",
    },
    price: "$999",
  },
  {
    id: 2,
    name: "iPhone 14",
    image: "https://iplanet.one/cdn/shop/files/iPhone_14_Purple_PDP_Image_Position-1A__WWEN.jpg?v=1691142418&width=1445",
    specs: {
      display: "6.1‑inch Super Retina XDR display",
      processor: "A15 Bionic chip",
      camera: "Dual camera system (12MP Main)",
      storage: "128GB, 256GB, 512GB",
    },
    price: "$799",
  },
  {
    id: 3,
    name: "iPhone 13 Pro",
    image: "https://regen.pk/cdn/shop/files/REGEN-iPhone13Pro-Frontback-Silver-Pakistan.png?v=1682421163",
    specs: {
      display: "6.1‑inch Super Retina XDR display",
      processor: "A15 Bionic chip",
      camera: "Pro camera system (12MP Main)",
      storage: "128GB, 256GB, 512GB, 1TB",
    },
    price: "$899",
  },
  // Add more iPhones (up to 12 items) with similar format
  {
    id: 4,
    name: "iPhone 13",
    image: "https://regen.pk/cdn/shop/products/Regen-iPhone-13-Blue.jpg?v=1674906995",
    specs: {
      display: "6.1‑inch Super Retina XDR display",
      processor: "A15 Bionic chip",
      camera: "Dual camera system (12MP Main)",
      storage: "128GB, 256GB, 512GB",
    },
    price: "$699",
  },
  // Add 8 more iPhones here...
  
  // iPads (4 items)
  {
    id: 13,
    name: "iPad Pro 12.9\"",
    image: "https://cdn.homeshopping.pk/product_images/e/281/ipad-pro-13-select-cell-spacegray-202210__65213_zoom.jpg",
    specs: {
      display: "12.9-inch Liquid Retina XDR display",
      processor: "M2 chip",
      camera: "12MP Ultra Wide front camera",
      storage: "128GB, 256GB, 512GB, 1TB, 2TB",
    },
    price: "$1,099",
  },
  {
    id: 14,
    name: "iPad Air",
    image: "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/a/p/apple-ipad-air-5-myshop-pk-1_1.jpg",
    specs: {
      display: "10.9-inch Liquid Retina display",
      processor: "M1 chip",
      camera: "12MP Ultra Wide front camera",
      storage: "64GB, 256GB",
    },
    price: "$599",
  },
  // Add 2 more iPads...

  // Apple Watches (6 items)
  {
    id: 17,
    name: "Apple Watch Series 8",
    image: "https://xtra.pk/wp-content/uploads/2023/07/64EADD04-5365-4C48-B0A9-60A07701E6E3.jpeg",
    specs: {
      display: "Always-On Retina display",
      processor: "S8 SiP with 64-bit dual-core processor",
      healthFeatures: "Blood Oxygen app, ECG app",
      storage: "32GB",
    },
    price: "$399",
  },
  {
    id: 18,
    name: "Apple Watch SE",
    image: "https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/c/o/copy-15-czone.com.pk-1540-13499-090822075111.jpg.webp",
    specs: {
      display: "Retina display",
      processor: "S8 SiP with 64-bit dual-core processor",
      healthFeatures: "Heart rate sensor",
      storage: "32GB",
    },
    price: "$249",
  },
  // Add 4 more Watches...
];

export default products;
