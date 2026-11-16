// Authentic sources for each Prophet's chronicle.
// Quran references are given as surah:ayat ranges; hadith references cite well-known
// numbering (Sahih al-Bukhari / Sahih Muslim / Jami' at-Tirmidhi, standard Dar-us-Salam numbering).
// Where the Quran gives very few details, a scholarly note is included for honesty.

type L3 = { en: string; ur: string; ar: string };

export type StoryReference =
  | { kind: "quran"; surah: number; ayat: string; topic: L3 }
  | { kind: "hadith"; source: L3; topic: L3 };

export const SURAH_NAMES: Record<number, L3> = {
  2: { en: "Al-Baqarah", ur: "البقرہ", ar: "البقرة" },
  3: { en: "Aal-Imran", ur: "آلِ عمران", ar: "آل عمران" },
  4: { en: "An-Nisa", ur: "النساء", ar: "النساء" },
  5: { en: "Al-Ma'idah", ur: "المائدہ", ar: "المائدة" },
  6: { en: "Al-An'am", ur: "الانعام", ar: "الأنعام" },
  7: { en: "Al-A'raf", ur: "الاعراف", ar: "الأعراف" },
  9: { en: "At-Tawbah", ur: "التوبہ", ar: "التوبة" },
  10: { en: "Yunus", ur: "یونس", ar: "يونس" },
  11: { en: "Hud", ur: "ہود", ar: "هود" },
  12: { en: "Yusuf", ur: "یوسف", ar: "يوسف" },
  15: { en: "Al-Hijr", ur: "الحجر", ar: "الحجر" },
  17: { en: "Al-Isra", ur: "الاسراء", ar: "الإسراء" },
  18: { en: "Al-Kahf", ur: "الکہف", ar: "الكهف" },
  19: { en: "Maryam", ur: "مریم", ar: "مريم" },
  20: { en: "Taha", ur: "طٰہٰ", ar: "طه" },
  21: { en: "Al-Anbiya", ur: "الانبیاء", ar: "الأنبياء" },
  26: { en: "Ash-Shu'ara", ur: "الشعراء", ar: "الشعراء" },
  27: { en: "An-Naml", ur: "النمل", ar: "النمل" },
  28: { en: "Al-Qasas", ur: "القصص", ar: "القصص" },
  29: { en: "Al-Ankabut", ur: "العنکبوت", ar: "العنكبوت" },
  33: { en: "Al-Ahzab", ur: "الاحزاب", ar: "الأحزاب" },
  34: { en: "Saba", ur: "سبا", ar: "سبأ" },
  37: { en: "As-Saffat", ur: "الصافات", ar: "الصافات" },
  38: { en: "Sad", ur: "ص", ar: "ص" },
  51: { en: "Adh-Dhariyat", ur: "الذاریات", ar: "الذاريات" },
  54: { en: "Al-Qamar", ur: "القمر", ar: "القمر" },
  61: { en: "As-Saff", ur: "الصف", ar: "الصف" },
  66: { en: "At-Tahrim", ur: "التحریم", ar: "التحريم" },
  68: { en: "Al-Qalam", ur: "القلم", ar: "القلم" },
  69: { en: "Al-Haqqah", ur: "الحاقہ", ar: "الحاقة" },
  71: { en: "Nuh", ur: "نوح", ar: "نوح" },
  89: { en: "Al-Fajr", ur: "الفجر", ar: "الفجر" },
  91: { en: "Ash-Shams", ur: "الشمس", ar: "الشمس" },
  96: { en: "Al-Alaq", ur: "العلق", ar: "العلق" },
  110: { en: "An-Nasr", ur: "النصر", ar: "النصر" },
};

const q = (surah: number, ayat: string, en: string, ur: string, ar: string): StoryReference => ({
  kind: "quran",
  surah,
  ayat,
  topic: { en, ur, ar },
});

const h = (source: L3, en: string, ur: string, ar: string): StoryReference => ({
  kind: "hadith",
  source,
  topic: { en, ur, ar },
});

const bukhari = (n: number): L3 => ({ en: `Sahih al-Bukhari ${n}`, ur: `صحیح بخاری ${n}`, ar: `صحيح البخاري ${n}` });
const muslim = (n: number): L3 => ({ en: `Sahih Muslim ${n}`, ur: `صحیح مسلم ${n}`, ar: `صحيح مسلم ${n}` });
const tirmidhi = (n: number): L3 => ({ en: `Jami' at-Tirmidhi ${n}`, ur: `جامع ترمذی ${n}`, ar: `جامع الترمذي ${n}` });

export const STORY_REFERENCES: Record<string, StoryReference[]> = {
  adam: [
    q(2, "30–39", "Khilafah on earth, teaching of names, angels' prostration, Paradise and repentance", "زمین پر خلافت، اسماء کی تعلیم، فرشتوں کا سجدہ، جنت اور توبہ", "الخلافة في الأرض وتعليم الأسماء وسجود الملائكة والجنة والتوبة"),
    q(7, "11–25", "Iblis refuses out of pride; the tree; the dua 'Rabbana zalamna anfusana'", "ابلیس کا تکبر سے انکار، درخت کا واقعہ، دعا «ربنا ظلمنا انفسنا»", "إباء إبليس واستكباره، والشجرة، ودعاء «ربنا ظلمنا أنفسنا»"),
    q(15, "26–44", "Creation of man from sounding clay", "انسان کی کھنکھناتی مٹی سے تخلیق", "خلق الإنسان من صلصال"),
    q(20, "115–123", "The forgetting of the covenant and Allah's forgiveness", "عہد کا بھول جانا اور اللہ کی معافی", "نسيان العهد ومغفرة الله"),
    h(bukhari(3326), "Allah created Adam sixty cubits tall", "اللہ نے آدمؑ کو ساٹھ ہاتھ لمبا پیدا فرمایا", "خلق الله آدم طوله ستون ذراعًا"),
  ],
  idris: [
    q(19, "56–57", "A truthful prophet raised to a high station", "سچے نبی جنہیں بلند مقام پر اٹھایا گیا", "صدّيق نبي رُفع مكانًا عليًا"),
    q(21, "85–86", "Counted among the patient and the righteous", "صابرین اور صالحین میں شمار", "من الصابرين والصالحين"),
    h(muslim(162), "The Prophet ﷺ met Idris in the fourth heaven on the night of Mi'raj", "شبِ معراج نبی ﷺ کی حضرت ادریسؑ سے چوتھے آسمان پر ملاقات", "لقاء النبي ﷺ بإدريس في السماء الرابعة ليلة المعراج"),
  ],
  nuh: [
    q(71, "1–28", "Calling his people night and day, openly and privately", "قوم کو دن رات، کھلے اور چھپے دعوت دینا", "دعوة قومه ليلًا ونهارًا سرًا وجهارًا"),
    q(11, "25–49", "Building the Ark, the flood and his son", "کشتی بنانا، طوفان اور ان کا بیٹا", "صنع السفينة والطوفان وابنه"),
    q(29, "14", "He remained among his people 950 years", "قوم میں ساڑھے نو سو سال رہے", "لبث فيهم ألف سنة إلا خمسين عامًا"),
    q(54, "9–15", "The gates of the sky opened and the Ark as a sign", "آسمان کے دروازے کھلنا اور کشتی ایک نشانی", "فتح أبواب السماء والسفينة آية"),
    h(bukhari(3340), "Nuh is the first messenger sent to the people of earth", "حضرت نوحؑ اہلِ زمین کی طرف پہلے رسول ہیں", "نوح أول رسول إلى أهل الأرض"),
  ],
  hud: [
    q(7, "65–72", "Hud calls the people of 'Ad to Tawheed", "حضرت ہودؑ کی قومِ عاد کو توحید کی دعوت", "دعوة هود قوم عاد إلى التوحيد"),
    q(11, "50–60", "'Ad's arrogance and their destruction", "عاد کا تکبر اور ہلاکت", "استكبار عاد وهلاكهم"),
    q(26, "123–140", "Tall buildings on every high place", "ہر اونچی جگہ پر عمارتیں", "البناء بكل ريع آية"),
    q(69, "6–8", "A furious wind for seven nights and eight days", "سات راتیں اور آٹھ دن تیز آندھی", "ريح صرصر عاتية سبع ليال وثمانية أيام"),
    q(89, "6–8", "Iram of the lofty pillars", "اونچے ستونوں والا ارم", "إرم ذات العماد"),
  ],
  saleh: [
    q(7, "73–79", "The she-camel of Allah as a sign", "اللہ کی اونٹنی بطور نشانی", "ناقة الله آية"),
    q(11, "61–68", "Three days of respite, then the mighty blast", "تین دن کی مہلت پھر سخت چیخ", "تمتعوا ثلاثة أيام ثم الصيحة"),
    q(15, "80–84", "People of al-Hijr who carved homes in mountains", "اصحابِ حجر جو پہاڑ تراش کر گھر بناتے تھے", "أصحاب الحجر ينحتون من الجبال بيوتًا"),
    q(91, "11–15", "The most wretched one hamstrung the camel", "سب سے بدبخت نے اونٹنی کی کونچیں کاٹیں", "إذ انبعث أشقاها فعقروها"),
    h(bukhari(433), "Pass by the ruins of the punished only while weeping", "عذاب والی قوموں کے کھنڈرات سے روتے ہوئے گزرو", "لا تدخلوا على هؤلاء المعذبين إلا أن تكونوا باكين"),
  ],
  ibrahim: [
    q(6, "74–83", "Reasoning with the star, moon and sun", "ستارے، چاند اور سورج سے دلیل", "الاستدلال بالكوكب والقمر والشمس"),
    q(21, "51–70", "Breaking the idols and the fire made cool and safe", "بت توڑنا اور آگ کا ٹھنڈا اور سلامتی والا ہونا", "تكسير الأصنام والنار بردًا وسلامًا"),
    q(2, "258", "Debate with the king (Namrud)", "بادشاہ (نمرود) سے مناظرہ", "محاجّة الملك (النمرود)"),
    q(2, "124–129", "Raising the Ka'bah with Ismail and their dua", "اسماعیلؑ کے ساتھ کعبہ کی تعمیر اور دعا", "رفع القواعد من البيت مع إسماعيل ودعاؤهما"),
    q(37, "99–111", "The dream and the great sacrifice", "خواب اور ذبحِ عظیم", "الرؤيا والذبح العظيم"),
    h(bukhari(3364), "Hajar, baby Ismail and the spring of Zamzam", "حضرت ہاجرہؑ، ننھے اسماعیلؑ اور زمزم", "هاجر وإسماعيل الرضيع وماء زمزم"),
  ],
  lut: [
    q(26, "160–175", "Lut warns his people against their indecency", "حضرت لوطؑ کا قوم کو بے حیائی سے روکنا", "إنذار لوط قومه من الفاحشة"),
    q(15, "57–77", "The angels come as guests; departure at night", "فرشتے مہمان بن کر آئے، رات کو روانگی", "الملائكة ضيوفًا والإسراء بأهله ليلًا"),
    q(11, "77–83", "The town turned upside down; stones of baked clay", "بستی الٹ دی گئی، کنکر کے پتھر", "جعل عاليها سافلها وحجارة من سجيل"),
    q(66, "10", "His wife was among those who stayed behind", "ان کی بیوی پیچھے رہنے والوں میں تھی", "امرأة لوط من الغابرين"),
  ],
  ismail: [
    q(37, "100–107", "'O my father, do as you are commanded'", "«ابا جان! جو حکم ملا ہے کر گزریے»", "«يا أبت افعل ما تؤمر»"),
    q(2, "125–129", "Purifying and building the House", "بیت اللہ کی تطہیر اور تعمیر", "تطهير البيت ورفع قواعده"),
    q(19, "54–55", "True to his promise, a messenger and prophet", "وعدے کے سچے، رسول اور نبی", "صادق الوعد رسولًا نبيًا"),
    h(bukhari(3364), "Hajar's running between Safa and Marwah and Zamzam", "حضرت ہاجرہؑ کی صفا و مروہ کی سعی اور زمزم", "سعي هاجر بين الصفا والمروة وزمزم"),
  ],
  ishaq: [
    q(11, "69–73", "Glad tidings to Sarah of Ishaq and Yaqub", "حضرت سارہؑ کو اسحاقؑ اور یعقوبؑ کی بشارت", "بشارة سارة بإسحاق ويعقوب"),
    q(51, "24–30", "The honoured guests of Ibrahim", "ابراہیمؑ کے معزز مہمان", "ضيف إبراهيم المكرمين"),
    q(37, "112–113", "A prophet from among the righteous", "صالحین میں سے ایک نبی", "نبيًا من الصالحين"),
    q(21, "72", "Granted to Ibrahim as a gift", "ابراہیمؑ کو بطورِ عطیہ ملے", "ووهبنا له إسحاق ويعقوب نافلة"),
  ],
  yaqub: [
    q(2, "132–133", "His final advice to his sons", "بیٹوں کو آخری وصیت", "وصيته لبنيه عند الموت"),
    q(12, "84–87", "Grief for Yusuf and 'beautiful patience'", "یوسفؑ کا غم اور «صبرِ جمیل»", "الحزن على يوسف و«صبر جميل»"),
    q(12, "93–100", "Sight restored by Yusuf's shirt; reunion in Egypt", "یوسفؑ کی قمیص سے بینائی واپس، مصر میں ملاقات", "ارتداد بصره بقميص يوسف واللقاء في مصر"),
  ],
  yusuf: [
    q(12, "4–6", "The dream of eleven stars, the sun and moon", "گیارہ ستاروں، سورج اور چاند کا خواب", "رؤيا أحد عشر كوكبًا والشمس والقمر"),
    q(12, "7–20", "Thrown into the well and sold", "کنویں میں ڈالا جانا اور بیچا جانا", "إلقاؤه في الجب وبيعه"),
    q(12, "23–35", "Trial of the Aziz's wife and the prison", "عزیز کی بیوی کی آزمائش اور قید", "فتنة امرأة العزيز والسجن"),
    q(12, "43–57", "The king's dream and becoming treasurer of Egypt", "بادشاہ کا خواب اور مصر کے خزانوں کا نگران", "رؤيا الملك وتوليه خزائن الأرض"),
    q(12, "88–101", "Forgiving his brothers and fulfilment of the dream", "بھائیوں کو معاف کرنا اور خواب کی تعبیر", "العفو عن إخوته وتحقق الرؤيا"),
    h(muslim(162), "Yusuf was given half of all beauty", "حضرت یوسفؑ کو آدھا حسن عطا ہوا", "أُعطي يوسف شطر الحسن"),
  ],
  ayyub: [
    q(21, "83–84", "His dua in illness and the removal of harm", "بیماری میں دعا اور تکلیف کا دور ہونا", "دعاؤه في البلاء وكشف الضر"),
    q(38, "41–44", "Strike with your foot; 'We found him patient'", "«پاؤں مارو»، «ہم نے انہیں صابر پایا»", "«اركض برجلك» و«إنا وجدناه صابرًا»"),
    h(bukhari(279), "Golden locusts fell on Ayyub after his recovery", "شفا کے بعد حضرت ایوبؑ پر سونے کی ٹڈیاں برسیں", "خرّ على أيوب جراد من ذهب"),
  ],
  shuayb: [
    q(7, "85–93", "Give full measure and weight; the earthquake", "ناپ تول پورا کرو؛ زلزلہ", "أوفوا الكيل والميزان؛ الرجفة"),
    q(11, "84–95", "'My success is only through Allah'", "«میری توفیق صرف اللہ سے ہے»", "«وما توفيقي إلا بالله»"),
    q(26, "176–191", "People of the Thicket and the Day of the Shadow", "اصحابِ ایکہ اور سائبان والے دن کا عذاب", "أصحاب الأيكة وعذاب يوم الظلة"),
    q(28, "22–28", "Musa in Madyan with the righteous elder (scholars differ whether he was Shu'ayb)", "مدین میں موسیٰؑ اور نیک بزرگ (علماء میں اختلاف ہے کہ وہ شعیبؑ تھے یا نہیں)", "موسى في مدين مع الشيخ الصالح (اختلف العلماء أهو شعيب أم غيره)"),
  ],
  musa: [
    q(28, "7–13", "Placed in the river and returned to his mother", "دریا میں ڈالا جانا اور ماں کی گود میں واپسی", "إلقاؤه في اليم ورده إلى أمه"),
    q(20, "9–36", "The fire at Tuwa and being chosen as a messenger", "وادیِ طویٰ کی آگ اور نبوت", "النار بالوادي المقدس طوى والاصطفاء"),
    q(7, "103–126", "The magicians of Pharaoh fall in prostration", "فرعون کے جادوگروں کا سجدے میں گرنا", "سجود سحرة فرعون"),
    q(26, "52–68", "Parting of the sea and drowning of Pharaoh", "سمندر کا پھٹنا اور فرعون کا غرق ہونا", "انفلاق البحر وغرق فرعون"),
    q(18, "60–82", "Journey with al-Khidr", "حضرت خضرؑ کے ساتھ سفر", "رحلته مع الخضر"),
    h(bukhari(122), "The full story of Musa and al-Khidr", "موسیٰؑ اور خضرؑ کا مکمل واقعہ", "قصة موسى والخضر كاملة"),
  ],
  harun: [
    q(20, "25–36", "Musa's dua to make Harun his helper", "ہارونؑ کو مددگار بنانے کی موسیٰؑ کی دعا", "دعاء موسى أن يجعل هارون وزيرًا"),
    q(28, "34–35", "'He is more eloquent than me in speech'", "«وہ مجھ سے زیادہ فصیح زبان ہیں»", "«هو أفصح مني لسانًا»"),
    q(20, "85–94", "The golden calf and 'O son of my mother'", "سونے کا بچھڑا اور «اے میری ماں کے بیٹے»", "العجل و«يا ابن أم»"),
    h(bukhari(4416), "'You are to me as Harun was to Musa' (said to Ali)", "«تم میرے لیے ایسے ہو جیسے ہارونؑ موسیٰؑ کے لیے» (حضرت علیؓ سے)", "«أنت مني بمنزلة هارون من موسى» (لعلي)"),
  ],
  dhulkifl: [
    q(21, "85–86", "Mentioned among the patient and righteous", "صابرین اور صالحین کے ساتھ ذکر", "ذُكر مع الصابرين والصالحين"),
    q(38, "48", "Counted among the best (al-akhyar)", "بہترین لوگوں (اخیار) میں شمار", "وكلٌّ من الأخيار"),
  ],
  dawud: [
    q(2, "249–251", "Young Dawud slays Jalut (Goliath)", "نوجوان داؤدؑ نے جالوت کو قتل کیا", "قتل داود جالوت"),
    q(34, "10–11", "Mountains and birds glorify with him; iron made soft", "پہاڑ اور پرندے ساتھ تسبیح کرتے، لوہا نرم", "تأويب الجبال والطير وإلانة الحديد"),
    q(38, "17–26", "Made a khalifah to judge with truth", "حق کے ساتھ فیصلے کے لیے خلیفہ", "جعله خليفة يحكم بالحق"),
    q(4, "163", "Given the Zabur (Psalms)", "زبور عطا ہوئی", "وآتينا داود زبورًا"),
    h(bukhari(2072), "Dawud ate only from the earnings of his own hands", "داؤدؑ اپنے ہاتھ کی کمائی سے کھاتے تھے", "كان داود لا يأكل إلا من عمل يده"),
    h(bukhari(1131), "The most beloved fast and prayer are those of Dawud", "سب سے محبوب روزہ اور نماز داؤدؑ کی ہے", "أحب الصيام والصلاة إلى الله صيام داود وصلاته"),
  ],
  sulayman: [
    q(21, "78–82", "Wise judgement and the wind subjected to him", "حکیمانہ فیصلہ اور ہوا کا تابع ہونا", "الحكم والريح مسخرة له"),
    q(27, "15–44", "The ant, the hoopoe and the Queen of Saba", "چیونٹی، ہدہد اور ملکہ سبا", "النملة والهدهد وملكة سبأ"),
    q(38, "30–40", "Dua for a kingdom like no other", "بے مثال بادشاہت کی دعا", "دعاء «هب لي ملكًا لا ينبغي لأحد من بعدي»"),
    q(34, "12–14", "The jinn worked for him; his death leaning on his staff", "جنات کا کام کرنا؛ عصا کے سہارے وفات", "عمل الجن له وموته متكئًا على منسأته"),
  ],
  ilyas: [
    q(37, "123–132", "Calling his people away from the idol Ba'l", "قوم کو بعل بت سے روکنا", "نهيه قومه عن عبادة بعل"),
    q(6, "85", "Among the righteous", "صالحین میں سے", "وإلياس كلٌّ من الصالحين"),
  ],
  alyasa: [
    q(6, "86", "Favoured above the worlds", "تمام جہانوں پر فضیلت", "وكلًا فضلنا على العالمين"),
    q(38, "48", "Counted among the best (al-akhyar)", "بہترین لوگوں (اخیار) میں شمار", "وكلٌّ من الأخيار"),
  ],
  yunus: [
    q(21, "87–88", "The dua in the darkness: 'La ilaha illa Anta…'", "اندھیروں میں دعا «لا الٰہ الا انت…»", "النداء في الظلمات «لا إله إلا أنت…»"),
    q(37, "139–148", "Swallowed by the whale and cast on the shore", "مچھلی کا نگلنا اور ساحل پر ڈالا جانا", "التقام الحوت ونبذه بالعراء"),
    q(10, "98", "His people believed and the punishment was lifted", "قوم ایمان لائی اور عذاب ٹل گیا", "آمن قومه فكُشف عنهم العذاب"),
    q(68, "48–50", "Be patient; do not be like the companion of the fish", "صبر کرو، مچھلی والے کی طرح نہ ہو", "ولا تكن كصاحب الحوت"),
    h(tirmidhi(3505), "Any Muslim who makes the dua of Dhun-Nun is answered", "ذوالنونؑ کی دعا جو مسلمان پڑھے قبول ہوتی ہے", "دعوة ذي النون لم يدع بها مسلم إلا استجيب له"),
  ],
  zakariyya: [
    q(3, "37–41", "Guardian of Maryam; provision in the mihrab; dua for a son", "حضرت مریمؑ کی کفالت، محراب میں رزق، بیٹے کی دعا", "كفالة مريم والرزق في المحراب ودعاؤه بالولد"),
    q(19, "2–11", "His quiet dua in old age and glad tidings of Yahya", "بڑھاپے میں خاموش دعا اور یحییٰؑ کی بشارت", "نداؤه الخفي في الكبر والبشارة بيحيى"),
    q(21, "89–90", "'Do not leave me alone, You are the best of inheritors'", "«مجھے اکیلا نہ چھوڑ، تو بہترین وارث ہے»", "«رب لا تذرني فردًا وأنت خير الوارثين»"),
  ],
  yahya: [
    q(19, "12–15", "Given wisdom as a child; peace on him the day he was born", "بچپن میں حکمت، پیدائش کے دن سلامتی", "وآتيناه الحكم صبيًا وسلام عليه يوم ولد"),
    q(3, "39", "Confirming a word from Allah; noble and chaste", "اللہ کے کلمے کی تصدیق کرنے والے، سردار اور پاکباز", "مصدقًا بكلمة من الله وسيدًا وحصورًا"),
    q(21, "90", "His family hastened to good deeds", "ان کا گھرانہ نیکیوں میں جلدی کرتا", "إنهم كانوا يسارعون في الخيرات"),
  ],
  isa: [
    q(19, "16–36", "Miraculous birth and speaking in the cradle", "معجزانہ پیدائش اور گہوارے میں کلام", "الولادة المعجزة والكلام في المهد"),
    q(3, "45–55", "His miracles by Allah's permission", "اللہ کے حکم سے معجزات", "معجزاته بإذن الله"),
    q(5, "110–118", "The table spread from heaven", "آسمان سے دسترخوان", "المائدة من السماء"),
    q(4, "157–158", "He was not crucified; Allah raised him up", "نہ قتل ہوئے نہ سولی دیے گئے، اللہ نے اٹھا لیا", "وما قتلوه وما صلبوه بل رفعه الله إليه"),
    q(61, "6", "Glad tidings of a messenger named Ahmad", "احمد نامی رسول کی بشارت", "ومبشرًا برسول يأتي من بعدي اسمه أحمد"),
    h(bukhari(3448), "Isa will descend as a just ruler", "حضرت عیسیٰؑ عادل حاکم بن کر نازل ہوں گے", "نزول عيسى حكمًا عدلًا"),
  ],
  muhammad: [
    q(96, "1–5", "The first revelation in the cave of Hira: 'Read!'", "غارِ حرا میں پہلی وحی: «اقرأ»", "أول الوحي في غار حراء: «اقرأ»"),
    q(17, "1", "The night journey (Isra) to Masjid al-Aqsa", "مسجدِ اقصیٰ تک اسراء کا سفر", "الإسراء إلى المسجد الأقصى"),
    q(9, "40", "The Hijrah and the cave of Thawr: 'Allah is with us'", "ہجرت اور غارِ ثور: «اللہ ہمارے ساتھ ہے»", "الهجرة وغار ثور: «إن الله معنا»"),
    q(110, "1–3", "The victory of Makkah and people entering Islam in crowds", "فتحِ مکہ اور لوگوں کا فوج در فوج اسلام میں داخلہ", "فتح مكة ودخول الناس في دين الله أفواجًا"),
    q(5, "3", "The religion perfected (Farewell Hajj)", "دین کی تکمیل (حجۃ الوداع)", "إكمال الدين (حجة الوداع)"),
    q(33, "40", "The Seal of the Prophets", "خاتم النبیین", "خاتم النبيين"),
    q(21, "107", "Sent as a mercy to all the worlds", "تمام جہانوں کے لیے رحمت", "رحمة للعالمين"),
    h(bukhari(3), "How the revelation began", "وحی کا آغاز کیسے ہوا", "كيف كان بدء الوحي"),
    h(bukhari(3887), "The Mi'raj through the seven heavens", "سات آسمانوں کی معراج", "المعراج إلى السماوات السبع"),
    h(muslim(1218), "The Farewell Hajj and its sermon", "حجۃ الوداع اور خطبہ", "حجة الوداع وخطبتها"),
  ],
};

export const GENERAL_SOURCES: L3 = {
  en: "Primary sources are the Quran and authentic hadith listed above. Further reading: Tafsir Ibn Kathir and Qasas al-Anbiya (Ibn Kathir). Some extra details in classical story books come from earlier narrations (Isra'iliyat) and are not as firmly established.",
  ur: "بنیادی ماخذ اوپر دی گئی قرآنی آیات اور صحیح احادیث ہیں۔ مزید مطالعہ: تفسیر ابن کثیر اور قصص الانبیاء (ابن کثیر)۔ قصص کی کتابوں کی بعض اضافی تفصیلات پرانی روایات (اسرائیلیات) سے ہیں جو اتنی پختہ ثابت نہیں۔",
  ar: "المصادر الأساسية هي الآيات والأحاديث الصحيحة المذكورة أعلاه. للاستزادة: تفسير ابن كثير وقصص الأنبياء لابن كثير. وبعض التفاصيل الزائدة في كتب القصص مأخوذة من الإسرائيليات وليست بنفس درجة الثبوت.",
};
