import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.shop"), path: "/shop" },
    { name: t("nav.contact"), path: "/contact" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.blog"), path: "/blog" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span
                className="font-bold text-2xl text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {t("navbar.name")}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-black-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/shop"
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {t("nav.shopNow")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/shop"
                className="bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 mt-4"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {t("nav.shopNow")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
