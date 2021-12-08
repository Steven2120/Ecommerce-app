const products = [
  {
    name: "Solar Charger 26800mAh, Riapow Solar Power Bank 4 Outputs USB C Quick Charge Qi Wireless Portable Charger with LED Flashlight for iPhone, Tablet, and Samsung",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/solar_charger.jpg",
    description:
      "Advanced Wireless Portable Charger: Truly cable-free solar power bank with wireless output supports all QI-enabled phones for inductive charging. Such as for iPhone 11 Pro Max / XS Max / 8 plus, Samsung Galaxy S20 / S10 / Note 10 Plus etc.",
    price: 39.99,
    countInStock: 88,
  },
  {
    name: "Hanna Instruments High Range Nitrate Checker HI782",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/hanna_nitrate_checker.jpg",
    description:
      "Measurements with a range up to 75.0ppm. Less complex laboratory grade accuracy - Requires only 1 reagent Simple, intuitive digital operation. Compact and precise whether at home, at work, or on-the-go",
    price: 49.95,
    countInStock: 15,
  },
  {
    name: "Westinghouse Outdoor Power Equipment WGen9500DF Dual Fuel Portable Generator-9500 Rated 12500 Peak Watts Gas or Propane Powered-Electric",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/westinghouse_generator.jpg",
    description:
      "9500 Running Watts and 12500 Peak Watts (Gasoline); 8500 Running Watts, 11200 Peak Watts (Propane); Remote Start With Included Key Fob, Electric and Recoil Start; Up to 12 Hours of Run Time on a 6. 6 Gallon Fuel Tank With Fuel Gauge. Features Two GFCI 120V 5–20R Standard Household Receptacle, One Transfer Switch Ready 120V L14-30R, and One RV Ready 120/240V 14–50R; All Outlets Have Rubber Covers for Added Safety",
    price: 999.98,
    countInStock: 12,
  },
  {
    name: "UBeesize 12’’ Ring Light with Tripod, Selfie Ring Light with 67’’ Tripod Stand, Light Ring for Video Recording＆Live Streaming(YouTube, Instagram, TiK Tok)",
    imageUrl: "https://ecom-app-product-images.s3.amazonaws.com/ring_light.jpg",
    description:
      "A beefy 12-inch ring light that kicks out 20W of power from 240 LEDs, more powerful than the similar 10-inch model (which produces 8W of power). It’s big and bright enough to work as a key light for sumptuous portraits, video calls, interviews and even Zoom meetings.",
    price: 36.99,
    countInStock: 31,
  },
  {
    name: "Wilson NCAA Replica Game Basketball",
    imageUrl: "https://ecom-app-product-images.s3.amazonaws.com/basketball.jpg",
    description:
      "Whether you're playing in The Final Four or lunchtime pick-up, the ball matters. There is no other ball that can offer the Final Four quality and craftsmanship at a price no fan would argue with. This ball features the same patented technologies that you find on the NCAA Official Game Ball. A moisture absorbing cover is specially designed for indoor/outdoor play combined with Laid In Channels and our Cushion Core, make this ball a favorite of competitive players everywhere.",
    price: 33.5,
    countInStock: 99,
  },
  {
    name: "Jabra Elite 7 Pro in Ear Bluetooth Earbuds - Adjustable Active Noise Cancellation True Wireless Buds",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/wireless_headphones.jpg",
    description:
      "FREEDOM’S CALLING – Your music is about to get a serious upgrade; With 6mm custom speakers and Jabra MultiSensor Voice technology, experience revolutionary call performance and outstanding music from anywhere",
    price: 199.99,
    countInStock: 21,
  },
  {
    name: "Lazada Shiba Inu Dog Plush Kids Pillow Toys Gift for Toddler for Girls Brown 15 Inches",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/shiba_pillow.jpg",
    description:
      "Super Soft and Easy to Wash - This Plush Pillow Toys comes in a beautiful mixed color, filled in high quality polyester fibers and super-squishy material, which guarantees extra durability and soft. What's more, can be machine washed in soft mode of washing machine, easy to clean.",
    price: 20.99,
    countInStock: 7,
  },
  {
    name: "ASUS ZenScreen 15.6” 1080P Portable Monitor (MB16ACV) - Full HD, IPS, Eye Care, Flicker Free, Blue Light Filter, Kickstand, USB-C Power Delivery, for Laptop, PC, Phone, Console, Antibacterial Surface",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/portable_monitor.jpg",
    description:
      "15.6-inch Full HD portable anti-glare IPS display with an ultraslim and thin design, perfect solution for travel, on-the-go meetings, or business trips. Kickstand design to prop the monitor up in either portrait or landscape mode easily",
    price: 209.0,
    countInStock: 46,
  },
  {
    name: "Sweety Fox - Multi-Position Baby Carrier 11-in-1 with Hip Seat - for Babies & Child from 3 Months to 3 Years",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/baby_carrier.jpg",
    description:
      "COMFORT AND SAFETY - The Sweety Fox baby sling is designed so that your infant is seated comfortably, thanks to the padded seat and the fabric. Your newborn baby or toddler will also be safe: our slings support baby’s head more than most baby carriers, and the belt and straps are adjustable.",
    price: 29.99,
    countInStock: 11,
  },
  {
    name: "Matchbox 4-Level Garage",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/toy_car_track.jpg",
    description:
      "A one-stop shop for real-world adventures! Four levels of activity including a spiral ramp and real working elevator. Features a premium car wash to get cars “clean” Service station to “repair” your Matchbox vehicles. Includes one Matchbox tow truck for fun straight out of the box.Age Range: 3 Years and Up",
    price: 39.99,
    countInStock: 15,
  },
  {
    name: "Bang & Olufsen Beoplay H4 Wireless Headphones - Charcoal grey - 1643874, Charcoal Gray",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/over_the_ear_headphones.jpg",
    description:
      "Premium wireless, over-ear headphones with Bang & Olufsen signature sound. Designed with clean lines, minimalist expression and a focus on the pure essentials. Up to 19 hours of battery life with Bluetooth 4.2. High quality headphones made with leather, aluminum and steel. Sensitivity: 91 dB/mw @ 1kHz",
    price: 244.87,
    countInStock: 3,
  },
  {
    name: "Artist Hand Hydraulic Reclining Barber Chair 360 Degrees Rolling Swivel Barber Chairs Hair Salon Spa Equipment",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/barber_chair.jpg",
    description:
      "The barber chair are ergonomically designed,bring maximum comfort to your guests. Padded with high-density sponge and covered with PU leather. Bottom lever makes height adjustment easier, maximum to 6 inches.Backrest reclines up to 135°. The stands of our salon chair on a sturdy circular chrome steel base,360° swiveling.Loading Capacity: 330lbs.Heavy frame makes the chair stable enough.",
    price: 195.99,
    countInStock: 1,
  },
  {
    name: "Keurig K-Classic Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 10 Oz.",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/coffee_maker.jpg",
    description:
      "Brews multiple k cup pod sizes: (6, 8, 10 ounce) the most popular k cup pod brew sizes; use the 6 ounce brew size to achieve the strongest brew. Large 48 ounce water reservoir: Allows you to brew 6 plus cups before having to refill, saving you time and simplifying your morning routine; The water reservoir is removable, making it easy to refill whenever you need to",
    price: 99.99,
    countInStock: 20,
  },
  {
    name: "MSI GeForce RTX 3080 Ti Ventus 3X OC Graphics Card 12GB GDDR6X PCIe4.0 ATX TORX Fan 3.0 Ampere Streaming Multiprocessors 1x HDMI 2.1 3X DisplayPort 1.4a w/Mytrix_HDMI 2.1 Cable(4k@120Hz/8K@60Hz)",
    imageUrl: "https://ecom-app-product-images.s3.amazonaws.com/3080ti.jpg",
    description:
      " brings a performance-focused design that maintains the essentials to accomplish any task at hand. A capable triple fan arrangement laid into a rigid industrial design lets this sharp looking graphics card fit into any build.",
    price: 999.99,
    countInStock: 1,
  },
  {
    name: "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
    imageUrl:
      "https://ecom-app-product-images.s3.amazonaws.com/javascript_book.jpg",
    description:
      "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    price: 20.99,
    countInStock: 22,
  },
  {
    name: "A Programmer's Guide to Computer Science: A virtual degree for the self-taught developer",
    imageUrl: "https://ecom-app-product-images.s3.amazonaws.com/cs_book.jpg",
    description:
      "Volume one covers the most frequently referenced topics, including: - Algorithms and data structures - Graphs - Problem-solving techniques  - Complexity theory. The author, a senior developer at a major software company with a PhD in computer science, takes you through what you would have learned while earning a four-year computer science degree. When you finish this book, you'll have the tools you need to hold your own with people who have - or expect you to have - a computer science degree. ",
    price: 36.92,
    countInStock: 17,
  },
];

module.exports = products;
