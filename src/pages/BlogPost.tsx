import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from "lucide-react";
import { blogTranslations } from "../contexts/BlogTranslations";
import { useLanguage } from "../contexts/LanguageContext";

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();

  // Get posts for current language
  const currentLanguageData =
    blogTranslations[language as keyof typeof blogTranslations];
  const blogPosts = currentLanguageData.posts;

  const post = blogPosts.find((p) => p.slug === slug);

  // Translation strings
  const translations = {
    en: {
      articleNotFound: "Article Not Found",
      returnToBlog: "Return to Blog",
      backToBlog: "Back to Blog",
      shareArticle: "Share Article",
      readyToStart: "Ready to Start Your Health Journey?",
      getPersonalConsultation: "Get Personal Consultation",
      shopProducts: "Shop Products",
      relatedArticles: "Related Articles",
      personalizedAdvice:
        "Get personalized advice and support to achieve your wellness goals",
      urlCopied: "Article URL copied to clipboard!",
    },
    hi: {
      articleNotFound: "लेख नहीं मिला",
      returnToBlog: "ब्लॉग पर वापस जाएं",
      backToBlog: "ब्लॉग पर वापस जाएं",
      shareArticle: "लेख साझा करें",
      readyToStart: "अपनी स्वास्थ्य यात्रा शुरू करने के लिए तैयार हैं?",
      getPersonalConsultation: "व्यक्तिगत परामर्श प्राप्त करें",
      shopProducts: "उत्पाद खरीदें",
      relatedArticles: "संबंधित लेख",
      personalizedAdvice:
        "अपने कल्याण लक्ष्यों को प्राप्त करने के लिए व्यक्तिगत सलाह और समर्थन प्राप्त करें",
      urlCopied: "लेख URL क्लिपबोर्ड पर कॉपी किया गया!",
    },
    gu: {
      articleNotFound: "લેખ મળ્યો નથી",
      returnToBlog: "બ્લોગ પર પાછા જાઓ",
      backToBlog: "બ્લોગ પર પાછા જાઓ",
      shareArticle: "લેખ શેર કરો",
      readyToStart: "તમારી આરોગ્ય યાત્રા શરૂ કરવા માટે તૈયાર છો?",
      getPersonalConsultation: "વ્યક્તિગત સલાહ મેળવો",
      shopProducts: "ઉત્પાદનો ખરીદો",
      relatedArticles: "સંબંધિત લેખો",
      personalizedAdvice:
        "તમારા વેલ્નેસ લક્ષ્યો પ્રાપ્ત કરવા માટે વ્યક્તિગત સલાહ અને સપોર્ટ મેળવો",
      urlCopied: "લેખ URL ક્લિપબોર્ડ પર કોપી કરવામાં આવ્યો!",
    },
  };

  const t = translations[language as keyof typeof translations];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.articleNotFound}
          </h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            {t.returnToBlog}
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert(t.urlCopied);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t.backToBlog}
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-64 lg:h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {post.category}
                </span>
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.publishDate).toLocaleDateString(language, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={handleShare}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Share2 className="h-5 w-5 mr-2" />
                {t.shareArticle}
              </button>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="leading-relaxed text-gray-700"
                style={{
                  whiteSpace: "pre-line",
                  lineHeight: "1.8",
                }}
              >
                {post.content}
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">{t.readyToStart}</h3>
          <p className="text-lg text-green-100 mb-6">{t.personalizedAdvice}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hi Bhavin! I read your article and I'm interested in getting personalized guidance for my health goals."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
            >
              {t.getPersonalConsultation}
            </a>
            <Link
              to="/shop"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              {t.shopProducts}
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t.relatedArticles}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.category === post.category && p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs text-blue-600 font-medium">
                      {relatedPost.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 mt-1 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
