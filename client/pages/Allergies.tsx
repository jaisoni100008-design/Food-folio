import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { allergens } from "@/lib/allergens";
import { Search } from "lucide-react";

export default function AllergiesPage() {
  const [search, setSearch] = useState("");

  const filteredAllergens = allergens.filter(
    (allergen) =>
      allergen.name.toLowerCase().includes(search.toLowerCase()) ||
      allergen.id.includes(search.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Browse Allergies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select an allergy to view detailed safety information, symptoms,
              and remedies.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search allergies…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background text-foreground placeholder-muted-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Allergens Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAllergens.map((allergen) => (
              <Link
                key={allergen.id}
                to={`/allergen/${allergen.id}`}
                className="card-base p-6 text-center group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{allergen.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {allergen.name}
                </h3>

                <div className="flex gap-2 justify-center mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      allergen.riskLevel === "high"
                        ? "bg-danger text-danger-foreground"
                        : allergen.riskLevel === "medium"
                          ? "bg-warning text-foreground"
                          : "bg-success text-primary-foreground"
                    }`}
                  >
                    {allergen.riskLevel === "high" && "High Risk"}
                    {allergen.riskLevel === "medium" && "Medium Risk"}
                    {allergen.riskLevel === "low" && "Low Risk"}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {allergen.description}
                </p>

                <div className="mt-4 text-primary font-semibold group-hover:gap-2 transition-all inline-flex items-center gap-1">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>

          {filteredAllergens.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No allergens found matching "{search}"
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
