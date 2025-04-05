
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 px-4 py-16">
        <div className="text-center max-w-md">
          <h1 className="text-primary font-playfair text-9xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="space-y-4">
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 btn-gradient w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" /> Back to Homepage
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-medium mb-4">Popular Pages</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link to="/community" className="text-primary hover:underline">Community</Link>
              <Link to="/resume-analysis" className="text-primary hover:underline">Resume Analysis</Link>
              <Link to="/job-matching" className="text-primary hover:underline">Job Matching</Link>
              <Link to="/about" className="text-primary hover:underline">About Us</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
