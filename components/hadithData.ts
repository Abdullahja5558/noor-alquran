//hadithData.ts

export interface Hadith {
  id: number;
  arabic: string;
  urdu: string;
  english: string;
  ref: string;
}

export const PRAYER_HADITHS: Hadith[] = [
  {
    id: 1,
    arabic: "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ",
   urdu: "قیامت کے دن بندے کے اعمال میں سب سے پہلے جس چیز کا حساب لیا جائے گا، وہ اس کی نماز ہے۔",

    english: "The first thing for which a person will be brought to account on the Day of Resurrection will be his prayer.",
    ref: "Sunan an-Nasa'i 465 | Sahih"
  },
  {
    id: 2,
    arabic: "بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلَاةِ",
    urdu:"آدمی اور شرک و کفر کے درمیان فرق نماز کو چھوڑ دینا ہے۔",
    english: "Between a man and shirk and disbelief is the abandonment of prayer.",
    ref: "Sahih Muslim 82"
  },
  {
    id: 3,
    arabic: "مَنْ حَافَظَ عَلَيْهَا كَانَتْ لَهُ نُورًا وَبُرْهَانًا وَنَجَاةً يَوْمَ الْقِيَامَةِ",
    urdu: "جو شخص نماز کی پابندی کرے گا، قیامت کے دن وہ نماز اس کے لیے نور، دلیل اور نجات کا ذریعہ بنے گ",
    english: "Whoever guards his prayer, it will be a light, a proof, and salvation for him on the Day of Resurrection.",
    ref: "Musnad Ahmad 6576 | Hasan"
  },
  {
    id: 4,
    arabic: "جُعِلَتْ قُرَّةُ عَيْنِي فِي الصَّلَاةِ",
    urdu: "میری آنکھوں کی ٹھنڈک نماز میں رکھی گئی ہے.",
    english: "The delight of my eyes has been made in prayer.",
    ref: "Sunan an-Nasa'i 3940 | Sahih"
  },
  {
    id: 5,
    arabic: "الصَّلَوَاتُ الْخَمْسُ كَفَّارَةٌ لِمَا بَيْنَهُنَّ",
    urdu: "انچ وقت کی نمازیں ان کے درمیان ہونے والے گناہوں کا کفارہ بن جاتی ہیں",
    english: "The five daily prayers are an expiation for what is between them.",
    ref: "Sahih Muslim 233"
  },
  {
    id: 6,
    arabic: "الْعَهْدُ الَّذِي بَيْنَنَا وَبَيْنَهُمُ الصَّلَاةُ فَمَنْ تَرَكَهَا فَقَدْ كَفَرَ",
    urdu: "ہمارے اور ان کے درمیان عہد نماز ہے، پس جس نے نماز چھوڑ دی اس نے کفر کیا۔",
    english: "The covenant between us and them is prayer; whoever abandons it has committed disbelief.",
    ref: "Jami` at-Tirmidhi 2621 | Sahih"
  },
  {
    id: 7,
    arabic: "رَأْسُ الْأَمْرِ الْإِسْلَامُ وَعَمُودُهُ الصَّلَاةُ",
    urdu: "دین کی بنیاد اسلام ہے اور اس کا ستون نماز ہے۔",
    english: "The foundation of the matter is Islam, and its pillar is prayer.",
    ref: "Jami` at-Tirmidhi 2616 | Hasan"
  },
  {
    id: 8,
    arabic: "أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ",
    urdu: "بندہ اپنے رب کے سب سے زیادہ قریب اس وقت ہوتا ہے جب وہ سجدے میں ہوتا ہے۔",
    english: "The closest a servant is to his Lord is while he is in prostration.",
    ref: "Sahih Muslim 482"
  },
  {
    id: 9,
    arabic: "مِفْتَاحُ الْجَنَّةِ الصَّلَاةُ",
    urdu: "جنت کی کنجی نماز ہے۔",
    english: "The key to Paradise is prayer.",
    ref: "Musnad Ahmad 22428 | Hasan"
  },
  {
    id: 10,
    arabic: "مَثَلُ الصَّلَوَاتِ الْخَمْسِ كَمَثَلِ نَهْرٍ جَارٍ",
    urdu: "پانچ وقت کی نمازوں کی مثال بہتے ہوئے دریا کی مانند ہے۔",
    english: "The example of the five daily prayers is like a flowing river.",
    ref: "Sahih Muslim 668"
  },
  {
    id: 11,
    arabic: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ",
    urdu: "بے شک نماز بے حیائی اور برے کاموں سے روکتی ہے۔",
    english: "Indeed, prayer restrains from shameful and evil deeds.",
    ref: "Qur'an 29:45"
  },
  {
    id: 12,
    arabic: "مَنْ صَلَّى الْبَرْدَيْنِ دَخَلَ الْجَنَّةَ",
    urdu: "جو شخص فجر اور عصر کی نماز ادا کرے، وہ جنت میں داخل ہوگا۔",
    english: "Whoever prays the two cool prayers (Fajr and Asr) will enter Paradise.",
    ref: "Sahih al-Bukhari 574"
  },
  {
    id: 13,
    arabic: "إِذَا صَلَّى الْعَبْدُ الصَّلَاةَ لِوَقْتِهَا",
    urdu: "جب بندہ نماز کو اس کے وقت پر ادا کرتا ہے تو یہ اللہ کو سب سے زیادہ پسند ہوتا ہے۔",
    english: "When a servant prays at its proper time, it is most beloved to Allah.",
    ref: "Sahih al-Bukhari 527"
  },
  {
    id: 14,
    arabic: "صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي",
    urdu: "نماز اس طرح ادا کرو جس طرح تم مجھے نماز پڑھتے ہوئے دیکھتے ہو۔",
    english: "Pray as you have seen me praying.",
    ref: "Sahih al-Bukhari 631"
  },
  {
    id: 15,
    arabic: "إِنَّ بَيْنَ يَدَيِ السَّاعَةِ فِتَنًا كَقِطَعِ اللَّيْلِ",
    urdu: "قیامت سے پہلے اندھیری رات کے ٹکڑوں جیسی آزمائشیں ہوں گی، ان میں نماز کو لازم پکڑو۔",
    english: "Before the Hour there will be trials like dark nights; hold firmly to prayer.",
    ref: "Musnad Ahmad 22380 | Hasan"
  },
  {
    id: 16,
    arabic: "أَفْضَلُ الْأَعْمَالِ الصَّلَاةُ لِوَقْتِهَا",
    urdu: "سب سے افضل عمل نماز کو اس کے وقت پر ادا کرنا ہے۔",
    english: "The most virtuous deed is to offer prayer at its proper time.",
    ref: "Sahih al-Bukhari 527 | Sahih Muslim 85"
  },
  {
    id: 17,
    arabic: "مَا مِنِ امْرِئٍ مُسْلِمٍ تَحْضُرُهُ صَلَاةٌ مَكْتُوبَةٌ",
    urdu: "جو مسلمان فرض نماز کے وقت وضو، خشوع اور رکوع کو اچھی طرح ادا کرتا ہے، وہ نماز اس کے پچھلے گناہوں کا کفارہ بن جاتی ہے۔",
    english: "When a Muslim offers an obligatory prayer with proper ablution and humility, it expiates his previous sins.",
    ref: "Sahih Muslim 228"
  },
  {
    id: 18,
    arabic: "رَكْعَتَا الْفَجْرِ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا",
    urdu: "فجر کی دو رکعتیں دنیا اور اس کی تمام چیزوں سے بہتر ہیں۔",
    english: "The two units of prayer before Fajr are better than the world and everything in it.",
    ref: "Sahih Muslim 725"
  },
  {
    id: 19,
    arabic: "مَنْ سَمِعَ النِّدَاءَ فَلَمْ يَأْتِهِ فَلَا صَلَاةَ لَهُ",
    urdu: "جس نے اذان سنی اور (بلا عذر) جماعت کے لیے نہ آیا، اس کی نماز کامل نہیں۔",
    english: "Whoever hears the call to prayer and does not come without excuse, his prayer is not complete.",
    ref: "Sunan Ibn Majah 793 | Hasan"
  },
  {
    id: 20,
    arabic: "الصَّلَاةُ فِي جَمَاعَةٍ تَفْضُلُ صَلَاةَ الْفَذِّ",
    urdu: "جماعت کے ساتھ نماز، اکیلے نماز پڑھنے سے ستائیس درجے زیادہ افضل ہے۔",
    english: "Prayer in congregation is twenty-seven degrees superior to praying alone.",
    ref: "Sahih al-Bukhari 645 | Sahih Muslim 650"
  }
];