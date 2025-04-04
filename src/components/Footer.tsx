
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-playfair font-bold text-2xl">
                <span className="text-primary">V</span>irgo
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering women entrepreneurs with AI-driven career development tools
              and a supportive community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resume-analysis" className="text-gray-600 hover:text-primary transition-colors">
                  Resume Analysis
                </Link>
              </li>
              <li>
                <Link to="/job-matching" className="text-gray-600 hover:text-primary transition-colors">
                  Job Matching
                </Link>
              </li>
              <li>
                <Link to="/interview-training" className="text-gray-600 hover:text-primary transition-colors">
                  Interview Training
                </Link>
              </li>
              <li>
                <Link to="/learning-paths" className="text-gray-600 hover:text-primary transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/business-insights" className="text-gray-600 hover:text-primary transition-colors">
                  Business Insights
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/finance-hub" className="text-gray-600 hover:text-primary transition-colors">
                  Finance Hub
                </Link>
              </li>
              <li>
                <Link to="/marketing-toolkit" className="text-gray-600 hover:text-primary transition-colors">
                  Marketing Toolkit
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <a href="mailto:hello@virgo.ai" className="text-gray-600 hover:text-primary transition-colors">
                  hello@virgo.ai
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 border border-gray-300 rounded-l outline-none focus:ring-2 focus:ring-primary/20 flex-grow"
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Virgo. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-600 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
