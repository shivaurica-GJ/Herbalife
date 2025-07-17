import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, Search, Tag } from "lucide-react";
import { blogTranslations } from "../contexts/BlogTranslations";
import { useLanguage } from "../contexts/LanguageContext"; // Assuming you have a language context

const Blog = () => {
  const { language } = useLanguage(); // Get current language from context
  const [selectedCategory, setSelectedCategory] = useState(
    blogTranslations[language as keyof typeof blogTranslations].categories[0] // "All Posts" or equivalent
  );
  const [searchTerm, setSearchTerm] = useState("");

  // Get posts and categories for current language
  const currentLanguageData =
    blogTranslations[language as keyof typeof blogTranslations];
  const categories = currentLanguageData.categories;
  const blogPosts = currentLanguageData.posts;

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === categories[0] || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.slice(1);

  // Translation strings
  const translations = {
    en: {
      headerTitle: "Wellness Blog",
      headerSubtitle:
        "Expert tips, nutrition advice, and wellness insights to help you live your best life",
      featuredArticle: "Featured Article",
      readFullArticle: "Read Full Article",
      readMore: "Read More →",
      noArticles: "No articles found",
      tryAdjusting: "Try adjusting your search or filter criteria",
      stayUpdated: "Stay Updated with Wellness Tips",
      newsletterText:
        "Get the latest nutrition advice, fitness tips, and wellness insights delivered to your inbox",
      subscribe: "Subscribe for Updates",
      searchPlaceholder: "Search articles...",
    },
    hi: {
      headerTitle: "वेलनेस ब्लॉग",
      headerSubtitle:
        "विशेषज्ञ युक्तियाँ, पोषण सलाह और कल्याण अंतर्दृष्टि जो आपको अपना सर्वश्रेष्ठ जीवन जीने में मदद करेगी",
      featuredArticle: "विशेष लेख",
      readFullArticle: "पूरा लेख पढ़ें",
      readMore: "और पढ़ें →",
      noArticles: "कोई लेख नहीं मिला",
      tryAdjusting:
        "अपनी खोज या फ़िल्टर मानदंड को समायोजित करने का प्रयास करें",
      stayUpdated: "वेलनेस टिप्स के साथ अपडेट रहें",
      newsletterText:
        "नवीनतम पोषण सलाह, फिटनेस टिप्स और कल्याण अंतर्दृष्टि अपने इनबॉक्स में प्राप्त करें",
      subscribe: "अपडेट के लिए सब्सक्राइब करें",
      searchPlaceholder: "लेख खोजें...",
    },
    gu: {
      headerTitle: "વેલ્નેસ બ્લોગ",
      headerSubtitle:
        "તમને તમારું શ્રેષ્ઠ જીવન જીવવામાં મદદ કરવા માટે નિષ્ણાત ટીપ્સ, પોષણ સલાહ અને વેલ્નેસ જાણકારી",
      featuredArticle: "વિશેષ લેખ",
      readFullArticle: "સંપૂર્ણ લેખ વાંચો",
      readMore: "વધુ વાંચો →",
      noArticles: "કોઈ લેખ મળ્યો નથી",
      tryAdjusting: "તમારી શોધ અથવા ફિલ્ટર માપદંડને સમાયોજિત કરવાનો પ્રયાસ કરો",
      stayUpdated: "વેલ્નેસ ટીપ્સ સાથે અપડેટ રહો",
      newsletterText:
        "તમારા ઇનબોક્સમાં નવીનતમ પોષણ સલાહ, ફિટનેસ ટીપ્સ અને વેલ્નેસ જાણકારી મેળવો",
      subscribe: "અપડેટ્સ માટે સબ્સ્ક્રાઇબ કરો",
      searchPlaceholder: "લેખો શોધો...",
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.headerTitle}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t.headerSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === categories[0] && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.featuredArticle}
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-[32rem] h-[32rem] p-8 object-contain"
                  />
                  <div className="absolute top-4 left-4">{/* s */}</div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(
                          featuredPost.publishDate
                        ).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block text-center"
                  >
                    {t.readFullArticle}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-70 p-8 object-contain"
                />
                <div className="absolute top-4 left-4">
                  {/* <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span> */}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  {t.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t.noArticles}
            </h3>
            <p className="text-gray-600">{t.tryAdjusting}</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">{t.stayUpdated}</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {t.newsletterText}
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi Bhavin! I'd like to stay updated with your latest wellness tips and advice."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 inline-block"
          >
            {t.subscribe}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
