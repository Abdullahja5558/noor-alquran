// duaData.ts

export interface Dua {
  id: number;
  title: string;     
  arabic: string;
  urdu: string;      
  english: string;
  category: string;
  ref: string;
}

export const DUA_DATA: Dua[] = [
  {
    id: 1,
    title: "Relief from Difficulties",
    arabic: "لَّا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    urdu: "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی ظالموں میں سے تھا۔",
    english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    category: "Protection",
    ref: "Surah Al-Anbiya 21:87"
  },
  {
    id: 2,
    title: "Dua for Well-Being",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ",
    urdu: "اے اللہ! میں تجھ سے دنیا اور آخرت میں معافی اور عافیت کا سوال کرتا ہوں۔",
    english: "O Allah, I ask You for forgiveness and well-being in this world and the Hereafter.",
    category: "Well-being",
    ref: "Sunan Ibn Majah 3849 | Sahih"
  },
  {
    id: 3,
    title: "Dua for Peace of Heart",
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    urdu: "اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین پر ثابت قدم رکھ۔",
    english: "O Turner of the hearts, keep my heart steadfast upon Your religion.",
    category: "Peace of Mind",
    ref: "Jami` at-Tirmidhi 2140 | Hasan"
  },{
  id: 4,
  title: "Dua for Forgiveness",
  arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
  urdu: "اے میرے رب! مجھے بخش دے اور میری توبہ قبول فرما، بے شک تو بہت توبہ قبول کرنے والا، نہایت رحم والا ہے۔",
  english: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepter of repentance, the Most Merciful.",
  category: "Forgiveness",
  ref: "Sunan Abi Dawood 1516 | Sahih"
},
{
  id: 5,
  title: "Dua for Guidance",
  arabic: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
  urdu: "اے اللہ! مجھے ہدایت عطا فرما اور مجھے درست راستے پر ثابت قدم رکھ۔",
  english: "O Allah, guide me and keep me steadfast on the right path.",
  category: "Guidance",
  ref: "Sahih Muslim 2725"
},
{
  id: 6,
  title: "Dua for Relief from Anxiety",
  arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
  urdu: "اے اللہ! میں تجھ سے غم اور پریشانی سے پناہ مانگتا ہوں۔",
  english: "O Allah, I seek refuge in You from anxiety and sorrow.",
  category: "Anxiety",
  ref: "Sahih al-Bukhari 6369"
},
//protection
{
    id: 1,
    title: "Protection Through Allah’s Name",
    arabic: "مَنْ قَالَ: بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ",
    urdu: "جو شخص صبح و شام یہ دعا پڑھے کہ: اللہ کے نام کے ساتھ، جس کے نام کے ہوتے ہوئے کوئی چیز نقصان نہیں پہنچا سکتی، تو اسے کوئی چیز نقصان نہیں دیتی۔",
    english: "Whoever says: In the Name of Allah, with whose Name nothing can cause harm, will not be harmed by anything.",
    category: "Protection",
    ref: "Sunan Abi Dawood 5088 | Hasan"
  },
  {
    id: 2,
    title: "Seeking Refuge in Allah’s Perfect Words",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    urdu: "میں اللہ کے کامل کلمات کے ذریعے ہر اس چیز کے شر سے پناہ مانگتا ہوں جو اس نے پیدا فرمائی۔",
    english: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    category: "Protection",
    ref: "Sahih Muslim 2708"
  },
  {
    id: 3,
    title: "Protection While Staying at a Place",
    arabic: "مَنْ نَزَلَ مَنْزِلًا فَقَالَ أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ",
    urdu: "جو شخص کسی جگہ ٹھہرے اور یہ دعا پڑھے، تو وہاں سے روانہ ہونے تک کوئی چیز اسے نقصان نہیں پہنچاتی۔",
    english: "Whoever stays at a place and says this supplication, nothing will harm him until he leaves.",
    category: "Protection",
    ref: "Sahih Muslim 2708"
  },
  {
    id: 4,
    title: "Allah’s Promise of Protection",
    arabic: "احْفَظِ اللَّهَ يَحْفَظْكَ",
    urdu: "اللہ کے احکامات کی حفاظت کرو، اللہ تمہاری حفاظت فرمائے گا۔",
    english: "Be mindful of Allah, and Allah will protect you.",
    category: "Protection",
    ref: "Jami` at-Tirmidhi 2516 | Hasan Sahih"
  },
  //success
   {
    id: 1,
    title: "Striving for Success Through Knowledge",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    urdu: "علم حاصل کرنا ہر مسلمان پر فرض ہے۔",
    english: "Seeking knowledge is obligatory upon every Muslim.",
    category: "Success",
    ref: "Sunan Ibn Majah 224 | Hasan"
  },
  {
    id: 2,
    title: "Hard Work and Reward",
    arabic: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ",
    urdu: "اللہ پسند فرماتا ہے کہ جب تم میں سے کوئی کام کرے تو اسے بہترین طریقے سے کرے۔",
    english: "Allah loves that when anyone of you does a job, he perfects it.",
    category: "Success",
    ref: "Sunan al-Bayhaqi 3465 | Hasan"
  },
  {
    id: 3,
    title: "Trust in Allah for Success",
    arabic: "مَنْ تَوَكَّلَ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    urdu: "جو شخص اللہ پر بھروسہ کرے، اللہ اس کے لیے کافی ہے۔",
    english: "Whoever relies upon Allah, He is sufficient for him.",
    category: "Success",
    ref: "Sahih al-Bukhari 2 | Sahih Muslim 2672"
  },
  {
    id: 4,
    title: "Supplication Leads to Success",
    arabic: "الدُّعَاءُ هُوَ سَلَامَةُ الْعَبْدِ وَنَجَاتُهُ",
    urdu: "دعا بندے کی حفاظت اور نجات کا ذریعہ ہے۔",
    english: "Supplication is the servant’s protection and means of salvation.",
    category: "Success",
    ref: "Sunan Abu Dawood 1476 | Hasan"
  },
  {
    id: 5,
    title: "Dua and Action for Success",
    arabic: "اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ",
    urdu: "عمل کرو، اللہ تمہارے اعمال، اس کا رسول اور مؤمن دیکھیں گے۔",
    english: "Act, for Allah, His Messenger, and the believers will see your deeds.",
    category: "Success",
    ref: "Sahih al-Bukhari 67 | Sahih Muslim 171"
  },
  //peace of mind
   {
    id: 1,
    title: "Supplication for a Steadfast Heart",
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    urdu: "اے دلوں کو پلٹنے والے! میرے دل کو اپنے دین پر ثابت قدم رکھ۔",
    english: "O Turner of the hearts, keep my heart steadfast upon Your religion.",
    category: "Peace of Mind",
    ref: "Jami` at-Tirmidhi 2140 | Hasan"
  },
  {
    id: 2,
    title: "Reliance on Allah Brings Peace",
    arabic: "مَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    urdu: "جو شخص اللہ پر بھروسہ کرے، اللہ اس کے لیے کافی ہے۔",
    english: "Whoever relies upon Allah, He is sufficient for him.",
    category: "Peace of Mind",
    ref: "Sahih al-Bukhari 2 | Sahih Muslim 2672"
  },
  {
    id: 3,
    title: "Remembrance of Allah Brings Tranquility",
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    urdu: "یقیناً دل اللہ کے ذکر سے مطمئن ہوتے ہیں۔",
    english: "Indeed, the hearts find tranquility in the remembrance of Allah.",
    category: "Peace of Mind",
    ref: "Qur’an 13:28"
  },
  {
    id: 4,
    title: "Supplication Against Worries",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
    urdu: "اے اللہ! میں تجھ سے غم اور پریشانی سے پناہ مانگتا ہوں۔",
    english: "O Allah, I seek refuge in You from anxiety and sorrow.",
    category: "Peace of Mind",
    ref: "Sahih al-Bukhari 6369"
  },
  {
    id: 5,
    title: "Patience and Peace",
    arabic: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ",
    urdu: "صبر کرو اور تمہارا صبر اللہ کی مدد سے ہی ہے۔",
    english: "Be patient, and your patience is only through Allah.",
    category: "Peace of Mind",
    ref: "Qur’an 16:127"
  },
  //forgivness
   {
    id: 1,
    title: "Dua for Forgiveness",
    arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    urdu: "اے میرے رب! مجھے بخش دے اور میری توبہ قبول فرما، بے شک تو بہت توبہ قبول کرنے والا، نہایت رحم والا ہے۔",
    english: "My Lord, forgive me and accept my repentance. Indeed, You are the Accepter of repentance, the Most Merciful.",
    category: "Forgiveness",
    ref: "Sunan Abi Dawood 1516 | Sahih"
  },
  {
    id: 2,
    title: "Asking Forgiveness Before Prayer",
    arabic: "مَنْ غَفَرَ لَهُ قَبْلَ الصَّلَاةِ غُفِرَ لَهُ بَعْدَهَا",
    urdu: "جو شخص نماز سے پہلے اللہ سے معافی مانگے، نماز کے بعد اس کی معافی کر دی جاتی ہے۔",
    english: "Whoever seeks forgiveness before prayer, his sins are forgiven after it.",
    category: "Forgiveness",
    ref: "Jami` at-Tirmidhi 3484 | Hasan"
  },
  {
    id: 3,
    title: "Forgiveness Through Duas",
    arabic: "الدُّعَاءُ هُوَ سَلَامَةُ الْعَبْدِ وَنَجَاتُهُ",
    urdu: "دعا بندے کی حفاظت اور نجات کا ذریعہ ہے، اور گناہوں کی معافی کا سبب بنتی ہے۔",
    english: "Supplication is the servant’s protection and means of salvation, and leads to forgiveness of sins.",
    category: "Forgiveness",
    ref: "Sunan Abu Dawood 1476 | Hasan"
  },
  {
    id: 4,
    title: "Allah Forgives Those Who Forgive",
    arabic: "مَنْ عَفَا وَأَصْلَحَ فَسَيَجْعَلُ اللَّهُ لَهُ نُورًا فِي قَلْبِهِ",
    urdu: "جو شخص معاف کرے اور اصلاح کرے، اللہ اس کے دل میں نور ڈال دے گا۔",
    english: "Whoever forgives and reconciles, Allah will place light in his heart.",
    category: "Forgiveness",
    ref: "Sunan al-Darimi 293 | Hasan"
  },
  {
    id: 5,
    title: "Repentance is Always Accepted",
    arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
    urdu: "بے شک اللہ توبہ کرنے والوں سے محبت کرتا ہے اور پاکیزگی اختیار کرنے والوں سے بھی۔",
    english: "Indeed, Allah loves those who repent and loves those who purify themselves.",
    category: "Forgiveness",
    ref: "Sahih Muslim 2749"
  }, 

];
