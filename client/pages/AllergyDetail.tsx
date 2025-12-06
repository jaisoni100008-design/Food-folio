import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { allergens } from "@/lib/allergens";
import { foods } from "@/lib/foods";
import { ChevronLeft, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

export default function AllergyDetail() {
  const { allergenId } = useParams();
  const allergen = allergens.find((a) => a.id === allergenId);

  // Helper function to get emoji for a food name
  const getFoodEmoji = (foodName: string): string => {
    // Try to find exact match or partial match
    const food = foods.find((f) =>
      f.name.toLowerCase().includes(foodName.toLowerCase()) ||
      foodName.toLowerCase().includes(f.name.toLowerCase().split(" ")[0])
    );
    return food?.emoji || "🍽️";
  };

  if (!allergen) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Allergen Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The allergen you're looking for doesn't exist in our database.
          </p>
          <Link
            to="/allergies"
            className="btn-primary inline-block"
          >
            Back to Allergies
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/allergies"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 font-semibold"
          >
            <ChevronLeft size={20} />
            Back to Allergies
          </Link>

          {/* Title Section */}
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl md:text-7xl">{allergen.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {allergen.name} Allergy
              </h1>
              <div className="flex gap-3 flex-wrap items-center">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
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
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
            {allergen.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Food Safety Information */}
          <div>
            <h2 className="section-heading mb-8">Food Safety Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Safe Foods Card */}
              <div className="card-base border-2 border-success/20">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-success" size={28} />
                  <h3 className="text-xl font-bold text-foreground">
                    Safe Foods
                  </h3>
                </div>
                <ul className="space-y-2">
                  {allergen.safeFoods.map((food, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-success font-bold mt-0.5">✓</span>
                      <span><span className="text-lg mr-1">{getFoodEmoji(food)}</span>{food}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* High-Risk Foods Card */}
              <div className="card-base border-2 border-danger/20">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-danger" size={28} />
                  <h3 className="text-xl font-bold text-foreground">
                    High-Risk Foods
                  </h3>
                </div>
                <ul className="space-y-2">
                  {allergen.highRiskFoods.map((food, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-danger font-bold mt-0.5">✕</span>
                      <span><span className="text-lg mr-1">{getFoodEmoji(food)}</span>{food}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cross-Contamination Risks Card */}
              <div className="card-base border-2 border-warning/20">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-warning" size={28} />
                  <h3 className="text-xl font-bold text-foreground">
                    Cross-Contamination
                  </h3>
                </div>
                <ul className="space-y-2">
                  {allergen.crossContaminationRisks.map((risk, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-warning font-bold mt-0.5">⚠</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Symptoms & Remedies Section */}
          <div>
            <h2 className="section-heading mb-8">Symptoms & Remedies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Symptoms Card */}
              <div className="card-base">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Possible Symptoms
                </h3>
                <ul className="space-y-3">
                  {allergen.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Remedies Card */}
              <div className="card-base">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Home Remedies (Mild Only)
                </h3>
                <ul className="space-y-3">
                  {allergen.remedies.map((remedy, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{remedy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Warning Bar */}
          <div className="bg-danger/10 border-l-4 border-danger rounded-lg p-6 space-y-3">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-danger flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-foreground text-lg mb-2">
                  Important Medical Disclaimer
                </h4>
                <p className="text-foreground leading-relaxed">
                  Home remedies are temporary and only suitable for mild symptoms.
                  If symptoms worsen, breathing becomes difficult, there is throat
                  swelling, or if you experience any severe reaction, seek medical
                  help immediately. Call emergency services if anaphylaxis occurs.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Allergies */}
          <div className="text-center pt-8">
            <Link
              to="/allergies"
              className="btn-secondary inline-block"
            >
              ← Back to All Allergies
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
