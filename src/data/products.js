const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    category: 'Phones',
    price: 1199,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Titanium flagship tuned for creators and power users.',
    description:
      'A premium performance phone with pro-grade imaging, all-day battery life, and a lightweight titanium build.',
    finish: 'Natural Titanium',
    availability: 'Ships in 24 hours',
    featured: true,
    specs: [
      { label: 'Display', value: '6.7-inch Super Retina XDR' },
      { label: 'Chip', value: 'A17 Pro' },
      { label: 'Camera', value: '48MP main plus 5x telephoto' },
      { label: 'Storage', value: '256GB' },
    ],
    highlights: ['Pro video workflow', 'USB-C', 'Studio-grade portraits'],
  },
  {
    id: 2,
    name: 'iPhone 15',
    category: 'Phones',
    price: 899,
    image:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Balanced everyday flagship with polished essentials.',
    description:
      'Designed for users who want excellent cameras, fast performance, and a clean Apple ecosystem experience.',
    finish: 'Blue',
    availability: 'In stock',
    featured: false,
    specs: [
      { label: 'Display', value: '6.1-inch Super Retina XDR' },
      { label: 'Chip', value: 'A16 Bionic' },
      { label: 'Camera', value: '48MP main camera' },
      { label: 'Storage', value: '128GB' },
    ],
    highlights: ['Dynamic Island', 'All-day battery', 'Ceramic Shield'],
  },
  {
    id: 3,
    name: 'iPad Pro 13',
    category: 'Tablets',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Ultra-thin tablet for design, sketching, and multitasking.',
    description:
      'A high-performance productivity screen that fits presentations, creative work, and executive mobility.',
    finish: 'Space Black',
    availability: 'Ships next business day',
    featured: true,
    specs: [
      { label: 'Display', value: '13-inch Ultra Retina XDR' },
      { label: 'Chip', value: 'M4' },
      { label: 'Camera', value: '12MP Wide camera' },
      { label: 'Storage', value: '256GB' },
    ],
    highlights: ['Apple Pencil Pro ready', 'Laptop-class power', 'OLED display'],
  },
  {
    id: 4,
    name: 'iPad Air',
    category: 'Tablets',
    price: 699,
    image:
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Lightweight tablet for meetings, travel, and hybrid work.',
    description:
      'A versatile option for teams that need dependable performance, a premium screen, and streamlined portability.',
    finish: 'Starlight',
    availability: 'In stock',
    featured: false,
    specs: [
      { label: 'Display', value: '11-inch Liquid Retina' },
      { label: 'Chip', value: 'M2' },
      { label: 'Camera', value: '12MP Center Stage camera' },
      { label: 'Storage', value: '128GB' },
    ],
    highlights: ['Portable form factor', 'Magic Keyboard ready', 'Touch ID'],
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    category: 'Wearables',
    price: 429,
    image:
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Health, productivity, and subtle luxury on your wrist.',
    description:
      'A polished smartwatch designed to keep wellness insights, notifications, and quick interactions close at hand.',
    finish: 'Midnight Aluminum',
    availability: 'Limited stock',
    featured: false,
    specs: [
      { label: 'Display', value: 'Always-On Retina display' },
      { label: 'Chip', value: 'S9 SiP' },
      { label: 'Health', value: 'ECG, blood oxygen, sleep tracking' },
      { label: 'Battery', value: 'Up to 18 hours' },
    ],
    highlights: ['Double tap gesture', 'Fitness insights', 'Crash detection'],
  },
  {
    id: 6,
    name: 'Apple Watch Ultra 2',
    category: 'Wearables',
    price: 799,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Rugged premium watch built for endurance and adventure.',
    description:
      'Combines a bold titanium case, brighter display, and advanced outdoor tracking for active professionals.',
    finish: 'Titanium',
    availability: 'Ships in 48 hours',
    featured: true,
    specs: [
      { label: 'Display', value: '49mm Always-On Retina display' },
      { label: 'Chip', value: 'S9 SiP' },
      { label: 'Health', value: 'Precision dual-frequency GPS' },
      { label: 'Battery', value: 'Up to 36 hours' },
    ],
    highlights: ['Action button', 'Depth gauge', 'Adventure-ready build'],
  },
  {
    id: 7,
    name: 'AirPods Pro',
    category: 'Audio',
    price: 249,
    image:
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Immersive audio with adaptive comfort and focus.',
    description:
      'Premium earbuds with active noise cancellation, seamless switching, and a compact design for daily carry.',
    finish: 'White',
    availability: 'In stock',
    featured: false,
    specs: [
      { label: 'Audio', value: 'Adaptive EQ with ANC' },
      { label: 'Mode', value: 'Transparency and spatial audio' },
      { label: 'Battery', value: 'Up to 6 hours per charge' },
      { label: 'Case', value: 'USB-C MagSafe charging case' },
    ],
    highlights: ['Conversation awareness', 'Personalized audio', 'Pocket-friendly'],
  },
  {
    id: 8,
    name: 'MacBook Air 15',
    category: 'Laptops',
    price: 1499,
    image:
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Thin-and-light notebook for teams that move fast.',
    description:
      'A polished productivity machine with long battery life, silent performance, and a display suited for focused work.',
    finish: 'Silver',
    availability: 'Ships next business day',
    featured: false,
    specs: [
      { label: 'Display', value: '15.3-inch Liquid Retina' },
      { label: 'Chip', value: 'M3' },
      { label: 'Memory', value: '16GB unified memory' },
      { label: 'Storage', value: '512GB SSD' },
    ],
    highlights: ['Fanless design', 'All-day battery', 'Enterprise-ready'],
  },
];

export default products;
