import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguagePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelectedLanguage = localStorage.getItem('language');
    if (!hasSelectedLanguage) {
      setIsOpen(true);
    }
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center mb-6">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('popup.title')}</h2>
          <p className="text-gray-600">{t('popup.subtitle')}</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleLanguageSelect('en')}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ${
              language === 'en' 
                ? 'border-green-500 bg-green-50 text-green-700' 
                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
            }`}
          >
            <span className="font-medium">English</span>
            <span className="text-2xl">🇺🇸</span>
          </button>

          <button
            onClick={() => handleLanguageSelect('hi')}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ${
              language === 'hi' 
                ? 'border-green-500 bg-green-50 text-green-700' 
                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
            }`}
          >
            <span className="font-medium">हिंदी</span>
            <span className="text-2xl">🇮🇳</span>
          </button>

          <button
            onClick={() => handleLanguageSelect('gu')}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ${
              language === 'gu' 
                ? 'border-green-500 bg-green-50 text-green-700' 
                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
            }`}
          >
            <span className="font-medium">ગુજરાતી</span>
            <span className="text-2xl">🇮🇳</span>
          </button>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          {t('popup.continue')}
        </button>
      </div>
    </div>
  );
};

export default LanguagePopup;