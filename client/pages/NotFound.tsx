import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          <div className="text-8xl mb-8">🔍</div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            404
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Oops! Page not found
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            The page you're looking for doesn't exist. It might have been moved
            or deleted.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <Link to="/allergies" className="btn-secondary">
              Browse Allergies
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
