import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero_description: "Jeelani Studies Centre is dedicated to promoting Islamic education, Sufism, and the teachings of Thareeqath and Thowheed. Our mission is to foster an Islamic renaissance through professional educational institutions and holistic spiritual guidance.",
      contact_message: "Contact us to learn more about our programs and services."
    }
  },
  ml: {
    translation: {
      hero_description: "ജീലാനി സ്റ്റഡീസ് സെന്റർ ഇസ്ലാമിക വിദ്യാഭ്യാസം, സൂഫിസം, തരീഖത്ത്, തൗഹീദ് എന്നിവ പ്രോത്സാഹിപ്പിക്കുന്നതിന് സമർപ്പിതമാണ്. പ്രൊഫഷണൽ വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിലൂടെയും സമഗ്രമായ ആത്മീയ മാർഗനിർദേശത്തിലൂടെയും ഇസ്ലാമിക നവോത്ഥാനം പ്രോത്സാഹിപ്പിക്കുക എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം.",
      contact_message: "ഞങ്ങളുടെ പ്രോഗ്രാമുകളെയും സേവനങ്ങളെയും കുറിച്ച് കൂടുതലറിയാൻ ഞങ്ങളെ ബന്ധപ്പെടുക."
    }
  },
  ur: {
    translation: {
      hero_description: "جیلانی اسٹڈیز سینٹر اسلامی تعلیم، تصوف، طریقہ، اور توحید کے فروغ کے لیے وقف ہے۔ ہمارا مشن پیشہ ورانہ تعلیمی اداروں اور جامع روحانی رہنمائی کے ذریعے اسلامی نشاۃ ثانیہ کو فروغ دینا ہے۔",
      contact_message: "ہمارے پروگراموں اور خدمات کے بارے میں مزید جاننے کے لیے ہم سے رابطہ کریں۔"
    }
  },
  ar: {
    translation: {
      hero_description: "مركز جيلاني للدراسات مكرس لتعزيز التعليم الإسلامي والتصوف وتعاليم الطريقة والتوحيد. مهمتنا هي تعزيز النهضة الإسلامية من خلال المؤسسات التعليمية المهنية والإرشاد الروحي الشامل.",
      contact_message: "تواصلوا معنا لمعرفة المزيد عن برامجنا وخدماتنا."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;