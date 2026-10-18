/* ===== HEZHA settings ===== */
const SHOP_WHATSAPP = "9647510130527";
const DEV_WHATSAPP = "9647508863907";
/* نرخێ گەهاندنێ ب پێی شوێنی (بۆ گوهۆڕینا نرخان تەنێ ڤان عەدەدان بگوهۆڕە) */
const ZONES = {
  duhok:     { fee: 3000, ku: "دهۆک",         en: "Duhok" },
  zakho:     { fee: 3000, ku: "زاخۆ",         en: "Zakho" },
  akre:      { fee: 4000, ku: "ئاکرێ",        en: "Akre" },
  erbil:     { fee: 5000, ku: "هەولێر",       en: "Erbil" },
  sulaimani: { fee: 5000, ku: "سلێمانی",      en: "Sulaymaniyah" },
  other:     { fee: 5000, ku: "پارێزگێن دی",  en: "Other provinces" }
};

/* products come from products.js */
const products = PRODUCTS;

const T = {
  ku: {
    cur: "دینار", delivChip: "گەهاندن ژ 3,000 دینارێ دەست پێدکەت", whereLive: "تو ل کوێ دژیت؟", pickCity: "شوێنێ خۆ هەلبژێرە...", delivPick: "شوێنێ خۆ هەلبژێرە بۆ دیارکرنا نرخێ گەهاندنێ", whereShort: "شوێن", whichAge: "بۆ چ تەمەنی؟", pickAge: "تەمەنی هەلبژێرە...", agePick: "تەمەنی هەلبژێرە بۆ دیارکرنا نرخی", ageLabel: "تەمەن", fromPrice: "ژ", priceAsk: "نرخ ب پرسیارێ", askNote: "ل ڤی تەمەنی نرخ دهێتە گوهۆڕین، ب WhatsApp بپرسە", askBtn: "نرخی ب WhatsApp بپرسە", askMsg: "دڤێت نرخی بزانم", devBy: "وێبسایت دیزاین و دروستکرن ژ لایێ", adTitle: "وێبسایتەکێ وەکو ئەڤی دڤێت؟", adText: "من ئەڤ وێبسایتە دروست کر. ئەگەر تە ژی دڤێت، پەیوەندیێ ب من بکە.", adBtn: "نامەکێ فرێکە ",
    dir: "rtl", btn: "English", order: "داخازبکە ", heroTag: "ب دلۆڤانی هاتییە چنین", tagline: "تشتێن بچویک. هەستێن مەزن.",
    heroText: "کرۆشێیا دەستچن ل دهۆکێ و هەرێما کوردستانێ، ڕاستەوخۆ دگەهیتە دەرگەهێ مالا تە.", shop: "بەرهەمان ببینە",
    collLabel: "کۆمەڵە", collTitle: "بەرهەمێن مە", howLabel: "چاوا داخواز بکەی", howTitle: "سێ هەنگاڤێن ساناهی",
    s1t: "هەلبژێرە", s1d: "بەرهەمەکی ڤەکە و هەمی وردەکاریان ببینە.", s2t: "داخواز بکە", s2d: "ب ئک کلیک، داخوازیا تە ل WhatsApp بۆ مە دهێتە فرێکرن.",
    s3t: "دگەهیتە دەست", s3d: "دهۆک و زاخۆ 3,000، ئاکرێ 4,000، و پارێزگێن دی 5,000 دینار، ڕاستەوخۆ بۆ دەرگەهێ تە.",
    aboutLabel: "دەربارەی مە", aboutTitle: "ب دەستێن دلۆڤان، تا دەرگەهێ تە",
    aboutText: "HEZHA فرۆشگەهەکا ئۆنلاینە بۆ کارێن دەستچن یێن کرۆشێ: مەدالی، ملپێچ، کولاف و جلوبەرگ. هەر پارچەیەک ب دەست و ب دلۆڤانی هاتییە چنین.",
    f1t: "کوالێتییا بلند", f1d: "ب ووردبینی هاتینە چنین.", f2t: "خزمەتا تایبەت", f2d: "ل WhatsApp هاریکاریا تە دکەین.", f3t: "گەهاندن", f3d: "ژ 3,000 دینارێ دەست پێدکەت.",
    followLabel: "دووڤچوون", followTitle: "ل سۆشیالمیدیایێ دگەل مە بە", followText: "بەرهەمێن نوی و وێنەیێن چنینێ ل ئینستاگرام و تیکتۆکێ ببینە.", followBtn: "دیفچون",
    contactLabel: "پەیوەندی", contactTitle: "دیاریا تایبەت ببینە", contactText: "نامەکێ بۆ مە فرێکە و ئەم دێ هاریکاریا تە کەین.", chat: "گفتوگۆ ل WhatsApp",
    orderThis: "داخواز ب WhatsApp", addCart: "بۆ سەبەتێ زێدە بکە", added: "زێدە بوو ✓",
    cartTitle: "سەبەتا من", cartEmpty: "سەبەتا تە ڤالایە. چەند بەرهەمەکان زێدە بکە.", subtotal: "کوژمێ بەرهەمان", delivLabel: "گەهاندن", total: "کوژمێ گشتی",
    sendOrder: "داخوازیێ ب WhatsApp فرێکە", clear: "سەبەتێ ڤالا بکە", orderMsg: "داخوازیا HEZHA", all: "هەمی", setsLabel: "سێت", setsTitle: "سێتێن تایبەت", setsText: "چەند پارچە ل یەک سێتێ، ئامادە بۆ دیاریێ.", includes: "ناڤەرۆک", newTag: "نوی", soldTag: "تەمام بوو", prev: "یێ بەری", next: "یێ پشتی",
    rights: "© 2026 HEZHA. هەمی مافا دپاراستی نە.", marq: "HEZHA ✦ کرۆشێیا دەستچن ✦ تشتێن بچویک. هەستێن مەزن ✦ ",
  },
  en: {
    cur: "IQD", delivChip: "Delivery from 3,000 IQD", whereLive: "Where do you live?", pickCity: "Choose your location...", delivPick: "Choose your location to see the delivery price", whereShort: "Location", whichAge: "For which age?", pickAge: "Choose age...", agePick: "Choose an age to see the price", ageLabel: "Age", fromPrice: "From", priceAsk: "Ask for price", askNote: "Price changes at this age, please ask on WhatsApp", askBtn: "Ask price on WhatsApp", askMsg: "I'd like to know the price", devBy: "Website designed & developed by", adTitle: "Want a website like this?", adText: "I built this site. Let's make one for you too.", adBtn: "Let's talk",
    dir: "ltr", btn: "کوردی", order: "Order", heroTag: "Crocheted with love", tagline: "Little things. Big feelings.",
    heroText: "Handmade crochet from Duhok, delivered across the Kurdistan Region.", shop: "Shop now",
    collLabel: "Collection", collTitle: "Our crochet", howLabel: "How to order", howTitle: "Three simple steps",
    s1t: "Pick", s1d: "Open an item and see every detail.", s2t: "Order", s2d: "One tap sends it to us on WhatsApp.",
    s3t: "Delivered", s3d: "Duhok & Zakho 3,000 IQD, Akre 4,000, other provinces 5,000, straight to your door.",
    aboutLabel: "About us", aboutTitle: "Handmade, at your doorstep",
    aboutText: "HEZHA is an online store for handmade crochet: keychains, scarves, hats and clothing. Every piece is made by hand with love.",
    f1t: "Premium quality", f1d: "Made with care.", f2t: "Personal service", f2d: "Help on WhatsApp.", f3t: "Delivery", f3d: "Starting from 3,000 IQD.",
    followLabel: "Follow us", followTitle: "Join us on social media", followText: "See new pieces and behind-the-scenes crochet on Instagram and TikTok.", followBtn: "Follow",
    contactLabel: "Contact", contactTitle: "Find your perfect piece", contactText: "Message us and we'll help you choose.", chat: "Chat on WhatsApp",
    orderThis: "Order on WhatsApp", addCart: "Add to cart", added: "Added ✓",
    cartTitle: "My cart", cartEmpty: "Your cart is empty. Add a few pieces you like.", subtotal: "Subtotal", delivLabel: "Delivery", total: "Total",
    sendOrder: "Send order on WhatsApp", clear: "Clear cart", orderMsg: "HEZHA Order", all: "All", setsLabel: "Sets", setsTitle: "Special sets", setsText: "Several pieces in one set, ready to gift.", includes: "Includes", newTag: "New", soldTag: "Sold out", prev: "Previous", next: "Next",
    rights: "© 2026 HEZHA. All rights reserved.", marq: "HEZHA ✦ Handmade crochet ✦ Little things. Big feelings. ✦ ",
  }
};

/* ===== helpers ===== */
const $ = id => document.getElementById(id);
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const src = s => (s.includes('%') ? s : encodeURI(s)).replace(/'/g, '%27');

let lang = store.get('hezha_lang');
if (!T[lang]) lang = 'ku';
let browse = [];       // list of product indexes the popup can step through
let imgIdx = 0;         // which photo of the product is shown
let openIdx = null;     // index of the product shown in the popup
let filter = 'all';     // selected category
let lastFocus = null;

let cart = {};          // { productId: quantity }
try { cart = JSON.parse(store.get('hezha_cart') || '{}') || {}; } catch (e) { cart = {}; }

const byId = Object.fromEntries(products.map(p => [p.id, p]));
let zone = store.get('hezha_zone');   // selected delivery location
if (!ZONES[zone]) zone = '';
const fee = () => (zone ? ZONES[zone].fee : 0);
let age = '';           // selected age tier id in the popup (for jackets)
const tierOf = (p, id) => (p.ages ? AGE_TIERS.find(x => x.id === id) || null : null);
const priceOf = (p, tier) => (tier && tier.price != null ? tier.price : p.price);
const minAgePrice = () => Math.min(...AGE_TIERS.filter(x => x.price != null).map(x => x.price));
// cart keys: "productId" or "productId|ageId"
const parseKey = k => { const i = k.lastIndexOf('|'); return i < 0 ? { pid: k, tid: '' } : { pid: k.slice(0, i), tid: k.slice(i + 1) }; };
const lineOf = k => { const { pid, tid } = parseKey(k); const p = byId[pid]; if (!p) return null; const tier = tierOf(p, tid); return { p, tier, price: priceOf(p, tier) }; };
const fmt = n => n.toLocaleString('en-US') + ' ' + T[lang].cur;
const wa = (text, num = SHOP_WHATSAPP) => `https://wa.me/${num}` + (text ? `?text=${encodeURIComponent(text)}` : '');
const pname = p => p.name[lang] || p.name.ku;
const cat = p => CATEGORIES[p.cat] || {};
const catName = p => cat(p)[lang] || cat(p).ku || '';
const descOf = p => (p.desc && (p.desc[lang] || p.desc.ku)) || (lang === 'ku' ? cat(p).descKu : cat(p).descEn) || '';
const setIdx = () => products.map((p, i) => i).filter(i => products[i].cat === 'set');
const visible = () => products.map((p, i) => i).filter(i => products[i].cat !== 'set' && (filter === 'all' || products[i].cat === filter));

/* ===== scroll reveal (defined before first render) ===== */
const revealIO = new IntersectionObserver((es, o) => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); }
}), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

function setupReveal() {
  document.querySelectorAll('.block .label,.block h2,.lead,.step,.feat,.card,.social-card,.contact .btn-pink,.phone,.ad,.marquee').forEach(el => {
    if (el.classList.contains('reveal')) return;
    const i = [...el.parentElement.children].indexOf(el);
    el.style.setProperty('--d', (el.classList.contains('card') ? i % 4 : Math.min(i, 3)) * 0.09 + 's');
    el.classList.add('reveal');
    revealIO.observe(el);
  });
}

/* ===== gallery: filters + cards ===== */
function renderFilters() {
  const t = T[lang];
  const used = [...new Set(products.map(p => p.cat))].filter(c => CATEGORIES[c] && c !== 'set');
  if (used.length < 2) { $('filters').innerHTML = ''; return; }
  $('filters').innerHTML =
    `<button class="fchip${filter === 'all' ? ' on' : ''}" data-f="all">${t.all}</button>` +
    used.map(c => `<button class="fchip${filter === c ? ' on' : ''}" data-f="${c}">${CATEGORIES[c][lang] || CATEGORIES[c].ku}</button>`).join('');
}

function cardHTML(i) {
  const t = T[lang], p = products[i];
  const items = p.items ? (p.items[lang] || p.items.ku) : '';
  return `
    <button class="card${p.soldout ? ' sold' : ''}" data-i="${i}" aria-label="${esc(pname(p))}">
      <div class="pic">
        <img src="${src(p.img)}" alt="" loading="lazy" decoding="async">
        <span class="card-cat">${catName(p)}</span>
        ${p.new ? `<span class="badge-new">${t.newTag}</span>` : ''}
        ${p.soldout ? `<span class="badge-sold">${t.soldTag}</span>` : ''}
      </div>
      <div class="glass">
        <h3>${esc(pname(p))}</h3>
        ${items ? `<small class="items">${esc(items)}</small>` : ''}
        <div class="row"><b>${p.ages ? t.fromPrice + ' ' + fmt(minAgePrice()) : fmt(p.price)}</b><span class="go">+</span></div>
      </div>
    </button>`;
}

function renderGrid() {
  $('grid').innerHTML = visible().map(cardHTML).join('');
  const sets = setIdx();
  $('sets').hidden = !sets.length;
  $('setGrid').innerHTML = sets.map(cardHTML).join('');
  document.querySelectorAll('#grid img,#setGrid img').forEach(im => { if (im.complete && im.naturalWidth) im.classList.add('ld'); });
  setupReveal();
}

// image loaded / failed (load & error don't bubble, so we listen in the capture phase)
document.addEventListener('load', e => { if (e.target.tagName === 'IMG') e.target.classList.add('ld'); }, true);
document.addEventListener('error', e => {
  const im = e.target;
  if (im.tagName !== 'IMG') return;
  const c = im.closest('.card');
  if (c) c.classList.add('noimg');
}, true);

$('filters').addEventListener('click', e => {
  const b = e.target.closest('.fchip');
  if (!b) return;
  filter = b.dataset.f;
  renderFilters();
  renderGrid();
});
$('grid').addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (c) openProduct(+c.dataset.i, visible());
});
$('setGrid').addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (c) openProduct(+c.dataset.i, setIdx());
});

/* ===== language ===== */
function applyLang() {
  const t = T[lang];
  document.documentElement.lang = lang === 'ku' ? 'ku' : 'en';
  document.documentElement.dir = t.dir;
  document.querySelectorAll('[data-i18n]').forEach(el => { if (t[el.dataset.i18n] !== undefined) el.textContent = t[el.dataset.i18n]; });
  $('langBtn').textContent = t.btn;
  $('cartBtn').setAttribute('aria-label', t.cartTitle);
  $('mPrev').setAttribute('aria-label', t.prev);
  $('mNext').setAttribute('aria-label', t.next);
  $('marquee').innerHTML = `<span>${t.marq.repeat(4)}</span><span>${t.marq.repeat(4)}</span>`;
  renderFilters();
  renderGrid();
  renderZones();
  renderAges();
  if (openIdx !== null) fillProduct(openIdx);
  renderCart();
  setupReveal();
}

function cycleLang() {
  lang = lang === 'ku' ? 'en' : 'ku';
  store.set('hezha_lang', lang);
  applyLang();
}

/* ===== modals (focus handling) ===== */
function openModal(id) {
  const m = $(id);
  lastFocus = document.activeElement;
  m.hidden = false;
  document.body.style.overflow = 'hidden';
  const c = m.querySelector('.close');
  if (c) c.focus();
}
function closeModal(id) {
  $(id).hidden = true;
  if ($('modal').hidden && $('cartModal').hidden) document.body.style.overflow = '';
  if (lastFocus && lastFocus.focus) lastFocus.focus();
  lastFocus = null;
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProduct(); closeCart(); return; }
  if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !$('modal').hidden && e.target.tagName !== 'SELECT') {
    const d = e.key === 'ArrowRight' ? 1 : -1;
    const dd = document.documentElement.dir === 'rtl' ? -d : d;
    if (photoCount() > 1) showImg(imgIdx + dd); else stepProduct(dd);
    return;
  }
  if (e.key !== 'Tab') return;
  const m = [$('modal'), $('cartModal')].find(x => !x.hidden);
  if (!m) return;
  const f = [...m.querySelectorAll('button,select,a[href],[tabindex]:not([tabindex="-1"])')].filter(x => x.offsetParent !== null && !x.disabled);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ===== product popup ===== */
function fillProduct(i) {
  const p = products[i], t = T[lang];
  const list = p.imgs || [p.img];
  $('mDots').innerHTML = list.length > 1 ? list.map(() => '<i></i>').join('') : '';
  $('mThumbs').hidden = list.length < 2;
  $('mThumbs').innerHTML = list.length > 1 ? list.map((s, k) => `<button data-k="${k}" aria-label="${k + 1}"><img src="${src(s)}" alt="" loading="lazy"></button>`).join('') : '';
  list.slice(1).forEach(s => { new Image().src = src(s); });   // preload other photos
  showImg(imgIdx);
  $('mCat').textContent = catName(p);
  $('mName').textContent = pname(p);
  $('ageBox').hidden = !p.ages;
  $('mAge').value = age;
  $('mDesc').textContent = descOf(p);
  $('mAdd').textContent = p.soldout ? t.soldTag : t.addCart;
  $('mAdd').disabled = !!p.soldout;
  $('mOrder').hidden = !!p.soldout;
  updateProductOrder();
  const items = p.items ? (p.items[lang] || p.items.ku) : '';
  $('mItems').hidden = !items;
  $('mItems').textContent = items ? `${t.includes}: ${items}` : '';
  const many = browse.length > 1;
  $('mPrev').hidden = !many;
  $('mNext').hidden = !many;
}

function updateProductOrder() {
  if (openIdx === null) return;
  const p = products[openIdx], t = T[lang];
  const tier = tierOf(p, age);
  const ask = !!tier && tier.price == null;      // age with no fixed price: ask on WhatsApp
  const unit = priceOf(p, tier);
  $('mPrice').textContent = ask ? t.priceAsk : (p.ages && !tier ? `${t.fromPrice} ${fmt(minAgePrice())}` : fmt(unit));
  $('mAdd').hidden = ask;
  $('mOrder').textContent = ask ? t.askBtn : t.orderThis;
  $('mDeliv').textContent = ask ? t.askNote
    : (p.ages && !tier) ? t.agePick
    : zone ? `${t.delivLabel}: ${fmt(fee())} · ${t.total}: ${fmt(unit + fee())}` : t.delivPick;
  let msg = `${t.orderMsg}:\n🌸 ${pname(p)}`;
  if (tier) msg += `\n🎂 ${t.ageLabel}: ${tier[lang]}`;
  msg += ask ? `\n❓ ${t.askMsg}` : `\n💰 ${fmt(unit)}`;
  if (zone) msg += `\n📍 ${t.whereShort}: ${ZONES[zone][lang]}`;
  if (zone && !ask) msg += `\n🚚 ${t.delivLabel}: ${fmt(fee())}\n🧾 ${t.total}: ${fmt(unit + fee())}`;
  $('mOrder').href = wa(msg);
}

function showImg(n) {
  if (openIdx === null) return;
  const p = products[openIdx], list = p.imgs || [p.img];
  imgIdx = ((n % list.length) + list.length) % list.length;
  const im = $('mImgTag');
  im.classList.remove('ld');
  im.src = src(list[imgIdx]);
  im.alt = pname(p);
  if (im.complete && im.naturalWidth) im.classList.add('ld');
  $('mDots').querySelectorAll('i').forEach((d, k) => d.classList.toggle('on', k === imgIdx));
  $('mThumbs').querySelectorAll('button').forEach((b, k) => b.classList.toggle('on', k === imgIdx));
}
$('mThumbs').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (b) showImg(+b.dataset.k);
});
const photoCount = () => (openIdx === null ? 0 : (products[openIdx].imgs || []).length);

function openProduct(i, list) {
  openIdx = i;
  imgIdx = 0;
  age = '';
  browse = list || visible();
  fillProduct(i);
  openModal('modal');
}

function stepProduct(d) {
  const v = browse;
  if (v.length < 2 || openIdx === null) return;
  let pos = v.indexOf(openIdx);
  if (pos < 0) pos = 0;
  openIdx = v[(pos + d + v.length) % v.length];
  imgIdx = 0;
  age = '';
  fillProduct(openIdx);
}

function closeProduct() {
  if ($('modal').hidden) return;
  openIdx = null;
  closeModal('modal');
}

// swipe to browse products
let touchX = null;
$('mImg').addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
$('mImg').addEventListener('touchend', e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  touchX = null;
  if (Math.abs(dx) < 50) return;
  const rtl = document.documentElement.dir === 'rtl';
  const dd = dx < 0 ? (rtl ? -1 : 1) : (rtl ? 1 : -1);
  if (photoCount() > 1) showImg(imgIdx + dd); else stepProduct(dd);
}, { passive: true });

/* ===== delivery location ===== */
function renderZones() {
  const t = T[lang];
  const html = `<option value="">${t.pickCity}</option>` +
    Object.keys(ZONES).map(k => `<option value="${k}">${ZONES[k][lang]} — ${fmt(ZONES[k].fee)}</option>`).join('');
  ['mZone', 'cartZone'].forEach(id => { $(id).innerHTML = html; $(id).value = zone; });
}

function setZone(v) {
  zone = ZONES[v] ? v : '';
  store.set('hezha_zone', zone);
  renderZones();
  updateProductOrder();
  renderCart();
}

// if no location is chosen yet, don't open WhatsApp: shake the selector instead
function shakeEl(id) {
  const s = $(id);
  s.classList.remove('shake'); void s.offsetWidth; s.classList.add('shake');
  s.focus();
}
function needZone(e, selId) {
  if (zone) return;
  e.preventDefault();
  shakeEl(selId);
}
// popup order button: jackets need an age first; an age with no fixed price just asks, no location needed
function guardOrder(e) {
  if (openIdx === null) return;
  const p = products[openIdx], tier = tierOf(p, age);
  if (p.ages && !tier) { e.preventDefault(); shakeEl('mAge'); return; }
  if (tier && tier.price == null) return;
  needZone(e, 'mZone');
}

function renderAges() {
  const t = T[lang];
  $('mAge').innerHTML = `<option value="">${t.pickAge}</option>` +
    AGE_TIERS.map(x => `<option value="${x.id}">${x[lang]} — ${x.price != null ? fmt(x.price) : t.priceAsk}</option>`).join('');
  $('mAge').value = age;
}

$('mZone').addEventListener('change', e => setZone(e.target.value));
$('cartZone').addEventListener('change', e => setZone(e.target.value));
$('mOrder').addEventListener('click', guardOrder);
$('mAge').addEventListener('change', e => { age = AGE_TIERS.some(x => x.id === e.target.value) ? e.target.value : ''; updateProductOrder(); });
$('cartOrder').addEventListener('click', e => needZone(e, 'cartZone'));

/* ===== cart ===== */
function saveCart() { store.set('hezha_cart', JSON.stringify(cart)); }

function addCurrent() {
  if (openIdx === null) return;
  const p = products[openIdx];
  if (p.soldout) return;
  let key = p.id;
  if (p.ages) {
    const tier = tierOf(p, age);
    if (!tier) { shakeEl('mAge'); return; }
    if (tier.price == null) return;
    key = p.id + '|' + tier.id;
  }
  cart[key] = (cart[key] || 0) + 1;
  saveCart();
  renderCart();
  const b = $('mAdd');
  b.textContent = T[lang].added;
  clearTimeout(b._t);
  b._t = setTimeout(() => { if (!b.disabled) b.textContent = T[lang].addCart; }, 1300);
  const badge = $('cartCount');
  badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump');
}

function changeQty(id, d) {
  const q = (cart[id] || 0) + d;
  if (q <= 0) delete cart[id]; else cart[id] = Math.min(q, 99);
  saveCart();
  renderCart();
}

function clearCart() { cart = {}; saveCart(); renderCart(); }

$('cartItems').addEventListener('click', e => {
  const b = e.target.closest('[data-d]');
  if (b) changeQty(b.dataset.id, +b.dataset.d);
});

function renderCart() {
  const t = T[lang];
  const ids = Object.keys(cart).filter(id => lineOf(id) && cart[id] > 0);
  const count = ids.reduce((s, id) => s + cart[id], 0);
  $('cartCount').textContent = count;
  $('cartCount').hidden = !count;

  if (!ids.length) {
    $('cartItems').innerHTML = `<p class="empty">${t.cartEmpty}</p>`;
    $('cartFoot').hidden = true;
    return;
  }

  $('cartItems').innerHTML = ids.map(id => {
    const L = lineOf(id), p = L.p;
    return `
    <div class="cart-item">
      <div class="thumb" style="background-image:url('${src(p.img)}')"></div>
      <div class="info"><b>${esc(pname(p) + (L.tier ? ' · ' + L.tier[lang] : ''))}</b><span>${fmt(L.price * cart[id])}</span></div>
      <div class="qty">
        <button data-id="${esc(id)}" data-d="-1" aria-label="−">−</button>
        <span>${cart[id]}</span>
        <button data-id="${esc(id)}" data-d="1" aria-label="+">+</button>
      </div>
    </div>`;
  }).join('');

  const sub = ids.reduce((s, id) => s + lineOf(id).price * cart[id], 0);
  const tot = sub + fee();
  $('sumSub').textContent = fmt(sub);
  $('sumDel').textContent = zone ? fmt(fee()) : '—';
  $('sumTot').textContent = fmt(tot);
  $('cartFoot').hidden = false;

  const lines = ids.map(id => { const L = lineOf(id); return `🌸 ${pname(L.p)}${L.tier ? ' (' + L.tier[lang] + ')' : ''} × ${cart[id]} — ${fmt(L.price * cart[id])}`; }).join('\n');
  $('cartOrder').href = wa(`${t.orderMsg}:\n${lines}\n\n🧾 ${t.subtotal}: ${fmt(sub)}\n📍 ${t.whereShort}: ${zone ? ZONES[zone][lang] : '—'}\n🚚 ${t.delivLabel}: ${fmt(fee())}\n💰 ${t.total}: ${fmt(tot)}`);
}

function openCart() { openModal('cartModal'); }
function closeCart() { if (!$('cartModal').hidden) closeModal('cartModal'); }

/* ===== theme (light by default, visitor can switch to dark) ===== */
function setTheme(dark) {
  document.body.classList.toggle('dark-mode', dark);
  $('themeBtn').textContent = dark ? '☀️' : '🌙';
}
function toggleTheme() {
  const dark = !document.body.classList.contains('dark-mode');
  setTheme(dark);
  store.set('hezha_theme', dark ? 'dark' : 'light');
}
// default is always LIGHT; dark only if the visitor chose it with the 🌙 button
setTheme(store.get('hezha_theme') === 'dark');

/* ===== init ===== */
['orderLink', 'heroWa', 'contactWa'].forEach(id => $(id).href = wa());
$('devWa').href = wa('', DEV_WHATSAPP);
applyLang();

/* ===== motion ===== */
const bar = document.createElement('div');
bar.className = 'progress';
document.body.prepend(bar);
const head = document.querySelector('.site-head');
let ticking = false, docH = 1;
const measure = () => { docH = (document.documentElement.scrollHeight - innerHeight) || 1; };
measure();
addEventListener('resize', measure);
addEventListener('load', measure);
addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    bar.style.transform = `scaleX(${Math.min(scrollY / docH, 1)})`;
    head.classList.toggle('scrolled', scrollY > 30);
    ticking = false;
  });
}, { passive: true });

$('grid').addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  const c = e.target.closest('.card');
  if (!c) return;
  const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
  c.style.setProperty('--ry', (x - 0.5) * 12 + 'deg');
  c.style.setProperty('--rx', (0.5 - y) * 12 + 'deg');
  c.style.setProperty('--mx', x * 100 + '%');
  c.style.setProperty('--my', y * 100 + '%');
});
$('grid').addEventListener('pointerout', e => {
  const c = e.target.closest('.card');
  if (c && !c.contains(e.relatedTarget)) { c.style.removeProperty('--rx'); c.style.removeProperty('--ry'); }
});
