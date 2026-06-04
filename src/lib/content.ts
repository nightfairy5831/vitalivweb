// Central content for the Vitaliv Health & Wellness Clinic website.
// Sourced from the clinic's published material (services, packages, products,
// team, branches). Prices are in Brunei dollars (BND$).

export const clinic = {
  name: "Vitaliv Health & Wellness Clinic",
  shortName: "Vitaliv",
  tagline: "Be healthy. Stay healthy.",
  established: 2007,
  email: "info@vitalivhwc.com",
  mission:
    "We pride ourselves on providing quality service for your individual health needs. Vitaliv Health & Wellness Clinic was established in 2007 with one simple idea — we want you to be healthy and stay healthy.",
};

export type NavItem = { label: string; href: string };
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "eVitaliv", href: "/evitaliv" },
];

export type Branch = {
  name: string;
  address: string;
  phone: string;
  mobile: string;
  fax: string;
  maps: string;
};

export const branches: Branch[] = [
  {
    name: "Jerudong Branch",
    address:
      "C5 & C6, Ground Floor, Jerudong Center, Simpang 461, Jalan Jerudong, BG3122, Brunei Darussalam",
    phone: "+673 261 0989",
    mobile: "+673 732 8577",
    fax: "+673 261 0979",
    maps: "https://www.google.com/maps/search/?api=1&query=Jerudong+Center+Brunei",
  },
  {
    name: "Aman Branch",
    address:
      "A6, Ground Floor, Aman Complex, Jalan Aman, Jalan Muara, BC3315, Brunei Darussalam",
    phone: "+673 233 5577",
    mobile: "+673 824 8315",
    fax: "+673 233 7733",
    maps: "https://www.google.com/maps/search/?api=1&query=Aman+Complex+Jalan+Muara+Brunei",
  },
  {
    name: "Kuala Belait Branch",
    address:
      "Unit 117, First Floor, Block C, Seaview Hotel, Pandan, 3678 Jalan Maulana, Kuala Belait, KA2931, Brunei Darussalam",
    phone: "+673 320 0969",
    mobile: "+673 837 0969",
    fax: "+673 320 0989",
    maps: "https://www.google.com/maps/search/?api=1&query=Seaview+Hotel+Kuala+Belait+Brunei",
  },
];

export const hours: { day: string; time: string }[] = [
  { day: "Monday", time: "8:00 AM – 1:00 PM · 2:00 – 7:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 12:00 Noon · 1:00 – 4:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 1:00 PM · 2:00 – 7:00 PM" },
  { day: "Thursday", time: "8:00 AM – 12:00 Noon · 1:00 – 8:00 PM" },
  { day: "Friday", time: "8:00 AM – 12:00 Noon · 3:00 – 8:00 PM" },
  { day: "Saturday", time: "8:00 AM – 1:00 PM" },
  { day: "Sunday & Public Holidays", time: "Closed" },
];

export type Service = {
  title: string;
  blurb: string;
  details: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Family Medicine",
    blurb: "Comprehensive care for every member of your family, at every stage of life.",
    details:
      "Preventative care and wellness checks, treatment of acute and chronic illness, immunisations, family planning, antenatal checks, minor procedures and mental health counselling — with home visits available.",
    image: "/assets/services/4.png",
  },
  {
    title: "Maternal, Child & Adolescent Wellness",
    blurb: "Supporting mothers and children from pregnancy through the teenage years.",
    details:
      "Pregnancy confirmation, antenatal care and ultrasounds, maternal check-ups, paediatric assessments and vaccinations, plus adolescent mental-health support including eating disorders and weight management.",
    image: "/assets/services/5.png",
  },
  {
    title: "Specialist ENT Services",
    blurb: "Consultant-led ear, nose and throat care.",
    details:
      "Management of rhinitis and sinusitis, ear-wax removal, nasal cautery, nasal endoscopy, foreign-body removal, oral ulcer treatment and neck biopsies.",
    image: "/assets/services/DSC_0430.jpeg",
  },
  {
    title: "Hearing Screening & Audiology",
    blurb: "From assessment to fitting — hearing care for ages 3 and up.",
    details:
      "Audiometry and tympanometry testing, hearing-aid selection, fitting and tuning, plus custom ear-mould creation.",
    image: "/assets/services/hearing-aids.png",
  },
  {
    title: "Corporate & Individual Wellness",
    blurb: "BJSV-certified Fitness-to-Work screenings for the oil & gas industry.",
    details:
      "Our BJSV-certified medical examiner conducts Fitness-to-Work health screenings (categories A2–A8), alongside customised wellness programmes for individuals and organisations.",
    image: "/assets/services/offshore.png",
  },
  {
    title: "Sleep Medicine",
    blurb: "Home-based sleep studies to detect obstructive sleep apnea.",
    details:
      "A comfortable home-based Sleep Study using the Medibyte Jr device detects and diagnoses sleep-related breathing disorders, most importantly obstructive sleep apnea.",
    image: "/assets/services/offshore.jpg",
  },
  {
    title: "ECG & Cardiac Stress Test",
    blurb: "Assessing your heart at rest and under exertion.",
    details:
      "Electrocardiograms detect heart abnormalities, while stress testing reveals how your heart responds during physical activity.",
    image: "/assets/services/cardio.jpg",
  },
  {
    title: "Ultrasound Services",
    blurb: "Pregnancy, 3D/4D, gynaecological and thyroid scans.",
    details:
      "Pregnancy dating and monitoring scans, 3D/4D imaging (best at 26–29 weeks), and gynaecological and thyroid scans. Advance booking is recommended.",
    image: "/assets/services/7.png",
  },
  {
    title: "Minor Surgeries",
    blurb: "Day procedures performed safely in clinic.",
    details:
      "Cyst aspiration, biopsies, foreign-body removal, incision and drainage, circumcision, mole excision, toenail removal and wound suturing.",
    image: "/assets/services/5_1.png",
  },
  {
    title: "Mental Health Services",
    blurb: "Compassionate support for your emotional wellbeing.",
    details:
      "Support for anxiety, depression, eating disorders, bipolar disorder and OCD. Around 1.5% of Bruneians experience some form of mental-health issue — you are not alone.",
    image: "/assets/services/6.png",
  },
  {
    title: "Home Visit Services",
    blurb: "Care that comes to you — for elderly and palliative patients.",
    details:
      "Primarily for elderly or physically disabled patients and for palliative care, delivered by a doctor and medical-assistant team in the comfort of your home.",
    image: "/assets/services/Untitled-design-3.png",
  },
  {
    title: "eVitaliv Online Consultation",
    blurb: "Quality medical care from the comfort of your home.",
    details:
      "An effective tool for non-emergency medical care — colds, sore throats, migraines, rashes, joint pain, prescription refills and mood disorders.",
    image: "/assets/evitaliv/download-1-1.png",
  },
];

export type Package = {
  name: string;
  audience: string;
  includes: string[];
  options?: string;
};

export const packages: Package[] = [
  {
    name: "Young & Active — Starter",
    audience: "Ages 18+",
    includes: [
      "Doctor consultation",
      "Body composition analysis",
      "Cardiovascular assessment & resting ECG",
      "Complete blood count",
      "Cholesterol panel & glucose testing",
      "Urine analysis",
    ],
  },
  {
    name: "Young & Active — Plus",
    audience: "Ages 18+",
    includes: [
      "Everything in the Starter package",
      "Treadmill stress ECG",
      "Expanded liver-function panel",
      "Electrolyte profile",
    ],
  },
  {
    name: "Cancer Screening — Women",
    audience: "Comprehensive",
    includes: [
      "Chest X-ray",
      "Breast (CA 15-3) & ovarian (CA 125) markers",
      "Cervical, liver, pancreatic & colorectal markers",
    ],
    options: "Optional cervical screening: Pap Smear $100 or HPV PCR $150",
  },
  {
    name: "Cancer Screening — Men",
    audience: "Comprehensive",
    includes: [
      "Chest X-ray",
      "Prostate (PSA) & testicular markers",
      "Bowel-tract & liver cancer screening",
    ],
  },
  {
    name: "My Health Status — Women",
    audience: "Full risk assessment",
    includes: [
      "Stress ECG",
      "Thyroid, hepatitis A/B & cancer markers",
      "Kidney & liver function tests",
    ],
    options: "Optional: Chest X-ray $40 · cervical screening",
  },
  {
    name: "My Health Status — Men",
    audience: "Full risk assessment",
    includes: [
      "Stress ECG",
      "Prostate & testicular markers",
      "Thyroid, hepatitis & kidney/liver panels",
    ],
    options: "Optional: Chest X-ray $40",
  },
];

export type Product = {
  name: string;
  price: string;
  desc: string;
  images?: string[];
};

export type ProductCategory = {
  category: string;
  blurb: string;
  items: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    category: "Respiratory",
    blurb: "Spacers, nebulisers and CPAP therapy for easier breathing.",
    items: [
      {
        name: "AeroChamber Plus Flow-Vu — Infant (0–18 months)",
        price: "$65",
        desc: "Anti-static valved holding chamber that improves medication delivery from a metered-dose inhaler.",
        images: [
          "/assets/products/product1_28.png",
          "/assets/products/product1_29.png",
          "/assets/products/product1_30.png",
          "/assets/products/product1_37.png",
        ],
      },
      {
        name: "AeroChamber Plus Flow-Vu — Kids (1–5 years)",
        price: "$65",
        desc: "Anti-static valved holding chamber sized for young children.",
        images: [
          "/assets/products/product3_36.png",
          "/assets/products/product3_38.png",
          "/assets/products/product3_39.png",
          "/assets/products/product3_46.png",
        ],
      },
      {
        name: "AeroChamber Plus Flow-Vu — Adult",
        price: "$73",
        desc: "Adult-sized valved holding chamber for MDI medication delivery.",
        images: [
          "/assets/products/product2_23.png",
          "/assets/products/product2_24.png",
          "/assets/products/product2_27.png",
          "/assets/products/product2_30.png",
          "/assets/products/product2_37.png",
        ],
      },
      {
        name: "VISIOMED Funhaler",
        price: "$85",
        desc: "Paediatric spacer with a whistle and spinning disk that makes asthma medication fun for children 18 months+.",
        images: [
          "/assets/products/product4_33.png",
          "/assets/products/product4_34.png",
          "/assets/products/product4_35.png",
        ],
      },
      {
        name: "FEELLIFE Air Pro Portable Mesh Nebulizer",
        price: "$85",
        desc: "Compact one-button nebuliser for home and office — colds, bronchitis, asthma and more.",
        images: [
          "/assets/products/product5_19.png",
          "/assets/products/product5_20.png",
          "/assets/products/product5_21.png",
          "/assets/products/product5_22.png",
          "/assets/products/product5_4.jpeg",
        ],
      },
      {
        name: "BMC G2S A20 Auto CPAP",
        price: "$1,600",
        desc: "Self-adjusting CPAP with integrated humidifier, 2.4\" colour screen and 28 dB operation.",
        images: [
          "/assets/products/product6_16.png",
          "/assets/products/product6_17.png",
          "/assets/products/product6_18.png",
        ],
      },
      {
        name: "BMC P2 Nasal Pillow Interface",
        price: "$128",
        desc: "Ultra-lightweight nasal pillow mask with minimal leakage — ideal for sensitive sleepers.",
        images: ["/assets/products/product7_5.jpeg"],
      },
    ],
  },
  {
    category: "Nasal Care",
    blurb: "Gentle irrigation for sinus, allergy and cold relief.",
    items: [
      {
        name: "NasalCare Starter Kit",
        price: "$55",
        desc: "Nasal irrigation system for flu, colds, sinusitis, allergy and post-nasal drip. Includes bottle + 30 pre-mix packets.",
      },
      {
        name: "NasalCare Nasal Rinse Mix Packets (30's)",
        price: "$45",
        desc: "Natural sea salt with minerals, calcium bicarbonate, citric acid, sodium citrate and aloe vera extract.",
      },
    ],
  },
  {
    category: "Skincare",
    blurb: "Dermatologically focused cleansers, sun protection and relief.",
    items: [
      { name: "CLn Facial Cleanser (3.4 oz)", price: "$47.50", desc: "Moisturising, gentle cleanser for normal and dry skin." },
      { name: "CLn BodyWash (8 oz)", price: "$53", desc: "Daily, hypoallergenic cleansing for ages 6 months and older." },
      { name: "CLn Acne Cleanser (3.4 oz)", price: "$47.50", desc: "Acne formula — benzoyl peroxide and benzene free." },
      { name: "CLn SportWash (12 oz)", price: "$61", desc: "Defends against grime, sweat, odour and bumps." },
      { name: "MCCM Oil-Free Sunscreen (50 ml)", price: "$55", desc: "SPF 50 sun cream that protects against sun exposure and blemishes." },
      { name: "MCCM Tinted Sunscreen (50 ml)", price: "$60", desc: "SPF 50+ in two shades; reduces photo-ageing and sunburn." },
      { name: "Hope's Relief Premium Eczema Cream (60 g)", price: "$37", desc: "Therapeutic relief for mild eczema, psoriasis and dermatitis." },
      { name: "Hope's Relief Gel Lotion (110 g)", price: "$30", desc: "Cooling lotion that soothes dry, itchy skin — safe for babies." },
    ],
  },
  {
    category: "Hearing Aids & Accessories",
    blurb: "State-of-the-art Signia hearing aids and everyday hearing protection.",
    items: [
      { name: "Signia Hearing Aid", price: "from $1,700", desc: "Bluetooth streaming of calls, music and TV with smartphone-app control." },
      { name: "Signia Cleaning Spray (30 ml)", price: "$30", desc: "Cleaning solution with brush for hearing aids and earmoulds." },
      { name: "Signia Drying Capsules", price: "$12", desc: "Silica-gel dehumidifier capsules that prolong hearing-aid life." },
      { name: "Signia Hearing Aid Batteries (6-pack)", price: "$18", desc: "Long-lasting batteries in sizes 10, 312, 13 and 675." },
      { name: "Customized Swimming Ear Plugs", price: "$280", desc: "Custom-moulded floating earplugs that create a perfect, comfortable seal." },
      { name: "Flents Seal-Rite Ear Plugs", price: "$35", desc: "Soft, mouldable silicone plugs that keep ears dry and block moderate noise." },
      { name: "Venetix Disposable Foam Earplug", price: "$1.50 / pair", desc: "Comfortable foam plugs with a high level of hearing protection." },
      { name: "3M Over-the-Head Earmuffs", price: "$120", desc: "Double-shell technology for noise exposures up to 105 dBA." },
    ],
  },
  {
    category: "Monitoring Devices",
    blurb: "Track the numbers that matter, at home.",
    items: [
      { name: "AccuQuik Wrist Blood Pressure Monitor", price: "$48", desc: "Automatic wrist device showing systolic, diastolic and pulse." },
      { name: "On Call Sure Blood Glucose Meter", price: "$60", desc: "Accepts multiple specimen types, stores 1000 results, 5-second readings." },
      { name: "ZONDAN Compact Pulse Oximeter A5", price: "$42", desc: "Fingertip oxygen-saturation device with a 4-way screen orientation." },
    ],
  },
];

export const evitalivConditions = [
  "Common colds",
  "Sore throats",
  "Migraines & headaches",
  "Skin rashes",
  "Joint pain",
  "Prescription refills",
  "Mood disorders",
  "General medical advice",
];

export type Doctor = {
  name: string;
  role: string;
  creds: string;
  image: string;
};

export const doctors: Doctor[] = [
  {
    name: "Dato Dr Hj Zulkarnain Hj Hanafi",
    role: "Otorhinolaryngologist (ENT)",
    creds: "MBChB (Liverpool); FRCSEd, FRCGP (Hon)",
    image: "/assets/about/Dato-Dr.-Zul.jpg",
  },
  {
    name: "Datin Dr Hjh Maslina Hj Mohsin",
    role: "Family Medicine Physician",
    creds: "MBChB (Glasgow); MRCGP, FRCGP",
    image: "/assets/about/Maslina.jpeg",
  },
  {
    name: "Dr Hjh Roslina Hj Metusin",
    role: "Family Medicine Physician",
    creds: "UK-trained; MRCGP",
    image: "/assets/about/Dr.-Roslina.jpeg",
  },
  {
    name: "Dr Hjh Harni Hj Awang Bahar",
    role: "Family Medicine Physician",
    creds: "UK-trained; MRCGP",
    image: "/assets/about/Dr.-Harni.jpeg",
  },
];

// First-name care-team gallery (audiologists, nurses, technicians & admin).
export const careTeam: { name: string; image: string }[] = [
  { name: "Amirah", image: "/assets/about/Amirah.jpeg" },
  { name: "Aifaa", image: "/assets/about/Aifaa.jpg" },
  { name: "Dk Minna", image: "/assets/about/Dk-Minna.jpg" },
  { name: "Madeehah", image: "/assets/about/Madeehah.jpeg" },
  { name: "Noraini", image: "/assets/about/Noraini.jpeg" },
  { name: "Nurtina", image: "/assets/about/Nurtina.jpg" },
  { name: "Sarimah", image: "/assets/about/Sarimah.jpeg" },
  { name: "Wani", image: "/assets/about/Wani.jpg" },
];

export const heroSlides = [
  {
    image: "/assets/home/1-5.png",
    title: "Ultrasound",
    text: "Whether you are new or seasoned parents, nothing beats the feeling of seeing your baby for the first time. Our 3D and 4D ultrasound monitors your baby's growth and development.",
  },
  {
    image: "/assets/home/2-6.png",
    title: "Ambulatory Sleep Studies",
    text: "Do you experience insomnia, sleepwalking or breathing problems when sleeping? Our sleep study detects any sleep-related breathing disorder — most importantly, obstructive sleep apnea.",
  },
  {
    image: "/assets/home/3-4.png",
    title: "Hearing Aids",
    text: "At Vitaliv Clinic we offer a wide selection of sizes and styles suitable for patients of all ages.",
  },
];
