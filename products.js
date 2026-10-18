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


/* ---------- بەرهەمان: یەک خەت = یەک بەرهەم ---------- */
/* ئەڤ وێنەیێن Unsplash تەنێ نموونەنە، ب وێنەیێن خۆ بگوهۆڕە (وەکو images/xxx.jpg) */
const U = "?auto=format&fit=crop&w=800&q=80";
const UNS = "https://images.unsplash.com/";

const PRODUCTS = [
  // ---------- بەرهەمێن نوی ----------
  p(["images/red-granny-cardigan-1.webp", "images/red-granny-cardigan-2.webp"],
    "کاردیگانا چوارگۆشێن سور", "Red Granny Cardigan", 12000, "outfit", { new: true }),
  p("images/cherry-cardigan-b.webp", "کاردیگانا گیلاس ٢", "Cherry Cardigan 2", 12000, "outfit", { new: true }),
  p("images/flower-cardigan.webp", "کاردیگانا گوڵ", "Flower Cardigan", 12000, "outfit", { new: true }),

  // ---------- بەرهەمێ نوی: کاردیگانا گیلاس (3 وێنە) ----------
  p(["images/cherry-cardigan-1.webp", "images/cherry-cardigan-2.webp", "images/cherry-cardigan-3.webp"],
    "کاردیگانا گیلاس", "Cherry Cardigan", 12000, "outfit", { new: true }),

  //  وێنە                                  ناڤێ کوردی          ناڤێ ئینگلیزی     نرخ     جۆر
  p(UNS + "photo-1607604276583-eef5d076aa5f" + U, "مەدالیا نازدار",    "Cute Medali",     15000, "medal"),
  p(UNS + "photo-1615485290382-441e4d049cb5" + U, "مەدالیا گوڵ",       "Flower Medali",   12000, "medal"),
  p(UNS + "photo-1520903920243-00d872a2d1c9" + U, "ملپێچا گەرم",       "Warm Scarf",      25000, "scarf"),
  p(UNS + "photo-1608256246200-53e635b5b65f" + U, "ملپێچا ڕۆز",        "Rose Scarf",      28000, "scarf"),
  p(UNS + "photo-1576871337632-b9aef4c17ab9" + U, "کلاوێ کرۆشێ",       "Crochet Hat",     20000, "hat"),
  p(UNS + "photo-1576871337622-98d48d1cf531" + U, "کلاوێ زڤستانێ",     "Winter Beanie",   22000, "hat"),
  p(UNS + "photo-1584992236310-6edddc08acff" + U, "جلوبەرگێ دەستچن",   "Handmade Outfit", 45000, "outfit"),
  p(UNS + "photo-1596704017254-9b121068fb31" + U, "کاردیگانا پەمبەیی", "Pink Cardigan",   50000, "outfit"),

  // ---------- سێت (SETS): جۆر "set" ----------
  // ئەڤ دوو سێتە نموونەنە (نرخ = کۆمێ دوو پارچەیان). وێنە و نرخ و ناڤان ب یێن خۆ بگوهۆڕە یان ڤان دوو خەتان لابە.
  p(UNS + "photo-1520903920243-00d872a2d1c9" + U, "سێتا زڤستانێ", "Winter Set", 47000, "set", { items: { ku: "کلاو + ملپێچ", en: "Hat + Scarf" } }),
  p(UNS + "photo-1608256246200-53e635b5b65f" + U, "سێتا ڕۆز",     "Rose Set",   48000, "set", { items: { ku: "کلاو + ملپێچ", en: "Hat + Scarf" } }),

  //  ↓ بەرهەمێن نوی ل ڤێرە زێدە بکە (لەپاش دوماهیکا خەتێ، بەری ] )
];


/* ---------- (ئەڤە دەست لێ نەدە) فەنکشنا چێکرنا بەرهەمان ---------- */
function p(img, ku, en, price, cat, extra) {
  const imgs = Array.isArray(img) ? img : [img];   // یەک وێنە یان لیستەکا وێنەیان
  return Object.assign({ id: imgs[0] + "#" + ku, img: imgs[0], imgs: imgs, name: { ku: ku, en: en || ku }, price: price, cat: cat }, extra || {});
}
