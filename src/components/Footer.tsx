import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="font-bold text-xl">Bhavin Kapadiya</span>
            </div>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="mailto:bhavin@example.com"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+919876543210"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("footer.aboutMe")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("footer.shopProducts")}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("footer.wellnessBlog")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("footer.popularProducts")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("footer.formula1")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("footer.proteinBars")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("footer.herbalTea")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("footer.energyDrinks")}
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  {t("footer.personalCare")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">{t("footer.copyright")}</p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              {t("footer.disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
