
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <nav className="w-full py-4 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-playfair font-bold text-2xl">
            <span className="text-primary">V</span>irgo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('features')}
              className="flex items-center font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className={`absolute bg-white shadow-lg rounded-md py-2 mt-2 w-48 transition-all duration-300 ${activeDropdown === 'features' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <Link to="/resume-analysis" className="block px-4 py-2 hover:bg-virgo-lavender hover:text-primary transition-colors">Resume Analysis</Link>
              <Link to="/job-matching" className="block px-4 py-2 hover:bg-virgo-lavender hover:text-primary transition-colors">Job Matching</Link>
              <Link to="/interview-training" className="block px-4 py-2 hover:bg-virgo-lavender hover:text-primary transition-colors">Interview Training</Link>
              <Link to="/learning-paths" className="block px-4 py-2 hover:bg-virgo-lavender hover:text-primary transition-colors">Learning Paths</Link>
            </div>
          </div>
          
          <Link to="/community" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Community
          </Link>
          
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('resources')}
              className="flex items-center font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className={`absolute bg-white shadow-lg rounded-md py-2 mt-2 w-48 transition-all duration-300 ${activeDropdown === 'resources' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <Link to="/finance-hub" className="block px-4 py-2 hover:bg-virgo-lavender hover:text-primary transition-colors">Finance Hub</Link>
              <Link to="/marketing-toolkit" className="block px-4 py-2 hover:bg-virgo-lavender hover:text-primary transition-colors">Marketing Toolkit</Link>
              <Link to="/business-insights" className="block px-4 py-2 hover:bg-virgo-lavender hover:text-primary transition-colors">Business Insights</Link>
            </div>
          </div>
          
          <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-primary hover:bg-primary/90 shadow-md">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-16 left-0 w-full shadow-md z-50">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col">
              <button 
                onClick={() => toggleDropdown('features-mobile')}
                className="flex justify-between items-center py-2 font-medium text-gray-700"
              >
                Features <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'features-mobile' && (
                <div className="pl-4 py-2 flex flex-col space-y-2">
                  <Link to="/resume-analysis" className="py-1 hover:text-primary transition-colors">Resume Analysis</Link>
                  <Link to="/job-matching" className="py-1 hover:text-primary transition-colors">Job Matching</Link>
                  <Link to="/interview-training" className="py-1 hover:text-primary transition-colors">Interview Training</Link>
                  <Link to="/learning-paths" className="py-1 hover:text-primary transition-colors">Learning Paths</Link>
                </div>
              )}
            </div>
            
            <Link to="/community" className="py-2 font-medium text-gray-700">
              Community
            </Link>
            
            <div className="flex flex-col">
              <button 
                onClick={() => toggleDropdown('resources-mobile')}
                className="flex justify-between items-center py-2 font-medium text-gray-700"
              >
                Resources <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'resources-mobile' && (
                <div className="pl-4 py-2 flex flex-col space-y-2">
                  <Link to="/finance-hub" className="py-1 hover:text-primary transition-colors">Finance Hub</Link>
                  <Link to="/marketing-toolkit" className="py-1 hover:text-primary transition-colors">Marketing Toolkit</Link>
                  <Link to="/business-insights" className="py-1 hover:text-primary transition-colors">Business Insights</Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="py-2 font-medium text-gray-700">
              About
            </Link>
            
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login">
                <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
