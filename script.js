/**
 * VELORAÉ — High-End Fragrance E-Commerce Engine
 * Single Source Configuration & Modular Execution
 */

// ==================== GLOBAL CONFIGURATION ====================
const CONFIG = {
  // Store's WhatsApp Number (Include Country Code without + or spaces)
  whatsappNumber: "18008356723", 
  currencySymbol: "$",
  standardDeliveryFee: 15,
  freeDeliveryThreshold: 300
};

// ==================== PRODUCT CATALOG ====================
const PRODUCTS = [
  {
    id: "velorae-noir",
    name: "VELORAÉ NOIR",
    tagline: "Extrait de Parfum",
    price: 280,
    size: "100ml / 3.4 fl. oz.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "A dark, hypnotic amber wrapped in smoky Cambodian Oud and Bulgarian rose.",
    fullDesc: "VELORAÉ NOIR represents the pinnacle of nightfall elegance. Hand-blended with rare dark resins, aged patchouli, and rare Cambodian oud, this signature scent creates an intoxicating aura that lingers standard hours after departure.",
    notes: {
      top: "Calabrian Bergamot, Pink Pepper, Incense",
      heart: "Damask Rose, Black Plum, Jasmine Sambac",
      base: "Cambodian Oud, Amber, Leather, Bourbon Vanilla"
    }
  },
  {
    id: "eclat",
    name: "ÉCLAT DE SOLEIL",
    tagline: "Extrait de Parfum",
    price: 240,
    size: "100ml / 3.4 fl. oz.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Radiant solar white florals kissed by Sicilian mandarin and creamy sandalwood.",
    fullDesc: "Inspired by golden hour on the French Riviera, ÉCLAT blends sun-drenched orange blossom with rare neroli and lush tuberose, grounded by silk musks and Mysore sandalwood.",
    notes: {
      top: "Sicilian Mandarin, Neroli, Cardamom",
      heart: "Orange Blossom, Tuberose, Ylang-Ylang",
      base: "Mysore Sandalwood, White Amber, Silk Musk"
    }
  },
  {
    id: "ambre-royale",
    name: "AMBRE ROYALE",
    tagline: "Extrait de Parfum",
    price: 320,
    size: "100ml / 3.4 fl. oz.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Majestic golden amber infused with wild honey, saffron, and sweet spices.",
    fullDesc: "An opulent composition designed for nobility. Warm, enveloping amber resins meet precious saffron threads and wild forest honey for an undeniable statement of quiet luxury.",
    notes: {
      top: "Kashmiri Saffron, Cinnamon Bark, Bergamot",
      heart: "Wild Honey, Rose de Mai, Myrrh",
      base: "Golden Amber, Benzoin, Tonka Bean, Cedarwood"
    }
  },
  {
    id: "lumiere",
    name: "LUMIÈRE VERTE",
    tagline: "Extrait de Parfum",
    price: 210,
    size: "100ml / 3.4 fl. oz.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Crisp vetiver, crushed fig leaf, and zesty citrus softened by ambergris.",
    fullDesc: "A invigorating breath of aristocratic gardens after rain. Crisp citrus accords mingle with green fig leaves and earthy Haitian vetiver, yielding a refined, effortless presence.",
    notes: {
      top: "Crushed Fig Leaf, Pink Grapefruit, Bergamot",
      heart: "French Sage, Florentine Iris, Violet Leaf",
      base: "Haitian Vetiver, Ambergris, Atlas Cedar"
    }
  },
  {
    id: "oudelia",
    name: "OUDÉLIA",
    tagline: "Extrait de Parfum",
    price: 350,
    size: "100ml / 3.4 fl. oz.",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Rare aged royal oud paired with black tea, tobacco leaf, and dark velvet.",
    fullDesc: "A masterpiece of contrast. Wild Assam oud matured for 12 years is softened by smoky black tea leaves and sweet pipe tobacco, creating a scent reserved for true connoisseurs.",
    notes: {
      top: "Black Tea, Cardamom, Nutmeg",
      heart: "Royal Oud, Tobacco Leaf, Patchouli",
      base: "Velvet Musk, Guaiac Wood, Dark Honey"
    }
  },
  {
    id: "verite",
    name: "VÉRITÉ",
    tagline: "Extrait de Parfum",
    price: 260,
    size: "100ml / 3.4 fl. oz.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Powdery Tuscan iris, smoked leather, and fresh Calabrian bergamot.",
    fullDesc: "Uncompromising clarity and truth in composition. Regal iris root yields a buttery, suede-like texture elevated by sparkling citrus top notes and polished birch leather.",
    notes: {
      top: "Calabrian Bergamot, Violet Leaf",
      heart: "Tuscan Iris, Suede Accord, Geranium",
      base: "Russian Leather, Oakmoss, Cashmere Wood"
    }
  },
  {
    id: "nuit-blanche",
    name: "NUIT BLANCHE",
    tagline: "Extrait de Parfum",
    price: 290,
    size: "100ml / 3.4 fl. oz.",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Sensual black cherry, bitter almond, bourbon vanilla, and sandalwood.",
    fullDesc: "An Ode to sleepless Parisian nights. Gourmand black cherry and bitter almond fold seamlessly into velvety bourbon vanilla and smooth sandalwood for pure nocturnal intrigue.",
    notes: {
      top: "Black Cherry, Bitter Almond, Liqueur",
      heart: "Jasmine Sambac, Damask Plum, Rose",
      base: "Bourbon Vanilla, Tonka Bean, Sandalwood"
    }
  },
  {
    id: "imperia",
    name: "IMPÉRIA",
    tagline: "Extrait de Parfum",
    price: 340,
    size: "100ml / 3.4 fl. oz.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Commanding spices, rare resinous woods, and rich labdanum.",
    fullDesc: "Designed to evoke imperial dominance. Fresh ginger and pink pepper spark an unforgettable opening before revealing a dense, dark heart of ancient resinous woods.",
    notes: {
      top: "Pink Pepper, Fresh Ginger, Coriander",
      heart: "Myrrh, Guaiac Wood, Labdanum",
      base: "Agarwood, Smoked Amber, Vanilla Bean"
    }
  }
];

// ==================== STATE MANAGEMENT ====================
let cart = [];

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initSwiper();
  initGSAP();
  initNavigation();
  initAccordions();
  initCartAndCheckout();
  updateFooterPhone();
});

// Render Product Collection Grid
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(product => `
    <article class="product-card">
      <div class="product-image-container">
        <span class="product-tag">${product.tagline}</span>
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-notes-preview">${product.shortDesc}</p>
        <div class="product-meta">
          <span class="product-price">${CONFIG.currencySymbol}${product.price}</span>
          <span class="product-size">${product.size}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline btn-sm" onclick="openProductModal('${product.id}')">View Details</button>
          <button class="btn btn-primary btn-sm" onclick="directOrder('${product.id}')">Order Now</button>
        </div>
      </div>
    </article>
  `).join('');
}

// Swiper Hero Background Slider
function initSwiper() {
  new Swiper('#heroSwiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    speed: 1500,
  });
}

// GSAP Animations
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Text Animation
  gsap.from(".hero-content > *", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.3
  });

  // Section Headers Reveal
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Product Cards Stagger Reveal
  gsap.from(".product-card", {
    scrollTrigger: {
      trigger: "#productGrid",
      start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });
}

// Navbar Scroll Effect & Mobile Menu
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
  }
}

// FAQ Accordion
function initAccordions() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ==================== CART & MODAL SYSTEM ====================
function initCartAndCheckout() {
  const cartBtn = document.getElementById('cartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');

  // Open Cart
  cartBtn.addEventListener('click', () => cartDrawer.classList.add('active'));
  
  // Close Cart
  const closeCart = () => cartDrawer.classList.remove('active');
  cartCloseBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Proceed to Checkout from Cart
  proceedCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Your shopping bag is empty.");
      return;
    }
    closeCart();
    openCheckoutModal();
  });

  // Modal Close Buttons (data-close attributes)
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = e.target.getAttribute('data-close');
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    });
  });

  // Checkout Form Submission to WhatsApp
  const checkoutForm = document.getElementById('checkoutForm');
  checkoutForm.addEventListener('submit', handleCheckoutSubmit);
}

// Open Detailed Product Modal
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById('productModalContent');
  content.innerHTML = `
    <div class="product-modal-grid">
      <div>
        <img src="${product.image}" alt="${product.name}" class="product-modal-img">
      </div>
      <div>
        <span class="section-tag">${product.tagline}</span>
        <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">${product.name}</h2>
        <p style="font-size: 1.3rem; color: var(--accent-gold); font-family: var(--font-serif); margin-bottom: 1rem;">
          ${CONFIG.currencySymbol}${product.price} <span style="font-size: 0.8rem; color: var(--text-muted);">/ ${product.size}</span>
        </p>
        <p class="body-text">${product.fullDesc}</p>
        
        <div class="notes-pyramid">
          <div class="note-row"><strong>Top Notes:</strong> <span>${product.notes.top}</span></div>
          <div class="note-row"><strong>Heart Notes:</strong> <span>${product.notes.heart}</span></div>
          <div class="note-row"><strong>Base Notes:</strong> <span>${product.notes.base}</span></div>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 1.5rem;">
          <button class="btn btn-outline" style="flex: 1;" onclick="addToCart('${product.id}')">Add To Bag</button>
          <button class="btn btn-primary" style="flex: 1;" onclick="directOrder('${product.id}')">Order Now (COD)</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('productModal').classList.add('active');
}

// Direct Order Trigger
function directOrder(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Set cart to just this item for immediate checkout
  cart = [{ product, quantity: 1 }];
  updateCartUI();

  // Close product modal if active and open checkout modal
  document.getElementById('productModal').classList.remove('active');
  openCheckoutModal();
}

// Add Item to Cart
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.product.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateCartUI();
  document.getElementById('productModal').classList.remove('active');
  document.getElementById('cartDrawer').classList.add('active');
}

// Update Cart Badge and Render Drawer Items
function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const deliveryEl = document.getElementById('cartDelivery');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Your shopping bag is empty.</p>`;
    subtotalEl.textContent = `${CONFIG.currencySymbol}0.00`;
    totalEl.textContent = `${CONFIG.currencySymbol}0.00`;
    return;
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.product.name}</h4>
        <div class="cart-item-price">${CONFIG.currencySymbol}${item.product.price} x ${item.quantity}</div>
      </div>
      <button onclick="removeFromCart('${item.product.id}')" style="color: var(--text-muted); font-size: 1.2rem;">&times;</button>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = subtotal >= CONFIG.freeDeliveryThreshold || subtotal === 0 ? 0 : CONFIG.standardDeliveryFee;
  const grandTotal = subtotal + deliveryFee;

  subtotalEl.textContent = `${CONFIG.currencySymbol}${subtotal.toFixed(2)}`;
  deliveryEl.textContent = deliveryFee === 0 ? "FREE" : `${CONFIG.currencySymbol}${deliveryFee.toFixed(2)}`;
  totalEl.textContent = `${CONFIG.currencySymbol}${grandTotal.toFixed(2)}`;
}

// Remove Item From Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  updateCartUI();
}

// Open Checkout Modal
function openCheckoutModal() {
  const itemsPreview = document.getElementById('checkoutItemsPreview');
  const grandTotalEl = document.getElementById('checkoutGrandTotal');

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = subtotal >= CONFIG.freeDeliveryThreshold ? 0 : CONFIG.standardDeliveryFee;
  const grandTotal = subtotal + deliveryFee;

  itemsPreview.innerHTML = cart.map(item => `
    <div class="summary-line">
      <span>${item.quantity}x ${item.product.name}</span>
      <span>${CONFIG.currencySymbol}${(item.product.price * item.quantity).toFixed(2)}</span>
    </div>
  `).join('') + `
    <div class="summary-line" style="margin-top: 5px; font-size: 0.8rem;">
      <span>Delivery Fee (COD)</span>
      <span>${deliveryFee === 0 ? "FREE" : CONFIG.currencySymbol + deliveryFee.toFixed(2)}</span>
    </div>
  `;

  grandTotalEl.textContent = `${CONFIG.currencySymbol}${grandTotal.toFixed(2)}`;
  document.getElementById('checkoutModal').classList.add('active');
}

// ==================== WHATSAPP ORDER GENERATOR ====================
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const cityName = document.getElementById('cityName').value.trim();
  const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
  const mapsLink = document.getElementById('mapsLink').value.trim();
  const orderNotes = document.getElementById('orderNotes').value.trim();

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = subtotal >= CONFIG.freeDeliveryThreshold ? 0 : CONFIG.standardDeliveryFee;
  const grandTotal = subtotal + deliveryFee;

  // Build Item Lines
  let itemsFormatted = "";
  cart.forEach(item => {
    itemsFormatted += `• ${item.quantity}x ${item.product.name} (${item.product.size}) — ${CONFIG.currencySymbol}${item.product.price * item.quantity}\n`;
  });

  // Build Complete Elegant WhatsApp Text
  let message = `👑 *VELORAÉ PARFUMS — NEW ORDER*\n`;
  message += `----------------------------------\n`;
  message += `👤 *Customer Name:* ${fullName}\n`;
  message += `📞 *Phone Number:* ${phoneNumber}\n`;
  message += `🏙️ *City:* ${cityName}\n`;
  message += `📍 *Address:* ${deliveryAddress}\n`;
  if (mapsLink) message += `🗺️ *Google Maps:* ${mapsLink}\n`;
  message += `----------------------------------\n`;
  message += `📦 *ORDER ITEMS:*\n${itemsFormatted}\n`;
  message += `----------------------------------\n`;
  message += `💵 *Subtotal:* ${CONFIG.currencySymbol}${subtotal.toFixed(2)}\n`;
  message += `🚚 *Delivery Charges:* ${deliveryFee === 0 ? "FREE" : CONFIG.currencySymbol + deliveryFee.toFixed(2)}\n`;
  message += `💰 *TOTAL AMOUNT:* ${CONFIG.currencySymbol}${grandTotal.toFixed(2)}\n`;
  message += `💳 *Payment Method:* Cash on Delivery (COD)\n`;
  if (orderNotes) message += `📝 *Notes:* ${orderNotes}\n`;
  message += `----------------------------------\n`;
  message += `_Please confirm this order for immediate dispatch._`;

  // Encode message for URI
  const encodedText = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;

  // Open WhatsApp in new window
  window.open(whatsappURL, '_blank');

  // Close Checkout Modal & Open Confirmation Modal
  document.getElementById('checkoutModal').classList.remove('active');
  document.getElementById('whatsappPromptModal').classList.add('active');

  // Reset Cart
  cart = [];
  updateCartUI();
  document.getElementById('checkoutForm').reset();
}

// Display Phone in Footer dynamically from config
function updateFooterPhone() {
  const phoneDisplay = document.getElementById('footerPhoneDisplay');
  const directWhatsappFooter = document.getElementById('directWhatsappFooter');

  if (phoneDisplay) phoneDisplay.textContent = `+${CONFIG.whatsappNumber}`;
  if (directWhatsappFooter) {
    directWhatsappFooter.href = `https://wa.me/${CONFIG.whatsappNumber}`;
    directWhatsappFooter.target = "_blank";
  }
}
