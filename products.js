/* =====================================================================
   HEZHA | لیستا بەرهەمان  (تەنێ ئەڤ فایلە بگوهۆڕە بۆ زێدەکرنا بەرهەمان)
   =====================================================================

   چاوا بەرهەمەکێ نوی زێدە بکەم؟  (3 هەنگاڤ)

   1) وێنەی بکە ناڤ فۆڵدەرێ  images  (ل تەنیشت index.html).
      باشترە ناڤێ وێنەی ب ئینگلیزی و بێ بۆشایی بیت، وەکو:  rose-scarf.jpg
      قەبارەیا باش: پانی 800 پیکسێل، نێزیکی 150KB (سایتێ لاگ ناکەت).

   2) ل خوارێ، یەک خەتێ بەرهەمان کۆپی بکە و بگوهۆڕە:

        p("وێنە", "ناڤێ کوردی", "ناڤێ ئینگلیزی", نرخ, "جۆر"),

      نموونە:
        p("images/rose-scarf.jpg", "ملپێچا ڕۆز", "Rose Scarf", 28000, "scarf"),

      ئەنجام: کارتەکا نوی دهێتە دەرکەفتن ب وێنەی rose-scarf.jpg،
              ناڤێ "ملپێچا ڕۆز" (ل ئینگلیزی "Rose Scarf")،
              نرخێ "28,000 دینار"، و ل بەشێ "ملپێچ" دهێتە دانان.

   3) فایلی سەیڤ بکە و لاپەڕێ نوی بکە (Refresh). تەمام!

   ---------------------------------------------------------------------
   تێبینی:
   - ڕیزا بەرهەمان هەر وەکو ل خوارێ دهێتە نیشاندان، یێ بەری هەمیان ل سەرە.
   - ناڤێ ئینگلیزی دکارێ ڤالا بیت:  p("images/a.jpg", "ناڤ", "", 10000, "hat")
     ئەگەر ڤالا بیت، ناڤێ کوردی ل هەردوو زمانان دهێتە نیشاندان.
   - "جۆر" دبیت یەک ژ ناڤێن ل خوارێ ل CATEGORIES (medal, scarf, hat, outfit).
     بۆ جۆرەکێ نوی، خەتەکێ ل CATEGORIES زێدە بکە.
   - بۆ نیشانکرنا "نوی" یان "تەمام بوو" (sold out) دوماهیکا خەتێ زێدە بکە:
        p("images/a.jpg", "ناڤ", "Name", 10000, "hat", { new: true }),
        p("images/a.jpg", "ناڤ", "Name", 10000, "hat", { soldout: true }),
   - وەسفەکێ تایبەت بۆ بەرهەمەکێ:
        p("images/a.jpg", "ناڤ", "Name", 10000, "hat",
          { desc: { ku: "وەسفا کوردی", en: "English text" } }),
   - چەند وێنە بۆ یەک بەرهەمی (پێش، پاش، لایەک...): ب جهێ یەک وێنەی، لیستەکا وێنەیان
     ل ناڤ [ ] بنڤیسە. وێنەیا یەکەم ل کارتی دیار دبیت:
        p(["images/cardigan-front.jpg", "images/cardigan-back.jpg", "images/cardigan-side.jpg"],
          "کاردیگانا پەمبەیی", "Pink Cardigan", 50000, "outfit"),
     ئەنجام: ل کارتی وێنەیا یەکەم دیار دبیت. دەمێ کەسەک کارتی ڤەکەت، ل ژێر وێنەی
             3 وێنەیێن بچووک دیار دبن و ب swipe یان کلیکێ دکارێ وێنەیێن دی ببینیت.
   - بۆ سێتەکێ: جۆر بکە "set" و ل دوماهیکێ بنڤیسە چ تێدایە (items):
        p("images/winter-set.jpg", "سێتا زڤستانێ", "Winter Set", 47000, "set",
          { items: { ku: "کلاو + ملپێچ", en: "Hat + Scarf" } }),
     ئەنجام: ل بەشێ "سێتێن تایبەت" کارتەکا نوی دهێتە دەرکەفتن، و ل ژێر ناڤی
             "کلاو + ملپێچ" دیار دبیت (ل پەنجەرا بەرهەمی ژی: "ناڤەرۆک: کلاو + ملپێچ").
   - بۆ جاکێت/کاردیگانەکێ ب نرخێ جیاواز ب پێی تەمەنی، دوماهیکا خەتێ بنڤیسە  ages: true
        p("images/a.jpg", "ناڤ", "Name", 12000, "outfit", { new: true, ages: true }),
     ئەنجام: ل پەنجەرا بەرهەمی لیستەکا تەمەنان دیار دبیت و نرخ ب پێی تەمەنی دهێتە دانان.
             تەمەن و نرخێن وان ل خوارێ ل AGE_TIERS دهێنە گوهۆڕین.
   - هەر خەتەک ب کۆمایەک (,) دوماهی دهێت. ئەگەر کۆما ژبیر بکەی، سایت کار ناکەت.
   ===================================================================== */


/* ---------- جۆرێن بەرهەمان (ناڤ + وەسفا گشتی) ---------- */
const CATEGORIES = {
  medal:  { ku: "مەدالی",   en: "Keychain", descKu: "مەدالییەکا نازدار ب کرۆشێ هاتییە چنین، بۆ کلیلان و چانتایان.", descEn: "A cute crochet keychain for keys and bags." },
  scarf:  { ku: "ملپێچ",    en: "Scarf",    descKu: "ملپێچەکا گەرم و نەرم، ب دەست هاتییە چنین.",                   descEn: "A warm, soft scarf made by hand." },
  hat:    { ku: "کلاو",     en: "Hat",      descKu: "کلاوەکێ کرۆشێ یێ گەرم و جوان.",                                descEn: "A warm and pretty crochet hat." },
  set:    { ku: "سێت",      en: "Set",      descKu: "سێتەکا تەمام ب دەست هاتییە چنین، بۆ دیاریێ ژی گەلەک باشە.", descEn: "A complete handmade set, perfect as a gift." },
  outfit: { ku: "جل و بەرگ", en: "Clothing", descKu: "جلوبەرگەکێ ب دەست هاتییە چنین.",                              descEn: "A handmade crochet outfit." }
};


/* ---------- تەمەنان بۆ جاکێت/کاردیگانان (نرخ ب پێی تەمەنی) ---------- */
/* price: null = نرخ نینە، کەس ب WhatsApp دپرسیت. بۆ گوهۆڕینا نرخان تەنێ ڤان عەدەدان بگوهۆڕە */
const AGE_TIERS = [
  { id: "a", ku: "ژ 1 مەهێ هەتا 3 سالی",   en: "1 month – 3 years", price: 12000 },
  { id: "b", ku: "ژ 4 سالی هەتا 12 سالی",  en: "4 – 12 years",      price: 20000 },
  { id: "c", ku: "ژ 13 سالی هەتا 30 سالی", en: "13 – 30 years",     price: null  }
];


/* ---------- بەرهەمان: یەک خەت = یەک بەرهەم ---------- */

const PRODUCTS = [
  // ---------- بەرهەمێن نوی ----------
  p("images/black-rose-cardigan.webp", "کاردیگانا ڕەش ب گوڵێن سپی", "Black Rose Cardigan", 12000, "outfit", { new: true, ages: true }),
  p(["images/red-granny-cardigan-1.webp", "images/red-granny-cardigan-2.webp"],
    "کاردیگانا چوارگۆشێن سور", "Red Granny Cardigan", 12000, "outfit", { new: true, ages: true }),
  p("images/cherry-cardigan-b.webp", "کاردیگانا گیلاس ٢", "Cherry Cardigan 2", 12000, "outfit", { new: true, ages: true }),
  p("images/flower-cardigan.webp", "کاردیگانا گوڵ", "Flower Cardigan", 12000, "outfit", { new: true, ages: true }),

  // ---------- بەرهەمێ نوی: کاردیگانا گیلاس (3 وێنە) ----------
  p(["images/cherry-cardigan-1.webp", "images/cherry-cardigan-2.webp", "images/cherry-cardigan-3.webp"],
    "کاردیگانا گیلاس", "Cherry Cardigan", 12000, "outfit", { new: true, ages: true }),

  //  وێنە                                  ناڤێ کوردی          ناڤێ ئینگلیزی     نرخ     جۆر

  // ---------- سێت (SETS): جۆر "set" ----------
  p("images/red-dress-set.webp", "سێتا کراسا سور", "Red Dress Set", 15000, "set", { new: true, items: { ku: "کراس + پێلاو + قوردێلە", en: "Dress + Shoes + Headband" } }),
  p("images/green-dress-set.webp", "سێتا کراسا سەوز", "Green Dress Set", 15000, "set", { new: true, items: { ku: "کراس + پێلاو + قوردێلە", en: "Dress + Shoes + Headband" } }),
  p("images/pink-dress-set.webp", "سێتا کراسا پەمبەیی", "Pink Dress Set", 15000, "set", { new: true, items: { ku: "کراس + پێلاو + قوردێلە", en: "Dress + Shoes + Headband" } }),
  p("images/yellow-dress-set.webp", "سێتا کراسا سپی و زەرد", "Yellow & White Dress Set", 15000, "set", { new: true, items: { ku: "کراس + پێلاو + قوردێلە", en: "Dress + Shoes + Headband" } }),
  // ئەڤ دوو سێتە نموونەنە (نرخ = کۆمێ دوو پارچەیان). وێنە و نرخ و ناڤان ب یێن خۆ بگوهۆڕە یان ڤان دوو خەتان لابە.

  //  ↓ بەرهەمێن نوی ل ڤێرە زێدە بکە (لەپاش دوماهیکا خەتێ، بەری ] )
];


/* ---------- (ئەڤە دەست لێ نەدە) فەنکشنا چێکرنا بەرهەمان ---------- */
function p(img, ku, en, price, cat, extra) {
  const imgs = Array.isArray(img) ? img : [img];   // یەک وێنە یان لیستەکا وێنەیان
  return Object.assign({ id: imgs[0] + "#" + ku, img: imgs[0], imgs: imgs, name: { ku: ku, en: en || ku }, price: price, cat: cat }, extra || {});
}
