export interface ProphetStory {
  id: string;
  order: number;
  nameEn: string;
  nameUr: string;
  nameAr: string;
  honorific: string;
  titleEn: string;
  titleUr: string;
  titleAr: string;
  image: string;
  quranMention: string;
  summaryEn: string;
  summaryUr: string;
  summaryAr: string;
  fullStory: {
    en: string[];
    ur: string[];
    ar: string[];
  };
  keyLessons: {
    en: string[];
    ur: string[];
    ar: string[];
  };
}

export const STORIES_DATA: ProphetStory[] = [
  {
    "id": "adam",
    "order": 1,
    "nameEn": "Adam (A.S.)",
    "nameUr": "حضرت آدم (ع)",
    "nameAr": "آدم عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Father of Mankind & The First Prophet",
    "titleUr": "ابوالبشر اور پہلے پیغمبر",
    "titleAr": "أبو البشر وأول الأنبياء",
    "image": "/stories/covers/adam-v2.webp",
    "quranMention": "Mentioned 25 times across 25 Surahs in the Holy Quran",
    "summaryEn": "Fashioned from clay by Allah's divine decree and honored above the angels, Prophet Adam (A.S.) dwelt in Paradise with Hawwa before descending to Earth as humanity's first vicegerent (Khalifah).",
    "summaryUr": "اللہ تعالیٰ نے مٹی سے تخلیق فرمایا اور فرشتوں پر فضیلت بخشی۔ زمین پر اللہ کے پہلے خلیفہ بنے اور انسانیت کو توبہ، بندگی اور شریعت کا راستہ سکھایا۔",
    "summaryAr": "خلقه الله تعالى بيديه من طين ونفخ فيه من روحه وأسجد له ملائكته، وعاش في الجنة مع حواء ثم هبط إلى الأرض خليفة ليعمرها بعبادة الله وتوحيده.",
    "fullStory": {
      "en": [
        "Before the dawn of human existence, Allah announced to the heavenly assembly: 'Indeed, I will make upon the earth a successive authority (khalifah).' The angels inquired with reverent curiosity whether this creation would shed blood, to which Allah replied: 'Indeed, I know that which you do not know.' (Surah Al-Baqarah 2:30).",
        "Allah fashioned Adam from dust gathered from every corner of the earth—red, black, white, soft and harsh—which explains the rich diversity of human complexion and temperament. Formed into molded clay and left to dry into sounding pottery, Allah breathed of His divine spirit into him, and immediately life surged through his veins. Adam sneezed, and his first words on earth were: 'Al-hamdu Lillahi Rabbil 'Alameen' (All praise belongs to Allah, Lord of all the worlds).",
        "To manifest the supreme honor of human intellect, Allah taught Adam the names and internal properties of all created things. When the angels were asked to name them, they humbly bowed: 'Exalted are You; we have no knowledge except what You have taught us.' Adam then stood and clearly proclaimed the names of all creations, establishing forever that genuine knowledge elevates creation above mere rank.",
        "Allah then commanded all angels to bow down before Adam in veneration of the Creator's wisdom. All prostrated instantly in flawless obedience, except Iblis (Satan). Poisoned by pride and tribal bigotry, Iblis sneered: 'I am better than him; You created me from fire and created him from clay.' For his arrogant rebellion, Iblis was cursed and cast out of Paradise, swearing an eternal oath to deceive Adam's descendants until the Day of Resurrection.",
        "Adam and his companion, Hawwa (Eve), were blessed to dwell in the serene gardens of Paradise, free to feast upon every delicacy except one designated tree. Iblis crept into their hearts with deceitful oaths, whispering that eating from it would make them immortal angels. In a moment of human frailty, they tasted the fruit, and instantly their garments fell away, revealing their vulnerability.",
        "Unlike Iblis who defended his sin with arrogance, Adam and Hawwa were pierced with immediate remorse. Weeping with sincere repentance, they uttered the immortal prayer taught by Allah: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.' (Surah Al-A'raf 7:23). Allah, the Oft-Forgiving, accepted their repentance completely.",
        "Adam and Hawwa descended to Earth to fulfill their divine destiny not as punishment, but as the planned starting point of human stewardship. On Earth, Adam built the first sanctuary of worship, cultivated agriculture, taught his children monotheism and moral law, and endured the tragedy of his son Qabil slaying Habil. Prophet Adam lived nearly a thousand years as the beloved patriarch and prophet, leaving humanity a timeless roadmap of humility, repentance, and obedience to the One True Lord."
      ],
      "ur": [
        "کائنات کی تخلیق کے آغاز میں، جب انسان کا وجود زمین پر نہیں تھا، اللہ رب العزت نے فرشتوں کو آگاہ فرمایا: 'بیشک میں زمین میں ایک خلیفہ بنانے والا ہوں۔' فرشتوں نے تعظیم کے ساتھ عرض کیا: کیا تو ایسے کو بنائے گا جو فساد پھیلائے اور خون بہائے؟ اللہ تعالیٰ نے فرمایا: 'یقیناً میں وہ جانتا ہوں جو تم نہیں جانتے۔' (سورۃ البقرہ)",
        "اللہ تعالیٰ نے حضرت آدم علیہ السلام کو زمین کے مختلف حصوں کی مٹی—سفید، سیاہ، سرخ، نرم اور سخت—سے تیار فرمایا، یہی وجہ ہے کہ ان کی اولاد کے رنگ و روپ اور مزاج مختلف ہیں۔ جب پتلے میں روح پھونکی گئی تو وہ زندہ انسان بن گئے، آپ کو چھینک آئی اور زبانِ مبارک سے سب سے پہلے کلمات نکلے: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ'۔",
        "اللہ تعالیٰ نے حضرت آدم علیہ السلام کو وہ تمام کائناتی علوم اور اشیاء کے نام سکھا دیے جن کا علم فرشتوں کو بھی نہ تھا۔ پھر فرشتوں کے سامنے ان اشیاء کو پیش فرمایا تو فرشتوں نے عاجزی سے کہا: 'پاک ہے تیری ذات! ہمیں تو صرف اتنا ہی علم ہے جتنا تو نے ہمیں سکھایا۔' پھر حضرت آدم نے فرداً فرداً سب کے نام اور خصوصیات بیان فرما دیں، جس سے ثابت ہوا کہ علم کی فضیلت ہر مرتبے پر مقدم ہے۔",
        "اس کے بعد اللہ تعالیٰ نے تمام فرشتوں کو حکم دیا کہ آدم کے آگے سجدۂ تعظیم بجا لاؤ۔ تمام فرشتوں نے فوراً سر بسجود ہو کر حکم مانا، مگر ابلیس نے تکبر اور حسد کی بنا پر انکار کر دیا۔ اس نے غرور سے کہا: 'میں اس سے بہتر ہوں، تو نے مجھے آگ سے پیدا کیا اور اسے مٹی سے بنایا۔' اس سرکشی پر ابلیس پر لعنت برسی اور وہ جنت سے نکال دیا گیا، جس کے بعد اس نے قیامت تک انسان کو بہکانے کی قسم کھائی۔",
        "حضرت آدم اور بی بی حوا کو جنت کی پرسکون فضاؤں میں رہنے کا حکم ملا، جہاں ہر نعمت ان کے لیے حلال تھی سوائے ایک مخصوص درخت کے جس کے قریب جانے سے منع کیا گیا۔ شیطان نے قسمیں کھا کر ان کے دل میں وسوسہ ڈالا کہ اس درخت کا پھل کھانے سے تم ہمیشہ کے لیے فرشتے بن جاؤ گے، جس پر بھول چوک میں ان سے لغزش سرزد ہو گئی۔",
        "شیطان کی طرح سرکشی اور تکبر کرنے کے بجائے، حضرت آدم اور بی بی حوا کے دل تڑپ اٹھے اور آنکھوں سے ندامت کے آنسو جاری ہو گئے۔ انہوں نے بارگاہِ الٰہی میں توبہ کی عظیم دعا مانگی: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ' (اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا، اگر تو نے ہمیں معاف نہ فرمایا اور ہم پر رحم نہ کیا تو یقیناً ہم نقصان اٹھانے والوں میں ہو جائیں گے)۔ اللہ غفور الرحیم نے ان کی سچی توبہ قبول فرما لی۔",
        "پھر اللہ تعالیٰ نے حضرت آدم اور حوا کو زمین پر خلیفہ بنا کر بھیجا۔ زمین پر آپ نے کعبۃ اللہ کی تعمیر فرمائی، زراعت اور دستکاری سکھائی، اپنی اولاد کو توحید اور حلال و حرام کے احکام بتائے۔ قابیل کے ہاتھوں ہابیل کے قتل پر صبرِ جمیل فرمایا اور تقریباً ایک ہزار سال تک انسانیت کی رہنمائی فرماتے ہوئے سچے نبی کی حیثیت سے پردہ فرمایا۔"
      ],
      "ar": [
        "بدأ خلق الإنسان بإعلان إلهي مهيب للملائكة: ﴿إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً﴾. استفسر الملائكة تسبيحاً وتنزيهاً عن حكمة خلق من يفسد ويسفك الدماء، فقال العليم الحكيم: ﴿إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ﴾ (البقرة: 30).",
        "قبض الله قبضة من جميع الأرض، فجاء بنو آدم على قدر الأرض في ألوانهم وطباعهم؛ فمنهم الأحمر والأبيض والأسود والسهل والحزن. سوّاه الله بيديه الكريمتين من طين لازب ثم صلصال كالفخار، ونفخ فيه من روحه، فلما سرت الروح في جسده عطس فقال: 'الحمد لله'، فقال له ربه: 'يرحمك ربك يا آدم'.",
        "أظهر الله فضل آدم ومكانة العلم بأن علمه الأسماء كلها لجميع المخلوقات. فلما عجزت الملائكة عن بيانها قائلين: ﴿سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ﴾، أنبأهم آدم بأسمائها وأسرارها، فكان العلم أول وسام شرف قلد به الإنسان.",
        "أمر الله ملائكته بالسجود لآدم تكريماً وإجلالاً لأمر الخالق، فسجدوا جميعاً طائعين إلا إبليس، استكبر ودفعه الحسد الأعمى قائلاً: ﴿أَنَا خَيْرٌ مِنْهُ خَلَقْتَنِي مِنْ نَارٍ وَخَلَقْتَهُ مِنْ طِينٍ﴾. فطرده الله من رحمته وجعله رجيماً، فأقسم إبليس على إغواء بني آدم إلى يوم القيامة.",
        "أسكن الله آدم وزوجته حواء الجنة يتنعمان برغدها، وحرم عليهما شجرة واحدة امتحاناً. فوسوس لهما الشيطان وقاسمهما بالله إنه لهما لمن الناصحين، فأكلا منها فبدت لهما سوءاتهما وطفقا يخصفان عليهما من ورق الجنة.",
        "أسرع آدم وحواء بالانكسار والتوبة النصوح، متضرعين بالدعاء الخالد: ﴿رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ﴾ (الأعراف: 23). فتاب الله عليهما واجتباهما وهداهما.",
        "هبط آدم وحواء إلى الأرض لا عقاباً بل تحقيقاً للمقصد الإلهي في الاستخلاف والتعمير. علّم آدم ذريته التوحيد الصافي والعمل الصالح، وبنى بيت الله المحرم، وصبر على ابتلاء قتل قابيل لهابيل، وظل نبياً هادياً لأولاده حتى وفاته بعد عمر مبارك قارب ألف عام."
      ]
    },
    "keyLessons": {
      "en": [
        "Heartfelt repentance (Tawbah) wipes away sins and elevates a servant close to Allah.",
        "Knowledge and intellectual pursuit are divine trusts that elevate mankind.",
        "Arrogance and racism (as exhibited by Iblis) lead to eternal ruin."
      ],
      "ur": [
        "سچے دل سے توبہ اور ندامت ہر گناہ کو مٹا کر انسان کو قربِ الٰہی عطا کرتی ہے۔",
        "علم اور فہم وہ الٰہی امانت ہے جو انسان کو فرشتوں پر بھی فضیلت بخشتی ہے۔",
        "تکبر اور نسلی برتری کا گھمنڈ (جو ابلیس نے کیا) ہمیشہ ذلت اور ہلاکت کا باعث بنتا ہے۔"
      ],
      "ar": [
        "التوبة الصادقة والاعتراف بالذنب يمحوان الخطيئة ويرفعان العبد إلى محبة الله.",
        "شرف العلم هو الميزة الكبرى التي فضل الله بها بني آدم على سائر المخلوقات.",
        "الكبر والتعالي هما أصل كل شر وهلاك في الدنيا والآخرة."
      ]
    }
  },
  {
    "id": "idris",
    "order": 2,
    "nameEn": "Idris (A.S.)",
    "nameUr": "حضرت ادریس (ع)",
    "nameAr": "إدريس عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Pioneer of Wisdom & The Sacred Pen",
    "titleUr": "صاحبِ حکمت اور علم و قلم کے بانی",
    "titleAr": "الصديق النبي وذو المكانة العلية",
    "image": "/stories/covers/idris-v2.webp",
    "quranMention": "Surah Maryam: 'And We raised him to an exalted station'",
    "summaryEn": "Celebrated for unmatched devotion, wisdom, and scholarship. Tradition records he was the first human to write with a reed pen, tailor cloth, and map the celestial heavens in worship of the Creator.",
    "summaryUr": "آپ کثرتِ عبادت، حکمت اور معرفت کے لیے مشہور تھے۔ روایت ہے کہ آپ نے سب سے پہلے قلم سے لکھا، کپڑے سی کر پہنے اور علمِ فلکیات و توحید کی بنیاد رکھی۔",
    "summaryAr": "أثنى الله عليه في محكم التنزيل بالصدق والنبوة ورفعه مكاناً علياً. كان أول من خط بالقلم وخاط الثياب وعلم الناس الحكمة والتوحيد.",
    "fullStory": {
      "en": [
        "Generations after Adam, mankind began to slip into forgetfulness and corrupt customs. To rekindle the torch of divine monotheism, Allah raised Prophet Idris (identified in ancient chronicles as Enoch), the great-grandfather of Nuh. Allah honored him in the Quran with luminous praise: 'And mention in the Book, Idris. Indeed, he was a man of truth and a prophet. And We raised him to an exalted station.' (Surah Maryam 19:56-57).",
        "Prophet Idris was a visionary polymath of prophetic history. Classical scholars including Ibn Kathir record that he was the very first person on Earth to write with a reed pen, laying the sacred foundation of written revelation, literacy, and human scholarship. Before him, men wore rough animal skins; Idris was inspired with the craft of spinning thread, weaving fabric, and sewing fitted garments.",
        "His physical labor was perpetually intertwined with profound spiritual mindfulness. It is narrated that whenever Idris pushed his needle into the cloth, he praised Allah ('SubhanAllah'), and whenever he pulled it out, he gave thanks ('Alhamdulillah'). Not a single moment of his working day passed without the remembrance of his Creator.",
        "Idris was also blessed with deep knowledge of celestial astronomy, mathematics, and the division of seasons. He taught his people that the intricate orbits of the stars and the precision of the cosmos were majestic signs pointing toward the absolute oneness of the Supreme Architect of the Universe.",
        "Faced with communities drifting into immorality and the worship of false idols, Idris confronted evil with unwavering courage. He warned against the temptations of this fleeting world, instituted regular fasting, established congregational prayers, and commanded strict justice and kindness toward the destitute and vulnerable.",
        "Because of his unblemished truthfulness, intense worship, and immense service to humanity, Allah exalted his rank above the heavens. Prophet Muhammad (S.A.W.) met Prophet Idris in the fourth heaven during the miraculous journey of Al-Isra wal-Mi'raj, where Idris greeted the Final Messenger with profound warmth as a righteous brother and prophet."
      ],
      "ur": [
        "حضرت آدم علیہ السلام کے بعد کی صدیوں میں جب لوگ غفلت اور گمراہی کے اندھیروں میں بھٹکنے لگے، تو اللہ تعالیٰ نے حضرت ادریس علیہ السلام کو مبعوث فرمایا۔ آپ حضرت نوح علیہ السلام کے پردادا تھے۔ قرآنِ مجید میں اللہ نے آپ کی تعریف کرتے ہوئے ارشاد فرمایا: 'اور اس کتاب میں ادریس کا ذکر کرو، بیشک وہ سچے نبی تھے اور ہم نے انہیں ایک بلند مقام پر اٹھایا۔' (سورۃ مریم)",
        "حضرت ادریس علیہ السلام کو تاریخِ انسانی میں علم اور تہذیب کا بانی مانا جاتا ہے۔ امام ابن کثیر کے مطابق، آپ وہ پہلے انسان تھے جنہوں نے قلم کے ذریعے تحریر کا آغاز کیا اور علم و حکمت کو محفوظ کیا۔ آپ سے قبل انسان جانوروں کی کھالیں پہنتے تھے، آپ نے سب سے پہلے کپڑا بننے، سینے اور باوقار لباس پہننے کا رواج ڈالا۔",
        "آپ کا ہر عمل ذکرِ الٰہی سے معطر تھا۔ روایت ہے کہ جب بھی آپ سوئی کپڑے میں داخل فرماتے تو زبان پر 'سبحان اللہ' ہوتا اور جب سوئی باہر نکالتے تو 'الحمد للہ' فرماتے۔ آپ کی زندگی کا کوئی بھی لمحہ یادِ الٰہی سے خالی نہ گزرتا تھا۔",
        "اللہ تعالیٰ نے آپ کو علمِ فلکیات، ستاروں کی گردش اور حساب و کتاب کی گہری بصیرت عطا فرمائی تھی۔ آپ نے اپنی قوم کو سمجھایا کہ سورج، چاند اور کہکشاؤں کا یہ بے عیب نظام اس بات کا واضح ثبوت ہے کہ اس کائنات کا خالق و مالک صرف اور صرف ایک اللہ ہے۔",
        "جب قابیل کی اولاد اور آس پاس کے قبیلوں میں گناہ اور فحاشی پھیلنے لگی، تو آپ نے انتہائی بہادری کے ساتھ حق کی آواز بلند کی۔ آپ نے لوگوں کو شرک چھوڑنے، نماز قائم کرنے، باقاعدہ روزے رکھنے اور مسکینوں و بیواؤں کی مدد کرنے کی تلقین فرمائی۔",
        "آپ کے بے مثال تقویٰ اور سچائی کی بدولت اللہ تعالیٰ نے آپ کو وہ رفعت بخشی جس کا ذکر قرآن میں فرمایا گیا ہے۔ شبِ معراج میں ہمارے پیارے نبی حضرت محمد مصطفیٰ ﷺ نے چوتھے آسمان پر حضرت ادریس علیہ السلام سے ملاقات فرمائی، جہاں انہوں نے حضور ﷺ کو 'صالح بھائی اور صالح نبی' کہہ کر خوش آمدید کہا۔"
      ],
      "ar": [
        "تتابعت القرون بعد وفاة آدم عليه السلام، وبدأت الغفلة تدب في النفوس، فبعث الله إدريس عليه السلام مجدداً لراية التوحيد، وهو جد نوح عليهما السلام. خلد الله ذكره العاطر في القرآن الكريم فقال: ﴿وَاذْكُرْ فِي الْكِتَابِ إِدْرِيسَ إِنَّهُ كَانَ صِدِّيقاً نَبِيّاً * وَرَفَعْنَاهُ مَكَاناً عَلِيّاً﴾ (مريم: 56-57).",
        "كان إدريس عليه السلام رائد الحضارة الإنسانية والعلمية في عصره؛ وثق المؤرخون وابن كثير أنه أول من خط بالقلم وكتب به الحكمة والكتب المنزلة، وأول من خاط الثياب بعد أن كان الناس يرتدون جلود الأنعام، فجمع بين شرف النبوة وإتقان الصنعة.",
        "كانت عبادته ممزوجة بحركاته وسكناته، فكان لا يغرز إبرته في الثوب إلا قال: 'سبحان الله'، ولا يخرجها إلا قال: 'الحمد لله'، فلا يبيت أحد من أهل الأرض أكثر عملاً صالحاً منه ولا أصدق لهجة.",
        "آتاه الله علماً عميقاً بحركات الفلك والنجوم ومواقيت الزمان، فاستدل بها على عظمة الخالق ووحدانيته، ودعا قومه إلى نبذ عبادة الأوثان والزهد في زخارف الدنيا الفانية، وأمرهم بالعدل، وإقام الصلاة، وصيام الأيام المباركة، والصدقة على المساكين.",
        "وقف إدريس عليه السلام كالجبل الأشم أمام مفسدي عصره، وجاهد في الله حق جهاده حتى رفعه الله مكاناً علياً تكريماً لصدقه وتفانيه.",
        "وفي ليلة الإسراء والمعراج الشريفة، التقى النبي محمد ﷺ بإدريس عليه السلام في السماء الرابعة، فرحب به قائلاً: 'مرحباً بالأخ الصالح والنبي الصالح'."
      ]
    },
    "keyLessons": {
      "en": [
        "True knowledge, reading, and writing are sacred gifts meant to be utilized for divine truth.",
        "Consistent Dhikr (remembrance of Allah) can seamlessly transform every daily chore into worship.",
        "Piety and truthfulness elevate a servant's status in this world and the highest heavens."
      ],
      "ur": [
        "علم، قلم اور تحریر وہ پاکیزہ نعمتیں ہیں جن کا اصل مقصد حق کی خدمت اور ترویج ہے۔",
        "روزمرہ کی محنت اور پیشے کے دوران اللہ کا ذکر انسان کے ہر کام کو عبادت بنا دیتا ہے۔",
        "سچائی اور تقویٰ انسان کو بارگاہِ الٰہی میں بلند ترین درجات پر فائز کرتے ہیں۔"
      ],
      "ar": [
        "القلم والعلم هما أمانة مقدسة وظيفتها الأولى نشر الحق وبناء المجتمعات.",
        "ذكر الله الدائم أثناء العمل يحول العادات والصنائع إلى عبادات وأجور مضاعفة.",
        "علو المنزلة عند الله ثمرة الصدق الخالص والجهاد المستمر في سبيله."
      ]
    }
  },
  {
    "id": "nuh",
    "order": 3,
    "nameEn": "Nuh (A.S.)",
    "nameUr": "حضرت نوح (ع)",
    "nameAr": "نوح عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Resolute Ark-Builder & The Second Adam",
    "titleUr": "شیخ الانبیاء اور سفینۂ نجات کے بانی",
    "titleAr": "شيخ الأنبياء وصاحب السفينة",
    "image": "/stories/covers/nuh-v2.webp",
    "quranMention": "Mentioned 43 times and commemorated with an entire Surah (Surah Nuh)",
    "summaryEn": "For 950 years, Prophet Nuh called his idol-worshipping people with patient devotion. Commanded by Allah, he built the Ark on dry desert land, preserving human life and pure monotheism through the Great Deluge.",
    "summaryUr": "آپ نے 950 سال تک شب و روز اپنی قوم کو توحید کی دعوت دی۔ اللہ کے حکم سے خشکی پر عظیم کشتی تیار فرمائی اور تاریخی طوفانِ نوح سے اہل ایمان اور نسلِ انسانی کو بچایا۔",
    "summaryAr": "لبث في قومه يدعوهم ألف سنة إلا خمسين عاماً بصبر لا ينفد. أمره الله بصنع الفلك في أرض يابسة، فنجى الله به المؤمنين من الطوفان العظيم لتبدأ الإنسانية عهداً جديداً.",
    "fullStory": {
      "en": [
        "Centuries after Idris, the insidious disease of idol worship entered human history for the first time. Righteous men named Wadd, Suwa', Yaghuth, Ya'uq, and Nasr had passed away, and Satan whispered to the people to erect statues in their honor to remember their piety. Generations later, the original intent was forgotten, and people began worshipping the statues as gods alongside Allah.",
        "To save mankind from this profound abyss, Allah commissioned Prophet Nuh (Noah), blessing him with towering resolve. Nuh began his monumental mission, calling his people day and night, openly and in private: 'O my people, worship Allah; you have no deity other than Him. Indeed, I fear for you the punishment of a tremendous Day.' (Surah Al-A'raf 7:59).",
        "For nearly an entire millennium—950 years—Nuh persevered through unimaginable rejection. Whenever he called them to forgiveness, they thrust their fingers into their ears, drew their cloaks over their faces, and hardened their arrogance. The arrogant chieftains ridiculed him, saying only the poor, the laborers, and the meek followed him.",
        "When divine wisdom decreed that no more of his people would believe, Allah commanded Nuh to construct a massive wooden Ark (*Al-Fulk*) under direct divine revelation: 'And construct the ship under Our observation and Our inspiration and do not address Me concerning those who have wronged; indeed, they are to be drowned.' (Surah Hud 11:37).",
        "Nuh began building the titanic ship in the middle of a dry, landlocked desert. Day after day, chieftains passed by laughing mockingly: 'O Nuh! Have you abandoned prophethood to become a desert carpenter?' Nuh replied calmly: 'If you mock us now, we will mock you just as you mock.'",
        "The hour of divine retribution struck: 'the oven gushed forth water' (*Fara At-Tannur*), the floodgates of heaven opened with torrents of unprecedented rain, and the earth fractured, erupting with raging geysers. Nuh loaded his family, the small band of faithful believers, and a mating pair of every living creature aboard the Ark.",
        "As waves like towering mountains tossed the vessel, Nuh saw his disbelieving son, Yam (Kan'an), isolated and clinging to high ground. With a father's bleeding heart, Nuh cried: 'O my son, embark with us and do not be with the disbelievers!' But the arrogant boy replied: 'I will seek refuge on a mountain to protect me from the water.' Nuh warned: 'There is no protector today from the decree of Allah except for whom He gives mercy.' Before his eyes, a violent surge swallowed his son.",
        "The deluge wiped clean the tyranny and idolatry of the earth. When the command was given: 'O earth, swallow your water, and O sky, withhold your rain,' the waters subsided, and the Ark rested peacefully upon Mount Judi. Prophet Nuh stepped onto the renewed earth with peace and blessings, earning his revered status as 'The Second Father of Mankind'."
      ],
      "ur": [
        "حضرت ادریس علیہ السلام کے بعد انسانی تاریخ میں پہلی بار بت پرستی کی لعنت نے جنم لیا۔ قوم میں کچھ انتہائی نیک اور صالح لوگ گزرے تھے جن کے نام ود، سواع، یغوث، یعوق اور نسر تھے۔ ان کے انتقال کے بعد شیطان نے لوگوں کے دلوں میں وسوسہ ڈالا کہ ان کی یاد میں مورتیاں بنا کر رکھو تاکہ ان کی نیکی یاد رہے۔ رفتہ رفتہ اگلی نسلوں نے ان بتوں کی پوجا شروع کر دی۔",
        "اس اندھیرے کو مٹانے کے لیے اللہ تعالیٰ نے حضرت نوح علیہ السلام کو نبوت عطا فرمائی۔ آپ نے کمالِ استقامت کے ساتھ تبلیغ کا آغاز کیا اور اپنی قوم سے فرمایا: 'اے میری قوم! اللہ کی بندگی کرو، اس کے سوا تمہارا کوئی معبود نہیں، مجھے تم پر ایک بڑے دن کے عذاب کا خوف ہے۔' (سورۃ الاعراف)",
        "حضرت نوح علیہ السلام نے پورے 950 سال تک اپنی قوم کو رات اور دن، خلوت اور جلوت میں توحید کی طرف بلایا۔ مگر وہ سرکش قوم جب بھی آپ کی پکار سنتی، اپنی انگلیاں کانوں میں ٹھونس لیتی، کپڑوں سے منہ چھپا لیتی اور تکبر پر اڑ جاتی۔ قوم کے متکبر سردار آپ کا مذاق اڑاتے اور کہتے کہ آپ کے پیچھے تو صرف غریب، مسکین اور نچلے طبقے کے لوگ ہیں۔",
        "جب اللہ کی طرف سے وحی آئی کہ جو ایمان لا چکے ان کے سوا اب کوئی ایمان نہیں لائے گا، تو اللہ نے حضرت نوح کو ایک عظیم الشان کشتی (سفینہ) بنانے کا حکم دیا: 'اور ہماری آنکھوں کے سامنے اور ہماری وحی کے مطابق کشتی بناؤ، اور ظالموں کے بارے میں مجھ سے کوئی بات نہ کرو، وہ سب غرق ہونے والے ہیں۔' (سورۃ ہود)",
        "حضرت نوح علیہ السلام نے بنجر صحرا اور سمندر سے دور بیابان میں لکڑیوں سے اتنی بڑی کشتی تیار کرنا شروع کی جس کی مثال نہ تھی۔ کافر سردار جب بھی ادھر سے گزرتے تو قہقہے لگا کر مذاق اڑاتے کہ کل تک نبی بنتے تھے، اب لکڑہارے اور بڑھئی بن گئے ہو۔ آپ فرماتے: اگر آج تم ہم پر ہنستے ہو، تو ایک دن ہم تم پر ہنسیں گے جیسے تم ہنستے ہو۔",
        "بالآخر عذاب کا وقت آ گیا، تنور سے پانی ابل پڑا، آسمان کے دہانے موسلادھار بارش کے ساتھ کھل گئے اور زمین کے سینے سے طوفانی چشمے پھوٹ پڑے۔ حضرت نوح علیہ السلام نے تمام مومنین اور ہر جاندار کے جوڑے کو کشتی میں سوار کر لیا۔",
        "پہاڑوں جیسی اونچی موجوں کے درمیان حضرت نوح نے اپنے نافرمان بیٹے کنعان کو کنارے کھڑا دیکھا تو باپ کی محبت تڑپ اٹھی، پکارا: 'اے میرے پیارے بیٹے! ہمارے ساتھ سوار ہو جا اور کافروں کا ساتھ نہ دے!' مگر بدبخت بیٹے نے مغرور ہو کر کہا: 'میں کسی اونچے پہاڑ پر پناہ لے لوں گا جو مجھے پانی سے بچا لے گا۔' آپ نے فرمایا: 'آج اللہ کے عذاب سے کوئی بچانے والا نہیں مگر جس پر وہ خود رحم فرمائے۔' اتنے میں ایک سرکش موج آئی اور بیٹا باپ کے سامنے غرق ہو گیا۔",
        "طوفان نے روئے زمین سے شرک اور ظلم کا نام و نشان مٹا دیا۔ جب حکمِ الٰہی ہوا: 'اے زمین اپنا پانی نگل لے اور اے آسمان تھم جا'، تو طوفان تھم گیا اور کشتی جودی پہاڑ پر جا ٹھہری۔ حضرت نوح علیہ السلام سلامت اور برکت کے ساتھ زمین پر اترے اور آپ کو 'آدمِ ثانی' کا لقب ملا۔"
      ],
      "ar": [
        "بعد قرون من وفاة إدريس عليه السلام، عرفت البشرية الشرك لأول مرة؛ مات رجال صالحون هم (ود، وسواع، ويغوث، ويعوق، ونسر)، فوسوس إبليس لقومهم بنصب تماثيل لهم تخليداً لذكراهم، حتى إذا هلك ذلك الجيل عُبدت تلك الأصنام من دون الله.",
        "بعث الله نوحاً عليه السلام حاملاً لواء التوحيد النقي، فقام في قومه ناصحاً مشفقاً: ﴿يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ﴾ (الأعراف: 59).",
        "ظل نوح عليه السلام يدعو قومه ليلاً ونهاراً، وسراً وجهاراً، طوال 950 عاماً صابراً محتسباً، فما زادهم دعاؤه إلا فراراً؛ جعلوا أصابعهم في آذانهم واستغشوا ثيابهم وأصروا واستكبروا استكباراً، وكان أشرافهم يسخرون منه لاتباع الفقراء والضعفاء له.",
        "أوحى الله إلى نوح أنه لن يؤمن من قومك إلا من قد آمن، وأمره بصناعة سفينة عملاقة بأمر السماء: ﴿وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَاطِبْنِي فِي الَّذِينَ ظَلَمُوا إِنَّهُمْ مُغْرَقُونَ﴾ (هود: 37).",
        "شرع نوح في غرس الأشجار وصناعة السفينة في أرض قاحلة بعيدة عن أي بحر، فكان كلما مر عليه ملأ من قومه سخروا منه، فيرد بيقين الواثق بنصر الله: ﴿إِنْ تَسْخَرُوا مِنَّا فَإِنَّا نَسْخَرُ مِنْكُمْ كَمَا تَسْخَرُونَ﴾.",
        "جاء الوعد الحق وفار التنور، وانفتحت أبواب السماء بماء منهمر وتفجرت الأرض عيوناً فالتقى الماء على أمر قد قُدر، وحمل نوح في سفينته المؤمنين ومن كل زوجين اثنين من الحيوانات لحفظ النسل.",
        "في خضم الطوفان الهائل وأمواجه كالجبال، رأى نوح ابنه يام (كنعان) معتزلاً، فناداه بقلب الأب الحنون: ﴿يَا بُنَيَّ ارْكَبْ مَعَنَا وَلَا تَكُنْ مَعَ الْكَافِرِينَ﴾، لكن عزة الإثم أردت الشاب فقال سآوي إلى جبل يعصمني من الماء، فحالت بينهما موجة فكان من المغرقين.",
        "ابتلع الطوفان طواغيت الأرض، وقيل يا أرض ابلعي ماءك ويا سماء أقلعي وغيض الماء واستوت السفينة على جبل الجودي، ونزل نوح عليه السلام بسلام وبركات ليكون الأب الثاني للبشرية جمعاء."
      ]
    },
    "keyLessons": {
      "en": [
        "Unshakeable patience (Sabr) in calling to truth, even across centuries of fierce resistance.",
        "Bloodline and family lineage cannot save a person without genuine faith and righteousness.",
        "Divine aid always rescues the humble and steadfast believers against impossible odds."
      ],
      "ur": [
        "حق کی راہ میں بے مثال صبر و استقامت، چاہے صدیوں تک مخالفت کا سامنا کرنا پڑے۔",
        "سچے ایمان اور عملِ صالح کے بغیر خاندانی رشتہ یا نسب انسان کو اللہ کی پکڑ سے نہیں بچا سکتا۔",
        "اللہ کی نصرت اور مدد ہمیشہ عاجز اور ثابت قدم مومنین کے ساتھ ہوتی ہے۔"
      ],
      "ar": [
        "الصبر والثبات العظيم في الدعوة إلى الله ولو امتدت العقود والقرون دون يأس.",
        "النسب والقرابة لا ينفعان العبد إذا ضيع الإيمان وبارز الله بالعصيان.",
        "نصر الله وتأييده محتومان لأهل الصدق والاستقامة مهما استكبر الطغاة."
      ]
    }
  },
  {
    "id": "hud",
    "order": 4,
    "nameEn": "Hud (A.S.)",
    "nameUr": "حضرت ہود (ع)",
    "nameAr": "هود عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Prophet of Resilience & The Fall of 'Ad",
    "titleUr": "قومِ عاد کے نڈر پیغمبر اور پیکرِ استقامت",
    "titleAr": "نبي الصبر ورسول قوم عاد",
    "image": "/stories/covers/hud-v2.webp",
    "quranMention": "Mentioned 25 times and honored with Surah Hud in the Holy Quran",
    "summaryEn": "Dispatched to the towering giants of 'Ad in the sand dunes of Al-Ahqaf. When they boasted of their invincible physical power, a freezing seven-night gale destroyed their tyrannical civilization.",
    "summaryUr": "آپ کو احقاف کی ریتلی وادیوں میں قومِ عاد کی طرف بھیجا گیا جو اپنے دیو ہیکل قد کاٹھ اور مضبوط محلات پر نازاں تھی۔ ان کی سرکشی پر سات راتوں کے خوفناک طوفانی جھکڑوں نے انہیں نیست و نابود کر دیا۔",
    "summaryAr": "أرسله الله إلى قوم عاد العمالقة في رمال الأحقاف، وكانوا ذوي قوة وأجسام فارعة وبنوا إرم ذات العماد، فلما عتوا عن أمر ربهم أهلكهم الله بريح صرصر عاتية.",
    "fullStory": {
      "en": [
        "After the flood of Nuh, the human family expanded and settled across Arabia. Among the most prosperous of these ancient nations was the people of 'Ad, who established their civilization in Al-Ahqaf (the sprawling dunes between Yemen and Oman). They built magnificent fortified mansions with soaring columns, known in the Quran as 'Iram of the pillars, the likes of which had never been created in the land' (Surah Al-Fajr 89:7-8).",
        "Allah endowed the men of 'Ad with astounding physical size, towering stature, and unrivaled muscular power. However, instead of offering gratitude to the One who gave them strength, they succumbed to haughty tyranny, enslaving weaker tribes and worshipping stone idols named Samud and Haba.",
        "To steer them back from destruction, Allah raised from among their most noble lineages Prophet Hud (A.S.). Hud was known for his gentle speech, towering integrity, and fearless commitment to truth. He addressed them with earnest warmth: 'O my people, worship Allah; you have no deity other than Him. Will you not fear Him?' (Surah Al-A'raf 7:65).",
        "Hud challenged their materialistic worldview: 'Do you build on every elevation a monument just for amusement, and take for yourselves palaces as if you will live forever? And when you strike, you strike like tyrants?' But the pride of 'Ad was blinding. They boasted: 'Who is mightier than us in strength?' and mocked Hud as a foolish madman.",
        "Despite their threats, Hud stood alone before their mighty assembly with unyielding tawakkul (trust in Allah): 'Indeed, I hold Allah as witness, and you bear witness that I am free from whatever you associate with Him... I have relied upon Allah, my Lord and your Lord.' (Surah Hud 11:54-56).",
        "When divine punishment was decreed, a crushing three-year drought parched their lush agricultural gardens. Desperate for relief, the chiefs looked toward the horizon and saw dense, billowing black clouds gathering. They rejoiced foolishly: 'This is a cloud bringing us rain!' But Hud warned solemnly: 'No, it is that which you were seeking to hasten—a wind wherein is a painful torment!' (Surah Al-Ahqaf 46:24).",
        "The howling tempest struck—a freezing, roaring furious gale (*Reehun Sarsaran 'Atiyah*) that Allah unleashed upon them for seven consecutive nights and eight days. The wind ripped men from their feet like uprooted hollow trunks of date-palms, smashing their fortresses to dust. Prophet Hud and the humble believers were shielded in safety by divine mercy, relocating to Hadramawt where Hud lived peacefully, teaching the timeless lesson that no earthly muscle can challenge the Almighty."
      ],
      "ur": [
        "طوفانِ نوح کے بعد انسانوں کی نسل پھیلی تو جزیرہ نما عرب میں ایک انتہائی طاقتور اور خوشحال قوم آباد ہوئی جسے قومِ عاد کہا جاتا ہے۔ یہ قوم یمن اور عمان کے درمیانی ریتلے ٹیلوں والے علاقے 'احقاف' میں رہتی تھی۔ انہوں نے بلند و بالا ستونوں والے وہ تاریخی محلات تعمیر کیے جنہیں قرآن میں 'إِرَمَ ذَاتِ الْعِمَادِ' (ایسے ستونوں والا ارم جس کی مانند شہروں میں کوئی نہیں بنا) کہا گیا۔",
        "اللہ تعالیٰ نے قومِ عاد کے لوگوں کو بے پناہ جسمانی طاقت، طویل قد کاٹھ اور مضبوط ڈیل ڈول عطا فرمایا تھا۔ مگر اس نعمت کی شکر گزاری کے بجائے وہ سرکش اور ظالم ہو گئے۔ وہ کمزوروں پر ظلم ڈھاتے، پڑوسی بستیوں کو لوٹتے اور مٹی و پتھر کے خود ساختہ بتوں کی پوجا کرتے تھے۔",
        "ان کی اصلاح کے لیے اللہ تعالیٰ نے انہی کے ایک معزز گھرانے سے حضرت ہود علیہ السلام کو مبعوث فرمایا۔ آپ نے نہایت شفقت اور دلسوزی سے فرمایا: 'اے میری قوم! اللہ کی عبادت کرو، اس کے سوا تمہارا کوئی معبود نہیں، کیا تم اس کا خوف نہیں رکھتے؟' (سورۃ الاعراف)",
        "حضرت ہود نے ان کی مادہ پرستی پر چوٹ کی: 'کیا تم ہر اونچے مقام پر یادگار عمارتیں محض کھیل تماشے کے لیے بناتے ہو؟ اور ایسے مضبوط محلات بناتے ہو جیسے تمہیں ہمیشہ یہیں رہنا ہے؟ اور جب کسی پر ہاتھ ڈالتے ہو تو ظالم بن کر ٹوٹ پڑتے ہو؟' مگر قومِ عاد کو اپنی جسمانی طاقت پر اتنا گھمنڈ تھا کہ انہوں نے فخر سے کہا: 'کون ہے طاقت میں ہم سے زیادہ؟' اور حضرت ہود کو بے وقوف اور دیوانہ قرار دیا۔",
        "ان کی دھمکیوں کے جواب میں حضرت ہود علیہ السلام تن تنہا ان کے سامنے پہاڑ کی طرح ڈٹ گئے اور فرمایا: 'میں اللہ کو گواہ بناتا ہوں اور تم بھی گواہ رہو کہ جن کو تم شریک ٹھہراتے ہو میں ان سے بری ہوں۔ تم سب مل کر میرے خلاف جو تدبیر کرنی ہے کر لو اور مجھے ذرا مہلت نہ دو۔ میرا بھروسہ صرف میرے اور تمہارے رب اللہ پر ہے۔'",
        "جب عذاب کا وقت قریب آیا تو تین سال تک ان کے سرسبز باغات اور کھیت بارش کو ترس گئے۔ بالآخر ایک دن آسمان پر کالی گھٹائیں امڈتی نظر آئیں تو وہ نا سمجھ خوشی سے جھوم اٹھے کہ 'یہ بادل ہمیں بارش دینے والا ہے!' مگر حضرت ہود نے فرمایا: 'نہیں! یہ وہ عذاب ہے جس کی تم جلدی مچاتے تھے، یہ وہ آندھی ہے جس میں دردناک عذاب چھپا ہوا ہے۔'",
        "پھر ایک ایسی تیز، برفانی اور چیختی ہوئی آندھی چلی جس نے مسلسل سات راتیں اور آٹھ دن ان پر قیامت ڈھا دی۔ یہ خوفناک بگولے انسانوں کو زمین سے اٹھا کر یوں پٹخ رہے تھے جیسے کھجور کے کھوکھلے تنے کٹ کر گرے ہوں۔ ان کے مضبوط ترین محلات ملبے کا ڈھیر بن گئے۔ حضرت ہود علیہ السلام اور اہل ایمان کو اللہ نے محفوظ رکھا اور وہ حضرموت تشریف لے گئے جہاں آپ نے بقیہ زندگی گزاری۔"
      ],
      "ar": [
        "اتسعت رقعة البشرية بعد الطوفان، ونشأت في جنوب الجزيرة العربية أقوى حضارة عرفها ذلك العصر؛ إنهم قوم عاد في وادي الأحقاف بين عمان وحضرموت. أشادوا القصور المنيفة ذات الأعمدة العظيمة التي خلدها القرآن: ﴿إِرَمَ ذَاتِ الْعِمَادِ * الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ﴾ (الفجر: 7-8).",
        "آتاهم الله بسطة خارقة في الخلق وأجساداً جبارة، فبدلاً من شكر النعمة طغوا في البلاد وظلموا العباد، وعبدوا أصناماً حجارة، واستكبروا قائلين: ﴿مَنْ أَشَدُّ مِنَّا قُوَّةً﴾.",
        "بعث الله فيهم هوداً عليه السلام، وهو من أوسطهم نسباً وأصدقهم لهجة، فدعاهم بلين وحرص: ﴿يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ أَفَلَا تَتَّقُونَ﴾.",
        "عاتبهم هود على ترفهم وبطشهم: ﴿أَتَبْنُونَ بِكُلِّ رِيعٍ آيَةً تَعْبَثُونَ * وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ * وَإِذَا بَطَشْتُمْ بَطَشْتُمْ جَبَّارِينَ﴾. فردوا عليه بالسخرية والاستهزاء ورموه بالسفاهة والجنون.",
        "وقف هود عليه السلام وحيداً في وجه طغيانهم متوكلاً على الحي الذي لا يموت، قائلاً: ﴿إِنِّي أُشْهِدُ اللَّهَ وَاشْهَدُوا أَنِّي بَرِيءٌ مِمَّا تُشْرِكُونَ * مِنْ دُونِهِ فَكِيدُونِي جَمِيعاً ثُمَّ لَا تُنْظِرُونِ * إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُمْ﴾ (هود: 54-56).",
        "حبس الله عنهم المطر ثلاث سنين حتى أجهدهم القحط، ثم ساق إليهم سحاباً أسود فاستبشروا فرحاً: ﴿هَذَا عَارِضٌ مُمْطِرُنَا﴾، فأجابهم هود: ﴿بَلْ هُوَ مَا اسْتَعْجَلْتُمْ بِهِ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ﴾ (الأحقاف: 24).",
        "عصفت بهم ريح صرصر عاتية، سخرها الله عليهم سبع ليال وثمانية أيام حسوماً، كانت تقتلع الرجل من مكانه وتلقيه على أم رأسه فتدق عنقه كأنه جذع نخلة خاوية. دُمرت عاد عن بكرة أبيها، ونجى الله هوداً والذين آمنوا برحمة منه ليعيشوا في سلام."
      ]
    },
    "keyLessons": {
      "en": [
        "Physical prowess and technological architecture mean nothing without spiritual righteousness.",
        "Tawakkul (reliance upon Allah) makes a single believer bolder than the fiercest empires.",
        "Blessings must inspire humility and gratitude, not arrogance and oppression of the weak."
      ],
      "ur": [
        "روحانی پاکیزگی اور ایمان کے بغیر بڑی جسمانی طاقت اور بلند و بالا عمارتیں کچھ کام نہیں آتیں۔",
        "اللہ پر سچا توکل تنہا مومن کو دنیا کی بڑی سے بڑی جابر سلطنت کے سامنے بے خوف کر دیتا ہے۔",
        "نعمتوں پر عاجزی اور شکر گزاری لازم ہے، تکبر اور کمزوروں پر ظلم ہلاکت کا پیش خیمہ ہے۔"
      ],
      "ar": [
        "القوة الجسدية والعمران المادي لا قيمة لهما إذا خلا القلب من الإيمان والتقوى.",
        "التوكل الصادق على الله يجعل المؤمن الفرد أقوى من أعتى الإمبراطوريات وجيوشها.",
        "نعم الله تستوجب الشكر والتواضع، أما الغرور والبطش فيستنزلان سخط الله ونقمته."
      ]
    }
  },
  {
    "id": "saleh",
    "order": 5,
    "nameEn": "Saleh (A.S.)",
    "nameUr": "حضرت صالح (ع)",
    "nameAr": "صالح عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Sign of the She-Camel & The Rock-Carvers",
    "titleUr": "ناقۃ اللہ کے گواہ اور پہاڑ تراشنے والی قوم کے ہادی",
    "titleAr": "نبي الناقة ورسول ثمود",
    "image": "/stories/covers/saleh-v2.webp",
    "quranMention": "Mentioned 9 times in the Holy Quran (Surahs Al-A'raf, Hud, Ash-Shu'ara, etc.)",
    "summaryEn": "Sent to the skilled craftsmen of Thamud in Al-Hijr who carved lavish palaces out of mountain rocks. When they demanded a miraculous she-camel from stone and then killed her, an ear-splitting divine blast decimated them.",
    "summaryUr": "آپ کو الحجر کے پہاڑ تراشنے والے ثمودیوں کی طرف بھیجا گیا۔ ان کے مطالبے پر ٹھوس چٹان سے معجزاتی اونٹنی ظاہر ہوئی، مگر انہوں نے اسے قتل کر دیا، جس پر خوفناک آسمانی چیخ نے انہیں ختم کر دیا۔",
    "summaryAr": "أرسله الله إلى قوم ثمود في الحِجر، وكانوا ينحتون من الجبال بيوتاً فارهين، فأخرج الله لهم الناقة آية من الصخر، فعقروها فدمرتهم الصيحة والرجفة فأصبحوا في دارهم جاثمين.",
    "fullStory": {
      "en": [
        "After the ruin of 'Ad, another great Arab civilization rose in the rugged rocky valleys of Al-Hijr (Mada'in Saleh in northwestern Saudi Arabia)—the tribe of Thamud. Endowed with breathtaking architectural genius, they hollowed out the solid granite mountains, carving lavish palaces, ornate entryways, and cavernous tombs that seemed impervious to the passage of time.",
        "Yet despite their architectural wonders, Thamud fell into the same dark pit of polytheism, worshipping multiple idols and indulging in rampant corruption led by ruthless aristocrats. Allah raised from their midst Prophet Saleh (A.S.), a man so renowned for wisdom that his people had previously said: 'O Saleh, you were among us a man of promising hope before this!' (Surah Hud 11:62).",
        "Saleh tirelessly urged them to return to the worship of their Creator: 'O my people, worship Allah; you have no deity other than Him. He produced you from the earth and settled you upon it, so ask forgiveness of Him and turn to Him in repentance.' (Surah Hud 11:61).",
        "Frustrated by his unrelenting moral message, the arrogant chieftains decided to humiliate Saleh before a massive gathering. Pointing at a massive, solid boulder, they demanded an impossible miracle: 'Bring forth from this exact solid rock a pregnant she-camel, ten months along, of immense size, and we will believe in you!'",
        "Saleh stood in humble prayer, imploring his Lord. Before their astounded eyes, the massive stone groaned, cracked open, and out stepped a magnificent she-camel (*Naqatullah*), towering and beautiful, who immediately gave birth to a healthy calf. Saleh laid down a divine condition: 'This is the she-camel of Allah, a sign for you. She has a right of drinking, and you have a right of drinking, each on a known day. And do not touch her with harm, lest a painful torment seize you.' (Surah Ash-Shu'ara 26:155-156).",
        "The she-camel drank all the water from their well on her assigned day, but in return, her udder miraculously supplied the entire city with abundant fresh milk. Yet evil conspired; a cabal of nine corrupt conspirators (*Tis'atu Raht*), led by the wicked Qudar ibn Salif, plotted to eliminate the divine sign. Laying in wait, they struck the she-camel and hamstrung her legs (*'Aqaraha*), slaughtering both the camel and attempting to kill her calf, which fled crying to the mountains.",
        "When Saleh saw the slaughter, sorrow pierced his heart. He issued Allah's final verdict: 'Enjoy yourselves in your homes for three days. That is a promise not to be belied.' (Surah Hud 11:65). On the first day their faces turned pale yellow; on the second, blood red; and on the third, pitch black. At dawn of the fourth day, an ear-splitting sonic blast (*As-Sayhah*) accompanied by a violent earthquake shattered the valley, leaving the people of Thamud lying lifeless in their carved mountain palaces. Saleh and the believers were saved and walked away unharmed."
      ],
      "ur": [
        "قومِ عاد کی ہلاکت کے بعد جزیرہ نما عرب کے شمال مغربی خطے 'الحجر' (مدائن صالح) میں ایک اور باکمال قوم آباد ہوئی جسے قومِ ثمود کہا جاتا ہے۔ اللہ تعالیٰ نے انہیں پتھر تراشنے کی بے مثال مہارت بخشی تھی۔ وہ مضبوط پہاڑوں کو کاٹ کر ان کے اندر شاندار اور محفوظ محلات، خوبصورت ستون اور آرام گاہیں تراشتے تھے جن پر موسم کے اثرات نہیں ہوتے تھے۔",
        "مگر اس مادی ترقی کے باوجود وہ شرک، فحاشی اور ناانصافی کی دلدل میں پھنس گئے۔ اللہ تعالیٰ نے ان کی ہدایت کے لیے حضرت صالح علیہ السلام کو نبوت عطا فرمائی۔ آپ اپنی قوم میں اتنے دانشمند اور سچے سمجھے جاتے تھے کہ قوم نے کہا: 'اے صالح! اس سے پہلے تم ہمارے درمیان امیدوں کا مرکز تھے!' (سورۃ ہود)",
        "حضرت صالح علیہ السلام نے انہیں محبت سے سمجھایا: 'اے میری قوم! اللہ کی بندگی کرو، اس کے سوا تمہارا کوئی معبود نہیں، اسی نے تمہیں مٹی سے پیدا کیا اور اس میں بسایا، پس اسی سے مغفرت مانگو اور اسی کی طرف رجوع کرو۔'",
        "جب سرداروں نے دیکھا کہ غریب لوگ صالح کی بات سننے لگے ہیں، تو انہوں نے آپ کو لاجواب کرنے کے لیے ایک ناممکن مطالبہ رکھا۔ انہوں نے ایک بڑی ٹھوس چٹان کی طرف اشارہ کر کے کہا: اگر تم سچے ہو تو ہمارے سامنے اس پتھر سے ایک ایسی اونٹنی نکال کر دکھاؤ جو حاملہ ہو، اور ہمارے دیکھتے ہی بچہ جنم دے، تب ہم ایمان لائیں گے۔",
        "حضرت صالح علیہ السلام نے بارگاہِ الٰہی میں گڑگڑا کر دعا فرمائی۔ اچانک وہ چٹان لرز اٹھی، شق ہوئی اور اس کے اندر سے ایک غیر معمولی، خوبصورت اور قد آور اونٹنی برآمد ہوئی جس نے فوراً بچہ جنم دیا۔ حضرت صالح نے فرمایا: 'یہ اللہ کی اونٹنی تمہارے لیے ایک معجزاتی نشانی ہے۔ ایک دن کنویں کے پانی کی باری اس کی ہوگی اور ایک دن تمہاری۔ خبردار! اسے کوئی نقصان نہ پہنچانا ورنہ تم پر عذاب ٹوٹ پڑے گا۔'",
        "اونٹنی جب اپنے دن پانی پیتی تو اس کے بدلے پوری بستی کے برتنوں کو میٹھے اور خالص دودھ سے بھر دیتی۔ مگر قوم کے اندر نو سرکش بدمعاشوں کے گروہ نے قدار بن سالف کی سرکردگی میں سازش تیار کی۔ انہوں نے گھات لگا کر اس مقدس اونٹنی کی کونچیں کاٹ دیں اور اسے بے دردی سے ذبح کر ڈالا۔ اونٹنی کا بچہ چیختا ہوا پہاڑ کی طرف بھاگ گیا۔",
        "جب حضرت صالح نے یہ منظر دیکھا تو غمگین ہو کر فرمایا: 'اب تم اپنے گھروں میں تین دن اور فائدہ اٹھا لو، یہ ایسا وعدہ ہے جو جھوٹا نہیں ہو سکتا۔' پہلے دن ان کے چہرے زرد ہوئے، دوسرے دن سرخ اور تیسرے دن سیاہ پڑ گئے۔ چوتھے دن صبح کے وقت ایک ایسی دل دہلا دینے والی آسمانی چیخ اور زلزلے کا جھٹکا آیا کہ وہ اپنے تراشے ہوئے محلات میں اوندھے منہ ڈھیر ہو گئے۔ حضرت صالح اور مومنین کو اللہ نے بچا لیا۔"
      ],
      "ar": [
        "نهضت حضارة ثمود العظيمة في وادي الحِجر (مدائن صالح) شمال غرب الجزيرة العربية؛ أوتوا مهارة هندسية فذة، فنحتوا من الصخور الصماء بيوتاً فارهة وقصوراً فخمة آمنين من عوادي الزمان.",
        "طغت ثمود واستكبرت وعبدت الأوثان، فبعث الله فيهم صالحاً عليه السلام وكان مشهوداً له بالرأي والحكمة قبل بعثته: ﴿قَالُوا يَا صَالِحُ قَدْ كُنْتَ فِينَا مَرْجُوّاً قَبْلَ هَذَا﴾ (هود: 62).",
        "دعاهم صالح إلى إخلاص العبادة لله: ﴿يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ هُوَ أَنْشَأَكُمْ مِنَ الْأَرْضِ وَاسْتَعْمَرَكُمْ فِيهَا فَاسْتَغْفِرُوهُ ثُمَّ تُوبُوا إِلَيْهِ﴾.",
        "عجز الطغاة عن الحجة فطلبوا آية تعجيزية؛ أشاروا إلى صخرة صماء ملساء وطالبوه أن يخرج منها ناقة عشراء ضخمة تلد أمام أعينهم ليؤمنوا به.",
        "توجه صالح إلى ربه بالدعاء والضراعة، فانفلقت الصخرة وخرجت منها ناقة عظيمة الخلقة تسبح بحمد الله وولدت فصيلها، فقال لهم صالح: ﴿هَذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللَّهِ وَلَا تَمَسُّوهَا بِسُوءٍ فَيَأْخُذَكُمْ عَذَابٌ أَلِيمٌ﴾.",
        "كانت الناقة تشرب ماء البئر يوماً وتمنحهم لبناً غزيراً يكفي المدينة بأسرها، ولكن قست قلوب عتاة المجرمين؛ اجتمع تسعة رهط يفسدون في الأرض بقيادة قدار بن سالف، فترصدوا للناقة وعقروها ونحروها بجرأة وقحة.",
        "وقف صالح عليه السلام متحسراً على عتوهم وقال: ﴿تَمَتَّعُوا فِي دَارِكُمْ ثَلَاثَةَ أَيَّامٍ ذَلِكَ وَعْدٌ غَيْرُ مَكْذُوبٍ﴾. اصفرت وجوههم في اليوم الأول، واحمرت في الثاني، واسودت في الثالث، ثم جاءت الصيحة والرجفة مع بزوغ فجر اليوم الرابع، فتقطعت قلوبهم في صدورهم وأصبحوا في ديارهم جاثمين، كأن لم يغنوا فيها."
      ]
    },
    "keyLessons": {
      "en": [
        "Demanding miracles out of mockery invites immediate divine judgment if rejected.",
        "Carving stone houses in mountains cannot shield a society from the consequences of moral decay.",
        "A small minority of corrupt instigators (like the nine conspirators) can bring ruin upon an entire city."
      ],
      "ur": [
        "ضد اور مذاق کے طور پر معجزات مانگنا اور پھر ان کا انکار کرنا فوری عذابِ الٰہی کو دعوت دیتا ہے۔",
        "پہاڑوں کو تراش کر مضبوط گھر بنا لینا اخلاقی گراوٹ اور ظلم کے انجام سے نہیں بچا سکتا۔",
        "چند سرکش مفسدوں کی بدکاری اور قوم کی خاموشی پوری بستی کو عذاب میں جھونک دیتی ہے۔"
      ],
      "ar": [
        "طلب المعجزات تعنتاً واستكباراً ثم نقض العهود يستوجبان عذاب الاستئصال الفوري.",
        "الحصون الصخرية والقوة المعمارية لا تعصم الأمم من سنن الله في إهلاك الظالمين.",
        "سكوت المجتمع عن المفسدين القلة (التسعة رهط) يجعل العقاب عاماً وشاملاً للجميع."
      ]
    }
  },
  {
    "id": "ibrahim",
    "order": 6,
    "nameEn": "Ibrahim (A.S.)",
    "nameUr": "حضرت ابراہیم (ع)",
    "nameAr": "إبراهيم عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Intimate Friend of Allah & Father of Monotheism",
    "titleUr": "خلیل اللہ اور امام الانبیاء",
    "titleAr": "خليل الله وإمام الحنفاء",
    "image": "/stories/covers/ibrahim-v2.webp",
    "quranMention": "Mentioned 69 times in the Holy Quran and revered as the Father of the Prophets",
    "summaryEn": "Champion of pure monotheism who challenged Nimrod, survived the blazing fire unharmed, endured the ultimate test of sacrificing his son Ismail, and built the Holy Ka'bah as the universal sanctuary of prayer.",
    "summaryUr": "آپ نے نمرود کے بت کدے کو توڑا، دہکتی آگ میں بے خوف کود پڑے، بیٹے اسماعیل کی قربانی کا بے مثال امتحان پاس کیا، اور کعبۃ اللہ کی تعمیر فرما کر حج کا اعلان کیا۔",
    "summaryAr": "خليل الرحمن الذي حطم الأصنام، ونجاه الله من نار النمرود، وامتثل لأمر ذبح ولده إسماعيل، ورفع القواعد من البيت الحرام معلناً الحج لجميع المؤمنين.",
    "fullStory": {
      "en": [
        "In the historic city of Ur in ancient Mesopotamia (Babylonia), society was submerged in dual polytheism: they carved and worshipped stone idols by day, and venerated the stars, moon, and sun by night. In this empire ruled by the tyrannical King Nimrod, Allah raised Ibrahim (Abraham)—a youth endowed from boyhood with profound spiritual wisdom and an unyielding intellect.",
        "Ibrahim's own father, Azar, was the chief sculptor of the royal temple's idols. Ibrahim pleaded with him: 'O my father, why do you worship that which does not hear and does not see and will not benefit you at all?' (Surah Maryam 19:42). When night fell, Ibrahim gazed at the shining evening star, then the luminous moon, then the radiant sun. As each set beneath the horizon, Ibrahim declared: 'I do not love those that set... Indeed, I have turned my face toward Him who originated the heavens and the earth, as a pure monotheist, and I am not of the polytheists.' (Surah Al-An'am 6:76-79).",
        "During an annual festival when the city emptied, Ibrahim entered the grand temple with an axe. He shattered all the stone statues into fragments, sparing only the largest idol upon whose shoulder he hung the axe. When the outraged leaders interrogated him: 'Did you do this to our gods, O Ibrahim?' he replied with razor-sharp irony: 'Rather, this largest one of them did it, so ask them, if they can speak!' Speechless and humiliated, they turned to brute force.",
        "King Nimrod ordered an immense pit to be dug and filled with roaring timber. The bonfire burned so violently for days that birds flying overhead were scorched. Ibrahim was bound and placed into a catapult. As he soared through the air toward the flames, Angel Jibril appeared asking: 'Do you need anything from me?' Ibrahim replied with sublime faith: 'From you, no; but from Allah, yes. Hasbunallahu wa ni'mal Wakeel' (Allah alone is sufficient for us, and He is the best Disposer of affairs).",
        "Allah commanded the roaring flames: 'O fire, be coolness and safety upon Ibrahim!' (Surah Al-Anbiya 21:69). The inferno cooled to a gentle garden; only the ropes binding his hands were burned away, and Ibrahim walked out unharmed before a stunned multitude.",
        "Emigrating to the Holy Land and later to Egypt with his wife Sarah, Ibrahim was blessed in advanced age with two noble sons: Ismail from Lady Hajar, and Ishaq from Lady Sarah. By divine decree, Ibrahim led Hajar and infant Ismail to the barren, uncultivated valley of Makkah, leaving them there with complete reliance on Allah.",
        "Years later, when young Ismail was running and working with him, Ibrahim faced the supreme test of total surrender. He had seen in a divine dream that he was sacrificing his beloved firstborn son. Telling Ismail, the noble youth replied without hesitation: 'O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast.' As Ibrahim laid his son down on Mount Mina and placed the blade upon his neck, Allah called out: 'O Ibrahim, you have fulfilled the vision!' (Surah As-Saffat 37:104-105). Allah ransomed Ismail with a magnificent ram from Paradise, inaugurating the eternal Eid al-Adha sacrifice.",
        "Together, father and son rebuilt the foundations of the Holy Ka'bah—the first house of monotheism on Earth—raising its stones while supplicating: 'Our Lord, accept this from us. Indeed You are the Hearing, the Knowing.' Allah made Ibrahim an 'Ummah' (a nation unto himself) and the blessed spiritual father of monotheism for all succeeding prophets."
      ],
      "ur": [
        "قدیم بابل کے شہر ار میں جہاں لوگ دن کو تراشے ہوئے بتوں کی اور رات کو سورج، چاند اور ستاروں کی پوجا کرتے تھے، اور نمرود جیسا ظالم بادشاہ خود کو خدا کہلواتا تھا، اللہ تعالیٰ نے حضرت ابراہیم علیہ السلام کو رشد و ہدایت کے ساتھ مبعوث فرمایا۔",
        "آپ کے والد آزر شاہی مندر کے لیے بت تراشتے تھے۔ حضرت ابراہیم نے انتہائی ادب اور دردِ دل سے اپنے والد کو سمجھایا: 'اے میرے والد! آپ ان کی پوجا کیوں کرتے ہیں جو نہ سن سکتے ہیں، نہ دیکھ سکتے ہیں اور نہ آپ کا کوئی کام سنوار سکتے ہیں؟' پھر ایک رات جب آپ نے چمکتے ستارے، پھر چودھویں کے چاند اور پھر دہکتے سورج کو غروب ہوتے دیکھا، تو برملا اعلان فرمایا: 'میں غروب ہونے والوں سے محبت نہیں کرتا... میں نے اپنا رخ اس ذات کی طرف کر لیا جس نے آسمانوں اور زمین کو پیدا کیا، میں یکسو ہو کر اسی کا ہوں اور مشرکوں میں سے نہیں ہوں۔'",
        "ایک سال جب بستی کے تمام لوگ میلے میں گئے ہوئے تھے، تو حضرت ابراہیم کلہاڑا لے کر مندر میں داخل ہوئے۔ آپ نے تمام بتوں کو توڑ کر ریزہ ریزہ کر دیا اور کلہاڑا سب سے بڑے بت کے کندھے پر لٹکا دیا۔ جب برہم سرداروں نے پوچھا: کیا ہمارے خداؤں کا یہ حال تم نے کیا ہے؟ تو آپ نے برجستہ فرمایا: 'بلکہ ان کے اس بڑے نے کیا ہوگا، انہی سے پوچھ لو اگر یہ بول سکتے ہوں!' وہ شرمندہ ہو کر لاجواب ہو گئے مگر ہٹ دھرمی نہ چھوڑی۔",
        "نمرود نے ایک بہت بڑا گڑھا کھودوا کر لکڑیوں کا ڈھیر لگوایا جس میں اتنی ہولناک آگ بھڑکائی گئی کہ پرندے بھی اوپر سے اڑتے تو جھلس جاتے۔ حضرت ابراہیم کو منجنیق میں رکھ کر آگ میں پھینکا گیا۔ جب آپ فضا میں تھے تو حضرت جبرائیل علیہ السلام نے آ کر عرض کیا: کیا آپ کو مجھ سے کوئی حاجت ہے؟ آپ نے کمالِ توکل سے فرمایا: 'تم سے نہیں، میرا اللہ میرے حال سے باخبر ہے، حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ'۔",
        "اللہ رب العزت نے آگ کو حکم دیا: 'قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ' (اے آگ! ابراہیم پر ٹھنڈی اور سلامتی والی بن جا)۔ آگ گلزار بن گئی، صرف آپ کی رسیاں جلیں اور آپ مسکراتے ہوئے صحیح سلامت باہر نکل آئے۔",
        "پھر آپ نے فلسطین کی طرف ہجرت فرمائی۔ بڑھاپے میں اللہ نے آپ کو دو عظیم بیٹے عطا فرمائے: حضرت ہاجرہ کے بطن سے حضرت اسماعیل اور حضرت سارہ کے بطن سے حضرت اسحاق۔ اللہ کے حکم پر آپ نے حضرت ہاجرہ اور ننھے اسماعیل کو مکہ کی بے آب و گیاہ وادی میں لا بسایا۔",
        "جب اسماعیل دوڑنے کی عمر کو پہنچے تو حضرت ابراہیم نے خواب دیکھا کہ وہ اپنے لختِ جگر کو ذبح کر رہے ہیں۔ جب بیٹے کو بتایا تو باوفا بیٹے نے جواب دیا: 'اے ابا جان! وہی کیجیے جس کا آپ کو حکم ملا ہے، انشاءاللہ آپ مجھے صبر کرنے والوں میں پائیں گے۔' میدانِ منیٰ میں جب باپ نے بیٹے کو پیشانی کے بل لٹایا اور چھری چلا دی، تو اللہ نے پکارا: 'اے ابراہیم! تو نے خواب سچ کر دکھایا۔' اللہ نے جنت سے ایک عظیم مینڈھے کا فدیہ بھیج کر اسماعیل کو بچا لیا، جو قیامت تک عید الاضحیٰ کی سنت بن گیا۔",
        "پھر باپ اور بیٹے نے مل کر کعبۃ اللہ کی بنیادیں اٹھائیں اور دعا مانگی: 'اے ہمارے رب! ہم سے یہ خدمت قبول فرما، بیشک تو سننے والا اور جاننے والا ہے۔' اللہ نے حضرت ابراہیم کو تمام جہانوں کے لیے 'امام' اور 'خلیل اللہ' کا عظیم مقام عطا فرمایا۔"
      ],
      "ar": [
        "نشأ إبراهيم عليه السلام في أرض بابل بالعراق وسط قوم غارقين في عبادة الأصنام والكواكب، وكان أبوه آزر ينحت تماثيل المعبد. آتاه الله رشده منذ صباه، فناظر أباه بأرق عبارة: ﴿يَا أَبَتِ لِمَ تَعْبُدُ مَا لَا يَسْمَعُ وَلَا يُبْصِرُ وَلَا يُغْنِي عَنْكَ شَيْئاً﴾ (مريم: 42).",
        "تأمل في ملكوت السماوات؛ رأى كوكباً بازغاً ثم قمراً ساطعاً ثم شمساً طالعة، فلما أفل كل منها قال بيقين الفطرة: ﴿لَا أُحِبُّ الْآفِلِينَ... إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفاً وَمَا أَنَا مِنَ الْمُشْرِكِينَ﴾ (الأنعام: 76-79).",
        "في يوم عيدهم، دخل المعبد وحطم الأصنام بالفأس فجعلها جذاذاً إلا كبيراً لهم، فلما سألوه في غضب أجابهم بحكمة بالغة: ﴿بَلْ فَعَلَهُ كَبِيرُهُمْ هَذَا فَاسْأَلُوهُمْ إِنْ كَانُوا يَنْطِقُونَ﴾، فبهتوا وانكسرت حجتهم فلجأوا إلى البطش.",
        "أوقد النمرود ناراً عظيمة ألقوا فيها إبراهيم بالمنجنيق، فعرض له جبريل قائلاً: ألك حاجة؟ فقال إبراهيم بمطلق اليقين: 'أما إليك فلا، وأما إلى الله فبلى.. حسبي الله ونعم الوكيل'.",
        "صدر الأمر الإلهي للكون: ﴿قُلْنَا يَا نَارُ كُونِي بَرْداً وَسَلَاماً عَلَى إِبْرَاهِيمَ﴾ (الأنبياء: 69)، فانقلبت الجحيم روضة وسار فيها سالماً غانماً.",
        "هاجر إلى الشام ثم مصر، ورزقه الله في شيخوخته بإسماعيل من هاجر وبإسحاق من سارة. أسكن هاجر ورضيعها في واد غير ذي زرع عند البيت المحرم استسلاماً لأمر الله.",
        "جاء الابتلاء الأكبر برؤيا ذبح إسماعيل، فلما أسلما وتله للجبين ناداه ربه: ﴿أَنْ يَا إِبْرَاهِيمُ * قَدْ صَدَّقْتَ الرُّؤْيَا﴾، وفداه الله بذبح عظيم خلد سنته إلى يوم الدين.",
        "رفع إبراهيم وإسماعيل قواعد البيت العتيق داعين: ﴿رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ﴾، فجعله الله إماماً للناس وخليلاً للرحمن."
      ]
    },
    "keyLessons": {
      "en": [
        "Uncompromising Tawheed: True worship belongs solely to the Creator, never to creation.",
        "The power of 'Hasbunallahu wa ni'mal Wakeel' transforms literal infernos into peaceful gardens.",
        "Total surrender to Allah's commands (Tasleem) earns the highest divine friendship and blessings."
      ],
      "ur": [
        "خالص توحید کا سبق: عبادت صرف اور صرف کائنات کے خالق کا حق ہے، کسی مخلوق کا نہیں۔",
        "اللہ پر سچے توکل کا کلمہ 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ' بھڑکتی آگ کو بھی گلزار بنا دیتا ہے۔",
        "اللہ کے حکم کے آگے سرِ تسلیم خم کرنا انسان کو خلیل اللہ اور امامت کے درجات عطا کرتا ہے۔"
      ],
      "ar": [
        "التوحيد الخالص هو أساس الدين، والعبادة حق لله وحده لا يُصرف منها شيء لغيره.",
        "اليقين بالله والتوكل عليه بـ 'حسبي الله ونعم الوكيل' يطفئان نيران البلاء ويحولانها برداً وسلاماً.",
        "الاستسلام الكامل والانقياد المطلق لأمر الله يبلغان العبد مرتبة الخلة والإمامة."
      ]
    }
  },
  {
    "id": "lut",
    "order": 7,
    "nameEn": "Lut (A.S.)",
    "nameUr": "حضرت لوط (ع)",
    "nameAr": "لوط عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Defender of Moral Integrity & The Overturned Cities",
    "titleUr": "پاکیزگی کے علمبردار اور سرکش بستیوں کے ناصح",
    "titleAr": "نبي الطهارة والمجاهد ضد الفاحشة",
    "image": "/stories/covers/lut-v2.webp",
    "quranMention": "Mentioned 27 times across several Surahs in the Holy Quran",
    "summaryEn": "Nephew of Ibrahim who confronted the unprecedented moral depravity of Sodom and Gomorrah. He defended purity and hospitality until an earthquake turned their corrupt cities upside down.",
    "summaryUr": "آپ حضرت ابراہیم کے بھتیجے تھے، سدوم اور عمورہ کی بستیوں میں بے حیائی اور رہزنی کے خلاف ڈٹ گئے۔ آپ نے پاکیزگی کی دعوت دی، جب قوم نہ مانی تو ان کی بستیوں کو الٹ دیا گیا۔",
    "summaryAr": "ابن أخي إبراهيم عليهما السلام، جاهد الفواحش الشاذة وقطع الطريق في أهل سدوم، فدعاهم إلى الطهر والعفاف، فلما طغوا قلب الله ديارهم وجعل عاليها سافلها.",
    "fullStory": {
      "en": [
        "Prophet Lut (Lot) was the noble nephew of Prophet Ibrahim. He believed in Ibrahim's call during their early trials in Mesopotamia and accompanied him on the migration to the Levant. Recognizing his steadfast devotion, Allah bestowed upon Lut wisdom and prophethood, sending him to the thriving cities of the Jordan Plain, foremost among them Sodom and Gomorrah near the Dead Sea.",
        "The people of Sodom were afflicted with an unprecedented form of societal darkness. They openly committed brazen indecencies unknown to any civilization before them, engaged in organized highway robbery, defrauded travelers, and committed foul acts in their public gatherings without shame.",
        "Prophet Lut stood alone in their midst like an unyielding lighthouse, pleading: 'Will you not fear Allah? Indeed, I am to you a trustworthy messenger. Do you commit an immorality such as no one of the worlds has preceded you in?' (Surah Al-A'raf 7:80-81). But the corrupt townspeople threatened him: 'Drive Lut's family out of your city! Indeed, they are people who keep themselves pure.'",
        "When their rebellion reached its absolute peak, Allah dispatched noble angels—Jibril, Mika'il, and Israfil—in the guise of strikingly handsome young travelers. They first visited Prophet Ibrahim to give him glad tidings of Ishaq and to inform him of the impending doom of Sodom. Ibrahim debated with them out of compassion, but the angels replied: 'O Ibrahim, turn away from this; indeed the decree of your Lord has come.'",
        "The angels arrived at Sodom at dusk and were welcomed by Lut into his home. Fearing for their safety, Lut kept their presence confidential. However, his disbelieving wife slipped away into the streets, alerting the wicked mob that handsome guests had arrived. Soon, a depraved crowd encircled Lut's house, clamoring and banging on the doors.",
        "Lut stood before them in agonizing grief, offering his own lawful daughters in marriage: 'O my people, these are my daughters; they are purer for you. So fear Allah and do not disgrace me regarding my guests. Is there not among you a single right-minded man?' (Surah Hud 11:78). But they jeered that they had no desire for women.",
        "At that critical juncture, the guests spoke with serene authority: 'O Lut, indeed we are messengers of your Lord; they will never reach you.' (Surah Hud 11:81). Angel Jibril struck the attackers with a sweep of his wing, instantly blinding them. The angels commanded Lut to depart with his daughters in the dark of night and ordered them not to look back, warning that his treacherous wife would be overtaken by the punishment.",
        "At the break of dawn, the terrifying decree unfolded. Angel Jibril uprooted the cities to the heavens and turned them upside down (*Ja'alna 'aliyah safilaha*), raining down upon them brimstones of baked clay marked by Allah. The site became the salt-heavy Dead Sea, remaining a solemn sign for humanity of the tragic consequence of mocking divine moral law."
      ],
      "ur": [
        "حضرت لوط علیہ السلام حضرت ابراہیم علیہ السلام کے بھتیجے تھے۔ آپ نے بابل کے اندر حضرت ابراہیم کی دعوت پر لبیک کہا اور ان کے ساتھ ہجرت فرمائی۔ اللہ تعالیٰ نے آپ کو علم، حکمت اور نبوت عطا فرما کر بحیرۂ مردار (ڈیڈ سی) کے قریب سدوم اور عمورہ کی سرسبز و خوشحال بستیوں کی طرف مبعوث فرمایا۔",
        "قومِ سدوم کی اخلاقی حالت انتہائی عبرتناک ہو چکی تھی۔ انہوں نے تاریخِ انسانی کی وہ شرمناک بے حیائی اور ہم جنس پرستی ایجاد کی جس سے قبل دنیا میں کوئی واقف نہ تھا۔ وہ راستوں میں مسافروں کو لوٹتے، چوری چکاری کرتے اور اپنی کھلی محفلوں میں سرِعام بدکاریاں کرتے تھے۔",
        "حضرت لوط علیہ السلام نے تن تنہا ان کے سامنے حق کی صدا بلند فرمائی: 'کیا تم اللہ سے نہیں ڈرتے؟ بیشک میں تمہارے لیے ایک امانت دار رسول ہوں۔ کیا تم ایسی بے حیائی کا ارتکاب کرتے ہو جو تم سے پہلے جہانوں میں کسی نے نہیں کی؟' مگر وہ بدبخت قوم دھمکیاں دینے لگی کہ 'لوط اور اس کے گھرانے کو بستی سے نکال باہر کرو، یہ لوگ تو بڑے پاکباز بنتے ہیں!'",
        "جب ان کا ظلم حد سے بڑھ گیا تو اللہ تعالیٰ نے حضرت جبرائیل، حضرت میکائیل اور حضرت اسرافیل علیہم السلام کو خوبصورت جوان انسانوں کی صورت میں بھیجا۔ وہ پہلے حضرت ابراہیم کے پاس گئے، انہیں حضرت اسحاق کی بشارت دی اور سدوم پر عذاب کی خبر سنائی۔",
        "شام کے وقت فرشتے حضرت لوط کے گھر مہمان بن کر پہنچے۔ حضرت لوط کو قوم کی خباثت کا علم تھا اس لیے آپ بے حد فکر مند ہوئے۔ بدقسمتی سے آپ کی بیوی نے جو اندر سے کافر تھی، قوم کو خبر کر دی کہ لوط کے گھر انتہائی خوبصورت مہمان آئے ہیں۔ لمحوں میں بدکاروں کا ہجوم حضرت لوط کے گھر کا گھیراؤ کر کے دروازے توڑنے لگا۔",
        "حضرت لوط علیہ السلام نے انتہائی کرب کے عالم میں انہیں سمجھایا: 'اے میری قوم! یہ میری قوم کی بیٹیاں ہیں جو تمہارے لیے جائز اور پاکیزہ ہیں، اللہ سے ڈرو اور میرے مہمانوں کے معاملے میں مجھے رسوا نہ کرو، کیا تم میں کوئی ایک بھی نیک بخت اور سمجھدار آدمی نہیں؟' مگر انہوں نے وحشیانہ انداز میں انکار کر دیا۔",
        "اس نازک گھڑی میں فرشتوں نے فرمایا: 'اے لوط! غم نہ کرو، ہم تمہارے رب کے فرشتے ہیں، یہ لوگ ہرگز تم تک نہیں پہنچ سکتے۔' حضرت جبرائیل نے اپنے پر کا ایک کونا مار کر تمام حملہ آوروں کی آنکھیں پھوڑ دیں اور وہ اندھے ہو کر ٹکریں مارنے لگے۔ فرشتوں نے حکم دیا کہ رات کے آخری پہر اپنی بیٹیوں کو لے کر نکل جاؤ اور پیچھے مڑ کر نہ دیکھنا، تمہاری بیوی جو کافروں کے ساتھ ملی ہوئی تھی عذاب میں رہے گی۔",
        "صبح صادق کے وقت اللہ کا ہولناک عذاب آیا۔ حضرت جبرائیل نے بستیوں کو جڑوں سے اکھاڑ کر آسمان تک اٹھایا اور پھر زمین کو الٹ دیا (اوپر کا حصہ نیچے کر دیا) اور ان پر پکی ہوئی مٹی کے پتھروں کی بارش برسا دی۔ وہ علاقہ ہمیشہ کے لیے مردہ سمندر (ڈیڈ سی) بن گیا جو آج بھی دنیا کے لیے کھلی عبرت ہے۔"
      ],
      "ar": [
        "لوط عليه السلام هو ابن أخي خليل الرحمن إبراهيم، آمن معه في بابل ورافقه في هجرته إلى بلاد الشام. آتاه الله حكماً وعلماً وبعثه إلى أهل سدوم وعمورة في غور الأردن.",
        "كان أهل سدوم أخبث الناس سيرة؛ ابتدعوا فاحشة الشذوذ الجنسي التي لم يسبقهم إليها أحد من العالمين، وكانوا يقطعون السبيل ويخونون الرفيق ويأتون في ناديهم المنكر جهاراً نهاراً.",
        "قام فيهم لوط ناصحاً: ﴿أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُمْ بِهَا مِنْ أَحَدٍ مِنَ الْعَالَمِينَ * إِنَّكُمْ لَتَأْتُونَ الرِّجَالَ شَهْوَةً مِنْ دُونِ النِّسَاءِ بَلْ أَنْتُمْ قَوْمٌ مُسْرِفُونَ﴾. فما كان جوابهم إلا الاستكبار: ﴿أَخْرِجُوا آلَ لُوطٍ مِنْ قَرْيَتِكُمْ إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ﴾.",
        "بلغت المعصية مداها، فبعث الله رسله من الملائكة (جبريل وميكائيل وإسرافيل) في صورة شباب حسان الوجوه، فمروا بإبراهيم وبشروه بإسحاق وأخبروه بهلاك قرى سدوم.",
        "وصلت الملائكة إلى بيت لوط فضاق بهم ذرعاً وخاف عليهم من قومه. أفشت امرأته الخائنة الخبر، فجاء أهل المدينة يهرعون إليه يراودونه عن ضيوفه ويحاصرون الدار.",
        "تألم لوط وقال: ﴿هَؤُلَاءِ بَنَاتِي هُنَّ أَطْهَرُ لَكُمْ فَاتَّقُوا اللَّهَ وَلَا تُخْزُونِ فِي ضَيْفِي أَلَيْسَ مِنْكُمْ رَجُلٌ رَشِيدٌ﴾، فردوا بوقاحة: لقد علمت ما لنا في بناتك من حق وإنك لتعلم ما نريد.",
        "كشفت الملائكة عن حقيقتها: ﴿يَا لُوطُ إِنَّا رُسُلُ رَبِّكَ لَنْ يَصِلُوا إِلَيْكَ﴾، وطمس جبريل أعين المحاصرين بجناحه فعموا وتخبطوا في الجدران. وأُمر لوط بالخروج بأهله ليلاً دون أن يلتفت أحد منهم، وتبقى امرأته في العذاب.",
        "مع انبثاق الفجر، نزل العذاب الماحق؛ قلب الله عالي القرى سافلها، وأمطر عليها حجارة من سجيل منضود مسومة عند ربك، وصارت تلك البقاع بحراً ميتاً مالحاً شاهداً على عاقبة الانتكاس الفطري."
      ]
    },
    "keyLessons": {
      "en": [
        "Standing firm for moral purity even when society normalizes perversion and mocks decency.",
        "Spousal connection to a prophet cannot grant salvation if the heart harbors treason and disbelief.",
        "Divine justice will ultimately hold accountable societies that oppress the weak and revel in shamelessness."
      ],
      "ur": [
        "پاکیزگی اور اخلاق پر ڈٹے رہنا چاہے پورا معاشرہ بے حیائی کا شکار ہو جائے اور نیک لوگوں کا مذاق اڑائے۔",
        "نبی کی زوجہ ہونا بھی انسان کو عذاب سے نہیں بچا سکتا اگر دل میں خیانت اور کفر ہو۔",
        "اللہ کا عادلانہ نظام ان قوموں کو کبھی نہیں بخشتا جو سرِعام حیا اور فطرت کی حدود کو پامال کرتی ہیں۔"
      ],
      "ar": [
        "الثبات على الطهارة والعفاف واجب إيماني ولو حارب المجتمع بأسره الفضيلة واستهزأ بأهلها.",
        "مصاهرة الأنبياء والقرابة منهم لا تعصمان من عذاب الله إذا خانت النفس أمانة الإيمان.",
        "سنة الله ماضية في معاقبة الأمم التي تعتدي على الفطرة الإنسانية السليمة وتجاهر بالمعاصي."
      ]
    }
  },
  {
    "id": "ismail",
    "order": 8,
    "nameEn": "Ismail (A.S.)",
    "nameUr": "حضرت اسماعیل (ع)",
    "nameAr": "إسماعيل عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Exemplar of Sacrifice & Forefather of the Prophet",
    "titleUr": "ذبیح اللہ اور خاتم الانبیاء کے جدِ امجد",
    "titleAr": "الذبيح الصادق وجد خاتم المرسلين",
    "image": "/stories/covers/ismail-v2.webp",
    "quranMention": "Mentioned 12 times in the Holy Quran (Surahs Maryam, Al-Baqarah, As-Saffat)",
    "summaryEn": "The firstborn son of Ibrahim who submitted with absolute trust to the divine command of sacrifice. He aided his father in raising the foundations of the Ka'bah and became the forefather of Prophet Muhammad (S.A.W.).",
    "summaryUr": "آپ حضرت ابراہیم کے پہلے بیٹے تھے جنہوں نے قربانی کے الٰہی حکم پر سر تسلیم خم کیا۔ اپنے والد کے ساتھ مل کر کعبۃ اللہ کی تعمیر فرمائی اور ہمارے نبی ﷺ کے جدِ امجد بنے۔",
    "summaryAr": "بكر خليل الله إبراهيم، ضرب أروع الأمثلة في الطاعة وبر الوالدين والاستسلام لأمر الذبح. بنى الكعبة المشرفة مع أبيه، ومن نسله الشريف انحدر خاتم الأنبياء محمد ﷺ.",
    "fullStory": {
      "en": [
        "Prophet Ismail was the long-awaited firstborn son of Prophet Ibrahim, granted to him through Lady Hajar when Ibrahim was eighty-six years old. While Ismail was still a nursing infant, Allah commanded Ibrahim to undertake a profound trial: to take Hajar and baby Ismail across the arid wilderness to the completely unpopulated, barren valley of Makkah, where no water, food, or shelter existed.",
        "When Ibrahim placed them beneath a solitary tree and turned to leave, Lady Hajar ran after him, crying: 'O Ibrahim! Where are you going, leaving us in this barren valley where there is no human company nor anything to sustain life?' Ibrahim walked silently with tears in his eyes. She then asked: 'Did Allah command you to do this?' Ibrahim replied: 'Yes.' With sublime conviction, she declared: 'Then He will never forsake us!'",
        "As the infant's thirst intensified beneath the scorching sun, Hajar ran desperately seven times between the hills of As-Safa and Al-Marwah looking for water. When she returned exhausted to baby Ismail, she found Angel Jibril striking the dry earth with his heel or wing. Miraculously, pure sweet water surged from the parched gravel. Hajar contained it crying 'Zam-Zam!' (Halt, halt!). That blessed well has sustained billions of pilgrims across the millennia.",
        "The water attracted the noble Arab tribe of Jurhum, who asked permission to settle around the spring. Ismail grew up among them, learning pure Arabic, horsemanship, and archery. He was beloved by all for his nobility, patience, and extraordinary devotion.",
        "When Ismail reached the age of youth and strength, Ibrahim returned to Makkah to face the ultimate test of faith. Ibrahim shared his recurring divine vision: 'O my son, indeed I have seen in a dream that I am sacrificing you, so see what you think.' Ismail, imbued with complete faith, comforted his father: 'O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast.' (Surah As-Saffat 37:102).",
        "On the plains of Mina, both father and son submitted unconditionally to Allah's decree. Ismail lay face down so his father would not hesitate. Just as the blade touched his neck, Allah called out that the test was fulfilled, replacing Ismail with an immense horned ram from Paradise. Ismail was forever honored with the title 'Adh-Dhabeeh' (The Sacrificed).",
        "Later in life, father and son worked shoulder to shoulder to raise the sacred foundations of the Ka'bah—the Holy House of Allah. As they carried heavy stones under the Arabian sun, their lips repeated the immortal prayer: 'Our Lord, accept this from us. Indeed You are the Hearing, the Knowing... And raise from our descendants a messenger who will recite to them Your verses.' (Surah Al-Baqarah 2:127-129). That prayer was answered millennia later with the birth of Prophet Muhammad (S.A.W.)."
      ],
      "ur": [
        "حضرت اسماعیل علیہ السلام حضرت ابراہیم علیہ السلام کے پہلے فرزندِ ارجمند تھے جو بڑھاپے میں حضرت ہاجرہ کے بطن سے پیدا ہوئے۔ جب آپ ابھی شیر خوار بچے ہی تھے، تو اللہ تعالیٰ نے حضرت ابراہیم کو ایک کڑا امتحان لینے کا حکم دیا: حضرت ہاجرہ اور ننھے اسماعیل کو مکہ کی اس بیابان وادی میں تنہا چھوڑ آؤ جہاں نہ پانی کا نام و نشان تھا اور نہ کوئی انسان۔",
        "جب حضرت ابراہیم انہیں چھوڑ کر واپس پلٹنے لگے تو حضرت ہاجرہ پیچھے دوڑیں اور عرض کیا: 'اے ابراہیم! آپ ہمیں اس سنسان وادی میں کس کے سہارے چھوڑ کر جا رہے ہیں جہاں نہ کوئی انسان ہے نہ کھانے پینے کا سامان؟' حضرت ابراہیم کی آنکھوں میں آنسو تھے مگر خاموش رہے۔ حضرت ہاجرہ نے پوچھا: 'کیا اللہ نے آپ کو یہ حکم دیا ہے؟' آپ نے فرمایا: 'ہاں'۔ اس پر اس باوفا بی بی نے تاریخی جملہ کہا: 'پھر اللہ ہمیں کبھی ضائع نہیں کرے گا!'",
        "جب بچہ پیاس سے تڑپنے لگا تو حضرت ہاجرہ پانی کی تلاش میں صفا اور مروہ کی پہاڑیوں کے درمیان سات چکر کاٹے۔ جب مایوس ہو کر واپس آئیں تو دیکھا کہ ننھے اسماعیل کے قدموں کے پاس حضرت جبرائیل نے پر مارا اور زمین سے ٹھنڈا اور میٹھا پانی ابل پڑا۔ بی بی ہاجرہ نے پانی کو روکتے ہوئے فرمایا 'زم زم' (رک جا، رک جا)۔ یہ زمزم کا چشمہ آج تک دنیا کو سیراب کر رہا ہے۔",
        "اس چشمے کی برکت سے یمن کا مشہور قبیلہ 'جرہم' وہاں آ کر آباد ہوا۔ حضرت اسماعیل نے انہی سے فصیح عربی زبان، گھڑ سواری اور تیر اندازی سیکھی اور اخلاق و کردار کا وہ نمونہ بنے جس پر سب رشک کرتے تھے۔",
        "جب آپ جوان ہوئے تو حضرت ابراہیم نے خواب دیکھا کہ وہ اپنے لختِ جگر کو قربان کر رہے ہیں۔ جب باپ نے بیٹے کے سامنے خواب رکھا تو سعادت مند بیٹے نے فوراً فرمایا: 'اے میرے ابا جان! وہی کیجیے جس کا آپ کو حکم ملا ہے، انشاءاللہ آپ مجھے صبر کرنے والوں میں پائیں گے۔'",
        "میدانِ منیٰ میں باپ اور بیٹے دونوں نے سر تسلیم خم کر دیا۔ حضرت اسماعیل پیشانی کے بل لیٹ گئے تاکہ باپ کو چہرہ دیکھ کر شفقت نہ آئے۔ جب چھری چلی تو اللہ نے فرمایا: 'اے ابراہیم! تو نے خواب سچ کر دکھایا۔' اور جنت سے ایک مینڈھے کا فدیہ نازل فرما کر اسماعیل کو بچا لیا۔ آپ کو 'ذبیح اللہ' کا لقب ملا۔",
        "اس کے بعد باپ اور بیٹے نے مل کر کعبۃ اللہ کی تعمیر نو فرمائی۔ پتھر اٹھاتے جاتے اور زبان پر دعا ہوتی: 'اے ہمارے پروردگار! ہم سے یہ خدمت قبول فرما، بیشک تو ہی سننے والا اور جاننے والا ہے... اور ان میں انہی میں سے ایک رسول بھیج جو تیری آیات پڑھ کر سنائے۔' یہ دعا صدیوں بعد حضور سرورِ کائنات حضرت محمد مصطفیٰ ﷺ کی بعثت کے ساتھ پوری ہوئی۔"
      ],
      "ar": [
        "إسماعيل عليه السلام هو البكر الحبيب لخليل الله إبراهيم، وُلد له من هاجر بعد طول رجاء ودعاء وهو في السادسة والثمانين من عمره. وهو رضيع، جاء الأمر الإلهي لإبراهيم بحملهما إلى واد موحش لا ماء فيه ولا أنيس عند موضع البيت العتيق بمكة المكرمة.",
        "فلما ولى إبراهيم عائداً تبعته هاجر تسأله بلهفة: لمن تتركنا في هذا الوادي؟ فلما لم يجب قالت: آلله أمرك بهذا؟ قال: نعم، فقالت بيقين المؤمنة الراسخة: 'إذن لا يضيعنا'.",
        "نفد الماء وجف لبن الأم، وتلوى الرضيع عطشاً، فهرولت هاجر بين جبلي الصفا والمروة سبعة أشواط تلتمس غوثاً، فلما بلغت قمة الرجاء ضرب جبريل الأرض، فتفجرت عين زمزم المباركة زلالاً نميراً، فطوقتها هاجر قائلة 'زم زم'، لتكون سقيا لمليارات الحجاج إلى أبد الدهر.",
        "حطت قبيلة جرهم العربية رحالها عند الماء، ونشأ إسماعيل بينهم فتعلم الفصاحة وركوب الخيل ورمي القوس، وعُرف ببره الفائق وسمو أخلاقه.",
        "بلغ الغلام معه السعي، فرأى إبراهيم في المنام أنه يذبحه، فقال مستشيراً ولده: ﴿يَا بُنَيَّ إِنِّي أَرَى فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانْظُرْ مَاذَا تَرَى﴾، فأجاب إسماعيل بروح التضحية العظمى: ﴿يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ سَتَجِدُنِي إِنْ شَاءَ اللَّهُ مِنَ الصَّابِرِينَ﴾ (الصافات: 102).",
        "في منى، استسلما لأمر الله، وتله للجبين حتى لا تقع عينه في عين أبيه، فلما أهوى بالسكين ناداه ربه: ﴿قَدْ صَدَّقْتَ الرُّؤْيَا إِنَّا كَذَلِكَ نَجْزِي الْمُحْسِنِينَ * وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ﴾، فنال شرف لقب 'الذبيح'.",
        "تشارك مع والده في بناء قواعد الكعبة المشرفة، وكانا يرفعان الحجارة داعين: ﴿رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ * رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولاً مِنْهُمْ﴾، فكانت تلك الدعوة هي بشارة ميلاد النبي الخاتم محمد ﷺ."
      ]
    },
    "keyLessons": {
      "en": [
        "Unfaltering obedience to parents and joy in submitting to divine decrees.",
        "Lady Hajar and Ismail's reliance upon Allah gave rise to Zamzam and the sacred rites of Hajj.",
        "Sacrifice in the path of Allah is always replaced by divine honor and eternal blessings."
      ],
      "ur": [
        "والدین کی بے مثل اطاعت اور اللہ کے احکام کے آگے خوشی خوشی سر تسلیم خم کرنا۔",
        "حضرت ہاجرہ اور اسماعیل کے توکل نے زمزم کا چشمہ اور حج کے مقدس ارکان عطا کیے۔",
        "اللہ کے راستے میں دی جانے والی ہر قربانی بدلے میں عزت، دوام اور برکت لاتی ہے۔"
      ],
      "ar": [
        "قمة بر الوالدين والامتثال المطلق لأمر الله تعالى هو جوهر الإيمان وحقيقته.",
        "التوكل الصادق من هاجر وإسماعيل أثمر ماء زمزم وشعائر السعي الخالدة في الحج.",
        "كل تضحية تُبذل في سبيل الله يعوضها الكريم عز وجل بالعز والرفعة في الدارين."
      ]
    }
  },
  {
    "id": "ishaq",
    "order": 9,
    "nameEn": "Ishaq (A.S.)",
    "nameUr": "حضرت اسحاق (ع)",
    "nameAr": "إسحاق عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Blessed Son of Glad Tidings & Patriarch of Prophets",
    "titleUr": "بشارت یافتہ فرزند اور انبیاء کے جدِ امجد",
    "titleAr": "ابن البشارة الصالح ونبي السلام",
    "image": "/stories/covers/ishaq-v2.webp",
    "quranMention": "Mentioned 17 times in the Holy Quran as a prophet of righteousness",
    "summaryEn": "Born miraculously to Sarah in her old age as promised by angelic messengers. Prophet Ishaq inherited the prophetic mantle in the Levant, guiding generations in peace, justice, and devotion.",
    "summaryUr": "فرشتوں کی خوشخبری کے بعد حضرت سارہ کے ہاں بڑھاپے میں معجزاتی طور پر پیدا ہوئے۔ شام اور فلسطین میں توحید اور عدل کی شمع روشن کی اور بنی اسرائیل کے تمام انبیاء کے جد بنے۔",
    "summaryAr": "بشرت به الملائكة أمه سارة وهي عجوز عقيم، فولد معجزة وأكرمه الله بالنبوة والحكمة في أرض الشام، ومن نسله تفرع أنبياء بني إسرائيل.",
    "fullStory": {
      "en": [
        "Prophet Ishaq (Isaac) was the miraculous second son of Prophet Ibrahim, born to his first wife, Lady Sarah. Sarah had remained barren all her life and had reached ninety years of age, while Ibrahim was around a hundred. By human reckoning, childbearing was impossible, yet with the Lord of the worlds, all things are easy.",
        "The wondrous announcement came when the angelic guests—Jibril and his companions—visited Ibrahim on their way to the cities of Sodom. Ibrahim warmly slaughtered a roasted calf for them, but when they refrained from eating, fear gripped him. The angels comforted him: 'Do not fear; indeed, we are sent to the people of Lut.' Standing nearby, Sarah gasped in surprise. The angels proclaimed the glad tidings: she would bear a son named Ishaq, and after Ishaq, a grandson named Yaqub.",
        "Sarah struck her forehead in astonished laughter, saying: 'Woe to me! Shall I bear a child while I am an old woman and this, my husband, is an old man? Indeed, this is an astonishing thing!' The angels replied with divine reassurance: 'Are you amazed at the decree of Allah? May the mercy of Allah and His blessings be upon you, people of the house. Indeed, He is Praiseworthy and Honorable.' (Surah Hud 11:72-73).",
        "Ishaq was born in the blessed lands of Canaan (Palestine). From childhood, he was immersed in the pure teachings of his father Ibrahim, learning the laws of monotheism, compassion, and justice. When Ibrahim passed away, Ishaq shouldered the sacred prophetic mission in Palestine and Syria, continuously calling his people away from pagan traditions.",
        "The Quran praises Prophet Ishaq alongside Ibrahim and Yaqub with sublime words: 'And remember Our servants, Ibrahim, Ishaq and Yaqub, those of strength and religious vision. Indeed, We chose them for an exclusive quality: remembrance of the home of the Hereafter.' (Surah Sad 38:45-46).",
        "Prophet Ishaq was celebrated for his deep meditative quietude, his gentle leadership, and his generous hospitality to travelers. He married the righteous woman Rifqah (Rebecca), and Allah blessed them with twin sons: Al-'Ais (Esau) and Yaqub (Jacob). Through Yaqub, the illustrious line of Israelite prophethood—including Yusuf, Musa, Dawud, Sulaiman, and 'Isa—would bless humanity for centuries."
      ],
      "ur": [
        "حضرت اسحاق علیہ السلام حضرت ابراہیم علیہ السلام کے دوسرے صاحبزادے تھے جو ان کی پہلی زوجہ حضرت سارہ کے بطن سے پیدا ہوئے۔ حضرت سارہ ساری زندگی بانجھ رہی تھیں اور ان کی عمر نوے سال ہو چکی تھی جبکہ حضرت ابراہیم سو سال کے بوڑھے تھے۔ ظاہری اسباب کے تحت اولاد کی کوئی امید نہ تھی مگر اللہ کے ہاں کوئی چیز ناممکن نہیں۔",
        "خوشخبری اس وقت ملی جب فرشتے خوبصورت نوجوانوں کے روپ میں حضرت ابراہیم کے پاس سدوم جاتے ہوئے مہمان بنے۔ حضرت ابراہیم نے ان کے لیے فربہ بچھڑا بھون کر پیش کیا مگر جب دیکھا کہ وہ کھانا نہیں کھا رہے تو دل میں خوف پیدا ہوا۔ فرشتوں نے تسلی دی: ڈریے مت، ہم لوط کی قوم پر عذاب لے کر آئے ہیں۔ پاس کھڑی حضرت سارہ نے سنا تو حیران ہوئیں۔ فرشتوں نے انہیں حضرت اسحاق کی اور ان کے بعد حضرت یعقوب کی ولادت کی خوشخبری دی۔",
        "حضرت سارہ نے تعجب سے اپنے رخسار پر ہاتھ مارا اور ہنس کر بولیں: 'ہائے میری کمبختی! کیا اب میرے ہاں بچہ ہوگا جبکہ میں بڑھیا ہوں اور یہ میرے شوہر بھی بوڑھے ہیں؟ یہ تو بڑی عجیب بات ہے!' فرشتوں نے جواب دیا: 'کیا تم اللہ کے حکم پر تعجب کرتی ہو؟ اے اس گھرانے کے لوگو! تم پر اللہ کی رحمت اور اس کی برکتیں ہیں، بیشک وہ تعریف کے لائق اور بڑی شان والا ہے۔' (سورۃ ہود)",
        "حضرت اسحاق علیہ السلام فلسطین کی بابرکت سرزمین میں پیدا ہوئے۔ بچپن ہی سے آپ نے اپنے عظیم والد کی گود میں توحید، اخلاق، عدل اور پرہیزگاری کی تربیت پائی۔ حضرت ابراہیم کے بعد آپ نے شام اور فلسطین کے خطے میں نبوت کا پرچم سنبھالا اور لوگوں کو شرک کی تاریکیوں سے نکال کر ہدایت کا راستہ دکھایا۔",
        "قرآنِ مجید میں اللہ تعالیٰ نے حضرت اسحاق علیہ السلام کی شان بیان فرماتے ہوئے ارشاد فرمایا: 'اور ہمارے بندوں ابراہیم، اسحاق اور یعقوب کو یاد کرو جو بڑی قوت اور بصیرت والے تھے۔ ہم نے انہیں ایک خاص صفت کے لیے چن لیا تھا جو آخرت کے گھر کی یاد ہے۔' (سورۃ ص)",
        "حضرت اسحاق علیہ السلام اپنے حلم، خاموشی، سنجیدگی اور مسافروں کی مہمان نوازی کے لیے مشہور تھے۔ آپ نے رفعت اور امن کا درس دیا۔ اللہ تعالیٰ نے آپ کو دو جڑواں بیٹے عطا فرمائے: عیص اور یعقوب۔ حضرت یعقوب کے ذریعے بنی اسرائیل کے انبیاء کا وہ عظیم سلسلہ چلا جس میں حضرت یوسف، موسیٰ، داؤد، سلیمان اور عیسیٰ علیہم السلام جیسے جلیل القدر پیغمبر تشریف لائے۔"
      ],
      "ar": [
        "إسحاق عليه السلام هو الابن الثاني لخليل الله إبراهيم، ولدته الصديقة سارة بعد أن بلغت التسعين من عمرها وكان زوجها إبراهيم قد جاوز المائة، فكان مولده معجزة باهرة تجلت فيها طلاقة القدرة الإلهية.",
        "جاءت البشارة مع وفد الملائكة الكرام المتوجهين إلى سدوم؛ قدم لهم إبراهيم عجلاً حنيذاً فامتنعوا عن الأكل، فلما أوجس منهم خيفة طمأنه جبريل وبشروهما بإسحاق ومن وراء إسحاق يعقوب.",
        "صكت سارة وجهها دهشة وضحكت قائلة: ﴿يَا وَيْلَتَى أَأَلِدُ وَأَنَا عَجُوزٌ وَهَذَا بَعْلِي شَيْخاً إِنَّ هَذَا لَشَيْءٌ عَجِيبٌ﴾، فجاء الرد الملائكي الحاسم: ﴿أَتَعْجَبِينَ مِنْ أَمْرِ اللَّهِ رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ إِنَّهُ حَمِيدٌ مَجِيدٌ﴾ (هود: 72-73).",
        "نشأ إسحاق في أكناف النبوة ببلاد كنعان بفلسطين، وتلقى عن والده علوم التوحيد وإقامة الصلاة وإيتاء الزكاة والعدل بين الناس. حمل لواء الرسالة بعد وفاة أبيه في بيت المقدس وما حوله.",
        "أثنى الله عليه في القرآن الكريم مع آبائه فقال: ﴿وَاذْكُرْ عِبَادَنَا إبْرَاهِيمَ وَإِسْحَاقَ وَيَعْقُوبَ أُولِي الْأَيْدِي وَالْأَبْصَارِ * إِنَّا أَخْلَصْنَاهُمْ بِخَالِصَةٍ ذِكْرَى الدَّارِ﴾ (ص: 45-46).",
        "اتصف إسحاق بالحكمة العميقة، والوقار، وإكرام الضيف، ونشر السلام. رزقه الله بولدين توأمين هما العيص ويعقوب، ومن ذرية يعقوب انبثق أسباط بني إسرائيل وأنبياؤهم العظام كيوسف وموسى وداود وسليمان وعيسى عليهم السلام."
      ]
    },
    "keyLessons": {
      "en": [
        "Divine power transcends human limitations: miraculous doors open when hope seems impossible.",
        "Family traditions of worship and righteous scholarship pass immense blessings across generations.",
        "Quiet endurance, wisdom, and gentleness are towering prophetic virtues that cultivate peace."
      ],
      "ur": [
        "اللہ کی قدرت انسانی اسباب کی محتاج نہیں؛ جب تمام راہیں بند دکھائی دیں تب بھی الٰہی مدد کے دروازے کھل جاتے ہیں۔",
        "نیک گھرانوں میں علم و عبادت کی روایات نسل در نسل عظیم برکات کا سبب بنتی ہیں۔",
        "حلم، خاموش بردباری اور نرم مزاجی وہ نبوی اوصاف ہیں جو معاشرے میں امن و سکون قائم کرتے ہیں۔"
      ],
      "ar": [
        "قدرة الله تفوق كل المقاييس البشرية؛ لا يأس مع الله وإن انقطعت الأسباب الظاهرة.",
        "البيوت الصالحة القائمة على التوحيد تفيض بركاتها ونورها على الأجيال المتعاقبة.",
        "الحلم والوقار وسكون النفس صفات نبوية جليلة تبني المجتمعات في أمان وطمأنينة."
      ]
    }
  },
  {
    "id": "yaqub",
    "order": 10,
    "nameEn": "Yaqub (A.S.)",
    "nameUr": "حضرت یعقوب (ع)",
    "nameAr": "يعقوب عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Man of Beautiful Patience & Patriarch of the Tribes",
    "titleUr": "پیکرِ صبرِ جمیل اور اسرائیلِ امین",
    "titleAr": "صاحب الصبر الجميل وإسرائيل الأنبياء",
    "image": "/stories/covers/yaqub-v2.webp",
    "quranMention": "Mentioned 16 times in the Holy Quran (prominently in Surah Yusuf)",
    "summaryEn": "Also known as Isra'il, he endured decades of agonizing separation from his beloved son Yusuf with peerless 'Sabrun Jameel' (beautiful patience), proving that tears of grief never diminish unshakable faith.",
    "summaryUr": "آپ کو 'اسرائیل' کے لقب سے پکارا جاتا ہے۔ بیٹے یوسف کی جدائی میں برسوں صبرِ جمیل کا بے مثال مظاہرہ فرمایا۔ آپ کی آنکھیں غم سے سفید ہو گئیں مگر زبان پر شکوہ کے بجائے ہمیشہ شکر اور امید رہی۔",
    "summaryAr": "هو إسرائيل الله، ضرب المثل الخالد في 'الصبر الجميل' حين فُجع بفقده لولده الحبيب يوسف عقوداً طوالاً، فابيضت عيناه من الحزن وهو كظيم، حتى كافأه الله بجمعهما في مصر.",
    "fullStory": {
      "en": [
        "Prophet Yaqub (Jacob) was the son of Prophet Ishaq and the grandson of Prophet Ibrahim. Allah bestowed upon him the honorable title of *Isra'il* (which means 'Servant of Allah'), from whom the Twelve Tribes (*Bani Isra'il*) descended. Yaqub was blessed with twelve sons, among whom Yusuf (Joseph) and Binyamin (Benjamin) held a special sanctuary in his heart due to their radiant piety and innocence.",
        "The great trial of Yaqub's life commenced when young Yusuf confided in his father a celestial vision: eleven stars, the sun, and the moon prostrating before him. Recognizing the prophetic mantle destined for his son, Yaqub wisely instructed him: 'O my son, do not relate your vision to your brothers, lest they plan against you a plot. Indeed, Satan to man is a manifest enemy.' (Surah Yusuf 12:5).",
        "Overwhelmed by toxic jealousy, Yusuf's older brothers conspired against him, casting the boy into the dark depths of an abandoned well. They returned home at dusk weeping false tears, displaying Yusuf's shirt stained with false goat's blood, claiming a wild wolf had devoured him. Staring at the intact shirt, Yaqub knew in his soul that their story was false. Pierced with unbearable grief, he proclaimed his timeless covenant with Allah: 'Rather, your souls have enticed you to something, so patient endurance is most fitting (Sabrun Jameel). And Allah is the one sought for help against that which you describe.' (Surah Yusuf 12:18).",
        "For decades, Yaqub carried the crushing weight of separation. He wept until his eyes lost their sight from grief, becoming white with cataracts, yet his tongue never uttered a single word of complaint against his Creator. When his sons rebuked him for continually remembering Yusuf, the heartbroken father uttered words that echo through eternity: 'I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know. O my sons, go and find out about Yusuf and his brother, and despair not of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.' (Surah Yusuf 12:86-87).",
        "The glorious reward of unshakeable faith arrived in Allah's perfect timing. Yusuf had risen from slavery and prison to become the grand treasurer and minister of Egypt. When the brothers returned from Egypt carrying Yusuf's shirt, Yaqub cried out miles away in Canaan: 'Indeed, I perceive the scent of Yusuf, even if you think me senile!' When the garment was cast over his face, his vision was instantly restored.",
        "Yaqub and his entire family traveled to Egypt, where Yusuf welcomed his parents with open arms, raising them onto the royal throne as the eleven brothers prostrated in deep respect, fulfilling the celestial dream. On his deathbed in Egypt, Yaqub gathered his sons to secure the eternal legacy of Tawheed, asking them: 'What will you worship after me?' They answered with one voice: 'We will worship your God and the God of your fathers, Ibrahim, Ismail, and Ishaq—one God, and to Him we submit.' (Surah Al-Baqarah 2:133)."
      ],
      "ur": [
        "حضرت یعقوب علیہ السلام حضرت اسحاق کے فرزند اور حضرت ابراہیم کے پوتے تھے۔ اللہ تعالیٰ نے آپ کو 'اسرائیل' (اللہ کا بندہ) کا لقب عطا فرمایا، جس سے بارہ قبائل یعنی بنی اسرائیل کا وجود عمل میں آیا۔ اللہ تعالیٰ نے آپ کو بارہ بیٹے عطا فرمائے جن میں حضرت یوسف اور بن یامین اپنے غیر معمولی اخلاق، تقویٰ اور معصومیت کی بنا پر والد کی آنکھوں کا تارا تھے۔",
        "آپ کی زندگی کا عظیم ترین امتحان اس وقت شروع ہوا جب ننھے یوسف نے اپنے والد کو ایک خواب سنایا کہ گیارہ ستارے، سورج اور چاند میرے سامنے سجدہ ریز ہیں۔ حضرت یعقوب نے نبوت کی بصیرت سے پہچان لیا کہ اس بچے کو اللہ نبوت عطا فرمائے گا، چنانچہ فرمایا: 'اے میرے پیارے بیٹے! اپنا یہ خواب اپنے بھائیوں کے سامنے بیان نہ کرنا ورنہ وہ تمہارے خلاف کوئی سازش کریں گے، بیشک شیطان انسان کا کھلا دشمن ہے۔' (سورۃ یوسف)",
        "بڑے بھائی حسد کی آگ میں جل اٹھے اور انہوں نے حضرت یوسف کو ایک گہرے ویران کنویں میں پھینک دیا۔ شام کے وقت وہ روتے ہوئے گھر لوٹے اور حضرت یوسف کے کرتے پر بکری کا جھوٹا خون لگا کر لائے کہ یوسف کو بھیڑیا کھا گیا۔ حضرت یعقوب نے بے داغ کرتہ دیکھا تو حقیقت سمجھ گئے کہ بھیڑیا کھاتا تو کرتا ضرور پھٹتا۔ دل غم سے پارہ پارہ ہوا مگر زبان پر وہ تاریخی کلمہ آیا جس کی مثال تاریخ میں نہیں: 'بلکہ تمہارے نفس نے تمہارے لیے ایک بات گھڑ لی ہے، پس اب صبر ہی بہترین ہے (فَصَبْرٌ جَمِيلٌ)، اور جو تم بیان کرتے ہو اس پر اللہ ہی سے مدد مانگتا ہوں۔'",
        "جدائی کے طویل سال گزرتے گئے۔ حضرت یعقوب کا دل تڑپتا رہا اور مسلسل رونے کی وجہ سے آپ کی آنکھوں کی بینائی چلی گئی اور آنکھیں سفید ہو گئیں۔ مگر اس پورے عرصے میں زبان سے کبھی شکوہ یا ناشکری کا ایک لفظ نہ نکلا۔ جب بیٹوں نے کہا کہ آپ یوسف کو یاد کر کر کے جان دے دیں گے، تو اس درد مند باپ نے فرمایا: 'میں اپنے رنج اور غم کی فریاد صرف اللہ سے کرتا ہوں، اور میں اللہ کی طرف سے وہ جانتا ہوں جو تم نہیں جانتے۔ اے میرے بیٹو! جاؤ یوسف اور اس کے بھائی کی تلاش کرو اور اللہ کی رحمت سے کبھی مایوس نہ ہو، کیونکہ اللہ کی رحمت سے صرف کافر ہی مایوس ہوتے ہیں۔'",
        "بالآخر صبرِ جمیل کا شاندار صلہ ملا۔ حضرت یوسف کنویں اور قید خانے کی صعوبتوں سے گزر کر مصر کے عزیز اور خزانہ دار بن چکے تھے۔ جب بھائی مصر سے حضرت یوسف کا کرتہ لے کر کنعان کی طرف چلے، تو میلوں دور بیٹھے حضرت یعقوب نے فرمایا: 'مجھے یوسف کی خوشبو آ رہی ہے اگرچہ تم مجھے بہکا ہوا سمجھو!' جیسے ہی وہ کرتہ آپ کے چہرے پر ڈالا گیا، آنکھوں کی بینائی فوری طور پر لوٹ آئی۔",
        "پھر حضرت یعقوب اپنے پورے خاندان کے ساتھ مصر تشریف لائے جہاں حضرت یوسف نے شاہی اعزاز کے ساتھ استقبال کیا اور والدین کو تخت پر بٹھایا۔ وفات کے وقت حضرت یعقوب نے اپنے تمام بیٹوں کو جمع کر کے وہی وصیت فرمائی جو اسلام کی روح ہے: 'میرے بعد تم کس کی عبادت کرو گے؟' سب نے یک زبان ہو کر کہا: 'ہم آپ کے معبود اور آپ کے آباؤ اجداد ابراہیم، اسماعیل اور اسحاق کے اکیلے معبود کی عبادت کریں گے اور ہم اسی کے فرمانبردار ہیں۔' (سورۃ البقرہ)"
      ],
      "ar": [
        "يعقوب عليه السلام هو ابن إسحاق وحفيد إبراهيم، لقبه الله بـ 'إسرائيل' ومن أبنائه الاثني عشر انحدرت أسباط بني إسرائيل. وكان قلبه معلقاً بولديه يوسف وبنيامين لما تفرس فيهما من الطهر والبركة.",
        "بدأت ملحمة الابتلاء حين قص عليه يوسف رؤياه العجيبة بأحد عشر كوكباً والشمس والقمر رأيتهم لي ساجدين، فحذره بحكمة الأب المشفق: ﴿يَا بُنَيَّ لَا تَقْصُصْ رُؤْيَاكَ عَلَى إِخْوَتِكَ فَيَكِيدُوا لَكَ كَيْداً إِنَّ الشَّيْطَانَ لِلْإِنْسَانِ عَدُوٌّ مُبِينٌ﴾ (يوسف: 5).",
        "أوقد الحسد نار الغدر في قلوب الإخوة، فألقوا يوسف في غيابة الجب، وجاءوا أباهم عشاءً يبكون بقميص ملطخ بدم كذب زاعمين أن الذئب أكله. أدرك يعقوب مكرهم، وتفطر كبده لكنه رد بكلمة خلدها الزمان: ﴿بَلْ سَوَّلَتْ لَكُمْ أَنْفُسُكُمْ أَمْراً فَصَبْرٌ جَمِيلٌ وَاللَّهُ الْمُسْتَعَانُ عَلَى مَا تَصِفُونَ﴾ (يوسف: 18).",
        "توالت العقود، وبكى يعقوب حتى ابيضت عيناه من الحزن والكمد، غير أنه لم يقنط ولم يتسخط على قدر الله قط. وحين لامه بنوه على دوام ذكره ليوسف قال قولته العظيمة: ﴿إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ * يَا بَنِيَّ اذْهَبُوا فَتَحَسَّسُوا مِنْ يُوسُفَ وَأَخِيهِ وَلَا تَيْأَسُوا مِنْ رَوْحِ اللَّهِ﴾ (يوسف: 86-87).",
        "أثمر الصبر الجميل؛ صار يوسف عزيز مصر وحاكم خزائنها. وحين فصلت عير الإخوة بقميص يوسف من مصر، قال يعقوب في كنعان: ﴿إِنِّي لَأَجِدُ رِيحَ يُوسُفَ لَوْلَا أَنْ تُفَنِّدُونِ﴾، فلما ألقي القميص على وجهه ارتد بصيراً بقدرة القادر المقتدر.",
        "هاجر يعقوب بآله جميعاً إلى مصر، ورفع يوسف أبويه على العرش وخروا له سجداً تحقيقاً للرؤيا. وعند سكرات الموت جمع بنيه ليوثق أمانة التوحيد: ﴿مَا تَعْبُدُونَ مِنْ بَعْدِي قَالُوا نَعْبُدُ إِلَهَكَ وَإِلَهَ آبَائِكَ إِبْرَاهِيمَ وَإِسْمَاعِيلَ وَإِسْحَاقَ إِلَهاً وَاحِداً وَنَحْنُ لَهُ مُسْلِمُونَ﴾ (البقرة: 133)."
      ]
    },
    "keyLessons": {
      "en": [
        "'Sabrun Jameel' (Beautiful Patience) means weeping in devotion to Allah without expressing anger or doubt.",
        "Despair of Allah's mercy is forbidden; the deepest darkness is always followed by the dawn of relief.",
        "The ultimate legacy a parent can bequeath to their children is unwavering faith in Tawheed."
      ],
      "ur": [
        "'صبرِ جمیل' کا مطلب ہے کہ دل کتنا ہی غمگین ہو، شکوہ صرف اللہ کے سامنے کیا جائے اور زبان پر شکر رہے۔",
        "اللہ کی رحمت سے مایوسی کفر ہے؛ غم کی تاریک ترین رات کے بعد ہمیشہ راحت کی صبح نمودار ہوتی ہے۔",
        "ایک والد کی طرف سے اپنی اولاد کے لیے سب سے قیمتی اور لازوال وراثت خالص توحید کا عقیدہ ہے۔"
      ],
      "ar": [
        "الصبر الجميل هو أن يحزن القلب وتدمع العين مع تفويض الشكوى لله وحده بلا تسخط أو جزع.",
        "اليأس من روح الله وفرجه محرم؛ أشد ساعات الليل ظلمة هي التي يعقبها انبلاج الفجر.",
        "أعظم وصية يتركها الوالد لفلذات كبده على فراش الموت هي الثبات على التوحيد الخالص."
      ]
    }
  },
  {
    "id": "yusuf",
    "order": 11,
    "nameEn": "Yusuf (A.S.)",
    "nameUr": "حضرت یوسف (ع)",
    "nameAr": "يوسف عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Paragon of Beauty, Patience & The Ruler of Egypt",
    "titleUr": "احسن القصص اور پیکرِ عفت و حیا",
    "titleAr": "الصديق البار وأجمل الخلق خلقاً وخُلقاً",
    "image": "/stories/covers/yusuf-v2.webp",
    "quranMention": "Celebrated in Surah Yusuf, honored by Allah as 'Ahsan al-Qasas' (The Best of Stories)",
    "summaryEn": "Cast into a dark desert well by jealous brothers and sold into Egyptian slavery, Prophet Yusuf (A.S.) chose imprisonment over temptation before divine dream interpretation raised him to become the revered Treasurer and Governor of Egypt.",
    "summaryUr": "حاسد بھائیوں نے اندھے کنویں میں ڈالا، مصر کے بازار میں بکے اور صبر و پاکدامنی پر قید کاٹی۔ اللہ تعالیٰ نے خوابوں کی تعبیر کا علم دیا اور مصر کے تخت پر بٹھا کر خاندان کو عزت بخشی۔",
    "summaryAr": "ألقاه إخوته في غيابة الجب وبِيع بثمن بخس، فعفّ عن الحرام وصبر على السجن، فعلمه ربه تأويل الأحاديث ومكن له في الأرض عزيزاً لمصر.",
    "fullStory": {
      "en": [
        "As a young boy in Canaan, Yusuf saw a majestic vision: eleven stars, the sun, and the moon prostrating before him. His loving father, Prophet Yaqub, recognized the prophetic mantle upon him and tenderly cautioned: 'O my son, do not relate your vision to your brothers, lest they contrive against you a plot.' (Surah Yusuf 12:5).",
        "Consumed by bitter jealousy over their father's profound affection for Yusuf, his elder brothers plotted to remove him. Luring him to the pastures under the guise of play, they stripped him of his tunic and cast him into the freezing depths of an abandoned desert well, returning to their weeping father with sheep's blood smeared upon his shirt, falsely claiming a wolf had devoured him.",
        "A passing merchant caravan found the radiant youth and sold him in the slave bazaars of Memphis to the Aziz of Egypt. In the palace, Yusuf grew into breathtaking physical and spiritual nobility. When the Aziz's wife attempted to seduce him behind locked doors, Yusuf fled toward the threshold, declaring: 'Allah forbid! Indeed, my master has treated me well; indeed, wrongdoers will not succeed.' (Surah Yusuf 12:23).",
        "Unjustly accused to suppress palace scandal, Yusuf chose the purity of a stone prison over moral surrender, praying: 'My Lord, prison is more desirable to me than that to which they invite me.' For years in confinement, he illuminated the dungeon with pure monotheism, faithfully interpreting the dreams of two fellow prisoners with divine insight.",
        "Years later, Pharaoh was tormented by a terrifying dream of seven lean cows devouring seven fat cows, and seven withered ears of grain consuming seven lush green ears. None of the royal magicians could decipher it. Summoned from prison, Yusuf explained with divine clarity: seven years of abundant harvests would be followed by seven years of devastating famine, proposing an ingenious economic plan to store surplus grain.",
        "Vindicated of all accusations, Yusuf was freed and invested with royal robes, absolute authority, and the treasuries of Egypt. When severe famine struck the entire region, his remorseful brothers arrived seeking food. Rather than exacting revenge, Yusuf revealed his identity in tears of mercy, proclaiming the immortal words: 'No blame will there be upon you today. Allah will forgive you; and He is the most merciful of the merciful.' (Surah Yusuf 12:92). His parents were reunited with him, prostrating in gratitude as his boyhood dream was gloriously fulfilled."
      ],
      "ur": [
        "بچپن میں حضرت یوسف علیہ السلام نے ایک خواب دیکھا کہ گیارہ ستارے، سورج اور چاند ان کے آگے سجدہ کر رہے ہیں۔ والد حضرت یعقوب علیہ السلام نے نبوت کی نشانی پہچان کر شفقت سے فرمایا: 'اے میرے پیارے بیٹے! اپنا یہ خواب اپنے بھائیوں کے سامنے بیان نہ کرنا، کہیں وہ تمہارے خلاف کوئی سازش نہ تیار کریں۔' (سورۃ یوسف)",
        "بھائیوں کے دل حسد کی آگ میں جل رہے تھے۔ وہ یوسف کو بہلا پھسلا کر جنگل لے گئے، ان کا کرتا اتارا اور اندھے کنویں کی تاریکیوں میں پھینک دیا۔ باپ کے پاس جھوٹے آنسو بہاتے ہوئے آئے اور خون آلود کرتا دکھا کر کہا کہ یوسف کو بھیڑیا کھا گیا۔ حضرت یعقوب نے بے پناہ غم کے باوجود فرمایا: 'فَصَبْرٌ جَمِيلٌ' (بس صبر ہی بہتر ہے)۔",
        "قافلے والوں نے کنویں سے نکال کر مصر کے بازار میں غلام بنا کر عزیزِ مصر کے ہاتھ بیچ دیا۔ محل میں آپ حسن و کردار کے بے مثال پیکر بنے۔ جب زلیخا نے بند دروازوں میں گناہ کی دعوت دی تو آپ دروازے کی طرف بھاگے اور فرمایا: 'مَعَاذَ اللَّهِ' (اللہ کی پناہ! میرے رب نے مجھے اچھا ٹھکانہ دیا، ظالم کبھی فلاح نہیں پاتے)۔",
        "بے گناہ ہونے کے باوجود آپ نے محل کے دباؤ پر کئی سال قید خانے میں گزارنا پسند فرمایا اور دعا کی: 'اے میرے رب! یہ قید مجھے اس گناہ سے کہیں زیادہ پسند ہے جس کی طرف یہ مجھے بلاتی ہیں۔' قید خانے میں آپ نے قیدیوں کو توحید کی تعلیم دی اور ان کے خوابوں کی سچی تعبیر بتائی۔",
        "جب مصر کے بادشاہ نے سات موٹی اور سات دبلی گایوں کا پریشان کن خواب دیکھا تو حضرت یوسف کو بلایا گیا۔ آپ نے خواب کی تعبیر بتائی کہ سات سال خوب بارش اور خوشحالی کے بعد سات سال سخت قحط پڑے گا، اور اناج کو سنبھالنے کی شاندار زرعی حکمتِ عملی پیش فرمائی۔",
        "بادشاہ نے آپ کی دانائی اور امانت داری دیکھ کر مصر کے تمام خزانوں اور حکمرانی کی باگ ڈور آپ کے سپرد کر دی۔ جب قحط کے دوران غلے کے محتاج ہو کر وہی حاسد بھائی دربار میں جھکے تو آپ نے انتقام لینے کے بجائے فرمایا: 'لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ' (آج تم پر کوئی ملامت نہیں، اللہ تمہیں معاف فرمائے)۔ والدین کو مصر بلایا، تخت پر بٹھایا اور وہ بچپن کا خواب حقیقت بن کر بارگاہِ خداوندی کے شکر میں تبدیل ہو گیا۔"
      ],
      "ar": [
        "رأى يوسف عليه السلام في صباه رؤيا جليلة: أحد عشر كوكباً والشمس والقمر له ساجدين. فعلم أبوه يعقوب شرف منزلته ونهاه عن قصها على إخوته حذراً من كيدهم وحسدهم.",
        "أجمع إخوته على تغييبه، فألقوه في ظلمات الجب، وجاءوا أباهم عشاءً يبكون بدم كذب على قميصه، فصبر يعقوب صبراً جميلاً موقناً بفرج الله.",
        "التقطته سيارة وباعوه في مصر لعزيزها، ولما بلغ أشده آتاه الله حكماً وعلماً. وراودته التي هو في بيتها عن نفسه وغلقت الأبواب، فقال معاذ الله، واستبق الباب فعصمه الله وطهره.",
        "آثر يوسف السجن على معصية الله قائلاً: ﴿رَبِّ السِّجْنُ أَحَبُّ إِلَيَّ مِمَّا يَدْعُونَنِي إِلَيْهِ﴾، ولبث في السجن بضع سنين يدعو إلى التوحيد الخالص ويعبر الرؤى بالحق.",
        "رأى ملك مصر رؤيا البقرات السبع والسنبلات، فعجز عنها الملأ، ففسرها يوسف بخطة اقتصادية محكمة تدخر الطعام للسنوات العجاف، فبرئت ساحته واستخلصه الملك لنفسه وجعله على خزائن الأرض حفيظاً عليماً.",
        "جاء إخوته ممتارين لا يعرفونه، فعفا عنهم بحلم نبوي كريم: ﴿لا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ يَغْفِرُ اللَّهُ لَكُمْ وَهُوَ أَرْحَمُ الرَّاحِمِينَ﴾، ودخل عليه أبواه فخروا له سجداً، فقال: ﴿يَا أَبَتِ هَذَا تَأْوِيلُ رُؤْيَايَ مِنْ قَبْلُ قَدْ جَعَلَهَا رَبِّي حَقّاً﴾."
      ]
    },
    "keyLessons": {
      "en": [
        "Moral purity and chastity in secret are rewarded by Allah with public glory and leadership.",
        "Patience through trial (Sabr) is never wasted; the pit of a well can lead to the throne of a kingdom.",
        "Noble forgiveness over those who wronged you is the absolute pinnacle of prophetic virtue."
      ],
      "ur": [
        "تنہائی میں گناہ سے بچنا اور پاکدامنی اختیار کرنا انسان کو دنیا و آخرت میں عزت کا تاج پہناتا ہے۔",
        "صبر اور اللہ پر کامل توکل اندھے کنویں کی تاریکی سے نکال کر مصر کے تخت تک پہنچا دیتا ہے۔",
        "طاقت اور اختیار کے باوجود معاف کر دینا اور دل میں کینہ نہ رکھنا انبیاء کا سب سے بڑا شیوہ ہے۔"
      ],
      "ar": [
        "العفة ومراقبة الله في الخلوات مفتاح الرفعة والتمكين في الدنيا والآخرة.",
        "الصبر على البلاء عاقبته حميدة؛ فمن ظلمات الجب والسجن خرج عزيز مصر.",
        "العفو عند المقدرة والإحسان لمن أساء هما ذروة الأخلاق النبوية الشريفة."
      ]
    }
  },
  {
    "id": "ayyub",
    "order": 12,
    "nameEn": "Ayyub (A.S.)",
    "nameUr": "حضرت ایوب (ع)",
    "nameAr": "أيوب عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Sovereign of Patience & The Miraculous Healing",
    "titleUr": "صبرِ ایوب کے پیکر اور شفا یافتہ پیغمبر",
    "titleAr": "نبي الصبر الجميل ونموذج الشكر في البلاء",
    "image": "/stories/covers/ayyub-v2.webp",
    "quranMention": "Surah Al-Anbiya: 'Indeed, adversity has touched me, and You are the most merciful of the merciful'",
    "summaryEn": "Blessed with vast wealth and a noble family, Prophet Ayyub (A.S.) lost his health, fortune, and children in severe tribulation. For eighteen years, his tongue overflowed with praise until Allah commanded him to strike the earth, restoring double his blessings.",
    "summaryUr": "بے پناہ دولت، اولاد اور صحت کے امتحان میں مبتلا ہوئے۔ اٹھارہ سال شدید بیماری اور غربت کے باوجود زبان پر شکوہ نہ لائے۔ اللہ کے حکم سے پاؤں مارا اور ٹھنڈے چشمے سے کامل شفا اور دگنی نعمتیں پائیں۔",
    "summaryAr": "ابتلاه الله في ماله وأولاده وجسده فصبر ثماني عشرة سنة حامداً شاكراً، حتى نادى ربه ففجر له عيناً باردة اغتسل منها وشرب، فآتاه أهله ومثلهم معهم رحمة من عنده.",
    "fullStory": {
      "en": [
        "In the land of Hauran, Prophet Ayyub (Job) was endowed by Allah with vast estates, herds of cattle, fertile valleys, and a devoted family of children and kin. He used his immense wealth as a faithful trustee, sheltering orphans, feeding the destitute, and constantly glorifying the Lord with humility.",
        "Then descended the grand trial that would forever immortalize his name across human history. Within a brief span, fierce calamities destroyed his crops, fatal storms crushed his livestock, and an earthquake brought down his home, taking the lives of his beloved sons and daughters. Yet Ayyub fell prostrate, declaring: 'The Lord gave, and the Lord has taken away; blessed be the name of the Lord.'",
        "The trial deepened as a severe and painful illness afflicted his physical body, leaving only his heart and tongue intact. Friends departed and fair-weather companions turned away in fear of contagion. Through it all, his noble and devoted wife, Rahma, remained steadfast by his side, working manual labor to purchase bread for her ailing husband.",
        "For nearly eighteen years, Ayyub endured agonizing physical pain and social isolation without a whisper of complaint against Allah's decree. When his wife weeping asked why he did not pray for immediate healing, Ayyub replied with awe: 'Allah blessed me with eighty years of radiant health and prosperity; how can I not be patient for eighteen years of adversity?'",
        "When the trial reached its destined apex, Ayyub raised his heart in the gentlest, most respectful supplication recorded in scripture: 'Indeed, adversity has touched me, and You are the Most Merciful of the merciful.' (Surah Al-Anbiya 21:83). He did not demand relief; he merely acknowledged his frailty and called upon the divine mercy.",
        "Allah answered instantly: 'Strike the ground with your foot; here is a cool spring for bathing and for drinking.' (Surah Sad 38:42). Ayyub struck the earth with his heel, and a miraculous, crystal-clear spring surged forth. As he washed and drank, every trace of illness vanished, and his youthful vigor and radiant beauty returned. Allah restored to him double the wealth, lush orchards, and a flourishing family, declaring with celestial honor: 'Indeed, We found him patient, an excellent servant. Indeed, he was one who repeatedly turned back to Us.' (Surah Sad 38:44)."
      ],
      "ur": [
        "سرزمینِ شام میں حضرت ایوب علیہ السلام کو اللہ رب العزت نے بے پناہ دولت، زرخیز باغات، مویشیوں کے ریوڑ اور نیک اولاد سے نواز رکھا تھا۔ آپ اس ساری دولت کو یتیموں، بیواؤں اور ناداروں پر خرچ کرتے اور ہر وقت اللہ کی تسبیح و تہلیل میں مگن رہتے۔",
        "پھر اللہ تعالیٰ نے آپ کا وہ تاریخی امتحان لیا جس نے تاریخ میں 'صبرِ ایوب' کو ضرب المثل بنا دیا۔ اچانک پے در پے مصائب آئے؛ کھیتیاں جل گئیں، مویشی ہلاک ہو گئے، اور چھت گرنے سے تمام پیارے بیٹے اور بیٹیاں لقمۂ اجل بن گئیں۔ اس قیامت خیز صدمے پر بھی حضرت ایوب سجدے میں گر پڑے اور بارگاہِ الٰہی میں شکر ادا کیا۔",
        "اس کے بعد آپ کے جسمِ مبارک میں شدید بیماری پھیل گئی۔ قریبی دوست اور شناسا چھوڑ گئے اور بستی کے لوگوں نے بستی سے باہر الگ بٹھا دیا۔ مگر آپ کی وفا شعار زوجہ محترمہ رحمہ نے بے مثال قربانی دی اور مزدوری کر کے اپنے بیمار شوہر کے لیے روٹی کا بندوبست کرتی رہیں۔",
        "اٹھارہ برس تک آپ اس شدید آزمائش میں رہے، مگر زبان پر شکوے کا ایک لفظ نہ آیا۔ جب اہلیہ نے عرض کی کہ آپ اللہ کے برگزیدہ نبی ہیں، شفا کی دعا کیوں نہیں فرماتے؟ تو آپ نے فرمایا: 'اللہ نے مجھے ستر سال تک صحت اور عیش و آرام میں رکھا، کیا میں اس کے لیے اٹھارہ سال صبر بھی نہیں کر سکتا؟'",
        "جب آزمائش کی انتہا ہو گئی تو آپ نے کمالِ ادب سے دعا مانگی: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ' (پروردگار! مجھے بیماری لگ گئی ہے اور تو سب رحم کرنے والوں سے بڑھ کر رحم فرمانے والا ہے)۔ آپ نے شکوہ نہیں کیا، بس اپنی عاجزی پیش کی۔",
        "اللہ تعالیٰ نے فوراً دعا قبول فرمائی اور وحی نازل کی: 'اپنا پاؤں زمین پر مارو، یہ ٹھنڈا چشمہ ہے نہانے اور پینے کے لیے۔' آپ نے پاؤں مارا تو زمزم کی طرح شفا بخش پانی ابل پڑا۔ نہاتے اور پیتے ہی سارا مرض کافور ہو گیا، چہرہ چودہویں کے چاند کی طرح چمک اٹھا۔ اللہ نے نہ صرف پرانی نعمتیں لوٹا دیں بلکہ دگنی دولت اور اولاد عطا فرمائی اور سندِ رضا عطا کی: 'إِنَّا وَجَدْنَاهُ صَابِرًا نِعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ' (بیشک ہم نے اسے صابر پایا، وہ بہترین بندہ تھا جو ہر حال میں رجوع کرتا تھا)۔"
      ],
      "ar": [
        "أنعم الله على أيوب عليه السلام بأرض حوران بنعيم وافر من الأموال والبنين والأنعام، فكان نبيّاً شكوراً بارّاً بالفقراء والمساكين والأيتام.",
        "ثم ابتلاه الله عز وجل ابتلاءً عظيماً ليكون أسوة للصابرين؛ فهلكت مواشيه، واحترقت زروعه، ومات أولاده جميعاً في حادثة انهيار البيت، فما زاد على أن خر ساجداً شاكراً ربه على قضائه.",
        "تفاقم البلاء بمرض شديد نزل ببدنه حتى انقطع عنه الناس وعزله أهل قريته مخافة العدوى، ولم يبق معه إلا زوجته الصابرة الوفية تخدمه وتكدح لتأتي له بقوت يومه.",
        "مكث في بلائه قريباً من ثماني عشرة سنة، ولسانه وقلبه لا يفتران عن ذكر الله وحمده، وحين استبطأت امرأته الفرج طلبت منه الدعاء فاستحيا من ربه أن يسأل الشفاء وقد عاش عقوداً في النعماء والصحة.",
        "ولما بلغ الضيق منتهاه تضرع بأرق دعاء في التنزيل: ﴿أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ﴾ (الأنبياء: 83)، متوسلاً برحمة الله المطلقة دون اعتراض.",
        "أمر الله نبيه أن يركض برجله الأرض، فنبعت له عين ماء باردة، فاغتسل منها وشرب، فبرأ ظاهره وباطنه من كل داء، ورد الله عليه أهله ومثلهم معهم وأفاض عليه الذهب والنعم، وشهد له بالكمال: ﴿إِنَّا وَجَدْنَاهُ صَابِراً نِعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ﴾ (ص: 44)."
      ]
    },
    "keyLessons": {
      "en": [
        "True patience (Sabr) is remaining contented with Allah's decree while the tongue continues praising Him.",
        "Adversity and sickness are not signs of divine anger; they are furnaces that purify and elevate chosen souls.",
        "Polite, humble supplication that honors Allah's majesty attracts miraculous healing and doubled restoration."
      ],
      "ur": [
        "حقیقی صبر یہ ہے کہ مصیبت میں بھی دل راضی برضا رہے اور زبان شکر و حمد سے تر رہے۔",
        "بیماری اور غربت اللہ کی ناراضگی کی علامت نہیں بلکہ روح کو کندن بنا کر درجات بلند کرنے کا ذریعہ ہے۔",
        "ادب کے ساتھ اللہ کی بارگاہ میں عاجزی پیش کرنا ناممکن کو ممکن اور دگنی شفا میں بدل دیتا ہے۔"
      ],
      "ar": [
        "الصبر الجميل هو الرضا بالقضاء مع استمرار اللسان في حمد الله وشكره.",
        "الابتلاء في الدنيا ليس دليلاً على هوان العبد عند ربه، بل هو تمحيص ورفعة للدرجات.",
        "الأدب في الدعاء والاعتراف بالضعف يستنزلان الشفاء العاجل والرحمات المضاعفة."
      ]
    }
  },
  {
    "id": "shuayb",
    "order": 13,
    "nameEn": "Shu'ayb (A.S.)",
    "nameUr": "حضرت شعیب (ع)",
    "nameAr": "شعيب عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "Khatib al-Anbiya & The Champion of Economic Justice",
    "titleUr": "خطیب الانبیاء اور عدل و انصاف کے علمبردار",
    "titleAr": "خطيب الأنبياء ورسول أهل مدين وأصحاب الأيكة",
    "image": "/stories/covers/shuayb-v2.webp",
    "quranMention": "Mentioned 11 times in the Holy Quran (Surahs Al-A'raf, Hud, Ash-Shu'ara)",
    "summaryEn": "Sent to the affluent merchants of Midian and the forest dwellers of Al-Aykah. Known as 'Khatib al-Anbiya' for his unmatched eloquence, he fiercely condemned fraudulent weights and systemic highway robbery until an earthquake and fiery cloud destroyed them.",
    "summaryUr": "اہلِ مدین کی طرف بھیجے گئے، خطیب الانبیاء کہلاتے ہیں۔ ناپ تول میں کمی، دھوکہ دہی اور ڈکیتی کے خلاف فصیح و بلیغ دلائل دیے، نہ ماننے پر خوفناک زلزلے اور سائبان کے عذاب نے قوم کو مٹا دیا۔",
    "summaryAr": "أرسل إلى أهل مدين وأصحاب الأيكة، لُقب بخطيب الأنبياء لبلاغته، دعاهم إلى التوحيد وإيفاء الكيل والميزان ونهاهم عن الفساد، فأهلكهم الله بالرجفة ويوم الظلة.",
    "fullStory": {
      "en": [
        "Positioned strategically along the vital trade routes between Yemen and Syria lay the prosperous city of Madyan (Midian) and the lush oasis of Al-Aykah. The inhabitants were blessed with wealth and agricultural bounty, but their society was rotting with two lethal sins: the worship of false idols and systematic economic fraud in business.",
        "The merchants of Midian had institutionalized deception; they used heavy weights when purchasing from traders and lightened weights when selling to customers, robbing travelers and small merchants of their rightful earnings. Highway robbery along trade caravans had become accepted practice.",
        "To awaken their hardened consciences, Allah raised Prophet Shu'ayb, known in Islamic tradition as 'Khatib al-Anbiya' (The Orator of the Prophets) because of the breathtaking eloquence, irrefutable logic, and warmth of his speech: 'O my people, worship Allah; you have no deity other than Him. Give full measure and weight, and do not deprive people of their due, and do not cause corruption upon the earth after its reformation.' (Surah Al-A'raf 7:85).",
        "The arrogant elites scoffed at his moral sermons, sneering with sarcasm: 'O Shu'ayb, does your prayer command you that we should leave what our fathers worshipped or that we should stop doing what we please with our wealth?' (Surah Hud 11:87). They threatened to stone him to death were it not for the protection of his clan.",
        "Shu'ayb pleaded with heartfelt sincerity: 'I only intend reform to the best of my ability. And my success is not but through Allah. Upon Him I have relied, and to Him I return.' (Surah Hud 11:88). He reminded them of the horrific fates of the people of Nuh, Hud, Saleh, and their nearby neighbors in the valley of Lut, urging them to seek immediate forgiveness from their merciful Lord.",
        "When they defied him, challenging him to cause pieces of the sky to fall upon them, the divine punishment manifested. First came an unbearable, suffocating heat that boiled the air for seven days. Seeing an ominous dark cloud drift overhead, they rushed under it seeking shade, whereupon fire and thunderbolts rained down from the cloud (the Day of the Canopy / Yawm az-Zullah), followed by a violent earthquake (Ar-Rajfah) that left them lifeless in their homes as though they had never dwelled there. Shu'ayb turned away in sorrow, having fulfilled his sacred trust."
      ],
      "ur": [
        "شام اور حجاز کے تجارتی راستے پر مدین اور ایکہ کی سرسبز و شاداب بستیاں آباد تھیں۔ ان بستیوں کے لوگ دولت کی ریل پیل میں مست تھے مگر دو سنگین برائیوں میں مبتلا تھے: شرک اور ناپ تول میں دھوکہ دہی۔",
        "مدین کے تاجروں کا طریقہ یہ تھا کہ جب دوسروں سے مال خریدتے تو زیادہ لیتے اور جب گاہک کو بیچتے تو کم ناپتے اور تولتے۔ اس کے علاوہ راستوں پر ناکے لگا کر قافلوں کو لوٹنا اور مسافروں کو ہراساں کرنا ان کا روزمرہ کا معمول بن چکا تھا۔",
        "اللہ پاک نے ان کی اصلاح کے لیے حضرت شعیب علیہ السلام کو مبعوث فرمایا۔ آپ کو اپنے فصیح بیان، پرتاثیر گفتگو اور دلنشین دلائل کی وجہ سے 'خطیب الانبیاء' کہا جاتا ہے۔ آپ نے فرمایا: 'اے میری قوم! اللہ کی عبادت کرو جس کے سوا تمہارا کوئی معبود نہیں۔ ناپ اور تول پورا کرو، لوگوں کو ان کی چیزیں کم نہ دو اور زمین میں اصلاح کے بعد فساد نہ پھیلاؤ۔' (سورۃ الاعراف)",
        "قوم کے مغرور سرداروں نے آپ کا تمسخر اڑایا اور طنز سے کہا: 'اے شعیب! کیا تمہاری نماز تمہیں یہ سکھاتی ہے کہ ہم اپنے باپ دادا کے معبودوں کو چھوڑ دیں یا اپنے مال میں اپنی مرضی سے تصرف کرنا بند کر دیں؟' انہوں نے دھمکی دی کہ اگر تمہارا خاندان رکاوٹ نہ ہوتا تو ہم تمہیں سنگسار کر دیتے۔",
        "آپ نے کمالِ شفقت سے فرمایا: 'میرا مقصد تو صرف اپنی بساط بھر اصلاح کرنا ہے۔ میری توفیق صرف اللہ ہی کی مدد سے ہے، اسی پر میرا بھروسہ ہے اور اسی کی طرف میں رجوع کرتا ہوں۔' آپ نے انہیں قومِ نوح، ہود، صالح اور لوط کے عبرتناک انجام یاد دلائے۔",
        "جب وہ اپنی سرکشی پر اڑے رہے تو عذابِ الٰہی نازل ہوا۔ پہلے سات دن تک ایسی دم گھونٹ دینے والی گرمی پڑی کہ پانی ابلنے لگا۔ پھر آسمان پر ایک گہرا بادل نمودار ہوا، لوگ سائے کے لالچ میں اس کے نیچے جمع ہوئے تو اس سے آگ اور بجلی کے شعلے برسے (عذابِ یومِ ظلہ)، اور ایک ہولناک زلزلے نے پوری قوم کو اوندھے منہ ڈھیر کر دیا۔ حضرت شعیب علیہ السلام نے دکھ سے منہ موڑ لیا کہ میں نے تو تمہیں حق پہنچا دیا تھا۔"
      ],
      "ar": [
        "كان أهل مدين وأصحاب الأيكة يعيشون في رغد من العيش على طريق القوافل، إلا أنهم جمعوا بين الشرك والفساد الاقتصادي الممنهج بتطفيف الكيل والميزان وبخس الناس أشياءهم وقطع الطريق.",
        "بعث الله فيهم شعيباً عليه السلام، ولقب بـ'خطيب الأنبياء' لحسن مراجعته وبلاغة حجته وفصاحة لسانه، فناداهم: ﴿يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ قَدْ جَاءَتْكُمْ بَيِّنَةٌ مِنْ رَبِّكُمْ فَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ وَلا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ﴾ (الأعراف: 85).",
        "سخر منه رؤساء قومه قائلين بتهكم: ﴿قَالُوا يَا شُعَيْبُ أَصَلاتُكَ تَأْمُرُكَ أَنْ نَتْرُكَ مَا يَعْبُدُ آبَاؤُنَا أَوْ أَنْ نَفْعَلَ فِي أَمْوَالِنَا مَا نَشَاءُ﴾ (هود: 87)، وتوعدوه بالرجم والطرد.",
        "رد عليهم بقلب ناصح مشفق: ﴿إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ مَا اسْتَطَعْتُ وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ﴾ (هود: 88)، وذكرهم بما أصاب قوم نوح وهود وصالح وقوم لوط.",
        "أصروا على طغيانهم واستعجلوا العذاب، فسلط الله عليهم حراً شديداً لا يدفع، حتى رأوا سحابة ظليلة فاجتمعوا تحتها يستظلون بها، فأمطرت عليهم ناراً وصواعق وهو ﴿عَذَابُ يَوْمِ الظُّلَّةِ﴾، وأخذتهم الرجفة والصيحة فأصبحوا في دارهم جاثمين.",
        "نجى الله شعيباً والذين آمنوا معه برحمة منه، وتولى عنهم قائلاً: ﴿يَا قَوْمِ لَقَدْ أَبْلَغْتُكُمْ رِسَالاتِ رَبِّي وَنَصَحْتُ لَكُمْ فَكَيْفَ آسَى عَلَى قَوْمٍ كَافِرِينَ﴾."
      ]
    },
    "keyLessons": {
      "en": [
        "Economic morality and honest trade weights are direct divine commands, not merely secular conventions.",
        "Wealth acquired through fraud, bribery, and price-gouging invites systemic societal destruction.",
        "Eloquence and logical communication must always be tempered with heartfelt compassion for people."
      ],
      "ur": [
        "دیانت داری اور کاروبار میں سچائی محض دنیاوی معاملہ نہیں بلکہ اللہ کا براہِ راست ایمانی حکم ہے۔",
        "دھوکہ دہی، ناجائز منافع خوری اور کم تولنے سے حاصل کی گئی دولت قوموں پر بربادی اور زوال لاتی ہے۔",
        "فصاحت و بلاغت اور خوبصورت بیان کا اصل مقصد لوگوں کو سچائی اور انصاف کی راہ دکھانا ہے۔"
      ],
      "ar": [
        "العدالة الاقتصادية وإيفاء المكاييل فريضة شرعية وركيزة أساسية لصلاح المجتمعات.",
        "الكسب القائم على الغش والاحتكار وبخس حقوق الناس ممحوق البركة ومستوجب للعقوبة.",
        "البلاغة وحسن البيان سلاح الداعية المخلص لإقامة الحجة وإيقاظ الضمائر الحية."
      ]
    }
  },
  {
    "id": "musa",
    "order": 14,
    "nameEn": "Musa (A.S.)",
    "nameUr": "حضرت موسیٰ (ع)",
    "nameAr": "موسى عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "Kalimullah & The Great Deliverer of Bani Isra'il",
    "titleUr": "کلیم اللہ اور فرعون کے تخت کو گرانے والے پیغمبر",
    "titleAr": "كليم الله ورسول بني إسرائيل العظيم وقاهر الطغاة",
    "image": "/stories/covers/musa-v2.webp",
    "quranMention": "The most frequently mentioned prophet in the Quran (136 times across 34 Surahs)",
    "summaryEn": "Cast upon the Nile in a reed basket as an infant and raised inside Pharaoh's royal palace, Prophet Musa (A.S.) was spoken to directly by Allah at Mount Sinai. Armed with the miraculous staff and radiant hand, he parted the Red Sea and shattered Pharaoh's empire.",
    "summaryUr": "تابوت میں بہہ کر فرعون کے محل میں پرورش پائی، کوہِ طور پر کلیم اللہ کا شرف پایا۔ عصا اور یدِ بیضا کے معجزات سے فرعون کو للکارا، بحرِ قلزم کو دو لخت کر کے بنی اسرائیل کو نجات بخشی۔",
    "summaryAr": "ألقي في اليم رضيعاً ورُبي في قصر عدوه، كلمه ربه تكليماً عند الطور، وفلق له البحر بعصاه وأغرق فرعون وجنوده وأنزل عليه التوراة نوراً وهدى.",
    "fullStory": {
      "en": [
        "In ancient Egypt, Pharaoh (Fir'awn) reigned as a brutal tyrant who declared himself supreme deity and enslaved the children of Israel (Bani Isra'il). Terrified by a prophecy that a Hebrew boy would overthrow his throne, Pharaoh decreed the butchery of every newborn Hebrew male child.",
        "To save newborn Musa, Allah inspired his weeping mother to place him inside a watertight wicker basket and cast him upon the river Nile. The gentle currents carried the basket straight into the private bathing gardens of Pharaoh's palace. Pharaoh's righteous wife, Asiya, looked into the infant's face and fell in love with him, pleading: 'He will be a comfort of the eye for me and for you. Do not kill him; perhaps he will benefit us.' (Surah Al-Qasas 28:9). By divine design, Musa was raised inside the very palace of his enemy and nursed by his own mother.",
        "As a young man, Musa intervened to defend an oppressed Israelite, accidentally killing an Egyptian taskmaster. Fleeing across the Sinai desert to Midian, he watered the flocks of two maidens at a well, worked for their righteous father for ten years, and married his daughter.",
        "While returning with his family through the frozen night of Mount Sinai (Tur), Musa spotted a miraculous luminous fire burning on the mountain. As he approached, Allah's majestic voice echoed through the sacred valley of Tuwa: 'O Musa, indeed I am Allah, Lord of the worlds... Throw down your staff!' (Surah Al-Qasas 28:30-31). His wooden staff transformed into a living, slithering serpent, and his hand shone with blinding white radiance without defect. Musa was commissioned with his brother Harun to confront Pharaoh.",
        "Musa entered Pharaoh's grand court, demanding the liberation of Bani Isra'il. Pharaoh assembled Egypt's elite sorcerers to humiliate Musa. The magicians threw their ropes and rods, creating optical illusions of writhing snakes. Musa cast his staff, and it swallowed their illusions whole. The humbled magicians prostrated immediately, crying: 'We have believed in the Lord of Harun and Musa!' Enraged, Pharaoh subjected the land to nine catastrophic plagues before Musa led his people out into the Sinai night.",
        "Trapped at the shore of the Red Sea with Pharaoh's thundering chariots behind them, the panicked Israelites cried: 'Indeed, we are overtaken!' Musa proclaimed with unshakeable certainty: 'No! Indeed, with me is my Lord; He will guide me.' (Surah Ash-Shu'ara 26:61-62). Allah commanded him to strike the sea with his staff. The colossal waters split instantly into twelve dry pathways flanked by towering walls of water. Musa and his people crossed safely; when Pharaoh and his armies charged into the passage, the crushing waves collapsed upon them, ending four centuries of tyranny in a single moment."
      ],
      "ur": [
        "مصر کے متکبر فرعون نے خدائی کا دعویٰ کر رکھا تھا اور بنی اسرائیل کو بدترین غلامی میں جکڑ دیا تھا۔ نجومیوں کی پیشگوئی سن کر کہ بنی اسرائیل کا ایک لڑکا اس کا تخت الٹ دے گا، اس نے ہر نومولود اسرائیلی لڑکے کو ذبح کرنے کا ظالمانہ حکم جاری کر دیا۔",
        "جب حضرت موسیٰ علیہ السلام پیدا ہوئے تو اللہ نے ان کی والدہ کے دل میں القا فرمایا کہ بچے کو صندوق میں رکھ کر دریائے نیل کی لہروں کے سپرد کر دو۔ دریا صندوق کو بہا کر سیدھا فرعون کے محل لے گیا۔ فرعون کی نیک دل ملکہ آسیہ نے بچے کو دیکھا تو دل میں محبت جاگ اٹھی اور فرمایا: 'یہ میری اور تیری آنکھوں کی ٹھنڈک ہے، اسے قتل نہ کرو۔' اس طرح اللہ کی قدرت سے موسیٰ کی پرورش خود فرعون کے محل میں ہوئی اور دودھ پلانے کے لیے ان کی حقیقی ماں کو ہی واپس بلایا گیا۔",
        "جوانی میں ایک اسرائیلی مظلوم کی مدد کرتے ہوئے قبطی غلطی سے مارا گیا، تو آپ مصر چھوڑ کر مدین تشریف لے گئے۔ وہاں کنویں پر دو باحیا بہنوں کے جانوروں کو پانی پلایا، ان کے والد کے ہاں دس سال بکریاں چرائیں اور ان کی بیٹی سے نکاح فرمایا۔",
        "مدین سے واپسی پر کوہِ طور کی وادیٔ طویٰ میں آپ نے ایک نورانی آگ دیکھی۔ جب قریب پہنچے تو کائنات کے مالک نے براہِ راست ہمکلام ہو کر فرمایا: 'اے موسیٰ! بیشک میں ہی اللہ ہوں، تمام جہانوں کا پروردگار۔' اللہ نے آپ کو عصا اور یدِ بیضا (چمکتا ہوا ہاتھ) کے روشن معجزات عطا فرمائے اور فرعون کی طرف تبلیغ کے لیے بھیجا۔",
        "آپ نے فرعون کے دربار میں جا کر بنی اسرائیل کی رہائی کا مطالبہ کیا۔ فرعون نے ملک بھر کے جادوگروں کو جمع کیا۔ جادوگروں نے رسیاں پھینکیں جو سانپ بن کر رینگنے لگیں، مگر جب موسیٰ نے اپنا عصا پھینکا تو وہ ایک عظیم اژدہا بن کر ان کے تمام جھوٹے جادو کو نگل گیا۔ جادوگر فوراً سجدے میں گر پڑے اور پکار اٹھے: 'ہم موسیٰ اور ہارون کے رب پر ایمان لائے۔'",
        "فرعون کے مظالم کے بعد آپ بنی اسرائیل کو لے کر راتوں رات نکلے۔ سامنے ٹھاٹھیں مارتا بحرِ قلزم تھا اور پیچھے فرعون کا خونخوار لشکر۔ لوگ گھبرا کر بولے کہ ہم تو پکڑے گئے۔ موسیٰ نے چٹان کی مانند پروقار لہجے میں فرمایا: 'کَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ' (ہرگز نہیں! بیشک میرے ساتھ میرا رب ہے، وہ مجھے ضرور راستہ دکھائے گا)۔ اللہ کے حکم سے عصا سمندر پر مارا تو پانی بارہ راستوں میں تقسیم ہو کر پہاڑ کی طرح کھڑا ہو گیا۔ بنی اسرائیل پار اتر گئے اور فرعون اپنے لشکر سمیت اسی سمندر میں غرق ہو گیا۔"
      ],
      "ar": [
        "طغى فرعون مصر واستعبد بني إسرائيل وذبح أبناءهم خوفاً من زوال ملكه. فأوحى الله إلى أم موسى أن تقذفه في اليم في تابوت، فحمله النهر إلى قصر فرعون، فرأته آسية المؤمنة وقالت: ﴿قُرَّتُ عَيْنٍ لِي وَلَكَ لا تَقْتُلُوهُ عَسَى أَنْ يَنْفَعَنَا﴾، فرُبي في حجر عدوه ورُد إلى أمه لتقر عينها.",
        "خرج موسى خائفاً يترقب إلى أرض مدين بعد قتله القبطي خطأً، فسقى لابنتي الشيخ الصالح وعمل عنده ثماني حجج أو عشراً وتزوج ابنته.",
        "وفي طريق عودته بأهله عند جانب الطور آنس ناراً، فلما أتاها نودي في الوادي المقدس طوى: ﴿إِنِّي أَنَا اللَّهُ رَبُّ الْعَالَمِينَ﴾، فكلمه الله تكليماً وشرفه بالنبوة وأعطاه معجزتي العصا واليد البيضاء وأيده بأخيه هارون.",
        "دخل موسى وهارون على فرعون يدعوانه بالحسنى ويطالبان بإرسال بني إسرائيل، فاستكبر وجمع سحرة مملكته. فألقى السحرة حبالهم وعصيهم يخيل إليه من سحرهم أنها تسعى، فألقى موسى عصاه فإذا هي تلقف ما يأفكون، فخر السحرة سجداً قائلين: ﴿آمَنَّا بِرَبِّ الْعَالَمِينَ * رَبِّ مُوسَى وَهَارُونَ﴾.",
        "أرسل الله على آل فرعون الآيات المفصلات (الطوفان والجراد والقمل والضفادع والدم)، ثم سار موسى ببني إسرائيل ليلاً فتبعهم فرعون بجنوده بغياً وعدواً.",
        "حين التقى الجمعان وضاق الموقف وقال أصحاب موسى إنا لمدركون، قال بيقين لا يتزعزع: ﴿كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ﴾، فأمره الله أن يضرب البحر بعصاه، فانفلق فكان كل فرق كالطود العظيم، فنجا بنو إسرائيل وأغرق الله فرعون وجنوده ليكون لمن خلفه آية."
      ]
    },
    "keyLessons": {
      "en": [
        "Unshakable trust in Allah (Tawakkul) splits oceans and shatters the mightiest empires of tyrants.",
        "Allah preserves His beloved servants inside the very households of their enemies.",
        "Truth always exposes and obliterates the fragile illusions of falsehood, falsehood is ever bound to vanish."
      ],
      "ur": [
        "اللہ پر کامل یقین سمندروں کے سینے چاک کر دیتا ہے اور فرعون جیسے ظالموں کے تخت الٹ دیتا ہے۔",
        "اللہ جس کی حفاظت فرمانا چاہے، اسے دشمن کے اپنے محل کے اندر پال پوس کر جوان کر دیتا ہے۔",
        "حق جب میدان میں آتا ہے تو باطل کے تمام جادوئی سحر اور فریب ریت کی دیوار کی طرح ڈھیر ہو جاتے ہیں۔"
      ],
      "ar": [
        "اليقين بالله والتوكل عليه يفلقان البحور ويحطمان عروش الطغاة والمستكبرين.",
        "عناية الله وحفظه يجعلان الطفل الضعيف يتربى آمناً في قصر ألد أعدائه.",
        "الحق يعلو دائماً ويبطل كل أوهام الباطل وسحره: ﴿بَلْ نَقْذِفُ بِالْحَقِّ عَلَى الْبَاطِلِ فَيَدْمَغُهُ فَإِذَا هُوَ زَاهِقٌ﴾."
      ]
    }
  },
  {
    "id": "harun",
    "order": 15,
    "nameEn": "Harun (A.S.)",
    "nameUr": "حضرت ہارون (ع)",
    "nameAr": "هارون عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Eloquent Spokesman & The High Priest of Sinai",
    "titleUr": "کلیم اللہ کے وزیر اور فصیح اللسان پیغمبر",
    "titleAr": "وزير موسى وأفصح بني إسرائيل لساناً",
    "image": "/stories/covers/harun-v2.webp",
    "quranMention": "Surah Ta-Ha: 'And appoint for me a minister from my family, Aaron, my brother'",
    "summaryEn": "Granted prophecy in answer to Musa's heartfelt supplication. Blessed with exceptional eloquence, diplomacy, and gentleness, Prophet Harun (A.S.) stood fearlessly before Pharaoh and guarded monotheism amidst the severe trials of the Sinai wilderness.",
    "summaryUr": "حضرت موسیٰ کی دعا سے نبوت ملی، بے پناہ فصاحت و بلاغت اور نرم خوئی کے مالک تھے۔ فرعون کے سامنے حق کی گواہی دی اور کوہِ طور پر موسیٰ کی غیر موجودگی میں بنی اسرائیل کو بچھڑے کے فتنے سے روکا۔",
    "summaryAr": "أوتي النبوة استجابة لدعاء أخيه موسى، تميز بالفصاحة والحكمة والرفق، جاهد فرعون مع موسى وصبر على أذى بني إسرائيل في تيه سيناء.",
    "fullStory": {
      "en": [
        "When Allah commanded Musa at Mount Sinai to confront Pharaoh, Musa made a tender supplication for support: 'And appoint for me a minister from my family: Aaron, my brother. Increase through him my strength and let him share my task.' (Surah Ta-Ha 20:29-32). Allah granted his prayer instantly, blessing Harun with the mantle of prophecy.",
        "Harun possessed rare gifts of captivating eloquence, deep diplomacy, and gentle compassion. Where Musa was fiery and majestic, Harun was soothing and conciliatory, making the brothers a harmonious divine partnership against Egypt's imperial tyranny.",
        "Together they stood before Pharaoh's golden throne without armies or weapons, speaking words of dignified truth: 'Indeed, we are messengers of the Lord of the worlds, to send with us the Children of Israel.' (Surah Ash-Shu'ara 26:16-17). Harun spoke with profound clarity, disarming Pharaoh's hostile ministers.",
        "When Musa ascended Mount Sinai for forty nights to receive the Tablets of the Torah, he entrusted the leadership of Bani Isra'il to Harun: 'Take my place among my people, do right, and do not follow the way of the corrupters.' (Surah Al-A'raf 7:142).",
        "During Musa's absence, a hypocrite named As-Samiri cast molten gold ornaments into the shape of a golden calf that produced a lowing sound, deceiving the weak-willed Israelites into worshipping it. Harun confronted the crowd with burning resolve: 'O my people, you are only being tested by it, and indeed, your Lord is the Most Merciful, so follow me and obey my command.' (Surah Ta-Ha 20:90). The rebels threatened to murder Harun, yet he kept the faithful minority anchored to monotheism.",
        "When Musa returned down the mountain filled with fiery grief and grasped his brother's beard in anguish, Harun explained with tearful gentleness: 'O son of my mother, do not seize my beard or my head! Indeed, I feared that you would say: You caused division among the Children of Israel.' Musa softened immediately, praying for divine forgiveness for both of them. Harun lived as the beloved high priest of his nation, entering eternal peace in the sacred hills of Mount Hor."
      ],
      "ur": [
        "جب کوہِ طور پر اللہ پاک نے حضرت موسیٰ علیہ السلام کو فرعون کی طرف جانے کا حکم دیا تو آپ نے اپنے بھائی کے لیے دعا مانگی: 'اور میرے لیے میرے خاندان میں سے ایک وزیر بنا دے، میرے بھائی ہارون کو۔ اس کے ذریعے میری کمر مضبوط فرما اور اسے میرے کام میں شریک کر۔' (سورۃ طٰہٰ)۔ اللہ تعالیٰ نے موسیٰ کی دعا سن کر حضرت ہارون کو نبوت سے سرفراز فرمایا۔",
        "حضرت ہارون علیہ السلام غیر معمولی فصاحت و بلاغت، شیریں بیانی اور نرم مزاجی کے مالک تھے۔ جہاں حضرت موسیٰ کے مزاج میں جلال اور رعب تھا، وہاں حضرت ہارون کی گفتگو میں مٹھاس، حکمت اور نرمی تھی، جس نے مل کر فرعون کی سلطنت کے سامنے ایک عظیم نبوی قوت بنا دی۔",
        "دونوں بھائی بغیر کسی فوج اور ہتھیار کے فرعون کے محل میں داخل ہوئے اور کمالِ شجاعت سے فرمایا: 'ہم تمام جہانوں کے پروردگار کے بھیجے ہوئے رسول ہیں، بنی اسرائیل کو ہمارے ساتھ آزاد کر دو۔' حضرت ہارون نے اپنی فصیح زبان سے فرعون کے دربار میں توحید کا پرچم بلند کیا۔",
        "جب حضرت موسیٰ علیہ السلام تورات کی تختیاں لینے چالیس راتوں کے لیے کوہِ طور پر تشریف لے گئے، تو بنی اسرائیل کی امانت اپنے بھائی ہارون کے سپرد کرتے ہوئے فرمایا: 'میری قوم میں میری نیابت کرنا، اصلاح کرتے رہنا اور فسادیوں کے راستے پر نہ چلنا۔'",
        "حضرت موسیٰ کی غیر موجودگی میں سامری نے سونے کا بچھڑا بنا کر بنی اسرائیل کو گمراہ کر دیا۔ حضرت ہارون نے شدت سے اس کی مخالفت کی اور فرمایا: 'اے میری قوم! اس بچھڑے سے تمہارا امتحان لیا گیا ہے، بیشک تمہارا پروردگار تو رحمن ہے، لہٰذا میری پیروی کرو اور میرا حکم مانو۔' باغی عناصر نے آپ کو قتل کرنے کی دھمکیاں دیں مگر آپ نے سچے مسلمانوں کو شرک سے بچائے رکھا۔",
        "جب حضرت موسیٰ کوہِ طور سے واپس آئے اور غصے و غم میں بھائی کی داڑھی اور سر کے بال تھامے، تو حضرت ہارون نے کمالِ ضبط اور پیار سے فرمایا: 'اے میری ماں کے بیٹے! نہ میری داڑھی پکڑو نہ میرا سر، مجھے اندیشہ ہوا کہ تم کہو گے کہ تم نے بنی اسرائیل کے درمیان پھوٹ ڈال دی۔' حضرت موسیٰ کا دل پسیج گیا اور انہوں نے اپنے اور بھائی کے لیے مغفرت کی دعا فرمائی۔ حضرت ہارون علیہ السلام نے اپنی قوم میں عدل و رحمت کے چراغ روشن رکھ کر وصال فرمایا۔"
      ],
      "ar": [
        "سأل موسى ربه وزيراً يعينه على ثقل الرسالة: ﴿وَاجْعَلْ لِي وَزِيراً مِنْ أَهْلِي * هَارُونَ أَخِي * اشْدُدْ بِهِ أَزْرِي * وَأَشْرِكْهُ فِي أَمْرِي﴾ (طه: 29-32)، فاستجاب الله دعاءه وآتى هارون النبوة تفضلاً ورضواناً.",
        "كان هارون عليه السلام أفصح لساناً وألين عريكة وأحكم مداراة، فشكل مع أخيه موسى ثنائياً نبوياً متكاملاً جمع بين قوة الحق وهيبة الحجة ولين القول.",
        "واجه مع موسى جبروت فرعون، وبلغا رسالات الله بلسان عربي مبين، وشهدا آيات الله الكبرى في قصر الطاغية حتى خضع السحرة وأُغرق فرعون في اليم.",
        "استخلفه موسى على بني إسرائيل حين ذهب لميقات ربه أربعين ليلة في سيناء، قائلاً: ﴿اخْلُفْنِي فِي قَوْمِي وَأَصْلِحْ وَلا تَتَّبِعْ سَبِيلَ الْمُفْسِدِينَ﴾.",
        "فتن السامري بني إسرائيل بصنع عجل من ذهب له خوار، فوقف هارون في وجوههم محذراً وناصحاً: ﴿يَا قَوْمِ إِنَّمَا فُتِنْتُمْ بِهِ وَإِنَّ رَبَّكُمُ الرَّحْمَنُ فَاتَّبِعُونِي وَأَطِيعُوا أَمْرِي﴾ (طه: 90)، فكادوا يقتلونه واستضعفوه.",
        "ولما رجع موسى غضبان أسفاً وأخذ برأس أخيه يجره إليه، قال هارون برفق وأخوة صادقة: ﴿يَا ابْنَ أُمَّ لا تَأْخُذْ بِلِحْيَتِي وَلا بِرَأْسِي إِنِّي خَشِيتُ أَنْ تَقُولَ فَرَّقْتَ بَيْنَ بَنِي إِسْرَائِيلَ وَلَمْ تَرْقُبْ قَوْلِي﴾، فدعا لهما موسى بالرحمة والمغفرة وتوفي هارون في التيه محفوفاً بكرامة الله."
      ]
    },
    "keyLessons": {
      "en": [
        "Mutual brotherhood and loyal support in the path of truth multiply spiritual strength.",
        "Gentleness and diplomacy in leadership are vital tools when dealing with stubborn, emotional crowds.",
        "Preserving community unity while resolutely rejecting idolatry is a high prophetic balancing art."
      ],
      "ur": [
        "دین کے راستے میں مخلص بھائی چارہ اور ایک دوسرے کی پشت پناہی روحانی طاقت کو دوچند کر دیتی ہے۔",
        "رہنمائی اور قیادت میں نرم مزاجی اور شیریں کلامی وہ نعمت ہے جو دلوں کو جوڑتی ہے۔",
        "شرک اور باطل کو رد کرتے ہوئے امت میں انتشار سے بچنے کی تدبیر کرنا نبوی حکمت کا عظیم شاہکار ہے۔"
      ],
      "ar": [
        "المؤازرة الصادقة والأخوة في الله تضاعفان القوة في مواجهة الطغيان وحمل أمانة الرسالة.",
        "الرفق واللين في القيادة ضرورة لا غنى عنها في معالجة الأزمات واحتواء الفتن.",
        "الحرص على وحدة الصف وعدم التسرع في الخلاف منهج حكيم أرساه هارون عليه السلام."
      ]
    }
  },
  {
    "id": "dhulkifl",
    "order": 16,
    "nameEn": "Dhul-Kifl (A.S.)",
    "nameUr": "حضرت ذوالکفل (ع)",
    "nameAr": "ذو الكفل عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Man of the Sacred Pledge & Righteous Judge",
    "titleUr": "صاحبِ عہد اور پیکرِ وفا و عدل",
    "titleAr": "ذو العهد الصادق والصابر المحتسب",
    "image": "/stories/covers/dhulkifl-v2.webp",
    "quranMention": "Commended in Surahs Al-Anbiya and Sad among the patient and chosen servants",
    "summaryEn": "Celebrated in the Quran alongside Ismail and Idris for peerless patience and integrity. Taking a solemn pledge to fast all day, pray all night, and judge with flawless justice without anger, he fulfilled every condition impeccably.",
    "summaryUr": "قرآن میں اسماعیل اور ادریس کے ساتھ صبر اور نیکی کا گواہ بنایا گیا۔ دن کو روزہ رکھنے، رات کو عبادت کرنے اور کبھی غصے میں نہ آ کر عدل کرنے کا عہد کیا اور پوری زندگی کمالِ وفا سے نبھایا۔",
    "summaryAr": "ذكره الله في القرآن مع الصابرين والأخيار، تكفل بأداء الصيام نهاراً والقيام ليلاً والقضاء بين الناس بالعدل دون غضب، فوفّى بعهده كاملاً مخلصاً.",
    "fullStory": {
      "en": [
        "In the land of Damascus and the Levant, as a previous prophet grew frail in old age, he assembled the believers seeking a worthy successor to lead the people in righteousness: 'Who among you will pledge to fast every day, stand in prayer every night, and judge between people with perfect justice without ever losing his temper?'",
        "A humble young man named Bishr arose and said: 'I will undertake this pledge.' The elder prophet paused, repeating the question on successive days, and each time only Bishr stood forward with unshakable conviction. The elder appointed him leader, earning him the honorific title 'Dhul-Kifl' (The Man of the Sacred Pledge / The Trustee of Guarantees).",
        "Prophet Dhul-Kifl fulfilled his monumental vows with breathtaking fidelity. Every day from dawn to dusk he fasted; throughout the long night watches while the world slept, he stood weeping and glorifying Allah; and throughout the midday heat, he sat upon the seat of justice, resolving disputes with scrupulous fairness and immeasurable gentleness.",
        "Determined to break his vow of patience, Iblis (Satan) disguised himself as an elderly, aggrieved beggar and arrived at Dhul-Kifl's chambers precisely during his brief afternoon rest. The beggar spun elaborate tales of fabricated injustice, keeping Dhul-Kifl awake for hours.",
        "Despite exhaustion and sleep deprivation, Dhul-Kifl listened with radiant serenity, promising justice and comforting the man with boundless compassion. When the demon returned the following day trying desperately to incite anger, Dhul-Kifl remained as tranquil as a mountain of peace, recognizing the subtle whisper of the tempter.",
        "Defeated, Iblis fled in humiliation. Allah immortalized Prophet Dhul-Kifl's legacy in the Holy Quran alongside the greatest paragons of virtue: 'And remember Ismail, Idris, and Dhul-Kifl; all were of the patient. And We admitted them into Our mercy. Indeed, they were of the righteous.' (Surah Al-Anbiya 21:85-86)."
      ],
      "ur": [
        "شام کی سرزمین پر جب وقت کے نبی بوڑھے ہو گئے، تو انہوں نے لوگوں کو جمع کر کے فرمایا: 'کون ہے جو مجھ سے تین وعدے کرے کہ وہ میری جگہ قوم کی رہنمائی کرے؟ وہ دن بھر روزہ رکھے گا، رات بھر اللہ کی عبادت میں کھڑا رہے گا، اور فیصلے کرتے وقت کبھی غصہ نہیں کرے گا۔'",
        "مجمع میں سے ایک متقی اور باحیا نوجوان بشر کھڑے ہوئے اور فرمایا: 'میں یہ ذمہ داری لیتا ہوں۔' بزرگ نبی نے دوسرے اور تیسرے دن بھی یہی اعلان دہرایا اور ہر بار صرف بشر ہی کھڑے ہوئے۔ چنانچہ انہیں امانت و حکومت کی ذمہ داری سونپ دی گئی اور انہیں 'ذوالکفل' (عہد پورا کرنے والا / کفالت لینے والا) کا مبارک لقب ملا۔",
        "حضرت ذوالکفل علیہ السلام نے اپنے عہد کو بے مثال انداز میں نبھایا۔ دن کو روزہ رکھتے، رات کو مصلے پر آنسو بہاتے، اور دوپہر کو کڑی دھوپ میں بیٹھ کر مظلوموں کے فیصلے کرتے۔ آپ کی زبان پر کبھی غصے کا ایک لفظ نہ آیا۔",
        "شیطان نے تہیہ کیا کہ کسی طرح ان کا غصہ بھڑکائے۔ وہ ایک بوڑھے فریادی کا روپ دھار کر عین اس وقت آیا جب آپ تھکن سے چور ہو کر تھوڑی دیر قیلولہ کرنے لگے تھے۔ بوڑھے نے لمبی داستان چھیڑ دی اور آپ کو سونے نہ دیا۔",
        "اگلے دن پھر شیطان نے تکرار کی اور آپ کی نیند خراب کی۔ مگر حضرت ذوالکفل نے بے پناہ صبر و شفقت کا مظاہرہ فرمایا اور چہرے پر ہلکی سی ناگواری بھی نہ آنے دی۔ جب شیطان ہر طرح سے مایوس ہو گیا تو اس نے خود اعتراف کیا کہ میں نے آپ کو غصہ دلانے کی ہر چال چلی مگر آپ کے تقویٰ نے مجھے ہرا دیا۔",
        "اللہ رب العزت نے قرآنِ مجید میں آپ کے صبر و وفا کی ابدی گواہی دی: 'اور اسماعیل اور ادریس اور ذوالکفل کو یاد کرو، یہ سب صبر کرنے والوں میں سے تھے۔ اور ہم نے انہیں اپنی رحمت میں داخل فرمایا، بیشک وہ سب نیکوکار تھے۔' (سورۃ الانبیاء)"
      ],
      "ar": [
        "حين دنت وفاة نبي ذلك الزمان بأرض الشام، جمع قومه وقال: من يتكفل لي بثلاث: يصوم النهار، ويقوم الليل، ولا يغضب، ليكون خليفتي فيكم؟",
        "فقام فتى صالح يدعى 'بشر' وقال: أنا أتكفل لك بذلك. فردد النبي شرطه أياماً متتالية، فلم يقم إلا ذلك الشاب الصادق، فاستخلفه ولقب بـ'ذي الكفل' لوفائه بكفالته وعهده.",
        "وفى ذو الكفل بعهده على أكمل وجه؛ فكان يصوم نهاره، ويحيي ليله متبتلاً لربه، ويقضي بين الناس بالقسط والرحمة ولا يغضب أبداً مهما استفزه الخصوم.",
        "حاول إبليس اللعين بشتى الحيل أن يخرجه عن حلمه ويجعله يغضب، فتمثل له في صورة شيخ كبير يشتكي مظلمة كاذبة في وقت قيلولته القصير المتبقي من راحته.",
        "صبر ذو الكفل على إلحاح الشيخ ومماطلته بأدب جم ورفق نبوي باهر، حتى إذا أرهقه وكشف أمره انخنس الشيطان خاسئاً معترفاً بعجزه أمام رسوخ حلمه وصبره.",
        "خلد الله ثناءه في القرآن الكريم مع سادة الصابرين: ﴿وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ كُلٌّ مِنَ الصَّابِرِينَ * وَأَدْخَلْنَاهُمْ فِي رَحْمَتِنَا إِنَّهُمْ مِنَ الصَّالِحِينَ﴾ (الأنبياء: 85-86)."
      ]
    },
    "keyLessons": {
      "en": [
        "Fulfilling pledges and keeping promises (Wafa) is the paramount measure of spiritual maturity.",
        "Mastery over anger (Kadh-mul-Ghaydh) elevates a servant into the highest stations of divine mercy.",
        "Consistency in night prayers and fasting purifies the soul to judge others with fairness and compassion."
      ],
      "ur": [
        "اپنے وعدوں اور عہد و پیمان کو پورا کرنا سچے مومن اور ولی اللہ کی سب سے بڑی پہچان ہے۔",
        "شدید غصے اور تھکن کے عالم میں بھی اپنے جذبات پر قابو پانا انسان کو اللہ کی خاص رحمت کا حقدار بناتا ہے۔",
        "راتوں کا قیام اور دنوں کے روزے انسان کے دل کو عدل، محبت اور خلوص سے بھر دیتے ہیں۔"
      ],
      "ar": [
        "الوفاء بالعهود وأداء الأمانات هما المقياس الحقيقي لصدق الإيمان وكمال الرجولة.",
        "كظم الغيظ والحلم عند الغضب من أعظم صفات الأنبياء والصديقين.",
        "المداومة على قيام الليل والصيام تملأ القلب نكاحاً ونوراً وسكينة في معاملة الخلق."
      ]
    }
  },
  {
    "id": "dawud",
    "order": 17,
    "nameEn": "Dawud (A.S.)",
    "nameUr": "حضرت داؤد (ع)",
    "nameAr": "داود عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Conqueror of Goliath, King of Israel & Psalmist of Zabur",
    "titleUr": "فاتحِ جالوت، صاحبِ زبور اور آہن گر پیغمبر",
    "titleAr": "الملك النبي وقاتل جالوت وصاحب المزامير",
    "image": "/stories/covers/dawud-v2.webp",
    "quranMention": "Mentioned 16 times in the Holy Quran, recipient of the holy scripture Zabur (Psalms)",
    "summaryEn": "As a shepherd youth, he felled the giant tyrant Jalut (Goliath) with a single pebble sling. Elevated as a righteous King and Prophet, iron softened in his hands like wax to forge chainmail armor, and mountains joined his melodious morning and evening praises.",
    "summaryUr": "نوجوانی میں فلاخن سے ظالم دیو ہیکل جالوت کو مار گرایا۔ اللہ نے بادشاہت، نبوت اور زبور عطا فرمائی۔ آپ کے ہاتھوں میں لوہا موم بن جاتا تھا اور آپ کے ساتھ پہاڑ اور پرندے نغمہ سرائی کرتے۔",
    "summaryAr": "قتل جالوت الطاغية بحجر من مقلاعه، فآتاه الله الملك والحكمة والزبور، وألان له الحديد ليصنع الدروع، وكانت الجبال والطير تسبح معه بصوته العذب الندِيّ.",
    "fullStory": {
      "en": [
        "When the Israelites marched under King Talut against the terrifying Philistine armies led by the giant tyrant Jalut (Goliath), the soldiers trembled in fear. Jalut stepped forth challenging anyone to single combat. A young Hebrew shepherd named Dawud stepped forward with nothing but a leather sling, five smooth pebbles, and towering faith in the Lord of Hosts.",
        "Jalut laughed in contempt, but Dawud proclaimed: 'You come against me with sword and armor, but I come against you in the name of Allah.' Whirling his sling, Dawud launched a single stone that struck Jalut directly between the eyes, piercing his skull and dropping the giant like a fallen tree. The enemy armies broke into flight, and Dawud became a national hero.",
        "Allah granted Dawud both kingship and prophecy: 'And Dawud killed Jalut, and Allah gave him the kingship and wisdom and taught him from that which He willed.' (Surah Al-Baqarah 2:251). Dawud ruled with unprecedented justice, establishing an empire based on moral law and devotion.",
        "Dawud was granted the holy scripture, the Zabur (Psalms). He was blessed with an ethereal, melodious singing voice of unmatched beauty. Whenever he opened the Psalms in prayer, the wild birds in flight paused in mid-air to listen, and the mighty mountains resonated with his hymns: 'Indeed, We subjected the mountains with him, glorifying [Allah] at evening and sunrise.' (Surah Sad 38:18).",
        "Despite his royal throne, Dawud refused to consume a single coin from the public treasury, insisting on eating only from the labor of his own hands. Allah miraculously softened solid iron in his hands like clay or warm wax, enabling him to invent flexible chainmail armor without fire or hammers: 'And We made pliable for him iron, [commanding]: Make full coats of chain mail.' (Surah Saba 34:10-11).",
        "He instituted the greatest pattern of devotion praised by Prophet Muhammad (S.A.W.): the Fast of Dawud (fasting every alternate day) and sleeping half the night, praying a third, and sleeping a sixth. Prophet Dawud reigned forty years as an immortal symbol of the ruler who unites worldly power with saintly detachment."
      ],
      "ur": [
        "بنی اسرائیل کے سپہ سالار طالوت کے مقابلے میں جب ظالم جالوت کا دیو ہیکل لشکر آیا تو بڑے بڑے جنگجو کانپ اٹھے۔ جالوت نے للکار کر مقابلے کے لیے بندہ مانگا۔ تب ایک کم عمر نوجوان داؤد، جس کے پاس صرف ایک فلاخن (غلیل) اور چند پتھر تھے، اللہ کے نام پر آگے بڑھے۔",
        "جالوت نے ان کی نو عمری کا مذاق اڑایا، مگر حضرت داؤد نے اللہ کی تکبیر کہہ کر ایسا نشانہ باندھ کر پتھر کھینچا جو سیدھا جالوت کی پیشانی میں پیوست ہو گیا اور وہ ریت کے ڈھیر کی طرح زمین بوس ہو گیا۔ دشمن کی فوج بھاگ کھڑی ہوئی اور اللہ نے داؤد کو سرخرو فرمایا۔",
        "اللہ پاک نے حضرت داؤد علیہ السلام کو بیک وقت نبوت اور عظیم الشان سلطنت سے سرفراز فرمایا: 'اور داؤد نے جالوت کو قتل کر دیا اور اللہ نے اسے سلطنت اور حکمت دی اور جو چاہا سکھایا۔' (سورۃ البقرہ)",
        "اللہ تعالیٰ نے آپ پر آسمانی کتاب 'زبور' نازل فرمائی اور آپ کو لحنِ داؤدی (بے مثال سریلی آواز) عطا فرمائی۔ جب آپ زبور کی تلاوت فرماتے تو اڑتے ہوئے پرندے فضا میں ٹھہر جاتے اور وادیوں کے اونچے پہاڑ آپ کے ساتھ اللہ کی تسبیح و حمد میں گونج اٹھتے۔",
        "اتنی بڑی سلطنت کے بادشاہ ہونے کے باوجود آپ نے بیت المال سے ایک پیسہ نہ لیا اور اپنے ہاتھ کی کمائی کھائی۔ اللہ تعالیٰ نے آپ کے ہاتھوں کے لیے لوہے کو موم کی طرح نرم کر دیا تھا، آپ بغیر آگ اور ہتھوڑے کے اپنے ہاتھوں سے مضبوط اور لچکدار زرہیں بناتے اور ان کی فروخت سے گزر بسر فرماتے۔",
        "رسولِ خدا ﷺ نے فرمایا کہ اللہ کو سب سے پسندیدہ روزہ داؤد کا روزہ ہے جو ایک دن روزہ رکھتے اور ایک دن افطار کرتے، اور آدھی رات سوتے، ایک تہائی عبادت کرتے اور چھٹا حصہ آرام فرماتے۔ چالیس سال تک آپ نے عدل، حکمت اور عبادت کا نور پھیلایا۔"
      ],
      "ar": [
        "برز الفتى داود في جيش طالوت حين هاب الأبطال لقاء جالوت الجبار وجنوده العاتية، فتقدم داود بمقلاعه وبإيمان يعانق السماء.",
        "ألقى داود حجراً أصاب به جبهة جالوت فصرعه في الحال، وانهزمت جيوش الكفر، وخلد القرآن بطولته: ﴿وَقَتَلَ دَاوُدُ جَالُوتَ وَآتَاهُ اللَّهُ الْمُلْكَ وَالْحِكْمَةَ وَعَلَّمَهُ مِمَّا يَشَاءُ﴾ (البقرة: 251).",
        "جمع الله له بين النبوة العظيمة والملك العادل العريض، وأنزل عليه الزبور، وأعطاه صوتاً ندياً عذباً لم تسمع الأرض بمثله في تسبيح الله وتنزيهه.",
        "كانت الجبال الشم والطيور الصافات في كبد السماء تردد معه التسابيح بالعشي والإشراق: ﴿إِنَّا سَخَّرْنَا الْجِبَالَ مَعَهُ يُسَبِّحْنَ بِالْعَشِيِّ وَالْإِشْرَاقِ * وَالطَّيْرَ مَحْشُورَةً كُلٌّ لَهُ أَوَّابٌ﴾ (ص: 18-19).",
        "ومن عظيم ورعه أنه كان لا يأكل إلا من كسب يده الشريفة، فمعجزة الله له أن ألان له الحديد الصلب كالطين أو الشمع، يصوغه بيده دروعاً سابغات تقي المقاتلين في الحروب دون حاجة لنار ولا مطرقة.",
        "أثنى النبي ﷺ على عبادته، فكان يصوم يوماً ويفطر يوماً، وينام نصف الليل ويقوم ثلثه وينام سدسه، فكان قدوة الحكام الصالحين الذين سخروا سلطانهم لمرضاة ربهم."
      ]
    },
    "keyLessons": {
      "en": [
        "Genuine faith in Allah can conquer the most terrifying giants and overwhelming worldly odds.",
        "Honorable self-reliance (eating from one's own honest labor) dignifies even the greatest kings.",
        "The entire cosmos—mountains, birds, and nature—is engaged in continuous praise of the Creator."
      ],
      "ur": [
        "اللہ پر سچا ایمان اور یقین دنیا کے بڑے سے بڑے ظالم جالوت اور خوفناک لشکروں کو گرا دیتا ہے۔",
        "اپنے ہاتھ کی محنت سے رزقِ حلال کما کر کھانا انبیاء اور بادشاہوں کی سب سے اعلیٰ فضیلت ہے۔",
        "کائنات کی ہر تخلیق—پہاڑ، پرندے اور چرند—اپنے پروردگار کی حمد و تسبیح میں ہر لمحہ محو رہتے ہیں۔"
      ],
      "ar": [
        "الإيمان الصادق كفيل بهزيمة أعتى قوى البغي والطغيان وإن خلت أيدي المؤمنين من السلاح.",
        "عزة النفس والحرص على أكل الحلال من كسب اليد شرف للملوك والعلماء والعباد.",
        "الكون بأسره ساجد مسبح لله، وقلب المؤمن المتصل بربه يشاركه هذا التسبيح المهيب."
      ]
    }
  },
  {
    "id": "sulayman",
    "order": 18,
    "nameEn": "Sulayman (A.S.)",
    "nameUr": "حضرت سلیمان (ع)",
    "nameAr": "سليمان عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Master of Winds, Jinn & The Golden Kingdom of Wisdom",
    "titleUr": "ہواؤں، جنات اور پرندوں کے فرماں روا",
    "titleAr": "الملك الحكيم ومسخر الريح والجن ومن أوتي منطق الطير",
    "image": "/stories/covers/sulayman-v2.webp",
    "quranMention": "Mentioned 17 times in the Holy Quran, granted an empire unmatched by anyone after him",
    "summaryEn": "Inheriting the wisdom of Dawud, Prophet Sulayman (A.S.) prayed for a kingdom none could match. Allah subjected to him the roaring winds, armies of Jinn, molten copper fountains, and the languages of birds and ants, culminating in the peaceful conversion of Queen Bilqis of Sheba.",
    "summaryUr": "حضرت داؤد کے وارث بنے، اللہ نے ہواؤں کو تابع کیا، جنات سے بیت المقدس تعمیر کروایا، پرندوں اور چیونٹیوں کی بولیاں سکھائیں، اور ملکہ بلقیس کو توحید کی دولت سے مالا مال کیا۔",
    "summaryAr": "وهبه الله ملكاً لا ينبغي لأحد من بعده، سخر له الريح تجري بأمره، وعلمه منطق الطير وأسالت له عين القطر، وأسلمت معه ملكة سبأ بلقيس لله رب العالمين.",
    "fullStory": {
      "en": [
        "Prophet Sulayman (Solomon) inherited the prophetic mantle and throne from his father Dawud. He prayed with sublime spiritual ambition: 'My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me. Indeed, You are the Bestower.' (Surah Sad 38:35). Allah answered his prayer with a dominion unmatched in the annals of creation.",
        "Allah subjected the violent winds to his command, blowing gently at his instruction—a month's journey in the morning and a month's journey in the evening. Springs of molten copper gushed forth like water from the earth. Legions of unseen Jinn were put under his command, diving into the ocean depths for precious pearls and constructing majestic palaces, sanctuaries, and massive basins.",
        "Sulayman was blessed with the miraculous ability to comprehend the dialects of all beasts and winged creatures ('Mantiq at-Tayr'). While marching with his splendid army of men, jinn, and birds through the valley of the ants, a tiny ant warned its colony: 'O ants, enter your dwellings lest Sulayman and his soldiers crush you while they perceive not.' Hearing this tiny whisper, Sulayman smiled with tears of profound gratitude: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me.' (Surah An-Naml 27:18-19).",
        "Reviewing his winged legions, Sulayman noticed the absence of the Hoopoe bird (Hudhud). The bird soon arrived bearing astonishing intelligence from the southern kingdom of Sheba (Saba) in Yemen, reporting that a wealthy queen (Bilqis) ruled from a magnificent throne, yet her people worshipped the sun instead of Allah.",
        "Sulayman dispatched a royal missive opening with the immortal invocation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful. Be not arrogant against me, but come to me in submission (as Muslims).' (Surah An-Naml 27:30-31). When Queen Bilqis traveled to Jerusalem to test his character, she entered a dazzling palace paved with glass over shimmering water. Thinking it a deep pool, she lifted her robes. Realizing it was clear glass, she saw the divine light of truth and bowed: 'My Lord, indeed I have wronged myself, and I submit with Sulayman to Allah, Lord of the worlds.' (Surah An-Naml 27:44).",
        "Sulayman oversaw the monumental completion of Bayt al-Maqdis (Al-Aqsa Sanctuary). When his death approached, he stood leaning upon his staff in deep prayer. His soul departed, yet his body remained upright for months while the Jinn continued working in awe, believing their king was alive—until a tiny earthworm gnawed through his wooden staff, causing his body to gently collapse. In that moment, humanity learned that the Jinn possess no knowledge of the unseen."
      ],
      "ur": [
        "حضرت سلیمان علیہ السلام کو اپنے والد حضرت داؤد علیہ السلام کی نبوت اور حکمت ورثے میں ملی۔ آپ نے بارگاہِ الٰہی میں دعا فرمائی: 'اے میرے رب! مجھے معاف فرما اور مجھے ایسی سلطنت عطا فرما جو میرے بعد کسی کے لائق نہ ہو، بیشک تو ہی سب سے بڑا عطا فرمانے والا ہے۔' (سورۃ ص)",
        "اللہ تعالیٰ نے آپ کے لیے ہواؤں کو مسخر کر دیا جو صبح کے وقت ایک مہینے کی مسافت اور شام کے وقت ایک مہینے کا راستہ طے کراتی تھیں۔ آپ کے لیے پگھلے ہوئے تانبے کا چشمہ بہا دیا اور جنات کے لشکروں کو آپ کے تابع کر دیا جو سمندروں کی گہرائیوں سے موتی نکالتے اور بیت المقدس کے شاندار محلات و محرابیں تعمیر کرتے۔",
        "آپ کو پرندوں اور جانوروں کی بولیاں سمجھنے کا معجزہ عطا فرمایا گیا۔ جب آپ انسانوں، جنات اور پرندوں کے عظیم الشان لشکر کے ساتھ وادیٔ نمل (چیونٹیوں کی وادی) سے گزرے تو ایک ننھی چیونٹی نے کہا: 'اے چیونٹیو! اپنے بلوں میں گھس جاؤ، کہیں سلیمان اور ان کا لشکر تمہیں بے خبری میں کچل نہ ڈالے۔' حضرت سلیمان نے اس کی بات سن کر مسکرا دیا اور اللہ کے شکر میں سجدہ ریز ہو گئے۔",
        "ایک دن آپ نے پرندوں کا معائنہ کیا تو ہدہد کو غیر حاضر پایا۔ ہدہد نے آ کر یمن کی سلطنتِ سبا کی خبر دی کہ وہاں ایک ملکہ (بلقیس) عظیم الشان تخت پر حکومت کرتی ہے مگر وہ اور اس کی قوم اللہ کے بجائے سورج کی پوجا کرتے ہیں۔",
        "حضرت سلیمان علیہ السلام نے ملکہ کو تاریخی خط لکھا جس کا آغاز تھا: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ' (اللہ کے نام سے جو نہایت مہربان رحم فرمانے والا ہے، میرے مقابلے میں سرکشی نہ کرو اور فرمانبردار بن کر میرے پاس آؤ)۔ ملکہ بلقیس جب دربار میں پہنچی تو شیشے کا شفاف فرش دیکھ کر سمجھی کہ گہرا پانی ہے۔ حقیقت معلوم ہونے پر اس کی آنکھیں کھل گئیں اور اس نے اعلان کیا: 'اے میرے رب! میں نے اپنی جان پر ظلم کیا اور اب میں سلیمان کے ساتھ اللہ رب العالمین پر ایمان لاتی ہوں۔'",
        "حضرت سلیمان علیہ السلام نے بیت المقدس کی تعمیر کے دوران وفات پائی۔ آپ لاٹھی کے سہارے کھڑے عبادت میں مشغول تھے، روح پرواز کر گئی مگر مہینوں تک آپ کا جسم لاٹھی کے سہارے کھڑا رہا اور جنات ڈر کے مارے عمارت بناتے رہے—یہاں تک کہ دیمک نے لاٹھی کو کھوکھلا کیا اور آپ کا جسم زمین پر آ گیا۔ تب سب پر ظاہر ہو گیا کہ جنات بھی غیب کا علم نہیں رکھتے۔"
      ],
      "ar": [
        "ورث سليمان داود في النبوة والملك والحكمة، ودعا ربه دعاء العارفين: ﴿رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكاً لا يَنْبَغِي لِأَحَدٍ مِنْ بَعْدِي إِنَّكَ أَنْتَ الْوَهَّابُ﴾ (ص: 35).",
        "فسخر الله له الريح عاصفة ورخاءً تجري بأمره، غدوها شهر ورواحها شهر، وأسال له عين القطر (النحاس المذاب)، وسخر له مردة الجن يعملون بين يديه محاريب وتماثيل وجفان كالجواب وقدور راسيات.",
        "علّمه ربه منطق الطير ولغات سائر الحيوان؛ فلما مر بجيشه العظيم بوادي النمل قالت نملة: ﴿يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لا يَشْعُرُونَ﴾، فتبسم ضاحكاً من قولها وشكر نعمة ربه سائلاً الصلاح.",
        "تفقد الطير وغاب الهدهد فجاء بنبأ يقين من مملكة سبأ باليمن، مبيناً أن امرأة تملكهم ولها عرش عظيم وقومها يسجدون للشمس من دون الله.",
        "أرسل إليها سليمان كتاباً كريماً: ﴿إِنَّهُ مِنْ سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ * أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ﴾، فجاءت بلقيس مقتنعة بحكمته ورأت صرحاً ممرداً من قوارير حسبته لجة، فأسلمت مع سليمان لله رب العالمين.",
        "توفي سليمان وهو متكئ على منسأته (عصاه) في محراب بيت المقدس، وظلت الجن تعمل في العذاب المهين ظانين أنه حي، حتى أكلت دابة الأرض عصاه فخر ساجداً، فتبينت الجن أن لو كانوا يعلمون الغيب ما لبثوا في العذاب المهين."
      ]
    },
    "keyLessons": {
      "en": [
        "Supreme authority and wealth must always cultivate deeper humility and gratitude toward Allah.",
        "Compassion toward the smallest of creatures (even a tiny ant) is the mark of noble, righteous leadership.",
        "The unseen world belongs exclusively to Allah; neither Jinn nor any created being shares in divine omniscience."
      ],
      "ur": [
        "دنیا کی بادشاہت اور بے انتہا دولت انسان کو متکبر بنانے کے بجائے اللہ کے آگے مزید عاجز بنا دینی چاہیے۔",
        "ایک چھوٹی سی چیونٹی کے جذبات اور تکلیف کا احساس کرنا سچے حکمران کی سب سے بڑی پہچان ہے۔",
        "علمِ غیب صرف اور صرف اللہ تعالیٰ کے لیے خاص ہے، جنات اور فرشتے بھی اس کے بغیر کچھ نہیں جانتے۔"
      ],
      "ar": [
        "عظمة الملك ووفرة النعم يجب أن تزيد العبد تواضعاً وخشوعاً لواهب العطايا سبحانه.",
        "الرحمة بالضعفاء والمخلوقات الصغيرة دليل على رقة القلب وكمال العدل النبوي.",
        "الغيب المطلق استأثر الله بعلمه وحده، والجن لا يعلمون الغيب مهما بلغت قدراتهم."
      ]
    }
  },
  {
    "id": "ilyas",
    "order": 19,
    "nameEn": "Ilyas (A.S.)",
    "nameUr": "حضرت الیاس (ع)",
    "nameAr": "إلياس عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Lion of Mount Carmel & Champion of Pure Monotheism",
    "titleUr": "بت شکنی کے علمبردار اور کوہِ کرمل کے ولی",
    "titleAr": "نبي التوحيد الصامد وقاهر عباد بعل",
    "image": "/stories/covers/ilyas-v2.webp",
    "quranMention": "Commended in Surah As-Saffat: 'Peace upon Ilyas-yeen. Indeed, thus do We reward the doers of good'",
    "summaryEn": "Raised in the ancient city of Baalbek to confront an apostate kingdom worshipping the golden idol Baal. Prophet Ilyas (A.S.) called the people back to the Supreme Creator through years of drought and steadfast resistance against royal tyranny.",
    "summaryUr": "بعلبک کے تاریخی شہر میں بعل بت کی پوجا کرنے والوں کی اصلاح کے لیے بھیجے گئے۔ خشک سالی کے عذاب اور ظالم بادشاہت کے باوجود ڈٹ کر توحید کی دعوت دی اور سلامتی کا پروانہ پایا۔",
    "summaryAr": "أرسل إلى أهل بعلبك الذين عبدوا الصنم 'بعل'، حذرهم من ترك أحسن الخالقين فكذبوه، فصبر على بطش ملوكهم حتى نزل بهم القحط وأيده الله بالكرامات.",
    "fullStory": {
      "en": [
        "In the ancient Lebanese city of Baalbek and the hills of Palestine, the Children of Israel abandoned the pure monotheism of Musa and Sulayman. Led by a corrupt king and his idolatrous queen, the people forged a colossal golden idol named 'Baal' and bowed down to it in lavish temples.",
        "To extinguish this fire of apostasy, Allah commissioned Prophet Ilyas (Elijah). Ilyas stood before the royal court and the citizens, his voice cutting through their pride: 'Do you call upon Baal and forsake the Best of creators—Allah, your Lord and the Lord of your first forefathers?' (Surah As-Saffat 37:125-126).",
        "Infuriated that someone dared question their religion, the king and queen threatened his life. Ilyas retreated to the mountain caves of Mount Carmel and the wilderness, sustained by Allah with miraculous provisions while a devastating three-year drought parched the land, drying the rivers and withering the crops of Baal's worshippers.",
        "When the desperate people saw that Baal was powerless to bring a single drop of rain, Ilyas returned and summoned the royal false prophets to an open contest on Mount Carmel to demonstrate the true God. The idols stood lifeless and silent. Ilyas raised his hands in prayer to Allah, and instantly miraculous fire descended to consume his offering, and torrential rain washed over the dry valleys.",
        "Though many were awed, the royal tyrants renewed their persecution. Ilyas persevered with unflinching courage, keeping the remnant of believers safe, establishing monotheism in the hearts of the faithful, and mentoring the young Prophet Al-Yasa (Elisha) to carry forward the torch of revelation.",
        "Because of his steadfast valor and profound devotion, Allah protected him from the hands of the assassins and elevated his legacy forever: 'And We left for him [favorable mention] among later generations: Peace upon Ilyas-yeen! Indeed, We thus reward the doers of good.' (Surah As-Saffat 37:129-131)."
      ],
      "ur": [
        "شام اور لبنان کے قدیم تاریخی شہر بعلبک میں بنی اسرائیل کے لوگ توحید کو چھوڑ کر بت پرستی میں مبتلا ہو گئے تھے۔ ظالم بادشاہ اور اس کی ملکہ نے سونے کا ایک عظیم الشان بت بنوا رکھا تھا جس کا نام 'بعل' تھا اور تمام رعایا اس کے آگے سر جھکاتی تھی۔",
        "اللہ پاک نے ان کی رہنمائی کے لیے حضرت الیاس علیہ السلام کو مبعوث فرمایا۔ آپ نے دربار میں جا کر دلیری سے للکارا: 'کیا تم بعل بت کو پکارتے ہو اور سب سے بہترین پیدا کرنے والے اللہ کو چھوڑ دیتے ہو، جو تمہارا بھی رب ہے اور تمہارے پہلے باپ دادا کا بھی رب ہے؟' (سورۃ الصافات)",
        "بادشاہ اور درباریوں نے آپ کی مخالفت کی اور قتل کی دھمکیاں دیں۔ حضرت الیاس علیہ السلام نے پہاڑوں کے غاروں میں پناہ لی۔ آپ کی بددعا سے قوم پر مسلسل تین سال تک سخت قحط اور خشک سالی مسلط ہو گئی، ندیاں سوکھ گئیں اور لوگ دانے دانے کو محتاج ہو گئے۔",
        "جب لوگوں نے دیکھ لیا کہ ان کا بت 'بعل' ایک قطرہ پانی بھی نہیں برسا سکتا، تو حضرت الیاس علیہ السلام نے میدان میں آ کر قوم کے سامنے سچے رب کی دعا مانگی۔ دیکھتے ہی دیکھتے آسمان پر بادل امڈ آئے اور موسلادھار بارش نے مردہ زمین کو زندہ کر دیا۔",
        "کچھ لوگ ایمان لائے مگر سرکش حکمران دوبارہ سازشوں میں لگ گئے۔ آپ نے کمالِ استقامت سے دین کی شمع روشن رکھی اور حضرت الیسع علیہ السلام کی تربیت فرما کر نبوت کی امانت ان کے سپرد فرمائی۔",
        "اللہ تعالیٰ نے قرآنِ مجید میں حضرت الیاس علیہ السلام کو سچے اور محسن بندوں میں شمار فرمایا: 'سلامٌ علیٰ اِلیاسین • اِنَّا کَذٰلِکَ نَجْزِی الْمُحْسِنِیْنَ' (سلام ہو الیاس پر، بیشک ہم نیکی کرنے والوں کو ایسا ہی بدلہ دیتے ہیں)۔"
      ],
      "ar": [
        "انحرف بنو إسرائيل بعد سليمان وعبدوا صنماً مصنوعاً من الذهب يدعى 'بعلاً' في مدينة بعلبك، بتشجيع من ملوكهم الجبابرة.",
        "فقام فيهم إلياس عليه السلام منادياً بالتوحيد الخالص: ﴿أَتَدْعُونَ بَعْلاً وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ * اللَّهَ رَبَّكُمْ وَرَبَّ آبَائِكُمُ الْأَوَّلِينَ﴾ (الصافات: 125-126).",
        "كذبه قومه وتآمروا على قتله، فاعتزلهم في جبال فلسطين ووديانها، وأمسك الله عنهم المطر ثلاث سنين حتى أكلوا الجيف وأيقنوا بعجز آلهتهم الباطلة.",
        "دعا إلياس ربه فأغاث الأرض بالأمطار والبركات بعد تضرع المؤمنين، وظل نبي الله صامداً كالجبل الأشم يحارب الشرك ويثبت القلوب.",
        "ربى تلميذه اليسع عليه السلام ليخلفه في بني إسرائيل ويكون نبياً هادياً من بعده.",
        "خلد الله ذكره في العالمين بالسلام والثناء العاطر: ﴿سَلامٌ عَلَى إِلْ يَاسِينَ * إِنَّا كَذَلِكَ نَجْزِي الْمُحْسِنِينَ * إِنَّهُ مِنْ عِبَادِنَا الْمُؤْمِنِينَ﴾ (الصافات: 130-132)."
      ]
    },
    "keyLessons": {
      "en": [
        "Confronting false gods and societal corruption requires courage rooted solely in the fear of Allah.",
        "Material idols and human power structures can never bring benefit or avert divine decree.",
        "Training and mentoring righteous successors ensures the continuity of sacred guidance across generations."
      ],
      "ur": [
        "باطل کے بڑے سے بڑے بتوں کے سامنے سچ بولنے کے لیے دل میں صرف اللہ کا خوف ہونا ضروری ہے۔",
        "دنیا کے جھوٹے معبود اور حکمران مل کر بھی اللہ کی مرضی کے بغیر ایک قطرہ بارش نہیں برسا سکتے۔",
        "آنے والی نسلوں کے لیے نیک جانشینوں کی تربیت کرنا دین کی بقا کے لیے ناگزیر نبوی سنت ہے۔"
      ],
      "ar": [
        "الصدع بالحق أمام الطغاة يستوجب قلباً عامراً بخشية الله وحده لا يبالي بسطوة البشر.",
        "الأصنام الأرضية والأنظمة الباطلة عاجزة تماماً عن جلب نفع أو كشف ضر عن أهلها.",
        "تربية الأجيال وإعداد القادة الصالحين ضمانة لاستمرار راية التوحيد جيلاً بعد جيل."
      ]
    }
  },
  {
    "id": "alyasa",
    "order": 20,
    "nameEn": "Al-Yasa (A.S.)",
    "nameUr": "حضرت الیسع (ع)",
    "nameAr": "اليسع عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Compassionate Guide & Successor of Prophecy",
    "titleUr": "پیکرِ شفقت اور حضرت الیاس کے نائب",
    "titleAr": "النبي الصالح وخليفة إلياس في بني إسرائيل",
    "image": "/stories/covers/alyasa-v2.webp",
    "quranMention": "Commended in Surah Al-An'am and Surah Sad among the chosen and exalted messengers",
    "summaryEn": "Trained under Prophet Ilyas, Prophet Al-Yasa (Elisha) inherited the sacred prophetic office. Blessed with miraculous healing of bitter waters and restoring the sick, he guided the Israelites with tender mercy and unflinching adherence to the Torah.",
    "summaryUr": "حضرت الیاس علیہ السلام کے زیرِ سایہ تربیت پائی اور ان کے جانشین بنے۔ اللہ تعالیٰ نے تلخ اور کھارے پانی کو میٹھا کرنے اور بیماروں کو شفا دینے کے معجزات عطا فرمائے اور شریعتِ تورات کے مطابق رہنمائی فرمائی۔",
    "summaryAr": "لازم إلياس وتلقى عنه العلم والحكمة، فبعثه الله نبياً لبني إسرائيل، بارك الله في دعائه فشُفيت به الأدواء وطابت به مياه العيون المرة، وكان من الأخيار المصطفين.",
    "fullStory": {
      "en": [
        "As a young boy suffering from a debilitating illness, Al-Yasa met Prophet Ilyas when the prophet sought refuge in his mother's home. Ilyas prayed for the ailing youth, and Allah granted him instant, radiant recovery. Deeply moved, Al-Yasa became Ilyas's inseparable companion, learning the deep inner wisdom of the Torah and prophetic etiquette.",
        "When Prophet Ilyas's earthly mission drew to a close, Allah elevated Al-Yasa to the prophetic station, commissioning him to guide the Children of Israel across the plains of Jericho and Damascus.",
        "Prophet Al-Yasa was endowed by Allah with remarkable miracles of healing and purification. The citizens of Jericho came weeping that their ancient water spring had turned bitter and poisonous, rendering the soil barren and causing disease. Al-Yasa took a bowl of salt, prayed over the water, and cast it into the spring. The water instantly turned sweet, pure, and life-giving, transforming the valley into blooming date palms.",
        "He lived among his people as an accessible, fatherly sanctuary. Whenever poor widows or impoverished debtors came to him facing ruin, Al-Yasa prayed, and modest jars of olive oil multiplied miraculously until their debts were paid in full.",
        "Throughout his long prophetic ministry, Al-Yasa maintained unwavering loyalty to divine revelation. He warned corrupt judges against accepting bribes and called the wealthy chieftains to remember the Day of Accountability, preserving monotheism across a critical era of Hebrew history.",
        "Allah praised his noble character twice in the Holy Quran, elevating his memory for all generations: 'And remember Ismail, Al-Yasa, and Dhul-Kifl; and all were of the best.' (Surah Sad 38:48), and in Surah Al-An'am: 'And Ismail and Al-Yasa and Yunus and Lut—and all [of them] We preferred over the worlds.' (Surah Al-An'am 6:86)."
      ],
      "ur": [
        "بچپن میں حضرت الیسع علیہ السلام ایک شدید بیماری میں مبتلا تھے۔ جب حضرت الیاس علیہ السلام نے ان کے گھر قیام فرمایا تو انہوں نے اس بیمار بچے کے لیے دعا فرمائی۔ اللہ نے فوراً شفا عطا فرمائی۔ اس کے بعد حضرت الیسع نے حضرت الیاس کا دامن تھام لیا اور ان کے سچے شاگرد اور جانشین بن گئے۔",
        "حضرت الیاس علیہ السلام کے وصال کے بعد اللہ تعالیٰ نے حضرت الیسع کو نبوت کے عظیم منصب پر فائز فرمایا اور بنی اسرائیل کی رہنمائی کی ذمہ داری سونپی۔",
        "اللہ پاک نے آپ کے ہاتھوں پر شفا اور برکت کے بے شمار معجزات ظاہر فرمائے۔ اریحا کی بستی کے لوگ شکایت لے کر آئے کہ بستی کا چشمہ تلخ اور زہریلا ہو چکا ہے جس سے کھیتیاں برباد اور لوگ بیمار ہو رہے ہیں۔ آپ نے اللہ کے حضور دعا کی اور چشمے میں نمک ڈالا، پانی فوراً آبِ حیات کی طرح میٹھا اور برکت والا بن گیا۔",
        "آپ غریبوں، بیواؤں اور ناداروں کے سچے غمگسار تھے۔ روایت ہے کہ ایک مقروض بیوہ کے پاس صرف تھوڑا سا تیل تھا، آپ کی دعا سے اس کے تمام برتن تیل سے بھر گئے اور اس کے تمام قرضے ادا ہو گئے۔",
        "آپ نے پوری زندگی تورات کے احکام پر عمل پیرا رہ کر قوم کی عدالت اور معاشرت کو سنوارا۔ رشوت خور قاضیوں اور متکبر سرداروں کو آخرت کے عذاب سے ڈرایا اور امت کو گمراہی سے بچائے رکھا۔",
        "قرآنِ مجید نے آپ کے مقام و مرتبے کو سراہتے ہوئے فرمایا: 'اور اسماعیل اور الیسع اور یونس اور لوط کو، اور ہم نے ان سب کو تمام جہانوں پر فضیلت بخشی۔' (سورۃ الانعام) اور سورۃ ص میں فرمایا: 'اور یہ سب بہترین اور برگزیدہ بندوں میں سے تھے۔'"
      ],
      "ar": [
        "أصاب اليسع في صباه سقم شديد، فمر به إلياس عليه السلام ودعا له فعافاه الله، فلازم إلياس ملازمة الظل يتعلم منه التوراة والحكمة حتى خلفه في قومه.",
        "أكرمه الله بالنبوة وأجرى على يديه الآيات البينات؛ فاشتكوا إليه ملوحة مياه أريحا وفساد زروعها، فدعا الله وأصلح الماء ببركته فصار عذباً فراتاً مباركاً.",
        "كان نبيّاً رحيماً بالمساكين، يُفرّج كرب المكروبين ويدعو للمحتاجين فيفيض الزيت والزاد ببركة دعائه الصادق.",
        "حكم بين بني إسرائيل بشرع التوراة، وقاوم الفساد والظلم، وحث الناس على الاستقامة والتوحيد الخالص في حقبة عصيبة من تاريخهم.",
        "أثنى الله عليه في محكم كتابه مع خيرة الرسل: ﴿وَإِسْمَاعِيلَ وَالْيَسَعَ وَيُونُسَ وَلُوطاً وَكُلّاً فَضَّلْنَا عَلَى الْعَالَمِينَ﴾ (الأنعام: 86).",
        "وذكره في سورة ص بين الصفوة الأبرار: ﴿وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ وَكُلٌّ مِنَ الْأَخْيَارِ﴾ (ص: 48)."
      ]
    },
    "keyLessons": {
      "en": [
        "Dedicated discipleship and humility under righteous mentors prepare the heart for divine leadership.",
        "Using spiritual blessings and knowledge to alleviate the practical suffering of the poor is prophetic charity.",
        "Allah honors those who faithfully preserve the truth during times of societal apathy."
      ],
      "ur": [
        "نیک اور سچے استادوں کی شاگردی اور صحبت انسان کے باطن کو نبوی حکمت کے لائق بنا دیتی ہے۔",
        "اپنے علم اور برکت کو غریبوں اور بیواؤں کی تکلیف دور کرنے کے لیے استعمال کرنا سچی نبوی میراث ہے۔",
        "معاشرے میں سچائی کی حفاظت کرنے والے مخلص بندوں کو اللہ تعالیٰ تمام جہانوں پر فضیلت بخشتا ہے۔"
      ],
      "ar": [
        "ملازمة الصالحين والتعلم منهم بأدب وتواضع مفتاح لنيل المراتب العالية عند الله.",
        "تسخير العلم والوجاهة في قضاء حوائج الضعفاء من أزكى القربات وأشرفها.",
        "الثبات على هدى الأنبياء عند تغير الأحوال شيمة الأخيار والمصطفين."
      ]
    }
  },
  {
    "id": "yunus",
    "order": 21,
    "nameEn": "Yunus (A.S.)",
    "nameUr": "حضرت یونس (ع)",
    "nameAr": "يونس عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "Dhun-Nun & The Immortal Prayer from the Depths of Darkness",
    "titleUr": "ذوالنون اور مچھلی کے پیٹ میں تسبیح کرنے والے پیغمبر",
    "titleAr": "ذو النون وصاحب الحوت",
    "image": "/stories/covers/yunus-v2.webp",
    "quranMention": "Mentioned 4 times and honored with an entire Surah (Surah Yunus)",
    "summaryEn": "Sent to the ancient metropolis of Nineveh. When he departed in grief and boarded a storm-tossed ship, he was swallowed by a massive whale, uttering the immortal prayer of repentance from the depths of three darknesses.",
    "summaryUr": "آپ کو نینویٰ کی سرکش قوم کی طرف بھیجا گیا۔ قوم کی ہٹ دھرمی پر رنجیدہ ہو کر بستی سے نکلے، طوفانی سمندر میں مچھلی نے نگل لیا۔ تین اندھیروں میں 'لا إله إلا أنت سبحانك إني كنت من الظالمين' کی دعا مانگی جس سے نجات ملی۔",
    "summaryAr": "أرسل إلى أهل نينوى، خرج مغاضباً فركب الفلك، فالتقمه الحوت في ظلمات ثلاث فنادى: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾، فاستجاب الله له ونجاه.",
    "fullStory": {
      "en": [
        "In the colossal ancient Assyrian capital of Nineveh (in modern-day Iraq), over one hundred thousand people were steeped in stubborn polytheism. Allah raised Prophet Yunus ibn Matta (Jonah) to summon them to righteousness. For years Yunus preached with tireless patience, but his people hardened their hearts in arrogant rejection.",
        "Weighed down by bitter sorrow and assuming his divine commission was completed, Yunus made a critical human misjudgment: he departed from his city before receiving explicit divine command to migrate. He boarded a crowded merchant ship setting sail across the stormy Mediterranean.",
        "In the open sea, ferocious tempests battered the vessel. The terrified sailors cast lots to lighten the load and appease the ocean, believing a fugitive was aboard. Three times the lot fell upon Yunus. Accepting the divine decree, Yunus cast himself into the dark, churning depths. Allah commanded a colossal whale from the ocean floor to swallow Yunus whole without crushing a single bone.",
        "Enveloped in three suffocating darknesses—the darkness of the whale's belly, the darkness of the deep ocean trenches, and the darkness of midnight—Yunus heard the sea creatures and stones glorifying their Creator. Pierced with absolute humility and repentance, he uttered the prayer that would echo through human history: 'La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen' (There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers). (Surah Al-Anbiya 21:87).",
        "Allah answered his cry: 'Had he not been of those who glorify Allah, he would have remained inside its belly until the Day of Resurrection.' (Surah As-Saffat 37:143-144). Allah commanded the whale to cast the exhausted prophet onto a barren shore. Allah caused a protective gourd vine (Yaqteen) to shade his scorched body, while wild gazelles provided him milk until his strength returned.",
        "Yunus returned to Nineveh to find a miraculous sight: terrified by ominous signs of impending chastisement, the entire population of over one hundred thousand had repented sincerely with weeping and dust upon their heads. Allah removed the punishment, making them the only ancient civilization to avert collective destruction through timely repentance."
      ],
      "ur": [
        "عراق کے قدیم تاریخی شہر نینویٰ میں ایک لاکھ سے زائد لوگ آباد تھے جو بت پرستی اور برائیوں میں ڈوبے ہوئے تھے۔ اللہ تعالیٰ نے حضرت یونس بن متی علیہ السلام کو ان کی رہنمائی کے لیے بھیجا۔ آپ نے برسوں توحید کا پیغام دیا مگر قوم اپنی ہٹ دھرمی پر جمی رہی۔",
        "قوم کی سرکشی پر آپ شدید رنجیدہ ہوئے اور اللہ کے صریح حکم کا انتظار کیے بغیر بستی چھوڑ کر چل دیے۔ سمندر کے کنارے پہنچ کر ایک مسافر بردار کشتی میں سوار ہو گئے۔",
        "سمندر کے بیچ پہنچتے ہی خوفناک طوفان نے کشتی کو گھیر لیا۔ ملاحوں نے بوجھ کم کرنے کے لیے قرعہ ڈالا کہ کسے سمندر میں گرایا جائے۔ تینوں بار حضرت یونس علیہ السلام کا نام نکلا۔ آپ سمجھ گئے کہ یہ اللہ کی طرف سے پکڑ ہے، چنانچہ آپ نے سمندر میں چھلانگ لگا دی۔ اللہ نے ایک بڑی مچھلی کو حکم دیا کہ یونس کو نگل لے مگر اس کے گوشت یا ہڈی کو نقصان نہ پہنچائے۔",
        "تین گھٹا ٹوپ اندھیروں میں—مچھلی کے پیٹ کا اندھیرا، سمندر کی اتھاہ گہرائیوں کا اندھیرا، اور رات کی تاریکی—حضرت یونس نے سمندر کے ذرات اور مچھلیوں کو اللہ کی تسبیح کرتے سنا۔ آپ نے رو رو کر وہ دعا مانگی جو قیامت تک ہر غمزدہ کے لیے وظیفۂ نجات ہے: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ' (تیرے سوا کوئی معبود نہیں، تو پاک ہے، بیشک میں ہی قصوروار ہوں)۔",
        "اللہ نے فرمایا: 'اگر وہ تسبیح کرنے والوں میں سے نہ ہوتے تو قیامت کے دن تک مچھلی کے پیٹ میں ہی رہتے۔' اللہ کے حکم سے مچھلی نے آپ کو ساحل پر اگل دیا۔ آپ کا جسم نرم اور نڈھال تھا، اللہ نے آپ پر سایہ کرنے کے لیے کدو کی بیل اگائی اور ہرنیاں دودھ پلا گئیں۔",
        "جب آپ تندرست ہو کر نینویٰ واپس لوٹے تو ایک حیرت انگیز منظر دیکھا: قوم نے عذاب کے آثار دیکھ کر سچے دل سے توبہ کر لی تھی، مائیں بچوں کو لے کر میدان میں رو پڑی تھیں، اور اللہ نے ان سے عذاب ٹال دیا تھا۔ یہ تاریخ کی واحد قوم بنی جس کی توبہ نے عذاب کو ٹال دیا۔"
      ],
      "ar": [
        "أرسل الله يونس بن متى إلى نينوى بالعراق، فدعا مائة ألف أو يزيدون، فاستكبروا وأصروا على شركهم، فغضب يونس وخرج دون إذن صريح من ربه.",
        "ركب سفينة في لجة البحر فهاجت الأمواج واقترفت القرعة ثلاثاً على إلقائه، فألقى نفسه في اليم فالتقمه حوت عظيم بأمر ربه دون أن يهش له عظماً أو يهشم له لحماً.",
        "عاش في ظلمات ثلاث: ظلمة بطن الحوت، وظلمة قعر البحر، وظلمة الليل البهيم، فسمع تسبيح الحصى ودواب البحر، فنادى بقلب منكسر خاشع: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾ (الأنبياء: 87).",
        "استجاب الله له ونجاه من الغم: ﴿فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ * لَلَبِثَ فِي بَطْنِهِ إِلَى يَوْمِ يُبْعَثُونَ﴾، ونبذه الحوت بالعراء وهو سقيم وأنبت عليه شجرة من يقطين لتظله.",
        "عاد إلى قومه فوجدهم قد تابوا جميعاً وأنابوا وتضرعوا لما رأوا علامات العذاب، فكشف الله عنهم عذاب الخزي في الحياة الدنيا ومتعهم إلى حين، فكانت القرية الوحيدة التي آمنت فنجت ببركة التوبة الصادقة."
      ]
    },
    "keyLessons": {
      "en": [
        "No matter how deep the darkness of depression or difficulty, sincere Dhikr ('La ilaha illa Anta...') brings instantaneous divine rescue.",
        "Never abandon a sacred responsibility until explicit divine permission has arrived.",
        "Collective community repentance (Tawbah) holds the miraculous power to turn away impending collective punishment."
      ],
      "ur": [
        "زندگی کی مشکل ترین تاریکی اور غم میں آیتِ کریمہ 'لَّا إِلَٰهَ إِلَّا أَنتَ...' کا ورد اللہ کی غیبی نجات لے کر آتا ہے۔",
        "اللہ کی طرف سے اجازت اور حکم آنے سے پہلے اپنی ذمہ داری اور میدان کو کبھی نہیں چھوڑنا چاہیے۔",
        "سچے دل سے اجتماعی توبہ اور گریہ و زاری نازل ہونے والے عذاب کو بھی رحمت میں بدل دیتی ہے۔"
      ],
      "ar": [
        "دعاء ذي النون هو سفينة النجاة من كل كرب وهم وغم في الدنيا والآخرة.",
        "الصبر على أداء الواجب وعدم التبرم من الدعوة حتى يأذن الله بالفرج.",
        "التوبة النصوح الصادقة من شأنها أن تدفع النقم وتستجلب النعم والرحمات العامة."
      ]
    }
  },
  {
    "id": "zakariyya",
    "order": 22,
    "nameEn": "Zakariyya (A.S.)",
    "nameUr": "حضرت زکریا (ع)",
    "nameAr": "زكريا عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Devout Guardian of the Sanctuary & Father of Glad Tidings",
    "titleUr": "محرابِ قدس کے ولی اور بشارت پانے والے پیغمبر",
    "titleAr": "كافل مريم ونبي الرجاء والدعاء الخفي",
    "image": "/stories/covers/zakariyya-v2.webp",
    "quranMention": "Celebrated in Surahs Maryam and Ali 'Imran for his deeply moving, whisper-soft supplication",
    "summaryEn": "Serving as the holy custodian of Bayt al-Maqdis, Prophet Zakariyya (A.S.) fostered Maryam. Beholding miraculous out-of-season fruits in her sanctuary, the frail centenarian made a whisper-soft prayer for an heir, blessed miraculously with Prophet Yahya (A.S.).",
    "summaryUr": "بیت المقدس کے امام اور بی بی مریم کے سرپرست بنے۔ مریم کے حجرے میں بے موسم پھلوں کے غیبی معجزات دیکھ کر بڑھاپے اور ہڈیوں کی کمزوری کے باوجود خفیہ دعا مانگی، اللہ نے یحییٰ جیسے باکمال نبی کی بشارت عطا فرمائی۔",
    "summaryAr": "كفل مريم البتول في محراب بيت المقدس، ورأى عندها رزقاً من غير كد، فدعا ربه نداءً خفياً وقد اشتعل رأسه شيباً ووهن عظمه، فبشرته الملائكة بيحيى مصدقاً بكلمة من الله.",
    "fullStory": {
      "en": [
        "In the twilight of the prophetic era of the Israelites, Prophet Zakariyya (Zechariah) served as the venerated priest and imam of Bayt al-Maqdis (Jerusalem). He was married to a righteous woman from the daughters of Harun, yet through decades of marriage, they had remained childless, and his hair had turned silvery white with advanced age.",
        "When the pious mother of Maryam dedicated her unborn child to the service of the temple, the priests cast lots to decide her guardianship. The divine lot fell upon Zakariyya. In the secluded upper sanctuary of the temple, Zakariyya watched over Maryam with fatherly tenderness.",
        "Whenever Zakariyya entered her private prayer chamber (Mihrab), he was astounded to find miraculous provisions: fresh summer fruits in the depth of winter, and winter fruits in the heat of summer. When he asked: 'O Maryam, from where comes this to you?' she replied with serene faith: 'It is from Allah. Indeed, Allah provides for whom He wills without account.' (Surah Ali 'Imran 3:37).",
        "The sight of divine provision defying the laws of nature ignited a spark of boundless hope in Zakariyya's elderly heart. Stepping aside in the sanctuary, he poured forth his heart in a whisper-soft, intimate supplication: 'My Lord, indeed my bones have grown frail, and my head has flamed with gray hair, and never have I been in my supplication to You, my Lord, unblessed... So grant me from Yourself an heir who will inherit me and inherit from the family of Yaqub.' (Surah Maryam 19:4-6).",
        "While he was still standing in prayer in the Mihrab, the angels called out to him with celestial joy: 'Allah gives you glad tidings of Yahya, confirming a word from Allah, honorable, chaste, and a prophet from among the righteous.' (Surah Ali 'Imran 3:39).",
        "Stunned with gratitude, Zakariyya asked for a sign. Allah commanded him to speak to no human for three days except by gesture, engaging his tongue entirely in continuous morning and evening praise. His barren wife conceived, and their blessed home was illuminated with the birth of Prophet Yahya."
      ],
      "ur": [
        "بنی اسرائیل کے آخری دور میں حضرت زکریا علیہ السلام بیت المقدس کے محترم امام اور پیشوا تھے۔ آپ کی عمر مبارک سو سال سے تجاوز کر چکی تھی، سر چاندی کی طرح سفید ہو چکا تھا اور ہڈیاں کمزور ہو چکی تھیں، اور آپ کی اہلیہ بانجھ تھیں جس کی وجہ سے آپ کے ہاں کوئی اولاد نہ تھی۔",
        "جب حضرت مریم علیہا السلام کی والدہ نے انہیں ہیکل کی خدمت کے لیے وقف کیا، تو قرعہ اندازی کے ذریعے حضرت زکریا علیہ السلام کو ان کی کفالت اور تربیت کا مقدس شرف ملا۔ آپ نے ہیکل میں بی بی مریم کے لیے ایک پاکیزہ حجرہ (محراب) مخصوص فرما دیا۔",
        "حضرت زکریا جب بھی بی بی مریم کے حجرے میں داخل ہوتے تو وہاں غیبی پھل رکھے پاتے—سردیوں میں گرمیوں کے تر و تازہ پھل اور گرمیوں میں سردیوں کے پھل۔ جب آپ نے پوچھا: 'اے مریم! یہ رزق تمہارے پاس کہاں سے آتا ہے؟' تو انہوں نے کمالِ یقین سے جواب دیا: 'یہ اللہ کے پاس سے ہے، بیشک اللہ جسے چاہے بے حساب رزق دیتا ہے۔' (سورۃ آل عمران)",
        "مریم کا یہ جواب سن کر حضرت زکریا کے دل میں امید کا دیا جل اٹھا۔ انہوں نے سوچا کہ جو رب موسم کے بغیر پھل پیدا کر سکتا ہے وہ بڑھاپے میں اولاد بھی عطا فرما سکتا ہے۔ چنانچہ آپ نے محراب میں تنہائی پاکر چپکے چپکے انتہائی عاجزی سے پکارا: 'اے میرے پروردگار! میری ہڈیاں کمزور ہو گئی ہیں اور سر بڑھاپے سے چمک اٹھا ہے، مگر میں تجھ سے مانگ کر کبھی محروم نہیں رہا... مجھے اپنے پاس سے ایک نیک وارث عطا فرما جو میرا اور آلِ یعقوب کا وارث بنے۔' (سورۃ مریم)",
        "ابھی آپ مصلے پر کھڑے نماز ہی پڑھ رہے تھے کہ فرشتوں نے پکار کر مبارکباد دی: 'اللہ آپ کو یحییٰ کی خوشخبری دیتا ہے، جو اللہ کے ایک کلمے کی تصدیق کرنے والے، سردار، باحیا اور نیکوکار نبی ہوں گے۔'",
        "حضرت زکریا نے خوشی اور حیرت سے نشانی مانگی۔ اللہ نے حکم دیا کہ تین دن تک لوگوں سے سوائے اشارے کے کوئی بات نہ کریں اور اپنے رب کو کثرت سے یاد کریں۔ آپ کی اہلیہ حاملہ ہوئیں اور گھر میں حضرت یحییٰ علیہ السلام کی ولادتِ باسعادت ہوئی۔"
      ],
      "ar": [
        "كان زكريا عليه السلام إمام محراب بيت المقدس، شابت ذوائبه ودق عظمه ووهن جسده، وكانت امرأته عاقراً لم تلد، فخشي على ميراث النبوة من بعده.",
        "كفل مريم بنت عمران لما اقترع الأحبار على كفالتها، وهيأ لها محراباً طاهراً تعبد الله فيه ليل نهار.",
        "كلما دخل عليها المحراب وجد عندها فاكهة الصيف في الشتاء وفاكهة الشتاء في الصيف، فلما سألها: ﴿يَا مَرْيَمُ أَنَّى لَكِ هَذَا قَالَتْ هُوَ مِنْ عِنْدِ اللَّهِ إِنَّ اللَّهَ يَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ﴾ (آل عمران: 37).",
        "هنالك تحرك الرجاء النبوي في قلبه، فناجى ربه نداءً خفياً أدباً وخشية: ﴿قَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْباً وَلَمْ أَكُنْ بِدُعَائِكَ رَبِّ شَقِيّاً * وَإِنِّي خِفْتُ الْمَوَالِيَ مِنْ وَرَائِي وَكَانَتِ امْرَأَتِي عَاقِراً فَهَبْ لِي مِنْ لَدُنْكَ وَلِيّاً﴾ (مريم: 4-5).",
        "فنادته الملائكة وهو قائم يصلي في المحراب ببشارة عظمى: ﴿أَنَّ اللَّهَ يُبَشِّرُكَ بِيَحْيَى مُصَدِّقاً بِكَلِمَةٍ مِنَ اللَّهِ وَسَيِّداً وَحَصُوراً وَنَبِيّاً مِنَ الصَّالِحِينَ﴾ (آل عمران: 39).",
        "جعل الله له آية ألا يكلم الناس ثلاثة أيام إلا رمزاً مع التسبيح الدائم بالعشي والإبكار، وأصلح الله له زوجه فولدت يحيى نبياً حصوراً زكياً."
      ]
    },
    "keyLessons": {
      "en": [
        "Never despair of Allah's mercy; divine miracles are not constrained by biological age or worldly causes.",
        "Whispered, intimate prayers from a broken heart reach the highest celestial assemblies.",
        "Fostering righteous youth and serving sanctuaries attracts uncounted divine provision."
      ],
      "ur": [
        "اللہ کی رحمت سے کبھی ناامید نہ ہوں؛ معجزات مادی قوانین اور ظاہری عمر کے محتاج نہیں ہوتے۔",
        "تنہائی میں دل کی گہرائیوں سے مانگی گئی دھیمی اور عاجزانہ دعا عرشِ بریں تک پہنچتی ہے۔",
        "نیک بچوں کی تربیت اور عبادت گاہوں کی خدمت انسان کے گھر میں غیبی برکتوں کے دروازے کھول دیتی ہے۔"
      ],
      "ar": [
        "لا يأس مع الله؛ فقدرة الخالق سبحانه تتجاوز الأسباب المادية ونواميس الكون.",
        "الدعاء الخفي الصادر من قلب منكسر خاشع أرجى للقبول وأعظم في الأثر.",
        "رعاية أهل الصلاح والخدمة في بيوت الله مفتاحان لفيض الرزق والبركات الإلهية."
      ]
    }
  },
  {
    "id": "yahya",
    "order": 23,
    "nameEn": "Yahya (A.S.)",
    "nameUr": "حضرت یحییٰ (ع)",
    "nameAr": "يحيى عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Chaste Prophet of Wisdom & Martyr of Divine Truth",
    "titleUr": "پیکرِ زہد و تقویٰ اور نڈر حق گو پیغمبر",
    "titleAr": "السيد الحصور والشهيد الصديق",
    "image": "/stories/covers/yahya-v2.webp",
    "quranMention": "Named directly by Allah in the Quran; blessed with wisdom and compassion in his youth",
    "summaryEn": "Bestowed with exceptional wisdom, tenderness of heart, and chastity from childhood, Prophet Yahya (A.S.) lived an austere life in the wilderness. He proclaimed the coming of the Messiah Isa (A.S.) and fearlessly denounced royal immorality, martyred for divine law.",
    "summaryUr": "بچپن میں ہی حکمت، زہد اور پاکیزگی عطا ہوئی۔ بیابانوں میں زاہدانہ زندگی گزاری، حضرت عیسیٰ کی آمد کی تصدیق فرمائی اور بادشاہ کے غیر شرعی نکاح کے خلاف ڈٹ کر شہادت کا اعلیٰ رتبہ پایا۔",
    "summaryAr": "سماه الله من فوق سبع سموات وآتاه الحكم صبياً، كان باراً بوالديه تقياً نقياً حصوراً، صدّق بالمسيح عيسى عليه السلام وقدم روحه شهيداً للحق في وجه الطغيان.",
    "fullStory": {
      "en": [
        "Prophet Yahya (John the Baptist) was given a unique name chosen directly by Allah—a name never bestowed upon any human before him. From his tenderest years, while other children played worldly games, Yahya was immersed in prayer, study of the scripture, and contemplation of the Creator.",
        "Allah endowed him with extraordinary spiritual wisdom in his youth: 'O Yahya, take the Scripture with resolve.' And We gave him judgement while still a boy, and tenderness from Us and purity; and he was devout and dutiful to his parents, and he was not a disobedient tyrant.' (Surah Maryam 19:12-14).",
        "Yahya's life was a masterclass in austere detachment (Zuhd). He lived in the arid valleys of the Jordan river and desert hills, clothed in coarse camel-hair garments, eating wild plants, fruits, and honey, weeping so profoundly out of love and awe of Allah that tears carved permanent lines upon his cheeks.",
        "Even the fierce desert animals loved him; lions and gazelles would lie down peacefully near his prayer mat, recognizing his profound spiritual purity. He called the people to sincere repentance, baptizing and purifying souls in the Jordan River, boldly preparing the way for the coming Messiah, Prophet Isa (A.S.).",
        "When King Herod of Judea plotted an incestuous, unlawful marriage with his niece Herodias in defiance of the Torah's holy law, the palace courtiers bowed in cowardly silence. Only Prophet Yahya stood tall before the royal throne, declaring with fearless integrity: 'It is not lawful for you to marry her.'",
        "Enraged by his rebuke, the spiteful queen demanded Yahya's head. Yahya was imprisoned and beheaded, his noble blood crying out for justice. Allah greeted him with eternal heavenly peace: 'And peace be upon him the day he was born and the day he dies and the day he is raised alive.' (Surah Maryam 19:15)."
      ],
      "ur": [
        "حضرت یحییٰ علیہ السلام وہ واحد پیغمبر ہیں جن کا نام خود اللہ تعالیٰ نے آسمانوں پر تجویز فرمایا، آپ سے پہلے کسی کا یہ نام نہیں رکھا گیا تھا۔ بچپن میں جب دوسرے بچے کھیل کود میں وقت گزارتے تو آپ اللہ کی یاد اور تورات کے مطالعے میں محو رہتے۔",
        "اللہ پاک نے آپ کو کمسنی میں ہی بے پناہ حکمت اور بصیرت عطا فرمائی: 'اے یحییٰ! کتاب کو مضبوطی سے تھام لو، اور ہم نے انہیں بچپن میں ہی حکمت عطا فرمائی، اور اپنے پاس سے نرم دلی اور پاکیزگی بخشی، اور وہ بڑے پرہیزگار اور اپنے والدین کے خدمت گزار تھے، اور سرکش و نافرمان نہ تھے۔' (سورۃ مریم)",
        "آپ کی زندگی زہد، عبادت اور سادگی کا اعلیٰ ترین نمونہ تھی۔ آپ دریائے اردن کے بیابانوں میں رہتے، موٹا کھردرا لباس پہنتے، جنگلی جڑی بوٹیاں اور شہد کھاتے، اور خوفِ خدا سے اس کثرت سے روتے کہ آپ کے رخساروں پر آنسوؤں کے مستقل نشان بن گئے تھے۔",
        "جنگل کے درندے اور پرندے بھی آپ سے مانوس تھے اور آپ کی عبادت کے گرد پرسکون بیٹھ جاتے۔ آپ لوگوں کو سچی توبہ اور گناہوں کی معافی کی دعوت دیتے اور حضرت عیسیٰ علیہ السلام کی آمد اور نبوت کی سب سے پہلے گواہی دی۔",
        "جب اس دور کے ظالم بادشاہ ہیرودیس نے اپنی بھتیجی ہیرودیاس کے ساتھ غیر شرعی اور حرام نکاح کا ارادہ کیا، تو تمام درباری خاموش رہے مگر حضرت یحییٰ علیہ السلام نے دربار میں کھڑے ہو کر جرات سے فرمایا: 'تورات کے مطابق یہ عورت تمہارے لیے قطعی حرام ہے۔'",
        "ملکہ نے اس حق گوئی پر انتقام کی آگ میں جل کر بادشاہ سے حضرت یحییٰ کا سر مبارک مانگ لیا۔ آپ کو قید میں شہید کر دیا گیا۔ اللہ پاک نے آپ کو سلامتی کا لازوال تاج پہنایا: 'اور سلامتی ہو ان پر جس دن وہ پیدا ہوئے، اور جس دن وہ وفات پائیں گے، اور جس دن وہ زندہ اٹھائے جائیں گے۔' (سورۃ مریم)"
      ],
      "ar": [
        "سماه الله يحيى ولم يجعل له من قبل سمياً، وآتاه الفهم والحكمة صبياً وهو غلام يافع لم تشغله الملاهي عن طاعة مولاه.",
        "خاطبه ربه في محكم التنزيل: ﴿يَا يَحْيَى خُذِ الْكِتَابَ بِقُوَّةٍ وَآتَيْنَاهُ الْحُكْمَ صَبِيّاً * وَحَنَاناً مِنْ لَدُنَّا وَزَكَاةً وَكَانَ تَقِيّاً * وَبَرّاً بِوَالِدَيْهِ وَلَمْ يَكُنْ جَبَّاراً عَصِيّاً﴾ (مريم: 12-14).",
        "عاش في براري الأردن زاهداً متنسكاً، يلبس خشن الصوف ويطعم ورق الشجر وثمر البر، ويبكي من خشية الله حتى أثرت دموعه في وجنتيه.",
        "كانت السباع والوحوش تأنس إلى صوته وتسبيحه، يدعو بني إسرائيل إلى التوبة وتطهير القلوب، وكان أول من صدق بنبوة ابن خالته المسيح عيسى بن مريم.",
        "صدع بالحق في وجه ملك زمانه الظالم حين أراد الزواج من محارمه في معصية صريحة لشريعة الله، فأعلن يحيى تحريم ذلك الزواج الفاسق غير خائف من بطشه.",
        "تآمرت عليه المرأة الباغية فقُتل نبي الله شهيداً للصدق والحق، فنال الوسام الرباني الخالد: ﴿وَسَلامٌ عَلَيْهِ يَوْمَ وُلِدَ وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيّاً﴾ (مريم: 15)."
      ]
    },
    "keyLessons": {
      "en": [
        "True honor is speaking truth to tyrannical power without fearing mortal consequences.",
        "Tenderness of heart and dutiful devotion to parents are hallmarks of genuine prophetic piety.",
        "The martyr who gives his life for divine law achieves immortal celestial honor."
      ],
      "ur": [
        "ظالم اور طاقتور حکمران کے سامنے کلمۂ حق کہنا سب سے بڑا جہاد اور ایمانی غیرت ہے۔",
        "والدین کے ساتھ حسنِ سلوک اور دل میں اللہ کی مخلوق کے لیے نرمی سچے تقویٰ کی بنیاد ہے۔",
        "حق اور شریعت کی خاطر جان قربان کرنے والے شہید کو اللہ کی بارگاہ میں ابدی زندگی اور سلامتی نصیب ہوتی ہے۔"
      ],
      "ar": [
        "الصدع بالحق في وجه الحاكم الجائر ذروة الشجاعة وأعظم مراتب الجهاد في سبيل الله.",
        "البر بالوالدين ورقة القلب ونقاء السريرة من صفات المصطفين الأخيار.",
        "الشهادة في سبيل إعلاء شريعة الله خلود ومجد لا يبلى في الدنيا والآخرة."
      ]
    }
  },
  {
    "id": "isa",
    "order": 24,
    "nameEn": "Isa (A.S.)",
    "nameUr": "حضرت عیسیٰ (ع)",
    "nameAr": "عيسى عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "Ruhullah, The Word of Allah & The Pure Messiah",
    "titleUr": "روح اللہ، کلمۃ اللہ اور مسیحِ پاک",
    "titleAr": "روح الله وكلمته والمسيح المبارك في الأرض والسماء",
    "image": "/stories/covers/isa-v2.webp",
    "quranMention": "Mentioned 25 times by name and honored with title 'Al-Masih' (The Messiah)",
    "summaryEn": "Born miraculously to the Virgin Maryam without a father by Allah's creative decree ('Kun'). Prophet Isa (A.S.) spoke in the cradle, healed lepers, restored sight to the blind, shaped living birds from clay, and was raised physically to the heavens, destined to return.",
    "summaryUr": "کن کے الٰہی حکم سے بغیر باپ کے سیدہ مریم کے ہاں معجزاتی ولادت ہوئی۔ گود میں کلام فرمایا، اندھوں اور کوڑھیوں کو شفا دی، مٹی سے پرندہ بنایا، اور اللہ نے زندہ آسمانوں پر اٹھا لیا جو قربِ قیامت دوبارہ تشریف لائیں گے۔",
    "summaryAr": "خلقه الله بكلمة منه دون أب من البتول مريم، كلم الناس في المهد صبياً، وأبرأ الأكمه والأبرص وأحيى الموتى بإذن الله، ورفعه الله إليه حياً وسينزل في آخر الزمان حكماً عدلاً.",
    "fullStory": {
      "en": [
        "In the secluded sanctuary of Jerusalem, the chaste Virgin Maryam (Mary) was visited by Angel Jibril appearing as a perfect human. Trembling, she sought refuge in the All-Merciful, to which the angel replied: 'I am only the messenger of your Lord to give you the glad tidings of a pure boy.' She asked: 'How can I have a boy while no man has touched me?' Jibril answered: 'Thus [it will be]; your Lord says: It is easy for Me, and We will make him a sign to the people and a mercy from Us.' (Surah Maryam 19:19-21).",
        "Conceiving through Allah's creative spirit, Maryam withdrew to a remote place under a palm tree in the pangs of labor. Returning to her town carrying the infant, the suspicious elders condemned her. Maryam silently pointed to the baby. They sneered: 'How can we speak to one who is in the cradle a child?' Instantly, the infant Isa spoke with majestic clarity: 'Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet. And He has made me blessed wherever I am.' (Surah Maryam 19:30-31).",
        "As he matured, Allah taught Isa the Torah, the Gospel (Injeel), and divine wisdom, confirming him as the promised Messiah to the Children of Israel. Allah blessed him with staggering physical miracles: he shaped figures of birds out of clay, breathed into them, and by Allah's leave they flew as living birds; he cured the born-blind; he healed incurable lepers; and he brought dead corpses back to life by Allah's permission.",
        "Isa lived with peerless asceticism, possessing neither silver nor permanent dwelling, moving through villages curing sick hearts and rebuking hypocritical religious scholars who twisted the law for wealth. A devoted core of twelve disciples (Al-Hawariyyun) pledged absolute loyalty to him: 'We are supporters for Allah; we have believed in Allah and testify that we are Muslims.' (Surah Ali 'Imran 3:52).",
        "Threatened by his growing spiritual influence, the corrupt chief priests conspired with Roman authorities to assassinate him. But Allah declared His supreme sovereignty: 'O Isa, indeed I will take you and raise you to Myself and purify you from those who disbelieve.' (Surah Ali 'Imran 3:55).",
        "When the executioners stormed the house, Allah cast Isa's likeness upon an enemy or conspirator, who was seized and crucified in his place, while Allah raised Prophet Isa physically and alive into the heavens: 'And they did not kill him, nor did they crucify him; but [another] was made to resemble him to them... Rather, Allah raised him to Himself.' (Surah An-Nisa 4:157-158). Authentic prophetic hadith affirms that near the End of Times, Prophet Isa will descend at the white minaret of Damascus as a just ruler, break the cross, slay the Dajjal (Antichrist), and unite humanity under pure Islamic monotheism."
      ],
      "ur": [
        "بیت المقدس کے حجرے میں پاکدامن بی بی مریم کی خدمت میں حضرت جبرائیل علیہ السلام ایک خوبصورت انسان کی صورت میں تشریف لائے۔ بی بی مریم نے اللہ کی پناہ مانگی تو انہوں نے فرمایا: 'میں تو صرف تمہارے پروردگار کا بھیجا ہوا قاصد ہوں تاکہ تمہیں ایک پاکیزہ بیٹا عطا کروں۔' بی بی مریم نے حیرت سے پوچھا کہ مجھے کسی انسان نے چھوا تک نہیں تو بیٹا کیسے ہوگا؟ فرشتے نے فرمایا: 'ایسا ہی ہوگا، تیرے رب نے فرمایا ہے کہ یہ میرے لیے بہت آسان ہے۔' (سورۃ مریم)",
        "اللہ کے حکم سے بغیر باپ کے حمل ٹھہرا۔ ولادت کے بعد جب بی بی مریم بچے کو گود میں لے کر قوم کے پاس آئیں تو لوگوں نے طعنے دینا شروع کیے۔ بی بی مریم نے اشارہ کیا۔ وہ بولے کہ گود کے بچے سے کیسے بات کریں؟ تب نومولود حضرت عیسیٰ نے بول کر سب کو ششدر کر دیا: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيّاً' (میں اللہ کا بندہ ہوں، اس نے مجھے کتاب دی اور مجھے نبی بنایا، اور میں جہاں بھی رہوں مجھے برکت والا بنایا ہے)۔",
        "بڑے ہو کر اللہ تعالیٰ نے آپ کو انجیلِ مقدس اور حکمت عطا فرمائی۔ اللہ نے آپ کے ہاتھوں پر محیر العقول معجزات ظاہر فرمائے: آپ مٹی کا پرندہ بنا کر پھونک مارتے تو وہ اللہ کے حکم سے سچ مچ اڑنے لگتا؛ پیدائشی اندھوں کو ہاتھ پھیر کر بینا کر دیتے؛ برص اور کوڑھ کے لاعلاج مریضوں کو شفا بخشتے؛ اور مردوں کو 'قُمْ بِإِذْنِ اللَّهِ' کہہ کر زندہ کر دیتے۔",
        "آپ کا زہد و تقویٰ بے مثال تھا۔ آپ نے دنیا میں کوئی گھر نہیں بنایا، نہ سونا چاندی جمع کیا۔ حواریوں (مخلص ساتھیوں) نے آپ کا بھرپور ساتھ دیا اور توحید کا پرچم بلند رکھا۔ آپ نے مکار اور ریاکار فریسیوں کو آئینہ دکھایا۔",
        "جب یہودیوں کے گمراہ سرداروں نے رومن حاکم کے ساتھ مل کر آپ کے قتل کی سازش رچی، تو اللہ تعالیٰ نے اپنے پیارے نبی کو تنہا نہ چھوڑا اور فرمایا: 'اے عیسیٰ! میں تمہیں اپنے پاس اٹھا لوں گا اور کافروں سے پاک کر دوں گا۔' (سورۃ آل عمران)",
        "اللہ تعالیٰ نے آپ کے ایک دشمن پر آپ کی شبیہ ڈال دی جسے پکڑ کر مصلوب کیا گیا، اور حضرت عیسیٰ علیہ السلام کو صحیح سلامت زندہ آسمانوں پر اٹھا لیا گیا: 'اور انہوں نے نہ اسے قتل کیا نہ سولی دی بلکہ ان کے لیے معاملہ مشتبہ کر دیا گیا... بلکہ اللہ نے انہیں اپنی طرف اٹھا لیا۔' (سورۃ النساء)۔ احادیثِ مبارکہ کے مطابق قربِ قیامت آپ دمشق کے سفید مینار پر نزول فرمائیں گے، دجال کو قتل کریں گے اور دنیا کو عدل و انصاف سے بھر دیں گے۔"
      ],
      "ar": [
        "تمثّل الروح الأمين جبريل لمريم العذراء بشراً سوياً، فاستعاذت منه بالرحمن، فبشرها بغلام زكي معجزة للعالمين: ﴿قَالَ كَذَلِكِ قَالَ رَبُّكِ هُوَ عَلَيَّ هَيِّنٌ وَلِنَجْعَلَهُ آيَةً لِلنَّاسِ وَرَحْمَةً مِنَّا وَكَانَ أَمْراً مَقْضِيّاً﴾ (مريم: 21).",
        "حملت به ونبذت به مكاناً قصياً، فلما أتت به قومها تحمله قالوا يا مريم لقد جئتِ شيئاً فرياً، فأشارت إليه، فأنطقه الله في مهده آية باهرة: ﴿قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيّاً * وَجَعَلَنِي مُبَارَكاً أَيْنَ مَا كُنْتُ﴾ (مريم: 30-31).",
        "أنزل الله عليه الإنجيل وأيده بالروح القدس، وأعطاه آيات خارقة للعادة: يخلق من الطين كهيئة الطير فينفخ فيه فيكون طيراً بإذن الله، ويبرئ الأكمه والأبرص ويحيي الموتى بإذن الله وينبئهم بما يأكلون وما يدخرون في بيوتهم.",
        "عاش زاهداً بريئاً من حطام الدنيا، يدعو إلى عبادة الله الواحد الأحد، والتف حوله الحواريون نصرة لدين الله: ﴿نَحْنُ أَنْصَارُ اللَّهِ آمَنَّا بِاللَّهِ وَاشْهَدْ بِأَنَّا مُسْلِمُونَ﴾.",
        "تآمر عليه الأحبار مع الحاكم الروماني لقتله، فمكر الله مكر الحق: ﴿إِذْ قَالَ اللَّهُ يَا عِيسَى إِنِّي مُتَوَفِّيكَ وَرَافِعُكَ إِلَيَّ وَمُطَهِّرُكَ مِنَ الَّذِينَ كَفَرُوا﴾ (آل عمران: 55).",
        "ألقى الله شبهه على غيره فصُلب ذلك الشبيه، ورُفع عيسى عليه السلام حياً إلى السماء بجسده وروحه: ﴿وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَكِنْ شُبِّهَ لَهُمْ... بَلْ رَفَعَهُ اللَّهُ إِلَيْهِ وَكَانَ اللَّهُ عَزِيزاً حَكِيماً﴾ (النساء: 157-158)، وسينزل في آخر الزمان حكماً مقسطاً يكسر الصليب ويقتل الخنزير ويضع الجزية ويفيض المال."
      ]
    },
    "keyLessons": {
      "en": [
        "Allah's creative command ('Kun fayakun') brings existence without biological father, just as He created Adam from dust.",
        "Jesus is a revered Messenger and Spirit from Allah, purely a human servant, not divine and not the son of God.",
        "Asceticism, healing compassion, and fearlessness against corrupt establishments represent the spirit of the Messiah."
      ],
      "ur": [
        "اللہ کی شانِ خلاقی 'کُن' کی محتاج ہے؛ جس رب نے آدم کو بغیر ماں باپ کے پیدا کیا، اس نے عیسیٰ کو بغیر باپ کے پیدا کر دکھایا۔",
        "حضرت عیسیٰ اللہ کے معزز رسول اور کلمہ ہیں، وہ خدا یا خدا کے بیٹے نہیں بلکہ اللہ کے برگزیدہ اور مخلص بندے ہیں۔",
        "دنیا کی محبت سے پاک ہو کر بیماروں کے دلوں کو شفا بخشنا اور ظالم پنڈتوں کے خلاف سچ پر قائم رہنا روحِ عیسیٰ ہے۔"
      ],
      "ar": [
        "قدرة الله المطلقة تخلق بكلمة ﴿كُنْ فَيَكُونُ﴾، ومثل عيسى عند الله كمثل آدم خلقه من تراب ثم قال له كن فيكون.",
        "عيسى بن مريم عبد الله ورسوله وكلمته ألقاها إلى مريم وروح منه، بريء من ادعاء الألوهية والشرك.",
        "الزهد في الدنيا والشفقة بالفقراء والصدع بالتوحيد الخالص هي الرسالة الحقيقية للمسيح المبارك."
      ]
    }
  },
  {
    "id": "muhammad",
    "order": 25,
    "nameEn": "Muhammad (S.A.W.)",
    "nameUr": "حضرت محمد مصطفیٰ (ﷺ)",
    "nameAr": "محمد صلى الله عليه وسلم",
    "honorific": "صَلَّى ٱللّٰهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ",
    "titleEn": "The Seal of the Prophets & Universal Mercy to All Worlds",
    "titleUr": "خاتم النبیین اور تمام جہانوں کے لیے رحمت",
    "titleAr": "خاتم النبيين وإمام المرسلين ورحمة الله للعالمين",
    "image": "/stories/covers/muhammad-v2.webp",
    "quranMention": "Mentioned 4 times by name and celebrated across the Quran: 'And We have not sent you except as a mercy to the worlds' (Surah Al-Anbiya 21:107)",
    "summaryEn": "The Final Messenger of Allah and leader of all prophets. Known as As-Sadiq and Al-Amin, he received the Quran at Cave Hira, bore trials with supreme patience, ascended the heavens in Miraj, established brotherhood in Madinah, liberated Makkah in boundless mercy, and delivered the complete message of Islam.",
    "summaryUr": "اللہ تعالیٰ کے آخری اور سب سے پیارے رسول ﷺ۔ بچپن ہی سے سچے اور امانت دار، غارِ حرا میں قرآن پاک کا نزول، مکہ کے مظالم پر بے مثال صبر، معراج کا مقدس سفر، مدینہ میں بھائی چارہ، فتحِ مکہ پر دشمنوں کو عام معافی، اور دنیا کو امن، انصاف اور اخلاق کا ابدی راستہ سکھایا۔",
    "summaryAr": "خاتم النبيين وسيد المرسلين المبعوث رحمة للعالمين، نزل عليه القرآن في غار حراء، وعرج به إلى السماوات العلى، وأقام دولة العدل والمؤاخاة في المدينة، وفتح مكة عافياً ورحيماً.",
    "fullStory": {
      "en": [
        "In the sacred city of Makkah, where centuries earlier Prophet Ibrahim and Prophet Ismail (A.S.) had built the Holy Ka'bah, the world had fallen into deep darkness, idol worship, and endless tribal warfare. In the Year of the Elephant (570 CE), an orphan child of the noble Banu Hashim clan of Quraysh was born: Muhammad ibn Abdullah (S.A.W.). His father Abdullah had passed away before his birth, and when he was only six years old, his loving mother Aminah passed away as well. He was cared for first by his grandfather Abdul Muttalib, and then by his devoted uncle Abu Talib. In his early years, a righteous desert woman named Halimah Sa'diyyah nursed and cared for him. Allah protected young Muhammad completely from every bad habit, injustice, and falsehood of his time.",
        "As he grew into adulthood, Muhammad was loved and respected by all of Makkah for his complete honesty, purity, and kindness. Everyone called him 'As-Sadiq' (The Truthful) and 'Al-Amin' (The Trustworthy). He joined an alliance called Hilf al-Fudul to protect helpless travelers and oppressed people from injustice. When the Ka'bah was rebuilt and the tribal leaders were about to fight a bloody war over who would place the Black Stone (Hajr al-Aswad) in the wall, Muhammad placed the stone on a cloak and had every clan leader hold an edge together, resolving the conflict peacefully with his own hands. Impressed by his noble character and fair business dealing, a noble lady named Khadijah (R.A.) proposed marriage to him, and their home became a haven of peace, love, and charity.",
        "As he approached the age of forty, Muhammad loved to spend quiet days in prayer and reflection away from idol worship. He would climb the steep mountain of Noor and spend peaceful nights inside Cave Hira, worshiping the One True Creator. In the holy month of Ramadan, Angel Jibril (Gabriel) appeared to him in radiant glory and embraced him, saying: 'Read!' The Prophet gently replied: 'I cannot read.' Jibril embraced him three times with warmth and strength, and then revealed the very first verses of the Holy Quran: 'Read in the name of your Lord who created! Created man from a clinging clot. Read, and your Lord is the Most Generous—Who taught by the pen, taught man that which he knew not.' (Surah Al-'Alaq 96:1-5). Shivering with awe at this immense responsibility, the Prophet returned home to Khadijah, who covered him with a blanket and comforted him with unforgettable words: 'Never will Allah dishonor you, for you join family ties, help the poor, care for the orphans, honor your guests, and always stand by the truth.'",
        "For three peaceful years, the Prophet shared this beautiful message quietly with his closest family and friends. Khadijah was the first woman to believe, Ali was the first youth, Abu Bakr was the first adult man, and Zayd was the first freed servant. Then Allah commanded him to speak openly to everyone. The Prophet climbed the hill of Mount Safa and called out to all the clans of Makkah. When they gathered, he asked: 'If I told you that an army was behind this hill ready to attack, would you believe me?' They all replied: 'Yes! We have never heard a single lie from you in your entire life.' The Prophet then said: 'Then know that I am a warner to you of a severe punishment if you continue worshiping idols.' Sadly, his uncle Abu Lahab shouted harsh words, but the message of Tawheed had begun to spread.",
        "The powerful leaders of Makkah became furious because Islam taught that all humans are equal before Allah, and that slave and master are brothers. They began torturing poor and helpless Muslims brutally. Bilal was tied down on scorching desert sand with heavy boulders placed on his chest, yet he smiled and repeated: 'Ahad, Ahad' (Allah is One, Allah is One). A brave woman named Sumayyah and her husband Yasir were killed for refusing to leave Islam, becoming the first martyrs. People threw filth and thorns at the Prophet while he prayed, yet he never cursed them. To save his followers from cruelty, the Prophet sent a group of Muslims across the sea to Abyssinia, where a just Christian king named Negus protected them warmly after hearing Surah Maryam.",
        "When torture failed to stop Islam, the leaders of Makkah cut off all food, trade, and communication with the Prophet's clan. For three harsh years, the Muslims and their protectors were trapped in a dry canyon called Shi'b Abi Talib. They were so hungry that children cried from pain and adults had to chew dry tree leaves to survive. Yet they remained firm in their faith until Allah caused insects to eat away the cruel boycott document. Soon after this trial ended, the Prophet suffered two heartbreaking losses: his protective uncle Abu Talib died, and his beloved wife Khadijah passed away. This sad period is remembered in history as 'The Year of Sorrow' (Am al-Huzn).",
        "Hoping to find a safe home for Islam, the Prophet walked fifty miles under the hot sun to the nearby mountain city of Ta'if. But the cruel leaders of Ta'if rejected him and ordered street boys to throw sharp stones at him. The Prophet's shoes filled with his own blood as he walked away injured. He took shelter in a quiet garden and prayed to Allah with deep humility. Suddenly, the Angel of the Mountains appeared with Jibril and said: 'O Messenger of Allah, if you wish, I will crush this whole city between the two mountains.' But the Prophet of Mercy replied with immense love: 'No! I pray that Allah will guide their children to worship Allah alone and reject idols.' That boundless mercy saved Ta'if, and years later, the whole city embraced Islam.",
        "To comfort His Beloved Messenger after these heavy trials, Allah blessed the Prophet with the miraculous night journey called Al-Isra wal-Miraj. In a single night, the Prophet was carried on a heavenly steed named Buraq from Makkah to Al-Aqsa Mosque in Jerusalem. There, he led all the past Prophets of Allah in prayer. Then he ascended through the seven heavens, meeting Adam, Isa, Yahya, Yusuf, Idris, Harun, Musa, and Ibrahim (peace be upon them). He traveled beyond the highest boundary (Sidrat al-Muntaha) directly into the presence of Allah Almighty. On this blessed night, Allah gifted Muslims the five daily prayers (Salah) as a direct connection between each believer and their Lord.",
        "People from the city of Yathrib (Madinah) met the Prophet during pilgrimage, embraced Islam, and invited him to live among them. When the leaders of Makkah sent assassins with swords to kill the Prophet in his bed, Allah protected him. The Prophet asked his young cousin Ali (R.A.) to sleep in his bed and return everyone's entrusted belongings safely the next day. The Prophet and his best friend Abu Bakr slipped away into the night, hid safely inside the Cave of Thawr, and made the famous journey called the Hijrah to Madinah. The people of Madinah welcomed him with joyous singing: 'Tala'a al-badru 'alayna'. There, the Prophet built the first mosque, paired each migrant with a local helper as brothers (Muwakhat), and wrote the Charter of Madinah, which granted religious freedom, peace, and equal justice to Muslims, Jews, and all citizens.",
        "The enemies in Makkah could not accept a peaceful Muslim city and attacked Madinah repeatedly. At the Battle of Badr, 313 poorly armed Muslims stood firm against 1,000 enemy soldiers and won a miraculous victory. Despite painful moments at Uhud and a freezing siege during the Battle of the Trench, where ten thousand enemies surrounded Madinah, the believers stayed united and prevailed with Allah's help. In the sixth year of Hijrah, the Prophet signed the Treaty of Hudaybiyyah, showing that he always preferred peaceful treaties over war. This peace allowed thousands of people across Arabia to discover Islam's beauty.",
        "In the eighth year of Hijrah, after the Quraysh broke the peace treaty, the Prophet marched to Makkah with ten thousand companions. He entered his birthplace with absolute humility, his head bowed so low in gratitude to Allah that his beard touched his camel. He cleared the Ka'bah of all 360 idols. Then he turned to the Makkans who had tortured his companions, killed his loved ones, and driven him from home. They trembled in fear, expecting revenge. The Prophet asked: 'What do you think I will do with you?' They said: 'You are a noble brother, the son of a noble brother.' The Prophet of Mercy declared: 'Go, for you are completely free today! No blame will be upon you.' This divine forgiveness melted their hearts, and the entire population entered Islam with joy.",
        "In the tenth year of Hijrah, the Prophet performed his Farewell Pilgrimage (Hajjat al-Wada') with over one hundred thousand believers. Standing on Mount Arafat, he gave his famous Farewell Sermon, teaching that all human lives, wealth, and honors are sacred. He abolished racism forever, saying: 'An Arab is not superior to a non-Arab, nor is a non-Arab superior to an Arab; a white person is not superior to a black person, nor is a black person superior to a white person, except through piety and good deeds.' Allah revealed: 'Today I have perfected your religion for you and completed My favor upon you.' Having delivered the entire message of truth and mercy, the Prophet passed away peacefully in the home of his wife A'ishah (R.A.), leaving behind the Holy Quran and his noble Sunnah to guide all humanity forever."
      ],
      "ur": [
        "مکہ مکرمہ کا پاکیزہ شہر جہاں صدیوں پہلے حضرت ابراہیم (ع) اور حضرت اسماعیل (ع) نے مل کر خانہ کعبہ کی بنیادیں رکھی تھیں، وہاں وقت گزرنے کے ساتھ ساتھ لوگ اللہ کو بھول کر بتوں کی پوجا کرنے لگے تھے اور ہر طرف لڑائی جھگڑے عام تھے۔ ایسے ماحول میں 570ء (عام الفیل یعنی ہاتھی والے سال) میں قریش کے سب سے عزت دار گھرانے بنو ہاشم میں حضرت محمد مصطفیٰ ﷺ کی ولادت ہوئی۔ آپ کی پیدائش سے پہلے ہی والد ماجد حضرت عبداللہ کا انتقال ہو چکا تھا، اور جب آپ چھ سال کے ہوئے تو پیاری والدہ حضرت آمنہ بھی دنیا سے رخصت ہو گئیں۔ اس کے بعد دادا حضرت عبدالمطلب اور پھر شفیق چچا حضرت ابو طالب نے آپ کو بڑی محبت اور پیار سے پالا۔ بچپن میں قبیلہ بنو سعد کی نیک دل خاتون حضرت حلیمہ سعدیہ نے آپ کو دودھ پلایا۔ اللہ تعالیٰ نے آپ کو بچپن ہی سے ہر برائی، جھوٹ اور گناہ سے بالکل پاک و صاف رکھا۔",
        "جب آپ جوان ہوئے تو آپ کی سچائی، شرافت اور ایمانداری دیکھ کر مکہ کے تمام لوگ آپ کو 'صادق' (سچا) اور 'امین' (امانت دار) کے پیارے ناموں سے پکارنے لگے۔ مظلوموں اور مسافروں کی مدد کے لیے آپ نے ایک اچھے معاہدے 'حلف الفضول' میں شرکت فرمائی۔ جب خانہ کعبہ کی از سر نو تعمیر ہوئی اور مقدس سیاہ پتھر (حجرِ اسود) کو دیوار میں رکھنے پر قبیلوں میں تلواریں نکل آئیں، تو آپ نے کمال دانشمندی سے ایک چادر بچھائی، حجرِ اسود کو اس پر رکھا اور تمام سرداروں سے فرمایا کہ مل کر چادر اٹھائیں۔ اس طرح جھگڑا ختم ہو گیا اور آپ نے اپنے مبارک ہاتھوں سے پتھر کو دیوار میں نصب فرما دیا۔ آپ کا پاکیزہ اخلاق دیکھ کر مکہ کی نیک اور معزز خاتون حضرت خدیجہ (رضی اللہ عنہا) نے آپ سے نکاح کی خواہش کا اظہار کیا، اور یہ گھرانہ محبت، وفاداری اور سکون کا گہوارہ بن گیا۔",
        "جب آپ کی عمر چالیس برس کے قریب پہنچی تو آپ کا دل دنیا کے شور شرابے سے دور ہو گیا اور آپ مکہ کے قریب پہاڑ پر واقع 'غارِ حرا' میں جا کر اکیلے اللہ کی عبادت کرنے لگے۔ رمضان المبارک کے بابرکت مہینے میں اچانک اللہ کے فرشتے حضرت جبرائیل (علیہ السلام) نورانی صورت میں تشریف لائے اور آپ کو سینے سے لگا کر فرمایا: 'پڑھیے!'۔ آپ نے فرمایا: 'میں پڑھا ہوا نہیں ہوں'۔ فرشتے نے تین بار آپ کو محبت سے سینے سے لگایا اور پھر قرآن مجید کی پہلی آیات سنائیں: 'پڑھیے اپنے رب کے نام سے جس نے پیدا کیا، انسان کو جمے ہوئے خون سے بنایا۔ پڑھیے اور آپ کا رب بڑا مہربان ہے جس نے قلم کے ذریعے سکھایا، انسان کو وہ سکھایا جو وہ نہیں جانتا تھا' (سورۂ علق: 1-5)۔ نبوت کا اتنا بڑا رتبہ اور بوجھ دیکھ کر آپ کا دل لرز رہا تھا۔ جب آپ گھر تشریف لائے تو حضرت خدیجہ نے آپ کو چادر اوڑھائی اور بڑے تسلی بخش الفاظ کہے: 'اللہ کی قسم! اللہ آپ کو کبھی تنہا اور پریشان نہیں کرے گا، کیونکہ آپ رشتہ داروں کا خیال رکھتے ہیں، غریبوں کی مدد کرتے ہیں، کمزوروں کا بوجھ اٹھاتے ہیں اور ہمیشہ سچ بولتے ہیں'۔",
        "شروع کے تین سال آپ نے اپنے قریبی اور مخلص دوستوں کو چپکے سے اللہ کی توحید کی دعوت دی۔ عورتوں میں سب سے پہلے حضرت خدیجہ، بچوں میں حضرت علی، مردوں میں سب سے پہلے آپ کے سچے دوست حضرت ابو بکر صدیق، اور غلاموں میں حضرت زید بن حارثہ ایمان لائے۔ اس کے بعد اللہ تعالیٰ کا حکم آیا کہ اب سب لوگوں کو کھل کر اللہ کا راستہ دکھائیں۔ آپ کوہِ صفا کی پہاڑی پر تشریف لے گئے اور مکہ کے تمام قبیلوں کو پکارا۔ جب سب جمع ہو گئے تو آپ نے پوچھا: 'اگر میں تم سے کہوں کہ اس پہاڑ کے پیچھے سے ایک لشکر تم پر حملہ کرنے والا ہے تو کیا تم میری بات مانو گے؟' سب نے ایک آواز ہو کر کہا: 'ہاں! ہم نے بچپن سے آج تک آپ کے منہ سے کبھی ایک جھوٹ بھی نہیں سنا'۔ تب آپ نے فرمایا: 'تو سن لو کہ میں تمہیں اللہ کے عذاب سے ڈرانے والا بن کر آیا ہوں، بتوں کو چھوڑو اور ایک اللہ کی عبادت کرو'۔ بدقسمت ابو لہب نے برا بھلا کہا، لیکن حق کی آواز بلند ہو چکی تھی۔",
        "جب مکہ کے ظالم سرداروں نے دیکھا کہ اسلام میں امیر اور غریب، مالک اور غلام سب برابر ہیں، تو وہ غصے سے پاگل ہو گئے اور غریب مسلمانوں پر ظلم کے پہاڑ توڑنے لگے۔ حضرت بلال (رضی اللہ عنہ) کو دہکتی ہوئی ریت پر لٹا کر سینے پر بھاری پتھر رکھے جاتے، مگر وہ مسکرا کر صرف 'احد، احد' (اللہ ایک ہے) کہتے رہے۔ حضرت سمیہ اور حضرت یاسر کو اسلام کی خاطر شہید کر دیا گیا۔ خود رسول اللہ ﷺ پر نماز کے دوران کچرا پھینکا گیا، گلے میں چادر ڈال کر کھینچا گیا اور راستوں میں کانٹے بچھائے گئے، لیکن آپ نے ہمیشہ صبر فرمایا۔ جب ظلم حد سے بڑھ گیا تو آپ نے صحابہ کو حبشہ کی طرف ہجرت کی اجازت دی جہاں ایک نیک دل عیسائی بادشاہ نجاشی نے مسلمانوں کو مکمل پناہ دی۔",
        "جب کافر اسلام کو نہ روک سکے تو انہوں نے بنو ہاشم کا مکمل بائیکاٹ کر کے مسلمانوں کو 'شعبِ ابی طالب' کی خشک گھاٹی میں تین سال کے لیے قید کر دیا۔ وہاں کھانے پینے کی اتنی کمی تھی کہ بھوک کی وجہ سے بچے روتے تھے اور بڑے سوکھے پتے چبا کر گزارا کرتے تھے۔ مگر مسلمانوں کے ایمان میں رتی برابر کمی نہ آئی، یہاں تک کہ اللہ نے دیمک کے ذریعے اس ظالمانہ معاہدے کو ختم کروایا۔ اس مشکل کے فوراً بعد آپ کے مہربان چچا ابو طالب اور پیاری بیوی حضرت خدیجہ کا انتقال ہو گیا۔ یہ وقت آپ کے لیے اتنا غمگین تھا کہ تاریخ میں اس سال کو 'عام الحزن' یعنی 'غم کا سال' کہا جاتا ہے۔",
        "مکہ کے لوگوں کے دل سخت دیکھ کر آپ پیدل سفر کر کے طائف کے شہر تشریف لے گئے تاکہ وہاں کے لوگ اللہ کی بات سنیں۔ لیکن طائف کے سرداروں نے بدتمیز لڑکوں کو آپ کے پیچھے لگا دیا جنہوں نے آپ پر اتنے پتھر برسائے کہ آپ کی جوتیاں مبارک خون سے بھر گئیں۔ آپ نے ایک باغ میں بیٹھ کر اللہ کے حضور بڑی عاجزی سے دعا مانگی۔ اسی وقت پہاڑوں کا فرشتہ حاضر ہوا اور عرض کی کہ اے اللہ کے رسول، اگر آپ حکم دیں تو میں طائف کے دونوں پہاڑوں کو ملا کر اس بستی کو پیس ڈالوں۔ لیکن ہمارے پیارے نبی ﷺ نے فرمایا: 'نہیں! میں دعا کرتا ہوں کہ اللہ ان کی آنے والی نسلوں میں ایسے لوگ پیدا کرے جو صرف ایک اللہ کی عبادت کریں اور شرک نہ کریں'۔ آپ کی اس رحمت کی وجہ سے بعد میں پورا طائف مسلمان ہو گیا۔",
        "غم کے ان دنوں میں اللہ تعالیٰ نے اپنے پیارے حبیب ﷺ کو تسلی دینے کے لیے 'معراج' کا لاجواب معجزہ عطا فرمایا۔ رات کے ایک چھوٹے سے حصے میں آپ کو آسمانی سواری 'براق' پر مکہ سے بیت المقدس لے جایا گیا، جہاں آپ نے تمام پچھلے انبیاء کرام کی نماز میں امامت فرمائی۔ پھر آپ آسمانوں پر تشریف لے گئے، جہاں تمام پیغمبروں سے ملاقات ہوئی، اور پھر سدرۃ المنتہیٰ پار کر کے اللہ تعالیٰ کے خاص قرب کا شرف پایا۔ اسی رات اللہ تعالیٰ نے امتِ محمدیہ کے لیے روزانہ پانچ وقت کی نمازوں کا پیارا تحفہ فرض فرمایا تاکہ بندہ ہر روز اپنے رب سے بات کر سکے۔",
        "حج کے دنوں میں مدینہ منورہ کے نیک لوگوں نے اسلام قبول کیا اور آپ کو اپنے شہر آنے کی دعوت دی۔ جب مکہ کے کافروں نے رات کے وقت آپ کے گھر پر تلواریں لے کر حملہ کرنے کا منصوبہ بنایا تو اللہ نے اپنے نبی کو بچا لیا۔ آپ نے حضرت علی (رضی اللہ عنہ) کو اپنے بستر پر لٹایا تاکہ وہ صبح لوگوں کی امانتیں واپس کر سکیں، اور آپ خود حضرت ابو بکر کے ساتھ غارِ ثور میں پناہ لے کر مدینہ کی طرف ہجرت فرما گئے۔ مدینہ کے لوگوں نے 'طلع البدر علینا' کے خوبصورت گیت گا کر آپ کا استقبال کیا۔ مدینہ پہنچ کر آپ نے مسجدِ نبوی بنائی، مکہ سے آنے والے مہاجرین اور مدینہ کے انصار کو سگے بھائیوں کی طرح جوڑ دیا، اور 'میثاقِ مدینہ' لکھوا کر تمام شہریوں کو برابری، امن اور مذہبی آزادی کا حق دیا۔",
        "مکہ کے دشمنوں نے مدینہ پر بار بار حملے کیے۔ غزوہ بدر میں 313 نہتے مسلمانوں نے ایک ہزار کے لشکر کو شکست دی۔ احد اور خندق کی سخت آزمائشوں میں بھی مسلمان چٹان کی طرح ڈٹے رہے۔ چھ ہجری میں آپ نے 'صلح حدیبیہ' کا امن معاہدہ کیا، جس سے جنگ رک گئی اور ہزاروں لوگوں نے اسلام کا امن اور پیار دیکھ کر کلمہ پڑھ لیا۔ قرآن پاک نے اس معاہدے کو کھلی فتح قرار دیا۔",
        "آٹھ ہجری میں جب قریش نے امن کا معاہدہ توڑ دیا، تو آپ دس ہزار صحابہ کے ساتھ بغیر خون بہائے مکہ مکرمہ میں داخل ہوئے۔ آپ کا سر مبارک اللہ کے شکر سے اتنا جھکا ہوا تھا کہ اونٹنی کی کاٹھی کو چھو رہا تھا۔ آپ نے خانہ کعبہ کے تمام 360 بت توڑ دیے۔ پھر وہ مکہ والے جو بیس سال تک مسلمانوں پر ظلم کرتے رہے تھے، ڈر کے مارے سامنے کھڑے تھے۔ آپ نے پوچھا: 'بتاؤ آج مجھ سے کس بات کی امید رکھتے ہو؟' انہوں نے کہا: 'آپ شریف بھائی اور شریف بھائی کے بیٹے ہیں'۔ تب رحمتِ دوعالم ﷺ نے فرمایا: 'جاؤ، آج تم سب سے کوئی بدلہ نہیں لیا جائے گا، تم سب آزاد ہو!' اس عظیم معافی کو دیکھ کر پورا مکہ خوشی سے مسلمان ہو گیا۔",
        "دس ہجری میں آپ نے ایک لاکھ سے زیادہ صحابہ کے ساتھ 'حجۃ الوداع' ادا فرمایا۔ عرفات کے میدان میں آپ نے انسانیت کی تاریخ کا سب سے عظیم خطبہ دیا، جس میں انسان کی جان، مال اور عزت کو محترم قرار دیا اور نسلی تعصب کو ہمیشہ کے لیے ختم کرتے ہوئے فرمایا: 'کسی عربی کو عجمی پر اور کسی عجمی کو عربی پر، کسی گورے کو کالے پر اور کسی کالے کو گورے پر کوئی برتری نہیں، عزت کا معیار صرف تقویٰ اور اچھے اعمال ہیں'۔ اسی دن اللہ نے فرمایا کہ آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا۔ اس کے بعد اپنا فرض پورا فرما کر آپ حضرت عائشہ صدیقہ کی گود میں پرسکون انداز میں اپنے سب سے اعلیٰ رب کے پاس تشریف لے گئے، اور پیچھے قرآن پاک اور اپنی سنت کی روشن راہنمائی چھوڑ گئے۔"
      ],
      "ar": [
        "في مكة المكرمة المباركة حيث بنى خليل الله إبراهيم وابنه إسماعيل عليهما السلام قواعد البيت الحرام، عاشت قبائل العرب زمناً طويلاً في جاهلية وظلام وعبادة للأصنام. وفي عام الفيل (570م)، وُلد سيد الخلق وخاتم الأنبياء محمد بن عبد الله صلى الله عليه وسلم من بني هاشم أشرف بيوت قريش. وُلد يتيماً بعد وفاة والده، ثم توفيت أمه الحنونة آمنة وهو في السادسة من عمره، فرعاه جده عبد المطلب ثم عمه الشفيق أبو طالب. وأرضعته السيدة الطيبة حليمة السعدية في ديار بني سعد. وحفظه الله تعالى منذ طفولته من كل خلق قبيح ومن أرجاس الشرك.",
        "نشأ الشاب محمد صلى الله عليه وسلم بين الناس بصدقه وأمانته وعفته حتى أطلق عليه أهل مكة لقب 'الصادق الأمين'. وشارك في 'حلف الفضول' لنصرة المظلومين والضعفاء. وحين أعادت قريش بناء الكعبة وتنازعت القبائل على شرف وضع الحجر الأسود في مكانه حتى كادت الحرب تشتعل، حكّموه فوضع الحجر الشريف في رداء وأمر كل زعيم قبيلة أن يمسك بطرف، ثم رفعه ووضعه بيده الشريفة وحقن دماءهم. ورأت السيدة الفاضلة خديجة بنت خويلد رضي الله عنها حسن خلقه وأمانته فتزوجته، وكان بيتهما مثالاً للوفاء والمحبة.",
        "لما قارب سن الأربعين، كان صلى الله عليه وسلم يحب الخلوة والتفكر في خلق الله، فكان يصعد إلى 'غار حراء' في جبل النور ويقضي الليالي في عبادة الله وحده. وفي شهر رمضان المبارك، نزل عليه الروح الأمين جبريل عليه السلام وضمه إلى صدره ثلاث مرات قائلاً: 'اقْرَأْ'، فقال: 'ما أنا بقارئ'، فأنزل الله أول آيات القرآن: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ * خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ * اقْرَأْ وَرَبُّكَ الْأَكْرَمُ * الَّذِي عَلَّمَ بِالْقَلَمِ * عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ﴾ (العلق: 1-5). فرجع النبي صلى الله عليه وسلم إلى بيته خائفاً من عظمة المسؤولية، فطمأنته خديجة رضي الله عنها قائلة: 'كلا والله لا يخزيك الله أبداً؛ إنك لتصل الرحم، وتعين الضعيف، وتكسب المعدوم، وتقري الضيف، وتعين على نوائب الحق'.",
        "دعا النبي صلى الله عليه وسلم أهله وأصحابه سراً لثلاث سنين، فآمنت خديجة رضي الله عنها، وعلي بن أبي طالب، وصديقه الصدوق أبو بكر، وزيد بن حارثة. ثم جاء أمر الله بالجهر بالدعوة، فصعد النبي صلى الله عليه وسلم جبل الصفا ونادى قبائل مكة وسألهم: 'لو أخبرتكم أن خيلاً بالوادي تريد أن تغير عليكم، أكنتم مصدقي؟' فقالوا جميعاً: 'نعم، ما جربنا عليك كذباً قط'. فقال لهم: 'إني نذير لكم بين يدي عذاب شديد، اتركوا الأصنام واعبدوا الله وحده'. وبدأت دعوة التوحيد تعلو في الأرض.",
        "غضب كفار قريش لأن الإسلام ساوى بين الغني والفقير والحر والعبد، فبدأوا بتعذيب المستضعفين من المسلمين. فكان بلال بن رباح يُعذب في حر الرمال وتحت الصخور وهو يردد بثبات: 'أحدٌ، أحد'. واستشهدت سمية وزوجها ياسر صابرين على دين الحق. وتجرأ الكفار على أذية النبي صلى الله عليه وسلم ورمي الأقذار عليه في صلاته وهو صابر محتسب. ولحماية أصحابه من الظلم، أذن لهم بالهجرة إلى الحبشة حيث استقبلهم ملكها الصالح النجاشي وأكرمهم.",
        "حاصر المشركون بني هاشم في شِعب أبي طالب ثلاث سنين قاسية، فمنعوا عنهم الطعام والشراب حتى بكى الأطفال من شدة الجوع وأكل المسلمون أوراق الشجر، فصبروا بثبات حتى أكلت الأرضة صحيفة الحصار الظالم. وبعد الخروج من الحصار، توفي عمه أبو طالب وتوفيت زوجته الوفية خديجة رضي الله عنها، فحزن النبي صلى الله عليه وسلم وسمي ذلك العام بـ'عام الحزن'.",
        "ذهب النبي صلى الله عليه وسلم ماشياً على قدميه إلى الطائف ليدعو أهلها إلى الله، لكن قادتها سخروا منه وأغروا به الصبيان فرموه بالحجارة حتى سال الدم الشريف في نعليه. فلجأ إلى بستان ودعا ربه متواضعاً. فنزل ملك الجبال يستأذنه أن يهلك أهل الطائف، فرد نبي الرحمة قائلاً: 'بل أرجو أن يخرج الله من أصلابهم من يعبد الله وحده ولا يشرك به شيئاً'. فكانت رحمته سبباً في إسلامهم جميعاً فيما بعد.",
        "أكرم الله نبيه برحلة الإسراء والمعراج ليعوضه عن كل حزن؛ فأسرى به ليلاً من المسجد الحرام إلى المسجد الأقصى على البراق وصلى إماماً بجميع الأنبياء، ثم عرج به إلى السماوات العلى وتجاوز سدرة المنتهى إلى القرب الإلهي العظيم. وفُرضت في تلك الليلة المباركة الصلوات الخمس كصلة يومية ورحمة لكل مؤمن.",
        "بايع أهل المدينة المنورة النبي صلى الله عليه وسلم ودعوه ليعيش بينهم. وحين أراد الكفار قتله في فراشه، حفظه الله وترك علياً رضي الله عنه في مكانه لرد الأمانات لأصحابها، وخرج مع صاحبه أبي بكر متخفياً في غار ثور حتى وصلا إلى المدينة وسط أهازيج الفرح: 'طلع البدر علينا'. وهناك بنى المسجد النبوي، وآخى بين المهاجرين والأنصار، وكتب وثيقة المدينة لترسيخ العدل والسلام والمواطنة لجميع السكان.",
        "حاول المشركون تدمير المدينة لكن المسلمين ثبتوا بعون الله؛ فانتصر 313 مؤمناً في غزوة بدر الكبرى، وصبروا في أحد والخندق. وفي السنة السادسة للهجرة، عقد النبي صلى الله عليه وسلم صلح الحديبية الذي أثبت حبه للسلام، وفتح الباب أمام آلاف الناس لدخول الإسلام بمحبة واقتناع.",
        "في السنة الثامنة للهجرة، فتح النبي صلى الله عليه وسلم مكة بعشرة آلاف صحابي دون إراقة دماء. ودخل الكعبة خافضاً رأسه الشريف شكراً لله وحطم 360 صنماً. وحين وقف أهل مكة الخائفون أمامه يسألهم: 'ما تظنون أني فاعل بكم؟' قالوا: 'أخ كريم وابن أخ كريم'. فقال نبي الرحمة: 'اذهبوا فأنتم الطلقاء!' فعفا عنهم جميعاً ودخل الناس في دين الله أفواجاً.",
        "في السنة العاشرة، أدى النبي صلى الله عليه وسلم حجة الوداع مع أكثر من مائة ألف مسلم، وخطب في عرفات خطبته التاريخية التي حرمت دماء الناس وأموالهم وأعراضهم، وقضت على العنصرية قائلاً: 'ألا لا فضل لعربي على أعجمي ولا لعجمي على عربي ولا لأبيض على أسود ولا لأسود على أبيض إلا بالتقوى'. ونزل قوله تعالى: ﴿الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِيناً﴾. ثم توفي صلى الله عليه وسلم راضياً مرضياً في بيت أم المؤمنين عائشة رضي الله عنها، تاركاً القرآن وسنته نوراً وهداية لكل إنسان إلى يوم الدين."
      ]
    },
    "keyLessons": {
      "en": [
        "Prophet Muhammad (S.A.W.) is the ultimate universal mercy and role model of patience, truthfulness, and kindness for all human beings.",
        "True greatness lies in forgiving enemies and showing mercy when one has the power to take revenge.",
        "All human beings are equal regardless of race, color, or status; real dignity is earned through good character and piety."
      ],
      "ur": [
        "حضرت محمد مصطفیٰ ﷺ کی سیرتِ طیبہ قیامت تک کے تمام انسانوں کے لیے سچائی، صبر، محبت اور اعلیٰ اخلاق کا بہترین نمونہ ہے۔",
        "طاقت اور اختیار ہونے کے باوجود اپنے دشمنوں کو معاف کر دینا سیرتِ نبوی ﷺ کا سب سے خوبصورت اور عظیم سبق ہے۔",
        "تمام انسان برابر ہیں؛ رنگ، نسل اور زبان کی بنیاد پر کوئی بڑا نہیں، اصلی عزت صرف اچھے اخلاق اور نیکی میں ہے۔"
      ],
      "ar": [
        "سيدنا محمد صلى الله عليه وسلم هو القدوة الحسنة والرحمة المهداة لكل إنسان في الأخلاق والصدق والرحمة.",
        "العفو التام عند المقدرة والترفع عن الانتقام هو أعظم درس في القيادة النبوية الشريفة.",
        "كل الناس سواسية أمام الله، ولا فضل لأحد على آخر إلا بالتقوى والعمل الصالح."
      ]
    }
  }
];
