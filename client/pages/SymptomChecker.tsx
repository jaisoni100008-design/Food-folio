import { useState } from "react";
import { Layout } from "@/components/Layout";
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface Symptom {
  id: string;
  name: string;
  icon: string;
  possibleCauses: string[];
  homeRemedies: string[];
  seekHelpIf: string[];
}

const symptoms: Symptom[] = [
  {
    id: "bloating",
    name: "Bloating",
    icon: "🫁",
    possibleCauses: [
      "Lactose intolerance",
      "Wheat/gluten sensitivity",
      "Legume sensitivity",
      "High-fat foods",
      "Carbonated beverages",
    ],
    homeRemedies: [
      "Drink ginger tea",
      "Walk gently for 10-15 minutes",
      "Avoid carbonated drinks",
      "Eat slowly and chew well",
      "Try fennel tea",
    ],
    seekHelpIf: [
      "Severe abdominal pain accompanies it",
      "Lasts more than 2-3 hours",
      "Accompanied by vomiting",
      "Difficulty breathing develops",
    ],
  },
  {
    id: "rashes",
    name: "Rashes",
    icon: "🔴",
    possibleCauses: [
      "Milk allergy",
      "Peanut/tree nut allergy",
      "Shellfish allergy",
      "Contact dermatitis",
      "Food additives or dyes",
    ],
    homeRemedies: [
      "Apply cool compress",
      "Use fragrance-free moisturizer",
      "Keep skin clean and dry",
      "Take oatmeal bath",
      "Avoid scratching",
    ],
    seekHelpIf: [
      "Rash spreads rapidly",
      "Involves face or throat",
      "Accompanied by breathing difficulty",
      "Signs of infection appear",
      "Severe itching that won't stop",
    ],
  },
  {
    id: "nausea",
    name: "Nausea",
    icon: "🤢",
    possibleCauses: [
      "Shellfish allergy",
      "Fish allergy",
      "Egg allergy",
      "Food poisoning",
      "Anxiety or stress",
    ],
    homeRemedies: [
      "Sip ginger ale slowly",
      "Eat saltine crackers",
      "Try lemon water",
      "Rest in a comfortable position",
      "Avoid strong smells",
    ],
    seekHelpIf: [
      "Vomiting occurs",
      "Unable to keep fluids down",
      "Signs of dehydration appear",
      "Abdominal pain is severe",
      "Lasts more than few hours",
    ],
  },
  {
    id: "itching",
    name: "Itching",
    icon: "🤏",
    possibleCauses: [
      "Oral allergy syndrome",
      "Peanut allergy",
      "Tree nut allergy",
      "Sesame allergy",
      "Dust or pollen exposure",
    ],
    homeRemedies: [
      "Drink cold water",
      "Suck on ice chips",
      "Take antihistamine (OTC)",
      "Apply lip balm",
      "Avoid spicy foods",
    ],
    seekHelpIf: [
      "Itching spreads to throat",
      "Swelling of lips or tongue",
      "Breathing becomes difficult",
      "Signs of anaphylaxis appear",
    ],
  },
  {
    id: "stomach-pain",
    name: "Stomach Pain",
    icon: "🤕",
    possibleCauses: [
      "Milk allergy",
      "Wheat allergy",
      "Legume intolerance",
      "Contaminated food",
      "Overeating",
    ],
    homeRemedies: [
      "Drink ORS solution",
      "Apply warm compress to abdomen",
      "Drink ginger or fennel tea",
      "Rest and avoid solid foods",
      "Stay hydrated with water",
    ],
    seekHelpIf: [
      "Pain is severe and persistent",
      "Accompanied by vomiting",
      "Signs of dehydration",
      "Fever develops",
      "Pain lasts over 2 hours",
    ],
  },
  {
    id: "headache",
    name: "Headache",
    icon: "🤕",
    possibleCauses: [
      "Migraine trigger foods",
      "Food additives (MSG, sulfites)",
      "Dehydration from reaction",
      "Stress or anxiety",
      "Low blood sugar",
    ],
    homeRemedies: [
      "Drink plenty of water",
      "Rest in a dark, quiet room",
      "Apply cool compress",
      "Take light pain reliever (acetaminophen)",
      "Avoid screen time",
    ],
    seekHelpIf: [
      "Severe headache with fever",
      "Accompanied by neck stiffness",
      "Vision becomes blurry",
      "Signs of allergic reaction",
      "Persistent for several hours",
    ],
  },
  {
    id: "throat-discomfort",
    name: "Throat Discomfort",
    icon: "🔗",
    possibleCauses: [
      "Oral allergy syndrome",
      "Peanut allergy",
      "Tree nut allergy",
      "Shellfish allergy",
      "Soy allergy",
    ],
    homeRemedies: [
      "Gargle with salt water",
      "Drink honey and lemon tea",
      "Eat soft, cool foods",
      "Use throat lozenges",
      "Stay hydrated",
    ],
    seekHelpIf: [
      "Throat swelling worsens",
      "Difficulty swallowing",
      "Breathing becomes difficult",
      "Voice becomes hoarse or lost",
      "Signs of anaphylaxis appear",
    ],
  },
];

export default function SymptomChecker() {
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom>(symptoms[0]);

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="section-heading mb-4">Symptom Checker</h1>
          <p className="section-subheading">
            Understand mild symptoms and when to seek medical help
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Symptom Buttons */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Select a Symptom
              </h2>
              <div className="space-y-3 sticky top-24">
                {symptoms.map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => setSelectedSymptom(symptom)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 font-semibold ${
                      selectedSymptom.id === symptom.id
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-secondary hover:bg-secondary/80 text-foreground border-2 border-transparent hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{symptom.icon}</span>
                      <span>{symptom.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Information */}
            <div className="lg:col-span-2">
              <div className="space-y-6 animate-fade-in">
                {/* Selected Symptom Header */}
                <div className="card-base bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{selectedSymptom.icon}</span>
                    <h2 className="text-3xl font-bold text-foreground">
                      {selectedSymptom.name}
                    </h2>
                  </div>
                </div>

                {/* Possible Causes */}
                <div className="card-base">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="text-warning" size={28} />
                    <h3 className="text-2xl font-bold text-foreground">
                      Possible Causes
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedSymptom.possibleCauses.map((cause, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-warning font-bold mt-0.5">•</span>
                        <span className="text-foreground">{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Home Remedies */}
                <div className="card-base">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="text-success" size={28} />
                    <h3 className="text-2xl font-bold text-foreground">
                      Home Remedies (Mild Only)
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedSymptom.homeRemedies.map((remedy, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-success font-bold mt-0.5">✓</span>
                        <span className="text-foreground">{remedy}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to Seek Medical Help */}
                <div className="card-base border-2 border-danger/30 bg-danger/5">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="text-danger" size={28} />
                    <h3 className="text-2xl font-bold text-foreground">
                      When to Seek Medical Help
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {selectedSymptom.seekHelpIf.map((condition, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-danger font-bold mt-0.5">⚠</span>
                        <span className="text-foreground">{condition}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-danger/10 rounded-lg border border-danger/20">
                    <p className="text-sm text-foreground">
                      <strong>Emergency:</strong> If breathing becomes difficult,
                      throat swells severely, or signs of anaphylaxis appear, call
                      emergency services immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="bg-warning/20 border-l-4 border-warning rounded-lg p-6">
            <p className="text-foreground">
              <strong>Disclaimer:</strong> This symptom checker is for educational
              purposes only and not a substitute for professional medical advice.
              Always consult a healthcare provider for proper diagnosis and
              treatment.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
