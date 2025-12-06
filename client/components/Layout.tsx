import { Link, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-2xl text-primary hover:opacity-90 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                FF
              </div>
              <span className="hidden sm:inline">FoodFolio</span>
            </Link>

            {/* Nav Links */}
            <div className="flex gap-1 sm:gap-2">
              {[
                { path: "/", label: "Home" },
                { path: "/allergies", label: "Allergies" },
                { path: "/food-search", label: "Food Search" },
                { path: "/symptom-checker", label: "Symptom Checker" },
                { path: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-background">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">FoodFolio</h4>
              <p className="text-sm text-muted-foreground">
                Smart Food Allergy Checker - Stay safe, eat smart.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/allergies" className="hover:text-primary transition-colors">Allergies</Link></li>
                <li><Link to="/food-search" className="hover:text-primary transition-colors">Food Search</Link></li>
                <li><Link to="/symptom-checker" className="hover:text-primary transition-colors">Symptom Checker</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Have questions? Reach out to us at teamfoodfolio@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 FoodFolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
