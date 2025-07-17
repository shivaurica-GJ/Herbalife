import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, MessageCircle, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { shopTranslations, Product } from "../contexts/ShopTranslations";

const ProductDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const translations = shopTranslations[language];

  // Find the product with matching ID
  const product = translations.products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {translations.noProductsTitle}
          </h2>
          <Link to="/shop" className="text-green-600 hover:text-green-700">
            {translations.viewDetails}{" "}
            {/* This might need a different translation */}
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi Bhavin! I'm interested in ordering ${product.name}. Can you help me with the details?`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {translations.viewDetails}{" "}
          {/* This might need a different translation */}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-green-600 font-medium">
                {product.category}
              </span>
              {product.featured && (
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  {translations.featuredBannerTitle}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.rating}/5 based on {product.reviewCount}{" "}
                {translations.customerReviews.toLowerCase()})
              </span>
            </div>

            <div className="text-4xl font-bold text-green-600 mb-6">
              {product.price}
            </div>

            <p className="text-lg text-gray-600 mb-8">{product.description}</p>

            {/* Additional product details */}
            {product.servings && (
              <div className="mb-4">
                <span className="font-semibold">
                  {translations.servingsLabel}:{" "}
                </span>
                <span>{product.servings}</span>
              </div>
            )}

            {product.flavor && (
              <div className="mb-4">
                <span className="font-semibold">
                  {translations.flavorLabel}:{" "}
                </span>
                <span>{product.flavor}</span>
              </div>
            )}

            {product.dietaryInfo && (
              <div className="mb-4">
                <span className="font-semibold">
                  {translations.dietaryInfoLabel}:{" "}
                </span>
                <span>{product.dietaryInfo}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Order via WhatsApp
              </button>
              <a
                href="tel:+917069013316"
                className="flex-1 border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 text-center"
              >
                {translations.callToOrder}
              </a>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="px-6 py-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {translations.productDetails}
                </h2>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {translations.keyBenefitsLabel}
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How to Use */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {translations.howToUseLabel}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.howToUse}
                  </p>

                  {product.ingredients && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {translations.ingredientsLabel}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.ingredients.map(
                          (ingredient: string, index: number) => (
                            <span
                              key={index}
                              className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                            >
                              {ingredient}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {product.storageInstructions && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {translations.storageLabel}
                      </h4>
                      <p className="text-gray-700">
                        {product.storageInstructions}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {translations.customerReviews}
              </h2>
              <div className="space-y-6">
                {product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="flex items-center mb-2">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {review.name}
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Products - Show Featured Products (like Home page) */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {translations.youMightAlsoLike}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {translations.products
              .filter((p: Product) => p.featured && p.id !== product.id) // Only featured products (excluding current)
              .slice(0, 3) // Show only 3
              .map((featuredProduct: Product) => (
                <Link
                  key={featuredProduct.id}
                  to={`/product/${featuredProduct.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {featuredProduct.name}
                    </h3>
                    <p className="text-green-600 font-bold">
                      {featuredProduct.price}
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

export default ProductDetail;
