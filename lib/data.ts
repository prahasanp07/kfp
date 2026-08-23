export interface Product {
  id: string;
  name: string;
  category: 'powders-mixes' | 'pickles' | 'savories' | 'sweets' | 'attas' | 'papads-heritage';
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  isSignature?: boolean;
  isBestseller?: boolean;
  priceEstimate: string;
  availableSizes: string[];
  ingredients: string[];
  shelfLife: string;
  accentColor?: string;
}

export const PRODUCTS: Product[] = [
  // 1. POWDERS & BATH MIXES
  {
    id: 'puliyogare-gojju',
    name: "Iyengar's Puliyogare Gojju",
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Traditional Temple Tamarind Paste',
    description: 'Authentic Melukote temple-style tangy and spicy tamarind paste simmered with organic jaggery, peanuts, dry coconut, and slow-roasted whole spices.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    isSignature: true,
    priceEstimate: '₹240 / 350g',
    availableSizes: ['350g', '500g', '1kg'],
    ingredients: ['Ripe Tamarind Pulp', 'Organic Jaggery', 'Dry Coconut (Kobbari)', 'Groundnuts', 'Curry Leaves', 'Sesame Oil', 'Mustard', 'Hing'],
    shelfLife: '9 Months',
    accentColor: '#10B981'
  },
  {
    id: 'vangibath-powder',
    name: 'Vangibath Powder',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Brinjal & Capsicum Spiced Rice Blend',
    description: 'Heritage Karnataka recipe slow-roasted with cinnamon, marathi moggu, cloves, copra, and lentils for rich and aromatic spiced rice dishes.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹190 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Coriander Seeds', 'Chana Dal', 'Urad Dal', 'Dry Red Chili', 'Cinnamon', 'Cloves', 'Marathi Moggu', 'Dry Coconut'],
    shelfLife: '6 Months',
    accentColor: '#F59E0B'
  },
  {
    id: 'rasam-powder',
    name: 'Rasam Powder',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Daily Aromatic Pepper & Cumin Blend',
    description: 'Handcrafted with handpicked Byadagi red chilies, whole Malabar black pepper, and cumin seeds for divine soul-soothing Iyengar rasam.',
    image: '/assets/pepper-rasam.JPG',
    isBestseller: true,
    priceEstimate: '₹180 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Byadagi Chili', 'Coriander Seeds', 'Black Pepper', 'Cumin', 'Fenugreek', 'Curry Leaves', 'Asafoetida (Hing)'],
    shelfLife: '6 Months',
    accentColor: '#E53935'
  },
  {
    id: 'sambar-powder',
    name: 'Sambar Powder',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Mysuru Traditional Daily Sambar Masala',
    description: 'Slow stone-ground aromatic blend that delivers the golden richness, subtle spice, and authentic fragrance of traditional South Indian feast sambar.',
    image: '/assets/sambar-powder.JPG',
    isSignature: true,
    priceEstimate: '₹180 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Red Chilies', 'Coriander Seeds', 'Chana Dal', 'Toor Dal', 'Fenugreek Seeds', 'Hing', 'Turmeric', 'Curry Leaves'],
    shelfLife: '6 Months',
    accentColor: '#3B82F6'
  },
  {
    id: 'bisibelebath-powder',
    name: 'Bisibelebath Powder',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Royal Hot Lentil Rice Masala',
    description: 'Elaborate spice blend featuring kapok buds, poppy seeds, cinnamon, and stone-ground spices for Karnataka’s iconic hot lentil rice feast.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹200 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Coriander', 'Red Chilies', 'Cinnamon', 'Cloves', 'Marathi Moggu', 'Poppy Seeds', 'Chana Dal', 'Fenugreek', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#D97706'
  },
  {
    id: 'chutney-powder',
    name: 'Chutney Powder',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Traditional Gunpowder for Idli, Dosa & Rice',
    description: 'Roasted gram, urad dal, dry coconut copra, and mild Byadagi chilies. Perfect accompaniment with steaming hot rice and melted ghee.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹150 / 200g',
    availableSizes: ['200g', '500g', '1kg'],
    ingredients: ['Chana Dal', 'Urad Dal', 'Dry Red Chili', 'Dry Coconut', 'Tamarind', 'Jaggery', 'Curry Leaves', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#E53935'
  },
  {
    id: 'huchellu-chutney-powder',
    name: 'Huchellu Chutney Powder',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Artisanal Roasted Niger Seed Pudi',
    description: 'Nutritious roasted niger seeds (Huchellu/Gurellu) ground with garlic-free traditional spices and rock salt. A Mysore specialty.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹160 / 200g',
    availableSizes: ['200g', '500g'],
    ingredients: ['Roasted Niger Seeds (Huchellu)', 'Byadagi Chili', 'Curry Leaves', 'Cumin', 'Rock Salt', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#1F2937'
  },
  {
    id: 'menasina-sarina-pudi',
    name: 'Menasina Sarina Pudi (Pepper Rasam)',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Therapeutic Black Pepper & Cumin Rasam Blend',
    description: 'Immunity-boosting traditional black pepper and cumin rasam powder known for soothing colds, aiding digestion, and deep warming flavor.',
    image: '/assets/pepper-rasam.JPG',
    priceEstimate: '₹190 / 200g',
    availableSizes: ['200g', '500g'],
    ingredients: ['Malabar Black Pepper', 'Cumin Seeds', 'Toor Dal', 'Curry Leaves', 'Dry Ginger', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#374151'
  },
  {
    id: 'kari-pudi-methi',
    name: 'Kari Pudi (Methi Pudi)',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Roasted Fenugreek Digestive Herbal Powder',
    description: 'Ancient digestive and restorative recipe roasted slowly with fenugreek, pepper, and lentils. Mix with steaming hot rice and fresh cow ghee.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹180 / 200g',
    availableSizes: ['200g', '500g'],
    ingredients: ['Fenugreek Seeds (Methi)', 'Black Pepper', 'Cumin', 'Toor Dal', 'Ghee Roasted Spices', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#92400E'
  },
  {
    id: 'curry-leaves-chutney-powder',
    name: 'Curry Leaves Chutney Powder',
    category: 'powders-mixes',
    categoryLabel: 'Powders & Bath Mixes',
    subtitle: 'Karibevu Chutney Pudi • Rich in Natural Iron',
    description: 'Freshly harvested farm curry leaves shade-dried and roasted with roasted lentils, rock salt, and spices. Rich in natural iron and aroma.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹160 / 200g',
    availableSizes: ['200g', '500g'],
    ingredients: ['Farm Fresh Curry Leaves', 'Chana Dal', 'Urad Dal', 'Dry Red Chili', 'Tamarind', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#065F46'
  },

  // 2. ARTISANAL PICKLES
  {
    id: 'mango-pickle-seasonal',
    name: 'Mango Pickle (Seasonal)',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Classic Mavina Uppinakayi',
    description: 'Tender raw country mango cubes cured with rock salt, freshly ground mustard, fiery Byadagi chili, and cold-pressed gingelly oil.',
    image: '/assets/pickles.JPG',
    isBestseller: true,
    priceEstimate: '₹220 / 300g',
    availableSizes: ['300g', '500g', '1kg'],
    ingredients: ['Raw Country Mango', 'Mustard Powder', 'Red Chili Powder', 'Cold-pressed Sesame Oil', 'Rock Salt', 'Turmeric', 'Hing'],
    shelfLife: '12 Months',
    accentColor: '#EAB308'
  },
  {
    id: 'citron-pickle',
    name: 'Citron Pickle (Herallikayi)',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Digestive Wild Citron Preserve',
    description: 'Rare wild citron (Herallikayi) slow-cured in earthenware jars. Celebrated for its unique bitter-tangy flavor and digestive wellness.',
    image: '/assets/pickles.JPG',
    priceEstimate: '₹240 / 300g',
    availableSizes: ['300g', '500g', '1kg'],
    ingredients: ['Wild Citron (Herallikayi)', 'Rock Salt', 'Mustard', 'Red Chili', 'Cold-pressed Gingelly Oil', 'Turmeric'],
    shelfLife: '12 Months',
    accentColor: '#F59E0B'
  },
  {
    id: 'lemon-pickle',
    name: 'Lemon Pickle (Nimbe Uppinakayi)',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Sun-Cured Fresh Yellow Lemon Pickle',
    description: 'Juicy thin-skinned Mysore lemons sun-matured with rock salt and seasoned with fenugreek and mustard tadka.',
    image: '/assets/pickles.JPG',
    priceEstimate: '₹190 / 300g',
    availableSizes: ['300g', '500g', '1kg'],
    ingredients: ['Fresh Lemons', 'Rock Salt', 'Red Chili Powder', 'Roasted Fenugreek', 'Mustard Seeds', 'Gingelly Oil'],
    shelfLife: '12 Months',
    accentColor: '#FBBF24'
  },
  {
    id: 'amtekai-pickle-seasonal',
    name: 'Amtekai Pickle (Seasonal)',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Wild Hog Plum Traditional Pickle',
    description: 'Seasonal forest delicacy wild hog plums pickled with authentic Iyengar masala for an unforgettable sour-spicy crunch.',
    image: '/assets/pickles.JPG',
    priceEstimate: '₹240 / 300g',
    availableSizes: ['300g', '500g', '1kg'],
    ingredients: ['Fresh Wild Hog Plums (Amtekai)', 'Mustard', 'Red Chili', 'Sesame Oil', 'Rock Salt', 'Turmeric'],
    shelfLife: '12 Months',
    accentColor: '#047857'
  },
  {
    id: 'nellikai-pickle-seasonal',
    name: 'Nellikai Pickle (Seasonal)',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Whole Indian Gooseberry / Amla Pickle',
    description: 'Vitamin C powerhouse wild gooseberries steamed and cured in spicy mustard-chili oil gravy.',
    image: '/assets/pickles.JPG',
    priceEstimate: '₹230 / 300g',
    availableSizes: ['300g', '500g', '1kg'],
    ingredients: ['Country Gooseberry (Nellikai)', 'Mustard Powder', 'Chili Powder', 'Rock Salt', 'Sesame Oil', 'Hing'],
    shelfLife: '12 Months',
    accentColor: '#15803D'
  },

  // 3. READY TO EAT - SAVORIES & SNACKS
  {
    id: 'chakkuli-ready',
    name: 'Chakkuli',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Hand-Pressed Crispy Spiral Savory',
    description: 'Crispy spiral snack made from roasted rice and urad dal flour with butter and cumin seeds. Perfectly crunchy and aromatic.',
    image: '/assets/chakkuli.JPG',
    isBestseller: true,
    priceEstimate: '₹160 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Rice Flour', 'Urad Dal', 'Butter', 'Cumin Seeds', 'Sesame', 'Cold-pressed Oil', 'Rock Salt'],
    shelfLife: '45 Days',
    accentColor: '#D97706'
  },
  {
    id: 'muchhore-ready',
    name: 'Muchhore',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Crispy Spiced Moong Dal Murukku',
    description: 'Delicate crispy festive savory prepared with roasted green gram flour and mild spices. Light, brittle, and delightful.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹160 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Rice Flour', 'Moong Dal (Hesaru Bele)', 'Butter', 'Red Chili Powder', 'Hing', 'Rock Salt'],
    shelfLife: '45 Days',
    accentColor: '#B45309'
  },
  {
    id: 'thenkol-ready',
    name: 'Thenkol (Thenkuzhal)',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Traditional Melt-in-Mouth Murukku',
    description: 'Classic white festive savory seasoned with cumin and hing. Perfectly crisp with a buttery melt-in-mouth texture.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹160 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Raw Rice Flour', 'Urad Flour', 'Fresh Butter', 'Cumin Seeds', 'Hing', 'Rock Salt'],
    shelfLife: '45 Days',
    accentColor: '#CA8A04'
  },
  {
    id: 'kodubale-ready',
    name: 'Kodubale',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Spicy Mysore Ring Crackers',
    description: 'Ring-shaped spicy crunchies kneaded with fresh grated coconut, roasted gram, ajwain (carom), and fiery red chili.',
    image: '/assets/kodbale.JPG',
    isSignature: true,
    priceEstimate: '₹170 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Rice Flour', 'Fried Gram', 'Fresh Coconut', 'Ajwain', 'Red Chili', 'Hing', 'Oil', 'Salt'],
    shelfLife: '45 Days',
    accentColor: '#DC2626'
  },
  {
    id: 'mixture-ready',
    name: 'Mixture',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Royal South Indian Spicy Crunch Mixture',
    description: 'Grand blend of crisp sev, boondi, roasted peanuts, fried curry leaves, roasted gram, and aromatic masala.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹150 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Gram Flour (Besan)', 'Rice Flour', 'Peanuts', 'Roasted Gram', 'Curry Leaves', 'Chili Powder', 'Hing', 'Salt'],
    shelfLife: '45 Days',
    accentColor: '#EA580C'
  },
  {
    id: 'khara-boondhi-ready',
    name: 'Khara Boondhi',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Crispy Pearl Droplets with Peanuts & Curry Leaves',
    description: 'Golden crunchy spiced chickpea flour droplets tossed with crunchy groundnuts, garlic-free hing, and fresh curry leaves.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹150 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Gram Flour (Besan)', 'Peanuts', 'Curry Leaves', 'Red Chili Powder', 'Hing', 'Refined Sunflower Oil', 'Salt'],
    shelfLife: '45 Days',
    accentColor: '#D97706'
  },
  {
    id: 'khara-avalakki-ready',
    name: 'Khara Avalakki',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Spiced Poha / Beaten Rice Mixture',
    description: 'Thin beaten rice roasted crisp with turmeric, groundnuts, dry copra slices, curry leaves, and green chilies.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹140 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Poha (Avalakki)', 'Groundnuts', 'Copra', 'Curry Leaves', 'Mustard', 'Turmeric', 'Green Chili', 'Salt'],
    shelfLife: '45 Days',
    accentColor: '#EAB308'
  },
  {
    id: 'congress-kadle-beeja-ready',
    name: 'Congress Kadle Beeja',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Bengaluru & Mysore Signature Spicy Peanuts',
    description: 'Split roasted peanuts seasoned with pepper, turmeric, curry leaves, and a generous pinch of asafoetida.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹140 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Split Peanuts (Kadle Beeja)', 'Black Pepper', 'Turmeric', 'Curry Leaves', 'Hing', 'Gingelly Oil', 'Salt'],
    shelfLife: '60 Days',
    accentColor: '#CA8A04'
  },
  {
    id: 'nippattu-ready',
    name: 'Nippattu',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Crispy Spiced Rice & Peanut Crackers',
    description: 'Thin flat disc crackers packed with crushed peanuts, roasted gram, sesame seeds, and spicy red chili seasoning.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹160 / 250g',
    availableSizes: ['250g', '500g', '1kg'],
    ingredients: ['Rice Flour', 'Peanuts', 'Fried Gram', 'White Sesame', 'Curry Leaves', 'Red Chili', 'Hing', 'Salt'],
    shelfLife: '45 Days',
    accentColor: '#DC2626'
  },

  // 4. TRADITIONAL SWEETS & DELICACIES
  {
    id: 'besan-laddu',
    name: 'Besan Laddu',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Pure Desi Ghee Gram Flour Ladoo',
    description: 'Slow-roasted fragrant besan rolled in rich pure cow ghee, organic sugar, green cardamom, and crunchy cashews.',
    image: '/assets/besan-ladoo.JPG',
    isBestseller: true,
    priceEstimate: '₹320 / 500g',
    availableSizes: ['500g', '1kg'],
    ingredients: ['Pure Desi Ghee', 'Gram Flour (Besan)', 'Sugar / Boora', 'Cardamom', 'Cashews', 'Raisins'],
    shelfLife: '30 Days',
    accentColor: '#D97706'
  },
  {
    id: 'jaggery-coconut-burfi',
    name: 'Jaggery Coconut Burfi',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Kobbari Mithai with Organic Jaggery',
    description: 'Freshly grated coconut cooked slowly with rich sugarcane jaggery and scented with green cardamom. Zero refined sugar.',
    image: '/assets/group-1.JPG',
    isSignature: true,
    priceEstimate: '₹300 / 500g',
    availableSizes: ['500g', '1kg'],
    ingredients: ['Fresh Grated Coconut', 'Organic Jaggery', 'Pure Cow Ghee', 'Cardamom'],
    shelfLife: '20 Days',
    accentColor: '#92400E'
  },
  {
    id: 'sajjappa-sweet',
    name: 'Sajjappa',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Festive Stuffed Coconut-Jaggery Pastry',
    description: 'Classical Karnataka festival delicacy made of crispy golden crust stuffed with delicious sweet coconut-jaggery puran.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹180 / 6 pcs',
    availableSizes: ['6 pcs', '12 pcs', '24 pcs'],
    ingredients: ['Wheat Flour', 'Rava', 'Grated Coconut', 'Jaggery', 'Poppy Seeds', 'Cardamom', 'Pure Ghee'],
    shelfLife: '10 Days',
    accentColor: '#B45309'
  },
  {
    id: 'aralu-unde-sweet',
    name: 'Aralu Unde',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Puffed Paddy Sweet Jaggery Ladoo',
    description: 'Light, airy puffed paddy (Aralu) coated in crystallized organic jaggery syrup and roasted coconut flakes.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹150 / 250g',
    availableSizes: ['250g', '500g'],
    ingredients: ['Puffed Paddy (Aralu)', 'Organic Jaggery', 'Dry Coconut', 'Cardamom'],
    shelfLife: '30 Days',
    accentColor: '#CA8A04'
  },
  {
    id: 'pari-unde-sweet',
    name: 'Pari Unde',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Roasted Gram & Jaggery Sweet Spheres',
    description: 'Wholesome traditional protein-rich spheres made from powdered fried gram, jaggery syrup, and aromatic cardamom.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹150 / 250g',
    availableSizes: ['250g', '500g'],
    ingredients: ['Roasted Gram (Hurigadale)', 'Jaggery', 'Ghee', 'Cardamom'],
    shelfLife: '30 Days',
    accentColor: '#D97706'
  },

  // 5. ATTAS & SPECIALTY FLOURS
  {
    id: 'chakkuli-atta',
    name: 'Chakkuli Atta',
    category: 'attas',
    categoryLabel: 'Attas & Flours',
    subtitle: 'Pre-Roasted Ready Chakkuli Flour Blend',
    description: 'Perfectly measured and roasted blend of rice and urad dal flour with secret spices. Just add water and butter to press instant crispy chakkulis.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹130 / 500g',
    availableSizes: ['500g', '1kg'],
    ingredients: ['Roasted Rice Flour', 'Urad Dal Flour', 'Cumin', 'Sesame Seeds', 'Hing', 'Rock Salt'],
    shelfLife: '6 Months',
    accentColor: '#E53935'
  },
  {
    id: 'muchhore-atta',
    name: 'Hesaru Bele Muchchoore Atta',
    category: 'attas',
    categoryLabel: 'Attas & Flours',
    subtitle: 'Moong Dal Murukku Ready Mix',
    description: 'Traditional mix of stone-ground rice and yellow moong dal flour for making authentic crispy Muchhore easily at home.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹140 / 500g',
    availableSizes: ['500g', '1kg'],
    ingredients: ['Rice Flour', 'Roasted Moong Dal (Hesaru Bele)', 'Hing', 'Spices', 'Rock Salt'],
    shelfLife: '6 Months',
    accentColor: '#059669'
  },
  {
    id: 'thenkol-atta',
    name: 'Thenkol Atta',
    category: 'attas',
    categoryLabel: 'Attas & Flours',
    subtitle: 'Fine Festive Thenkuzhal Flour Blend',
    description: 'Ultra-smooth traditional flour made from washed, dried, and ground rice with mild urad dal for festival snacks.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹130 / 500g',
    availableSizes: ['500g', '1kg'],
    ingredients: ['Processed Rice Flour', 'Urad Flour', 'Cumin', 'Hing', 'Salt'],
    shelfLife: '6 Months',
    accentColor: '#6B7280'
  },

  // 6. PAPADS & HERITAGE ITEMS
  {
    id: 'rice-papad',
    name: 'Rice Papad (Akki Happala)',
    category: 'papads-heritage',
    categoryLabel: 'Papads & Heritage',
    subtitle: 'Sun-Dried Spiced Rice Papads',
    description: 'Crisp sun-dried spiced rice papads seasoned with cumin, green chilies, and hing. Puffs up huge and crispy upon frying.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹130 / 200g',
    availableSizes: ['200g (25 pcs)', '500g'],
    ingredients: ['Rice Paste', 'Cumin Seeds', 'Green Chili', 'Hing', 'Rock Salt'],
    shelfLife: '12 Months',
    accentColor: '#F59E0B'
  },
  {
    id: 'aralu-sandige',
    name: 'Aralu Sandige',
    category: 'papads-heritage',
    categoryLabel: 'Papads & Heritage',
    subtitle: 'Puffed Rice Sun-Dried Fryums',
    description: 'Light, melt-in-mouth traditional fryums made from soaked puffed paddy, fresh buttermilk, and mild green chili.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹140 / 200g',
    availableSizes: ['200g', '500g'],
    ingredients: ['Puffed Paddy (Aralu)', 'Buttermilk (Majjige)', 'Green Chilies', 'Cumin', 'Salt'],
    shelfLife: '12 Months',
    accentColor: '#10B981'
  },
  {
    id: 'peni-chiroti',
    name: 'Peni (Sweet Chiroti)',
    category: 'papads-heritage',
    categoryLabel: 'Papads & Heritage',
    subtitle: 'Delicate Layered Festival Sweet',
    description: 'Ultra-thin, flaky layered circular discs served with warm badam milk or powdered sugar during auspicious functions.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹180 / 10 pcs',
    availableSizes: ['10 pcs Box', '20 pcs Box'],
    ingredients: ['Fine Rava (Chiroti Rava)', 'Pure Desi Ghee', 'Rice Starch', 'Cardamom'],
    shelfLife: '20 Days',
    accentColor: '#EC4899'
  },
  {
    id: 'poonal-janivara',
    name: 'Poonal (Janivara)',
    category: 'papads-heritage',
    categoryLabel: 'Papads & Heritage',
    subtitle: 'Sacred Consecrated Yajnopavita Threads',
    description: 'Traditional hand-spun pure cotton sacred threads prepared according to Vedic ritual specifications for auspicious ceremonies.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹90 / Pack of 3',
    availableSizes: ['Pack of 3', 'Pack of 6', 'Pack of 12'],
    ingredients: ['100% Pure Organic Handspun Cotton'],
    shelfLife: 'Non-perishable',
    accentColor: '#4B5563'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: "The Puliyogare gojju takes me straight back to my grandmother's kitchen in Mysore. It's rare to find such uncompromised authenticity today.",
    author: "Sridevi Iyengar",
    initials: "SR",
    role: "Verified Patron",
    rating: 5,
    location: "Mysuru"
  },
  {
    id: '2',
    quote: "The masalas are excellent—clean, fresh, and incredibly tasty. The flavors are truly authentic and well-balanced, enhancing every dish.",
    author: "Ranjeet Singh",
    initials: "RS",
    role: "Verified Patron",
    rating: 5,
    location: "Bengaluru"
  },
  {
    id: '3',
    quote: "Really all your preparations using healthy ingredients are absolutely delicious, you have outdone yourself, making us feel homely.",
    author: "Ramamani R",
    initials: "RR",
    role: "Verified Patron",
    rating: 5,
    location: "Chennai"
  },
  {
    id: '4',
    quote: "Ordered Rasam powder and Mango Tokku for my parents in the US. The packaging was immaculate and the aroma upon opening was heavenly!",
    author: "Anantharaman K.",
    initials: "AK",
    role: "Verified Patron",
    rating: 5,
    location: "Mysuru / California"
  }
];

export const BRAND_STORY_STEPS = [
  {
    id: 'birth',
    title: 'BIRTH OF KFP',
    year: '2017',
    badge: 'Origin • Founder Smt. Vydehi',
    text: 'KFP emerged from a passionate desire and modest investment by Smt. Vydehi, serving authentic Iyengar culinary delicacies to food lovers. Like a handwritten recipe passed down through generations, Keshavashree Food Products is a living testament to sacred Mysuru culinary traditions.',
    image: '/assets/vydehi.png',
    highlight: 'Handwritten heritage recipes preserved with zero commercial additives.'
  },
  {
    id: 'passion',
    title: 'THE PASSION',
    year: 'Artisanal Craft',
    badge: 'Commitment',
    text: 'A lifelong devotion to authentic Iyengar recipes passed down through generations — no shortcuts, no preservatives. Every blend, every pickle, and every powder is an artifact of this heritage—meticulously crafted and stone-ground.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    highlight: 'Slow iron-kadhai dry-roasting and unhurried stone pounding.'
  },
  {
    id: 'mission',
    title: 'THE MISSION',
    year: 'To Every Hearth',
    badge: 'Purpose',
    text: 'To bring the comfort and nostalgia of pure homemade Iyengar food to families across India and abroad. Handcrafted powders, pickles, snacks, festival delicacies, and pooja items, made fresh to order.',
    image: '/assets/group-1.JPG',
    highlight: 'Worldwide shipping and made-to-order festive fresh preparations.'
  }
];
