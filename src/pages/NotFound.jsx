
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-codeDark">
      <header className="w-full py-4 px-6 bg-codeDark border-b border-muted flex items-center">
        <div className="flex items-center gap-2">
          <Code className="text-codeBlue h-6 w-6" />
          <h1 className="text-xl font-bold tracking-tight">
            C<span className="blue-o">O</span>DE CLASH
          </h1>
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-9xl font-bold mb-4 text-codeBlue">404</h1>
            <div className="h-1 w-20 bg-codeBlue mx-auto mb-6"></div>
            <p className="text-xl text-white mb-4">Oops! Page not found</p>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>
          
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-codeBlue rounded-md font-medium transition-all"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
