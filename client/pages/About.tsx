import { Layout } from "@/components/Layout";
import {
  AlertTriangle,
  CheckCircle,
  Zap,
  Users,
  Smartphone,
  Brain,
} from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Samridhi Riya Das",
      emoji: "👩‍🎓",
    },
    {
      name: "Jai Soni",
      emoji: "👨‍🎓",
    },
    {
      name: "Vikrant Singh",
      emoji: "👨‍🎓",
    },
    {
      name: "Prakul Verma",
      emoji: "👨‍🎓",
    },
  ];

  const futureFeatures = [
    {
      title: "OCR Ingredient Scanner",
      description:
        "Scan food labels with your camera to instantly identify allergens and ingredients.",
      icon: "📸",
    },
    {
      title: "AI Chatbot",
      description:
        "24/7 intelligent assistant to answer questions about allergies and food safety.",
      icon: "🤖",
    },
    {
      title: "Mobile App Offline Mode",
      description:
        "Access the allergen database offline when traveling or in areas without internet.",
      icon: "📱",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="section-heading mb-4">About FoodFolio</h1>
          <p className="section-subheading max-w-2xl mx-auto">
            Making food safety accessible to everyone through technology and
            education
          </p>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Problem */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-danger" size={32} />
                  <h2 className="text-3xl font-bold text-foreground">
                    The Problem
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Millions of people struggle with food allergies every day. The
                  challenges they face are real and often overwhelming:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">🔒</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Hidden Ingredients
                    </h3>
                    <p className="text-muted-foreground">
                      Allergens hide in unexpected places - from peanut oil in
                      Asian cuisines to milk proteins in baked goods.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">⚠️</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Cross-Contamination
                    </h3>
                    <p className="text-muted-foreground">
                      Even trace amounts from shared equipment or utensils can
                      trigger severe reactions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">😨</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Panic When Symptoms Appear
                    </h3>
                    <p className="text-muted-foreground">
                      Not knowing what symptoms mean or when to seek help creates
                      anxiety and uncertainty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-success" size={32} />
                  <h2 className="text-3xl font-bold text-foreground">
                    Our Solution
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  FoodFolio provides everything you need to make safe food
                  choices with confidence:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">⚡</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Instant Safety Clarity
                    </h3>
                    <p className="text-muted-foreground">
                      Get immediate information about allergen safety with our
                      clean, intuitive interface.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">📚</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Comprehensive Database
                    </h3>
                    <p className="text-muted-foreground">
                      31+ global and Indian allergies with detailed information
                      on safe foods, risks, and hidden sources.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">🩺</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Smart Symptom Checker
                    </h3>
                    <p className="text-muted-foreground">
                      Understand your symptoms and know exactly when to seek
                      medical help.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">🎨</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Beginner-Friendly Design
                    </h3>
                    <p className="text-muted-foreground">
                      Clean UI designed for everyone, whether you're tech-savvy
                      or not.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">What's Coming Next</h2>
            <p className="section-subheading">
              We're continuously evolving FoodFolio with new features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureFeatures.map((feature, idx) => (
              <div key={idx} className="card-base text-center">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="text-primary" size={32} />
              <h2 className="section-heading mb-0">Our Team</h2>
            </div>
            <p className="section-subheading">
              A group of students building safer food choices for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="card-base text-center space-y-4"
                style={{
                  animation: `slide-up 0.5s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <div className="text-6xl">{member.emoji}</div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center mb-4">
            <Zap size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Our Vision</h2>
          <p className="text-lg leading-relaxed opacity-95">
            We believe everyone deserves access to accurate, easy-to-understand
            information about food allergies. Our mission is to empower millions
            of people to make safe food choices and live healthier, worry-free
            lives. By combining technology, medical expertise, and thoughtful
            design, we're making food allergy management accessible to everyone.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="section-heading mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div>
            <p className="text-foreground text-lg">
              <strong>Email:</strong> teamfoodfolio@gmail.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
