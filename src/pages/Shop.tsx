import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Search, ShoppingCart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { shopTranslations, Product } from "../contexts/ShopTranslations"; // Import translations and Product type

const Shop = () => {
  const { language } = useLanguage();
  const translations = shopTranslations[language]; // Get translations for current language
  const products = translations.products; // Get products for current language
  const categories = translations.categories; // Get categories for current language

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product: Product) => {
    const matchesCategory =
      selectedCategory === categories[0] ||
      product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {translations.shopTitle}
            </h1>
            <p className="text-xl text-green-100">
              {translations.shopSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={translations.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map((category: string, index: number) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Products Banner */}
        <div className="mb-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">
            {translations.featuredBannerTitle}
          </h2>
          <p className="text-green-100">{translations.featuredBannerText}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {product.featured && (
                <div className="bg-green-500 text-white text-xs font-semibold px-3 py-1 absolute z-10 mt-2 ml-2 rounded-full">
                  {translations.featuredBannerTitle}
                </div>
              )}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                  // onError={(e) => {
                  //   (e.target as HTMLImageElement).src =
                  //     "/images/TopSelling1.png";
                  // }}
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-green-600 font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Benefits Preview */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">
                    {translations.keyBenefitsLabel}
                  </p>
                  <ul className="text-xs text-gray-600">
                    {product.benefits
                      .slice(0, 2)
                      .map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                  </span>
                  <div className="flex space-x-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                    >
                      {translations.viewDetails}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <ShoppingCart className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {translations.noProductsTitle}
            </h3>
            <p className="text-gray-600">{translations.noProductsText}</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {translations.helpTitle}
          </h3>
          <p className="text-gray-600 mb-6">{translations.helpText}</p>
          <a
            href="https://wa.me/916356633868?text=Hi Bhavin! I need help choosing the right Herbalife products for my goals."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-block"
          >
            {translations.helpButton}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
