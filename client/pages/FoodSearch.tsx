import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { foods } from "@/lib/foods";
import { Search, X } from "lucide-react";

export default function FoodSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState(foods[0]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Fuzzy matching function for better search results
  const fuzzyMatch = (searchTerm: string, foodName: string): number => {
    const term = searchTerm.toLowerCase();
    const name = foodName.toLowerCase();

    // Exact match gets highest score
    if (name === term) return 100;

    // Starts with match
    if (name.startsWith(term)) return 80;

    // Contains match
    if (name.includes(term)) return 60;

    // Fuzzy matching - check if chars exist in sequence
    let termIndex = 0;
    let score = 0;
    for (let i = 0; i < name.length && termIndex < term.length; i++) {
      if (name[i] === term[termIndex]) {
        termIndex++;
        score += 10;
      }
    }

    // Return score only if all characters matched
    return termIndex === term.length ? score : 0;
  };

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const scored = foods
      .map((food) => ({
        food,
        score: fuzzyMatch(searchQuery, food.name),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    return scored.map((item) => item.food);
  }, [searchQuery]);

  const handleSelectFood = (food: typeof foods[0]) => {
    setSelectedFood(food);
    setSearchQuery(food.name);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
  };

  return (
    <Layout>
      {/* Search Header Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Food Allergen Checker
          </h1>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Search any food to discover its allergen content and safer alternatives
          </p>

          {/* Search Bar with Autocomplete */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" size={24} />
              <input
                type="text"
                placeholder="Search any food to discover allergens and safe alternatives."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-full pl-14 pr-12 py-4 rounded-2xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background text-foreground placeholder-muted-foreground text-lg"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Autocomplete Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
                {suggestions.map((food) => (
                  <button
                    key={food.id}
                    onClick={() => handleSelectFood(food)}
                    className="w-full text-left px-4 py-3 hover:bg-secondary transition-colors border-b border-border last:border-b-0 font-medium text-foreground flex items-center gap-2"
                  >
                    <span className="text-2xl">{food.emoji}</span>
                    {food.name}
                  </button>
                ))}
              </div>
            )}

            {showSuggestions && searchQuery && suggestions.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-xl shadow-lg z-50 p-4 text-center text-muted-foreground">
                No results found. Try another food name.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {!searchQuery && !selectedFood ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-2xl text-muted-foreground">
                Search for any food to see allergen details.
              </p>
            </div>
          ) : selectedFood ? (
            <div className="space-y-8">
              {/* Food Header Card */}
              <div>
                {/* Food Title and Category */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                      {selectedFood.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-6xl">{selectedFood.emoji}</span>
                      <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        {selectedFood.name}
                      </h1>
                    </div>
                  </div>

                  {/* Quick Risk Assessment */}
                  <div className="bg-danger/10 border-l-4 border-danger rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">High Risk For:</h3>
                    <ul className="space-y-2">
                      {selectedFood.highRiskFor.slice(0, 3).map((risk, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground">
                          <span className="text-danger font-bold mt-1">•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Detailed Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Common Ingredients */}
                <div className="card-base border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Common Ingredients
                  </h3>
                  <ul className="space-y-2">
                    {selectedFood.commonIngredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-foreground">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Major Allergens */}
                <div className="card-base border-l-4 border-danger">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Major Allergens Involved
                  </h3>
                  <ul className="space-y-2">
                    {selectedFood.majorAllergens.map((allergen, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-danger font-bold">⚠</span>
                        <span className="text-foreground">{allergen}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hidden Ingredients */}
                <div className="card-base border-l-4 border-warning">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Hidden Ingredients
                  </h3>
                  <ul className="space-y-2">
                    {selectedFood.hiddenIngredients.length > 0 ? (
                      selectedFood.hiddenIngredients.map((ingredient, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-warning font-bold">•</span>
                          <span className="text-foreground">{ingredient}</span>
                        </li>
                      ))
                    ) : (
                      <p className="text-muted-foreground italic">No known hidden ingredients.</p>
                    )}
                  </ul>
                </div>

                {/* Cross-Contamination Risks */}
                <div className="card-base border-l-4 border-danger/60">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Cross-Contamination Risks
                  </h3>
                  <ul className="space-y-2">
                    {selectedFood.crossContaminationRisks.map((risk, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-danger font-bold">▲</span>
                        <span className="text-foreground">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safer Alternatives */}
                <div className="card-base border-l-4 border-success md:col-span-2">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Safer Alternatives
                  </h3>
                  <ul className="space-y-2">
                    {selectedFood.saferAlternatives.length > 0 ? (
                      selectedFood.saferAlternatives.map((alternative, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-success font-bold">✓</span>
                          <span className="text-foreground">{alternative}</span>
                        </li>
                      ))
                    ) : (
                      <p className="text-muted-foreground italic">No alternatives available.</p>
                    )}
                  </ul>
                </div>
              </div>

              {/* Related Foods */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Explore Similar Foods
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {foods
                    .filter((f) => f.category === selectedFood.category && f.id !== selectedFood.id)
                    .slice(0, 6)
                    .map((food) => (
                      <button
                        key={food.id}
                        onClick={() => handleSelectFood(food)}
                        className="text-left card-base p-4 hover:shadow-card-hover transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-3xl flex-shrink-0">{food.emoji}</span>
                          <div>
                            <p className="font-semibold text-foreground hover:text-primary transition-colors">
                              {food.name}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {food.majorAllergens.length} allergens
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No results found. Try another food name.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
