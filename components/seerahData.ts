export interface Prophet {
  name: string;
  title: string;
  desc_en: string;
  desc_ur: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
  desc_en: string;
  desc_ur: string;
}

export const PROPHETS_DATA: Prophet[] = [
  { 
    name: "Hazrat Adam (A.S)", 
    title: "The Father of Mankind", 
    desc_en: "The first human created by Allah and appointed as His vicegerent on Earth.",
    desc_ur: "اللہ تعالیٰ نے مٹی سے تخلیق کیا اور زمین پر اپنا پہلا خلیفہ مقرر فرمایا۔"
  },
  { 
    name: "Hazrat Idris (A.S)", 
    title: "The Wise Prophet", 
    desc_en: "Known for wisdom and devotion, one of the earliest prophets sent to guide mankind.",
    desc_ur: "آپ علم و حکمت کے مالک تھے اور انسانوں کو ہدایت دینے والے ابتدائی نبیوں میں سے تھے۔"
  },
  { 
    name: "Hazrat Nuh (A.S)", 
    title: "The Ark Builder", 
    desc_en: "Warned his people of Allah's punishment and built the Ark to save believers from the Flood.",
    desc_ur: "آپ نے اپنی قوم کو اللہ کے عذاب سے ڈرایا اور ایمان والوں کو نجات دلانے کے لیے کشتی تعمیر کی۔"
  },
  { 
    name: "Hazrat Hud (A.S)", 
    title: "The Prophet of Ad", 
    desc_en: "Sent to the people of ‘Ad to call them to worship Allah alone.",
    desc_ur: "آپ قوم عاد کی طرف بھیجے گئے تاکہ انہیں صرف اللہ کی عبادت کی طرف بلائیں۔"
  },
  { 
    name: "Hazrat Salih (A.S)", 
    title: "The Prophet of Thamud", 
    desc_en: "Warned the Thamud people to worship Allah and foretold the she-camel miracle.",
    desc_ur: "آپ قوم ثمود کی طرف بھیجے گئے اور اونٹنی کے معجزے کے ذریعے انہیں اللہ کی عبادت کی نصیحت فرمائی۔"
  },
  { 
    name: "Hazrat Ibrahim (A.S)", 
    title: "Friend of Allah", 
    desc_en: "The patriarch of monotheism who built the Holy Kaaba with his son Hazrat Ismail (A.S).",
    desc_ur: "آپ نے توحید کی بنیاد رکھی اور اپنے بیٹے حضرت اسماعیلؑ کے ساتھ خانہ کعبہ کی تعمیر کی۔"
  },
  { 
    name: "Hazrat Lut (A.S)", 
    title: "The Messenger to Sodom", 
    desc_en: "Sent to the people of Sodom and Gomorrah to warn them against immorality.",
    desc_ur: "آپ قوم لوط کی طرف بھیجے گئے تاکہ انہیں فحاشی اور گناہ سے روکے۔"
  },
  { 
    name: "Hazrat Ismail (A.S)", 
    title: "The Devoted Son", 
    desc_en: "Son of Hazrat Ibrahim, known for obedience and assistance in building the Kaaba.",
    desc_ur: "حضرت ابراہیم کے فرزند، فرمانبرداری اور خانہ کعبہ کی تعمیر میں مدد کے لیے مشہور۔"
  },
  { 
    name: "Hazrat Ishaq (A.S)", 
    title: "The Blessed Son", 
    desc_en: "Son of Hazrat Ibrahim and father of Yaqub, continued the message of monotheism.",
    desc_ur: "حضرت ابراہیم کے بیٹے اور حضرت یعقوب کے والد، توحید کا پیغام جاری رکھا۔"
  },
  { 
    name: "Hazrat Yaqub (A.S)", 
    title: "The Patriarch of Tribes", 
    desc_en: "Father of the twelve tribes of Israel, known for patience and trust in Allah.",
    desc_ur: "بارہ قبیلوں کے والد، صبر اور اللہ پر بھروسے کے لیے مشہور۔"
  },
  { 
    name: "Hazrat Yusuf (A.S)", 
    title: "The Model of Patience", 
    desc_en: "Known for patience, wisdom, and trust in Allah while facing trials and imprisonment.",
    desc_ur: "صبر، حکمت اور اللہ پر بھروسے کے لیے مشہور، مشکلات اور قید کے باوجود۔"
  },
  { 
    name: "Hazrat Shuayb (A.S)", 
    title: "The Prophet of Midian", 
    desc_en: "Warned his people against corruption and dishonest trade practices.",
    desc_ur: "آپ اپنی قوم کو بدعنوانی اور غیر ایماندارانہ کاروبار سے روکتے تھے۔"
  },
  { 
    name: "Hazrat Musa (A.S)", 
    title: "The Interlocutor", 
    desc_en: "Led the Israelites to freedom and received the Torah on Mount Sinai.",
    desc_ur: "فرعون کا مقابلہ کیا اور بنی اسرائیل کو آزادی دلائی، آپ پر کوہِ طور پر تورات نازل ہوئی۔"
  },
  { 
    name: "Hazrat Harun (A.S)", 
    title: "The Supporter", 
    desc_en: "Brother of Hazrat Musa, helped him guide the Israelites.",
    desc_ur: "حضرت موسیٰ کے بھائی، بنی اسرائیل کی رہنمائی میں مددگار۔"
  },
  { 
    name: "Hazrat Dawud (A.S)", 
    title: "The King Prophet", 
    desc_en: "A prophet and king, known for wisdom and receiving the Zabur (Psalms).",
    desc_ur: "آپ نبی اور بادشاہ تھے، علم و حکمت کے مالک اور آپ پر زبور نازل ہوئی۔"
  },
  { 
    name: "Hazrat Suleiman (A.S)", 
    title: "The Wise King", 
    desc_en: "Son of Hazrat Dawud, known for wisdom and ruling a vast kingdom.",
    desc_ur: "حضرت داؤد کے فرزند، علم و حکمت کے مالک اور وسیع سلطنت کے حکمران تھے۔"
  },
  { 
    name: "Hazrat Ilyas (A.S)", 
    title: "The Upright Prophet", 
    desc_en: "Called his people to worship Allah and abandon idol worship.",
    desc_ur: "اپنی قوم کو اللہ کی عبادت اور بت پرستی چھوڑنے کی طرف بلایا۔"
  },
  { 
    name: "Hazrat Yunus (A.S)", 
    title: "The Patient Prophet", 
    desc_en: "Swallowed by the whale, repented and called his people to faith.",
    desc_ur: "وہ مچھلی میں گئے، توبہ کی اور اپنی قوم کو ایمان کی طرف بلایا۔"
  },
  { 
    name: "Hazrat Zakariya (A.S)", 
    title: "The Prayerful Prophet", 
    desc_en: "Known for patience and prayer, father of Hazrat Yahya.",
    desc_ur: "صبر اور دعا کے لیے مشہور، حضرت یحییٰ کے والد۔"
  },
  { 
    name: "Hazrat Yahya (A.S)", 
    title: "The Righteous Prophet", 
    desc_en: "A prophet known for his piety and devotion, son of Hazrat Zakariya.",
    desc_ur: "آپ ایک نیک اور پرہیزگار نبی تھے، حضرت زکریا علیہ السلام کے فرزند۔"
  },
  { 
    name: "Hazrat Isa (A.S)", 
    title: "The Miraculous Birth", 
    desc_en: "Born miraculously without a father, he brought the message of the Injeel.",
    desc_ur: "اللہ کے حکم سے بغیر باپ کے پیدا ہوئے اور مردوں کو زندہ کرنے جیسے معجزات دکھائے۔"
  },
  { 
    name: "Hazrat Muhammad ﷺ", 
    title: "The Seal of the Prophets", 
    desc_en: "The final messenger, who completed the message of Islam and delivered the Quran.",
    desc_ur: "آخری نبی، جنہوں نے دینِ اسلام کو مکمل کیا اور قرآن مجید کی تعلیم پہنچائی۔"
  }
];

export const SEERAH_TIMELINE: TimelineEvent[] = [
  { 
    year: "571 AD", 
    event: "The Blessed Birth", 
    desc_en: "The Prophet ﷺ was born in Makkah in the Year of the Elephant.",
    desc_ur: "عام الفیل کے سال مکہ مکرمہ میں پیدا ہوئے اور پوری کائنات کو روشن کر دیا۔"
  },
  { 
    year: "610 AD", 
    event: "First Revelation", 
    desc_en: "Received the first word of the Quran 'Iqra' in the Cave of Hira at age 40.",
    desc_ur: "چالیس سال کی عمر میں غارِ حرا میں پہلی وحی 'اقراء' نازل ہوئی۔"
  },
  { 
    year: "622 AD", 
    event: "Migration (Hijrah)", 
    desc_en: "The Hijrah to Madinah, marking the beginning of the Islamic Calendar.",
    desc_ur: "مکہ مکرمہ سے مدینہ منورہ ہجرت فرمائی جس سے ہجری کیلنڈر کا آغاز ہوا۔"
  },
  { 
    year: "632 AD", 
    event: "The Final Sermon", 
    desc_en: "Delivered the Farewell Khutbah, establishing universal human rights.",
    desc_ur: "حجۃ الوداع کے موقع پر آخری خطبہ دیا جس میں انسانی حقوق کا عظیم منشور پیش کیا۔"
  },
  { 
    year: "632 AD", 
    event: "The Passing", 
    desc_en: "Returned to Allah at the age of 63, having completed the message of Islam.",
    desc_ur: "تریسٹھ سال کی عمر میں اپنے خالقِ حقیقی سے جا ملے، جب دین مکمل ہو چکا تھا۔"
  }
];