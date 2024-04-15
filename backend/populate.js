const appliancesArray = [
  {
    name: "FrostMaster Fridge",
    image: "appliances/fridge-1.jpg",
    price: 899,
    description:
      "A superb combined refrigerator with a total capacity of 264 liters, energy efficiency class F, freezing capacity within 24 hours of 3 kg, reversible door, and up to 15 hours of operation during power outages.",
    category: "fridge",
    discount: 20,
  },
  {
    name: "FrostMaster 9000 Fridge",
    image: "appliances/fridge-2.jpg",
    price: 999,
    description:
      "A superb combined refrigerator with a total capacity of 364 liters, energy efficiency class S, freezing capacity within 24 hours of 3 kg, reversible door, and up to 20 hours of operation during power outages.",
    category: "fridge",
    discount: 15,
  },
  {
    name: "EcoWash Washing Machine",
    image: "appliances/washing-machine-1.jpg",
    price: 649,
    description:
      "A phenomenal machine with adjustable spin speed up to 1100 revolutions, equipped with a load weight sensor, offering an option for delayed start up to 24 hours, capable of washing up to 7 kg of laundry with 5 quick and standard programs, and featuring machine self-diagnosis via NFC network and Simply-Fi application.",
    category: "washing-machine",
    discount: 10,
  },
  {
    name: "FlameMaster Stove",
    image: "appliances/stove-1.jpg",
    price: 799,
    description:
      "Energy class: A, Electric stove with glass-ceramic hob, Oven capacity: 55 liters, Dimensions: (WxHxD) 50x85x60 cm, Electric grill with 7 cooking functions.",
    category: "stove",
    discount: 20,
  },
  {
    name: "SteamPro Iron",
    image: "appliances/iron-1.jpg",
    price: 49,
    description:
      "A powerful 2600 W steam iron with a steam boost of up to 95 g/min, continuous steam release of 30 g/min, featuring a 350 ml water tank with a large filling opening, equipped with an anti-drip system and limescale protection, and a self-cleaning function activated by the press of a button.",
    category: "iron",
    discount: 20,
  },
  {
    name: "PowerSuck Vacuum Cleaner",
    image: "appliances/vacuum-1.jpg",
    price: 179,
    description:
      "A powerful vacuum cleaner with a cloth bag, boasting 1600 W of power, equipped with a metal telescopic tube and a brush with two attachments for corners and furniture, featuring a five-stage filtration system to prevent dust re-entry, an indicator for container fullness, and a 360° rotating hose.",
    category: "vacuum-cleaner",
    discount: 18,
  },
  {
    name: "ToastWave Toaster Oven",
    image: "appliances/toaster-1.jpg",
    price: 129,
    description:
      "A toaster with heating and defrosting functions, featuring a crumb tray for easy cleaning, illuminated button for clearer and easier control, automatic bread ejection, and 6 levels of browning.",
    category: "toaster",
    discount: 18,
  },
  {
    name: "CoolBreeze Fridge",
    image: "appliances/fridge-3.jpg",
    price: 799,
    description:
      "The refrigerator has a capacity of 164 liters, energy efficiency class F, power input of 90 W, operates for up to 24 hours during power outages, and features reversible door opening.",
    category: "fridge",
  },
  {
    name: "QuickClean Washing Machine",
    image: "appliances/washing-machine-2.jpg",
    price: 599,
    description:
      "A 7 kg washing machine with the convenience of adding clothes during the washing cycle, a steam function at the end of the selected program significantly reducing wrinkles, odors, and bacteria, and featuring a safety lock.",
    category: "washing-machine",
    discount: 20,
  },
  {
    name: "Chef'sChoice Stove",
    image: "appliances/stove-2.jpg",
    price: 899,
    description:
      "An excellent white electric stove equipped with a self-cleaning system - AquaClean, and featuring a conventional oven.",
    category: "stove",
    discount: 15,
  },
  {
    name: "SteamEase Iron",
    image: "appliances/iron-2.jpg",
    price: 59,
    description:
      "An exceptional steam iron with a power of 2800 W, adjustable temperature settings and a steam boost of 100 g/min, equipped with a 350 ml water tank capacity, a ceramic plate that perfectly irons all types of materials, and protection against leaks and limescale.",
    category: "iron",
    discount: 15,
  },
  {
    name: "TurboSweep Vacuum Cleaner",
    image: "appliances/vacuum-2.jpg",
    price: 249,
    description:
      "An extremely powerful stick vacuum cleaner with a detachable container that quickly converts into a handheld device. The battery is detachable and easily rechargeable anywhere, providing up to 60 minutes of runtime. It features a motorized turbo brush suitable for all types of floors and LED lighting to enhance cleaning.",
    category: "vacuum-cleaner",
    discount: 20,
  },
  {
    name: "CrunchMaster Toaster",
    image: "appliances/toaster-2.jpg",
    price: 79,
    description:
      "Power: 700 W, Temperature indicator, Cable length: 1 m, Weight: 1.2 kg.",
    category: "toaster",
    discount: 20,
  },
  {
    name: "ArcticFrost Fridge",
    image: "appliances/fridge-4.jpg",
    price: 749,
    description:
      "A NoFrost refrigerator with a bottom freezer in elegant black. It features the VitaFresh XXL freshness system to preserve food freshness, LED lighting to evenly illuminate the refrigerator interior, and Perfect Fit design enabling placement of the refrigerator against walls.",
    category: "fridge",
    discount: 10,
  },
  {
    name: "SpeedyWash Washing Machine",
    image: "appliances/washing-machine-3.jpg",
    price: 699,
    description:
      "Fast and efficient washing machine with economical wash option.",
    category: "washing-machine",
  },
  {
    name: "FlameGuard Stove",
    image: "appliances/stove-3.jpg",
    price: 759,
    description:
      "Energy class: A, Electric stove with glass-ceramic hob, Oven capacity: 72 liters, Dimensions: 60 cm x 85 cm x 60 cm, 3D cooking, Defrosting function.",
    category: "stove",
    discount: 20,
  },
  {
    name: "SmoothPress Iron",
    image: "appliances/iron-3.jpg",
    price: 39,
    description: "Iron with ceramic plate for smooth ironing without sticking.",
    category: "iron",
    discount: 18,
  },
  {
    name: "DustMaster Vacuum Cleaner",
    image: "appliances/vacuum-3.jpg",
    price: 199,
    description:
      "Excellent 750 W vacuum cleaner with a 1.5-liter dust container, efficient dual filtration, exceptional suction attachments, and great maneuverability with three wheels.",
    category: "vacuum-cleaner",
    discount: 15,
  },
  {
    name: "EliteToast Toaster",
    image: "appliances/toaster-3.jpg",
    price: 99,
    description: "Luxury toaster with wide slots for different types of bread.",
    category: "toaster",
    discount: 20,
  },
  {
    name: "PolarFrost Fridge",
    image: "appliances/fridge-5.jpg",
    price: 899,
    description:
      "Practical and spacious side-by-side refrigerator with a total capacity of 439 liters, equipped with NoFrost technology to prevent ice buildup, operates exceptionally quietly with a noise level of 39 dB, and has an annual energy consumption of 286 kWh.",
    category: "fridge",
    discount: 20,
  },
  {
    name: "SilentWash Washing Machine",
    image: "appliances/washing-machine-4.jpg",
    price: 799,
    description:
      "Combined washing and drying machine with steam function, convenient add-on feature for adding laundry during the cycle, equipped with 15 efficient programs, with a washing capacity of 9 kg and a drying capacity of 6 kg.",
    category: "washing-machine",
    discount: 15,
  },
];
const itArray = [
  {
    name: "UltraBook Slim",
    image: "it/laptop-1.jpg",
    price: 1199,
    description:
      "Slim, stylish, and powerful, the UltraBook Slim is designed for those who demand performance without compromise. Its sleek design houses cutting-edge components for seamless multitasking and immersive entertainment.",
    category: "laptop",
    discount: 20,
  },
  {
    name: "Workstation Pro",
    image: "it/desktop-1.jpg",
    price: 1899,
    description:
      "The Workstation Pro is engineered for professionals who require maximum performance and reliability. With its powerful processor, professional-grade graphics, and expansive storage options, it's the ultimate tool for demanding workloads.",
    category: "desktop",
    discount: 20,
  },
  {
    name: "ZenBook Infinity",
    image: "it/laptop-2.jpg",
    price: 1599,
    description:
      "Experience the pinnacle of innovation with the ZenBook Infinity. Its stunning design, ultra-thin profile, and breathtaking display redefine elegance and performance in a laptop.",
    category: "laptop",
    discount: 10,
  },
  {
    name: "Gaming Beast",
    image: "it/laptop-3.jpg",
    price: 2199,
    description:
      "Dominate the competition with the Gaming Beast. Equipped with a high-refresh-rate display, powerful graphics, and advanced cooling system, it delivers unparalleled gaming performance.",
    category: "laptop",
    discount: 15,
  },
  {
    name: "OfficeMaster Pro",
    image: "it/desktop-2.jpg",
    price: 1399,
    description:
      "Boost your productivity with the OfficeMaster Pro desktop. Featuring a spacious display, ergonomic design, and powerful performance, it's the perfect workstation for professionals.",
    category: "desktop",
    discount: 20,
  },
  {
    name: "FlexBook Air",
    image: "it/laptop-4.jpg",
    price: 1099,
    description:
      "Experience ultimate flexibility with the FlexBook Air. Its versatile design allows you to switch between laptop and tablet mode effortlessly, while its powerful performance ensures smooth multitasking.",
    category: "laptop",
  },
  {
    name: "PowerTower Pro",
    image: "it/desktop-3.jpg",
    price: 1999,
    description:
      "The PowerTower Pro is the epitome of desktop power and performance. With its high-speed processor, advanced graphics, and expansive storage, it's built to handle the most demanding tasks with ease.",
    category: "desktop",
    discount: 15,
  },
  {
    name: "InfinityBook Pro",
    image: "it/laptop-6.jpg",
    price: 1299,
    description:
      "Unleash your creativity with the InfinityBook Pro. Its stunning display, powerful processor, and long-lasting battery life make it the perfect choice for professionals on the go.",
    category: "laptop",
    discount: 18,
  },
  {
    name: "EliteBook X",
    image: "it/laptop-5.jpg",
    price: 1699,
    description:
      "Elevate your productivity with the EliteBook X. Its premium design, lightning-fast performance, and advanced security features ensure you can work with confidence, wherever you are.",
    category: "laptop",
    discount: 18,
  },
  {
    name: "ProBook Flex",
    image: "it/laptop-7.jpg",
    price: 1399,
    description:
      "The ProBook Flex combines versatility and performance in a sleek package. With its convertible design, powerful processor, and long battery life, it's perfect for work and play.",
    category: "laptop",
    discount: 10,
  },
  {
    name: "Ultimate Workstation",
    image: "it/desktop-4.jpg",
    price: 2499,
    description:
      "Experience unparalleled power with the Ultimate Workstation desktop. Featuring top-of-the-line components, professional-grade graphics, and extensive connectivity options, it's the ultimate tool for professionals.",
    category: "desktop",
    discount: 20,
  },
  {
    name: "EssentialBook Pro",
    image: "it/laptop-8.jpg",
    price: 999,
    description:
      "Get essential performance with the EssentialBook Pro. Its reliable design, long battery life, and affordable price make it the perfect choice for everyday computing tasks.",
    category: "laptop",
    discount: 20,
  },
  {
    name: "SlimBook Pro",
    image: "it/laptop-9.jpg",
    price: 1499,
    description:
      "Experience sleek performance with the SlimBook Pro. Its slim design, powerful processor, and vibrant display make it the perfect choice for work and entertainment on the go.",
    category: "laptop",
    discount: 18,
  },
  {
    name: "Gaming Titan",
    image: "it/laptop-10.jpg",
    price: 2299,
    description:
      "Conquer the gaming world with the Gaming Titan. Featuring high-performance graphics, lightning-fast processors, and advanced cooling technology, it's the ultimate gaming machine.",
    category: "laptop",
  },
  {
    name: "SwiftBook Pro",
    image: "it/laptop-11.jpg",
    price: 1199,
    description:
      "Get swift performance with the SwiftBook Pro. Its fast processor, responsive keyboard, and long battery life ensure you can stay productive all day long.",
    category: "laptop",
    discount: 18,
  },
  {
    name: "SwiftBook Air",
    image: "it/laptop-12.jpg",
    price: 1099,
    description:
      "Stay productive on the go with the SwiftBook Air. Its lightweight design, long battery life, and responsive keyboard make it the perfect companion for work and travel.",
    category: "laptop",
    discount: 15,
  },
];
const phoneArray = [
  {
    name: "Samsung Galaxy S21",
    image: "phones/phone-1.jpg",
    price: 999,
    description:
      "Samsung's latest flagship phone with cutting-edge features and stunning design.",
    category: "samsung",
    discount: 10,
  },
  {
    name: "Apple iPhone 13",
    image: "phones/phone-2.jpg",
    price: 1099,
    description:
      "The newest iPhone featuring the powerful A15 Bionic chip and advanced camera system.",
    category: "apple",
    discount: 10,
  },
  {
    name: "Xiaomi Mi 12",
    image: "phones/phone-3.jpg",
    price: 799,
    description:
      "Xiaomi's latest flagship phone with a powerful Snapdragon processor and stunning display.",
    category: "xiaomi",
    discount: 10,
  },
  {
    name: "Samsung Galaxy Note 20",
    image: "phones/phone-4.jpg",
    price: 899,
    description:
      "Samsung's premium phablet with an immersive display and versatile S Pen functionality.",
    category: "samsung",
    discount: 10,
  },
  {
    name: "Apple iPhone 13 Pro",
    image: "phones/phone-5.jpg",
    price: 1199,
    description:
      "The ultimate iPhone for professionals with ProMotion display and Pro camera system.",
    category: "apple",
    discount: 10,
  },
  {
    name: "Xiaomi Mi 11",
    image: "phones/phone-6.jpg",
    price: 699,
    description:
      "Xiaomi's flagship phone offering top-tier performance and elegant design.",
    category: "xiaomi",
    discount: 10,
  },
  {
    name: "Samsung Galaxy Z Flip 3",
    image: "phones/phone-7.jpg",
    price: 999,
    description:
      "Samsung's foldable phone with a compact design and innovative Flex mode.",
    category: "samsung",
    discount: 10,
  },
  {
    name: "Apple iPhone SE",
    image: "phones/phone-8.jpg",
    price: 499,
    description:
      "The compact iPhone with the powerful A15 Bionic chip and advanced camera features.",
    category: "apple",
    discount: 10,
  },
  {
    name: "Xiaomi Redmi Note 11 Pro",
    image: "phones/phone-9.jpg",
    price: 499,
    description:
      "Xiaomi's mid-range phone with a high-refresh-rate display and impressive camera capabilities.",
    category: "xiaomi",
    discount: 10,
  },
  {
    name: "Samsung Galaxy A52",
    image: "phones/phone-10.jpg",
    price: 499,
    description:
      "Samsung's mid-range phone with a versatile camera system and long-lasting battery.",
    category: "samsung",
    discount: 10,
  },
  {
    name: "Apple iPhone 12 Mini",
    image: "phones/phone-11.jpg",
    price: 699,
    description:
      "The compact iPhone with a Super Retina XDR display and 5G connectivity.",
    category: "apple",
    discount: 10,
  },
  {
    name: "Xiaomi Redmi Note 10",
    image: "phones/phone-12.jpg",
    price: 299,
    description:
      "Xiaomi's budget-friendly phone with a high-resolution display and powerful battery.",
    category: "xiaomi",
    discount: 12,
  },
  {
    name: "Samsung Galaxy A32",
    image: "phones/phone-13.jpg",
    price: 349,
    description:
      "Samsung's affordable phone with a large Infinity-U display and quad-camera setup.",
    category: "samsung",
    discount: 10,
  },
  {
    name: "Apple iPhone 12 Pro Max",
    image: "phones/phone-14.jpg",
    price: 1099,
    description:
      "The largest iPhone with a Pro camera system and LiDAR scanner for advanced AR experiences.",
    category: "apple",
    discount: 10,
  },
  {
    name: "Xiaomi Redmi note 13",
    image: "phones/phone-15.jpg",
    price: 199,
    description:
      "Xiaomi's entry-level phone with a large display and AI quad-camera setup.",
    category: "xiaomi",
    discount: 10,
  },
  {
    name: "Samsung Galaxy S20 FE",
    image: "phones/phone-16.jpg",
    price: 699,
    description:
      "Samsung's flagship experience at an affordable price, featuring a Super AMOLED display and versatile camera system.",
    category: "samsung",
    discount: 5,
  },
];
const tvArray = [
  {
    name: "LG OLED C1",
    image: "tv/tv-1.jpg",
    price: 1999,
    description:
      "Experience stunning picture quality with the LG OLED C1. Featuring OLED technology, Dolby Vision IQ, and AI-enhanced image processing, it delivers unparalleled visuals.",
    category: "lg",
    discount: 15,
  },
  {
    name: "Samsung QLED QN90A",
    image: "tv/tv-2.jpg",
    price: 2499,
    description:
      "Immerse yourself in lifelike colors and incredible detail with the Samsung QLED QN90A. With Quantum HDR, Object Tracking Sound, and a sleek design, it's a true centerpiece for any room.",
    category: "samsung-tv",
    discount: 15,
  },
  {
    name: "Sony Bravia XR A90J",
    image: "tv/tv-3.jpg",
    price: 2999,
    description:
      "Experience cinematic brilliance with the Sony Bravia XR A90J. Featuring Cognitive Processor XR, XR Triluminos Pro, and Acoustic Surface Audio+, it's the ultimate entertainment experience.",
    category: "sony",
    discount: 15,
  },
  {
    name: "LG NanoCell 90",
    image: "tv/tv-4.jpg",
    price: 1499,
    description:
      "Enjoy vibrant colors and sharp detail with the LG NanoCell 90. With NanoCell technology, Dolby Atmos, and a sleek design, it's perfect for both movies and gaming.",
    category: "lg",
    discount: 18,
  },
  {
    name: "Samsung Neo QLED QN85A",
    image: "tv/tv-5.jpg",
    price: 1999,
    description:
      "Elevate your viewing experience with the Samsung Neo QLED QN85A. Featuring Quantum Matrix Technology, Object Tracking Sound, and Adaptive Picture, it delivers stunning visuals and immersive audio.",
    category: "samsung-tv",
    discount: 18,
  },
  {
    name: "Sony Bravia X90J",
    image: "tv/tv-6.jpg",
    price: 1799,
    description:
      "Enjoy breathtaking clarity and detail with the Sony Bravia X90J. With Full Array LED, XR Triluminos Pro, and XR Motion Clarity, it delivers an immersive viewing experience.",
    category: "sony",
    discount: 15,
  },
  {
    name: "LG OLED GX",
    image: "tv/tv-7.jpg",
    price: 2999,
    description:
      "Transform your living space with the LG OLED GX. With Gallery Design, Dolby Vision IQ, and Alpha 9 Gen 3 AI Processor, it's a work of art that delivers exceptional picture quality.",
    category: "lg",
    discount: 15,
  },
  {
    name: "Samsung The Frame",
    image: "tv/tv-8.jpg",
    price: 1799,
    description:
      "Elevate your space with the Samsung The Frame. When not in use, it transforms into a stunning piece of art, and when turned on, it delivers vibrant colors and lifelike detail.",
    category: "samsung-tv",
    discount: 15,
  },
  {
    name: "Sony Bravia X80J",
    image: "tv/tv-9.jpg",
    price: 1199,
    description:
      "Enjoy immersive entertainment with the Sony Bravia X80J. With 4K HDR, Triluminos Display, and Google TV, it offers stunning visuals and easy access to your favorite content.",
    category: "sony",
    discount: 15,
  },
  {
    name: "LG 4K UHD UN7070",
    image: "tv/tv-10.jpg",
    price: 899,
    description:
      "Experience lifelike visuals with the LG 4K UHD UN7070. With 4K Active HDR, webOS, and a slim design, it's the perfect addition to any entertainment setup.",
    category: "lg",
    discount: 10,
  },
  {
    name: "Samsung Crystal UHD AU8000",
    image: "tv/tv-11.jpg",
    price: 999,
    description:
      "Immerse yourself in stunning clarity with the Samsung Crystal UHD AU8000. With Crystal Processor 4K, HDR, and Motion Xcelerator, it delivers an incredible viewing experience.",
    category: "samsung-tv",
    discount: 10,
  },
];
module.exports = { appliancesArray, itArray, phoneArray, tvArray };
