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
    "image": "/stories/covers/adam.jpg",
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
    "image": "/stories/covers/idris.jpg",
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
    "image": "/stories/covers/nuh.jpg",
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
    "image": "/stories/covers/hud.jpg",
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
    "image": "/stories/covers/saleh.jpg",
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
    "image": "/stories/covers/ibrahim.jpg",
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
    "image": "/stories/covers/lut.jpg",
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
    "image": "/stories/covers/ismail.jpg",
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
    "image": "/stories/covers/ishaq.jpg",
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
    "image": "/stories/covers/yaqub.jpg",
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
    "id": "yunus",
    "order": 11,
    "nameEn": "Yunus (A.S.)",
    "nameUr": "حضرت یونس (ع)",
    "nameAr": "يونس عليه السلام",
    "honorific": "عَلَيْهِ ٱلسَّلَامُ",
    "titleEn": "The Man of the Whale & Supplication of Darkness",
    "titleUr": "ذوالنون اور مچھلی کے پیٹ میں تسبیح کرنے والے پیغمبر",
    "titleAr": "ذو النون وصاحب الحوت",
    "image": "/stories/covers/yunus.jpg",
    "quranMention": "Mentioned 4 times and honored with an entire Surah (Surah Yunus)",
    "summaryEn": "Sent to the ancient metropolis of Nineveh. When he departed in grief and boarded a storm-tossed ship, he was swallowed by a massive whale, uttering the immortal prayer of repentance from the depths of three darknesses.",
    "summaryUr": "آپ کو نینویٰ کی سرکش قوم کی طرف بھیجا گیا۔ قوم کی ہٹ دھرمی پر رنجیدہ ہو کر بستی سے نکلے، طوفانی سمندر میں مچھلی نے نگل لیا۔ تین اندھیروں میں 'لا إله إلا أنت سبحانك إني كنت من الظالمين' کی دعا مانگی جس سے نجات ملی۔",
    "summaryAr": "بعثه الله إلى أهل نينوى، فخرج مغاضباً لعدم استجابتهم فركب سفينة فالتقمه الحوت في لجج البحر، فنادى في الظلمات بالدعاء العظيم فنجاه الله وأسلم قومه جميعاً.",
    "fullStory": {
      "en": [
        "Prophet Yunus (Jonah), also revered in the Quran as *Dhun-Nun* (The Man of the Whale) and *Sahib al-Hut*, was commissioned by Allah to guide the great ancient city of Nineveh (near modern-day Mosul in northern Iraq). Nineveh was a bustling commercial capital of over one hundred thousand people, deeply steeped in idolatry, moral degradation, and arrogance.",
        "For years, Yunus pleaded with the people of Nineveh to abandon their wooden and stone deities and worship the One Creator. Yet they mocked him day after day, refusing his counsel. Frustrated by their stubborn obstinacy and sensing that divine punishment was near, Yunus left the city in anger without waiting for Allah's explicit permission to depart.",
        "Yunus made his way to the coast and boarded a merchant sailing ship heavily laden with passengers and cargo. Out in the open sea, violent winds gathered, unleashing mountainous waves that threatened to capsize the vessel. Desperate to lighten the load, the crew threw baggage overboard, but the tempest only grew fiercer. The sailors decided that lots must be cast to determine who should be cast into the sea.",
        "The lot was drawn once, twice, and three times—and each time the name of Yunus emerged. Recognizing the divine hand at work, Yunus threw himself into the churning depths of the ocean. By Allah's decree, an immense whale (*Al-Hut*) surged from the deep, swallowing Yunus whole without breaking a bone or injuring his flesh.",
        "In the suffocating enclosure of the whale's belly, beneath miles of pitch-black sea water, beneath the dark cloak of the night—the 'Three Layers of Darkness'—Yunus came to full realization of his lapse. In that terrifying abyss, he heard the pebbles on the ocean bed and the sea creatures glorifying their Creator. Yunus bowed his soul in profound humility, raising the immortal cry of repentance that resonates through heaven: 'La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen' (There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers). (Surah Al-Anbiya 21:87).",
        "The angels heard the sorrowful voice rising from the deepest ocean, saying: 'O Lord, this is a familiar, righteous voice from an unfamiliar, desolate place!' Allah commanded the great whale to swim to the shore and gently expel Yunus onto the dry beach. Yunus emerged weak, skin sensitive, and exhausted.",
        "By Allah's mercy, a creeping gourd plant (*Yaqteen*) grew rapidly over him, sheltering him with broad cool leaves, repelling flies, and providing nourishing fruit. As Yunus regained his strength, Allah commanded him to return to Nineveh. Upon his arrival, a breathtaking sight greeted him: after his departure, the citizens had witnessed the dark signs of punishment gathering, repented sincerely with tears and fasting from the king to the humblest pauper, and embraced Islam. Allah spared them, making Nineveh the only nation in prophetic history to be saved from collective ruin through collective repentance."
      ],
      "ur": [
        "حضرت یونس علیہ السلام جنہیں قرآنِ مجید میں 'ذوالنون' (مچھلی والے) اور 'صاحب الحوت' کے لقب سے بھی یاد کیا گیا ہے، عراق کے قدیم تاریخی شہر 'نینویٰ' (موجودہ موصل) کی طرف مبعوث فرمائے گئے۔ نینویٰ ایک لاکھ سے زائد آبادی کا عظیم الشان تجارتی شہر تھا جو شرک، بت پرستی اور اخلاقی برائیوں میں مبتلا تھا۔",
        "حضرت یونس نے برسوں تک اس قوم کو توحید کی دعوت دی، مگر وہ اپنی ہٹ دھرمی اور بتوں کی پوجا پر اڑے رہے۔ جب آپ ان کی مسلسل نافرمانی سے دلبرداشتہ ہو گئے تو عذاب کی وعید سنا کر اللہ کے باقاعدہ حکم کا انتظار کیے بغیر رنجیدہ ہو کر بستی سے نکل پڑے۔",
        "آپ ساحل پر پہنچے اور مسافروں اور سامان سے لدی ہوئی ایک کشتی میں سوار ہو گئے۔ سمندر کے بیچ پہنچ کر اچانک خوفناک طوفان اٹھا اور موجیں کشتی کو الٹنے لگیں۔ ملاحوں نے بوجھ ہلکا کرنے کے لیے سامان سمندر میں پھینک دیا مگر طوفان نہ تھما۔ انہوں نے فیصلہ کیا کہ قرعہ اندازی کی جائے اور جس کا نام نکلے اسے سمندر میں ڈال دیا جائے۔",
        "قرعہ ڈالا گیا تو پہلی، دوسری اور تیسری بار بھی حضرت یونس کا نام نکلا۔ آپ سمجھ گئے کہ یہ میرے رب کا فیصلہ ہے، چنانچہ آپ نے خود سمندر میں چھلانگ لگا دی۔ اسی لمحے اللہ کے حکم سے ایک دیو ہیکل مچھلی نے آپ کو ثابت نگل لیا، اللہ کا حکم تھا کہ ان کی ہڈی توڑے نہ گوشت کو نقصان پہنچائے۔",
        "مچھلی کے پیٹ کی گھٹن، سمندر کی تہہ کی تاریکی اور رات کا اندھیرا—ان تین اندھیروں میں حضرت یونس علیہ السلام کو اپنی لغزش کا احساس ہوا۔ سمندر کی اتھاہ گہرائیوں میں آپ نے کنکریوں اور آبی مخلوق کو اللہ کی تسبیح کرتے سنا۔ آپ نے توبہ و استغفار کے ساتھ وہ لازوال دعا مانگی جو آج بھی ہر مسلمان کے دل کا سہارا ہے: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ' (تیرے سوا کوئی معبود نہیں، تو پاک ہے، بیشک میں ہی قصورواروں میں سے تھا)۔ (سورۃ الانبیاء)",
        "فرشتوں نے سمندر کی گہرائیوں سے اٹھنے والی درد بھری آواز سنی تو عرض کیا: اے ہمارے رب! کسی ویران جگہ سے ایک جانی پہچانی نیک آواز آ رہی ہے۔ اللہ تعالیٰ نے مچھلی کو حکم دیا اور اس نے حضرت یونس کو ایک بنجر ساحل پر بحفاظت اگل دیا۔ آپ کا جسم مبارک بے حد کمزور اور نڈھال تھا۔",
        "اللہ نے اپنی خاص رحمت سے آپ پر کدو کی بیل اگا دی جس کے چوڑے پتوں نے آپ کو دھوپ اور مکھیوں سے بچایا اور اس کے پھل نے طاقت دی۔ جب آپ تندرست ہو کر واپس نینویٰ پہنچے تو ایک حیرت انگیز منظر دیکھا: آپ کے جانے کے بعد جب انہوں نے عذاب کے بادل دیکھے تھے تو بادشاہ سے لے کر فقیر تک سب نے توبہ کر لی تھی، ٹاٹ پہن کر گڑگڑائے تھے اور اللہ نے ان پر رحم فرما کر عذاب ٹال دیا تھا۔ یوں نینویٰ تاریخ کی واحد قوم بنی جس کی اجتماعی توبہ نے عذاب کو ٹال دیا۔"
      ],
      "ar": [
        "يونس عليه السلام هو ذو النون وصاحب الحوت، أرسله الله إلى مدينة نينوى بأرض الموصل بالعراق، وكان أهلها يربو عددهم على مائة ألف غارقين في عبادة الأوثان والعتو.",
        "دعاهم يونس صابراً سنين طوالاً، فلما استيأس من إيمانهم ضاق صدره وخرج من بين أظهرهم غاضباً قبل أن يأذن الله له بمفارقتهم، متوجهاً إلى ساحل البحر.",
        "ركب سفينة مشحونة بالركاب والتجارة، فلما لججت في البحر هاجت عاصفة هوجاء وأوشكت السفينة على الغرق، فأجمع ركابها على الاقتراع لإلقاء رجل منهم لتخفيف الحمل.",
        "وقعت القرعة ثلاث مرات متتالية على يونس عليه السلام، فأيقن أنه قضاء الله، فألقى بنفسه في اليم، فالتقمه حوت عظيم بأمر الله الذي أوحى إليه ألا يخدش له لحماً ولا يكسر له عظماً.",
        "في بطن الحوت وفي لجج البحر وظلمة الليل—ظلمات ثلاث تراكمت بعضها فوق بعض—استمع يونس لتسبيح الحصى ودواب البحر في الأعماق، فنادى ربه بقلب منكسر خاشع بالدعاء الخالد: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾ (الأنبياء: 87).",
        "سمعت الملائكة صوته فقالت: يا رب، صوت معروف من عبد معروف في مكان غريب! فأمر الله الحوت أن يقذفه على الشاطئ وهو سقيم منهك القوى.",
        "أنبت الله عليه شجرة من يقطين تظله بأوراقها العريضة وتطرد عنه الذباب، فلما استرد عافيته أمره ربه بالعودة إلى نينوى؛ وحين دخلها وجد معجزة الإيمان: كان قومه قد تابوا وبكوا صغاراً وكباراً عند معاينة نُذر العذاب، فكشف الله عنهم العذاب ومتعهم إلى حين، فكانوا الأمة الوحيدة التي كُشف عنها العذاب بتوبتها النصوح."
      ]
    },
    "keyLessons": {
      "en": [
        "Never abandon your duties or lose patience with people without divine direction.",
        "The supplication 'La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen' relieves the heaviest distress.",
        "Sincere collective repentance can avert the most terrifying catastrophes by Allah's infinite mercy."
      ],
      "ur": [
        "اللہ کے اذن کے بغیر کبھی اپنی ذمہ داری سے پیچھے نہ ہٹیں اور نہ لوگوں سے مایوس ہوں۔",
        "'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ' ہر قسم کی پریشانی اور تاریکی سے نجات کا اکسیر وظیفہ ہے۔",
        "سچے دل سے اجتماعی توبہ اور ندامت بڑے سے بڑے آنے والے عذاب کو رحمت میں بدل دیتی ہے۔"
      ],
      "ar": [
        "الصبر في أداء الأمانة وعدم التسرع في مغادرة ميدان الدعوة والمسؤولية إلا بإذن الله.",
        "دعوة ذي النون: ﴿لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ﴾ هي مفتاح الفرج لكل مكروب ومهموم.",
        "التوبة الجماعية الصادقة والاستغفار الخالص يرفعان البلاء المستحكم ويجلبان رحمة الله ورضوانه."
      ]
    }
  }
];
