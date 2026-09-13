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

export function calculateItemPrice(product: Product, size: string): { unitPrice: number | null; formatted: string } {
  if (product.priceEstimate.toLowerCase().includes('seasonal')) {
    return { unitPrice: null, formatted: 'Seasonal' };
  }

  const match = product.priceEstimate.match(/₹\s*(\d+)/);
  if (!match) {
    return { unitPrice: null, formatted: product.priceEstimate };
  }
  const basePrice = parseInt(match[1], 10);

  if (product.priceEstimate.includes('1 kg') || product.priceEstimate.includes('1kg')) {
    const s = size.toLowerCase().replace(/\s+/g, '');
    if (s.includes('250')) {
      const p = Math.round(basePrice * 0.25);
      return { unitPrice: p, formatted: `₹${p}` };
    }
    if (s.includes('500')) {
      const p = Math.round(basePrice * 0.5);
      return { unitPrice: p, formatted: `₹${p}` };
    }
    if (s.includes('750')) {
      const p = Math.round(basePrice * 0.75);
      return { unitPrice: p, formatted: `₹${p}` };
    }
    if (s.includes('1kg')) {
      return { unitPrice: basePrice, formatted: `₹${basePrice}` };
    }
  }

  return { unitPrice: basePrice, formatted: `₹${basePrice}` };
}

export const PRODUCTS: Product[] = [
  // 1. PUDIS & BATH MIXES (13 items)
  {
    id: 'puliyogare-gojju',
    name: "Iyengar's Puliyogre Gojju",
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Traditional Temple Tamarind Paste',
    description: 'Authentic Melukote temple-style tangy and spicy tamarind paste simmered with organic jaggery, peanuts, dry coconut, and slow-roasted whole spices.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    isSignature: true,
    isBestseller: true,
    priceEstimate: '₹540 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Ripe Tamarind Pulp', 'Organic Jaggery', 'Dry Coconut (Kobbari)', 'Groundnuts', 'Curry Leaves', 'Sesame Oil', 'Mustard', 'Hing'],
    shelfLife: '9 Months',
    accentColor: '#10B981'
  },
  {
    id: 'vangibath-powder',
    name: 'Vangibath Powder',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Brinjal & Capsicum Spiced Rice Blend',
    description: 'Heritage Karnataka recipe slow-roasted with cinnamon, marathi moggu, cloves, copra, and lentils for rich and aromatic spiced rice dishes.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹600 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Coriander Seeds', 'Chana Dal', 'Urad Dal', 'Dry Red Chili', 'Cinnamon', 'Cloves', 'Marathi Moggu', 'Dry Coconut'],
    shelfLife: '6 Months',
    accentColor: '#F59E0B'
  },
  {
    id: 'rasam-powder',
    name: 'Rasam Powder',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Daily Aromatic Pepper & Cumin Blend',
    description: 'Handcrafted with handpicked Byadagi red chilies, whole Malabar black pepper, and cumin seeds for divine soul-soothing Iyengar rasam.',
    image: '/assets/pepper-rasam.JPG',
    isBestseller: true,
    priceEstimate: '₹640 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Byadagi Chili', 'Coriander Seeds', 'Black Pepper', 'Cumin', 'Fenugreek', 'Curry Leaves', 'Asafoetida (Hing)'],
    shelfLife: '6 Months',
    accentColor: '#E53935'
  },
  {
    id: 'sambar-powder',
    name: 'Sambar Powder',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Mysuru Traditional Daily Sambar Masala',
    description: 'Slow stone-ground aromatic blend that delivers the golden richness, subtle spice, and authentic fragrance of traditional South Indian feast sambar.',
    image: '/assets/sambar-powder.JPG',
    isSignature: true,
    priceEstimate: '₹600 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Red Chilies', 'Coriander Seeds', 'Chana Dal', 'Toor Dal', 'Fenugreek Seeds', 'Hing', 'Turmeric', 'Curry Leaves'],
    shelfLife: '6 Months',
    accentColor: '#3B82F6'
  },
  {
    id: 'bisibelebath-powder',
    name: 'Bisibelebath Powder',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Royal Hot Lentil Rice Masala',
    description: 'Elaborate spice blend featuring kapok buds, poppy seeds, cinnamon, and stone-ground spices for Karnataka’s iconic hot lentil rice feast.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹600 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Coriander', 'Red Chilies', 'Cinnamon', 'Cloves', 'Marathi Moggu', 'Poppy Seeds', 'Chana Dal', 'Fenugreek', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#D97706'
  },
  {
    id: 'menasina-sarina-pudi',
    name: 'Menasina Sarina Pudi (Pepper Rasam Powder)',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Therapeutic Black Pepper & Cumin Rasam Blend',
    description: 'Immunity-boosting traditional black pepper and cumin rasam powder known for soothing colds, aiding digestion, and deep warming flavor.',
    image: '/assets/pepper-rasam.JPG',
    priceEstimate: '₹640 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Malabar Black Pepper', 'Cumin Seeds', 'Toor Dal', 'Curry Leaves', 'Dry Ginger', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#374151'
  },
  {
    id: 'chutney-powder',
    name: 'Chutney Powder',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Traditional Gunpowder for Idli, Dosa & Rice',
    description: 'Roasted gram, urad dal, dry coconut copra, and mild Byadagi chilies. Perfect accompaniment with steaming hot rice and melted ghee.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹640 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Chana Dal', 'Urad Dal', 'Dry Red Chili', 'Dry Coconut', 'Tamarind', 'Jaggery', 'Curry Leaves', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#E53935'
  },
  {
    id: 'huchellu-chutney-powder',
    name: 'Hucchhelu Chutney Powder',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Artisanal Roasted Niger Seed Pudi',
    description: 'Nutritious roasted niger seeds (Huchellu/Gurellu) ground with garlic-free traditional spices and rock salt. A Mysore specialty.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹640 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Roasted Niger Seeds (Huchellu)', 'Byadagi Chili', 'Curry Leaves', 'Cumin', 'Rock Salt', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#1F2937'
  },
  {
    id: 'kari-pudi-methi',
    name: 'Kari Pudi (Methi Powder)',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Roasted Fenugreek Digestive Herbal Powder',
    description: 'Ancient digestive and restorative recipe roasted slowly with fenugreek, pepper, and lentils. Mix with steaming hot rice and fresh cow ghee.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹600 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Fenugreek Seeds (Methi)', 'Black Pepper', 'Cumin', 'Toor Dal', 'Ghee Roasted Spices', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#92400E'
  },
  {
    id: 'curry-leaves-chutney-powder',
    name: 'Curry Leaves Chutney Powder',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Karibevu Chutney Pudi • Rich in Natural Iron',
    description: 'Freshly harvested farm curry leaves shade-dried and roasted with roasted lentils, rock salt, and spices. Rich in natural iron and aroma.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹640 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Farm Fresh Curry Leaves', 'Chana Dal', 'Urad Dal', 'Dry Red Chili', 'Tamarind', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#065F46'
  },
  {
    id: 'majjige-huli-mix',
    name: 'Majjige Huli Mix',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Traditional Curd / Buttermilk Stew Blend',
    description: 'Aromatic heirloom recipe made with roasted chana dal, coriander seeds, cumin, and mild spices for authentic Karnataka-style Majjige Huli.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹640 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Coriander Seeds', 'Cumin Seeds', 'Chana Dal', 'Dry Red Chili', 'Fenugreek', 'Curry Leaves', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#D97706'
  },
  {
    id: 'kolambu-mix',
    name: 'Kolambu Mix',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Tangy Spicy Gravy / Kuzhambu Masala',
    description: 'Slow stone-ground aromatic blend crafted for South Indian tangy, rich, and flavorful tamarind-based gravies.',
    image: '/assets/sambar-powder.JPG',
    priceEstimate: '₹640 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Coriander Seeds', 'Toor Dal', 'Chana Dal', 'Red Chilies', 'Black Pepper', 'Fenugreek', 'Curry Leaves'],
    shelfLife: '6 Months',
    accentColor: '#EA580C'
  },
  {
    id: 'gojju-avalakki-mix',
    name: 'Gojju Avalakki Mix',
    category: 'powders-mixes',
    categoryLabel: 'Pudis & Mixes',
    subtitle: 'Spicy-Sweet Tamarind Poha Ready Mix',
    description: 'Classic Karnataka breakfast specialty blend of tamarind pulp, organic jaggery, sesame seeds, and roasted ground spices for instant Gojju Avalakki.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    priceEstimate: '₹380 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Tamarind Pulp', 'Organic Jaggery', 'Dry Coconut Copra', 'White Sesame', 'Red Chili', 'Mustard', 'Curry Leaves', 'Hing'],
    shelfLife: '6 Months',
    accentColor: '#92400E'
  },

  // 2. ATTAS & FLOURS (3 items)
  {
    id: 'chakkuli-atta',
    name: 'Chakkuli Atta',
    category: 'attas',
    categoryLabel: 'Attas & Flours',
    subtitle: 'Pre-Roasted Ready Chakkuli Flour Blend',
    description: 'Perfectlys measured and roasted blend of rice and urad dal flour with secret spices. Just add water and butter to press instant crispy chakkulis.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹320 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Roasted Rice Flour', 'Urad Dal Flour', 'Cumin', 'Sesame Seeds', 'Hing', 'Rock Salt'],
    shelfLife: '6 Months',
    accentColor: '#E53935'
  },
  {
    id: 'thenkol-atta',
    name: 'Tengkol Atta',
    category: 'attas',
    categoryLabel: 'Attas & Flours',
    subtitle: 'Fine Festive Thenkuzhal Flour Blend',
    description: 'Ultra-smooth traditional flour made from washed, dried, and ground rice with mild urad dal for festival thenkol snacks.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹300 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Processed Rice Flour', 'Urad Flour', 'Cumin', 'Hing', 'Salt'],
    shelfLife: '6 Months',
    accentColor: '#6B7280'
  },
  {
    id: 'muchhore-atta',
    name: 'Mucchhore Atta',
    category: 'attas',
    categoryLabel: 'Attas & Flours',
    subtitle: 'Moong Dal Murukku Ready Mix',
    description: 'Traditional mix of stone-ground rice and yellow moong dal flour for making authentic crispy Muchhore easily at home.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹320 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Rice Flour', 'Roasted Moong Dal (Hesaru Bele)', 'Hing', 'Spices', 'Rock Salt'],
    shelfLife: '6 Months',
    accentColor: '#059669'
  },

  // 3. ARTISANAL PICKLES (5 items)
  {
    id: 'nellikai-pickle-seasonal',
    name: 'Nellikai Pickle (Seasonal)',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Whole Indian Gooseberry / Amla Pickle',
    description: 'Vitamin C powerhouse wild gooseberries steamed and cured in spicy mustard-chili oil gravy. Prepared during harvest season.',
    image: '/assets/pickles.JPG',
    priceEstimate: 'Seasonal (Ask for availability)',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Country Gooseberry (Nellikai)', 'Mustard Powder', 'Chili Powder', 'Rock Salt', 'Sesame Oil', 'Hing'],
    shelfLife: '12 Months',
    accentColor: '#15803D'
  },
  {
    id: 'mango-pickle-seasonal',
    name: 'Mango Pickle (Seasonal)',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Classic Mavina Uppinakayi',
    description: 'Tender raw country mango cubes cured with rock salt, freshly ground mustard, fiery Byadagi chili, and cold-pressed gingelly oil.',
    image: '/assets/pickles.JPG',
    isBestseller: true,
    priceEstimate: '₹450 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Raw Country Mango', 'Mustard Powder', 'Red Chili Powder', 'Cold-pressed Sesame Oil', 'Rock Salt', 'Turmeric', 'Hing'],
    shelfLife: '12 Months',
    accentColor: '#EAB308'
  },
  {
    id: 'citron-pickle',
    name: 'Citron Pickle',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Digestive Wild Citron Preserve (Herallikayi)',
    description: 'Rare wild citron (Herallikayi) slow-cured in earthenware jars. Celebrated for its unique bitter-tangy flavor and digestive wellness.',
    image: '/assets/pickles.JPG',
    priceEstimate: '₹350 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Wild Citron (Herallikayi)', 'Rock Salt', 'Mustard', 'Red Chili', 'Cold-pressed Gingelly Oil', 'Turmeric'],
    shelfLife: '12 Months',
    accentColor: '#F59E0B'
  },
  {
    id: 'lemon-pickle',
    name: 'Lemon Pickle',
    category: 'pickles',
    categoryLabel: 'Artisanal Pickles',
    subtitle: 'Sun-Cured Fresh Yellow Lemon Pickle (Nimbe)',
    description: 'Juicy thin-skinned Mysore lemons sun-matured with rock salt and seasoned with fenugreek and mustard tadka.',
    image: '/assets/pickles.JPG',
    priceEstimate: '₹320 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
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
    priceEstimate: 'Seasonal (Ask for availability)',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Fresh Wild Hog Plums (Amtekai)', 'Mustard', 'Red Chili', 'Sesame Oil', 'Rock Salt', 'Turmeric'],
    shelfLife: '12 Months',
    accentColor: '#047857'
  },

  // 4. READY TO EAT - SAVORIES & SNACKS (8 items)
  {
    id: 'muchhore-ready',
    name: 'Mucchhore',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Crispy Spiced Moong Dal Murukku',
    description: 'Delicate crispy festive savory prepared with roasted green gram flour and mild spices. Light, brittle, and delightful.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹85 / 1 pkt (8 pcs)',
    availableSizes: ['1 pkt (8 pcs)'],
    ingredients: ['Rice Flour', 'Moong Dal (Hesaru Bele)', 'Butter', 'Red Chili Powder', 'Hing', 'Rock Salt'],
    shelfLife: '45 Days',
    accentColor: '#B45309'
  },
  {
    id: 'thenkol-ready',
    name: 'Thenkol',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Traditional Melt-in-Mouth Murukku',
    description: 'Classic white festive savory seasoned with cumin and hing. Perfectly crisp with a buttery melt-in-mouth texture.',
    image: '/assets/chakkuli.JPG',
    priceEstimate: '₹85 / 1 pkt (8 pcs)',
    availableSizes: ['1 pkt (8 pcs)'],
    ingredients: ['Raw Rice Flour', 'Urad Flour', 'Fresh Butter', 'Cumin Seeds', 'Hing', 'Rock Salt'],
    shelfLife: '45 Days',
    accentColor: '#CA8A04'
  },
  {
    id: 'kodubale-ready',
    name: 'Kodbale',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Spicy Mysore Ring Crackers',
    description: 'Ring-shaped spicy crunchies kneaded with fresh grated coconut, roasted gram, ajwain (carom), and fiery red chili.',
    image: '/assets/kodbale.JPG',
    isSignature: true,
    priceEstimate: '₹75 / 1 pkt (10 pcs)',
    availableSizes: ['1 pkt (10 pcs)'],
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
    priceEstimate: '₹320 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Gram Flour (Besan)', 'Rice Flour', 'Peanuts', 'Roasted Gram', 'Curry Leaves', 'Chili Powder', 'Hing', 'Salt'],
    shelfLife: '45 Days',
    accentColor: '#EA580C'
  },
  {
    id: 'khara-boondhi-ready',
    name: 'Khara Boondi',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Crispy Pearl Droplets with Peanuts & Curry Leaves',
    description: 'Golden crunchy spiced chickpea flour droplets tossed with crunchy groundnuts, garlic-free hing, and fresh curry leaves.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹320 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
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
    priceEstimate: '₹320 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Poha (Avalakki)', 'Groundnuts', 'Copra', 'Curry Leaves', 'Mustard', 'Turmeric', 'Green Chili', 'Salt'],
    shelfLife: '45 Days',
    accentColor: '#EAB308'
  },
  {
    id: 'congress-kadle-beeja-ready',
    name: 'Congress Kadlekai',
    category: 'savories',
    categoryLabel: 'Ready-To-Eat Savories',
    subtitle: 'Bengaluru & Mysore Signature Spicy Peanuts',
    description: 'Split roasted peanuts seasoned with pepper, turmeric, curry leaves, and a generous pinch of asafoetida.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹360 / 1 kg',
    availableSizes: ['250gms', '500gms', '750gms', '1kg'],
    ingredients: ['Split Peanuts (Kadle Kai)', 'Black Pepper', 'Turmeric', 'Curry Leaves', 'Hing', 'Gingelly Oil', 'Salt'],
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
    priceEstimate: '₹85 / 1 pkt (10 pcs)',
    availableSizes: ['1 pkt (10 pcs)'],
    ingredients: ['Rice Flour', 'Peanuts', 'Fried Gram', 'White Sesame', 'Curry Leaves', 'Red Chili', 'Hing', 'Salt'],
    shelfLife: '45 Days',
    accentColor: '#DC2626'
  },

  // 5. TRADITIONAL SWEETS & DELICACIES (7 items)
  {
    id: 'besan-laddu',
    name: 'Besan Laddu',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Pure Desi Ghee Gram Flour Ladoo',
    description: 'Slow-roasted fragrant besan rolled in rich pure cow ghee, organic sugar, green cardamom, and crunchy cashews.',
    image: '/assets/besan-ladoo.JPG',
    isBestseller: true,
    priceEstimate: '₹80 / 1 pkt (6 pcs)',
    availableSizes: ['1 pkt (6 pcs)'],
    ingredients: ['Pure Desi Ghee', 'Gram Flour (Besan)', 'Sugar / Boora', 'Cardamom', 'Cashews', 'Raisins'],
    shelfLife: '30 Days',
    accentColor: '#D97706'
  },
  {
    id: 'jaggery-coconut-burfi',
    name: 'Jaggery Coconut Barfi',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Kobbari Mithai with Organic Jaggery',
    description: 'Freshly grated coconut cooked slowly with rich sugarcane jaggery and scented with green cardamom. Zero refined sugar.',
    image: '/assets/group-1.JPG',
    isSignature: true,
    priceEstimate: '₹75 / 1 pkt (8 pcs)',
    availableSizes: ['1 pkt (8 pcs)'],
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
    priceEstimate: '₹85 / 1 pkt (5 pcs)',
    availableSizes: ['1 pkt (5 pcs)'],
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
    priceEstimate: '₹35 / 1 pkt (2 pcs)',
    availableSizes: ['1 pkt (2 pcs)'],
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
    priceEstimate: '₹35 / 1 pkt (2 pcs)',
    availableSizes: ['1 pkt (2 pcs)'],
    ingredients: ['Roasted Gram (Hurigadale)', 'Jaggery', 'Ghee', 'Cardamom'],
    shelfLife: '30 Days',
    accentColor: '#D97706'
  },
  {
    id: 'kadle-kai-unde',
    name: 'Kadle Kai Unde',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Crunchy Peanut & Jaggery Spheres',
    description: 'Wholesome traditional Mysore peanut chikki/ladoo balls crafted with slow-roasted split groundnuts and rich organic sugarcane jaggery syrup.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹80 / 1 pkt (5 pcs)',
    availableSizes: ['1 pkt (5 pcs)'],
    ingredients: ['Roasted Peanuts (Kadle Kai)', 'Organic Jaggery', 'Cardamom', 'Pure Ghee'],
    shelfLife: '45 Days',
    accentColor: '#EA580C'
  },
  {
    id: 'pulangai-unde',
    name: 'Pulangai Unde',
    category: 'sweets',
    categoryLabel: 'Traditional Sweets',
    subtitle: 'Festive Sesame & Dry Coconut Sweet Spheres',
    description: 'Auspicious traditional Iyengar festival sweet prepared with fragrant roasted sesame seeds, copra (dry coconut), cardamom, and pure jaggery syrup.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹80 / 1 pkt (5 pcs)',
    availableSizes: ['1 pkt (5 pcs)'],
    ingredients: ['Roasted White Sesame', 'Dry Coconut Copra', 'Organic Jaggery', 'Cardamom', 'Pure Ghee'],
    shelfLife: '30 Days',
    accentColor: '#78350F'
  },

  // 6. PAPADS & OTHERS (4 items)
  {
    id: 'rice-papad',
    name: 'Rice Pappad',
    category: 'papads-heritage',
    categoryLabel: 'Others & Heritage',
    subtitle: 'Sun-Dried Spiced Rice Papads (Happala)',
    description: 'Crisp sun-dried spiced rice papads seasoned with cumin, green chilies, and hing. Puffs up huge and crispy upon frying.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹50 / 1 pkt',
    availableSizes: ['1 pkt'],
    ingredients: ['Rice Paste', 'Cumin Seeds', 'Green Chili', 'Hing', 'Rock Salt'],
    shelfLife: '12 Months',
    accentColor: '#F59E0B'
  },
  {
    id: 'aralu-sandige',
    name: 'Aralu Sandige',
    category: 'papads-heritage',
    categoryLabel: 'Others & Heritage',
    subtitle: 'Puffed Rice Sun-Dried Fryums',
    description: 'Light, melt-in-mouth traditional fryums made from soaked puffed paddy, fresh buttermilk, and mild green chili.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹90 / 1 pkt',
    availableSizes: ['1 pkt'],
    ingredients: ['Puffed Paddy (Aralu)', 'Buttermilk (Majjige)', 'Green Chilies', 'Cumin', 'Salt'],
    shelfLife: '12 Months',
    accentColor: '#10B981'
  },
  {
    id: 'peni-chiroti',
    name: 'Peni',
    category: 'papads-heritage',
    categoryLabel: 'Others & Heritage',
    subtitle: 'Delicate Layered Festival Sweet (Chiroti)',
    description: 'Ultra-thin, flaky layered circular discs served with warm badam milk or powdered sugar during auspicious functions.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹80 / 1 pkt',
    availableSizes: ['1 pkt'],
    ingredients: ['Fine Rava (Chiroti Rava)', 'Pure Desi Ghee', 'Rice Starch', 'Cardamom'],
    shelfLife: '20 Days',
    accentColor: '#EC4899'
  },
  {
    id: 'poonal-janivara',
    name: 'Poonal (Janivara)',
    category: 'papads-heritage',
    categoryLabel: 'Others & Heritage',
    subtitle: 'Sacred Consecrated Yajnopavita Threads',
    description: 'Traditional hand-spun pure cotton sacred threads prepared according to Vedic ritual specifications for auspicious ceremonies.',
    image: '/assets/group-1.JPG',
    priceEstimate: '₹15 / 1 set',
    availableSizes: ['1 set'],
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

export const FOUNDER_INFO = {
  name: 'Smt. Vydehi Ranganath',
  role: 'Founder & Master Craftsman',
  age: 56,
  startAge: 47,
  foundedYear: '2017',
  seedInvestment: '₹800',
  annualTurnover: '₹12–13 Lakhs',
  location: 'V.V. Mohalla, Mysuru',
  family: 'Sri Ranganath (Husband) & Daughter',
  image: '/assets/vydehi.png',
  youtubeUrl: 'https://youtu.be/Ab-j5mdwOVg?si=a03yz3UDNio9WeOx',
  youtubeId: 'Ab-j5mdwOVg',
  quote:
    'Age is no barrier to pursuing your dreams. When you commit to pure authenticity, uncompromising hygiene, and have the steadfast support of your family, even a humble seed of ₹800 can blossom into a global family of patrons.',
  highlights: [
    'Began at age 47 with an initial savings of just ₹800 in Mysuru',
    'Scaled to ₹12–13 Lakhs annual turnover with zero commercial marketing',
    '100% Preservative-free, slow roasted in seasoned iron kadhais',
    'Exported to families across the USA, Australia, Canada, UAE & Europe',
    'Dedicated caring "Dabba" meal service for senior citizens in Mysuru',
    'Powered by family teamwork — husband Sri Ranganath and family',
  ],
};

export const STORY_METRICS = [
  {
    value: '₹800',
    label: 'Initial Seed Investment',
    subtext: 'Started at age 47 from home in 2017',
    icon: 'seed',
  },
  {
    value: '₹12–13L',
    label: 'Annual Turnover',
    subtext: 'Built purely on organic love and trust',
    icon: 'growth',
  },
  {
    value: 'USA • AU • CA',
    label: 'Global Export Reach',
    subtext: 'Shipped to homes across 5+ countries',
    icon: 'globe',
  },
  {
    value: 'Senior Care',
    label: 'Mysuru Dabba Service',
    subtext: 'Nutritious daily meals for community elders',
    icon: 'heart',
  },
];

export const BRAND_STORY_STEPS = [
  {
    id: 'birth',
    title: 'THE ₹800 SEED & VISION',
    year: '2017 • Age 47',
    badge: 'Origin • Founder Smt. Vydehi',
    text: 'At the age of 47, Smt. Vydehi began Keshavashree Food Products from her home kitchen in Mysuru with an initial personal investment of just ₹800. Driven by a deep passion to preserve timeless Iyengar culinary heritage, what began as a humble home enterprise quickly captured the hearts and palates of food lovers.',
    image: '/assets/vydehi.png',
    highlight: 'Started at age 47 with ₹800, proving age is never a barrier to dreams.',
  },
  {
    id: 'passion',
    title: 'THE PURITY PHILOSOPHY',
    year: 'Zero Preservatives',
    badge: 'Artisanal Craftsmanship',
    text: 'Every single batch of Vangibath powder, Rasam powder, Sambar powder, and seasonal pickles like Mango Tokku (Mavina Thokku) and Citron is prepared without vinegar substitutes, synthetic chemicals, or artificial colorants. Whole spices are slow dry-roasted on low flame in iron kadhais to awaken the authentic volatile aroma.',
    image: '/assets/chutney-puliyogare-kari-methi.JPG',
    highlight: 'Handcrafted with uncompromised traditional slow-roasting techniques.',
  },
  {
    id: 'growth',
    title: 'GLOBAL REACH & ELDER CARE',
    year: '₹12–13 Lakhs Turnover',
    badge: 'Global NRI Reach & Community',
    text: 'From a local Mysuru neighborhood favorite to international kitchen tables in the USA, Australia, Canada, and the UAE, KFP products travel across the world. Simultaneously, Smt. Vydehi runs a heartwarming, hygienic "Dabba" meal service specifically tailored for senior citizens and elderly individuals in the Mysuru community.',
    image: '/assets/group-1.JPG',
    highlight: 'Exported globally while serving wholesome daily dabba meals to local elders.',
  },
  {
    id: 'family',
    title: 'FAMILY AS THE BACKBONE',
    year: 'Teamwork & Legacy',
    badge: 'Shared Devotion',
    text: 'The strength behind Keshavashree is a closely-knit family unit. Smt. Vydehi’s husband Sri Ranganath and her daughter provide essential support in logistics, protective airtight export packaging, ingredient sourcing, and digital communication, ensuring every patron receives personal care.',
    image: '/assets/pickles.JPG',
    highlight: 'Husband Sri Ranganath and family managing packaging, dispatch, and digital care.',
  },
];

