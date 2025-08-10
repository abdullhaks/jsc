import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import axios from 'axios';

const Surah = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [arabicVerses, setArabicVerses] = useState([]);
  const [translationVerses, setTranslationVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Manual Fatiha data with Ameen
  const fatihaData = {
    surah: {
      id: 1,
      name_simple: "Al-Fatihah",
      name_arabic: "الفاتحة",
      translated_name: { name: "The Opener" },
      revelation_place: "makkah",
      verses_count: 7
    },
    arabicVerses: [
      { id: 1, verse_key: "1:1", text_uthmani: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
      { id: 2, verse_key: "1:2", text_uthmani: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ" },
      { id: 3, verse_key: "1:3", text_uthmani: "الرَّحْمَٰنِ الرَّحِيمِ" },
      { id: 4, verse_key: "1:4", text_uthmani: "مَالِكِ يَوْمِ الدِّينِ" },
      { id: 5, verse_key: "1:5", text_uthmani: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" },
      { id: 6, verse_key: "1:6", text_uthmani: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ" },
      { id: 7, verse_key: "1:7", text_uthmani: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ" }
    ],
    translationVerses: [
      { text: "In the name of Allah, the Entirely Merciful, the Especially Merciful." },
      { text: "All praise is due to Allah, Lord of the worlds -" },
      { text: "The Entirely Merciful, the Especially Merciful," },
      { text: "Sovereign of the Day of Recompense." },
      { text: "It is You we worship and You we ask for help." },
      { text: "Guide us to the straight path -" },
      { text: "The path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray." }
    ]
  };

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        // Special handling for Al-Fatiha (id: 1)
        if (id === "1") {
          setSurah(fatihaData.surah);
          setArabicVerses(fatihaData.arabicVerses);
          setTranslationVerses(fatihaData.translationVerses);
          setLoading(false);
          return;
        }

        // For other surahs, use API
        const [surahInfoRes, arabicRes, translationRes] = await Promise.all([
          axios.get(`https://api.quran.com/api/v4/chapters/${id}?language=en`),
          axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${id}`),
          axios.get(`https://api.quran.com/api/v4/quran/translations/131?chapter_number=${id}`) // 131: Saheeh International English
        ]);

        setSurah(surahInfoRes.data.chapter);
        setArabicVerses(arabicRes.data.verses);
        setTranslationVerses(translationRes.data.translations);
        setLoading(false);
      } catch (err) {
        setError('Failed to load Surah. Please try again later.');
        setLoading(false);
      }
    };
    fetchSurah();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <BookOpen className="w-12 h-12 text-green-600" />
        </motion.div>
      </div>
    );
  }

  if (error || !surah) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <p className="text-red-600 font-semibold text-center px-4">{error || 'Surah not found.'}</p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.button
          className="flex items-center text-green-600 mb-6 hover:text-green-800 transition-colors"
          onClick={() => navigate('/quran')}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Surahs
        </motion.button>

        {/* Surah Info */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-green-200 mb-6 overflow-hidden"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {surah.name_simple}
              </h1>
              <p className="text-3xl md:text-4xl font-arabic mb-2" style={{ fontFamily: "'Amiri', serif" }}>
                {surah.name_arabic}
              </p>
              <p className="text-sm opacity-90">
                {surah.translated_name?.name} • {surah.revelation_place.charAt(0).toUpperCase() + surah.revelation_place.slice(1)} • {surah.verses_count} Ayahs
              </p>
            </div>
          </div>
        </motion.div>

        {/* Verses */}
        <div className="bg-white rounded-2xl shadow-xl border border-green-200 overflow-hidden">
          <div className="p-6 md:p-8 space-y-8">
            {arabicVerses.map((verse, index) => (
              <motion.div
                key={verse.id || index}
                className="border-b border-green-100 last:border-b-0 pb-6 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Verse Number */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                    {verse.verse_key?.split(':')[1] || index + 1}
                  </div>
                </div>

                {/* Arabic Text */}
                <div className="text-center mb-6">
                  <p 
                    className="text-2xl md:text-3xl lg:text-4xl font-arabic leading-relaxed text-gray-800"
                    style={{ fontFamily: "'Amiri', serif", direction: 'rtl' }}
                  >
                    {verse.text_uthmani}
                  </p>
                </div>

                {/* Translation */}
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                    {translationVerses[index]?.text}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Add Ameen for Al-Fatiha */}
            {id === "1" && (
              <motion.div
                className="text-center pt-6 border-t border-green-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p 
                  className="text-3xl md:text-4xl font-arabic text-green-600"
                  style={{ fontFamily: "'Amiri', serif" }}
                >
                  آمين
                </p>
                <p className="text-gray-600 text-lg mt-2">Ameen</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Surah;