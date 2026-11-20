/* =========================================================
   TENCERE TAVA DÜNYASI — app.js
   Full interactive state management, cart, filters, slider
   ========================================================= */

'use strict';

// =========================================================
// PRODUCT DATA
// =========================================================
const CATEGORY_SUBS = {
  'Tencereler': [
    'Granit Tencereler',
    'Çelik Tencereler',
    'Döküm Tencereler',
    'Düdüklü Tencereler',
  ],
  'Tavalar': [
    'Granit Tavalar',
    'Döküm Tavalar',
    'Çelik Tavalar',
    'Krep Tavaları',
    'Wok Tavalar',
    'Izgaralı Tavalar',
  ],
  'Set Ürünler': [
    'Çelik Tencere Setleri',
    'Granit Tencere Setleri',
    'Mini Tencere Setleri',
    'Döküm Tava Setleri',
    'Döküm Sahan Setleri',
  ],
  'Çaydanlık Takımları': [
    'Çelik Çaydanlık Takımları',
  ],
};

const CATEGORY_IMAGE_MAP = {
  tavaSetleri: 'images/tacdökümtavaseti.jpg',
  tekTavalar: 'images/tacdokumtavatek.jpg',
  tekDokumTencereler: 'images/tacdokumtencere.jpg',
  celikTencereler: 'images/tacceliktencere.jpg',
  celikTencereSetleri: 'images/taccelikset.jpg',
  dokumTencereSetleri: 'images/tacgranittencereseti.jpg',
};

const PRODUCTS = [
  {
    id: 1,
    name: 'Premium Granit Derin Tencere 24cm',
    brand: 'TAÇ',
    material: 'Granit',
    category: 'Tencere',
    mainCat: 'Tencereler',
    subCat: 'Granit Tencereler',
    price: 949,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 342,
    badges: ['coksatan', 'kargo'],
    svgType: 'granite-pot',
    image: 'images/tacdokumtencere.jpg',
    description: '24cm Yanmaz Yapışmaz Granit Tencere',
  },
  {
    id: 2,
    name: 'Paslanmaz Çelik Basık Tencere 26cm',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Tencere',
    mainCat: 'Tencereler',
    subCat: 'Çelik Tencereler',
    price: 849,
    oldPrice: 1099,
    rating: 4.6,
    reviews: 218,
    badges: ['indirim'],
    svgType: 'steel-pot',
    image: 'images/tacceliktencere.jpg',
    description: '18/10 Cr-Ni Paslanmaz Çelik Tencere',
  },
  {
    id: 3,
    name: 'Ağır Hizmet Döküm Demir Tencere 28cm',
    brand: 'TAÇ',
    material: 'Döküm',
    category: 'Tencere',
    mainCat: 'Tencereler',
    subCat: 'Döküm Tencereler',
    price: 1899,
    oldPrice: 2399,
    rating: 4.9,
    reviews: 312,
    badges: ['coksatan', 'kargo'],
    svgType: 'enamel-pot',
    image: 'images/tacdokumtencere.jpg',
    description: '28cm Fırına Dayanıklı Döküm Tencere',
  },
  {
    id: 4,
    name: 'Düdüklü Tencere Pro 6 Litre',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Düdüklü',
    mainCat: 'Tencereler',
    subCat: 'Düdüklü Tencereler',
    price: 1149,
    oldPrice: 1499,
    rating: 4.7,
    reviews: 156,
    badges: ['yeni', 'kargo'],
    svgType: 'pressure-cooker',
    image: 'images/tacceliktencere.jpg',
    description: '6 Litre Emniyet kilitli Çelik Düdüklü Tencere',
  },
  {
    id: 5,
    name: 'Ultra Granit Kızartma Tavası 28cm',
    brand: 'TAÇ',
    material: 'Granit',
    category: 'Tava',
    mainCat: 'Tavalar',
    subCat: 'Granit Tavalar',
    price: 549,
    oldPrice: 749,
    rating: 4.8,
    reviews: 264,
    badges: ['coksatan', 'indirim'],
    svgType: 'cast-iron-pan',
    image: 'images/tacdokumtavatek.jpg',
    description: '28cm Çizilmeye Dayanıklı Granit Tava',
  },
  {
    id: 6,
    name: 'Döküm Demir Sote Tavası 26cm',
    brand: 'TAÇ',
    material: 'Döküm',
    category: 'Tava',
    mainCat: 'Tavalar',
    subCat: 'Döküm Tavalar',
    price: 899,
    oldPrice: 1199,
    rating: 4.9,
    reviews: 198,
    badges: ['kargo'],
    svgType: 'cast-iron-pan',
    image: 'images/tacdokumtavatek.jpg',
    description: '26cm Ömürlük Döküm Demir Tava',
  },
  {
    id: 7,
    name: 'Profesyonel Şef Çelik Tava 28cm',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Tava',
    mainCat: 'Tavalar',
    subCat: 'Çelik Tavalar',
    price: 699,
    oldPrice: 899,
    rating: 4.7,
    reviews: 145,
    badges: ['yeni'],
    svgType: 'crepe-pan',
    image: 'images/tacdokumtavatek.jpg',
    description: '28cm İndüksiyon Tabanlı Çelik Tava',
  },
  {
    id: 8,
    name: 'Granit & Çelik Krep Tavası 26cm',
    brand: 'TAÇ',
    material: 'Granit',
    category: 'Tava',
    mainCat: 'Tavalar',
    subCat: 'Krep Tavaları',
    price: 389,
    oldPrice: 499,
    rating: 4.6,
    reviews: 184,
    badges: ['indirim'],
    svgType: 'crepe-pan',
    image: 'images/tacdokumtavatek.jpg',
    description: '26cm İnce Kenarlı Yapışmaz Krep Tavası',
  },
  {
    id: 9,
    name: 'Granit Wok Tavası 32cm',
    brand: 'TAÇ',
    material: 'Granit',
    category: 'Tava',
    mainCat: 'Tavalar',
    subCat: 'Wok Tavalar',
    price: 649,
    oldPrice: 849,
    rating: 4.5,
    reviews: 274,
    badges: ['indirim'],
    svgType: 'wok-pan',
    image: 'images/tacdokumtavatek.jpg',
    description: '32cm Derin Granit Kaplamalı Wok Tava',
  },
  {
    id: 10,
    name: 'Döküm Izgara Tava 28cm',
    brand: 'TAÇ',
    material: 'Döküm',
    category: 'Tava',
    mainCat: 'Tavalar',
    subCat: 'Izgaralı Tavalar',
    price: 979,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 229,
    badges: ['indirim', 'coksatan'],
    svgType: 'grill-pan',
    image: 'images/tacdokumtavatek.jpg',
    description: '28cm Oluklu Döküm Izgara Tava',
  },
  {
    id: 11,
    name: '8 Parça Paslanmaz Çelik Tencere Seti',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Set',
    mainCat: 'Set Ürünler',
    subCat: 'Çelik Tencere Setleri',
    price: 2899,
    oldPrice: 3699,
    rating: 4.9,
    reviews: 412,
    badges: ['coksatan', 'kargo'],
    svgType: 'steel-pot',
    image: 'images/taccelikset.jpg',
    description: '8 Parça İndüksiyon Uyumlu Çelik Tencere Seti',
  },
  {
    id: 12,
    name: 'Lüks 7 Parça Granit Tencere Seti',
    brand: 'TAÇ',
    material: 'Granit',
    category: 'Set',
    mainCat: 'Set Ürünler',
    subCat: 'Granit Tencere Setleri',
    price: 2499,
    oldPrice: 3299,
    rating: 4.9,
    reviews: 621,
    badges: ['coksatan', 'indirim', 'kargo'],
    svgType: 'set-box',
    image: 'images/tacgranittencereseti.jpg',
    description: '7 Parça Ultra Granit Tencere & Karnıyarık Seti',
  },
  {
    id: 13,
    name: '3 Parça Mini Granit Tencere & Sütlük Seti',
    brand: 'TAÇ',
    material: 'Granit',
    category: 'Set',
    mainCat: 'Set Ürünler',
    subCat: 'Mini Tencere Setleri',
    price: 749,
    oldPrice: 999,
    rating: 4.6,
    reviews: 97,
    badges: ['yeni', 'kargo'],
    svgType: 'milk-pot',
    image: 'images/tacgranittencereseti.jpg',
    description: '14-16-18cm Mini Tencere Seti',
  },
  {
    id: 14,
    name: '3 Parça Döküm Tava Seti',
    brand: 'TAÇ',
    material: 'Döküm',
    category: 'Set',
    mainCat: 'Set Ürünler',
    subCat: 'Döküm Tava Setleri',
    price: 1699,
    oldPrice: 2299,
    rating: 4.9,
    reviews: 487,
    badges: ['coksatan', 'indirim'],
    svgType: 'cast-iron-pan',
    image: 'images/tacdökümtavaseti.jpg',
    description: '20-24-28cm 3 Parçalı Döküm Tava Seti',
  },
  {
    id: 15,
    name: '6 Parça Kapaklı Döküm Sahan Seti',
    brand: 'TAÇ',
    material: 'Döküm',
    category: 'Set',
    mainCat: 'Set Ürünler',
    subCat: 'Döküm Sahan Setleri',
    price: 1399,
    oldPrice: 1799,
    rating: 4.7,
    reviews: 162,
    badges: ['indirim', 'kargo'],
    svgType: 'sahan-set',
    image: 'images/tacdökümtavaseti.jpg',
    description: '3 Boy Cam Kapaklı Döküm Sahan Seti',
  },
  {
    id: 16,
    name: 'Aile Boyu Paslanmaz Çelik Çaydanlık Takımı',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Çaydanlık',
    mainCat: 'Çaydanlık Takımları',
    subCat: 'Çelik Çaydanlık Takımları',
    price: 1199,
    oldPrice: 1549,
    rating: 4.9,
    reviews: 338,
    badges: ['coksatan', 'kargo'],
    svgType: 'steamer',
    image: 'images/tacceliktencere.jpg',
    description: '18/10 Cr-Ni Kendinden Süzgeçli Çelik Çaydanlık Takımı',
  },
  {
    id: 17,
    name: 'Orta Boy 18/10 Cr-Ni Klasik Çelik Çaydanlık Takımı',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Çaydanlık',
    mainCat: 'Çaydanlık Takımları',
    subCat: 'Çelik Çaydanlık Takımları',
    price: 999,
    oldPrice: 1349,
    rating: 4.8,
    reviews: 214,
    badges: ['indirim', 'kargo'],
    svgType: 'steamer',
    image: 'images/tacceliktencere.jpg',
    description: '1.0L Demlik + 2.0L Suluk · İndüksiyon Tabanlı Çelik Çaydanlık',
  },
  {
    id: 18,
    name: 'Clipso İkili Çelik Düdüklü Tencere Seti (4L + 6L)',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Düdüklü',
    mainCat: 'Tencereler',
    subCat: 'Düdüklü Tencereler',
    price: 2399,
    oldPrice: 3199,
    rating: 4.9,
    reviews: 276,
    badges: ['coksatan', 'indirim', 'kargo'],
    svgType: 'pressure-cooker',
    image: 'images/taccelikset.jpg',
    description: '4 Litre + 6 Litre Çift Gövdeli Tek Kapaklı 18/10 Çelik Düdüklü Set',
  },
  {
    id: 19,
    name: 'Bella Maxi Boy 18/10 Cr-Ni Paslanmaz Çelik Çaydanlık Takımı',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Çaydanlık',
    mainCat: 'Çaydanlık Takımları',
    subCat: 'Çelik Çaydanlık Takımları',
    price: 1399,
    oldPrice: 1799,
    rating: 4.9,
    reviews: 189,
    badges: ['yeni', 'kargo'],
    svgType: 'steamer',
    image: 'images/tacceliktencere.jpg',
    description: '1.5L Demlik + 3.0L Suluk · Ergonomik El Yakmayan Kulplu Çelik Çaydanlık',
  },
  {
    id: 20,
    name: 'Klasik Klipsli 7 Litre Paslanmaz Çelik Düdüklü Tencere',
    brand: 'TAÇ',
    material: 'Çelik',
    category: 'Düdüklü',
    mainCat: 'Tencereler',
    subCat: 'Düdüklü Tencereler',
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 312,
    badges: ['indirim', 'kargo'],
    svgType: 'pressure-cooker',
    image: 'images/tacceliktencere.jpg',
    description: '7.0 Litre Geniş Hacim · Kapsül İndüksiyon Tabanlı Çelik Düdüklü Tencere',
  },
];

// Default initial stock counts for all 20 TAÇ products (synced live with Supabase `products` table)
const INITIAL_PRODUCT_STOCKS = {
  1: 18, 2: 15, 3: 10, 4: 14, 5: 22,
  6: 12, 7: 16, 8: 25, 9: 14, 10: 11,
  11: 9, 12: 15, 13: 20, 14: 13, 15: 12,
  16: 17, 17: 19, 18: 8, 19: 14, 20: 11,
};

PRODUCTS.forEach(p => {
  if (typeof p.stock !== 'number') {
    p.stock = INITIAL_PRODUCT_STOCKS[p.id] ?? 15;
  }
});

// =========================================================
// SUPABASE CLIENT INITIALIZATION
// =========================================================
const SUPABASE_URL = 'https://kpdyupopqjvsspiaqwsj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_rRZ-5dowXBZbXMCXDJ54NA_AMHsGcWZ';

let supabaseClient = null;
try {
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClient = supabaseClient;
  }
} catch (err) {
  console.warn('Supabase client initialization warning:', err);
}

function getProductStock(productOrId) {
  const prod = typeof productOrId === 'object' && productOrId !== null
    ? productOrId
    : PRODUCTS.find(p => p.id === Number(productOrId));
  if (!prod) return 0;
  const n = Number(prod.stock);
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 15;
}

function isProductOutOfStock(productOrId) {
  return getProductStock(productOrId) <= 0;
}

function renderStockPillHTML(product) {
  const stock = getProductStock(product);
  if (stock <= 0) {
    return `
      <div class="product-stock-row">
        <span class="product-stock-pill out-of-stock">
          <span class="stock-dot"></span>Tükendi (Stok: 0)
        </span>
      </div>
    `;
  }
  if (stock <= 5) {
    return `
      <div class="product-stock-row">
        <span class="product-stock-pill low-stock">
          <span class="stock-dot"></span>Son ${stock} Adet!
        </span>
      </div>
    `;
  }
  return `
    <div class="product-stock-row">
      <span class="product-stock-pill in-stock">
        <span class="stock-dot"></span>Stokta: ${stock} Adet
      </span>
    </div>
  `;
}

const FREE_SHIPPING_THRESHOLD = 3500;
const STANDARD_SHIPPING_FEE = 200;

function calculateShippingCost(subtotal) {
  if (!subtotal || subtotal <= 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
}

function buildProductBadgesHTML(product) {
  const isOut = isProductOutOfStock(product);
  const labels = {
    indirim: ['İndirim', 'badge-indirim'],
    coksatan: ['Çok Satan', 'badge-coksatan'],
    kargo: ['Ücretsiz Kargo', 'badge-kargo'],
    yeni: ['Yeni', 'badge-yeni'],
  };
  const regularBadges = (product.badges || [])
    .filter(b => b !== 'kargo' || Number(product.price) >= FREE_SHIPPING_THRESHOLD)
    .map(b => {
      const [label, cls] = labels[b] || [b, 'badge-coksatan'];
      return `<span class="prod-badge ${cls}">${label}</span>`;
    })
    .join('');

  if (isOut) {
    return `<span class="prod-badge badge-tukendi">Tükendi</span>${regularBadges}`;
  }
  return regularBadges;
}

const FALLBACK_PRODUCT_IMAGE = 'images/tacgranittencereseti.jpg';

function handleStoreImgError(imgEl) {
  if (!imgEl || imgEl.dataset.fallbackApplied === '1') return;
  imgEl.dataset.fallbackApplied = '1';
  imgEl.src = FALLBACK_PRODUCT_IMAGE;
}
window.handleStoreImgError = handleStoreImgError;

function normalizeStoreImagePath(val) {
  if (!val) return '';
  let s = String(val).trim();
  if (s.startsWith('/images/')) s = s.slice(1);
  return s;
}

function getProductImageUrl(product) {
  if (product) {
    if (Array.isArray(product.images) && product.images.length > 0) {
      const first = normalizeStoreImagePath(product.images[0]);
      if (first) return first;
    }
    if (product.image) {
      const raw = String(product.image).trim();
      if (raw.startsWith('[')) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const firstParsed = normalizeStoreImagePath(parsed[0]);
            if (firstParsed) return firstParsed;
          }
        } catch (_) {}
      }
      const cleaned = normalizeStoreImagePath(raw);
      if (cleaned) return cleaned;
    }
  }
  if (!product) return CATEGORY_IMAGE_MAP.dokumTencereSetleri;
  if (product.subCat === 'Döküm Tava Setleri' || product.subCat === 'Döküm Sahan Setleri') {
    return CATEGORY_IMAGE_MAP.tavaSetleri;
  }
  if (product.mainCat === 'Tavalar' || product.category === 'Tava') {
    return CATEGORY_IMAGE_MAP.tekTavalar;
  }
  if (product.subCat === 'Çelik Tencere Setleri') {
    return CATEGORY_IMAGE_MAP.celikTencereSetleri;
  }
  if (product.mainCat === 'Set Ürünler' || product.category === 'Set') {
    return CATEGORY_IMAGE_MAP.dokumTencereSetleri;
  }
  if (product.material === 'Çelik' || product.category === 'Düdüklü' || product.category === 'Çaydanlık') {
    return CATEGORY_IMAGE_MAP.celikTencereler;
  }
  return CATEGORY_IMAGE_MAP.tekDokumTencereler;
}

// Clean minimalist SVG line icons for thumbnails & UI indicators
function getKitchenwareIconSVG(mainCat) {
  if (mainCat === 'Tavalar') {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="12" r="7"/><path d="M17 12h5"/></svg>`;
  }
  if (mainCat === 'Set Ürünler') {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/></svg>`;
  }
  if (mainCat === 'Çaydanlık Takımları') {
    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/></svg>`;
  }
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6z"/><path d="M6 11V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="2" y1="13" x2="4" y2="13"/><line x1="20" y1="13" x2="22" y2="13"/></svg>`;
}

// Fallback image markup for products
function createProductSVG(type) {
  const imgMap = {
    'granite-pot': CATEGORY_IMAGE_MAP.dokumTencereSetleri,
    'steel-pot': CATEGORY_IMAGE_MAP.celikTencereSetleri,
    'cast-iron-pan': CATEGORY_IMAGE_MAP.tekTavalar,
    'pressure-cooker': CATEGORY_IMAGE_MAP.celikTencereler,
    'default': CATEGORY_IMAGE_MAP.dokumTencereSetleri,
  };
  const src = imgMap[type] || imgMap['default'];
  return `<img src="${src}" alt="TAÇ Mutfak Ekipmanı" class="product-card-photo" loading="lazy" />`;
}

// =========================================================
// STATE
// =========================================================
let cart = [];
let wishlist = [];
let activeFilter = 'all';
let activeMainCat = null;
let activeSubCat = null;
let searchQuery = '';
let brandFilter = 'all';
let priceFilter = 'all';
let sortFilter = 'default';
let visibleCount = 16;
const PAGE_SIZE = 4;

// Product Detail Page (PDP) State
let currentView = 'home';
let selectedProduct = null;
let pdpQty = 1;
let activePdpTab = 'specs';
window.appState = {
  view: 'home',
  selectedProduct: null,
};

// =========================================================
// HELPERS
// =========================================================
function formatPrice(n) {
  return '₺' + Number(n || 0).toLocaleString('tr-TR');
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function getDiscount(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round((1 - price / oldPrice) * 100);
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = msg;
  container.appendChild(toast);
  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3200);
}

// =========================================================
// CART
// =========================================================
function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('show');
  document.body.style.overflow = 'auto';
  document.body.style.overflowX = 'hidden';
}
window.closeCart = closeCart;

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const availableStock = getProductStock(product);
  if (availableStock <= 0) {
    return;
  }
  const existing = cart.find(item => item.id === id);
  if (existing) {
    if (existing.qty + 1 > availableStock) {
      showToast(`Stok sınırı: Bu üründen stokta toplam <strong>${availableStock} adet</strong> bulunmaktadır.`, 'wish');
      return;
    }
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2.2" class="inline-svg-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> <strong>${product.name}</strong> sepete eklendi!`, 'cart');
  animateCartBadge();
}
window.addToCart = addToCart;

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}
window.removeFromCart = removeFromCart;

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  const prod = PRODUCTS.find(p => p.id === id);
  const maxStock = prod ? getProductStock(prod) : 99;
  if (maxStock <= 0) {
    removeFromCart(id);
    return;
  }
  if (delta > 0 && item.qty + delta > maxStock) {
    showToast(`Stok sınırı: Maksimum <strong>${maxStock} adet</strong> mevcut.`, 'wish');
    return;
  }
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}
window.changeQty = changeQty;

const PROMO_CODES = {
  TTD10: { rate: 0.10, label: 'TTD10 - %10' },
};
let activePromoCode = null;
let promoFeedbackState = { type: '', message: '' };

function calculatePromoDiscount(subtotal) {
  if (!activePromoCode || !PROMO_CODES[activePromoCode] || !subtotal || subtotal <= 0) return 0;
  return Math.round(subtotal * PROMO_CODES[activePromoCode].rate);
}

function syncPromoCodeUI(subtotal) {
  const discountAmount = calculatePromoDiscount(subtotal);
  const cfg = activePromoCode ? PROMO_CODES[activePromoCode] : null;

  ['cart', 'checkout'].forEach(prefix => {
    const input = document.getElementById(`${prefix}-promo-input`);
    const applyBtn = document.getElementById(`${prefix}-promo-apply-btn`);
    const removeBtn = document.getElementById(`${prefix}-promo-remove-btn`);
    const feedbackEl = document.getElementById(`${prefix}-promo-feedback`);
    const discountRow = document.getElementById(`${prefix}-discount-row`);
    const discountLabel = document.getElementById(`${prefix}-discount-label`);
    const discountVal = document.getElementById(`${prefix}-discount-amount`);

    if (input) {
      if (activePromoCode) {
        input.value = activePromoCode;
        input.readOnly = true;
      } else {
        input.readOnly = false;
      }
    }
    if (applyBtn) applyBtn.style.display = activePromoCode ? 'none' : 'inline-flex';
    if (removeBtn) removeBtn.style.display = activePromoCode ? 'inline-flex' : 'none';

    if (feedbackEl) {
      if (promoFeedbackState.message) {
        feedbackEl.textContent = promoFeedbackState.message;
        feedbackEl.className = `promo-code-feedback ${promoFeedbackState.type}`;
        feedbackEl.style.display = 'block';
      } else {
        feedbackEl.textContent = '';
        feedbackEl.className = 'promo-code-feedback';
        feedbackEl.style.display = 'none';
      }
    }

    if (discountRow && discountVal) {
      if (activePromoCode && cfg && discountAmount > 0) {
        if (discountLabel) discountLabel.textContent = `İndirim Kodu (${cfg.label}):`;
        discountVal.textContent = `-₺${discountAmount.toLocaleString('tr-TR')}`;
        discountRow.style.display = 'flex';
      } else {
        discountRow.style.display = 'none';
      }
    }
  });
}

function applyPromoCode(source = 'cart') {
  const input = document.getElementById(`${source}-promo-input`);
  const normalized = String(input?.value || '').trim().toUpperCase();

  if (!normalized || !PROMO_CODES[normalized]) {
    activePromoCode = null;
    promoFeedbackState = { type: 'error', message: 'Geçersiz indirim kodu.' };
    updateCartUI();
    return;
  }

  activePromoCode = normalized;
  const pct = Math.round(PROMO_CODES[normalized].rate * 100);
  promoFeedbackState = {
    type: 'success',
    message: `${normalized} kodu uygulandı! %${pct} indirim kazandınız.`,
  };
  updateCartUI();
}
window.applyPromoCode = applyPromoCode;

function removePromoCode() {
  activePromoCode = null;
  promoFeedbackState = { type: '', message: '' };
  ['cart', 'checkout'].forEach(prefix => {
    const input = document.getElementById(`${prefix}-promo-input`);
    if (input) {
      input.value = '';
      input.readOnly = false;
    }
  });
  updateCartUI();
}
window.removePromoCode = removePromoCode;

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  // Badge
  const badge = document.getElementById('cart-count');
  badge.textContent = count;
  badge.style.transform = count > 0 ? 'scale(1)' : 'scale(0)';
  badge.setAttribute('data-count', count);

  // Items list
  const itemsEl = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  const emptyCheckoutNotice = document.getElementById('cart-empty-checkout-notice');
  const shippingWrap = document.getElementById('cart-shipping-progress-wrap');
  const promoBox = document.getElementById('cart-promo-box');
  const summaryBox = document.getElementById('cart-summary-box');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (footerEl) footerEl.style.display = 'flex';

  if (cart.length === 0) {
    emptyEl.style.display = 'flex';
    if (emptyCheckoutNotice) emptyCheckoutNotice.style.display = 'block';
    if (shippingWrap) shippingWrap.style.display = 'none';
    if (promoBox) promoBox.style.display = 'none';
    if (summaryBox) summaryBox.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = true;
    // Clear dynamic items
    Array.from(itemsEl.querySelectorAll('.cart-item')).forEach(el => el.remove());
  } else {
    emptyEl.style.display = 'none';
    if (emptyCheckoutNotice) emptyCheckoutNotice.style.display = 'none';
    if (shippingWrap) shippingWrap.style.display = 'block';
    if (promoBox) promoBox.style.display = 'block';
    if (summaryBox) summaryBox.style.display = 'flex';
    if (checkoutBtn) checkoutBtn.disabled = false;
    // Rebuild items
    Array.from(itemsEl.querySelectorAll('.cart-item')).forEach(el => el.remove());
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-img" onclick="closeCart(); openProductDetail(${item.id});" style="cursor:pointer;"><img src="${getProductImageUrl(item)}" alt="TAÇ ${item.name}" loading="lazy" /></div>
        <div class="cart-item-info">
          <div class="cart-item-name" onclick="closeCart(); openProductDetail(${item.id});" style="cursor:pointer;">${item.name}</div>
          <div class="cart-item-material">${item.material} · ${item.description}</div>
          <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
          <div class="cart-item-actions">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Kaldır</button>
          </div>
        </div>
      `;
      itemsEl.appendChild(div);
    });
  }

  // Totals (Promo discount + Free shipping on payable subtotal >= 3.500 TL, otherwise 200 TL)
  const discountAmount = calculatePromoDiscount(total);
  const discountedSubtotal = Math.max(0, total - discountAmount);
  const shippingCost = cart.length > 0 ? calculateShippingCost(discountedSubtotal) : 0;
  const grandTotal = discountedSubtotal + shippingCost;

  document.getElementById('cart-subtotal').textContent = formatPrice(total);
  document.getElementById('cart-shipping').textContent =
    cart.length > 0 && shippingCost === 0
      ? 'Ücretsiz (3.500 TL Üzeri Hediye)'
      : formatPrice(shippingCost);
  document.getElementById('cart-total').textContent = formatPrice(grandTotal);
  syncPromoCodeUI(total);

  // Dynamic progress bar in cart drawer
  const progBar = document.getElementById('cart-shipping-bar');
  const progMsg = document.getElementById('cart-shipping-msg');
  if (progBar && progMsg) {
    const pct = Math.min(100, Math.round((discountedSubtotal / FREE_SHIPPING_THRESHOLD) * 100));
    progBar.style.width = `${Math.max(12, pct)}%`;
    if (discountedSubtotal < FREE_SHIPPING_THRESHOLD) {
      const remaining = FREE_SHIPPING_THRESHOLD - discountedSubtotal;
      progMsg.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2" class="inline-svg-icon"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> Ücretsiz kargo için sepetinize <strong>₺${remaining.toLocaleString('tr-TR')}</strong> daha ürün ekleyin`;
    } else {
      progMsg.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2.2" class="inline-svg-icon"><polyline points="20 6 9 17 4 12"/></svg> <strong>Kargo: Ücretsiz (3.500 TL Üzeri Hediye)</strong>`;
    }
  }

  renderCheckoutSummary();
}

function animateCartBadge() {
  const badge = document.getElementById('cart-count');
  badge.style.transform = 'scale(1.5)';
  setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
}

// =========================================================
// WISHLIST & FAVORITES PAGE
// =========================================================
function updateWishlistBadge() {
  const count = wishlist.length;
  const wBadge = document.getElementById('wishlist-count');
  if (wBadge) {
    wBadge.textContent = count;
    wBadge.style.transform = count > 0 ? 'scale(1)' : 'scale(0)';
    wBadge.setAttribute('data-count', count);
  }
}

function toggleWishlist(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    showToast(`<strong>${product.name}</strong> favorilerden çıkarıldı.`, 'wish');
  } else {
    wishlist.push(id);
    showToast(`<svg width="15" height="15" viewBox="0 0 24 24" fill="#F97316" stroke="#F97316" stroke-width="2" class="inline-svg-icon"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> <strong>${product.name}</strong> favorilere eklendi!`, 'wish');
  }
  updateWishlistBadge();
  renderProducts();
  renderFavoritesPage();
  if (selectedProduct && selectedProduct.id === id) {
    const pdpWishBtn = document.getElementById('pdp-wish-btn');
    if (pdpWishBtn) pdpWishBtn.classList.toggle('active', wishlist.includes(id));
  }
  if (currentView === 'product-detail' && selectedProduct) {
    renderRelatedProducts(selectedProduct);
  }
}
window.toggleWishlist = toggleWishlist;

function renderFavoritesPage() {
  const grid = document.getElementById('favorites-grid');
  const empty = document.getElementById('favorites-empty');
  const countPill = document.getElementById('favorites-page-count');
  const addAllBtn = document.getElementById('fav-add-all-btn');
  const clearBtn = document.getElementById('fav-clear-btn');

  if (!grid || !empty) return;

  const favProducts = PRODUCTS.filter(p => wishlist.includes(p.id));
  if (countPill) countPill.textContent = `${favProducts.length} Ürün`;

  grid.innerHTML = '';

  if (favProducts.length === 0) {
    empty.style.display = 'block';
    grid.style.display = 'none';
    if (addAllBtn) addAllBtn.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  grid.style.display = 'grid';
  if (addAllBtn) addAllBtn.style.display = 'inline-flex';
  if (clearBtn) clearBtn.style.display = 'inline-flex';

  favProducts.forEach((product, i) => {
    const disc = getDiscount(product.price, product.oldPrice);
    const imgUrl = getProductImageUrl(product);
    const isOut = isProductOutOfStock(product);
    const badgeHTML = buildProductBadgesHTML(product);

    const card = document.createElement('div');
    card.className = `product-card${isOut ? ' out-of-stock' : ''}`;
    card.style.animationDelay = `${i * 50}ms`;
    card.addEventListener('click', (e) => handleProductCardClick(e, product.id));
    card.innerHTML = `
      <div class="product-card-img">
        <div class="product-badges">${badgeHTML}</div>
        <button class="wish-btn active" onclick="toggleWishlist(${product.id})" title="Favorilerden çıkar" aria-label="Favorilerden çıkar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <img src="${imgUrl}" alt="TAÇ ${product.name}" class="product-card-photo" onerror="handleStoreImgError(this)" loading="lazy" />
        <div class="quick-add-overlay">
          <button class="quick-add-btn ${isOut ? 'disabled-stock' : ''}" ${isOut ? 'disabled' : `onclick="addToCart(${product.id})"`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="inline-svg-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            ${isOut ? 'Tükendi' : 'Hızlı Ekle'}
          </button>
        </div>
      </div>
      <div class="product-card-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-material">${product.material} · ${product.description}</div>
        ${renderStockPillHTML(product)}
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
          ${disc > 0 ? `<span class="price-discount">-%${disc}</span>` : ''}
        </div>
        <div class="add-to-cart-row">
          <button class="add-to-cart-btn ${isOut ? 'disabled-stock' : ''}" ${isOut ? 'disabled' : `onclick="addToCart(${product.id})"`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            ${isOut ? 'Tükendi' : 'Sepete Ekle'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openFavoritesPage() {
  currentView = 'favorites';
  window.appState = { view: 'favorites', selectedProduct: null };
  document.body.classList.remove('category-page-mode', 'account-page-mode', 'checkout-page-mode', 'product-detail-mode', 'bundle-builder-mode');
  document.body.classList.add('favorites-page-mode');
  document.getElementById('nav-bundle-builder-btn')?.classList.remove('active');

  document.querySelectorAll('.cat-nav-home, .cat-nav-link').forEach(el => el.classList.remove('active'));
  document.getElementById('account-btn')?.classList.remove('active-page');
  document.getElementById('wishlist-btn')?.classList.add('active-page');

  document.getElementById('categories-dropdown')?.classList.remove('open');
  document.getElementById('mobile-menu-btn')?.classList.remove('open');
  document.getElementById('mobile-nav')?.classList.remove('open');

  renderFavoritesPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.openFavoritesPage = openFavoritesPage;

// =========================================================
// USER ACCOUNT SYSTEM (HESABIM: GİRİŞ YAP / KAYIT OL / PROFİL)
// =========================================================
let currentUser = null;

function openAccountPage() {
  currentView = 'account';
  window.appState = { view: 'account', selectedProduct: null };
  document.body.classList.remove('category-page-mode', 'favorites-page-mode', 'checkout-page-mode', 'product-detail-mode', 'bundle-builder-mode');
  document.body.classList.add('account-page-mode');
  document.getElementById('nav-bundle-builder-btn')?.classList.remove('active');

  document.querySelectorAll('.cat-nav-home, .cat-nav-link').forEach(el => el.classList.remove('active'));
  document.getElementById('wishlist-btn')?.classList.remove('active-page');
  document.getElementById('account-btn')?.classList.add('active-page');

  document.getElementById('categories-dropdown')?.classList.remove('open');
  document.getElementById('mobile-menu-btn')?.classList.remove('open');
  document.getElementById('mobile-nav')?.classList.remove('open');

  updateAccountView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.openAccountPage = openAccountPage;

function toggleAuthPasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  if (btn) btn.setAttribute('aria-pressed', String(show));
}
window.toggleAuthPasswordVisibility = toggleAuthPasswordVisibility;

function showAuthFeedback(formType, type, message) {
  const box = document.getElementById(`${formType}-auth-feedback`);
  if (!box) return;
  if (!message) {
    box.style.display = 'none';
    box.textContent = '';
    box.className = 'auth-feedback-box';
    return;
  }
  box.textContent = message;
  box.className = `auth-feedback-box ${type}`;
  box.style.display = 'block';
}

function mapSupabaseUserToCurrentUser(sbUser) {
  if (!sbUser) return null;
  const meta = sbUser.user_metadata || {};
  const email = sbUser.email || '';
  const fallbackName = email ? email.split('@')[0] : 'Üye';
  const fullName = String(meta.full_name || meta.name || fallbackName).trim();
  const phone = String(meta.phone || '').trim();
  return {
    id: sbUser.id,
    name: fullName,
    email,
    phone,
  };
}

function translateSupabaseAuthError(error) {
  const msg = String(error?.message || '').toLowerCase();
  if (msg.includes('already registered') || msg.includes('already exists')) {
    return 'Bu e-posta adresi zaten kayıtlı.';
  }
  if (msg.includes('invalid login credentials')) {
    return 'E-posta adresi veya şifre hatalı.';
  }
  if (msg.includes('email not confirmed')) {
    return 'Lütfen giriş yapmadan önce e-posta adresinize gönderilen onay bağlantısına tıklayın.';
  }
  if (msg.includes('password') && msg.includes('6')) {
    return 'Şifreniz en az 6 karakter olmalıdır.';
  }
  if (msg.includes('invalid email') || msg.includes('unable to validate email')) {
    return 'Lütfen geçerli bir e-posta adresi girin.';
  }
  if (msg.includes('rate limit')) {
    return 'Çok fazla deneme yaptınız. Lütfen biraz bekleyip tekrar deneyin.';
  }
  return error?.message || 'Kimlik doğrulama sırasında bir hata oluştu.';
}

function closeHeaderAccountDropdown() {
  const drop = document.getElementById('header-account-dropdown');
  if (drop) drop.style.display = 'none';
}
window.closeHeaderAccountDropdown = closeHeaderAccountDropdown;

async function handleUserLogout() {
  closeHeaderAccountDropdown();
  if (supabaseClient && supabaseClient.auth) {
    try {
      await supabaseClient.auth.signOut();
    } catch (err) {
      console.warn('Supabase signOut warning:', err);
    }
  }
  currentUser = null;
  updateAccountView();
  showToast('Hesabınızdan güvenle çıkış yapıldı.', 'success');
}
window.handleUserLogout = handleUserLogout;

async function handleForgotPassword() {
  const emailInput = document.getElementById('login-email');
  const email = (emailInput?.value || '').trim();
  if (!email || !email.includes('@')) {
    showAuthFeedback('login', 'error', 'Lütfen şifre sıfırlama bağlantısı için geçerli e-posta adresinizi girin.');
    emailInput?.focus();
    return;
  }
  if (!supabaseClient || !supabaseClient.auth) {
    showAuthFeedback('login', 'error', 'Kimlik doğrulama servisi şu anda kullanılamıyor.');
    return;
  }

  try {
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    });
    if (error) {
      showAuthFeedback('login', 'error', translateSupabaseAuthError(error));
      return;
    }
    showAuthFeedback('login', 'success', 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
    showToast('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.', 'success');
  } catch (err) {
    showAuthFeedback('login', 'error', 'Şifre sıfırlama isteği gönderilemedi.');
  }
}
window.handleForgotPassword = handleForgotPassword;

function switchAuthTab(tab) {
  showAuthFeedback('login', '', '');
  showAuthFeedback('register', '', '');
  const loginBtn = document.getElementById('tab-login-btn');
  const regBtn = document.getElementById('tab-register-btn');
  const loginForm = document.getElementById('login-form');
  const regForm = document.getElementById('register-form');

  if (tab === 'login') {
    loginBtn?.classList.add('active');
    regBtn?.classList.remove('active');
    if (loginForm) loginForm.style.display = 'flex';
    if (regForm) regForm.style.display = 'none';
  } else {
    regBtn?.classList.add('active');
    loginBtn?.classList.remove('active');
    if (regForm) regForm.style.display = 'flex';
    if (loginForm) loginForm.style.display = 'none';
  }
}
window.switchAuthTab = switchAuthTab;

function switchAccountPanel(panel) {
  document.querySelectorAll('.profile-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.accPanel === panel);
  });
  const ordersPanel = document.getElementById('acc-panel-orders');
  const addrPanel = document.getElementById('acc-panel-addresses');
  if (ordersPanel) ordersPanel.style.display = panel === 'orders' ? 'block' : 'none';
  if (addrPanel) addrPanel.style.display = panel === 'addresses' ? 'block' : 'none';
}
window.switchAccountPanel = switchAccountPanel;

function updateAccountView() {
  const authView = document.getElementById('account-auth-view');
  const profileView = document.getElementById('account-profile-view');
  const headerTitle = document.getElementById('account-header-title');
  const headerSub = document.getElementById('account-header-sub');
  const accBtnLabel = document.getElementById('account-btn-label') || document.querySelector('#account-btn .action-label');
  const dropNameEl = document.getElementById('header-acc-drop-name');
  const dropEmailEl = document.getElementById('header-acc-drop-email');

  if (currentUser) {
    if (authView) authView.style.display = 'none';
    if (profileView) profileView.style.display = 'grid';
    if (headerTitle) headerTitle.textContent = `Hoş Geldiniz, ${currentUser.name}`;
    if (headerSub) headerSub.textContent = 'Siparişlerinizi, kayıtlı adreslerinizi ve hesap bilgilerinizi buradan yönetebilirsiniz.';

    const nameEl = document.getElementById('profile-user-name');
    const emailEl = document.getElementById('profile-user-email');
    const initialsEl = document.getElementById('profile-avatar-initials');
    if (nameEl) nameEl.textContent = currentUser.name;
    if (emailEl) emailEl.textContent = currentUser.email;
    if (dropNameEl) dropNameEl.textContent = currentUser.name;
    if (dropEmailEl) dropEmailEl.textContent = currentUser.email;
    if (initialsEl) {
      const parts = currentUser.name.trim().split(' ').filter(Boolean);
      initialsEl.textContent = parts.map(p => p[0]).join('').toUpperCase().slice(0, 2) || 'ÜY';
    }
    if (accBtnLabel) accBtnLabel.textContent = currentUser.name.split(' ')[0] || 'Hesabım';
  } else {
    closeHeaderAccountDropdown();
    if (authView) authView.style.display = 'block';
    if (profileView) profileView.style.display = 'none';
    if (headerTitle) headerTitle.textContent = 'Üye Girişi & Kayıt';
    if (headerSub) headerSub.textContent = 'Siparişlerinizi takip etmek ve hızlı alışveriş yapmak için giriş yapın veya üye olun.';
    if (accBtnLabel) accBtnLabel.textContent = 'Giriş Yap';
  }
}

// =========================================================
// CHECKOUT & PAYMENT FLOW (/odeme)
// =========================================================
let activePaymentMethod = 'eft';

const DEFAULT_EFT_INFO = {
  bankName: 'AKBANK',
  receiver: 'Yunus Emre Pilavcı',
  iban: 'TR11 0004 6001 4088 8000 4585 42',
};

function updateCheckoutLegalConsentState() {
  const consentMesafeli = document.getElementById('co-consent-mesafeli');
  const consentKvkk = document.getElementById('co-consent-kvkk');
  const completeBtn = document.getElementById('complete-order-btn');

  if (!completeBtn) return;

  const isMesafeliChecked = Boolean(consentMesafeli?.checked);
  const isKvkkChecked = Boolean(consentKvkk?.checked);
  completeBtn.disabled = !(cart.length > 0 && isMesafeliChecked && isKvkkChecked);
}
window.updateCheckoutLegalConsentState = updateCheckoutLegalConsentState;

function openCheckoutPage() {
  if (cart.length === 0) {
    showToast('Sepetiniz boş', 'wish');
    return;
  }

  closeCart();

  currentView = 'checkout';
  window.appState = { view: 'checkout', selectedProduct: null };
  document.body.classList.remove('category-page-mode', 'favorites-page-mode', 'account-page-mode', 'product-detail-mode', 'bundle-builder-mode');
  document.body.classList.add('checkout-page-mode');
  document.getElementById('nav-bundle-builder-btn')?.classList.remove('active');

  document.querySelectorAll('.cat-nav-home, .cat-nav-link').forEach(el => el.classList.remove('active'));
  document.getElementById('wishlist-btn')?.classList.remove('active-page');
  document.getElementById('account-btn')?.classList.remove('active-page');

  document.getElementById('categories-dropdown')?.classList.remove('open');
  document.getElementById('mobile-menu-btn')?.classList.remove('open');
  document.getElementById('mobile-nav')?.classList.remove('open');

  // Show main checkout split view and hide order confirmation view
  const mainView = document.getElementById('checkout-main-view');
  const successView = document.getElementById('checkout-success-view');
  const errorBox = document.getElementById('checkout-form-error');
  if (mainView) mainView.style.display = 'grid';
  if (successView) successView.style.display = 'none';
  if (errorBox) errorBox.style.display = 'none';

  // Reset legal consent checkboxes on new checkout view entry
  const consentMesafeli = document.getElementById('co-consent-mesafeli');
  const consentKvkk = document.getElementById('co-consent-kvkk');
  if (consentMesafeli) consentMesafeli.checked = false;
  if (consentKvkk) consentKvkk.checked = false;

  // Pre-fill user info if logged in and fields are empty
  if (currentUser) {
    const nameInput = document.getElementById('co-fullname');
    const emailInput = document.getElementById('co-email');
    const phoneInput = document.getElementById('co-phone');
    if (nameInput && !nameInput.value.trim()) nameInput.value = currentUser.name;
    if (emailInput && !emailInput.value.trim()) emailInput.value = currentUser.email;
    if (phoneInput && !phoneInput.value.trim() && currentUser.phone) phoneInput.value = currentUser.phone;
  }

  try {
    if (window.history && window.history.replaceState) {
      window.history.replaceState({ page: 'odeme' }, 'Ödeme | Tencere Tava Dünyası', '#odeme');
    }
  } catch (_) {}

  renderCheckoutSummary();
  updateCheckoutLegalConsentState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.openCheckoutPage = openCheckoutPage;

function renderCheckoutSummary() {
  const listEl = document.getElementById('checkout-items-list');
  const countEl = document.getElementById('checkout-item-count');
  const emptyNotice = document.getElementById('checkout-empty-notice');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const shippingEl = document.getElementById('checkout-shipping');
  const totalEl = document.getElementById('checkout-total');
  const completeBtn = document.getElementById('complete-order-btn');

  if (!listEl) return;

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const discountAmount = calculatePromoDiscount(subtotal);
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const shippingCost = cart.length > 0 ? calculateShippingCost(discountedSubtotal) : 0;
  const grandTotal = discountedSubtotal + shippingCost;

  if (countEl) countEl.textContent = `${count} Ürün`;
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) {
    shippingEl.textContent =
      cart.length > 0 && shippingCost === 0
        ? 'Ücretsiz (3.500 TL Üzeri Hediye)'
        : `${shippingCost} TL`;
  }
  if (totalEl) totalEl.textContent = formatPrice(grandTotal);
  syncPromoCodeUI(subtotal);

  if (cart.length === 0) {
    listEl.innerHTML = '';
    if (emptyNotice) emptyNotice.style.display = 'block';
    if (completeBtn) completeBtn.disabled = true;
    return;
  }

  if (emptyNotice) emptyNotice.style.display = 'none';
  updateCheckoutLegalConsentState();

  listEl.innerHTML = cart.map(item => `
    <div class="checkout-summary-item">
      <div class="checkout-summary-thumb">
        <img src="${getProductImageUrl(item)}" alt="TAÇ ${item.name}" loading="lazy" />
        <span class="checkout-summary-qty">${item.qty}</span>
      </div>
      <div class="checkout-summary-info">
        <div class="checkout-summary-name">${item.name}</div>
        <div class="checkout-summary-meta">${item.brand} · ${item.material}</div>
      </div>
      <div class="checkout-summary-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join('');
}
window.renderCheckoutSummary = renderCheckoutSummary;

function switchPaymentMethod() {
  activePaymentMethod = 'eft';
}
window.switchPaymentMethod = switchPaymentMethod;

function updateEftBankDetails() {
  const bankNameEl = document.getElementById('eft-bank-name');
  const receiverEl = document.getElementById('eft-receiver-name');
  const ibanEl = document.getElementById('eft-iban-text');

  if (bankNameEl) bankNameEl.textContent = DEFAULT_EFT_INFO.bankName;
  if (receiverEl) receiverEl.textContent = DEFAULT_EFT_INFO.receiver;
  if (ibanEl) ibanEl.textContent = DEFAULT_EFT_INFO.iban;
}
window.updateEftBankDetails = updateEftBankDetails;

function copyIbanFromElement(ibanElId, labelElId, btnElId) {
  const ibanEl = document.getElementById(ibanElId);
  const labelEl = document.getElementById(labelElId);
  const copyBtn = document.getElementById(btnElId);
  if (!ibanEl) return;

  const formattedIban = ibanEl.textContent.trim();
  const cleanIban = formattedIban.replace(/\s+/g, '');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(cleanIban).catch(() => {});
  } else {
    const temp = document.createElement('textarea');
    temp.value = cleanIban;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    temp.remove();
  }

  if (labelEl) labelEl.textContent = 'Kopyalandı ✓';
  copyBtn?.classList.add('copied');
  showToast(`IBAN kopyalandı: <strong>${formattedIban}</strong>`, 'success');

  setTimeout(() => {
    if (labelEl) labelEl.textContent = 'IBAN Kopyala';
    copyBtn?.classList.remove('copied');
  }, 2200);
}

function copyCheckoutIban() {
  copyIbanFromElement('eft-iban-text', 'copy-iban-label', 'copy-iban-btn');
}
window.copyCheckoutIban = copyCheckoutIban;

function copyConfirmationIban() {
  copyIbanFromElement('confirm-iban-text', 'confirm-copy-iban-label', 'confirm-copy-iban-btn');
}
window.copyConfirmationIban = copyConfirmationIban;

function generateNextOrderNumber() {
  try {
    const lastSeq = Number(localStorage.getItem('ttd_order_seq_v1') || '1000');
    const nextSeq = Math.max(1001, lastSeq + 1);
    localStorage.setItem('ttd_order_seq_v1', String(nextSeq));
    return `#TTD-${nextSeq}`;
  } catch (_) {
    return `#TTD-${Math.floor(1001 + Math.random() * 8999)}`;
  }
}

async function submitCheckoutOrder() {
  const errorBox = document.getElementById('checkout-form-error');
  const showError = (msg, invalidElements = []) => {
    document.querySelectorAll('#checkout-page .input-invalid').forEach(el => el.classList.remove('input-invalid'));
    invalidElements.forEach(el => el?.classList.add('input-invalid'));
    if (errorBox) {
      errorBox.textContent = msg;
      errorBox.style.display = 'block';
    }
    showToast(msg, 'wish');
    if (invalidElements[0]) {
      invalidElements[0].focus();
    }
  };

  if (cart.length === 0) {
    showError('Sepetiniz boş. Sipariş oluşturmak için lütfen sepetinize ürün ekleyin.');
    return;
  }

  // Validate delivery address fields
  const fullNameEl = document.getElementById('co-fullname');
  const phoneEl = document.getElementById('co-phone');
  const emailEl = document.getElementById('co-email');
  const cityEl = document.getElementById('co-city');
  const districtEl = document.getElementById('co-district');
  const addressEl = document.getElementById('co-address');
  const noteEl = document.getElementById('co-note');

  const fullName = fullNameEl?.value.trim() || '';
  const phone = phoneEl?.value.trim() || '';
  const email = emailEl?.value.trim() || '';
  const city = cityEl?.value.trim() || '';
  const district = districtEl?.value.trim() || '';
  const address = addressEl?.value.trim() || '';
  const note = noteEl?.value.trim() || '';

  const missingAddr = [];
  if (fullName.length < 3) missingAddr.push(fullNameEl);
  if (phone.replace(/\D/g, '').length < 10) missingAddr.push(phoneEl);
  if (!email.includes('@') || !email.includes('.')) missingAddr.push(emailEl);
  if (!city) missingAddr.push(cityEl);
  if (district.length < 2) missingAddr.push(districtEl);
  if (address.length < 8) missingAddr.push(addressEl);

  if (missingAddr.length > 0) {
    showError('Lütfen teslimat adresi alanlarını eksiksiz ve geçerli şekilde doldurunuz.', missingAddr);
    return;
  }

  // Validate mandatory legal consent checkboxes (Türkiye E-Ticaret Mevzuatı)
  const consentMesafeli = document.getElementById('co-consent-mesafeli');
  const consentKvkk = document.getElementById('co-consent-kvkk');

  if (!consentMesafeli?.checked || !consentKvkk?.checked) {
    const missingConsents = [];
    if (!consentMesafeli?.checked) missingConsents.push(consentMesafeli);
    if (!consentKvkk?.checked) missingConsents.push(consentKvkk);
    showError(
      'Siparişi tamamlamak için Ön Bilgilendirme Formu / Mesafeli Satış Sözleşmesi ve KVKK Aydınlatma Metni onay kutucuklarını işaretlemeniz gerekmektedir.',
      missingConsents
    );
    return;
  }

  const paymentSummaryText = `Havale / EFT (${DEFAULT_EFT_INFO.bankName} — ${DEFAULT_EFT_INFO.iban})`;

  // Clear validation errors
  document.querySelectorAll('#checkout-page .input-invalid').forEach(el => el.classList.remove('input-invalid'));
  if (errorBox) errorBox.style.display = 'none';

  // Calculate order snapshot before clearing cart
  const orderedItems = cart.map(item => ({ ...item }));
  const subtotal = orderedItems.reduce((s, i) => s + i.price * i.qty, 0);
  const appliedPromo = activePromoCode;
  const discountAmount = calculatePromoDiscount(subtotal);
  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const shippingCost = calculateShippingCost(discountedSubtotal);
  const grandTotal = discountedSubtotal + shippingCost;
  const orderNumber = generateNextOrderNumber();

  // Build live order payload for Supabase `orders` table (payment_method: "Havale / EFT", status: "Ödeme Bekleniyor")
  const orderRecord = {
    order_number: orderNumber,
    customer_name: fullName,
    customer_phone: phone,
    customer_address: `${address} (${district} / ${city})${appliedPromo ? ` — İndirim Kodu: ${appliedPromo} (-${formatPrice(discountAmount)})` : ''}${note ? ' — Not: ' + note : ''}`,
    payment_method: 'Havale / EFT',
    items: orderedItems.map(item => ({
      id: Number(item.id),
      title: item.name,
      name: item.name,
      brand: item.brand,
      qty: Number(item.qty),
      price: Number(item.price),
      image_url: getProductImageUrl(item),
    })),
    total_amount: Number(grandTotal),
    status: 'Ödeme Bekleniyor',
    created_at: new Date().toISOString(),
  };

  // Populate confirmation screen
  const orderIdEl = document.getElementById('confirm-order-id');
  const confirmTotalEl = document.getElementById('confirm-total-amount');
  const confirmNoteOrderNoEl = document.getElementById('confirm-note-order-no');
  const confirmBankNameEl = document.getElementById('confirm-bank-name');
  const confirmReceiverEl = document.getElementById('confirm-receiver-name');
  const confirmIbanEl = document.getElementById('confirm-iban-text');
  const whatsappBtnEl = document.getElementById('confirm-whatsapp-dekont-btn');
  const addrSummaryEl = document.getElementById('confirm-address-summary');
  const paySummaryEl = document.getElementById('confirm-payment-summary');
  const itemsSummaryEl = document.getElementById('confirm-items-summary');

  if (orderIdEl) orderIdEl.textContent = orderNumber;
  if (confirmTotalEl) confirmTotalEl.textContent = formatPrice(grandTotal);
  if (confirmNoteOrderNoEl) confirmNoteOrderNoEl.textContent = orderNumber;
  if (confirmBankNameEl) confirmBankNameEl.textContent = DEFAULT_EFT_INFO.bankName;
  if (confirmReceiverEl) confirmReceiverEl.textContent = DEFAULT_EFT_INFO.receiver;
  if (confirmIbanEl) confirmIbanEl.textContent = DEFAULT_EFT_INFO.iban;

  if (whatsappBtnEl) {
    const promoWaPart = appliedPromo ? ` (${appliedPromo} İndirimi: -${formatPrice(discountAmount)})` : '';
    const waText = `Merhaba Tencere Tava Dünyası, ${orderNumber} numaralı siparişim (Toplam: ${formatPrice(grandTotal)}${promoWaPart}) için Havale/EFT ödeme dekontumu paylaşıyorum. Müşteri: ${fullName}`;
    whatsappBtnEl.href = `https://wa.me/905320000000?text=${encodeURIComponent(waText)}`;
  }

  if (addrSummaryEl) {
    addrSummaryEl.innerHTML = `
      <p><strong>${fullName}</strong> (${phone})</p>
      <p>${address}</p>
      <p><strong>${district} / ${city}</strong> · ${email}</p>
      ${note ? `<p class="confirm-note">Not: ${note}</p>` : ''}
    `;
  }

  if (paySummaryEl) {
    paySummaryEl.innerHTML = `
      <p><strong>Ödeme Yöntemi:</strong> Havale / EFT</p>
      <p><strong>Sipariş Durumu:</strong> <span class="text-orange">Ödeme Bekleniyor</span></p>
      <p><strong>Ara Toplam:</strong> ${formatPrice(subtotal)} + <strong>Kargo:</strong> ${shippingCost === 0 ? 'Ücretsiz (3.500 TL Üzeri Hediye)' : `${shippingCost} TL`}</p>
      ${appliedPromo && discountAmount > 0 ? `<p><strong>İndirim Kodu (${appliedPromo} - %10):</strong> <span style="color:#15803D; font-weight:700;">-₺${discountAmount.toLocaleString('tr-TR')}</span></p>` : ''}
      <p class="confirm-grand-total"><strong>Genel Toplam:</strong> <span class="text-orange">${formatPrice(grandTotal)}</span></p>
      <p class="confirm-eft-reminder">Açıklama kısmına <strong>${orderNumber}</strong> yazmayı unutmayınız.</p>
    `;
  }

  if (itemsSummaryEl) {
    itemsSummaryEl.innerHTML = `
      <h4>Sipariş Edilen Ürünler (${orderedItems.reduce((s, i) => s + i.qty, 0)} Adet)</h4>
      <div class="confirm-items-grid">
        ${orderedItems.map(item => `
          <div class="confirm-item-pill">
            <img src="${getProductImageUrl(item)}" alt="TAÇ ${item.name}" loading="lazy" />
            <div>
              <strong>${item.name}</strong>
              <span>${item.qty} Adet × ${formatPrice(item.price)} = <b>${formatPrice(item.price * item.qty)}</b></span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Also add to Account "Siparişlerim" panel so user can see it there
  const ordersPanel = document.getElementById('acc-panel-orders');
  if (ordersPanel) {
    const firstItem = orderedItems[0];
    const extraCount = orderedItems.length > 1 ? ` + ${orderedItems.length - 1} ürün daha` : '';
    const newOrderCard = document.createElement('div');
    newOrderCard.className = 'order-card';
    newOrderCard.innerHTML = `
      <div class="order-card-top">
        <div>
          <strong>Sipariş No: ${orderNumber}</strong>
          <span class="order-date">Bugün</span>
        </div>
        <span class="order-status shipping">Ödeme Bekleniyor</span>
      </div>
      <div class="order-card-body">
        <div class="order-item-row">
          <span class="order-item-emoji"><img src="${getProductImageUrl(firstItem)}" alt="TAÇ ${firstItem.name}" loading="lazy" /></span>
          <div class="order-item-text">
            <strong>${firstItem.name}${extraCount}</strong>
            <span>${orderedItems.reduce((s, i) => s + i.qty, 0)} Adet · Havale / EFT · Kargo: ${shippingCost === 0 ? 'Ücretsiz' : `${shippingCost} TL`}</span>
          </div>
          <strong class="text-orange">${formatPrice(grandTotal)}</strong>
        </div>
      </div>
    `;
    const panelHeader = ordersPanel.querySelector('.acc-panel-header');
    if (panelHeader && panelHeader.nextSibling) {
      ordersPanel.insertBefore(newOrderCard, panelHeader.nextSibling);
    } else {
      ordersPanel.appendChild(newOrderCard);
    }
  }

  // Clear active cart & promo code and sync UI
  cart = [];
  activePromoCode = null;
  promoFeedbackState = { type: '', message: '' };
  ['cart', 'checkout'].forEach(prefix => {
    const inp = document.getElementById(`${prefix}-promo-input`);
    if (inp) {
      inp.value = '';
      inp.readOnly = false;
    }
  });
  updateCartUI();

  // Switch from checkout split form to Order Confirmation view
  const mainView = document.getElementById('checkout-main-view');
  const successView = document.getElementById('checkout-success-view');
  if (mainView) mainView.style.display = 'none';
  if (successView) successView.style.display = 'block';

  showToast(`Siparişiniz alındı! Sipariş No: <strong>${orderNumber}</strong> (Durum: Ödeme Bekleniyor)`, 'success');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Save order to Supabase `orders` table and decrement purchased stock in `products` table
  try {
    await decrementOrderedProductsStock(orderedItems);
    await saveOrderToSupabase(orderRecord);
  } catch (err) {
    console.warn('Order/stock sync warning:', err);
  }
}
window.submitCheckoutOrder = submitCheckoutOrder;

// =========================================================
// ENTRY FLASH DEALS (FLAŞ İNDİRİM)
// =========================================================
function renderFlashDeals() {
  const grid = document.getElementById('flash-deals-grid');
  if (!grid) return;

  if (isInitialProductsLoading) {
    grid.innerHTML = Array.from({ length: 4 }).map(() => `
      <div class="flash-deal-skeleton" aria-hidden="true">
        <div class="skeleton-box skeleton-line short"></div>
        <div class="skeleton-box skeleton-line"></div>
        <div class="skeleton-box skeleton-line price"></div>
      </div>
    `).join('');
    return;
  }

  // Pick 4 high-discount products for the Flash Deals showcase
  const flashIds = [14, 1, 5, 12];
  const flashItems = flashIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  grid.innerHTML = flashItems.map(item => {
    const disc = getDiscount(item.price, item.oldPrice) || 30;
    const isOut = isProductOutOfStock(item);
    const stock = getProductStock(item);
    const featuredClass = item.id === 12 ? ' featured' : '';
    return `
      <div class="flash-deal-card${featuredClass}" onclick="handleProductCardClick(event, ${item.id})">
        <span class="flash-discount-pill">${isOut ? 'TÜKENDİ' : `%${disc} İndirim`}</span>
        <div class="flash-deal-top">
          <div class="flash-deal-emoji"><img src="${getProductImageUrl(item)}" alt="TAÇ ${item.name}" onerror="handleStoreImgError(this)" loading="lazy" /></div>
          <div>
            <div class="flash-deal-brand">${item.brand} · ${item.material} · ${isOut ? '<span style="color:#DC2626;">Tükendi</span>' : `Stok: ${stock}`}</div>
            <div class="flash-deal-name">${item.name}</div>
          </div>
        </div>
        <div class="flash-deal-bottom">
          <div class="flash-deal-prices">
            ${item.oldPrice ? `<span class="flash-old-p">${formatPrice(item.oldPrice)}</span>` : ''}
            <span class="flash-new-p">${formatPrice(item.price)}</span>
          </div>
          <button class="flash-add-btn ${isOut ? 'disabled-stock' : ''}" ${isOut ? 'disabled' : `onclick="event.stopPropagation(); addToCart(${item.id})"`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="inline-svg-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            ${isOut ? 'Tükendi' : 'Sepete Ekle'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// =========================================================
// PRODUCTS RENDER
// =========================================================
function matchesSubCategoryFilter(product, subCat) {
  if (!subCat) return true;
  if (product.subCat === subCat || product.mainCat === subCat || product.category === subCat) {
    return true;
  }

  const subLower = String(subCat).trim().toLocaleLowerCase('tr-TR');
  const titleText = `${product.name || ''} ${product.title || ''}`.toLocaleLowerCase('tr-TR');
  const catText = `${product.mainCat || ''} ${product.subCat || ''} ${product.category || ''}`.toLocaleLowerCase('tr-TR');
  const matText = String(product.material || '').toLocaleLowerCase('tr-TR');
  const haystack = `${titleText} ${catText} ${matText}`;

  if (subLower === 'çelik tencere setleri') {
    return (matText.includes('çelik') || haystack.includes('çelik')) && (haystack.includes('set') || haystack.includes('tencere'));
  }
  if (subLower === 'granit tencere setleri') {
    return (matText.includes('granit') || haystack.includes('granit')) && (haystack.includes('set') || haystack.includes('tencere'));
  }
  if (subLower === 'mini tencere setleri') {
    return haystack.includes('mini') && (haystack.includes('set') || haystack.includes('tencere'));
  }
  if (subLower === 'döküm tava setleri') {
    return (matText.includes('döküm') || haystack.includes('döküm')) && (haystack.includes('tava') || haystack.includes('set'));
  }
  if (subLower === 'döküm sahan setleri') {
    return (matText.includes('döküm') || haystack.includes('döküm')) && (haystack.includes('sahan') || haystack.includes('set'));
  }
  if (subLower === 'granit tencereler') {
    return (matText.includes('granit') || haystack.includes('granit')) && (haystack.includes('tencere') || product.mainCat === 'Tencereler');
  }
  if (subLower === 'çelik tencereler') {
    return (matText.includes('çelik') || haystack.includes('çelik')) && (haystack.includes('tencere') || product.mainCat === 'Tencereler');
  }
  if (subLower === 'döküm tencereler') {
    return (matText.includes('döküm') || haystack.includes('döküm')) && (haystack.includes('tencere') || product.mainCat === 'Tencereler');
  }
  if (subLower === 'düdüklü tencereler') {
    return haystack.includes('düdüklü');
  }
  if (subLower === 'granit tavalar') {
    return (matText.includes('granit') || haystack.includes('granit')) && (haystack.includes('tava') || product.mainCat === 'Tavalar');
  }
  if (subLower === 'döküm tavalar') {
    return (matText.includes('döküm') || haystack.includes('döküm')) && (haystack.includes('tava') || product.mainCat === 'Tavalar');
  }
  if (subLower === 'çelik tavalar') {
    return (matText.includes('çelik') || haystack.includes('çelik')) && (haystack.includes('tava') || product.mainCat === 'Tavalar');
  }
  if (subLower === 'krep tavaları') {
    return haystack.includes('krep');
  }
  if (subLower === 'wok tavalar') {
    return haystack.includes('wok');
  }
  if (subLower === 'ızgaralı tavalar') {
    return haystack.includes('ızgara') || haystack.includes('izgara');
  }
  if (subLower === 'çelik çaydanlık takımları') {
    return (matText.includes('çelik') || haystack.includes('çelik')) && haystack.includes('çaydanlık');
  }

  const tokens = subLower.split(/\s+/).filter(t => t.length > 2);
  return haystack.includes(subLower) || (tokens.length > 0 && tokens.every(t => haystack.includes(t)));
}

function getFilteredProducts() {
  let products = [...PRODUCTS];

  // Main category filter (e.g. Tencereler, Tavalar, Set Ürünler, Çaydanlık Takımları, or any dynamic category)
  if (activeMainCat) {
    products = products.filter(
      p => p.mainCat === activeMainCat || p.category === activeMainCat || p.subCat === activeMainCat
    );
  }

  // Sub-category filter (e.g. Granit Tencereler, Krep Tavaları, etc.)
  if (activeSubCat) {
    products = products.filter(p => matchesSubCategoryFilter(p, activeSubCat));
  }

  // Live search query filter
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.mainCat.toLowerCase().includes(q) ||
      p.subCat.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Material filter
  if (activeFilter !== 'all') {
    const targetMat = activeFilter.toLowerCase();
    products = products.filter(p => {
      const pm = String(p.material || '').trim().toLowerCase();
      if (targetMat === 'paslanmaz çelik') {
        return pm === 'paslanmaz çelik' || pm === 'çelik';
      }
      return pm === targetMat;
    });
  }

  // Brand filter
  if (brandFilter !== 'all') {
    products = products.filter(p => p.brand === brandFilter);
  }

  // Price filter
  if (priceFilter !== 'all') {
    const [min, max] = priceFilter === '2000+'
      ? [2000, Infinity]
      : priceFilter.split('-').map(Number);
    products = products.filter(p => p.price >= min && (max === Infinity || p.price <= max));
  }

  // Sort
  if (sortFilter === 'price-asc') products.sort((a, b) => a.price - b.price);
  else if (sortFilter === 'price-desc') products.sort((a, b) => b.price - a.price);
  else if (sortFilter === 'rating') products.sort((a, b) => b.rating - a.rating);
  else if (sortFilter === 'discount') products.sort((a, b) => getDiscount(b.price, b.oldPrice) - getDiscount(a.price, a.oldPrice));

  return products;
}

function openCategoryPage(mainCat, subCat = null, scrollToCatalog = false) {
  activeMainCat = mainCat;
  activeSubCat = subCat;
  searchQuery = '';
  activeFilter = 'all';
  visibleCount = 16;

  // Ensure body scrolling is never locked on mobile/desktop
  document.body.style.overflow = 'auto';
  document.body.style.overflowX = 'hidden';

  // Reset material filter UI to "Tümü" and highlight matching category chip
  document.querySelectorAll('#material-filters .chip').forEach(c => c.classList.remove('active'));
  const allChip = document.querySelector('#material-filters .chip[data-filter="all"]');
  if (allChip) allChip.classList.add('active');
  document.querySelectorAll('#dynamic-category-filters .cat-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.catFilter === mainCat);
  });

  // Switch page into Category Page Mode
  currentView = 'category';
  window.appState = { view: 'category', selectedProduct: null };
  document.body.classList.remove('favorites-page-mode', 'account-page-mode', 'checkout-page-mode', 'product-detail-mode', 'bundle-builder-mode');
  document.getElementById('nav-bundle-builder-btn')?.classList.remove('active');
  document.getElementById('wishlist-btn')?.classList.remove('active-page');
  document.getElementById('account-btn')?.classList.remove('active-page');
  document.body.classList.add('category-page-mode');
  const banner = document.getElementById('category-page-banner');
  if (banner) banner.style.display = 'block';

  // Update active nav highlight + visible secondary sub-bar highlights
  document.querySelectorAll('.cat-nav-home, .cat-nav-link').forEach(el => el.classList.remove('active'));
  const activeNavLink = document.querySelector(`.cat-nav-link[data-main-cat="${mainCat}"]`);
  if (activeNavLink) activeNavLink.classList.add('active');

  document.querySelectorAll('.subcat-inline-group').forEach(grp => {
    grp.classList.toggle('active-group', grp.dataset.subcatGroup === mainCat);
  });
  document.querySelectorAll('.subcat-chip, .cat-hover-menu li a, .cat-col ul li a, .mobile-sub-pill').forEach(chip => {
    chip.classList.toggle('active', Boolean(subCat && chip.dataset.subCat === subCat));
  });

  // Update Breadcrumb & Title
  const crumbMain = document.getElementById('crumb-main-cat');
  const crumbSep = document.getElementById('crumb-sub-sep');
  const crumbSub = document.getElementById('crumb-sub-cat');
  const titleEl = document.getElementById('category-page-title');
  const descEl = document.getElementById('category-page-desc');
  const pillsEl = document.getElementById('category-sub-pills');

  if (crumbMain) {
    crumbMain.textContent = mainCat;
    crumbMain.onclick = (e) => {
      e.preventDefault();
      openCategoryPage(mainCat, null, scrollToCatalog);
    };
  }

  if (subCat) {
    if (crumbSep) crumbSep.style.display = 'inline';
    if (crumbSub) {
      crumbSub.style.display = 'inline';
      crumbSub.textContent = subCat;
    }
    if (titleEl) titleEl.textContent = subCat;
  } else {
    if (crumbSep) crumbSep.style.display = 'none';
    if (crumbSub) crumbSub.style.display = 'none';
    if (titleEl) titleEl.textContent = `Tüm ${mainCat}`;
  }

  const matchedCount = getFilteredProducts().length;
  if (descEl) {
    descEl.textContent = subCat
      ? `${mainCat} › ${subCat} kategorisinde ${matchedCount} ürün listeleniyor`
      : `${mainCat} kategorisindeki tüm çeşitler (${matchedCount} ürün) bir arada listeleniyor`;
  }

  // Render Sub-category Pills inside the Category Page Banner
  if (pillsEl) {
    const subs = CATEGORY_SUBS[mainCat] || [];
    pillsEl.innerHTML = `
      <button class="sub-pill ${!subCat ? 'active' : ''}" data-pill-sub="">Tüm ${mainCat}</button>
      ${subs.map(s => `<button class="sub-pill ${subCat === s ? 'active' : ''}" data-pill-sub="${s}">${s}</button>`).join('')}
    `;
    pillsEl.querySelectorAll('.sub-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosenSub = btn.getAttribute('data-pill-sub') || null;
        openCategoryPage(mainCat, chosenSub, scrollToCatalog);
      });
    });
  }

  // Close dropdowns / mobile menu
  document.getElementById('categories-dropdown')?.classList.remove('open');
  document.getElementById('mobile-menu-btn')?.classList.remove('open');
  document.getElementById('mobile-nav')?.classList.remove('open');

  renderProducts();

  const productsSection = document.getElementById('products');
  if (productsSection && (scrollToCatalog || window.innerWidth <= 768)) {
    requestAnimationFrame(() => {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
window.openCategoryPage = openCategoryPage;

function openHomePage() {
  activeMainCat = null;
  activeSubCat = null;
  searchQuery = '';
  activeFilter = 'all';
  brandFilter = 'all';
  priceFilter = 'all';
  sortFilter = 'default';
  visibleCount = 16;
  currentView = 'home';
  selectedProduct = null;
  window.appState = { view: 'home', selectedProduct: null };

  document.body.classList.remove('category-page-mode', 'favorites-page-mode', 'account-page-mode', 'checkout-page-mode', 'product-detail-mode', 'bundle-builder-mode');
  document.getElementById('nav-bundle-builder-btn')?.classList.remove('active');
  document.getElementById('wishlist-btn')?.classList.remove('active-page');
  document.getElementById('account-btn')?.classList.remove('active-page');
  const banner = document.getElementById('category-page-banner');
  if (banner) banner.style.display = 'none';
  try {
    if ((window.location.hash === '#odeme' || window.location.hash === '#kendi-ceyizini-olustur' || window.location.hash.startsWith('#urun/')) && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  } catch (_) {}

  document.querySelectorAll('.cat-nav-home, .cat-nav-link').forEach(el => el.classList.remove('active'));
  document.querySelector('.cat-nav-home')?.classList.add('active');
  document.querySelectorAll('.subcat-inline-group').forEach(grp => grp.classList.remove('active-group'));
  document.querySelectorAll('.subcat-chip, .cat-hover-menu li a, .cat-col ul li a, .mobile-sub-pill').forEach(chip => chip.classList.remove('active'));
  document.querySelectorAll('.cat-nav-item.pinned').forEach(item => item.classList.remove('pinned'));

  document.querySelectorAll('#material-filters .chip').forEach(c => c.classList.remove('active'));
  document.querySelector('#material-filters .chip[data-filter="all"]')?.classList.add('active');
  document.querySelectorAll('#dynamic-category-filters .cat-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.catFilter === 'all');
  });
  const brandSelect = document.getElementById('brand-filter');
  if (brandSelect) brandSelect.value = 'all';
  document.getElementById('price-filter').value = 'all';
  document.getElementById('sort-filter').value = 'default';

  document.getElementById('categories-dropdown')?.classList.remove('open');
  document.getElementById('mobile-menu-btn')?.classList.remove('open');
  document.getElementById('mobile-nav')?.classList.remove('open');

  renderProducts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.openHomePage = openHomePage;

let isInitialProductsLoading = true;

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const empty = document.getElementById('products-empty');
  const loadBtn = document.getElementById('load-more-btn');

  if (isInitialProductsLoading) {
    if (empty) empty.style.display = 'none';
    if (loadBtn) loadBtn.style.display = 'none';
    if (grid) {
      grid.innerHTML = Array.from({ length: 4 }).map(() => `
        <div class="skeleton-card" aria-hidden="true">
          <div class="skeleton-box skeleton-img"></div>
          <div class="skeleton-box skeleton-line short"></div>
          <div class="skeleton-box skeleton-line"></div>
          <div class="skeleton-box skeleton-line price"></div>
        </div>
      `).join('');
    }
    return;
  }

  const filtered = getFilteredProducts();
  const visible = filtered.slice(0, visibleCount);

  grid.innerHTML = '';

  if (filtered.length === 0) {
    empty.style.display = 'flex';
    loadBtn.style.display = 'none';
    return;
  }
  empty.style.display = 'none';

  visible.forEach((product, i) => {
    const disc = getDiscount(product.price, product.oldPrice);
    const isWished = wishlist.includes(product.id);
    const imgUrl = getProductImageUrl(product);
    const isOut = isProductOutOfStock(product);
    const badgeHTML = buildProductBadgesHTML(product);

    const card = document.createElement('div');
    card.className = `product-card${isOut ? ' out-of-stock' : ''}`;
    card.style.animationDelay = `${i * 60}ms`;
    card.addEventListener('click', (e) => handleProductCardClick(e, product.id));
    card.innerHTML = `
      <div class="product-card-img">
        <div class="product-badges">${badgeHTML}</div>
        <button class="wish-btn ${isWished ? 'active' : ''}" data-wish="${product.id}"
          onclick="toggleWishlist(${product.id})" aria-label="Favorilere ekle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? '#ef4444' : 'none'}" stroke="${isWished ? '#ef4444' : 'currentColor'}" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <img src="${imgUrl}" alt="TAÇ ${product.name}" class="product-card-photo" onerror="handleStoreImgError(this)" loading="lazy" />
        <div class="quick-add-overlay">
          <button class="quick-add-btn ${isOut ? 'disabled-stock' : ''}" ${isOut ? 'disabled' : `onclick="addToCart(${product.id})"`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="inline-svg-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            ${isOut ? 'Tükendi' : 'Hızlı Ekle'}
          </button>
        </div>
      </div>
      <div class="product-card-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-material">${product.material} · ${product.description}</div>
        ${renderStockPillHTML(product)}
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
          ${disc > 0 ? `<span class="price-discount">-%${disc}</span>` : ''}
        </div>
        <div class="add-to-cart-row">
          <button class="add-to-cart-btn ${isOut ? 'disabled-stock' : ''}" ${isOut ? 'disabled' : `onclick="addToCart(${product.id})"`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            ${isOut ? 'Tükendi' : 'Sepete Ekle'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  loadBtn.style.display = visibleCount >= filtered.length ? 'none' : 'block';
}

window.resetFilters = function() {
  activeMainCat = null;
  activeSubCat = null;
  activeFilter = 'all';
  brandFilter = 'all';
  searchQuery = '';
  priceFilter = 'all';
  sortFilter = 'default';
  visibleCount = 16;
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('#material-filters .chip').forEach(c => c.classList.remove('active'));
  document.querySelector('#material-filters .chip[data-filter="all"]')?.classList.add('active');
  document.querySelectorAll('#dynamic-category-filters .cat-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.catFilter === 'all');
  });
  const brandSelect = document.getElementById('brand-filter');
  if (brandSelect) brandSelect.value = 'all';
  document.getElementById('price-filter').value = 'all';
  document.getElementById('sort-filter').value = 'default';
  renderProducts();
};

// =========================================================
// PRODUCT DETAIL PAGE (PDP - /urun/:id) & DYNAMIC ROUTING
// =========================================================
function handleProductCardClick(event, productId) {
  if (event && event.target && event.target.closest('button, .installment-inline-drawer, a')) {
    return;
  }
  openProductDetail(productId);
}
window.handleProductCardClick = handleProductCardClick;

function getProductGalleryItems(product) {
  const mainImg = getProductImageUrl(product);
  const rawImages = Array.isArray(product?.images)
    ? product.images.map(normalizeStoreImagePath).filter(Boolean)
    : [];
  const uniqueImages = [];
  rawImages.forEach((src) => {
    if (src && !uniqueImages.includes(src)) uniqueImages.push(src);
  });
  const validImages = uniqueImages.length > 0 ? uniqueImages : [mainImg];

  return validImages.map((src, idx) => ({
    src,
    label: idx === 0 ? 'Kapak Görseli' : `Görsel ${idx + 1}`,
    alt: `TAÇ ${product.name} - ${idx === 0 ? 'Kapak Görseli' : `Görsel ${idx + 1}`}`,
  }));
}

function getProductDimensionsRows(product) {
  const dimensionsById = {
    1: [
      { piece: 'Derin Tencere Gövdesi + Buhar Çıkışlı Cam Kapak', diameter: '24 cm', depth: '12.5 cm', capacity: '4.5 Litre' },
    ],
    2: [
      { piece: 'Basık / Karnıyarık Çelik Tencere + Çelik/Cam Kapak', diameter: '26 cm', depth: '8.5 cm', capacity: '3.8 Litre' },
    ],
    3: [
      { piece: 'Ağır Hizmet Döküm Demir Tencere + Döküm Kapak', diameter: '28 cm', depth: '13.5 cm', capacity: '6.2 Litre' },
    ],
    4: [
      { piece: 'Pro Çelik Düdüklü Tencere Gövdesi + Emniyet Kilitli Kapak', diameter: '22 cm', depth: '17.5 cm', capacity: '6.0 Litre' },
    ],
    5: [
      { piece: 'Ultra Granit Kızartma Tavası (Ergonomik Bakalit Sap)', diameter: '28 cm', depth: '5.5 cm', capacity: '2.6 Litre' },
    ],
    6: [
      { piece: 'Döküm Demir Sote Tavası (Fırına Dayanıklı Gövde)', diameter: '26 cm', depth: '5.2 cm', capacity: '2.3 Litre' },
    ],
    7: [
      { piece: 'Profesyonel Şef 18/10 Cr-Ni Çelik Tava', diameter: '28 cm', depth: '5.5 cm', capacity: '2.7 Litre' },
    ],
    8: [
      { piece: 'Granit & Çelik İnce Kenarlı Krep / Pankek Tavası', diameter: '26 cm', depth: '2.2 cm', capacity: '0.9 Litre' },
    ],
    9: [
      { piece: 'Derin Granit Wok Tava (Yüksek Kenarlı Sote Formu)', diameter: '32 cm', depth: '9.5 cm', capacity: '4.8 Litre' },
    ],
    10: [
      { piece: 'Oluklu Döküm Izgara Tava (Çift Akıtma Ağzı)', diameter: '28 cm', depth: '4.8 cm', capacity: '2.4 Litre' },
    ],
    11: [
      { piece: 'Küçük Boy Derin Tencere + Kapak', diameter: '18 cm', depth: '10.5 cm', capacity: '2.4 Litre' },
      { piece: 'Orta Boy Derin Tencere + Kapak', diameter: '22 cm', depth: '12.0 cm', capacity: '4.0 Litre' },
      { piece: 'Büyük Boy Derin Tencere + Kapak', diameter: '24 cm', depth: '13.5 cm', capacity: '5.5 Litre' },
      { piece: 'Basık / Karnıyarık Tencere + Kapak', diameter: '26 cm', depth: '8.0 cm', capacity: '3.6 Litre' },
    ],
    12: [
      { piece: 'Derin Tencere + Pyrex Cam Kapak', diameter: '20 cm', depth: '10.5 cm', capacity: '2.8 Litre' },
      { piece: 'Derin Tencere + Pyrex Cam Kapak', diameter: '24 cm', depth: '12.0 cm', capacity: '4.5 Litre' },
      { piece: 'Karnıyarık / Basık Tencere + Pyrex Cam Kapak', diameter: '26 cm', depth: '7.5 cm', capacity: '3.5 Litre' },
      { piece: 'Kızartma Tavası (26 cm Kapak Uyumlu)', diameter: '26 cm', depth: '5.2 cm', capacity: '2.2 Litre' },
    ],
    13: [
      { piece: 'Mini Sos & Sütlük Tenceresi', diameter: '14 cm', depth: '8.0 cm', capacity: '1.1 Litre' },
      { piece: 'Mini Sahan / Yumurta Tenceresi', diameter: '16 cm', depth: '7.0 cm', capacity: '1.4 Litre' },
      { piece: 'Mini Derin Tencere', diameter: '18 cm', depth: '9.0 cm', capacity: '2.0 Litre' },
    ],
    14: [
      { piece: 'Küçük Boy Döküm Sote Tavası', diameter: '20 cm', depth: '4.5 cm', capacity: '1.2 Litre' },
      { piece: 'Orta Boy Döküm Kızartma Tavası', diameter: '24 cm', depth: '5.0 cm', capacity: '1.9 Litre' },
      { piece: 'Büyük Boy Döküm Şef Tavası', diameter: '28 cm', depth: '5.5 cm', capacity: '2.8 Litre' },
    ],
    15: [
      { piece: 'Küçük Boy Döküm Sahan + Cam Kapak', diameter: '18 cm', depth: '5.0 cm', capacity: '1.1 Litre' },
      { piece: 'Orta Boy Döküm Sahan + Cam Kapak', diameter: '20 cm', depth: '5.5 cm', capacity: '1.5 Litre' },
      { piece: 'Büyük Boy Döküm Sahan + Cam Kapak', diameter: '22 cm', depth: '6.0 cm', capacity: '2.0 Litre' },
    ],
    16: [
      { piece: 'Üst Demlik (Kendinden Süzgeçli) + Çelik Kapak', diameter: '14 cm', depth: '11.5 cm', capacity: '1.25 Litre' },
      { piece: 'Alt Suluk Haznesi (Kapsül İndüksiyon Taban)', diameter: '18 cm', depth: '14.0 cm', capacity: '2.50 Litre' },
    ],
  };

  return dimensionsById[product.id] || [
    { piece: `TAÇ ${product.name}`, diameter: '24 cm', depth: '11.0 cm', capacity: '3.5 Litre' },
  ];
}

function selectPdpGalleryImage(index) {
  if (!selectedProduct) return;
  const gallery = getProductGalleryItems(selectedProduct);
  const chosen = gallery[index] || gallery[0];
  const mainImgEl = document.getElementById('pdp-main-image');
  const captionEl = document.getElementById('pdp-view-caption');

  if (mainImgEl) {
    mainImgEl.dataset.fallbackApplied = '';
    mainImgEl.src = chosen.src;
    mainImgEl.alt = chosen.alt;
    mainImgEl.style.transform = 'scale(1)';
  }
  if (captionEl) {
    captionEl.textContent = chosen.label;
    captionEl.style.display = gallery.length > 1 ? '' : 'none';
  }

  document.querySelectorAll('#pdp-thumbnails .pdp-thumb-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === index);
  });
}
window.selectPdpGalleryImage = selectPdpGalleryImage;

function changePdpQty(delta) {
  if (!selectedProduct || isProductOutOfStock(selectedProduct)) return;
  const maxAllowed = Math.max(1, getProductStock(selectedProduct));
  pdpQty = Math.max(1, Math.min(maxAllowed, pdpQty + delta));
  const qtyEl = document.getElementById('pdp-qty-val');
  if (qtyEl) qtyEl.textContent = pdpQty;
}
window.changePdpQty = changePdpQty;

function handlePdpAddToCart() {
  if (!selectedProduct) return;
  const availableStock = getProductStock(selectedProduct);
  if (availableStock <= 0) {
    return;
  }
  const existing = cart.find(item => item.id === selectedProduct.id);
  const currentInCart = existing ? existing.qty : 0;
  if (currentInCart + pdpQty > availableStock) {
    showToast(`Stok sınırı: Bu üründen stokta toplam <strong>${availableStock} adet</strong> bulunmaktadır.`, 'wish');
    return;
  }
  if (existing) {
    existing.qty += pdpQty;
  } else {
    cart.push({ ...selectedProduct, qty: pdpQty });
  }
  updateCartUI();
  animateCartBadge();
  showToast(
    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2.2" class="inline-svg-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> <strong>${pdpQty} adet ${selectedProduct.name}</strong> sepete eklendi!`,
    'cart'
  );
}
window.handlePdpAddToCart = handlePdpAddToCart;

function handlePdpBuyNow() {
  if (!selectedProduct) return;
  const availableStock = getProductStock(selectedProduct);
  if (availableStock <= 0) {
    return;
  }
  const existing = cart.find(item => item.id === selectedProduct.id);
  const currentInCart = existing ? existing.qty : 0;
  const addAmount = Math.min(pdpQty, Math.max(0, availableStock - currentInCart));
  if (addAmount <= 0 && currentInCart === 0) {
    return;
  }
  if (existing) {
    existing.qty = Math.min(availableStock, existing.qty + pdpQty);
  } else {
    cart.push({ ...selectedProduct, qty: Math.min(availableStock, pdpQty) });
  }
  updateCartUI();
  animateCartBadge();
  openCheckoutPage();
}
window.handlePdpBuyNow = handlePdpBuyNow;

function switchPdpTab(tabKey) {
  activePdpTab = tabKey;
  document.querySelectorAll('.pdp-tab-btn').forEach(btn => {
    const isActive = btn.dataset.pdpTab === tabKey;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  const panelMap = {
    specs: 'pdp-tab-specs',
    dimensions: 'pdp-tab-dimensions',
    shipping: 'pdp-tab-shipping',
  };

  Object.entries(panelMap).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = key === tabKey ? 'block' : 'none';
      el.classList.toggle('active', key === tabKey);
    }
  });
}
window.switchPdpTab = switchPdpTab;

function renderRelatedProducts(product) {
  const grid = document.getElementById('pdp-related-grid');
  if (!grid || !product) return;

  // Same main category products first, then fill up to 4 with other TAÇ products
  const sameCategory = PRODUCTS.filter(p => p.id !== product.id && p.mainCat === product.mainCat);
  const others = PRODUCTS.filter(p => p.id !== product.id && p.mainCat !== product.mainCat);
  const relatedFour = [...sameCategory, ...others].slice(0, 4);

  grid.innerHTML = '';

  relatedFour.forEach((relProd, i) => {
    const disc = getDiscount(relProd.price, relProd.oldPrice);
    const isWished = wishlist.includes(relProd.id);
    const imgUrl = getProductImageUrl(relProd);
    const isOut = isProductOutOfStock(relProd);
    const badgeHTML = buildProductBadgesHTML(relProd);

    const card = document.createElement('div');
    card.className = `product-card${isOut ? ' out-of-stock' : ''}`;
    card.style.animationDelay = `${i * 50}ms`;
    card.addEventListener('click', (e) => handleProductCardClick(e, relProd.id));
    card.innerHTML = `
      <div class="product-card-img">
        <div class="product-badges">${badgeHTML}</div>
        <button class="wish-btn ${isWished ? 'active' : ''}" data-wish="${relProd.id}"
          onclick="toggleWishlist(${relProd.id})" aria-label="Favorilere ekle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWished ? '#ef4444' : 'none'}" stroke="${isWished ? '#ef4444' : 'currentColor'}" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <img src="${imgUrl}" alt="TAÇ ${relProd.name}" class="product-card-photo" onerror="handleStoreImgError(this)" loading="lazy" />
        <div class="quick-add-overlay">
          <button class="quick-add-btn ${isOut ? 'disabled-stock' : ''}" ${isOut ? 'disabled' : `onclick="addToCart(${relProd.id})"`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="inline-svg-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            ${isOut ? 'Tükendi' : 'Hızlı Ekle'}
          </button>
        </div>
      </div>
      <div class="product-card-info">
        <div class="product-brand">${relProd.brand}</div>
        <div class="product-name">${relProd.name}</div>
        <div class="product-material">${relProd.material} · ${relProd.description}</div>
        ${renderStockPillHTML(relProd)}
        <div class="product-price">
          <span class="price-current">${formatPrice(relProd.price)}</span>
          ${relProd.oldPrice ? `<span class="price-old">${formatPrice(relProd.oldPrice)}</span>` : ''}
          ${disc > 0 ? `<span class="price-discount">-%${disc}</span>` : ''}
        </div>
        <div class="add-to-cart-row">
          <button class="add-to-cart-btn ${isOut ? 'disabled-stock' : ''}" ${isOut ? 'disabled' : `onclick="addToCart(${relProd.id})"`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            ${isOut ? 'Tükendi' : 'Sepete Ekle'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openProductDetail(productOrId, updateUrl = true) {
  const product = typeof productOrId === 'object' && productOrId !== null
    ? productOrId
    : PRODUCTS.find(p => p.id === Number(productOrId));
  if (!product) return;

  selectedProduct = product;
  currentView = 'product-detail';
  pdpQty = 1;
  window.appState = {
    view: 'product-detail',
    selectedProduct: product,
  };

  // Switch body into Product Detail Page mode
  document.body.classList.remove('category-page-mode', 'favorites-page-mode', 'account-page-mode', 'checkout-page-mode', 'bundle-builder-mode');
  document.body.classList.add('product-detail-mode');
  document.getElementById('nav-bundle-builder-btn')?.classList.remove('active');

  // Close open drawers/dropdowns
  document.getElementById('categories-dropdown')?.classList.remove('open');
  document.getElementById('mobile-menu-btn')?.classList.remove('open');
  document.getElementById('mobile-nav')?.classList.remove('open');
  document.getElementById('search-suggestions')?.classList.remove('show');

  // Highlight matching main category in nav bar
  document.querySelectorAll('.cat-nav-home, .cat-nav-link').forEach(el => el.classList.remove('active'));
  const activeNavLink = document.querySelector(`.cat-nav-link[data-main-cat="${product.mainCat}"]`);
  if (activeNavLink) activeNavLink.classList.add('active');

  // Update URL (/urun/:id or #urun/:id)
  if (updateUrl) {
    try {
      if (window.history && window.history.pushState) {
        window.history.pushState(
          { view: 'product-detail', productId: product.id },
          `TAÇ ${product.name} | Tencere Tava Dünyası`,
          `#urun/${product.id}`
        );
      }
    } catch (_) {}
  }

  // 1. Breadcrumb: "Ana Sayfa > [Kategori Adı] > TAÇ [Ürün Adı]"
  const crumbCatEl = document.getElementById('pdp-crumb-category');
  const crumbProdEl = document.getElementById('pdp-crumb-product');
  if (crumbCatEl) {
    crumbCatEl.textContent = product.mainCat;
    crumbCatEl.onclick = (e) => {
      e.preventDefault();
      openCategoryPage(product.mainCat, null);
    };
  }
  if (crumbProdEl) {
    const cleanTitle = product.name.startsWith('TAÇ') ? product.name : `TAÇ ${product.name}`;
    crumbProdEl.textContent = cleanTitle;
  }

  // 2. Left Column: Media Showcase & Thumbnails Gallery
  const gallery = getProductGalleryItems(product);
  const thumbsEl = document.getElementById('pdp-thumbnails');
  if (thumbsEl) {
    if (gallery.length > 1) {
      thumbsEl.style.display = '';
      thumbsEl.innerHTML = gallery.map((item, idx) => `
        <button type="button" class="pdp-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="selectPdpGalleryImage(${idx})" aria-label="${item.label}">
          <img src="${item.src}" alt="${item.alt}" onerror="handleStoreImgError(this)" loading="lazy" />
          <span class="pdp-thumb-label">${item.label}</span>
        </button>
      `).join('');
    } else {
      thumbsEl.style.display = 'none';
      thumbsEl.innerHTML = '';
    }
  }
  selectPdpGalleryImage(0);

  // Wishlist button on PDP
  const pdpWishBtn = document.getElementById('pdp-wish-btn');
  if (pdpWishBtn) {
    pdpWishBtn.classList.toggle('active', wishlist.includes(product.id));
    pdpWishBtn.onclick = () => toggleWishlist(product.id);
  }

  // 3. Right Column: Brand, Title, Price Block, Savings Pill, Quantity & Live Stock
  const brandEl = document.getElementById('pdp-brand');
  const subcatEl = document.getElementById('pdp-subcat-tag');
  const titleEl = document.getElementById('pdp-title');
  const shortDescEl = document.getElementById('pdp-short-desc');
  const currPriceEl = document.getElementById('pdp-current-price');
  const oldPriceEl = document.getElementById('pdp-old-price');
  const savingsEl = document.getElementById('pdp-savings-badge');
  const qtyValEl = document.getElementById('pdp-qty-val');
  const qtyDecBtn = document.getElementById('pdp-qty-dec');
  const qtyIncBtn = document.getElementById('pdp-qty-inc');
  const addCartBtn = document.getElementById('pdp-add-to-cart-btn');
  const buyNowBtn = document.getElementById('pdp-buy-now-btn');
  const pdpOutBadge = document.getElementById('pdp-out-of-stock-badge');
  const pdpInlineBadge = document.getElementById('pdp-inline-tukendi-badge');
  const statusBox = document.querySelector('#product-detail-page .pdp-status-item.in-stock, #product-detail-page .pdp-status-item.out-of-stock');

  const stock = getProductStock(product);
  const isOut = stock <= 0;

  if (brandEl) brandEl.textContent = 'TAÇ';
  if (subcatEl) subcatEl.textContent = product.subCat;
  if (titleEl) titleEl.textContent = product.name;
  if (shortDescEl) {
    const catMatLine = `${product.mainCat || product.category} · ${product.material} Mutfak Ekipmanı`;
    const customDesc = String(
      product.description || product.aciklama || product.short_description || ''
    ).trim();
    const hasDistinctDesc = Boolean(customDesc && customDesc !== catMatLine);
    shortDescEl.innerHTML = hasDistinctDesc
      ? `<span style="display:block; font-size:0.84rem; font-weight:600; color:#78716C; margin-bottom:6px;">${catMatLine}</span><span style="display:block; color:#44403C; line-height:1.55;">${customDesc}</span>`
      : `<span style="display:block; font-size:0.86rem; font-weight:600; color:#78716C;">${catMatLine}</span>`;
  }
  if (currPriceEl) currPriceEl.textContent = formatPrice(product.price);

  if (pdpOutBadge) {
    pdpOutBadge.style.display = isOut ? 'inline-flex' : 'none';
  }
  if (pdpInlineBadge) {
    pdpInlineBadge.style.display = isOut ? 'inline-flex' : 'none';
  }

  if (statusBox) {
    statusBox.className = `pdp-status-item ${isOut ? 'out-of-stock' : 'in-stock'}`;
    statusBox.innerHTML = isOut
      ? `<span class="status-dot-red"></span><strong>Tükendi (Stok: 0)</strong>`
      : `<span class="status-dot-green"></span><strong>Stokta Var (${stock} Adet)</strong>`;
  }

  if (qtyDecBtn) qtyDecBtn.disabled = isOut;
  if (qtyIncBtn) qtyIncBtn.disabled = isOut;

  if (addCartBtn) {
    addCartBtn.disabled = isOut;
    addCartBtn.classList.toggle('disabled-stock', isOut);
    const spanEl = addCartBtn.querySelector('span');
    if (spanEl) spanEl.textContent = isOut ? 'Tükendi' : 'Sepete Ekle';
  }
  if (buyNowBtn) {
    buyNowBtn.disabled = isOut;
    buyNowBtn.classList.toggle('disabled-stock', isOut);
    const spanEl = buyNowBtn.querySelector('span');
    if (spanEl) spanEl.textContent = isOut ? 'Tükendi' : 'Hemen Al';
  }

  const savings = product.oldPrice && product.oldPrice > product.price
    ? product.oldPrice - product.price
    : 0;
  if (oldPriceEl) {
    oldPriceEl.style.display = savings > 0 ? 'inline-block' : 'none';
    oldPriceEl.textContent = savings > 0 ? formatPrice(product.oldPrice) : '';
  }
  if (savingsEl) {
    savingsEl.style.display = savings > 0 ? 'inline-flex' : 'none';
    savingsEl.textContent = savings > 0 ? `${formatPrice(savings)} Kazanç` : '';
  }
  if (qtyValEl) qtyValEl.textContent = isOut ? '0' : '1';

  // 4. Specifications & Dimensions Tabs
  const specMatEl = document.getElementById('pdp-spec-material');
  if (specMatEl) {
    const matLower = String(product.material || '').trim().toLowerCase();
    if (matLower === 'çelik' || matLower === 'paslanmaz çelik') {
      specMatEl.textContent = '18/10 Cr-Ni Paslanmaz Çelik (Kapsül İndüksiyon Taban)';
    } else if (matLower === 'döküm') {
      specMatEl.textContent = '1. Sınıf Döküm Gövde (Yüksek Isı Tutucu Ağır Hizmet Yapı)';
    } else if (matLower === 'seramik') {
      specMatEl.textContent = '1. Sınıf Seramik Kaplama (Sağlıklı, PFOA İçermeyen Yanmaz Yapışmaz Yüzey)';
    } else if (matLower === 'bio granit') {
      specMatEl.textContent = '1. Sınıf Bio Granit Kaplama (Çizilmeye Dayanıklı Doğal Mineral Yüzey)';
    } else if (matLower === 'granit') {
      specMatEl.textContent = '1. Sınıf Granit Kaplama (Ultra Yanmaz Yapışmaz İç & Dış Yüzey)';
    } else {
      specMatEl.textContent = `1. Sınıf ${product.material || 'Granit'} (Orijinal TAÇ Mutfak Ekipmanı)`;
    }
  }

  const dimBodyEl = document.getElementById('pdp-dimensions-body');
  if (dimBodyEl) {
    const rows = getProductDimensionsRows(product);
    dimBodyEl.innerHTML = rows.map(r => `
      <tr>
        <td><strong>${r.piece}</strong></td>
        <td>${r.diameter}</td>
        <td>${r.depth}</td>
        <td><strong class="text-orange">${r.capacity}</strong></td>
      </tr>
    `).join('');
  }

  switchPdpTab('specs');

  // 5. Related Products ("Benzer Ürünler")
  const viewAllRelBtn = document.getElementById('pdp-related-view-all-btn');
  if (viewAllRelBtn) {
    viewAllRelBtn.onclick = () => openCategoryPage(product.mainCat, null);
  }
  renderRelatedProducts(product);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.openProductDetail = openProductDetail;

function handleRouteLocation() {
  const hash = window.location.hash || '';
  const path = window.location.pathname || '';
  const hashMatch = hash.match(/^#\/?urun\/(\d+)/i);
  const pathMatch = path.match(/\/urun\/(\d+)/i);
  const matchedId = hashMatch ? Number(hashMatch[1]) : (pathMatch ? Number(pathMatch[1]) : null);

  if (matchedId) {
    const prod = PRODUCTS.find(p => p.id === matchedId);
    if (prod) {
      openProductDetail(prod, false);
      return;
    }
  }
  if (hash === '#kendi-ceyizini-olustur') {
    openBundleBuilderPage(1, false);
    return;
  }
  if (hash === '#odeme' && cart.length > 0) {
    openCheckoutPage();
  }
}

// =========================================================
// "KENDİ ÇEYİZİNİ OLUŞTUR" — CUSTOM COOKWARE BUNDLE BUILDER
// =========================================================
const BUNDLE_DISCOUNT_RATE = 0.15; // %15 Ekstra Çeyiz Paketi İndirimi
const BUNDLE_STEP_KEYS = [1, 2, 3, 4];

const BUNDLE_STEPS_CONFIG = {
  1: {
    step: 1,
    shortLabel: '1. Tencere',
    title: 'Tencere / Tencere Seti',
    subtitle: 'Tek Tencereler & Tencere Setleri',
    description: 'Çeyiz paketinizin temelini oluşturacak tekli tencere veya çok parçalı tencere seti modellerini seçin.',
    filterFn: (p) => {
      const title = `${p.name || ''} ${p.title || ''}`.toLocaleLowerCase('tr-TR');
      const cat = `${p.mainCat || ''} ${p.subCat || ''} ${p.category || ''}`.toLocaleLowerCase('tr-TR');
      const combined = `${title} ${cat}`;
      if (combined.includes('düdüklü') || combined.includes('duduklu') || combined.includes('clipso')) return false;
      if (combined.includes('çaydanlık') || combined.includes('caydanlik') || combined.includes('semaver')) return false;
      const isCookwareMatch =
        combined.includes('tencere') ||
        combined.includes('set') ||
        combined.includes('çeyiz') ||
        combined.includes('karnıyarık') ||
        combined.includes('basık') ||
        combined.includes('derin');
      if (!isCookwareMatch) return false;
      const isPanOrSahan =
        combined.includes('tava') ||
        combined.includes('sahan') ||
        combined.includes('wok') ||
        combined.includes('krep') ||
        combined.includes('ızgara') ||
        combined.includes('izgara');
      if (isPanOrSahan && !title.includes('tencere')) return false;
      return true;
    },
  },
  2: {
    step: 2,
    shortLabel: '2. Tava',
    title: 'Tava Seçimi',
    subtitle: 'Granit, Wok, Döküm Tavalar & Sahanlar',
    description: 'Günlük sote, kızartma ve ızgara tarifleriniz için tüm tava ve sahan modellerimizden dilediğinizi seçin.',
    filterFn: (p) => {
      const combined = `${p.name || ''} ${p.title || ''} ${p.mainCat || ''} ${p.subCat || ''} ${p.category || ''}`.toLocaleLowerCase('tr-TR');
      return (
        combined.includes('tava') ||
        combined.includes('sahan') ||
        combined.includes('wok') ||
        combined.includes('krep') ||
        combined.includes('ızgara') ||
        combined.includes('izgara')
      );
    },
  },
  3: {
    step: 3,
    shortLabel: '3. Çaydanlık',
    title: 'Çaydanlık Seçimi',
    subtitle: 'TAÇ Paslanmaz Çelik Çaydanlık Modelleri',
    description: 'Çeyiz setinizin çay keyfini tamamlayacak tüm TAÇ Çaydanlık modellerimizden dilediğinizi seçin.',
    filterFn: (p) => {
      const combined = `${p.name || ''} ${p.title || ''} ${p.mainCat || ''} ${p.subCat || ''} ${p.category || ''}`.toLocaleLowerCase('tr-TR');
      return combined.includes('çaydanlık') || combined.includes('caydanlik') || combined.includes('semaver');
    },
  },
  4: {
    step: 4,
    shortLabel: '4. Düdüklü',
    title: 'Düdüklü Tencere Seçimi',
    subtitle: 'TAÇ Hızlı Pişirme Düdüklü Tencereler',
    description: 'Mutfakta zamandan ve enerjiden tasarruf sağlayan emniyet kilitli tüm TAÇ Düdüklü Tencere modellerimizi seçin.',
    filterFn: (p) => {
      const combined = `${p.name || ''} ${p.title || ''} ${p.mainCat || ''} ${p.subCat || ''} ${p.category || ''}`.toLocaleLowerCase('tr-TR');
      return combined.includes('düdüklü') || combined.includes('duduklu') || combined.includes('clipso');
    },
  },
};

const BUNDLE_PRODUCT_SPECS = {
  12: ['7 Parça Set', '20-24-26cm', 'Ultra Granit Kaplama'],
  11: ['8 Parça Set', '18/10 Cr-Ni Çelik', 'İndüksiyon Taban'],
  13: ['3 Parça Mini Set', '14-16-18cm', 'Granit Kaplama'],
  1: ['24cm Derin', '4.5 Litre', 'Yanmaz Yapışmaz Granit'],
  2: ['26cm Basık', '18/10 Cr-Ni Çelik', 'Kapsül Taban'],
  3: ['28cm Döküm', '6.2 Litre', 'Fırına Dayanıklı Gövde'],
  14: ['3 Parça Tava Seti', '20-24-28cm', 'Ağır Hizmet Döküm'],
  5: ['28cm Kızartma', 'PTFE & PFOA İçermez', 'Ultra Granit'],
  9: ['32cm Derin Wok', '4.8 Litre', 'Yüksek Kenarlı Granit'],
  6: ['26cm Sote Tavası', 'Döküm Demir', 'Eşit Isı Dağılımı'],
  7: ['28cm Şef Tavası', '18/10 Cr-Ni Çelik', 'İndüksiyon Uyumlu'],
  10: ['28cm Oluklu Izgara', 'Döküm Gövde', 'Çift Akıtma Ağzı'],
  16: ['Aile Boyu (1.25L+2.5L)', '18/10 Cr-Ni Çelik', 'Kendinden Süzgeçli'],
  17: ['Orta Boy (1.0L+2.0L)', '18/10 Cr-Ni Çelik', 'Kapsül İndüksiyon Taban'],
  19: ['Maxi Boy (1.5L+3.0L)', '18/10 Cr-Ni Çelik', 'El Yakmayan Kulp'],
  4: ['6.0 Litre Kapasite', '18/10 Cr-Ni Çelik', '3 Kademeli Emniyet'],
  18: ['4L + 6L İkili Set', '18/10 Cr-Ni Çelik', 'Tek Elle Açılır Kapak'],
  20: ['7.0 Litre Geniş Hacim', '18/10 Cr-Ni Çelik', 'Klasik Klips Kilit'],
};

let activeBundleStep = 1;
let isBundleSummaryOpen = false;
let bundleSelections = {
  1: [], // Step 1: Tencere / Tencere Seti (multi-select array of product IDs)
  2: [], // Step 2: Tava Seçimi (multi-select array of product IDs)
  3: [], // Step 3: Çaydanlık Seçimi (multi-select array of product IDs)
  4: [], // Step 4: Düdüklü Tencere Seçimi (multi-select array of product IDs)
};
let selectedItems = {
  step1: [],
  step2: [],
  step3: [],
  step4: [],
};

const BUNDLE_STEP_SHORT_TITLES = {
  1: 'Tencere',
  2: 'Tava',
  3: 'Çaydanlık',
  4: 'Düdüklü',
};

function syncBundleState() {
  BUNDLE_STEP_KEYS.forEach(s => {
    if (!Array.isArray(bundleSelections[s])) {
      bundleSelections[s] = bundleSelections[s] ? [bundleSelections[s]] : [];
    }
    selectedItems[`step${s}`] = bundleSelections[s]
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean);
  });
  window.selectedItems = selectedItems;
  window.bundleSelections = bundleSelections;
  window.appState = {
    view: 'bundle-builder',
    activeStep: activeBundleStep,
    isSummaryOpen: isBundleSummaryOpen,
    selectedItems: { ...selectedItems },
    selections: {
      1: [...bundleSelections[1]],
      2: [...bundleSelections[2]],
      3: [...bundleSelections[3]],
      4: [...bundleSelections[4]],
    },
  };
}

function getAllSelectedBundleProducts() {
  const all = [];
  BUNDLE_STEP_KEYS.forEach(s => {
    const ids = Array.isArray(bundleSelections[s]) ? bundleSelections[s] : [];
    ids.forEach(id => {
      const prod = PRODUCTS.find(p => p.id === id);
      if (prod) all.push({ step: s, product: prod });
    });
  });
  return all;
}

function openBundleBuilderPage(initialStep = 1, updateUrl = true) {
  if (typeof initialStep === 'number' && BUNDLE_STEPS_CONFIG[initialStep]) {
    activeBundleStep = initialStep;
  } else if (!BUNDLE_STEPS_CONFIG[activeBundleStep]) {
    activeBundleStep = 1;
  }
  isBundleSummaryOpen = false;

  currentView = 'bundle-builder';
  selectedProduct = null;
  syncBundleState();

  document.body.classList.remove(
    'category-page-mode',
    'favorites-page-mode',
    'account-page-mode',
    'checkout-page-mode',
    'product-detail-mode'
  );
  document.body.classList.add('bundle-builder-mode');

  // Update header nav active states
  document.querySelectorAll('.cat-nav-home, .cat-nav-link').forEach(el => el.classList.remove('active'));
  document.getElementById('wishlist-btn')?.classList.remove('active-page');
  document.getElementById('account-btn')?.classList.remove('active-page');
  document.getElementById('nav-bundle-builder-btn')?.classList.add('active');

  // Close open menus/dropdowns
  document.getElementById('categories-dropdown')?.classList.remove('open');
  document.getElementById('mobile-menu-btn')?.classList.remove('open');
  document.getElementById('mobile-nav')?.classList.remove('open');
  document.getElementById('search-suggestions')?.classList.remove('show');

  if (updateUrl) {
    try {
      if (window.history && window.history.pushState) {
        window.history.pushState(
          { view: 'bundle-builder' },
          'Kendi Çeyizini Oluştur (%15 İndirim) | Tencere Tava Dünyası',
          '#kendi-ceyizini-olustur'
        );
      }
    } catch (_) {}
  }

  renderBundleBuilder();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.openBundleBuilderPage = openBundleBuilderPage;

function switchBundleStep(stepNum) {
  if (!BUNDLE_STEPS_CONFIG[stepNum]) return;
  activeBundleStep = stepNum;
  isBundleSummaryOpen = false;
  syncBundleState();
  renderBundleBuilder();
  document.getElementById('bundle-tab-1')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
window.switchBundleStep = switchBundleStep;

function openBundleFinalSummary() {
  const allEntries = getAllSelectedBundleProducts();
  if (allEntries.length === 0) {
    showToast('Paket özetini görmek için lütfen en az 1 ürün seçin.', 'wish');
    return;
  }
  isBundleSummaryOpen = true;
  syncBundleState();
  renderBundleBuilder();
  document.getElementById('bundle-final-summary-view')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.openBundleFinalSummary = openBundleFinalSummary;

function closeBundleFinalSummary() {
  isBundleSummaryOpen = false;
  syncBundleState();
  renderBundleBuilder();
  document.getElementById('bundle-tab-1')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
window.closeBundleFinalSummary = closeBundleFinalSummary;

function nextBundleStep() {
  if (activeBundleStep < 4) {
    activeBundleStep += 1;
    isBundleSummaryOpen = false;
    syncBundleState();
    renderBundleBuilder();
    document.getElementById('bundle-tab-1')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    openBundleFinalSummary();
  }
}
window.nextBundleStep = nextBundleStep;

function prevBundleStep() {
  if (isBundleSummaryOpen) {
    isBundleSummaryOpen = false;
    syncBundleState();
    renderBundleBuilder();
    document.getElementById('bundle-tab-1')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }
  if (activeBundleStep > 1) {
    activeBundleStep -= 1;
    syncBundleState();
    renderBundleBuilder();
    document.getElementById('bundle-tab-1')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
window.prevBundleStep = prevBundleStep;

function selectBundleProduct(stepNum, productId) {
  const prod = PRODUCTS.find(p => p.id === Number(productId));
  if (!prod || !BUNDLE_STEPS_CONFIG[stepNum]) return;

  if (!Array.isArray(bundleSelections[stepNum])) {
    bundleSelections[stepNum] = [];
  }

  const currentArr = bundleSelections[stepNum];
  const existingIdx = currentArr.indexOf(prod.id);

  if (existingIdx > -1) {
    currentArr.splice(existingIdx, 1);
    showToast(
      `<strong>Adım ${stepNum}:</strong> TAÇ ${prod.name} paketten çıkarıldı.`,
      'wish'
    );
  } else {
    if (isProductOutOfStock(prod)) {
      showToast(`<strong>TAÇ ${prod.name}</strong> şu anda tükenmiştir.`, 'wish');
      return;
    }
    currentArr.push(prod.id);
    showToast(
      `<strong>Adım ${stepNum} (${currentArr.length} Seçili):</strong> TAÇ ${prod.name} pakete eklendi!`,
      'success'
    );
  }

  syncBundleState();
  renderBundleBuilder();
}
window.selectBundleProduct = selectBundleProduct;

function removeBundleProduct(stepNum, productId, event) {
  if (event) event.stopPropagation();
  if (!BUNDLE_STEPS_CONFIG[stepNum] || !Array.isArray(bundleSelections[stepNum])) return;
  const prod = PRODUCTS.find(p => p.id === Number(productId));
  bundleSelections[stepNum] = bundleSelections[stepNum].filter(id => id !== Number(productId));
  if (prod) {
    showToast(`TAÇ ${prod.name} çeyiz paketinden kaldırıldı.`, 'wish');
  }
  syncBundleState();
  renderBundleBuilder();
}
window.removeBundleProduct = removeBundleProduct;

function clearBundleSlot(stepNum, event) {
  if (event) event.stopPropagation();
  if (!BUNDLE_STEPS_CONFIG[stepNum]) return;
  bundleSelections[stepNum] = [];
  syncBundleState();
  renderBundleBuilder();
}
window.clearBundleSlot = clearBundleSlot;

function renderBundleBuilder() {
  syncBundleState();
  const stepCfg = BUNDLE_STEPS_CONFIG[activeBundleStep] || BUNDLE_STEPS_CONFIG[1];
  const allEntries = getAllSelectedBundleProducts();
  const totalSelectedCount = allEntries.length;
  const totalSteps = BUNDLE_STEP_KEYS.length;
  const selectedStepCount = BUNDLE_STEP_KEYS.filter(s => bundleSelections[s].length > 0).length;
  const hasAnySelection = totalSelectedCount >= 1;

  // 1. Update Progress Pill in Hero
  const progressPill = document.getElementById('bundle-progress-pill');
  const progressCount = document.getElementById('bundle-progress-count');
  const progressTitle = document.getElementById('bundle-progress-title');
  const progressSub = document.getElementById('bundle-progress-sub');

  if (progressPill) progressPill.classList.toggle('completed', hasAnySelection);
  if (progressCount) progressCount.innerHTML = `<strong>${totalSelectedCount}</strong><span>Ürün</span>`;
  if (progressTitle) {
    progressTitle.textContent = hasAnySelection
      ? `${totalSelectedCount} Ürün Seçildi (%15 İndirim Aktif)`
      : '0 Ürün Seçildi';
  }
  if (progressSub) {
    progressSub.textContent = hasAnySelection
      ? `${selectedStepCount} kategoriden toplam ${totalSelectedCount} ürün paketinize eklendi · İstediğiniz kadar ürün ekleyebilirsiniz`
      : 'Her adımda dilediğiniz kadar ürün seçip 4. adım sonunda toplam fiyatı hesaplayın';
  }

  // 2. Update 4-Step Tab Bar with Step Counter Badges
  BUNDLE_STEP_KEYS.forEach(s => {
    const tabEl = document.getElementById(`bundle-tab-${s}`);
    const numEl = document.getElementById(`bundle-tab-num-${s}`);
    const countBadgeEl = document.getElementById(`bundle-tab-count-${s}`);
    const statusEl = document.getElementById(`bundle-tab-status-${s}`);
    const titleEl = tabEl ? tabEl.querySelector('.bundle-step-title') : null;

    const stepIds = bundleSelections[s] || [];
    const stepProducts = stepIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
    const stepCount = stepProducts.length;
    const isActive = !isBundleSummaryOpen && activeBundleStep === s;
    const isCompleted = stepCount > 0;
    const shortTitle = BUNDLE_STEP_SHORT_TITLES[s] || BUNDLE_STEPS_CONFIG[s].title;

    if (tabEl) {
      tabEl.classList.toggle('active', isActive);
      tabEl.classList.toggle('completed', isCompleted);
      tabEl.setAttribute('aria-selected', String(isActive));
    }
    if (numEl) {
      numEl.innerHTML = isCompleted
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
        : String(s);
    }
    if (countBadgeEl) {
      if (stepCount > 0) {
        countBadgeEl.style.display = 'inline-flex';
        countBadgeEl.textContent = `${stepCount} Seçili`;
      } else {
        countBadgeEl.style.display = 'none';
        countBadgeEl.textContent = '0 Seçili';
      }
    }
    if (titleEl) {
      titleEl.textContent = stepCount > 0
        ? `Adım ${s}: ${shortTitle} (${stepCount} Seçili)`
        : BUNDLE_STEPS_CONFIG[s].title;
    }
    if (statusEl) {
      if (stepCount === 1) {
        statusEl.textContent = `✓ ${stepProducts[0].name}`;
      } else if (stepCount > 1) {
        statusEl.textContent = `✓ ${stepCount} ürün seçildi (${stepProducts.map(p => p.name.split(' ')[0]).join(', ')})`;
      } else {
        statusEl.textContent = BUNDLE_STEPS_CONFIG[s].subtitle;
      }
    }
  });

  // Toggle between Step Selection View and Final Summary View
  const stepSelectionView = document.getElementById('bundle-step-selection-view');
  const finalSummaryView = document.getElementById('bundle-final-summary-view');
  if (stepSelectionView) stepSelectionView.style.display = isBundleSummaryOpen ? 'none' : 'block';
  if (finalSummaryView) finalSummaryView.style.display = isBundleSummaryOpen ? 'block' : 'none';

  // 3. Update Active Step Header Bar & Clean Prev/Next Buttons (Top & Bottom)
  const stepPillEl = document.getElementById('bundle-active-step-pill');
  const headerCountPillEl = document.getElementById('bundle-header-count-pill');
  const stepHeadingEl = document.getElementById('bundle-active-step-heading');
  const stepDescEl = document.getElementById('bundle-active-step-desc');
  const prevBtn = document.getElementById('bundle-prev-btn');
  const nextBtn = document.getElementById('bundle-next-btn');
  const bottomPrevBtn = document.getElementById('bundle-bottom-prev-btn');
  const bottomNextBtn = document.getElementById('bundle-bottom-next-btn');
  const bottomHintEl = document.getElementById('bundle-bottom-step-hint');

  const currentStepIds = bundleSelections[activeBundleStep] || [];
  const currentStepProducts = currentStepIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const currentStepCount = currentStepProducts.length;

  if (stepPillEl) stepPillEl.textContent = `ADIM ${stepCfg.step} / ${totalSteps}`;
  if (headerCountPillEl) {
    headerCountPillEl.textContent = `${currentStepCount} Seçili`;
    headerCountPillEl.classList.toggle('has-items', currentStepCount > 0);
  }
  if (stepHeadingEl) {
    stepHeadingEl.textContent = `Adım ${stepCfg.step}: ${stepCfg.title} (${currentStepCount} Seçili)`;
  }
  if (stepDescEl) {
    stepDescEl.textContent = `${stepCfg.description} (Bu kategoriden birden fazla ürün seçebilirsiniz.)`;
  }

  const showPrev = activeBundleStep > 1;
  if (prevBtn) prevBtn.style.display = showPrev ? 'inline-flex' : 'none';
  if (bottomPrevBtn) bottomPrevBtn.style.display = showPrev ? 'inline-flex' : 'none';

  const nextLabel = activeBundleStep < totalSteps
    ? `Sonraki Adım (Adım ${activeBundleStep + 1}) →`
    : `Paket Özeti & Tamamla (${totalSelectedCount} Ürün) →`;

  const canProceedToSummary = activeBundleStep < totalSteps || hasAnySelection;

  if (nextBtn) {
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = nextLabel;
    nextBtn.disabled = !canProceedToSummary;
  }
  if (bottomNextBtn) {
    bottomNextBtn.style.display = 'inline-flex';
    bottomNextBtn.textContent = nextLabel;
    bottomNextBtn.disabled = !canProceedToSummary;
  }

  if (bottomHintEl) {
    if (currentStepCount > 0) {
      bottomHintEl.innerHTML = `Bu adımda <strong>${currentStepCount} ürün</strong> seçildi (Toplam pakette <strong>${totalSelectedCount} ürün</strong>). Dilerseniz aynı kategoriden başka ürünler de ekleyebilir veya sonraki adıma geçebilirsiniz.`;
    } else if (hasAnySelection) {
      bottomHintEl.innerHTML = `Toplam pakette <strong>${totalSelectedCount} ürün</strong> seçili. Bu adımdan da ürün ekleyebilir veya doğrudan sonraki adıma ilerleyebilirsiniz.`;
    } else {
      bottomHintEl.textContent = `Devam etmek için dilediğiniz kategoriden en az 1 ürün seçebilirsiniz (birden fazla seçim yapılabilir).`;
    }
  }

  // 4. Render Product Grid for Current Step (All matching live Supabase products, no slice limit)
  const gridEl = document.getElementById('bundle-products-grid');
  if (gridEl) {
    const stepProducts = PRODUCTS.filter(p => p && (!stepCfg.filterFn || stepCfg.filterFn(p)));

    gridEl.innerHTML = stepProducts.map(product => {
      const isSelected = currentStepIds.includes(product.id);
      const isOut = isProductOutOfStock(product);
      const imgUrl = getProductImageUrl(product);
      const specs = BUNDLE_PRODUCT_SPECS[product.id] || [product.material, product.subCat];

      return `
        <div class="bundle-product-card ${isSelected ? 'selected' : ''} ${isOut ? 'out-of-stock' : ''}" onclick="selectBundleProduct(${activeBundleStep}, ${product.id})">
          <div>
            <div class="bundle-card-top-badges">
              <span class="bundle-material-pill">TAÇ · ${product.material}</span>
              ${isOut
                ? `<span class="prod-badge badge-tukendi">Tükendi</span>`
                : isSelected
                  ? `<span class="bundle-selected-badge">✓ SEÇİLDİ</span>`
                  : `<span class="bundle-unselected-hint">Stok: ${getProductStock(product)}</span>`
              }
            </div>
            <div class="bundle-card-img-wrap">
              <img src="${imgUrl}" alt="TAÇ ${product.name}" onerror="handleStoreImgError(this)" loading="lazy" />
            </div>
            <div class="bundle-card-brand">${product.brand} · ${product.subCat}</div>
            <h3 class="bundle-card-title">${product.name}</h3>
            <div class="bundle-card-specs">
              ${specs.map(sp => `<span class="bundle-spec-chip">${sp}</span>`).join('')}
            </div>
          </div>
          <div class="bundle-card-footer">
            <div class="bundle-card-price-box">
              <span class="bundle-card-list-label">Liste Fiyatı</span>
              <div class="bundle-card-price-row">
                <span class="bundle-card-price">${formatPrice(product.price)}</span>
              </div>
            </div>
            <button type="button" class="bundle-select-btn" ${isOut && !isSelected ? 'disabled' : ''} onclick="event.stopPropagation(); selectBundleProduct(${activeBundleStep}, ${product.id})">
              ${isOut && !isSelected ? 'Tükendi' : isSelected ? '✓ Seçildi' : 'Pakete Seç'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 5. Render Final Bundle Summary & Price Calculation Grouped by Category
  const finalSummaryTitleEl = document.getElementById('bundle-final-summary-title');
  const finalSummaryDescEl = document.getElementById('bundle-final-summary-desc');
  if (finalSummaryTitleEl) {
    finalSummaryTitleEl.textContent = `Seçtiğiniz Çeyiz Paketi (${totalSelectedCount} Ürün) & Fiyat Hesaplaması`;
  }
  if (finalSummaryDescEl) {
    finalSummaryDescEl.textContent = `Seçtiğiniz tüm ürünlerin toplam liste fiyatı üzerinden %15 özel çeyiz indirimi otomatik olarak uygulanmıştır.`;
  }

  const finalItemsGrid = document.getElementById('bundle-final-items-grid');
  if (finalItemsGrid) {
    finalItemsGrid.innerHTML = BUNDLE_STEP_KEYS.map(s => {
      const cfg = BUNDLE_STEPS_CONFIG[s];
      const stepChosen = (bundleSelections[s] || [])
        .map(id => PRODUCTS.find(p => p.id === id))
        .filter(Boolean);

      if (stepChosen.length > 0) {
        return `
          <div class="bundle-final-category-group">
            <div class="bundle-final-group-header">
              <div class="bundle-final-group-title">
                <span>Adım ${s}: ${cfg.title}</span>
                <span class="bundle-final-group-count">${stepChosen.length} Ürün Seçili</span>
              </div>
              <button type="button" class="bundle-final-change-btn" onclick="switchBundleStep(${s})">+ Ürün Ekle / Düzenle</button>
            </div>
            <div class="bundle-final-items-grid">
              ${stepChosen.map(chosen => {
                const itemDiscounted = Math.round(chosen.price * (1 - BUNDLE_DISCOUNT_RATE));
                return `
                  <div class="bundle-final-item-row filled">
                    <div class="bundle-final-item-thumb">
                      <img src="${getProductImageUrl(chosen)}" alt="TAÇ ${chosen.name}" loading="lazy" />
                    </div>
                    <div class="bundle-final-item-info">
                      <span class="bundle-final-step-tag">Adım ${s} · ${BUNDLE_STEP_SHORT_TITLES[s]}</span>
                      <div class="bundle-final-item-name">TAÇ ${chosen.name}</div>
                      <div class="bundle-final-item-prices">
                        <span class="bundle-final-item-old">${formatPrice(chosen.price)}</span>
                        <span class="bundle-final-item-net">${formatPrice(itemDiscounted)} (%15 Paket Fiyatı)</span>
                      </div>
                    </div>
                    <div class="bundle-final-item-actions">
                      <button type="button" class="bundle-final-remove-btn" onclick="removeBundleProduct(${s}, ${chosen.id}, event)" title="Bu ürünü paketten çıkar">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        Kaldır
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div class="bundle-final-category-group">
          <div class="bundle-final-group-header">
            <div class="bundle-final-group-title">
              <span>Adım ${s}: ${cfg.title}</span>
              <span class="bundle-final-group-count" style="background:#F5F5F4;color:#78716C;border-color:#E7E5E4;">0 Seçili (İsteğe Bağlı)</span>
            </div>
            <button type="button" class="bundle-final-change-btn" onclick="switchBundleStep(${s})">+ Bu Kategoriden Ürün Ekle</button>
          </div>
        </div>
      `;
    }).join('');
  }

  const listTotal = allEntries.reduce((sum, entry) => sum + entry.product.price, 0);
  const discountAmount = Math.round(listTotal * BUNDLE_DISCOUNT_RATE);
  const netTotal = listTotal - discountAmount;

  const finalListTotalEl = document.getElementById('bundle-final-list-total');
  const finalDiscountEl = document.getElementById('bundle-final-discount-amount');
  const finalNetTotalEl = document.getElementById('bundle-final-net-total');
  const finalSubmitBtn = document.getElementById('bundle-final-submit-btn');
  const finalHelperEl = document.getElementById('bundle-final-helper');

  if (finalListTotalEl) finalListTotalEl.textContent = formatPrice(listTotal);
  if (finalDiscountEl) finalDiscountEl.textContent = `-${formatPrice(discountAmount)}`;
  if (finalNetTotalEl) finalNetTotalEl.textContent = formatPrice(netTotal);

  if (finalSubmitBtn) {
    finalSubmitBtn.disabled = !hasAnySelection;
  }
  if (finalHelperEl) {
    finalHelperEl.classList.toggle('incomplete', !hasAnySelection);
    finalHelperEl.textContent = hasAnySelection
      ? `✓ Toplam ${totalSelectedCount} ürün seçildi · ${formatPrice(discountAmount)} (%15) çeyiz indirimi sepete uygulanır`
      : 'Paketi sepete eklemek için lütfen en az 1 ürün seçin';
  }
}
window.renderBundleBuilder = renderBundleBuilder;

function addCustomBundleToCart() {
  const allEntries = getAllSelectedBundleProducts();
  if (allEntries.length === 0) {
    showToast('Lütfen pakete eklemek için en az 1 ürün seçin.', 'wish');
    return;
  }

  const listTotal = allEntries.reduce((sum, entry) => sum + entry.product.price, 0);
  const totalSaved = Math.round(listTotal * BUNDLE_DISCOUNT_RATE);

  allEntries.forEach(({ product: prod }) => {
    const discountedPrice = Math.round(prod.price * (1 - BUNDLE_DISCOUNT_RATE));
    const existing = cart.find(item => item.id === prod.id);
    if (existing) {
      existing.price = discountedPrice;
      existing.oldPrice = prod.price;
      existing.qty += 1;
    } else {
      cart.push({
        ...prod,
        price: discountedPrice,
        oldPrice: prod.price,
        qty: 1,
      });
    }
  });

  updateCartUI();
  animateCartBadge();
  showToast(
    `<strong>${allEntries.length} Parçalı Özel Çeyiz Paketiniz</strong> (%15 İndirimle <strong>${formatPrice(totalSaved)} kazanç</strong>) sepete eklendi!`,
    'cart'
  );
  openCart();
}
window.addCustomBundleToCart = addCustomBundleToCart;

// =========================================================
// =========================================================
// SUPABASE LIVE SYNC (`products`, `orders`, DYNAMIC CATEGORIES & CRUD)
// =========================================================
const LOCAL_ORDERS_MIRROR_KEY = 'ttd_orders_mirror_v1';
const LOCAL_CATEGORIES_KEY = 'ttd_custom_categories_v1';
const LOCAL_MATERIALS_KEY = 'ttd_custom_materials_v1';
const LOCAL_DELETED_PRODUCTS_KEY = 'ttd_deleted_product_ids_v1';

function purgeStaleProductCaches() {
  const staleKeys = [
    'ttd_fast_catalog',
    'ttd_live_catalog_v2',
    'ttd_products_overrides_v1',
    'ttd_initial_seed_done_v1',
    'ttd_seeded',
    'products',
  ];
  staleKeys.forEach(k => {
    try { localStorage.removeItem(k); } catch (_) {}
  });
}

const DEFAULT_STORE_CATEGORIES = [
  'Tencereler',
  'Tavalar',
  'Set Ürünler',
  'Çaydanlık Takımları',
];

const DEFAULT_STORE_MATERIALS = [
  'Granit',
  'Paslanmaz Çelik',
  'Döküm',
  'Seramik',
  'Bio Granit',
];

function buildCatalogSignature(list) {
  return JSON.stringify(
    (list || []).map(p => [
      p.id,
      p.name,
      p.mainCat,
      p.material,
      p.price,
      p.oldPrice,
      p.stock,
      p.image,
      Array.isArray(p.images) ? p.images.join('|') : '',
    ])
  );
}

function loadDeletedProductIds() {
  try {
    const raw = localStorage.getItem(LOCAL_DELETED_PRODUCTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(Number).filter(Boolean) : [];
  } catch (e) {
    return [];
  }
}

function loadDynamicCategoriesList() {
  let stored = [];
  try {
    const raw = localStorage.getItem(LOCAL_CATEGORIES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) stored = parsed;
    }
  } catch (e) {}
  const fromProducts = PRODUCTS.map(p => String(p.mainCat || p.category || '').trim()).filter(Boolean);
  return Array.from(new Set([...DEFAULT_STORE_CATEGORIES, ...stored, ...fromProducts]));
}

function loadDynamicMaterialsList() {
  let stored = [];
  try {
    const raw = localStorage.getItem(LOCAL_MATERIALS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) stored = parsed;
    }
  } catch (e) {}
  const fromProducts = PRODUCTS
    .map(p => String(p.material || '').trim())
    .filter(m => m && m.toLowerCase() !== 'çelik');
  return Array.from(new Set([...DEFAULT_STORE_MATERIALS, ...stored, ...fromProducts]));
}

function inferMaterialForDynamicProduct(title, category) {
  const combined = `${title || ''} ${category || ''}`.toLowerCase();
  if (combined.includes('seramik')) return 'Seramik';
  if (combined.includes('bio granit') || combined.includes('biogranit')) return 'Bio Granit';
  if (combined.includes('paslanmaz çelik') || combined.includes('çelik') || combined.includes('celik') || combined.includes('çaydanlık') || combined.includes('düdüklü') || combined.includes('cezve')) return 'Paslanmaz Çelik';
  if (combined.includes('döküm') || combined.includes('dokum')) return 'Döküm';
  if (combined.includes('emaye')) return 'Emaye';
  return 'Granit';
}

function findCatalogProductForRow(row) {
  if (!row || typeof row !== 'object') return null;
  if (row.id != null) {
    const byId = PRODUCTS.find(p => p.id === Number(row.id));
    if (byId) return byId;
  }
  const rawTitle = String(row.title || row.name || '').trim().toLowerCase();
  if (rawTitle) {
    const byTitle = PRODUCTS.find(
      p => p.name.trim().toLowerCase() === rawTitle ||
           `taç ${p.name.trim().toLowerCase()}` === rawTitle
    );
    if (byTitle) return byTitle;
  }
  return null;
}

function parseStoreProductImages(row, localMeta = {}, fallbackImg = 'images/tacgranittencereseti.jpg') {
  const result = [];
  const pushUnique = (u) => {
    const clean = normalizeStoreImagePath(u);
    if (clean && !result.includes(clean)) result.push(clean);
  };

  const candidates = [
    row?.images,
    row?.image_url,
    row?.image,
    localMeta?.images,
    localMeta?.image,
    fallbackImg,
  ];

  for (const cand of candidates) {
    if (!cand) continue;
    if (Array.isArray(cand)) {
      cand.forEach(pushUnique);
      if (result.length > 0) break;
    } else if (typeof cand === 'string') {
      const trimmed = cand.trim();
      if (trimmed.startsWith('[')) {
        try {
          const parsed = JSON.parse(trimmed);
          if (Array.isArray(parsed)) {
            parsed.forEach(pushUnique);
            if (result.length > 0) break;
          }
        } catch (_) {}
      }
      pushUnique(trimmed);
      if (result.length > 0) break;
    }
  }

  if (result.length === 0) {
    pushUnique(fallbackImg || 'images/tacgranittencereseti.jpg');
  }
  return result;
}

function applyProductOverrideToCatalog(row, localMeta = {}) {
  if (!row || typeof row !== 'object') return null;
  const numId = Number(row.id ?? localMeta.id);
  const deletedIds = loadDeletedProductIds();
  if (numId && deletedIds.includes(numId)) return null;

  let prod = findCatalogProductForRow(row);

  const rawTitle = String(row.title || row.name || localMeta.name || prod?.name || '').trim();
  const rawCategory = String(row.category || localMeta.mainCat || localMeta.category || prod?.mainCat || 'Tencereler').trim();
  const imagesList = parseStoreProductImages(row, localMeta, prod?.image || 'images/tacgranittencereseti.jpg');
  const cleanImage = imagesList[0] || 'images/tacgranittencereseti.jpg';
  const rawPrice = row.price ?? localMeta.price ?? prod?.price;
  const rawStock = row.stock ?? localMeta.stock ?? prod?.stock;
  const rawOldPrice = row.old_price ?? row.oldPrice ?? localMeta.oldPrice ?? prod?.oldPrice;
  const material = String(localMeta.material || prod?.material || inferMaterialForDynamicProduct(rawTitle, rawCategory));
  const rawDesc = row.description || row.aciklama || row.short_description || localMeta.description || prod?.description || '';
  const description = String(rawDesc).trim() || `${rawCategory} · ${material} Mutfak Ekipmanı`;
  const brand = String(localMeta.brand || prod?.brand || 'TAÇ');
  const subCat = String(localMeta.subCat || prod?.subCat || rawCategory);

  if (!prod) {
    if (!numId || !rawTitle) return null;
    prod = {
      id: numId,
      supabaseRowId: numId,
      name: rawTitle,
      title: rawTitle,
      brand: brand,
      material: material,
      category: rawCategory,
      mainCat: rawCategory,
      subCat: subCat,
      price: Number.isFinite(Number(rawPrice)) && Number(rawPrice) > 0 ? Math.round(Number(rawPrice)) : 999,
      oldPrice: rawOldPrice != null && Number.isFinite(Number(rawOldPrice)) && Number(rawOldPrice) > 0 ? Math.round(Number(rawOldPrice)) : null,
      rating: 4.9,
      reviews: 128,
      badges: ['yeni'],
      svgType: 'granite-pot',
      image: cleanImage,
      images: imagesList,
      description: description,
      stock: Number.isFinite(Number(rawStock)) ? Math.max(0, Math.floor(Number(rawStock))) : 15,
    };
    PRODUCTS.push(prod);
  } else {
    if (numId) prod.supabaseRowId = numId;
    if (rawTitle) {
      prod.name = rawTitle;
      prod.title = rawTitle;
    }
    if (rawCategory) {
      prod.mainCat = rawCategory;
      prod.category = rawCategory;
      if (!CATEGORY_SUBS[rawCategory]) {
        prod.subCat = rawCategory;
      }
    }
    if (localMeta.material) prod.material = localMeta.material;
    if (rawDesc) prod.description = description;
    if (cleanImage) prod.image = cleanImage;
    if (imagesList.length > 0) prod.images = imagesList;
    if (rawPrice != null && Number.isFinite(Number(rawPrice)) && Number(rawPrice) > 0) {
      prod.price = Math.round(Number(rawPrice));
    }
    if (rawStock != null && Number.isFinite(Number(rawStock))) {
      prod.stock = Math.max(0, Math.floor(Number(rawStock)));
    }
    if (rawOldPrice != null && Number.isFinite(Number(rawOldPrice)) && Number(rawOldPrice) > 0) {
      prod.oldPrice = Math.round(Number(rawOldPrice));
    } else if (row.old_price === null || localMeta.oldPrice === null) {
      prod.oldPrice = null;
    }
  }

  // If stock is 0 or less, purge any out-of-stock copies from cart and bundle selections
  if (prod.stock <= 0) {
    cart = cart.filter(item => item.id !== prod.id);
    if (typeof bundleSelections === 'object' && bundleSelections !== null) {
      [1, 2, 3, 4].forEach(stepNum => {
        if (Array.isArray(bundleSelections[stepNum])) {
          bundleSelections[stepNum] = bundleSelections[stepNum].filter(id => id !== prod.id);
        }
      });
    }
  }
  return prod;
}

function renderDynamicCategoriesUI() {
  const categories = loadDynamicCategoriesList();

  // 1. Update Category Filter Chips inside #products
  const catChipsContainer = document.getElementById('dynamic-category-filters');
  if (catChipsContainer) {
    const activeCat = activeMainCat || 'all';
    catChipsContainer.innerHTML = `
      <button class="chip cat-chip ${activeCat === 'all' ? 'active' : ''}" data-cat-filter="all">Tümü</button>
      ${categories.map(cat => `
        <button class="chip cat-chip ${activeCat === cat ? 'active' : ''}" data-cat-filter="${cat}">${cat}</button>
      `).join('')}
    `;
  }

  // 2. Append any newly created custom categories to Desktop Header Nav Bar (.header-cat-inner)
  const headerCatInner = document.querySelector('.header-cat-inner');
  const bundleCtaBtn = document.getElementById('nav-bundle-builder-btn');
  if (headerCatInner) {
    headerCatInner.querySelectorAll('.dynamic-custom-cat-item').forEach(el => el.remove());
    const customCats = categories.filter(c => !DEFAULT_STORE_CATEGORIES.includes(c));
    customCats.forEach(cat => {
      const div = document.createElement('div');
      div.className = 'cat-nav-item dynamic-custom-cat-item';
      div.dataset.catItem = cat;
      const a = document.createElement('a');
      a.href = `#${cat.toLowerCase().replace(/\s+/g, '-')}`;
      a.className = `cat-nav-link ${activeMainCat === cat ? 'active' : ''}`;
      a.dataset.mainCat = cat;
      a.textContent = cat;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openCategoryPage(cat, null);
      });
      div.appendChild(a);
      if (bundleCtaBtn && bundleCtaBtn.parentNode === headerCatInner) {
        headerCatInner.insertBefore(div, bundleCtaBtn);
      } else {
        headerCatInner.appendChild(div);
      }
    });
  }
}

function renderDynamicMaterialsUI() {
  const matChipsContainer = document.getElementById('material-filters');
  if (!matChipsContainer) return;
  const materials = loadDynamicMaterialsList();
  const currentActive = activeFilter || 'all';
  matChipsContainer.innerHTML = `
    <button class="chip ${currentActive === 'all' ? 'active' : ''}" data-filter="all">Tümü</button>
    ${materials.map(mat => `
      <button class="chip ${currentActive.toLowerCase() === mat.toLowerCase() ? 'active' : ''}" data-filter="${mat}">${mat}</button>
    `).join('')}
  `;
}

function syncHeroFeaturedSteelSetPrice() {
  const priceEl = document.getElementById('hero-steel-set-price');
  const oldPriceEl = document.getElementById('hero-steel-set-old-price');
  if (!priceEl) return;

  if (isInitialProductsLoading) {
    priceEl.textContent = 'Yükleniyor...';
    if (oldPriceEl) {
      oldPriceEl.textContent = '';
      oldPriceEl.style.display = 'none';
    }
    return;
  }

  const featuredSet =
    PRODUCTS.find(p => Number(p.id) === 11) ||
    PRODUCTS.find(p => {
      const t = `${p.name || ''} ${p.title || ''} ${p.material || ''}`.toLocaleLowerCase('tr-TR');
      return t.includes('çelik') && t.includes('set');
    });

  if (!featuredSet) return;
  priceEl.textContent = formatPrice(featuredSet.price);
  if (oldPriceEl) {
    if (featuredSet.oldPrice && Number(featuredSet.oldPrice) > Number(featuredSet.price)) {
      oldPriceEl.textContent = formatPrice(featuredSet.oldPrice);
      oldPriceEl.style.display = 'inline-block';
    } else {
      oldPriceEl.textContent = '';
      oldPriceEl.style.display = 'none';
    }
  }
}

function findBestProductForShowcase(predicate) {
  const isCustomPhoto = (p) => {
    const u = getProductImageUrl(p);
    return u && !u.endsWith('tacceliktencere.jpg') && !u.endsWith('taccelikset.jpg');
  };
  return PRODUCTS.find(p => predicate(p) && isCustomPhoto(p)) || PRODUCTS.find(predicate) || null;
}

function setImgElementSrc(elId, product) {
  if (!product) return;
  const el = document.getElementById(elId);
  if (!el) return;
  const imgUrl = getProductImageUrl(product);
  if (imgUrl) {
    el.dataset.fallbackApplied = '';
    el.src = imgUrl;
  }
}

function syncBundlePromoStep2Image() {
  const tencereSetProd = findBestProductForShowcase(p => {
    const t = `${p.mainCat || ''} ${p.subCat || ''} ${p.name || ''}`.toLocaleLowerCase('tr-TR');
    return p.mainCat === 'Set Ürünler' || (t.includes('tencere') && t.includes('set'));
  });
  const tavaProd = findBestProductForShowcase(p => {
    const t = `${p.mainCat || ''} ${p.category || ''} ${p.name || ''}`.toLocaleLowerCase('tr-TR');
    return p.mainCat === 'Tavalar' || t.includes('tava');
  });
  const caydanlikProd = findBestProductForShowcase(p => {
    const t = `${p.mainCat || ''} ${p.subCat || ''} ${p.category || ''} ${p.name || ''}`.toLocaleLowerCase('tr-TR');
    return t.includes('çaydanlık') || t.includes('caydanlik');
  });
  const dudukluProd = findBestProductForShowcase(p => {
    const t = `${p.mainCat || ''} ${p.subCat || ''} ${p.category || ''} ${p.name || ''}`.toLocaleLowerCase('tr-TR');
    return t.includes('düdüklü') || t.includes('duduklu');
  });

  setImgElementSrc('bundle-promo-step1-thumb', tencereSetProd);
  setImgElementSrc('bundle-promo-step2-thumb', tavaProd);
  setImgElementSrc('bundle-promo-step2-img', tavaProd);
  setImgElementSrc('bundle-promo-step3-thumb', caydanlikProd);
  setImgElementSrc('bundle-promo-step3-img', caydanlikProd || dudukluProd);
  setImgElementSrc('bundle-promo-step4-thumb', dudukluProd);
  setImgElementSrc('cat-card-duduklu-img', dudukluProd);
}

function updateCategoryShowcaseCounts() {
  const setText = (id, count) => {
    const el = document.getElementById(id);
    if (el) el.textContent = isInitialProductsLoading ? 'Yükleniyor...' : `${count} ürün`;
  };

  const norm = (p) =>
    `${p.name || ''} ${p.title || ''} ${p.mainCat || ''} ${p.subCat || ''} ${p.category || ''} ${p.material || ''}`.toLocaleLowerCase('tr-TR');

  const dokumCelikCount = PRODUCTS.filter(p => {
    const txt = norm(p);
    if (txt.includes('düdüklü') || txt.includes('duduklu') || txt.includes('clipso')) return false;
    if (txt.includes('çaydanlık') || txt.includes('caydanlik') || txt.includes('semaver')) return false;
    const isPan = txt.includes('tava') || txt.includes('sahan') || txt.includes('wok') || txt.includes('krep') || txt.includes('ızgara');
    if (isPan && !txt.includes('tencere')) return false;
    return txt.includes('tencere') || p.mainCat === 'Tencereler';
  }).length;

  const tavaSahanCount = PRODUCTS.filter(p => {
    const txt = norm(p);
    return (
      p.mainCat === 'Tavalar' ||
      txt.includes('tava') ||
      txt.includes('sahan') ||
      txt.includes('wok') ||
      txt.includes('krep') ||
      txt.includes('ızgara') ||
      txt.includes('izgara')
    );
  }).length;

  const dudukluCount = PRODUCTS.filter(p => {
    const txt = norm(p);
    return txt.includes('düdüklü') || txt.includes('duduklu') || txt.includes('clipso');
  }).length;

  const ceyizSetCount = PRODUCTS.filter(p => {
    const txt = norm(p);
    return (
      p.mainCat === 'Set Ürünler' ||
      txt.includes('set') ||
      txt.includes('çeyiz') ||
      txt.includes('çaydanlık') ||
      txt.includes('caydanlik')
    );
  }).length;

  setText('cat-count-dokum', dokumCelikCount);
  setText('cat-count-tava', tavaSahanCount);
  setText('cat-count-duduklu', dudukluCount);
  setText('cat-count-ceyiz', ceyizSetCount);
}

function refreshAllStoreViewsAfterStockOrPriceChange() {
  renderDynamicCategoriesUI();
  renderDynamicMaterialsUI();
  updateCategoryShowcaseCounts();
  syncHeroFeaturedSteelSetPrice();
  syncBundlePromoStep2Image();
  renderProducts();
  renderFlashDeals();
  if (document.body.classList.contains('favorites-page-mode')) {
    renderFavoritesPage();
  }
  if (document.body.classList.contains('bundle-builder-mode')) {
    renderBundleBuilder();
  }
  if (document.body.classList.contains('product-detail-mode') && selectedProduct) {
    const updatedProd = PRODUCTS.find(p => p.id === selectedProduct.id);
    if (updatedProd) openProductDetail(updatedProd, false);
  }
  updateCartUI();
}

async function syncProductsWithSupabase(options = {}) {
  const { silent = false } = options;
  const deletedIds = loadDeletedProductIds();
  const prevSignature = PRODUCTS.length > 0 ? buildCatalogSignature(PRODUCTS) : '';

  if (!silent) {
    isInitialProductsLoading = true;
    renderProducts();
    renderFlashDeals();
    syncHeroFeaturedSteelSetPrice();
  }

  if (!supabaseClient) {
    console.error('Supabase client is not initialized.');
    isInitialProductsLoading = false;
    refreshAllStoreViewsAfterStockOrPriceChange();
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from('products')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Supabase Error:', error);
      isInitialProductsLoading = false;
      refreshAllStoreViewsAfterStockOrPriceChange();
      return;
    }

    PRODUCTS.length = 0;
    if (Array.isArray(data)) {
      data.forEach(row => {
        const rId = Number(row.id);
        if (deletedIds.includes(rId)) return;
        applyProductOverrideToCatalog(row, {});
      });
    }

    const nextSignature = buildCatalogSignature(PRODUCTS);
    const wasLoading = isInitialProductsLoading;
    isInitialProductsLoading = false;

    if (wasLoading || nextSignature !== prevSignature) {
      refreshAllStoreViewsAfterStockOrPriceChange();
    }
    return;
  } catch (err) {
    console.error('Supabase Error:', err);
  }

  isInitialProductsLoading = false;
  refreshAllStoreViewsAfterStockOrPriceChange();
}

async function updateProductInSupabase(productId, updates = {}) {
  const prod = PRODUCTS.find(p => p.id === Number(productId));
  if (!prod) return { ok: false, error: 'Ürün bulunamadı' };

  if (updates.price != null && Number.isFinite(Number(updates.price)) && Number(updates.price) > 0) {
    prod.price = Math.round(Number(updates.price));
  }
  if (updates.stock != null && Number.isFinite(Number(updates.stock))) {
    prod.stock = Math.max(0, Math.floor(Number(updates.stock)));
  }

  // If stock reaches 0, remove from cart & bundle selections immediately
  if (prod.stock <= 0) {
    cart = cart.filter(item => item.id !== prod.id);
    if (typeof bundleSelections === 'object' && bundleSelections !== null) {
      [1, 2, 3, 4].forEach(stepNum => {
        if (Array.isArray(bundleSelections[stepNum])) {
          bundleSelections[stepNum] = bundleSelections[stepNum].filter(id => id !== prod.id);
        }
      });
    }
  } else {
    cart.forEach(item => {
      if (item.id === prod.id && !item.isCustomBundleItem) {
        item.price = prod.price;
        const maxStock = getProductStock(prod);
        if (item.qty > maxStock) {
          item.qty = maxStock;
        }
      }
    });
  }

  let supabaseUpdated = false;
  if (supabaseClient) {
    const dbPatch = {
      price: Number(prod.price),
      stock: Number(getProductStock(prod)),
    };

    try {
      const targetRowId = Number(prod.supabaseRowId ?? prod.id);
      const { data: updatedRow, error } = await supabaseClient
        .from('products')
        .update(dbPatch)
        .eq('id', targetRowId)
        .select('id, title, category, price, old_price, stock, image_url, created_at')
        .maybeSingle();

      if (error) {
        console.error('Supabase Error:', error);
      } else if (updatedRow) {
        supabaseUpdated = true;
      } else {
        const { data: byTitleRow, error: byTitleErr } = await supabaseClient
          .from('products')
          .update(dbPatch)
          .eq('title', String(prod.name))
          .select('id, title, category, price, old_price, stock, image_url, created_at')
          .maybeSingle();

        if (byTitleErr) {
          console.error('Supabase Error:', byTitleErr);
        } else if (byTitleRow) {
          supabaseUpdated = true;
        }
      }
    } catch (err) {
      console.error('Supabase Error:', err);
    }
  }

  purgeStaleProductCaches();
  refreshAllStoreViewsAfterStockOrPriceChange();
  return { ok: true, supabaseUpdated };
}

async function decrementOrderedProductsStock(orderedItems) {
  if (!Array.isArray(orderedItems) || orderedItems.length === 0) return;

  // Aggregate quantity per product ID
  const qtyByProductId = {};
  orderedItems.forEach(item => {
    const pid = Number(item.id);
    if (!pid) return;
    qtyByProductId[pid] = (qtyByProductId[pid] || 0) + (Number(item.qty) || 1);
  });

  const updatePromises = Object.entries(qtyByProductId).map(([pidStr, purchasedQty]) => {
    const pid = Number(pidStr);
    const prod = PRODUCTS.find(p => p.id === pid);
    if (!prod) return Promise.resolve();
    const currentStock = getProductStock(prod);
    const nextStock = Math.max(0, currentStock - Number(purchasedQty));
    prod.stock = nextStock;
    return updateProductInSupabase(pid, { stock: Number(nextStock) });
  });

  await Promise.allSettled(updatePromises);
  refreshAllStoreViewsAfterStockOrPriceChange();
}

// =========================================================
// SUPABASE ORDERS SUBMISSION (`orders` table)
// =========================================================
function loadLocalOrdersMirror() {
  try {
    const raw = localStorage.getItem(LOCAL_ORDERS_MIRROR_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveLocalOrdersMirror(ordersList) {
  try {
    localStorage.setItem(LOCAL_ORDERS_MIRROR_KEY, JSON.stringify(ordersList || []));
  } catch (e) {
    // ignore storage errors
  }
}

function normalizeOrderRow(raw) {
  if (!raw || typeof raw !== 'object') return null;

  let parsedItems = raw.items;
  if (typeof parsedItems === 'string') {
    try {
      parsedItems = JSON.parse(parsedItems);
    } catch (e) {
      parsedItems = [];
    }
  }
  if (!Array.isArray(parsedItems)) {
    parsedItems = [];
  }

  const orderNumber =
    raw.order_number ||
    (raw.id ? `#TTD-${1000 + Number(raw.id)}` : '#TTD-1001');

  const customerName = raw.customer_name || 'Müşteri';
  const customerPhone = raw.customer_phone || '—';
  const customerAddress = raw.customer_address || '—';
  const paymentMethod = raw.payment_method || 'Havale / EFT';
  const totalAmount = Number(raw.total_amount ?? raw.total_price ?? 0);
  const status = raw.status || 'Ödeme Bekleniyor';
  const createdAt = raw.created_at || new Date().toISOString();

  return {
    id: raw.id ?? null,
    order_number: String(orderNumber),
    customer_name: String(customerName),
    customer_phone: String(customerPhone),
    customer_address: String(customerAddress),
    payment_method: String(paymentMethod),
    items: parsedItems,
    total_amount: Number(totalAmount),
    total_price: Number(totalAmount),
    status: String(status),
    created_at: createdAt,
  };
}

async function saveOrderToSupabase(orderRecord) {
  const normalized = normalizeOrderRow(orderRecord);
  if (!normalized) return { ok: false };

  // Save immediately to local mirror
  const existingMirror = loadLocalOrdersMirror();
  const filteredMirror = existingMirror.filter(
    o => o.order_number !== normalized.order_number
  );
  filteredMirror.unshift(normalized);
  saveLocalOrdersMirror(filteredMirror);

  if (!supabaseClient) {
    return { ok: true, source: 'local' };
  }

  // Exact PostgreSQL `orders` schema: order_number, customer_name, customer_phone, customer_address, payment_method, items, total_amount, status
  const orderPayload = {
    order_number: String(normalized.order_number),
    customer_name: String(normalized.customer_name),
    customer_phone: String(normalized.customer_phone),
    customer_address: String(normalized.customer_address),
    payment_method: String(normalized.payment_method || 'Havale / EFT'),
    items: Array.isArray(normalized.items) ? normalized.items : [],
    total_amount: Number(normalized.total_amount),
    status: String(normalized.status || 'Ödeme Bekleniyor'),
  };

  try {
    const { data, error } = await supabaseClient
      .from('orders')
      .insert([orderPayload])
      .select('id, order_number, customer_name, customer_phone, customer_address, payment_method, items, total_amount, status, created_at')
      .maybeSingle();

    if (error) {
      console.error('Supabase Error:', error);
      return { ok: false, error };
    }

    if (data && data.id != null) {
      normalized.id = data.id;
      saveLocalOrdersMirror(filteredMirror);
    }
    return { ok: true, source: 'supabase' };
  } catch (err) {
    console.error('Supabase Error:', err);
    return { ok: false, error: err };
  }
}

// =========================================================
// LEGAL & CORPORATE COMPLIANCE MODAL
// =========================================================
const LEGAL_TAB_TITLES = {
  mesafeli: 'Mesafeli Satış Sözleşmesi & Ön Bilgilendirme Formu',
  iade: 'İptal, İade ve Değişim Koşulları (14 Gün İade & 24 Saatte Hasar Telafisi)',
  kvkk: 'KVKK Aydınlatma Metni & Gizlilik Politikası',
  teslimat: 'Teslimat ve Kargo Bilgileri (Sabit 200 TL Sigortalı Gönderim)',
  hakkimizda: 'Hakkımızda & Resmi TAÇ Yetkili Bayi Bilgileri',
};

function switchLegalTab(tabKey) {
  document.querySelectorAll('.legal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.legalTab === tabKey);
  });
  ['mesafeli', 'iade', 'kvkk', 'teslimat', 'hakkimizda'].forEach(k => {
    const panel = document.getElementById(`legal-panel-${k}`);
    if (panel) panel.style.display = k === tabKey ? 'block' : 'none';
  });
  const titleEl = document.getElementById('legal-modal-title');
  if (titleEl && LEGAL_TAB_TITLES[tabKey]) {
    titleEl.textContent = LEGAL_TAB_TITLES[tabKey];
  }
}
window.switchLegalTab = switchLegalTab;

function openLegalModal(tabKey = 'mesafeli') {
  const overlay = document.getElementById('legal-modal-overlay');
  if (!overlay) return;
  switchLegalTab(tabKey);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.openLegalModal = openLegalModal;

function closeLegalModal() {
  const overlay = document.getElementById('legal-modal-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = 'auto';
  document.body.style.overflowX = 'hidden';
}
window.closeLegalModal = closeLegalModal;

// =========================================================
// HERO SLIDER
// =========================================================
let currentSlide = 0;
let sliderInterval;

function goToSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startSlider() {
  sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}
function resetSlider() {
  clearInterval(sliderInterval);
  startSlider();
}

// =========================================================
// COUNTDOWN TIMER
// =========================================================
function startCountdown() {
  let totalSeconds = 12 * 3600 + 34 * 60 + 58;

  // Dynamic midnight target (00:00:00 of the next day in local time)
  const getNextMidnight = (baseDate = new Date()) =>
    new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + 1, 0, 0, 0, 0);

  let targetMidnight = getNextMidnight();

  function tick() {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    const fmtH = document.getElementById('cnt-h');
    const fmtM = document.getElementById('cnt-m');
    const fmtS = document.getElementById('cnt-s');
    if (fmtH) fmtH.textContent = String(h).padStart(2, '0');
    if (fmtM) fmtM.textContent = String(m).padStart(2, '0');
    if (fmtS) fmtS.textContent = String(s).padStart(2, '0');
    if (totalSeconds > 0) totalSeconds--;

    // Calculate remaining time until local midnight (00:00:00)
    const now = new Date();
    let flashSeconds;
    if (now >= targetMidnight) {
      flashSeconds = 0;
      targetMidnight = getNextMidnight(now);
    } else {
      flashSeconds = Math.ceil((targetMidnight.getTime() - now.getTime()) / 1000);
    }

    const fh = Math.floor(flashSeconds / 3600);
    const fm = Math.floor((flashSeconds % 3600) / 60);
    const fs = flashSeconds % 60;
    const elFH = document.getElementById('flash-h');
    const elFM = document.getElementById('flash-m');
    const elFS = document.getElementById('flash-s');
    if (elFH) elFH.textContent = String(fh).padStart(2, '0');
    if (elFM) elFM.textContent = String(fm).padStart(2, '0');
    if (elFS) elFS.textContent = String(fs).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// =========================================================
// LIVE PRODUCT SEARCH AUTOCOMPLETE (UP TO 4 PRODUCT CARDS)
// =========================================================
function getMatchingProductsForQuery(rawVal) {
  const val = (rawVal || '').trim().toLowerCase();
  if (!val) return [];
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(val) ||
    p.brand.toLowerCase().includes(val) ||
    p.material.toLowerCase().includes(val) ||
    p.mainCat.toLowerCase().includes(val) ||
    p.subCat.toLowerCase().includes(val) ||
    p.description.toLowerCase().includes(val)
  );
}

function viewAllSearchResults(rawQuery) {
  const cleanQuery = (rawQuery || '').trim();
  const input = document.getElementById('search-input');
  const suggestions = document.getElementById('search-suggestions');
  if (input) input.value = cleanQuery;
  if (suggestions) suggestions.classList.remove('show');

  activeMainCat = null;
  activeSubCat = null;
  activeFilter = 'all';
  searchQuery = cleanQuery;
  visibleCount = 16;

  document.body.classList.remove('favorites-page-mode', 'account-page-mode', 'category-page-mode', 'checkout-page-mode', 'product-detail-mode', 'bundle-builder-mode');
  document.getElementById('nav-bundle-builder-btn')?.classList.remove('active');
  const banner = document.getElementById('category-page-banner');
  if (banner) banner.style.display = 'none';

  document.querySelectorAll('#material-filters .chip').forEach(c => c.classList.remove('active'));
  document.querySelector('#material-filters .chip[data-filter="all"]')?.classList.add('active');
  document.querySelectorAll('#dynamic-category-filters .cat-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.catFilter === 'all');
  });

  renderProducts();
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.viewAllSearchResults = viewAllSearchResults;

function initSearch() {
  const input = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const suggestions = document.getElementById('search-suggestions');

  input.addEventListener('input', (e) => {
    const rawVal = e.target.value.trim();
    if (!rawVal) {
      suggestions.classList.remove('show');
      if (searchQuery) {
        searchQuery = '';
        renderProducts();
      }
      return;
    }

    const matchedProducts = getMatchingProductsForQuery(rawVal);
    if (matchedProducts.length === 0) {
      suggestions.innerHTML = `
        <div class="search-autocomplete-header">
          <span>Arama Sonuçları</span>
          <span>0 Ürün</span>
        </div>
        <div class="search-prod-card" style="cursor:default;">
          <div class="search-prod-thumb">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
          <div class="search-prod-info">
            <div class="search-prod-title">"${rawVal}" için eşleşen ürün bulunamadı</div>
            <div class="search-prod-brand">Farklı bir anahtar kelime deneyin (örn: granit, düdüklü, çelik)</div>
          </div>
        </div>
      `;
      suggestions.classList.add('show');
      return;
    }

    const topFour = matchedProducts.slice(0, 4);
    const safeQuery = rawVal.replace(/'/g, "\\'");

    suggestions.innerHTML = `
      <div class="search-autocomplete-header">
        <span>Önerilen Ürünler</span>
        <span>${matchedProducts.length} eşleşme</span>
      </div>
      ${topFour.map(p => `
        <div class="search-prod-card" onclick="selectSearchProduct(${p.id}, '${safeQuery}')">
          <div class="search-prod-thumb"><img src="${getProductImageUrl(p)}" alt="TAÇ ${p.name}" loading="lazy" /></div>
          <div class="search-prod-info">
            <div class="search-prod-brand">${p.brand} · ${p.subCat}</div>
            <div class="search-prod-title">${p.name}</div>
          </div>
          <div class="search-prod-price-col">
            ${p.oldPrice ? `<span class="search-prod-old">${formatPrice(p.oldPrice)}</span>` : ''}
            <span class="search-prod-price">${formatPrice(p.price)}</span>
          </div>
        </div>
      `).join('')}
      <button type="button" class="search-view-all-row" onclick="viewAllSearchResults('${safeQuery}')">
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="inline-svg-icon"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          Tüm sonuçları gör (${matchedProducts.length} ürün)
        </span>
        <span>→</span>
      </button>
    `;
    suggestions.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      viewAllSearchResults(input.value);
    }
  });

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      viewAllSearchResults(input.value);
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-wrapper')) {
      suggestions.classList.remove('show');
    }
  });
}

window.selectSearchProduct = function(productId, rawQuery) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    viewAllSearchResults(rawQuery);
    return;
  }
  document.getElementById('search-input').value = '';
  document.getElementById('search-suggestions').classList.remove('show');
  openProductDetail(product);
};

window.selectSuggestion = function(text) {
  viewAllSearchResults(text);
};

// =========================================================
// SCROLL EFFECTS
// =========================================================
function initScrollEffects() {
  const header = document.getElementById('main-header');
  const backTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    if (y > 400) backTop.classList.add('show');
    else backTop.classList.remove('show');
  }, { passive: true });

  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =========================================================
// INIT
// =========================================================
document.addEventListener('DOMContentLoaded', () => {

  // Purge any stale cached product keys so mobile & desktop always load live Supabase data
  purgeStaleProductCaches();
  PRODUCTS.length = 0;

  isInitialProductsLoading = true;
  renderDynamicCategoriesUI();
  renderDynamicMaterialsUI();
  updateCategoryShowcaseCounts();
  syncHeroFeaturedSteelSetPrice();
  renderProducts();
  renderFlashDeals();
  syncProductsWithSupabase({ silent: false });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && !isInitialProductsLoading) {
      syncProductsWithSupabase({ silent: true });
    }
  });

  window.addEventListener('storage', (e) => {
    if (
      e.key === LOCAL_CATEGORIES_KEY ||
      e.key === LOCAL_MATERIALS_KEY ||
      e.key === LOCAL_DELETED_PRODUCTS_KEY
    ) {
      syncProductsWithSupabase({ silent: true });
    }
  });

  // Dynamic Category filter chips inside #products
  document.getElementById('dynamic-category-filters')?.addEventListener('click', (e) => {
    const chip = e.target.closest('.cat-chip');
    if (!chip) return;
    document.querySelectorAll('#dynamic-category-filters .cat-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const selectedCat = chip.dataset.catFilter;
    activeMainCat = selectedCat === 'all' ? null : selectedCat;
    activeSubCat = null;
    visibleCount = 16;
    renderProducts();
  });

  // Material filter chips
  document.getElementById('material-filters').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#material-filters .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.dataset.filter;
    visibleCount = 8;
    renderProducts();
  });

  // Brand filter
  document.getElementById('brand-filter')?.addEventListener('change', (e) => {
    brandFilter = e.target.value;
    visibleCount = 16;
    renderProducts();
  });

  // Price filter
  document.getElementById('price-filter').addEventListener('change', (e) => {
    priceFilter = e.target.value;
    visibleCount = 8;
    renderProducts();
  });

  // Sort filter
  document.getElementById('sort-filter').addEventListener('change', (e) => {
    sortFilter = e.target.value;
    renderProducts();
  });

  // Load more
  document.getElementById('load-more-btn').addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    renderProducts();
  });

  // Featured Sidebar Cards ("ÖNE ÇIKANLAR": Tüm Ürünler, Set Kampanyaları, Çok Satanlar)
  document.querySelectorAll('.feat-cat-card[data-featured-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.dataset.featuredAction;

      // Reset all active filters back to default
      activeMainCat = null;
      activeSubCat = null;
      activeFilter = 'all';
      brandFilter = 'all';
      priceFilter = 'all';
      sortFilter = 'default';
      searchQuery = '';
      visibleCount = 16;

      document.body.classList.remove(
        'category-page-mode',
        'favorites-page-mode',
        'product-detail-mode',
        'bundle-builder-mode',
        'account-page-mode',
        'checkout-page-mode'
      );
      const banner = document.getElementById('category-page-banner');
      if (banner) banner.style.display = 'none';

      document.querySelectorAll('#dynamic-category-filters .cat-chip').forEach(c => c.classList.remove('active'));
      document.querySelector('#dynamic-category-filters .cat-chip[data-cat-filter="all"]')?.classList.add('active');

      document.querySelectorAll('#material-filters .chip').forEach(c => c.classList.remove('active'));
      document.querySelector('#material-filters .chip[data-filter="all"]')?.classList.add('active');

      const brandSel = document.getElementById('brand-filter');
      if (brandSel) brandSel.value = 'all';
      const priceSel = document.getElementById('price-filter');
      if (priceSel) priceSel.value = 'all';
      const sortSel = document.getElementById('sort-filter');
      if (sortSel) sortSel.value = 'default';

      if (action === 'sets') {
        activeMainCat = 'Set Ürünler';
        document.querySelectorAll('#dynamic-category-filters .cat-chip').forEach(c => {
          c.classList.toggle('active', c.dataset.catFilter === 'Set Ürünler');
        });
      } else if (action === 'bestsellers') {
        sortFilter = 'rating';
        if (sortSel) sortSel.value = 'rating';
      }

      document.querySelectorAll('.feat-cat-card[data-featured-action]').forEach(el => {
        el.classList.toggle('active', el === btn);
      });

      document.getElementById('categories-dropdown')?.classList.remove('open');
      document.getElementById('mobile-menu-btn')?.classList.remove('open');
      document.getElementById('mobile-nav')?.classList.remove('open');

      renderProducts();

      const productsGridSection = document.getElementById('products');
      if (productsGridSection) {
        productsGridSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Main Category & Sub-Category navigation links
  document.querySelectorAll('[data-main-cat]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const mainCat = link.dataset.mainCat;
      const subCat = link.dataset.subCat || null;
      openCategoryPage(mainCat, subCat);
    });
  });

  // Home links & Logo click restore full home page
  document.querySelectorAll('[data-home-link="true"], #logo-link, .footer-logo').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openHomePage();
    });
  });

  // Category filter links in dropdown (legacy material filter fallback)
  document.querySelectorAll('[data-filter]').forEach(link => {
    if (link.classList.contains('chip')) return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.dataset.filter;
      activeFilter = filter;
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      const chip = document.querySelector(`.chip[data-filter="${filter}"]`);
      if (chip) chip.classList.add('active');
      else {
        document.querySelector('.chip[data-filter="all"]').classList.remove('active');
      }
      visibleCount = 16;
      document.getElementById('categories-dropdown').classList.remove('open');
      document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(renderProducts, 400);
    });
  });

  // Cart
  document.getElementById('cart-btn').addEventListener('click', openCart);
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
  document.getElementById('close-cart').addEventListener('click', closeCart);
  document.getElementById('checkout-btn').addEventListener('click', () => {
    openCheckoutPage();
  });

  // Checkout Credit Card Input Formatting & Validation Reset
  const ccNumberInput = document.getElementById('cc-number');
  const ccExpiryInput = document.getElementById('cc-expiry');
  const ccCvvInput = document.getElementById('cc-cvv');

  ccNumberInput?.addEventListener('input', (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
    const groups = digits.match(/.{1,4}/g) || [];
    e.target.value = groups.join(' ');
    e.target.classList.remove('input-invalid');
  });

  ccExpiryInput?.addEventListener('input', (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) {
      e.target.value = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    } else {
      e.target.value = digits;
    }
    e.target.classList.remove('input-invalid');
  });

  ccCvvInput?.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
    e.target.classList.remove('input-invalid');
  });

  document.querySelectorAll('#checkout-page input, #checkout-page select, #checkout-page textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('input-invalid');
      const errBox = document.getElementById('checkout-form-error');
      if (errBox) errBox.style.display = 'none';
    });
  });

  // Categories mega dropdown (Click-to-Pin behavior — stays open when mouse leaves)
  const catBtn = document.getElementById('categories-btn');
  const catDrop = document.getElementById('categories-dropdown');
  const closeCatDropBtn = document.getElementById('close-categories-dropdown');

  if (catBtn && catDrop) {
    catBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      catDrop.classList.toggle('open');
    });
  }
  if (closeCatDropBtn && catDrop) {
    closeCatDropBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      catDrop.classList.remove('open');
    });
  }

  // Hover-bridge + 200ms close delay on all top navigation category dropdowns
  document.querySelectorAll('.cat-nav-item').forEach(navItem => {
    const hoverMenu = navItem.querySelector('.cat-hover-menu');
    if (!hoverMenu) return;
    let closeTimer = null;

    const openMenu = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      document.querySelectorAll('.cat-nav-item.hover-open').forEach(other => {
        if (other !== navItem) other.classList.remove('hover-open');
      });
      navItem.classList.add('hover-open');
    };

    const scheduleClose = () => {
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        navItem.classList.remove('hover-open');
        closeTimer = null;
      }, 200);
    };

    navItem.addEventListener('mouseenter', openMenu);
    navItem.addEventListener('mouseleave', scheduleClose);
    hoverMenu.addEventListener('mouseenter', openMenu);
    hoverMenu.addEventListener('mouseleave', scheduleClose);
  });

  // Click-to-Pin on individual Category Nav Items (locks subcategory dropdown open on screen)
  document.querySelectorAll('.cat-pin-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentItem = btn.closest('.cat-nav-item');
      if (!parentItem) return;
      const wasPinned = parentItem.classList.contains('pinned');
      document.querySelectorAll('.cat-nav-item.pinned').forEach(item => item.classList.remove('pinned'));
      if (!wasPinned) {
        parentItem.classList.add('pinned');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (catDrop && !e.target.closest('#categories-dropdown') && !e.target.closest('#categories-btn')) {
      catDrop.classList.remove('open');
    }
    if (!e.target.closest('.cat-nav-item')) {
      document.querySelectorAll('.cat-nav-item.pinned').forEach(item => item.classList.remove('pinned'));
    }
  });

  // Mobile menu + expanded accordion toggles
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-acc-toggle').forEach(toggleBtn => {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const accItem = toggleBtn.closest('.mobile-acc-item');
      if (!accItem) return;
      const isExpanded = accItem.classList.toggle('expanded');
      toggleBtn.setAttribute('aria-expanded', String(isExpanded));
    });
  });

  // Announcement bar close
  document.getElementById('close-announcement').addEventListener('click', () => {
    document.getElementById('announcement-bar').classList.add('hidden');
  });

  // Wishlist btn in header opens the dedicated Favorites Page
  document.getElementById('wishlist-btn').addEventListener('click', () => {
    openFavoritesPage();
  });

  // Favorites Page "Add All to Cart" and "Clear List" buttons
  document.getElementById('fav-add-all-btn')?.addEventListener('click', () => {
    const favProducts = PRODUCTS.filter(p => wishlist.includes(p.id) && !isProductOutOfStock(p));
    if (favProducts.length === 0) return;
    favProducts.forEach(p => {
      const avail = getProductStock(p);
      const existing = cart.find(item => item.id === p.id);
      if (existing) {
        if (existing.qty < avail) existing.qty++;
      } else {
        cart.push({ ...p, qty: 1 });
      }
    });
    updateCartUI();
    animateCartBadge();
    showToast(`<strong>${favProducts.length} favori ürün</strong> sepetinize eklendi!`, 'cart');
  });

  document.getElementById('fav-clear-btn')?.addEventListener('click', () => {
    wishlist = [];
    updateWishlistBadge();
    renderProducts();
    renderFavoritesPage();
    showToast('Favori listeniz temizlendi.', 'wish');
  });

  // Account btn, Header Profile Dropdown & Supabase Auth Forms (Login / Register / Logout)
  if (supabaseClient && supabaseClient.auth) {
    supabaseClient.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        currentUser = mapSupabaseUserToCurrentUser(data.session.user);
      } else {
        currentUser = null;
      }
      updateAccountView();
    }).catch(() => {});

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      currentUser = session?.user ? mapSupabaseUserToCurrentUser(session.user) : null;
      updateAccountView();
    });
  }

  document.getElementById('account-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (currentUser) {
      const drop = document.getElementById('header-account-dropdown');
      if (drop) {
        drop.style.display = drop.style.display === 'none' ? 'block' : 'none';
      } else {
        openAccountPage();
      }
    } else {
      openAccountPage();
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#header-account-wrap')) {
      closeHeaderAccountDropdown();
    }
  });

  document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    showAuthFeedback('login', '', '');

    const email = (document.getElementById('login-email')?.value || '').trim();
    const password = document.getElementById('login-password')?.value || '';
    const submitBtn = document.getElementById('login-submit-btn');

    if (!email || !email.includes('@')) {
      showAuthFeedback('login', 'error', 'Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    if (!password) {
      showAuthFeedback('login', 'error', 'Lütfen şifrenizi girin.');
      return;
    }
    if (!supabaseClient || !supabaseClient.auth) {
      showAuthFeedback('login', 'error', 'Kimlik doğrulama servisi şu anda kullanılamıyor.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Giriş Yapılıyor...';
    }

    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) {
        showAuthFeedback('login', 'error', translateSupabaseAuthError(error));
        return;
      }
      if (data?.user) {
        currentUser = mapSupabaseUserToCurrentUser(data.user);
        updateAccountView();
        showToast(`Hoş geldiniz, <strong>${currentUser.name}</strong>! Başarıyla giriş yaptınız.`, 'success');
      }
    } catch (err) {
      showAuthFeedback('login', 'error', 'Giriş sırasında bir ağ hatası oluştu.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Giriş Yap';
      }
    }
  });

  document.getElementById('register-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    showAuthFeedback('register', '', '');

    const fullName = (document.getElementById('reg-name')?.value || '').trim();
    const email = (document.getElementById('reg-email')?.value || '').trim();
    const phone = (document.getElementById('reg-phone')?.value || '').trim();
    const password = document.getElementById('reg-password')?.value || '';
    const submitBtn = document.getElementById('register-submit-btn');

    if (fullName.length < 2) {
      showAuthFeedback('register', 'error', 'Lütfen adınızı ve soyadınızı girin.');
      return;
    }
    if (!email || !email.includes('@')) {
      showAuthFeedback('register', 'error', 'Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    if (password.length < 6) {
      showAuthFeedback('register', 'error', 'Şifreniz en az 6 karakter olmalıdır.');
      return;
    }
    if (!supabaseClient || !supabaseClient.auth) {
      showAuthFeedback('register', 'error', 'Kimlik doğrulama servisi şu anda kullanılamıyor.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Kaydediliyor...';
    }

    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone,
          },
        },
      });

      if (error) {
        showAuthFeedback('register', 'error', translateSupabaseAuthError(error));
        return;
      }

      if (data?.session && data?.user) {
        currentUser = mapSupabaseUserToCurrentUser(data.user);
        updateAccountView();
        showToast(`Kaydınız tamamlandı, hoş geldiniz <strong>${currentUser.name}</strong>!`, 'success');
      } else if (data?.user) {
        showAuthFeedback(
          'register',
          'success',
          'Kaydınız oluşturuldu! E-posta adresinize gönderilen doğrulama bağlantısına tıkladıktan sonra giriş yapabilirsiniz.'
        );
        showToast('Kaydınız oluşturuldu! Lütfen e-posta adresinizi doğrulayın.', 'success');
      }
    } catch (err) {
      showAuthFeedback('register', 'error', 'Kayıt sırasında bir ağ hatası oluştu.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Kayıt Ol';
      }
    }
  });

  document.getElementById('logout-btn')?.addEventListener('click', () => {
    handleUserLogout();
  });

  // Hero slider
  document.getElementById('prev-slide').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
    resetSlider();
  });
  document.getElementById('next-slide').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
    resetSlider();
  });
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.slide));
      resetSlider();
    });
  });
  startSlider();

  // Countdown
  startCountdown();

  // Search
  initSearch();

  // Scroll effects
  initScrollEffects();

  // Newsletter form
  document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('newsletter-form').style.display = 'none';
    document.getElementById('newsletter-success').style.display = 'block';
    showToast('E-bülten aboneliğiniz tamamlandı!', 'success');
  });

  // Category cards click on homepage (4-square category cards)
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      if (!cat) return;
      if (cat === 'Döküm') openCategoryPage('Tencereler', null, true);
      else if (cat === 'Tava') openCategoryPage('Tavalar', null, true);
      else if (cat === 'Düdüklü') openCategoryPage('Tencereler', 'Düdüklü Tencereler', true);
      else if (cat === 'Çeyiz') openCategoryPage('Set Ürünler', null, true);
    });
  });

  // Search btn
  document.getElementById('search-btn').addEventListener('click', () => {
    const val = document.getElementById('search-input').value.trim().toLowerCase();
    if (!val) return;
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(val) ||
      p.material.toLowerCase().includes(val) ||
      p.brand.toLowerCase().includes(val)
    );
    if (matches.length > 0) {
      showToast(`"${val}" için ${matches.length} ürün bulundu.`, 'success');
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    } else {
      showToast(`"${val}" için sonuç bulunamadı.`, 'success');
    }
    document.getElementById('search-suggestions').classList.remove('show');
  });

  document.getElementById('search-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('search-btn').click();
  });

  // Init cart UI
  updateCartUI();

  // Dynamic routing listener (/urun/:id, #kendi-ceyizini-olustur, or #odeme)
  window.addEventListener('popstate', () => {
    const hash = window.location.hash || '';
    if (hash.startsWith('#urun/') || hash.startsWith('#/urun/')) {
      handleRouteLocation();
    } else if (hash === '#kendi-ceyizini-olustur') {
      openBundleBuilderPage(1, false);
    } else if (hash === '#odeme' && cart.length > 0) {
      openCheckoutPage();
    } else {
      openHomePage();
    }
  });
  handleRouteLocation();
});
