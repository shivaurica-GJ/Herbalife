import React from "react";
import { Award, Heart, Target, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { aboutTranslations } from "../contexts/AboutTranslations"; // Import the translations

const About = () => {
  const { language } = useLanguage();
  const t = aboutTranslations[language]; // Get translations for current language

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.journeyTitle}
              </h2>
              <div className="space-y-4 text-gray-600">
                {t.journeyContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Herbalife */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.whySubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.whyPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Knowledge */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.knowledgeTitle}
            </h2>
            <p className="text-lg text-gray-600">{t.knowledgeDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-6"
              >
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.valuesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.valuesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {index === 0 ? (
                    <Heart className="h-8 w-8 text-red-500" />
                  ) : index === 1 ? (
                    <Target className="h-8 w-8 text-blue-500" />
                  ) : (
                    <Users className="h-8 w-8 text-green-500" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t.ctaTitle}</h2>
                <p className="text-lg text-green-100 mb-6">
                  {t.ctaDescription1}
                </p>
                <p className="text-lg text-green-100 mb-8">
                  {t.ctaDescription2}
                </p>
                <a
                  href="public/images/findProduct.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 inline-block"
                >
                  {t.ctaButton}
                </a>
              </div>
              <div>
                <img
                  src="/images/Presentation.png"
                  alt="Herbalife products consultation"
                  className="rounded-lg shadow-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
