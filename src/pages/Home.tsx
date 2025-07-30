import { Link } from "react-router-dom";
import { Star, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { shopTranslations } from "../contexts/ShopTranslations";
import { homeTranslations } from "../contexts/homeTranslations";

const Home = () => {
  const { t, language } = useLanguage();

  type Testimonial = {
    name: string;
    result: string;
    image: string;
    text: string;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" dir="auto">
                {t("home.hero.title")}{" "}
                {/* <span className="text-green-200">Bhavin Kapadiya</span> */}
              </h1>
              <p className="text-xl mb-4">{t("home.hero.subtitle")}</p>
              <p className="text-lg mb-8 text-green-100" dir="auto">
                {t("home.hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 text-center"
                >
                  {t("home.hero.shopNow")}
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 text-center"
                >
                  {t("home.hero.joinTeam")}
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="public/images/Transprent_Hero.png"
                alt="Bhavin Kapadiya"
                className="h-[500px] rounded-lg shadow-1xl"
              />
              {/* <div className="absolute -bottom-6 -left-6 bg-white text-green-600 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6" />
                  <span className="font-semibold">
                    {t("home.hero.certified")}
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {shopTranslations[language].featuredBannerTitle}
            </h2>
            <p className="text-lg text-gray-600">
              {shopTranslations[language].featuredBannerText}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shopTranslations[language].products
              .filter((product) => product.featured)
              .slice(0, 3) // Show only first 3 featured products
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-600">
                        {product.price}
                      </span>
                      <Link
                        to={`/product/${product.id}`}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        {shopTranslations[language].viewDetails}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              {shopTranslations[language].viewAllProducts}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {homeTranslations[language].stats.customers}
              </h3>
              <p className="text-gray-600">{t("home.stats.customers")}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {homeTranslations[language].stats.rating}
              </h3>
              <p className="text-gray-600">{t("home.stats.rating")}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                {homeTranslations[language].stats.experience}
              </h3>
              <p className="text-gray-600">{t("home.stats.experience")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Customer Screenshots */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {homeTranslations[language].testimonials.title}
            </h2>
            <p className="text-lg text-gray-600">
              {homeTranslations[language].testimonials.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp screenshot 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
              <div className="aspect-w-9 aspect-h-16">
                <img
                  src="public/images/Screenshot1.jpg"
                  alt="Customer testimonial chat 1"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* WhatsApp screenshot 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
              <div className="aspect-w-9 max-h-30">
                <img
                  src="public/images/Screenshot2.jpg"
                  alt="Customer testimonial chat 2"
                  className="object-cover w-full"
                />
              </div>
            </div>

            {/* WhatsApp screenshot 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
              <div className="aspect-w-9 aspect-h-16">
                <img
                  src="public/images/Screenshot3.jpg"
                  alt="Customer testimonial chat 3"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("home.hero.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("home.hero.description")}
              </p>
              <div className="space-y-3 mb-6">
                {homeTranslations[language].hero.points.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
              >
                {homeTranslations[language].hero.link}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            <div>
              <img
                src="public/images/client.png"
                alt="Healthy lifestyle"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {homeTranslations[language].successStories.title}
            </h2>
            <p className="text-lg text-gray-600">
              {homeTranslations[language].successStories.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeTranslations[language].successStories.stories.map(
              (testimonial: Testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-green-600 font-medium">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("home.cta.title")}</h2>
          <p className="text-xl mb-8 text-green-100">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
            >
              {homeTranslations[language].cta.buttons[0]}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              {homeTranslations[language].cta.buttons[1]}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
