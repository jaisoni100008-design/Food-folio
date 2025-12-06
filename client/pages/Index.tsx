import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { allergens, commonAllergens } from "@/lib/allergens";
import { Search } from "lucide-react";

export default function Home() {
  const [allergenSearch, setAllergenSearch] = useState("");
  const [foodSearch, setFoodSearch] = useState("");
  const [foodSearchResults, setFoodSearchResults] = useState<typeof allergens>([]);
  const [hasFoodSearched, setHasFoodSearched] = useState(false);

  const filteredAllergens = allergens.filter((allergen) =>
    allergen.name.toLowerCase().includes(allergenSearch.toLowerCase())
  );

  const commonAllergensList = allergens.filter((a) =>
    commonAllergens.includes(a.id)
  );

  const handleFoodSearch = () => {
    if (!foodSearch.trim()) {
      setHasFoodSearched(false);
      setFoodSearchResults([]);
      return;
    }

    const query = foodSearch.toLowerCase();
    const results = allergens.filter((allergen) =>
      allergen.highRiskFoods.some((food) =>
        food.toLowerCase().includes(query)
      ) ||
      allergen.safeFoods.some((food) =>
        food.toLowerCase().includes(query)
      ) ||
      allergen.name.toLowerCase().includes(query)
    );

    setFoodSearchResults(results);
    setHasFoodSearched(true);
  };

  const handleFoodSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleFoodSearch();
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Eat Smart,
                <br />
                <span className="text-primary">Stay Safe.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Instantly understand food safety, allergy risks, symptoms, and
                alternatives through a clean, modern interface.
              </p>
              <Link
                to="/allergies"
                className="btn-primary inline-block animate-fade-in"
              >
                Explore Now →
              </Link>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 hidden lg:flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Abstract shapes representing food safety concept */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-success opacity-10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center space-y-4">
                    <div className="text-7xl">🥗</div>
                    <div className="text-6xl">✓</div>
                    <div className="text-4xl text-primary font-bold">
                      Smart Choices
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Check an Allergen Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Check an Allergen</h2>
            <p className="section-subheading">
              Search or browse from our comprehensive allergen database
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search allergens…"
                value={allergenSearch}
                onChange={(e) => setAllergenSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background text-foreground placeholder-muted-foreground"
              />
            </div>
          </div>

          {/* Allergen Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {(allergenSearch ? filteredAllergens : commonAllergensList).map(
              (allergen) => (
                <Link
                  key={allergen.id}
                  to={`/allergen/${allergen.id}`}
                  className="card-base p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
                >
                  <div className="text-4xl mb-3">{allergen.icon}</div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {allergen.name}
                  </h3>
                  <p className="text-xs mt-2 text-muted-foreground">
                    {allergen.riskLevel === "high" && "High Risk"}
                    {allergen.riskLevel === "medium" && "Medium Risk"}
                    {allergen.riskLevel === "low" && "Low Risk"}
                  </p>
                </Link>
              )
            )}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link
              to="/allergies"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View all {allergens.length} allergens →
            </Link>
          </div>
        </div>
      </section>

      {/* Food Search Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Search by Food</h2>
            <p className="section-subheading">
              Find out which allergens are in your favorite foods
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2 flex-col sm:flex-row mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="e.g. chocolate, pizza, noodles…"
                  value={foodSearch}
                  onChange={(e) => setFoodSearch(e.target.value)}
                  onKeyPress={handleFoodSearchKeyPress}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background text-foreground placeholder-muted-foreground"
                />
              </div>
              <button
                onClick={handleFoodSearch}
                className="btn-primary whitespace-nowrap"
              >
                Search by Food
              </button>
            </div>

            {/* Food Search Results */}
            {hasFoodSearched && (
              <div className="space-y-4">
                {foodSearchResults.length > 0 ? (
                  <div>
                    <h3 className="font-bold text-foreground mb-4">
                      Found {foodSearchResults.length} allergen{foodSearchResults.length !== 1 ? "s" : ""} related to "{foodSearch}":
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {foodSearchResults.map((allergen) => (
                        <Link
                          key={allergen.id}
                          to={`/allergen/${allergen.id}`}
                          className="card-base p-4 hover:scale-105 transition-transform duration-300"
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-3xl">{allergen.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-bold text-foreground hover:text-primary transition-colors">
                                {allergen.name}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {allergen.riskLevel === "high" && "High Risk"}
                                {allergen.riskLevel === "medium" && "Medium Risk"}
                                {allergen.riskLevel === "low" && "Low Risk"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 bg-secondary rounded-xl border-2 border-border">
                    <p className="text-muted-foreground mb-4">
                      No allergens found for "{foodSearch}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Try searching for specific food items like "peanut butter", "milk", "eggs", etc.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why FoodFolio?</h2>
            <p className="section-subheading">
              Everything you need to stay safe and informed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-base space-y-4 animate-slide-up">
              <div className="text-5xl">🌍</div>
              <h3 className="text-2xl font-bold text-foreground">
                31+ Global & Indian Allergies Covered
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive database covering common allergies and regional
                variations used in Indian cuisines.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-base space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl">⚠️</div>
              <h3 className="text-2xl font-bold text-foreground">
                Hidden Ingredient & Cross-Contamination Alerts
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get alerted about hidden sources and cross-contamination risks
                you might not expect.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-base space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl">🩺</div>
              <h3 className="text-2xl font-bold text-foreground">
                Symptom Checker for Mild Reactions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Understand mild symptoms with our interactive checker and know
                when to seek help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Start Exploring Today
          </h2>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            Your comprehensive guide to food allergies, symptoms, and safe food
            choices is just a click away.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/allergies"
              className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Browse Allergies
            </Link>
            <Link
              to="/symptom-checker"
              className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-200"
            >
              Symptom Checker
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
