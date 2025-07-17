import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi" | "gu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "navbar.name": "Bhavin Kapadiya",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.shop": "Shop",
    "nav.results": "Results",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.shopNow": "Shop Now",

    // Language Popup
    "popup.title": "Select Your Language",
    "popup.subtitle": "Choose your preferred language to continue",
    "popup.english": "English",
    "popup.hindi": "हिंदी",
    "popup.gujarati": "ગુજરાતી",
    "popup.continue": "Continue",

    // Home Page
    "home.hero.title": "Transform Your Health with",
    "home.hero.subtitle": "Independent Herbalife Distributor",
    "home.hero.description":
      "Helping you achieve your wellness goals through premium nutrition products and personalized support.",
    "home.hero.shopNow": "Shop Now",
    "home.hero.joinTeam": "Join My Team",
    "home.hero.certified": "Certified Distributor",

    "home.stats.customers": "Happy Customers",
    "home.stats.rating": "Customer Rating",
    "home.stats.experience": "Experience",

    "home.about.title": "Your Health Journey Starts Here",
    "home.about.description":
      "Hi, I'm Bhavin Kapadiya, a certified Herbalife distributor passionate about helping people achieve their health and wellness goals. My own transformation journey led me to discover the power of proper nutrition and now I'm here to guide you on yours.",
    "home.about.certified": "Certified Herbalife Distributor",
    "home.about.plans": "Personalized Nutrition Plans",
    "home.about.support": "Ongoing Support & Guidance",
    "home.about.learnMore": "Learn More About Me",

    "home.products.title": "Top Selling Products",
    "home.products.subtitle":
      "Discover our most popular Herbalife products loved by customers",
    "home.products.viewAll": "View All Products",
    "home.products.viewDetails": "View Details",

    "home.testimonials.title": "Success Stories",
    "home.testimonials.subtitle":
      "Real results from real people who transformed their lives with Herbalife",
    "home.testimonials.viewMore": "View More Success Stories",

    "home.messages.title": "Happy Customer Messages",
    "home.messages.subtitle":
      "See what our customers are saying about their experience",

    "home.cta.title": "Ready to Start Your Health Journey?",
    "home.cta.subtitle":
      "Join thousands of satisfied customers who've transformed their lives with our support",
    "home.cta.startShopping": "Start Shopping",
    "home.cta.getConsultation": "Get Consultation",

    // About Page
    "about.hero.title": "About Bhavin Kapadiya",
    "about.hero.subtitle":
      "Transforming lives through nutrition, one person at a time",

    "about.story.title": "My Health Journey",
    "about.story.p1":
      "My journey with Herbalife began 3 years ago when I was struggling with my own health challenges. Like many people, I tried countless diets and exercise routines, but nothing seemed to work sustainably.",
    "about.story.p2":
      "That's when I discovered Herbalife products. The science-backed nutrition and the supportive community completely changed my perspective on health and wellness. Within 6 months, I not only achieved my health goals but also discovered my passion for helping others do the same.",
    "about.story.p3":
      "Today, I'm a certified Herbalife Independent Distributor with over 500 satisfied customers. My mission is simple: to help people live healthier, more active lives through proper nutrition and unwavering support.",

    "about.why.title": "Why I Chose Herbalife",
    "about.why.subtitle":
      "After trying numerous products and approaches, here's why Herbalife stands out",
    "about.why.science": "Science-Based",
    "about.why.scienceDesc":
      "40+ years of nutrition science and research backed by clinical studies and expert formulations.",
    "about.why.quality": "Quality Guaranteed",
    "about.why.qualityDesc":
      "Rigorous testing and quality control ensure every product meets the highest standards.",
    "about.why.community": "Global Community",
    "about.why.communityDesc":
      "Join millions of people worldwide who have transformed their lives with Herbalife.",

    "about.certs.title": "Certifications & Credentials",
    "about.certs.subtitle":
      "Qualified and certified to guide you on your wellness journey",

    "about.mission.title": "My Mission & Values",
    "about.mission.subtitle":
      "Helping people live healthier, more active lives through proper nutrition and genuine support",
    "about.mission.care": "Compassionate Care",
    "about.mission.careDesc":
      "I genuinely care about each person's health journey and provide personalized support.",
    "about.mission.goal": "Goal-Oriented",
    "about.mission.goalDesc":
      "Every plan is designed to help you achieve your specific health and wellness goals.",
    "about.mission.community": "Community Building",
    "about.mission.communityDesc":
      "Building a supportive community where everyone can thrive and grow together.",

    "about.cta.title": "Let's Start Your Journey Together",
    "about.cta.description":
      "I believe that everyone deserves to feel their best. Whether you're looking to lose weight, gain energy, improve your nutrition, or build a business, I'm here to support you every step of the way.",
    "about.cta.success":
      "Your success is my success, and I'm committed to providing you with the tools, products, and support you need to achieve your goals.",
    "about.cta.start": "Start Your Journey",

    // Shop Page
    "shop.title": "Shop Herbalife Products",
    "shop.subtitle":
      "Premium nutrition products to support your wellness journey",
    "shop.search": "Search products...",
    "shop.featured": "Featured Products",
    "shop.featuredDesc":
      "Our most popular products loved by customers worldwide",
    "shop.noProducts": "No products found",
    "shop.noProductsDesc": "Try adjusting your search or filter criteria",
    "shop.help.title": "Need Help Choosing Products?",
    "shop.help.description":
      "Get personalized recommendations based on your health goals and lifestyle",
    "shop.help.consultation": "Get Free Consultation",

    // Product Categories
    "category.all": "All Products",
    "category.weightManagement": "Weight Management",
    "category.energyFitness": "Energy & Fitness",
    "category.nutrition": "Nutrition",
    "category.personalCare": "Personal Care",

    // Product Details
    "product.featured": "Featured",
    "product.benefits": "Key Benefits",
    "product.howToUse": "How to Use",
    "product.ingredients": "Key Ingredients",
    "product.orderWhatsApp": "Order via WhatsApp",
    "product.callToOrder": "Call to Order",
    "product.details": "Product Details",
    "product.reviews": "Customer Reviews",
    "product.related": "You Might Also Like",
    "product.backToShop": "Back to Shop",

    // Blog Page
    "blog.title": "Wellness Blog",
    "blog.subtitle":
      "Expert tips, nutrition advice, and wellness insights to help you live your best life",
    "blog.search": "Search articles...",
    "blog.featured": "Featured Article",
    "blog.noArticles": "No articles found",
    "blog.noArticlesDesc": "Try adjusting your search or filter criteria",
    "blog.newsletter.title": "Stay Updated with Wellness Tips",
    "blog.newsletter.description":
      "Get the latest nutrition advice, fitness tips, and wellness insights delivered to your inbox",
    "blog.newsletter.subscribe": "Subscribe for Updates",
    "blog.readMore": "Read More →",
    "blog.readFull": "Read Full Article",
    "blog.backToBlog": "Back to Blog",
    "blog.share": "Share Article",
    "blog.related": "Related Articles",

    // Contact Page
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "Ready to transform your health? Let's discuss your goals and create a personalized plan together.",
    "contact.form.title": "Send me a message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.goal": "Primary Goal",
    "contact.form.goalPlaceholder": "Select your primary goal",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder":
      "Tell me about your current situation, challenges, and what you'd like to achieve...",
    "contact.form.send": "Send Message via WhatsApp",

    "contact.info.title": "Contact Information",
    "contact.info.phone": "Phone",
    "contact.info.phoneAvailable": "Available 9 AM - 9 PM (Mon-Sat)",
    "contact.info.email": "Email",
    "contact.info.emailResponse": "Response within 24 hours",
    "contact.info.location": "Location",
    "contact.info.locationServing": "Serving customers across India",
    "contact.info.hours": "Business Hours",
    "contact.info.hoursWeekday": "Monday - Saturday",
    "contact.info.hoursTime": "9:00 AM - 9:00 PM",
    "contact.info.hoursSunday": "Sunday: Emergency only",

    "contact.quick.title": "Need Immediate Help?",
    "contact.quick.description":
      "Get instant support via WhatsApp for quick questions, product information, or urgent assistance.",
    "contact.quick.chat": "Chat on WhatsApp",

    "contact.social.title": "Follow me on Social Media",

    "contact.faq.title": "Frequently Asked Questions",

    // Footer
    "footer.description":
      "Independent Herbalife Distributor helping people transform their health and achieve their wellness goals through premium nutrition products.",
    "footer.quickLinks": "Quick Links",
    "footer.aboutMe": "About Me",
    "footer.shopProducts": "Shop Products",
    "footer.successStories": "Success Stories",
    "footer.wellnessBlog": "Wellness Blog",
    "footer.popularProducts": "Popular Products",
    "footer.formula1": "Formula 1 Shakes",
    "footer.proteinBars": "Protein Bars",
    "footer.herbalTea": "Herbal Tea",
    "footer.energyDrinks": "Energy Drinks",
    "footer.personalCare": "Personal Care",
    "footer.copyright":
      "© 2025 Bhavin Kapadiya. Independent Herbalife Distributor. All rights reserved.",
    "footer.disclaimer":
      "*Results may vary. Individual results depend on many factors.",

    // WhatsApp Widget
    "whatsapp.label": "Chat on WhatsApp",
  },

  hi: {
    // Navigation
    "navbar.name": "भाविन कापड़िया",
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.shop": "खरीदारी",
    "nav.results": "परिणाम",
    "nav.blog": "ब्लॉग",
    "nav.contact": "संपर्क",
    "nav.shopNow": "अभी खरीदें",

    // Language Popup
    "popup.title": "अपनी भाषा चुनें",
    "popup.subtitle": "जारी रखने के लिए अपनी पसंदीदा भाषा चुनें",
    "popup.english": "English",
    "popup.hindi": "हिंदी",
    "popup.gujarati": "ગુજરાતી",
    "popup.continue": "जारी रखें",

    // Home Page
    "home.hero.title": "भाविन कापड़िया के साथ अपने स्वास्थ्य को बदलें",
    "home.hero.subtitle": "स्वतंत्र हर्बालाइफ वितरक",
    "home.hero.description":
      "प्रीमियम पोषण उत्पादों और व्यक्तिगत सहायता के माध्यम से आपके कल्याण लक्ष्यों को प्राप्त करने में आपकी सहायता करना।",
    "home.hero.shopNow": "अभी खरीदें",
    "home.hero.joinTeam": "मेरी टीम में शामिल हों",
    "home.hero.certified": "प्रमाणित वितरक",

    "home.stats.customers": "खुश ग्राहक",
    "home.stats.rating": "ग्राहक रेटिंग",
    "home.stats.experience": "अनुभव",

    "home.about.title": "आपकी स्वास्थ्य यात्रा यहाँ से शुरू होती है",
    "home.about.description":
      "नमस्ते, मैं भाविन कपाड़िया हूँ, एक प्रमाणित हर्बालाइफ वितरक जो लोगों को उनके स्वास्थ्य और कल्याण लक्ष्यों को प्राप्त करने में मदद करने का जुनून रखता हूँ। मेरी अपनी परिवर्तन यात्रा ने मुझे उचित पोषण की शक्ति की खोज कराई और अब मैं आपकी यात्रा में आपका मार्गदर्शन करने के लिए यहाँ हूँ।",
    "home.about.certified": "प्रमाणित हर्बालाइफ वितरक",
    "home.about.plans": "व्यक्तिगत पोषण योजनाएं",
    "home.about.support": "निरंतर सहायता और मार्गदर्शन",
    "home.about.learnMore": "मेरे बारे में और जानें",

    "home.products.title": "सबसे ज्यादा बिकने वाले उत्पाद",
    "home.products.subtitle":
      "ग्राहकों द्वारा पसंद किए जाने वाले हमारे सबसे लोकप्रिय हर्बालाइफ उत्पादों की खोज करें",
    "home.products.viewAll": "सभी उत्पाद देखें",
    "home.products.viewDetails": "विवरण देखें",

    "home.testimonials.title": "सफलता की कहानियां",
    "home.testimonials.subtitle":
      "वास्तविक लोगों के वास्तविक परिणाम जिन्होंने हर्बालाइफ के साथ अपना जीवन बदला",
    "home.testimonials.viewMore": "और सफलता की कहानियां देखें",

    "home.messages.title": "खुश ग्राहकों के संदेश",
    "home.messages.subtitle":
      "देखें कि हमारे ग्राहक अपने अनुभव के बारे में क्या कह रहे हैं",

    "home.cta.title": "अपनी स्वास्थ्य यात्रा शुरू करने के लिए तैयार हैं?",
    "home.cta.subtitle":
      "हजारों संतुष्ट ग्राहकों में शामिल हों जिन्होंने हमारे समर्थन से अपना जीवन बदला है",
    "home.cta.startShopping": "खरीदारी शुरू करें",
    "home.cta.getConsultation": "परामर्श प्राप्त करें",

    // About Page
    "about.hero.title": "भाविन कपाड़िया के बारे में",
    "about.hero.subtitle":
      "पोषण के माध्यम से जीवन को बदलना, एक समय में एक व्यक्ति",

    "about.story.title": "मेरी स्वास्थ्य यात्रा",
    "about.story.p1":
      "हर्बालाइफ के साथ मेरी यात्रा 3 साल पहले शुरू हुई जब मैं अपनी स्वास्थ्य चुनौतियों से जूझ रहा था। कई लोगों की तरह, मैंने अनगिनत आहार और व्यायाम दिनचर्या की कोशिश की, लेकिन कुछ भी स्थायी रूप से काम नहीं लगता था।",
    "about.story.p2":
      "तभी मैंने हर्बालाइफ उत्पादों की खोज की। विज्ञान-समर्थित पोषण और सहायक समुदाय ने स्वास्थ्य और कल्याण के बारे में मेरे दृष्टिकोण को पूरी तरह से बदल दिया। 6 महीनों के भीतर, मैंने न केवल अपने स्वास्थ्य लक्ष्यों को प्राप्त किया बल्कि दूसरों की मदद करने का अपना जुनून भी खोजा।",
    "about.story.p3":
      "आज, मैं 500 से अधिक संतुष्ट ग्राहकों के साथ एक प्रमाणित हर्बालाइफ स्वतंत्र वितरक हूँ। मेरा मिशन सरल है: उचित पोषण और अटूट समर्थन के माध्यम से लोगों को स्वस्थ, अधिक सक्रिय जीवन जीने में मदद करना।",

    "about.why.title": "मैंने हर्बालाइफ क्यों चुना",
    "about.why.subtitle":
      "कई उत्पादों और दृष्टिकोणों को आजमाने के बाद, यहाँ है कि हर्बालाइफ क्यों अलग है",
    "about.why.science": "विज्ञान-आधारित",
    "about.why.scienceDesc":
      "40+ वर्षों का पोषण विज्ञान और अनुसंधान नैदानिक अध्ययनों और विशेषज्ञ फॉर्मूलेशन द्वारा समर्थित।",
    "about.why.quality": "गुणवत्ता की गारंटी",
    "about.why.qualityDesc":
      "कठोर परीक्षण और गुणवत्ता नियंत्रण यह सुनिश्चित करता है कि हर उत्पाद उच्चतम मानकों को पूरा करता है।",
    "about.why.community": "वैश्विक समुदाय",
    "about.why.communityDesc":
      "दुनिया भर के लाखों लोगों में शामिल हों जिन्होंने हर्बालाइफ के साथ अपना जीवन बदला है।",

    "about.certs.title": "प्रमाणन और साख",
    "about.certs.subtitle":
      "आपकी कल्याण यात्रा में मार्गदर्शन के लिए योग्य और प्रमाणित",

    "about.mission.title": "मेरा मिशन और मूल्य",
    "about.mission.subtitle":
      "उचित पोषण और वास्तविक समर्थन के माध्यम से लोगों को स्वस्थ, अधिक सक्रिय जीवन जीने में मदद करना",
    "about.mission.care": "दयालु देखभाल",
    "about.mission.careDesc":
      "मैं वास्तव में हर व्यक्ति की स्वास्थ्य यात्रा की परवाह करता हूँ और व्यक्तिगत सहायता प्रदान करता हूँ।",
    "about.mission.goal": "लक्ष्य-उन्मुख",
    "about.mission.goalDesc":
      "हर योजना आपके विशिष्ट स्वास्थ्य और कल्याण लक्ष्यों को प्राप्त करने में मदद करने के लिए डिज़ाइन की गई है।",
    "about.mission.community": "समुदाय निर्माण",
    "about.mission.communityDesc":
      "एक सहायक समुदाय का निर्माण जहाँ हर कोई फल-फूल सकता है और एक साथ बढ़ सकता है।",

    "about.cta.title": "आइए एक साथ अपनी यात्रा शुरू करें",
    "about.cta.description":
      "मेरा मानना है कि हर कोई अपना सर्वश्रेष्ठ महसूस करने का हकदार है। चाहे आप वजन कम करना चाहते हों, ऊर्जा बढ़ाना चाहते हों, अपने पोषण में सुधार करना चाहते हों, या व्यवसाय बनाना चाहते हों, मैं आपके हर कदम पर आपका समर्थन करने के लिए यहाँ हूँ।",
    "about.cta.success":
      "आपकी सफलता मेरी सफलता है, और मैं आपको अपने लक्ष्यों को प्राप्त करने के लिए आवश्यक उपकरण, उत्पाद और समर्थन प्रदान करने के लिए प्रतिबद्ध हूँ।",
    "about.cta.start": "अपनी यात्रा शुरू करें",

    // Shop Page
    "shop.title": "हर्बालाइफ उत्पाद खरीदें",
    "shop.subtitle":
      "आपकी कल्याण यात्रा का समर्थन करने के लिए प्रीमियम पोषण उत्पाद",
    "shop.search": "उत्पाद खोजें...",
    "shop.featured": "विशेष उत्पाद",
    "shop.featuredDesc":
      "दुनिया भर के ग्राहकों द्वारा पसंद किए जाने वाले हमारे सबसे लोकप्रिय उत्पाद",
    "shop.noProducts": "कोई उत्पाद नहीं मिला",
    "shop.noProductsDesc":
      "अपने खोज या फ़िल्टर मानदंड को समायोजित करने का प्रयास करें",
    "shop.help.title": "उत्पाद चुनने में मदद चाहिए?",
    "shop.help.description":
      "अपने स्वास्थ्य लक्ष्यों और जीवनशैली के आधार पर व्यक्तिगत सिफारिशें प्राप्त करें",
    "shop.help.consultation": "मुफ्त परामर्श प्राप्त करें",

    // Product Categories
    "category.all": "सभी उत्पाद",
    "category.weightManagement": "वजन प्रबंधन",
    "category.energyFitness": "ऊर्जा और फिटनेस",
    "category.nutrition": "पोषण",
    "category.personalCare": "व्यक्तिगत देखभाल",

    // Product Details
    "product.featured": "विशेष",
    "product.benefits": "मुख्य लाभ",
    "product.howToUse": "उपयोग कैसे करें",
    "product.ingredients": "मुख्य सामग्री",
    "product.orderWhatsApp": "व्हाट्सऐप के माध्यम से ऑर्डर करें",
    "product.callToOrder": "ऑर्डर के लिए कॉल करें",
    "product.details": "उत्पाद विवरण",
    "product.reviews": "ग्राहक समीक्षा",
    "product.related": "आपको यह भी पसंद आ सकता है",
    "product.backToShop": "दुकान पर वापस जाएं",

    // Results Page
    "results.title": "अद्भुत परिवर्तन",
    "results.subtitle":
      "वास्तविक लोग, वास्तविक परिणाम। देखें कि कैसे हर्बालाइफ उत्पादों और व्यक्तिगत मार्गदर्शन ने जीवन को बदल दिया है।",
    "results.stats.lost": "किलो कम हुआ",
    "results.stats.gained": "मांसपेशी बढ़ी (किलो)",
    "results.stats.energy": "अधिक ऊर्जा की रिपोर्ट",
    "results.stats.satisfaction": "संतुष्टि दर",
    "results.transformations.title": "पहले और बाद के परिवर्तन",
    "results.transformations.subtitle":
      "वास्तविक लोगों की प्रेरणादायक यात्राएं जिन्होंने समर्पण और सही समर्थन के साथ अपने लक्ष्यों को प्राप्त किया",
    "results.testimonials.title": "हमारे ग्राहक क्या कहते हैं",
    "results.testimonials.subtitle":
      "उन लोगों की ईमानदार प्रतिक्रिया जिनका जीवन बदल गया है",
    "results.cta.title": "अपना परिवर्तन शुरू करने के लिए तैयार हैं?",
    "results.cta.subtitle":
      "सैकड़ों संतुष्ट ग्राहकों में शामिल हों जिन्होंने हमारे समर्थन से अपने स्वास्थ्य लक्ष्यों को प्राप्त किया है",
    "results.cta.getPlan": "अपनी व्यक्तिगत योजना प्राप्त करें",
    "results.cta.shopProducts": "उत्पाद खरीदें",

    // Blog Page
    "blog.title": "कल्याण ब्लॉग",
    "blog.subtitle":
      "विशेषज्ञ सुझाव, पोषण सलाह, और कल्याण अंतर्दृष्टि आपको अपना सर्वश्रेष्ठ जीवन जीने में मदद करने के लिए",
    "blog.search": "लेख खोजें...",
    "blog.featured": "विशेष लेख",
    "blog.noArticles": "कोई लेख नहीं मिला",
    "blog.noArticlesDesc":
      "अपने खोज या फ़िल्टर मानदंड को समायोजित करने का प्रयास करें",
    "blog.newsletter.title": "कल्याण सुझावों के साथ अपडेट रहें",
    "blog.newsletter.description":
      "नवीनतम पोषण सलाह, फिटनेस टिप्स, और कल्याण अंतर्दृष्टि अपने इनबॉक्स में प्राप्त करें",
    "blog.newsletter.subscribe": "अपडेट के लिए सब्सक्राइब करें",
    "blog.readMore": "और पढ़ें →",
    "blog.readFull": "पूरा लेख पढ़ें",
    "blog.backToBlog": "ब्लॉग पर वापस जाएं",
    "blog.share": "लेख साझा करें",
    "blog.related": "संबंधित लेख",

    // Contact Page
    "contact.title": "संपर्क में रहें",
    "contact.subtitle":
      "अपने स्वास्थ्य को बदलने के लिए तैयार हैं? आइए आपके लक्ष्यों पर चर्चा करें और एक साथ एक व्यक्तिगत योजना बनाएं।",
    "contact.form.title": "मुझे एक संदेश भेजें",
    "contact.form.name": "पूरा नाम",
    "contact.form.email": "ईमेल पता",
    "contact.form.phone": "फोन नंबर",
    "contact.form.goal": "प्राथमिक लक्ष्य",
    "contact.form.goalPlaceholder": "अपना प्राथमिक लक्ष्य चुनें",
    "contact.form.message": "संदेश",
    "contact.form.messagePlaceholder":
      "मुझे अपनी वर्तमान स्थिति, चुनौतियों और आप क्या हासिल करना चाहते हैं के बारे में बताएं...",
    "contact.form.send": "व्हाट्सऐप के माध्यम से संदेश भेजें",

    "contact.info.title": "संपर्क जानकारी",
    "contact.info.phone": "फोन",
    "contact.info.phoneAvailable": "उपलब्ध सुबह 9 बजे - रात 9 बजे (सोम-शनि)",
    "contact.info.email": "ईमेल",
    "contact.info.emailResponse": "24 घंटे के भीतर जवाब",
    "contact.info.location": "स्थान",
    "contact.info.locationServing": "पूरे भारत में ग्राहकों की सेवा",
    "contact.info.hours": "व्यावसायिक घंटे",
    "contact.info.hoursWeekday": "सोमवार - शनिवार",
    "contact.info.hoursTime": "सुबह 9:00 - रात 9:00",
    "contact.info.hoursSunday": "रविवार: केवल आपातकाल",

    "contact.quick.title": "तत्काल सहायता चाहिए?",
    "contact.quick.description":
      "त्वरित प्रश्नों, उत्पाद जानकारी, या तत्काल सहायता के लिए व्हाट्सऐप के माध्यम से तत्काल समर्थन प्राप्त करें।",
    "contact.quick.chat": "व्हाट्सऐप पर चैट करें",

    "contact.social.title": "सोशल मीडिया पर मुझे फॉलो करें",

    "contact.faq.title": "अक्सर पूछे जाने वाले प्रश्न",

    // Footer
    "footer.description":
      "स्वतंत्र हर्बालाइफ वितरक लोगों को प्रीमियम पोषण उत्पादों के माध्यम से अपने स्वास्थ्य को बदलने और अपने कल्याण लक्ष्यों को प्राप्त करने में मदद करता है।",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.aboutMe": "मेरे बारे में",
    "footer.shopProducts": "उत्पाद खरीदें",
    "footer.successStories": "सफलता की कहानियां",
    "footer.wellnessBlog": "कल्याण ब्लॉग",
    "footer.popularProducts": "लोकप्रिय उत्पाद",
    "footer.formula1": "फॉर्मूला 1 शेक",
    "footer.proteinBars": "प्रोटीन बार",
    "footer.herbalTea": "हर्बल चाय",
    "footer.energyDrinks": "एनर्जी ड्रिंक",
    "footer.personalCare": "व्यक्तिगत देखभाल",
    "footer.copyright":
      "© 2025 भाविन कपाड़िया। स्वतंत्र हर्बालाइफ वितरक। सभी अधिकार सुरक्षित।",
    "footer.disclaimer":
      "*परिणाम भिन्न हो सकते हैं। व्यक्तिगत परिणाम कई कारकों पर निर्भर करते हैं।",

    // WhatsApp Widget
    "whatsapp.label": "व्हाट्सऐप पर चैट करें",
  },

  gu: {
    // Navigation
    "navbar.name": "ભાવિન કાપડિયા",
    "nav.home": "હોમ",
    "nav.about": "અમારા વિશે",
    "nav.shop": "ખરીદી",
    "nav.results": "પરિણામો",
    "nav.blog": "બ્લોગ",
    "nav.contact": "સંપર્ક",
    "nav.shopNow": "હવે ખરીદો",

    // Language Popup
    "popup.title": "તમારી ભાષા પસંદ કરો",
    "popup.subtitle": "ચાલુ રાખવા માટે તમારી પસંદીદા ભાષા પસંદ કરો",
    "popup.english": "English",
    "popup.hindi": "हिंदी",
    "popup.gujarati": "ગુજરાતી",
    "popup.continue": "ચાલુ રાખો",

    // Home Page
    "home.hero.title": "ભાવિન કપાડિયા સાથે તમારા સ્વાસ્થ્યને બદલો",
    "home.hero.subtitle": "સ્વતંત્ર હર્બાલાઇફ વિતરક",
    "home.hero.description":
      "પ્રીમિયમ પોષણ ઉત્પાદનો અને વ્યક્તિગત સહાયતા દ્વારા તમારા કલ્યાણ લક્ષ્યો હાંસલ કરવામાં તમારી મદદ કરવી.",
    "home.hero.shopNow": "હવે ખરીદો",
    "home.hero.joinTeam": "મારી ટીમમાં જોડાઓ",
    "home.hero.certified": "પ્રમાણિત વિતરક",

    "home.stats.customers": "ખુશ ગ્રાહકો",
    "home.stats.rating": "ગ્રાહક રેટિંગ",
    "home.stats.experience": "અનુભવ",

    "home.about.title": "તમારી સ્વાસ્થ્ય યાત્રા અહીંથી શરૂ થાય છે",
    "home.about.description":
      "નમસ્તે, હું ભાવિન કપડિયા છું, એક પ્રમાણિત હર્બાલાઇફ વિતરક જે લોકોને તેમના સ્વાસ્થ્ય અને કલ્યાણ લક્ષ્યો હાંસલ કરવામાં મદદ કરવાનો જુસ્સો ધરાવે છે. મારી પોતાની પરિવર્તન યાત્રાએ મને યોગ્ય પોષણની શક્તિની શોધ કરાવી અને હવે હું તમારી યાત્રામાં તમારું માર્ગદર્શન કરવા માટે અહીં છું.",
    "home.about.certified": "પ્રમાણિત હર્બાલાઇફ વિતરક",
    "home.about.plans": "વ્યક્તિગત પોષણ યોજનાઓ",
    "home.about.support": "સતત સહાય અને માર્ગદર્શન",
    "home.about.learnMore": "મારા વિશે વધુ જાણો",

    "home.products.title": "સૌથી વધુ વેચાતા ઉત્પાદનો",
    "home.products.subtitle":
      "ગ્રાહકો દ્વારા પસંદ કરાયેલા અમારા સૌથી લોકપ્રિય હર્બાલાઇફ ઉત્પાદનોની શોધ કરો",
    "home.products.viewAll": "બધા ઉત્પાદનો જુઓ",
    "home.products.viewDetails": "વિગતો જુઓ",

    "home.testimonials.title": "સફળતાની વાર્તાઓ",
    "home.testimonials.subtitle":
      "વાસ્તવિક લોકોના વાસ્તવિક પરિણામો જેમણે હર્બાલાઇફ સાથે તેમનું જીવન બદલ્યું",
    "home.testimonials.viewMore": "વધુ સફળતાની વાર્તાઓ જુઓ",

    "home.messages.title": "ખુશ ગ્રાહકોના સંદેશા",
    "home.messages.subtitle":
      "જુઓ કે અમારા ગ્રાહકો તેમના અનુભવ વિશે શું કહે છે",

    "home.cta.title": "તમારી સ્વાસ્થ્ય યાત્રા શરૂ કરવા માટે તૈયાર છો?",
    "home.cta.subtitle":
      "હજારો સંતુષ્ટ ગ્રાહકોમાં જોડાઓ જેમણે અમારા સમર્થનથી તેમનું જીવન બદલ્યું છે",
    "home.cta.startShopping": "ખરીદી શરૂ કરો",
    "home.cta.getConsultation": "સલાહ મેળવો",

    // About Page
    "about.hero.title": "ભાવિન કપાડિયા વિશે",
    "about.hero.subtitle": "પોષણ દ્વારા જીવનને બદલવું, એક સમયે એક વ્યક્તિ",

    "about.story.title": "મારી સ્વાસ્થ્ય યાત્રા",
    "about.story.p1":
      "હર્બાલાઇફ સાથે મારી યાત્રા 3 વર્ષ પહેલાં શરૂ થઈ જ્યારે હું મારી પોતાની સ્વાસ્થ્ય પડકારો સાથે સંઘર્ષ કરી રહ્યો હતો. ઘણા લોકોની જેમ, મેં અસંખ્ય આહાર અને કસરત દિનચર્યાઓ અજમાવી, પરંતુ કંઈ પણ ટકાઉ રીતે કામ કરતું લાગતું નહોતું.",
    "about.story.p2":
      "ત્યારે મેં હર્બાલાઇફ ઉત્પાદનોની શોધ કરી. વિજ્ઞાન-સમર્થિત પોષણ અને સહાયક સમુદાયે સ્વાસ્થ્ય અને કલ્યાણ વિશેના મારા દૃષ્ટિકોણને સંપૂર્ણપણે બદલી નાખ્યો. 6 મહિનાની અંદર, મેં માત્ર મારા સ્વાસ્થ્ય લક્ષ્યો હાંસલ કર્યા જ નહીં પરંતુ અન્યોની મદદ કરવાનો મારો જુસ્સો પણ શોધ્યો.",
    "about.story.p3":
      "આજે, હું 500 થી વધુ સંતુષ્ટ ગ્રાહકો સાથે એક પ્રમાણિત હર્બાલાઇફ સ્વતંત્ર વિતરક છું. મારું મિશન સરળ છે: યોગ્ય પોષણ અને અટૂટ સમર્થન દ્વારા લોકોને સ્વસ્થ, વધુ સક્રિય જીવન જીવવામાં મદદ કરવી.",

    "about.why.title": "મેં હર્બાલાઇફ કેમ પસંદ કર્યું",
    "about.why.subtitle":
      "અસંખ્ય ઉત્પાદનો અને અભિગમો અજમાવ્યા પછી, અહીં છે કે હર્બાલાઇફ કેમ અલગ છે",
    "about.why.science": "વિજ્ઞાન-આધારિત",
    "about.why.scienceDesc":
      "40+ વર્ષોનું પોષણ વિજ્ઞાન અને સંશોધન ક્લિનિકલ અભ્યાસો અને નિષ્ણાત ફોર્મ્યુલેશન દ્વારા સમર્થિત.",
    "about.why.quality": "ગુણવત્તાની ખાતરી",
    "about.why.qualityDesc":
      "કઠોર પરીક્ષણ અને ગુણવત્તા નિયંત્રણ ખાતરી કરે છે કે દરેક ઉત્પાદ ઉચ્ચતમ ધોરણોને પૂર્ણ કરે છે.",
    "about.why.community": "વૈશ્વિક સમુદાય",
    "about.why.communityDesc":
      "વિશ્વભરના લાખો લોકોમાં જોડાઓ જેમણે હર્બાલાઇફ સાથે તેમનું જીવન બદલ્યું છે.",

    "about.certs.title": "પ્રમાણપત્રો અને ઓળખપત્રો",
    "about.certs.subtitle":
      "તમારી કલ્યાણ યાત્રામાં માર્ગદર્શન માટે લાયક અને પ્રમાણિત",

    "about.mission.title": "મારું મિશન અને મૂલ્યો",
    "about.mission.subtitle":
      "યોગ્ય પોષણ અને વાસ્તવિક સમર્થન દ્વારા લોકોને સ્વસ્થ, વધુ સક્રિય જીવન જીવવામાં મદદ કરવી",
    "about.mission.care": "દયાળુ સંભાળ",
    "about.mission.careDesc":
      "હું ખરેખર દરેક વ્યક્તિની સ્વાસ્થ્ય યાત્રાની કાળજી લઉં છું અને વ્યક્તિગત સહાય પ્રદાન કરું છું.",
    "about.mission.goal": "લક્ષ્ય-લક્ષી",
    "about.mission.goalDesc":
      "દરેક યોજના તમારા વિશિષ્ટ સ્વાસ્થ્ય અને કલ્યાણ લક્ષ્યો હાંસલ કરવામાં મદદ કરવા માટે ડિઝાઇન કરવામાં આવી છે.",
    "about.mission.community": "સમુદાય નિર્માણ",
    "about.mission.communityDesc":
      "એક સહાયક સમુદાયનું નિર્માણ જ્યાં દરેક વ્યક્તિ ફળી-ફૂલી શકે અને સાથે વૃદ્ધિ પામી શકે.",

    "about.cta.title": "ચાલો સાથે મળીને તમારી યાત્રા શરૂ કરીએ",
    "about.cta.description":
      "હું માનું છું કે દરેક વ્યક્તિ પોતાનું શ્રેષ્ઠ અનુભવવાનો હકદાર છે. પછી ભલે તમે વજન ઘટાડવા માંગતા હો, ઊર્જા વધારવા માંગતા હો, તમારા પોષણમાં સુધારો કરવા માંગતા હો, અથવા વ્યવસાય બનાવવા માંગતા હો, હું તમારા દરેક પગલે તમારા સમર્થન માટે અહીં છું.",
    "about.cta.success":
      "તમારી સફળતા મારી સફળતા છે, અને હું તમને તમારા લક્ષ્યો હાંસલ કરવા માટે જરૂરી સાધનો, ઉત્પાદનો અને સમર્થન પ્રદાન કરવા માટે પ્રતિબદ્ધ છું.",
    "about.cta.start": "તમારી યાત્રા શરૂ કરો",

    // Shop Page
    "shop.title": "હર્બાલાઇફ ઉત્પાદનો ખરીદો",
    "shop.subtitle":
      "તમારી કલ્યાણ યાત્રાને સમર્થન આપવા માટે પ્રીમિયમ પોષણ ઉત્પાદનો",
    "shop.search": "ઉત્પાદનો શોધો...",
    "shop.featured": "વિશેષ ઉત્પાદનો",
    "shop.featuredDesc":
      "વિશ્વભરના ગ્રાહકો દ્વારા પસંદ કરાયેલા અમારા સૌથી લોકપ્રિય ઉત્પાદનો",
    "shop.noProducts": "કોઈ ઉત્પાદન મળ્યું નથી",
    "shop.noProductsDesc":
      "તમારા શોધ અથવા ફિલ્ટર માપદંડોને સમાયોજિત કરવાનો પ્રયાસ કરો",
    "shop.help.title": "ઉત્પાદનો પસંદ કરવામાં મદદ જોઈએ છે?",
    "shop.help.description":
      "તમારા સ્વાસ્થ્ય લક્ષ્યો અને જીવનશૈલીના આધારે વ્યક્તિગત ભલામણો મેળવો",
    "shop.help.consultation": "મફત સલાહ મેળવો",

    // Product Categories
    "category.all": "બધા ઉત્પાદનો",
    "category.weightManagement": "વજન વ્યવસ્થાપન",
    "category.energyFitness": "ઊર્જા અને ફિટનેસ",
    "category.nutrition": "પોષણ",
    "category.personalCare": "વ્યક્તિગત સંભાળ",

    // Product Details
    "product.featured": "વિશેષ",
    "product.benefits": "મુખ્ય ફાયદા",
    "product.howToUse": "કેવી રીતે ઉપયોગ કરવો",
    "product.ingredients": "મુખ્ય ઘટકો",
    "product.orderWhatsApp": "વ્હોટ્સએપ દ્વારા ઓર્ડર કરો",
    "product.callToOrder": "ઓર્ડર માટે કૉલ કરો",
    "product.details": "ઉત્પાદન વિગતો",
    "product.reviews": "ગ્રાહક સમીક્ષાઓ",
    "product.related": "તમને આ પણ ગમી શકે",
    "product.backToShop": "દુકાનમાં પાછા જાઓ",

    // Results Page
    "results.title": "અદ્ભુત પરિવર્તનો",
    "results.subtitle":
      "વાસ્તવિક લોકો, વાસ્તવિક પરિણામો. જુઓ કે કેવી રીતે હર્બાલાઇફ ઉત્પાદનો અને વ્યક્તિગત માર્ગદર્શને જીવનને બદલ્યું છે.",
    "results.stats.lost": "કિલો ઘટ્યા",
    "results.stats.gained": "સ્નાયુ વધ્યા (કિલો)",
    "results.stats.energy": "વધુ ઊર્જાની જાણ",
    "results.stats.satisfaction": "સંતુષ્ટિ દર",
    "results.transformations.title": "પહેલા અને પછીના પરિવર્તનો",
    "results.transformations.subtitle":
      "વાસ્તવિક લોકોની પ્રેરણાદાયક યાત્રાઓ જેમણે સમર્પણ અને યોગ્ય સમર્થન સાથે તેમના લક્ષ્યો હાંસલ કર્યા",
    "results.testimonials.title": "અમારા ગ્રાહકો શું કહે છે",
    "results.testimonials.subtitle":
      "તે લોકોની પ્રામાણિક પ્રતિક્રિયા જેમનું જીવન બદલાઈ ગયું છે",
    "results.cta.title": "તમારું પરિવર્તન શરૂ કરવા માટે તૈયાર છો?",
    "results.cta.subtitle":
      "સેંકડો સંતુષ્ટ ગ્રાહકોમાં જોડાઓ જેમણે અમારા સમર્થનથી તેમના સ્વાસ્થ્ય લક્ષ્યો હાંસલ કર્યા છે",
    "results.cta.getPlan": "તમારી વ્યક્તિગત યોજના મેળવો",
    "results.cta.shopProducts": "ઉત્પાદનો ખરીદો",

    // Blog Page
    "blog.title": "કલ્યાણ બ્લોગ",
    "blog.subtitle":
      "નિષ્ણાત સૂચનો, પોષણ સલાહ, અને કલ્યાણ અંતર્દૃષ્ટિ તમને તમારું શ્રેષ્ઠ જીવન જીવવામાં મદદ કરવા માટે",
    "blog.search": "લેખો શોધો...",
    "blog.featured": "વિશેષ લેખ",
    "blog.noArticles": "કોઈ લેખ મળ્યો નથી",
    "blog.noArticlesDesc":
      "તમારા શોધ અથવા ફિલ્ટર માપદંડોને સમાયોજિત કરવાનો પ્રયાસ કરો",
    "blog.newsletter.title": "કલ્યાણ સૂચનો સાથે અપડેટ રહો",
    "blog.newsletter.description":
      "નવીનતમ પોષણ સલાહ, ફિટનેસ ટિપ્સ, અને કલ્યાણ અંતર્દૃષ્ટિ તમારા ઇનબોક્સમાં મેળવો",
    "blog.newsletter.subscribe": "અપડેટ માટે સબ્સ્ક્રાઇબ કરો",
    "blog.readMore": "વધુ વાંચો →",
    "blog.readFull": "સંપૂર્ણ લેખ વાંચો",
    "blog.backToBlog": "બ્લોગ પર પાછા જાઓ",
    "blog.share": "લેખ શેર કરો",
    "blog.related": "સંબંધિત લેખો",

    // Contact Page
    "contact.title": "સંપર્કમાં રહો",
    "contact.subtitle":
      "તમારા સ્વાસ્થ્યને બદલવા માટે તૈયાર છો? ચાલો તમારા લક્ષ્યો વિશે ચર્ચા કરીએ અને સાથે મળીને એક વ્યક્તિગત યોજના બનાવીએ.",
    "contact.form.title": "મને એક સંદેશ મોકલો",
    "contact.form.name": "પૂરું નામ",
    "contact.form.email": "ઇમેઇલ સરનામું",
    "contact.form.phone": "ફોન નંબર",
    "contact.form.goal": "પ્રાથમિક લક્ષ્ય",
    "contact.form.goalPlaceholder": "તમારું પ્રાથમિક લક્ષ્ય પસંદ કરો",
    "contact.form.message": "સંદેશ",
    "contact.form.messagePlaceholder":
      "મને તમારી વર્તમાન પરિસ્થિતિ, પડકારો અને તમે શું હાંસલ કરવા માંગો છો તે વિશે કહો...",
    "contact.form.send": "વ્હોટ્સએપ દ્વારા સંદેશ મોકલો",

    "contact.info.title": "સંપર્ક માહિતી",
    "contact.info.phone": "ફોન",
    "contact.info.phoneAvailable":
      "ઉપલબ્ધ સવારે 9 વાગ્યે - રાત્રે 9 વાગ્યે (સોમ-શનિ)",
    "contact.info.email": "ઇમેઇલ",
    "contact.info.emailResponse": "24 કલાકની અંદર જવાબ",
    "contact.info.location": "સ્થાન",
    "contact.info.locationServing": "સમગ્ર ભારતમાં ગ્રાહકોની સેવા",
    "contact.info.hours": "વ્યવસાયિક કલાકો",
    "contact.info.hoursWeekday": "સોમવાર - શનિવાર",
    "contact.info.hoursTime": "સવારે 9:00 - રાત્રે 9:00",
    "contact.info.hoursSunday": "રવિવાર: માત્ર કટોકટી",

    "contact.quick.title": "તાત્કાલિક મદદ જોઈએ છે?",
    "contact.quick.description":
      "ઝડપી પ્રશ્નો, ઉત્પાદન માહિતી, અથવા તાત્કાલિક સહાય માટે વ્હોટ્સએપ દ્વારા તાત્કાલિક સમર્થન મેળવો.",
    "contact.quick.chat": "વ્હોટ્સએપ પર ચેટ કરો",

    "contact.social.title": "સોશિયલ મીડિયા પર મને ફોલો કરો",

    "contact.faq.title": "વારંવાર પૂછાતા પ્રશ્નો",

    // Footer
    "footer.description":
      "સ્વતંત્ર હર્બાલાઇફ વિતરક લોકોને પ્રીમિયમ પોષણ ઉત્પાદનો દ્વારા તેમના સ્વાસ્થ્યને બદલવા અને તેમના કલ્યાણ લક્ષ્યો હાંસલ કરવામાં મદદ કરે છે.",
    "footer.quickLinks": "ઝડપી લિંક્સ",
    "footer.aboutMe": "મારા વિશે",
    "footer.shopProducts": "ઉત્પાદનો ખરીદો",
    "footer.successStories": "સફળતાની વાર્તાઓ",
    "footer.wellnessBlog": "કલ્યાણ બ્લોગ",
    "footer.popularProducts": "લોકપ્રિય ઉત્પાદનો",
    "footer.formula1": "ફોર્મ્યુલા 1 શેક",
    "footer.proteinBars": "પ્રોટીન બાર",
    "footer.herbalTea": "હર્બલ ચા",
    "footer.energyDrinks": "એનર્જી ડ્રિંક",
    "footer.personalCare": "વ્યક્તિગત સંભાળ",
    "footer.copyright":
      "© 2025 ભાવિન કપાડિયા. સ્વતંત્ર હર્બાલાઇફ વિતરક. બધા અધિકારો સુરક્ષિત.",
    "footer.disclaimer":
      "*પરિણામો અલગ હોઈ શકે છે. વ્યક્તિગત પરિણામો ઘણા પરિબળો પર આધાર રાખે છે.",

    // WhatsApp Widget
    "whatsapp.label": "વ્હોટ્સએપ પર ચેટ કરો",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
