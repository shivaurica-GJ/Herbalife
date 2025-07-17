import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { contactTranslations } from "../contexts/ContactTranslations"; // Import translations
import { Language } from "../contexts/AboutTranslations"; // Import Language type

const Contact = () => {
  const { language } = useLanguage();
  const t = contactTranslations[language]; // Get translations

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `
Hi Bhavin! I'm interested in Herbalife products.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Looking forward to hearing from you!
    `.trim();

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t.formTitle}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={t.phonePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                {t.submitButton}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t.contactTitle}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {t.phoneTitle}
                    </h3>
                    <p className="text-gray-600">{t.phoneDetail}</p>
                    <p className="text-sm text-gray-500">{t.phoneHours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {t.emailTitle}
                    </h3>
                    <p className="text-gray-600">{t.emailDetail}</p>
                    <p className="text-sm text-gray-500">{t.emailResponse}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {t.locationTitle}
                    </h3>
                    <p className="text-gray-600">{t.locationDetail}</p>
                    <p className="text-sm text-gray-500">{t.locationService}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {t.hoursTitle}
                    </h3>
                    <p className="text-gray-600">{t.hoursDetail1}</p>
                    <p className="text-gray-600">{t.hoursDetail2}</p>
                    <p className="text-sm text-gray-500">{t.hoursNote}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">{t.immediateTitle}</h3>
              <p className="mb-6 text-green-100">{t.immediateText}</p>
              <a
                href="https://wa.me/919876543210?text=Hi Bhavin! I need immediate help with Herbalife products."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 inline-flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {t.whatsappButton}
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {t.socialTitle}
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                >
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {t.instagramLabel}
                    </p>
                    <p className="text-sm text-gray-600">{t.instagramHandle}</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                >
                  <Facebook className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {t.facebookLabel}
                    </p>
                    <p className="text-sm text-gray-600">{t.facebookHandle}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t.faqTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.faq1}</h3>
              <p className="text-gray-600 text-sm">{t.faq1Answer}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.faq2}</h3>
              <p className="text-gray-600 text-sm">{t.faq2Answer}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.faq3}</h3>
              <p className="text-gray-600 text-sm">{t.faq3Answer}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t.faq4}</h3>
              <p className="text-gray-600 text-sm">{t.faq4Answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
