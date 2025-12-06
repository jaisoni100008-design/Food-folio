export interface Food {
  id: string;
  name: string;
  emoji: string;
  commonIngredients: string[];
  majorAllergens: string[];
  highRiskFor: string[];
  hiddenIngredients: string[];
  crossContaminationRisks: string[];
  saferAlternatives: string[];
  category: string;
}

export const foods: Food[] = [
  {
    id: "bread",
    name: "Bread (White/Brown/Multigrain)",
    emoji: "🍞",
    category: "Bakery",
    commonIngredients: ["Wheat flour", "Yeast", "Salt", "Sugar", "Oil/Butter", "Milk powder (sometimes)", "Preservatives"],
    majorAllergens: ["Wheat/Gluten", "Milk", "Soy", "Sesame"],
    highRiskFor: ["Wheat allergy", "Gluten intolerance", "Dairy allergy", "Soy allergy", "Sesame allergy"],
    hiddenIngredients: ["Soy flour", "Milk solids", "Emulsifiers", "Egg wash"],
    crossContaminationRisks: ["Shared ovens", "Trays used for nut breads", "Sesame seeds mixing with plain bread"],
    saferAlternatives: ["Gluten-free bread", "Millet rotis", "Rice cakes", "Khakhra"]
  },
  {
    id: "brownie",
    name: "Brownie",
    emoji: "🍫",
    category: "Bakery",
    commonIngredients: ["Wheat flour", "Cocoa", "Sugar", "Butter", "Eggs", "Milk", "Baking powder", "Nuts (optional)"],
    majorAllergens: ["Wheat", "Egg", "Milk", "Nuts", "Soy (in chocolate)"],
    highRiskFor: ["Wheat/gluten allergy", "Egg allergy", "Dairy allergy", "Nut allergy"],
    hiddenIngredients: ["Chocolate chips with soy lecithin", "Nut extracts", "Cream fillings"],
    crossContaminationRisks: ["Shared bakery trays", "Knives used for nut brownies"],
    saferAlternatives: ["Nut-free brownies", "Gluten-free brownies", "Oat-based bars"]
  },
  {
    id: "pizza",
    name: "Pizza",
    emoji: "🍕",
    category: "Fast Food",
    commonIngredients: ["Wheat crust", "Tomato sauce", "Cheese", "Vegetables", "Meats"],
    majorAllergens: ["Wheat", "Milk", "Soy (in sauces)", "Meat allergens"],
    highRiskFor: ["Gluten allergy", "Lactose intolerance", "Soy allergy"],
    hiddenIngredients: ["Cheese blends", "Pesto (contains nuts)", "Thickening agents"],
    crossContaminationRisks: ["Shared pizza cutters", "Flour dust", "Same oven stone"],
    saferAlternatives: ["Gluten-free base pizza", "Cheeseless veggie pizza"]
  },
  {
    id: "burger",
    name: "Burger",
    emoji: "🍔",
    category: "Fast Food",
    commonIngredients: ["Bun (wheat)", "Patty (veg/meat)", "Cheese", "Sauces", "Lettuce"],
    majorAllergens: ["Wheat", "Milk", "Egg", "Soy", "Meat"],
    highRiskFor: ["Egg allergy (mayo)", "Dairy allergy", "Wheat allergy", "Soy intolerance"],
    hiddenIngredients: ["Breadcrumbs in patty", "Soy protein", "Egg wash on bun"],
    crossContaminationRisks: ["Shared grill", "Shared oil for non-veg items"],
    saferAlternatives: ["Lettuce-wrap burger", "Gluten-free bun", "Homemade patties"]
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    emoji: "🍚",
    category: "Asian",
    commonIngredients: ["Rice", "Veggies", "Egg", "Soy sauce", "Spices"],
    majorAllergens: ["Soy", "Egg", "Shellfish (if added)"],
    highRiskFor: ["Soy allergy", "Egg allergy", "Shellfish allergy"],
    hiddenIngredients: ["Fish sauce", "Oyster sauce", "Seasoning cubes"],
    crossContaminationRisks: ["Shared wok", "Ladle dipping into multiple dishes"],
    saferAlternatives: ["Fried rice without soy sauce", "Plain veg pulao"]
  },
  {
    id: "instant-noodles",
    name: "Instant Noodles",
    emoji: "🍜",
    category: "Packaged",
    commonIngredients: ["Wheat noodles", "Flavor sachet", "Oil", "Spices"],
    majorAllergens: ["Gluten", "Soy", "Milk (some flavors)"],
    highRiskFor: ["Wheat allergy", "Dairy allergy", "Soy allergy"],
    hiddenIngredients: ["Milk solids", "Soy powder", "Artificial flavors"],
    crossContaminationRisks: ["Factory lines producing multiple flavors"],
    saferAlternatives: ["Rice noodles", "Millet noodles"]
  },
  {
    id: "pakora",
    name: "Pakora (Besan Fritters)",
    emoji: "🍲",
    category: "Indian Snacks",
    commonIngredients: ["Besan", "Veggies/Paneer", "Spices", "Oil"],
    majorAllergens: ["Chickpea", "Milk (paneer)", "Wheat (if mixed flour)"],
    highRiskFor: ["Besan allergy", "Dairy allergy", "Gluten sensitivity"],
    hiddenIngredients: ["Color in batter", "Mixed atta+besan"],
    crossContaminationRisks: ["Same oil used for fish/chicken"],
    saferAlternatives: ["Rice-flour fritters", "Baked snacks"]
  },
  {
    id: "samosa",
    name: "Samosa",
    emoji: "🥟",
    category: "Indian Snacks",
    commonIngredients: ["Wheat dough", "Potato filling", "Peas", "Spices"],
    majorAllergens: ["Wheat", "Potato (rare)", "Spice mix"],
    highRiskFor: ["Gluten allergy", "Spice allergy"],
    hiddenIngredients: ["Cashews/raisins in filling", "Ghee in dough"],
    crossContaminationRisks: ["Shared frying oil", "Street vendor contamination"],
    saferAlternatives: ["Gluten-free patties", "Steamed snacks"]
  },
  {
    id: "momos",
    name: "Momos",
    emoji: "🥟",
    category: "Asian",
    commonIngredients: ["Maida wrapper", "Veg/Meat filling", "Soy sauce"],
    majorAllergens: ["Wheat", "Soy", "Meat", "MSG (intolerance)"],
    highRiskFor: ["Gluten allergy", "Soy allergy", "Spice intolerance"],
    hiddenIngredients: ["Ajinomoto", "Flavored oils"],
    crossContaminationRisks: ["Same steamer for veg & non-veg", "Shared sauces"],
    saferAlternatives: ["Rice flour dumplings", "Steamed idlis"]
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    emoji: "🍦",
    category: "Desserts",
    commonIngredients: ["Milk", "Cream", "Sugar", "Stabilizers", "Nuts/Chocolate"],
    majorAllergens: ["Milk", "Egg (sometimes)", "Nuts", "Soy"],
    highRiskFor: ["Dairy allergy", "Nut allergy", "Soy allergy"],
    hiddenIngredients: ["Milk solids", "Egg yolk", "Nut traces"],
    crossContaminationRisks: ["Shared scoops", "Same machine for all flavors"],
    saferAlternatives: ["Sorbet", "Coconut-milk ice cream", "Fruit bowls"]
  },
  {
    id: "chocolate-bar",
    name: "Chocolate Bar",
    emoji: "🍫",
    category: "Confectionery",
    commonIngredients: ["Cocoa", "Milk powder", "Sugar", "Cocoa butter", "Emulsifiers", "Nuts (optional)"],
    majorAllergens: ["Milk", "Soy (lecithin)", "Nuts", "Peanut traces"],
    highRiskFor: ["Dairy allergy", "Soy allergy", "Nut allergy"],
    hiddenIngredients: ["Nut residue", "Gluten in wafers", "Artificial flavors"],
    crossContaminationRisks: ["Factory lines switching between nut & non-nut chocolates"],
    saferAlternatives: ["Certified nut-free chocolate", "Dark chocolate without milk"]
  },
  {
    id: "cookies",
    name: "Cookies / Biscuits",
    emoji: "🍪",
    category: "Bakery",
    commonIngredients: ["Wheat flour", "Sugar", "Butter", "Milk powder", "Raising agents"],
    majorAllergens: ["Wheat", "Milk", "Egg (in some)", "Soy"],
    highRiskFor: ["Gluten intolerance", "Dairy allergy", "Egg allergy"],
    hiddenIngredients: ["Nuts", "Chocolate chips with soy", "Whey powder"],
    crossContaminationRisks: ["Shared trays for nut biscuits"],
    saferAlternatives: ["Gluten-free biscuits", "Rice crackers"]
  },
  {
    id: "chips",
    name: "Chips (Potato / Corn)",
    emoji: "🥔",
    category: "Snacks",
    commonIngredients: ["Potato or corn", "Oil", "Flavoring powders"],
    majorAllergens: ["Corn", "Milk (cheese flavors)", "Wheat (seasoning)", "Soy"],
    highRiskFor: ["Dairy allergy", "Gluten sensitivity", "Soy sensitivity"],
    hiddenIngredients: ["Milk solids", "Wheat-based seasoning"],
    crossContaminationRisks: ["Shared flavoring machines"],
    saferAlternatives: ["Plain salted potato chips with simple ingredients"]
  },
  {
    id: "nachos",
    name: "Nachos",
    emoji: "🧀",
    category: "Snacks",
    commonIngredients: ["Corn flour", "Oil", "Seasoning", "Cheese powder"],
    majorAllergens: ["Corn", "Milk", "Soy", "Wheat (seasoning mixes)"],
    highRiskFor: ["Corn allergy", "Dairy allergy"],
    hiddenIngredients: ["Whey powder", "Artificial colors", "MSG"],
    crossContaminationRisks: ["Factory mixing flavors"],
    saferAlternatives: ["Plain nacho chips without seasoning"]
  },
  {
    id: "popcorn",
    name: "Popcorn",
    emoji: "🍿",
    category: "Snacks",
    commonIngredients: ["Corn kernels", "Butter/Oil", "Flavor powders"],
    majorAllergens: ["Corn", "Milk (butter)", "Soy (in flavors)"],
    highRiskFor: ["Corn allergy", "Dairy allergy"],
    hiddenIngredients: ["Artificial butter flavor", "Cheese powders"],
    crossContaminationRisks: ["Same popcorn machine for all flavors"],
    saferAlternatives: ["Air-popped popcorn with safe oil"]
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    emoji: "🍛",
    category: "Indian Curry",
    commonIngredients: ["Paneer", "Cream", "Butter", "Tomatoes"],
    majorAllergens: ["Milk/Dairy"],
    highRiskFor: ["Dairy allergy", "Lactose intolerance"],
    hiddenIngredients: ["Cashews in gravy", "Food color"],
    crossContaminationRisks: ["Shared ladles for non-veg"],
    saferAlternatives: ["Tofu curry (if soy tolerated)"]
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    emoji: "🍗",
    category: "Non-Veg",
    commonIngredients: ["Chicken", "Spices", "Onions", "Tomatoes", "Ghee/Oil"],
    majorAllergens: ["Meat", "Dairy (if cream added)", "Spice mixes"],
    highRiskFor: ["Meat allergy", "Dairy allergy"],
    hiddenIngredients: ["Cashews", "Butter"],
    crossContaminationRisks: ["Shared ladle with dairy dishes"],
    saferAlternatives: ["Simple boiled chicken (if tolerated)"]
  },
  {
    id: "chole",
    name: "Chole (Chickpea Curry)",
    emoji: "🍲",
    category: "Indian Curry",
    commonIngredients: ["Chickpeas", "Spices", "Tomatoes"],
    majorAllergens: ["Chickpea", "Spice mix"],
    highRiskFor: ["Legume allergy", "Spice allergy"],
    hiddenIngredients: ["Ghee", "Cream"],
    crossContaminationRisks: ["Shared ladles with dairy dishes"],
    saferAlternatives: ["Boiled chickpeas without masala"]
  },
  {
    id: "biryani",
    name: "Biryani",
    emoji: "🍛",
    category: "Indian Rice",
    commonIngredients: ["Rice", "Meat/Veg", "Spices", "Ghee", "Curd marinade"],
    majorAllergens: ["Milk", "Meat", "Nuts (in some)"],
    highRiskFor: ["Dairy allergy", "Meat allergy"],
    hiddenIngredients: ["Cashews", "Raisins"],
    crossContaminationRisks: ["Same vessel for veg + non-veg"],
    saferAlternatives: ["Plain pulao"]
  },
  {
    id: "khichdi",
    name: "Khichdi",
    emoji: "🍚",
    category: "Indian Rice",
    commonIngredients: ["Rice", "Lentils", "Ghee", "Spices"],
    majorAllergens: ["Lentils", "Dairy"],
    highRiskFor: ["Dal allergies", "Ghee sensitivity"],
    hiddenIngredients: ["Butter", "Peanuts in some regions"],
    crossContaminationRisks: ["Shared ladles"],
    saferAlternatives: ["Oil-based plain khichdi"]
  },
  {
    id: "roti",
    name: "Roti / Chapati",
    emoji: "🫓",
    category: "Bread",
    commonIngredients: ["Wheat flour", "Water", "Oil/Ghee (optional)"],
    majorAllergens: ["Wheat/Gluten", "Milk (if ghee used)"],
    highRiskFor: ["Gluten allergy", "Dairy sensitivity"],
    hiddenIngredients: ["Mixed flour with barley/soy"],
    crossContaminationRisks: ["Same tawa used for paratha/egg dishes"],
    saferAlternatives: ["Jowar roti", "Bajra roti", "Rice rotis"]
  },
  {
    id: "paratha",
    name: "Paratha",
    emoji: "🫓",
    category: "Bread",
    commonIngredients: ["Wheat flour", "Ghee/Oil", "Stuffing (potato, paneer, etc.)"],
    majorAllergens: ["Wheat", "Milk", "Potatoes (rare)", "Paneer"],
    highRiskFor: ["Gluten allergy", "Dairy allergy"],
    hiddenIngredients: ["Butter in dough", "Curd in stuffing"],
    crossContaminationRisks: ["Same tawa for egg paratha"],
    saferAlternatives: ["Rice paratha", "Millet paratha"]
  },
  {
    id: "fish-curry",
    name: "Fish Curry",
    emoji: "🐟",
    category: "Non-Veg",
    commonIngredients: ["Fish", "Spices", "Coconut", "Oil"],
    majorAllergens: ["Fish", "Coconut"],
    highRiskFor: ["Fish allergy"],
    hiddenIngredients: ["Tamarind extract"],
    crossContaminationRisks: ["Same vessel for non-veg"],
    saferAlternatives: ["Veg coconut curry (if tolerated)"]
  },
  {
    id: "peanut-butter",
    name: "Peanut Butter",
    emoji: "🥜",
    category: "Condiments",
    commonIngredients: ["Peanuts", "Oil", "Sugar"],
    majorAllergens: ["Peanuts (VERY high risk)"],
    highRiskFor: ["Peanut allergy (dangerous)"],
    hiddenIngredients: ["Stabilizers"],
    crossContaminationRisks: ["Nut factories"],
    saferAlternatives: ["Sunflower seed butter"]
  },
  {
    id: "soy-sauce",
    name: "Soy Sauce",
    emoji: "🫘",
    category: "Condiments",
    commonIngredients: ["Soybean", "Wheat", "Salt"],
    majorAllergens: ["Soy", "Wheat"],
    highRiskFor: ["Soy allergy", "Gluten sensitivity"],
    hiddenIngredients: ["Caramel color", "Preservatives"],
    crossContaminationRisks: ["Same container for multiple sauces"],
    saferAlternatives: ["Tamari (gluten-free)"]
  },
  {
    id: "mayonnaise",
    name: "Mayonnaise",
    emoji: "🥄",
    category: "Condiments",
    commonIngredients: ["Egg yolk", "Oil", "Vinegar"],
    majorAllergens: ["Egg"],
    highRiskFor: ["Egg allergy"],
    hiddenIngredients: ["Milk solids in flavored mayo"],
    crossContaminationRisks: ["Mixed with cheese sauces"],
    saferAlternatives: ["Eggless mayo"]
  },
  {
    id: "milk",
    name: "Milk",
    emoji: "🥛",
    category: "Dairy",
    commonIngredients: ["Cow/Buffalo milk"],
    majorAllergens: ["Milk protein (casein, whey)"],
    highRiskFor: ["Dairy allergy", "Lactose intolerance"],
    hiddenIngredients: ["Added vitamin powders"],
    crossContaminationRisks: ["Dairy machinery"],
    saferAlternatives: ["Coconut milk", "Oat milk"]
  },
  {
    id: "curd",
    name: "Curd / Yogurt",
    emoji: "🥛",
    category: "Dairy",
    commonIngredients: ["Fermented milk"],
    majorAllergens: ["Milk"],
    highRiskFor: ["Dairy allergy"],
    hiddenIngredients: ["Creamy additives"],
    crossContaminationRisks: ["Sweet/fruit yogurt mixing"],
    saferAlternatives: ["Coconut yogurt"]
  },
  {
    id: "cheese",
    name: "Cheese",
    emoji: "🧀",
    category: "Dairy",
    commonIngredients: ["Milk", "Enzymes", "Salt"],
    majorAllergens: ["Dairy"],
    highRiskFor: ["Milk allergy", "Lactose intolerance"],
    hiddenIngredients: ["Color", "Preservatives"],
    crossContaminationRisks: ["Same slicer for different cheeses"],
    saferAlternatives: ["Vegan cheese"]
  },
  {
    id: "paneer",
    name: "Paneer",
    emoji: "🧀",
    category: "Dairy",
    commonIngredients: ["Milk curdled with acid"],
    majorAllergens: ["Milk"],
    highRiskFor: ["Dairy allergy"],
    hiddenIngredients: ["Starch coating in hotels"],
    crossContaminationRisks: ["Same pan for non-veg"],
    saferAlternatives: ["Tofu (if soy tolerated)"]
  },
  {
    id: "almonds",
    name: "Almonds",
    emoji: "🌰",
    category: "Nuts",
    commonIngredients: ["Almonds"],
    majorAllergens: ["Tree nuts"],
    highRiskFor: ["Nut allergy"],
    hiddenIngredients: [],
    crossContaminationRisks: ["Nut processing plants"],
    saferAlternatives: ["Seeds"]
  },
  {
    id: "cashews",
    name: "Cashews",
    emoji: "🌰",
    category: "Nuts",
    commonIngredients: ["Cashews"],
    majorAllergens: ["Tree nuts"],
    highRiskFor: ["Cashew allergy (common in India)"],
    hiddenIngredients: ["Used in gravies"],
    crossContaminationRisks: ["Shared processors"],
    saferAlternatives: ["Avoid entirely"]
  },
  {
    id: "walnuts",
    name: "Walnuts",
    emoji: "🌰",
    category: "Nuts",
    commonIngredients: ["Walnuts"],
    majorAllergens: ["Tree nuts"],
    highRiskFor: ["Walnut allergy"],
    hiddenIngredients: [],
    crossContaminationRisks: ["Bakery items"],
    saferAlternatives: ["Seeds"]
  },
  {
    id: "sesame-seeds",
    name: "Sesame Seeds",
    emoji: "🌱",
    category: "Seeds",
    commonIngredients: ["Sesame seeds"],
    majorAllergens: ["Sesame"],
    highRiskFor: ["Sesame allergy"],
    hiddenIngredients: ["Hidden in burgers, breads"],
    crossContaminationRisks: ["Seeds falling into bakery trays"],
    saferAlternatives: ["None if allergic"]
  },
  {
    id: "tahini",
    name: "Tahini",
    emoji: "🌱",
    category: "Pastes",
    commonIngredients: ["Ground sesame"],
    majorAllergens: ["Sesame"],
    highRiskFor: ["Severe sesame allergy"],
    hiddenIngredients: ["Garlic", "Lemon", "Preservatives"],
    crossContaminationRisks: ["Shared grinders with nut pastes"],
    saferAlternatives: ["Sunflower butter"]
  },
];

export const foodCategories = ["Bakery", "Fast Food", "Asian", "Packaged", "Indian Snacks", "Indian Curry", "Non-Veg", "Indian Rice", "Bread", "Condiments", "Dairy", "Nuts", "Seeds", "Pastes", "Desserts", "Confectionery", "Snacks"];
