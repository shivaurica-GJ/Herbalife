// context/ShopTranslations.ts

import { Language } from "./AboutTranslations";

export type ProductReview = {
  name: string;
  rating: number;
  comment: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  image: string;
  featured: boolean;
  benefits: string[];
  // New fields for product details page
  howToUse: string;
  ingredients: string[];
  rating: number;
  reviewCount: number;
  reviews: ProductReview[];
  // Additional product details
  servings?: string;
  flavor?: string;
  dietaryInfo?: string;
  storageInstructions?: string;
};

export type ShopTranslationsType = {
  [key in Language]: {
    viewAllProducts: string;
    shopTitle: string;
    shopSubtitle: string;
    searchPlaceholder: string;
    featuredBannerTitle: string;
    featuredBannerText: string;
    keyBenefitsLabel: string;
    viewDetails: string;
    noProductsTitle: string;
    noProductsText: string;
    helpTitle: string;
    helpText: string;
    helpButton: string;
    categories: string[];
    products: Product[];
    // New translations for product details page
    productDetails: string;
    howToUseLabel: string;
    ingredientsLabel: string;
    customerReviews: string;
    servingsLabel: string;
    flavorLabel: string;
    dietaryInfoLabel: string;
    storageLabel: string;
    callToOrder: string;
    youMightAlsoLike: string;
  };
};

export const shopTranslations: ShopTranslationsType = {
  en: {
    viewAllProducts: "View All Products",
    shopTitle: "Herbalife Products",
    shopSubtitle: "Premium nutrition for your health and wellness goals",
    searchPlaceholder: "Search products...",
    featuredBannerTitle: "Featured Products",
    featuredBannerText: "Our most popular and effective nutrition solutions",
    keyBenefitsLabel: "Key Benefits:",
    viewDetails: "View Details",
    noProductsTitle: "No products found",
    noProductsText: "Try adjusting your search or filter criteria",
    helpTitle: "Need help choosing products?",
    helpText:
      "I'll help you find the perfect Herbalife products for your specific needs and goals",
    helpButton: "Get Personalized Advice",
    categories: [
      "All Categories",
      "Nutritional Shakes",
      "Protein Bars",
      "Herbal Tea",
      "Supplements",
      "Energy & Fitness",
      "Weight Management",
    ],
    // New translations
    productDetails: "Product Details",
    howToUseLabel: "How to Use",
    ingredientsLabel: "Key Ingredients",
    customerReviews: "Customer Reviews",
    servingsLabel: "Servings",
    flavorLabel: "Flavor",
    dietaryInfoLabel: "Dietary Information",
    storageLabel: "Storage Instructions",
    callToOrder: "Call to Order",
    youMightAlsoLike: "You Might Also Like",
    products: [
      {
        id: "p1",
        name: "Formula 1 Nutritional Shake Mix",
        description:
          "A delicious, nutritious meal replacement shake packed with essential nutrients, vitamins, and minerals to support your healthy lifestyle.",
        category: "Nutritional Shakes",
        price: "₹2,450",
        image: "/images/TopSelling1.png",
        featured: true,
        benefits: [
          "21 essential vitamins and minerals",
          "18g of protein per serving",
          "Helps maintain healthy weight",
          "Supports muscle growth and recovery",
        ],
        howToUse:
          "Mix 2 scoops with 250ml of water or milk. Shake well and consume as a meal replacement.",
        ingredients: [
          "Soy Protein",
          "Whey Protein",
          "Vitamins",
          "Minerals",
          "Fiber",
        ],
        rating: 4.9,
        reviewCount: 128,
        servings: "30 servings per container",
        flavor: "Vanilla",
        dietaryInfo: "Suitable for vegetarians",
        storageInstructions: "Store in a cool, dry place",
        reviews: [
          {
            name: "Priya S.",
            rating: 5,
            comment:
              "Excellent product! I've been using this for 3 months and the results are amazing.",
            image:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
          {
            name: "Raj P.",
            rating: 4.5,
            comment:
              "Great taste and keeps me full for hours. Highly recommend!",
            image:
              "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p2",
        name: "Herbal Aloe Concentrate",
        description:
          "A refreshing drink mix that helps support digestion and nutrient absorption while promoting a healthy digestive system.",
        category: "Supplements",
        price: "₹1,350",
        image: "/images/top-selling2.png",
        featured: false,
        benefits: [
          "Supports digestive health",
          "Promotes nutrient absorption",
          "Refreshing mango flavor",
          "Low calorie content",
        ],
        howToUse: "Mix 2 capfuls with 500ml of water. Drink once daily.",
        ingredients: [
          "Aloe Vera Concentrate",
          "Natural Flavors",
          "Citric Acid",
        ],
        rating: 4.7,
        reviewCount: 95,
        servings: "50 servings per bottle",
        flavor: "Mango",
        dietaryInfo: "Vegan friendly",
        storageInstructions: "Store at room temperature",
        reviews: [
          {
            name: "Anjali M.",
            rating: 5,
            comment: "Helps with digestion and tastes great!",
            image:
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p3",
        name: "Herbalife24 Rebuild Strength",
        description:
          "Post-workout recovery formula designed to help rebuild muscles, reduce muscle breakdown and support recovery after exercise.",
        category: "Energy & Fitness",
        price: "₹2,750",
        image: "/images/TopSelling3.jpg",
        featured: true,
        benefits: [
          "24g high-quality protein",
          "Contains L-glutamine",
          "Supports muscle recovery",
          "Delicious chocolate flavor",
        ],
        howToUse: "Mix 1 scoop with 300ml of water immediately after workout.",
        ingredients: ["Whey Protein Isolate", "L-Glutamine", "BCAAs"],
        rating: 4.8,
        reviewCount: 112,
        servings: "20 servings per container",
        flavor: "Chocolate",
        dietaryInfo: "Contains milk",
        storageInstructions: "Keep tightly closed in a dry place",
        reviews: [
          {
            name: "Vikram P.",
            rating: 5,
            comment:
              "Best recovery drink I've tried. Helps with muscle soreness.",
            image:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p4",
        name: "Protein Bar Deluxe",
        description:
          "A delicious high-protein snack bar that provides balanced nutrition and helps curb hunger between meals.",
        category: "Protein Bars",
        price: "₹1,800",
        image: "/images/Shop4.png",
        featured: false,
        benefits: [
          "10g protein per bar",
          "Great taste and texture",
          "No artificial flavors",
          "Perfect on-the-go snack",
        ],
        howToUse: "Enjoy as a snack between meals or post-workout.",
        ingredients: ["Soy Protein", "Almonds", "Dark Chocolate"],
        rating: 4.6,
        reviewCount: 87,
        servings: "12 bars per box",
        flavor: "Chocolate Peanut",
        dietaryInfo: "Contains nuts",
        storageInstructions: "Store in a cool, dry place",
        reviews: [],
      },
      {
        id: "p5",
        name: "Thermo Complete",
        description:
          "Advanced tablet formula designed to help boost metabolism and support weight management goals when combined with proper diet and exercise.",
        category: "Weight Management",
        price: "₹2,150",
        image: "/images/Shop5.png",
        featured: false,
        benefits: [
          "Supports metabolism",
          "Contains green tea extract",
          "Helps boost energy",
          "Convenient tablet form",
        ],
        howToUse: "Take 2 tablets with water before breakfast and lunch.",
        ingredients: ["Green Tea Extract", "Caffeine", "Chromium"],
        rating: 4.5,
        reviewCount: 76,
        servings: "60 tablets per bottle",
        flavor: "Herbal",
        dietaryInfo: "Not recommended for pregnant women",
        storageInstructions: "Keep away from moisture",
        reviews: [],
      },
      {
        id: "p6",
        name: "Liftoff Energy Tablets",
        description:
          "Effervescent tablets with caffeine, taurine and B-vitamins to help provide mental alertness and physical energy when you need it most.",
        category: "Energy & Fitness",
        price: "₹1,600",
        image: "/images/Shop6.png",
        featured: false,
        benefits: [
          "Boosts mental alertness",
          "Provides physical energy",
          "Berry flavor",
          "Convenient tablet form",
        ],
        howToUse: "Drop 1 tablet in 200ml of water. Drink when needed.",
        ingredients: ["Caffeine", "Taurine", "B-Vitamins"],
        rating: 4.4,
        reviewCount: 63,
        servings: "20 tablets per tube",
        flavor: "Berry",
        dietaryInfo: "Contains caffeine",
        storageInstructions: "Keep tube tightly closed",
        reviews: [],
      },
      {
        id: "p7",
        name: "Herbal Tea Concentrate",
        description:
          "A refreshing instant tea drink mix with herbs that helps support energy and vitality while being low in calories.",
        category: "Herbal Tea",
        price: "₹1,250",
        image: "/images/Shop7.png",
        featured: true,
        benefits: [
          "Supports energy levels",
          "Contains orange pekoe tea",
          "Low calorie content",
          "Refreshing lemon flavor",
        ],
        howToUse: "Mix 1 teaspoon with 250ml of hot or cold water.",
        ingredients: [
          "Orange Pekoe Tea",
          "Herbal Extracts",
          "Natural Lemon Flavor",
        ],
        rating: 4.7,
        reviewCount: 104,
        servings: "50 servings per canister",
        flavor: "Lemon",
        dietaryInfo: "Caffeine content: 25mg per serving",
        storageInstructions: "Store in airtight container",
        reviews: [],
      },
      {
        id: "p8",
        name: "Simply Probiotic",
        description:
          "Advanced probiotic formula that helps support digestive health and immune system function with 20 billion CFUs per serving.",
        category: "Supplements",
        price: "₹2,950",
        image: "/images/Shop8.png",
        featured: false,
        benefits: [
          "Supports gut health",
          "20 billion CFUs",
          "Easy-to-take capsules",
          "No refrigeration needed",
        ],
        howToUse: "Take 1 capsule daily with water, preferably with a meal.",
        ingredients: ["Probiotic Blend", "Prebiotic Fiber"],
        rating: 4.8,
        reviewCount: 92,
        servings: "30 capsules per bottle",
        flavor: "Unflavored",
        dietaryInfo: "Vegetarian capsules",
        storageInstructions: "Store at room temperature",
        reviews: [],
      },
    ],
  },
  hi: {
    viewAllProducts: "सभी उत्पाद देखें",
    shopTitle: "हर्बालाइफ उत्पाद",
    shopSubtitle: "आपके स्वास्थ्य और तंदुरुस्ती लक्ष्यों के लिए प्रीमियम पोषण",
    searchPlaceholder: "उत्पाद खोजें...",
    featuredBannerTitle: "फीचर्ड उत्पाद",
    featuredBannerText: "हमारे सबसे लोकप्रिय और प्रभावी पोषण समाधान",
    keyBenefitsLabel: "मुख्य लाभ:",
    viewDetails: "विवरण देखें",
    noProductsTitle: "कोई उत्पाद नहीं मिला",
    noProductsText:
      "अपनी खोज या फ़िल्टर मानदंड को समायोजित करने का प्रयास करें",
    helpTitle: "उत्पाद चुनने में सहायता चाहिए?",
    helpText:
      "मैं आपकी विशिष्ट आवश्यकताओं और लक्ष्यों के लिए सही हर्बालाइफ उत्पाद खोजने में मदद करूंगा",
    helpButton: "व्यक्तिगत सलाह प्राप्त करें",
    categories: [
      "सभी श्रेणियां",
      "पोषण शेक",
      "प्रोटीन बार",
      "हर्बल चाय",
      "सप्लीमेंट्स",
      "ऊर्जा और फिटनेस",
      "वजन प्रबंधन",
    ],
    // New translations
    productDetails: "उत्पाद विवरण",
    howToUseLabel: "उपयोग करने का तरीका",
    ingredientsLabel: "मुख्य सामग्री",
    customerReviews: "ग्राहक समीक्षाएँ",
    servingsLabel: "सर्विंग्स",
    flavorLabel: "स्वाद",
    dietaryInfoLabel: "आहार संबंधी जानकारी",
    storageLabel: "भंडारण निर्देश",
    callToOrder: "ऑर्डर करने के लिए कॉल करें",
    youMightAlsoLike: "आपको यह भी पसंद आ सकता है",
    products: [
      {
        id: "p1",
        name: "फॉर्मूला 1 न्यूट्रिशनल शेक मिक्स",
        description:
          "एक स्वादिष्ट, पौष्टिक भोजन प्रतिस्थापन शेक जिसमें आवश्यक पोषक तत्व, विटामिन और खनिज होते हैं जो आपकी स्वस्थ जीवनशैली का समर्थन करते हैं।",
        category: "पोषण शेक",
        price: "₹२,४५०",
        image: "/images/TopSelling1.png",
        featured: true,
        benefits: [
          "21 आवश्यक विटामिन और खनिज",
          "प्रति सर्विंग 18g प्रोटीन",
          "स्वस्थ वजन बनाए रखने में मदद करता है",
          "मांसपेशियों की वृद्धि और रिकवरी का समर्थन करता है",
        ],
        howToUse:
          "250ml पानी या दूध में 2 स्कूप मिलाएं। अच्छी तरह हिलाएं और भोजन प्रतिस्थापन के रूप में सेवन करें।",
        ingredients: [
          "सोया प्रोटीन",
          "व्हे प्रोटीन",
          "विटामिन",
          "खनिज",
          "फाइबर",
        ],
        rating: 4.9,
        reviewCount: 128,
        servings: "प्रति कंटेनर 30 सर्विंग्स",
        flavor: "वनीला",
        dietaryInfo: "शाकाहारियों के लिए उपयुक्त",
        storageInstructions: "ठंडी, सूखी जगह पर स्टोर करें",
        reviews: [
          {
            name: "प्रिया एस.",
            rating: 5,
            comment:
              "उत्कृष्ट उत्पाद! मैं इसे 3 महीने से उपयोग कर रही हूं और परिणाम अद्भुत हैं।",
            image:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
          {
            name: "राज पी.",
            rating: 4.5,
            comment:
              "बेहतरीन स्वाद और मुझे घंटों तक भरा हुआ महसूस कराता है। अत्यधिक सिफारिश!",
            image:
              "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p2",
        name: "हर्बल एलो कंसंट्रेट",
        description:
          "एक ताज़ा पेय मिश्रण जो पाचन और पोषक तत्वों के अवशोषण का समर्थन करते हुए स्वस्थ पाचन तंत्र को बढ़ावा देने में मदद करता है।",
        category: "सप्लीमेंट्स",
        price: "₹१,३५०",
        image: "/images/TopSelling2.png",
        featured: false,
        benefits: [
          "पाचन स्वास्थ्य का समर्थन करता है",
          "पोषक तत्वों के अवशोषण को बढ़ावा देता है",
          "ताज़ा आम का स्वाद",
          "कम कैलोरी सामग्री",
        ],
        howToUse: "500ml पानी में 2 कैपफुल मिलाएं। दिन में एक बार पिएं।",
        ingredients: ["एलो वेरा कंसंट्रेट", "प्राकृतिक स्वाद", "साइट्रिक एसिड"],
        rating: 4.7,
        reviewCount: 95,
        servings: "प्रति बोतल 50 सर्विंग्स",
        flavor: "आम",
        dietaryInfo: "वीगन फ्रेंडली",
        storageInstructions: "कमरे के तापमान पर स्टोर करें",
        reviews: [
          {
            name: "अंजली एम.",
            rating: 5,
            comment: "पाचन में मदद करता है और स्वाद बेहतरीन है!",
            image:
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p3",
        name: "हर्बालाइफ24 रिबिल्ड स्ट्रेंथ",
        description:
          "वर्कआउट के बाद की रिकवरी फॉर्मूला जो मांसपेशियों को फिर से बनाने, मांसपेशियों के टूटने को कम करने और व्यायाम के बाद रिकवरी का समर्थन करने के लिए डिज़ाइन किया गया है।",
        category: "ऊर्जा और फिटनेस",
        price: "₹२,७५०",
        image: "/images/TopSelling3.jpg",
        featured: true,
        benefits: [
          "24g उच्च गुणवत्ता वाला प्रोटीन",
          "एल-ग्लूटामाइन शामिल",
          "मांसपेशियों की रिकवरी का समर्थन करता है",
          "स्वादिष्ट चॉकलेट फ्लेवर",
        ],
        howToUse: "वर्कआउट के तुरंत बाद 300ml पानी में 1 स्कूप मिलाएं।",
        ingredients: ["व्हे प्रोटीन आइसोलेट", "एल-ग्लूटामाइन", "बीसीएए"],
        rating: 4.8,
        reviewCount: 112,
        servings: "प्रति कंटेनर 20 सर्विंग्स",
        flavor: "चॉकलेट",
        dietaryInfo: "दूध युक्त",
        storageInstructions: "सूखी जगह पर कसकर बंद रखें",
        reviews: [
          {
            name: "विक्रम पी.",
            rating: 5,
            comment:
              "मैंने जो सबसे अच्छा रिकवरी ड्रिंक आजमाया है। मांसपेशियों में दर्द में मदद करता है।",
            image:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p4",
        name: "प्रोटीन बार डीलक्स",
        description:
          "एक स्वादिष्ट हाई-प्रोटीन स्नैक बार जो संतुलित पोषण प्रदान करता है और भोजन के बीच भूख को नियंत्रित करने में मदद करता है।",
        category: "प्रोटीन बार",
        price: "₹१,८००",
        image: "/images/Shop4.png",
        featured: false,
        benefits: [
          "प्रति बार 10g प्रोटीन",
          "उत्कृष्ट स्वाद और बनावट",
          "कोई कृत्रिम स्वाद नहीं",
          "बेहतरीन ऑन-द-गो स्नैक",
        ],
        howToUse: "भोजन के बीच या वर्कआउट के बाद स्नैक के रूप में आनंद लें।",
        ingredients: ["सोया प्रोटीन", "बादाम", "डार्क चॉकलेट"],
        rating: 4.6,
        reviewCount: 87,
        servings: "प्रति बॉक्स 12 बार",
        flavor: "चॉकलेट पीनट",
        dietaryInfo: "नट्स युक्त",
        storageInstructions: "ठंडी, सूखी जगह पर स्टोर करें",
        reviews: [],
      },
      {
        id: "p5",
        name: "थर्मो कम्पलीट",
        description:
          "एडवांस्ड टैबलेट फॉर्मूला जो उचित आहार और व्यायाम के साथ संयुक्त होने पर मेटाबॉलिज्म को बढ़ावा देने और वजन प्रबंधन लक्ष्यों का समर्थन करने के लिए डिज़ाइन किया गया है।",
        category: "वजन प्रबंधन",
        price: "₹२,१५०",
        image: "/images/Shop5.png",
        featured: false,
        benefits: [
          "मेटाबॉलिज्म का समर्थन करता है",
          "ग्रीन टी एक्सट्रैक्ट शामिल",
          "ऊर्जा बढ़ाने में मदद करता है",
          "सुविधाजनक टैबलेट फॉर्म",
        ],
        howToUse: "नाश्ते और दोपहर के भोजन से पहले पानी के साथ 2 टैबलेट लें।",
        ingredients: ["ग्रीन टी एक्सट्रैक्ट", "कैफीन", "क्रोमियम"],
        rating: 4.5,
        reviewCount: 76,
        servings: "प्रति बोतल 60 टैबलेट",
        flavor: "हर्बल",
        dietaryInfo: "गर्भवती महिलाओं के लिए अनुशंसित नहीं",
        storageInstructions: "नमी से दूर रखें",
        reviews: [],
      },
      {
        id: "p6",
        name: "लिफ्टऑफ एनर्जी टैबलेट्स",
        description:
          "कैफीन, टॉरिन और बी-विटामिन युक्त एफ़र्वेसेंट टैबलेट्स जो आपको सबसे ज्यादा जरूरत होने पर मानसिक सतर्कता और शारीरिक ऊर्जा प्रदान करने में मदद करते हैं।",
        category: "ऊर्जा और फिटनेस",
        price: "₹१,६००",
        image: "/images/Shop6.png",
        featured: false,
        benefits: [
          "मानसिक सतर्कता बढ़ाता है",
          "शारीरिक ऊर्जा प्रदान करता है",
          "बेरी फ्लेवर",
          "सुविधाजनक टैबलेट फॉर्म",
        ],
        howToUse: "200ml पानी में 1 टैबलेट डालें। जरूरत पड़ने पर पिएं।",
        ingredients: ["कैफीन", "टॉरिन", "बी-विटामिन"],
        rating: 4.4,
        reviewCount: 63,
        servings: "प्रति ट्यूब 20 टैबलेट",
        flavor: "बेरी",
        dietaryInfo: "कैफीन युक्त",
        storageInstructions: "ट्यूब को कसकर बंद रखें",
        reviews: [],
      },
      {
        id: "p7",
        name: "हर्बल टी कंसंट्रेट",
        description:
          "जड़ी-बूटियों के साथ एक ताज़ा इंस्टेंट टी ड्रिंक मिक्स जो कम कैलोरी होते हुए भी ऊर्जा और जीवंतता का समर्थन करने में मदद करता है।",
        category: "हर्बल चाय",
        price: "₹१,२५०",
        image: "/images/Shop7.png",
        featured: true,
        benefits: [
          "ऊर्जा स्तर का समर्थन करता है",
          "ऑरेंज पेको टी शामिल",
          "कम कैलोरी सामग्री",
          "ताज़ा नींबू का स्वाद",
        ],
        howToUse: "1 चम्मच को 250ml गर्म या ठंडे पानी में मिलाएं।",
        ingredients: [
          "ऑरेंज पेको टी",
          "हर्बल एक्सट्रैक्ट्स",
          "प्राकृतिक नींबू स्वाद",
        ],
        rating: 4.7,
        reviewCount: 104,
        servings: "प्रति कैनिस्टर 50 सर्विंग्स",
        flavor: "नींबू",
        dietaryInfo: "कैफीन सामग्री: प्रति सर्विंग 25mg",
        storageInstructions: "एयरटाइट कंटेनर में स्टोर करें",
        reviews: [],
      },
      {
        id: "p8",
        name: "सिंपली प्रोबायोटिक",
        description:
          "एडवांस्ड प्रोबायोटिक फॉर्मूला जो प्रति सर्विंग 20 बिलियन CFUs के साथ पाचन स्वास्थ्य और प्रतिरक्षा प्रणाली के कार्य का समर्थन करने में मदद करता है।",
        category: "सप्लीमेंट्स",
        price: "₹२,९५०",
        image: "/images/Shop8.png",
        featured: false,
        benefits: [
          "गट हेल्थ का समर्थन करता है",
          "20 बिलियन CFUs",
          "लेने में आसान कैप्सूल",
          "रेफ्रिजरेशन की आवश्यकता नहीं",
        ],
        howToUse: "भोजन के साथ पानी के साथ दिन में 1 कैप्सूल लें।",
        ingredients: ["प्रोबायोटिक ब्लेंड", "प्रीबायोटिक फाइबर"],
        rating: 4.8,
        reviewCount: 92,
        servings: "प्रति बोतल 30 कैप्सूल",
        flavor: "बिना स्वाद का",
        dietaryInfo: "शाकाहारी कैप्सूल",
        storageInstructions: "कमरे के तापमान पर स्टोर करें",
        reviews: [],
      },
    ],
  },
  gu: {
    viewAllProducts: "બધા ઉત્પાદનો જુઓ",
    shopTitle: "હર્બાલાઇફ ઉત્પાદનો",
    shopSubtitle: "તમારા આરોગ્ય અને તંદુરસ્તી લક્ષ્યો માટે પ્રીમિયમ પોષણ",
    searchPlaceholder: "ઉત્પાદનો શોધો...",
    featuredBannerTitle: "ફીચર્ડ ઉત્પાદનો",
    featuredBannerText: "અમારા સૌથી લોકપ્રિય અને અસરકારક પોષણ ઉકેલો",
    keyBenefitsLabel: "મુખ્ય ફાયદાઓ:",
    viewDetails: "વિગતો જુઓ",
    noProductsTitle: "કોઈ ઉત્પાદનો મળ્યા નથી",
    noProductsText: "તમારી શોધ અથવા ફિલ્ટર માપદંડને સમાયોજિત કરવાનો પ્રયાસ કરો",
    helpTitle: "ઉત્પાદનો પસંદ કરવામાં સહાય જોઈએ છે?",
    helpText:
      "હું તમારી ચોક્કસ જરૂરિયાતો અને લક્ષ્યો માટે યોગ્ય હર્બાલાઇફ ઉત્પાદનો શોધવામાં તમારી મદદ કરીશ",
    helpButton: "વ્યક્તિગત સલાહ મેળવો",
    categories: [
      "બધી શ્રેણીઓ",
      "પોષણ શેક્સ",
      "પ્રોટીન બાર",
      "હર્બલ ચા",
      "સપ્લિમેન્ટ્સ",
      "એનર્જી અને ફિટનેસ",
      "વજન વ્યવસ્થાપન",
    ],
    // New translations
    productDetails: "ઉત્પાદન વિગતો",
    howToUseLabel: "કેવી રીતે ઉપયોગ કરવો",
    ingredientsLabel: "મુખ્ય ઘટકો",
    customerReviews: "ગ્રાહક સમીક્ષાઓ",
    servingsLabel: "સર્વિંગ્સ",
    flavorLabel: "સ્વાદ",
    dietaryInfoLabel: "ડાયેટરી માહિતી",
    storageLabel: "સ્ટોરેજ સૂચનાઓ",
    callToOrder: "ઓર્ડર કરવા માટે કૉલ કરો",
    youMightAlsoLike: "તમને આ પણ ગમશે",
    products: [
      {
        id: "p1",
        name: "ફોર્મ્યુલા 1 ન્યુટ્રિશનલ શેક મિક્સ",
        description:
          "એક સ્વાદિષ્ટ, પોષક ભોજન રિપ્લેસમેન્ટ શેક જે તમારી તંદુરસ્ત જીવનશૈલીને ટેકો આપવા માટે આવશ્યક પોષક તત્વો, વિટામિન્સ અને ખનિજોથી ભરપૂર છે.",
        category: "પોષણ શેક્સ",
        price: "₹૨,૪૫૦",
        image: "/images/TopSelling1.png",
        featured: true,
        benefits: [
          "21 આવશ્યક વિટામિન્સ અને ખનિજો",
          "પ્રતિ સર્વિંગ 18g પ્રોટીન",
          "સ્વસ્થ વજન જાળવવામાં મદદ કરે છે",
          "સ્નાયુ વૃદ્ધિ અને પુનઃપ્રાપ્તિને ટેકો આપે છે",
        ],
        howToUse:
          "250ml પાણી અથવા દૂધમાં 2 સ્કૂપ મિક્સ કરો. સારી રીતે હલાવો અને ભોજન રિપ્લેસમેન્ટ તરીકે લો.",
        ingredients: [
          "સોયા પ્રોટીન",
          "વ્હે પ્રોટીન",
          "વિટામિન્સ",
          "ખનિજો",
          "ફાઇબર",
        ],
        rating: 4.9,
        reviewCount: 128,
        servings: "પ્રતિ કન્ટેનર 30 સર્વિંગ્સ",
        flavor: "વેનિલા",
        dietaryInfo: "શાકાહારીઓ માટે યોગ્ય",
        storageInstructions: "ઠંડી, સૂકી જગ્યાએ સ્ટોર કરો",
        reviews: [
          {
            name: "પ્રિયા એસ.",
            rating: 5,
            comment:
              "ઉત્તમ ઉત્પાદન! હું આને 3 મહિનાથી ઉપયોગ કરી રહી છું અને પરિણામો અદ્ભુત છે.",
            image:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
          {
            name: "રાજ પી.",
            rating: 4.5,
            comment:
              "ઉત્તમ સ્વાદ અને મને કલાકો સુધી ભરપૂર રાખે છે. ખૂબ જ ભલામણ કરું છું!",
            image:
              "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p2",
        name: "હર્બલ એલો કન્સન્ટ્રેટ",
        description:
          "એક તાજગી આપતું પીણું મિશ્રણ જે પાચન અને પોષક તત્વોના શોષણને ટેકો આપવામાં મદદ કરે છે અને સ્વસ્થ પાચન તંત્રને પ્રોત્સાહિત કરે છે.",
        category: "સપ્લિમેન્ટ્સ",
        price: "₹૧,૩૫૦",
        image: "/images/TopSelling2.png",
        featured: false,
        benefits: [
          "પાચન આરોગ્યને ટેકો આપે છે",
          "પોષક તત્વોના શોષણને પ્રોત્સાહન આપે છે",
          "તાજગી આપતું આંબા સ્વાદ",
          "ઓછી કેલરી સામગ્રી",
        ],
        howToUse: "500ml પાણીમાં 2 કેપફુલ મિક્સ કરો. દિવસમાં એક વાર પીઓ.",
        ingredients: [
          "એલો વેરા કન્સન્ટ્રેટ",
          "નેચરલ ફ્લેવર્સ",
          "સાઇટ્રિક એસિડ",
        ],
        rating: 4.7,
        reviewCount: 95,
        servings: "પ્રતિ બોટલ 50 સર્વિંગ્સ",
        flavor: "આંબા",
        dietaryInfo: "વીગન ફ્રેન્ડલી",
        storageInstructions: "રૂમ ટેમ્પરેચર પર સ્ટોર કરો",
        reviews: [
          {
            name: "અંજલી એમ.",
            rating: 5,
            comment: "પાચનમાં મદદ કરે છે અને સ્વાદ ઉત્તમ છે!",
            image:
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p3",
        name: "હર્બાલાઇફ24 રિબિલ્ડ સ્ટ્રેંથ",
        description:
          "વર્કઆઉટ પછીની પુનઃપ્રાપ્તિ ફોર્મ્યુલા જે સ્નાયુઓને ફરીથી બનાવવામાં, સ્નાયુઓના ટૂટવાને ઘટાડવામાં અને કસરત પછી પુનઃપ્રાપ્તિને ટેકો આપવા માટે ડિઝાઇન કરવામાં આવ્યું છે.",
        category: "એનર્જી અને ફિટનેસ",
        price: "₹૨,૭૫૦",
        image: "/images/TopSelling3.jpg",
        featured: true,
        benefits: [
          "24g ઉચ્ચ ગુણવત્તાવાળું પ્રોટીન",
          "એલ-ગ્લુટામાઇન ધરાવે છે",
          "સ્નાયુ પુનઃપ્રાપ્તિને ટેકો આપે છે",
          "સ્વાદિષ્ટ ચોકલેટ સ્વાદ",
        ],
        howToUse: "વર્કઆઉટ પછી તરત જ 300ml પાણીમાં 1 સ્કૂપ મિક્સ કરો.",
        ingredients: ["વ્હે પ્રોટીન આઇસોલેટ", "એલ-ગ્લુટામાઇન", "બીસીએએ"],
        rating: 4.8,
        reviewCount: 112,
        servings: "પ્રતિ કન્ટેનર 20 સર્વિંગ્સ",
        flavor: "ચોકલેટ",
        dietaryInfo: "દૂધ ધરાવે છે",
        storageInstructions: "સૂકી જગ્યાએ ચુસ્તપણે બંધ રાખો",
        reviews: [
          {
            name: "વિક્રમ પી.",
            rating: 5,
            comment:
              "મેં અજમાવેલો શ્રેષ્ઠ રિકવરી ડ્રિંક. સ્નાયુ દુઃખાવામાં મદદ કરે છે.",
            image:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60",
          },
        ],
      },
      {
        id: "p4",
        name: "પ્રોટીન બાર ડીલક્સ",
        description:
          "એક સ્વાદિષ્ટ હાઇ-પ્રોટીન સ્નેક બાર જે સંતુલિત પોષણ પ્રદાન કરે છે અને ભોજન વચ્ચે ભૂખને નિયંત્રિત કરવામાં મદદ કરે છે.",
        category: "પ્રોટીન બાર",
        price: "₹૧,૮૦૦",
        image: "/images/Shop4.png",
        featured: false,
        benefits: [
          "પ્રતિ બાર 10g પ્રોટીન",
          "ઉત્તમ સ્વાદ અને ટેક્સ્ચર",
          "કૃત્રિમ સ્વાદ નથી",
          "બહેતરીનો ઓન-ધ-ગો સ્નેક",
        ],
        howToUse: "ભોજન વચ્ચે અથવા વર્કઆઉટ પછી સ્નેક તરીકે આનંદ લો.",
        ingredients: ["સોયા પ્રોટીન", "બદામ", "ડાર્ક ચોકલેટ"],
        rating: 4.6,
        reviewCount: 87,
        servings: "પ્રતિ બોક્સ 12 બાર",
        flavor: "ચોકલેટ પીનટ",
        dietaryInfo: "નટ્સ ધરાવે છે",
        storageInstructions: "ઠંડી, સૂકી જગ્યાએ સ્ટોર કરો",
        reviews: [],
      },
      {
        id: "p5",
        name: "થર્મો કમ્પ્લીટ",
        description:
          "એડવાન્સ્ડ ટેબ્લેટ ફોર્મ્યુલા જે યોગ્ય આહાર અને કસરત સાથે સંયુક્ત થયા પછી મેટાબોલિઝમને વેગ આપવા અને વજન વ્યવસ્થાપન લક્ષ્યોને ટેકો આપવા માટે ડિઝાઇન કરવામાં આવ્યું છે.",
        category: "વજન વ્યવસ્થાપન",
        price: "₹૨,૧૫૦",
        image: "/images/Shop5.png",
        featured: false,
        benefits: [
          "મેટાબોલિઝમને ટેકો આપે છે",
          "ગ્રીન ટી એક્સ્ટ્રેક્ટ ધરાવે છે",
          "ઊર્જા વધારવામાં મદદ કરે છે",
          "સુવિધાજનક ટેબ્લેટ ફોર્મ",
        ],
        howToUse: "નાસ્તા અને લંચ પહેલાં પાણી સાથે 2 ટેબ્લેટ લો.",
        ingredients: ["ગ્રીન ટી એક્સ્ટ્રેક્ટ", "કેફીન", "ક્રોમિયમ"],
        rating: 4.5,
        reviewCount: 76,
        servings: "પ્રતિ બોટલ 60 ટેબ્લેટ",
        flavor: "હર્બલ",
        dietaryInfo: "ગર્ભવતી મહિલાઓ માટે ભલામણ કરેલ નથી",
        storageInstructions: "ભેજથી દૂર રાખો",
        reviews: [],
      },
      {
        id: "p6",
        name: "લિફ્ટઑફ એનર્જી ટેબ્લેટ્સ",
        description:
          "કેફીન, ટોરીન અને બી-વિટામિન્સ ધરાવતી ઇફરવેસન્ટ ટેબ્લેટ્સ જ્યારે તમને સૌથી વધુ જરૂર હોય ત્યારે માનસિક સચેતતા અને શારીરિક ઊર્જા પ્રદાન કરવામાં મદદ કરે છે.",
        category: "એનર્જી અને ફિટનેસ",
        price: "₹૧,૬૦૦",
        image: "/images/Shop6.png",
        featured: false,
        benefits: [
          "માનસિક સચેતતા વધારે છે",
          "શારીરિક ઊર્જા પ્રદાન કરે છે",
          "બેરી સ્વાદ",
          "સુવિધાજનક ટેબ્લેટ ફોર્મ",
        ],
        howToUse: "200ml પાણીમાં 1 ટેબ્લેટ ડ્રોપ કરો. જરૂરીયાત પડ્યે પીઓ.",
        ingredients: ["કેફીન", "ટોરીન", "બી-વિટામિન્સ"],
        rating: 4.4,
        reviewCount: 63,
        servings: "પ્રતિ ટ્યુબ 20 ટેબ્લેટ",
        flavor: "બેરી",
        dietaryInfo: "કેફીન ધરાવે છે",
        storageInstructions: "ટ્યુબને ચુસ્તપણે બંધ રાખો",
        reviews: [],
      },
      {
        id: "p7",
        name: "હર્બલ ટી કન્સન્ટ્રેટ",
        description:
          "જડીબુટ્ટીઓ સાથેનું એક તાજગી આપતું ઇન્સ્ટન્ટ ટી ડ્રિંક મિક્સ જે ઓછી કેલરી હોવા છતાં ઊર્જા અને જીવનશક્તિને ટેકો આપવામાં મદદ કરે છે.",
        category: "હર્બલ ચા",
        price: "₹૧,૨૫૦",
        image: "/images/Shop7.png",
        featured: true,
        benefits: [
          "ઊર્જા સ્તરને ટેકો આપે છે",
          "ઓરેન્જ પેકો ટી ધરાવે છે",
          "ઓછી કેલરી સામગ્રી",
          "તાજગી આપતું લીંબુ સ્વાદ",
        ],
        howToUse: "1 ચમચી 250ml ગરમ અથવા ઠંડા પાણીમાં મિક્સ કરો.",
        ingredients: [
          "ઓરેન્જ પેકો ટી",
          "હર્બલ એક્સ્ટ્રેક્ટ્સ",
          "નેચરલ લીંબુ સ્વાદ",
        ],
        rating: 4.7,
        reviewCount: 104,
        servings: "પ્રતિ કેનિસ્ટર 50 સર્વિંગ્સ",
        flavor: "લીંબુ",
        dietaryInfo: "કેફીન સામગ્રી: પ્રતિ સર્વિંગ 25mg",
        storageInstructions: "એરટાઇટ કન્ટેનરમાં સ્ટોર કરો",
        reviews: [],
      },
      {
        id: "p8",
        name: "સિમ્પલી પ્રોબાયોટિક",
        description:
          "એડવાન્સ્ડ પ્રોબાયોટિક ફોર્મ્યુલા જે પ્રતિ સર્વિંગ 20 બિલિયન CFUs સાથે પાચન આરોગ્ય અને રોગપ્રતિકારક શક્તિના કાર્યને ટેકો આપવામાં મદદ કરે છે.",
        category: "સપ્લિમેન્ટ્સ",
        price: "₹૨,૯૫૦",
        image: "/images/Shop8.png",
        featured: false,
        benefits: [
          "આંતરડાના આરોગ્યને ટેકો આપે છે",
          "20 બિલિયન CFUs",
          "લેવામાં સરળ કેપ્સ્યુલ",
          "રેફ્રિજરેશનની જરૂર નથી",
        ],
        howToUse: "ભોજન સાથે પાણી સાથે દિવસમાં 1 કેપ્સ્યુલ લો.",
        ingredients: ["પ્રોબાયોટિક બ્લેન્ડ", "પ્રિબાયોટિક ફાઇબર"],
        rating: 4.8,
        reviewCount: 92,
        servings: "પ્રતિ બોટલ 30 કેપ્સ્યુલ",
        flavor: "ફ્લેવરલેસ",
        dietaryInfo: "શાકાહારી કેપ્સ્યુલ",
        storageInstructions: "રૂમ ટેમ્પરેચર પર સ્ટોર કરો",
        reviews: [],
      },
    ],
  },
};
