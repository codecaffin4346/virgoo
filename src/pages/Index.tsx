
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Briefcase, Video, BookOpen, PieChart, Target, Users, Zap, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="hero-gradient absolute inset-0 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Empowering Women <span className="text-primary">Entrepreneurs</span> with AI
                </h1>
                <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
                  Virgo is your AI-powered career development platform designed specifically for women entrepreneurs at every stage of their journey.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/signup">
                    <Button size="lg" className="btn-gradient">
                      Start Your Journey <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Women Entrepreneurs" 
                  className="rounded-xl shadow-xl max-w-full h-auto w-full md:w-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Tools for Your Success</h2>
              <p className="text-lg text-gray-600">
                Discover our innovative features designed to support women entrepreneurs at every stage of their journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={FileText}
                title="Resume & Cover Letter Analysis"
                description="Get AI-powered feedback on your resume and cover letter to stand out in the job market."
                link="/resume-analysis"
                iconColor="text-primary"
              />
              <FeatureCard
                icon={Briefcase}
                title="Job & Business Matching"
                description="Find the perfect job or business opportunity with our AI-driven matching system."
                link="/job-matching"
                iconColor="text-virgo-gold"
              />
              <FeatureCard
                icon={Video}
                title="Interview & Pitch Training"
                description="Practice interviews and refine your business pitch with our AI coach."
                link="/interview-training"
                iconColor="text-purple-500"
              />
              <FeatureCard
                icon={BookOpen}
                title="Learning Pathways"
                description="Access curated courses on business planning, finance, marketing, and leadership."
                link="/learning-paths"
                iconColor="text-blue-500"
              />
              <FeatureCard
                icon={PieChart}
                title="Smart Finance Hub"
                description="Track your finances and discover funding opportunities for women entrepreneurs."
                link="/finance-hub"
                iconColor="text-green-500"
              />
              <FeatureCard
                icon={Target}
                title="Digital Marketing Toolkit"
                description="Develop effective marketing strategies and build your online presence."
                link="/marketing-toolkit"
                iconColor="text-amber-500"
              />
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Virgo Works</h2>
              <p className="text-lg text-gray-600">
                Our AI-powered platform makes it easy for women entrepreneurs to thrive in their career and business journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-virgo-lavender flex items-center justify-center text-purple-700 mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sign Up & Create Profile</h3>
                <p className="text-gray-600">
                  Create your personal profile and tell us about your career goals and interests.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-virgo-peach flex items-center justify-center text-pink-700 mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Explore AI-Powered Tools</h3>
                <p className="text-gray-600">
                  Use our AI tools to enhance your resume, practice interviews, and find opportunities.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-virgo-rose flex items-center justify-center text-red-700 mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect & Grow</h3>
                <p className="text-gray-600">
                  Join our community, network with other women entrepreneurs, and access resources.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Section */}
        <section className="py-16 lg:py-24 bg-gradient-lavender text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Thriving Community of Women Entrepreneurs</h2>
                <p className="text-lg mb-8">
                  Connect with like-minded women, share experiences, find mentors, and access exclusive resources and opportunities.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <Users className="mr-2" />
                    <span className="font-medium">5,000+ Members</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="mr-2" />
                    <span className="font-medium">Weekly Events</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="mr-2" />
                    <span className="font-medium">Expert Mentors</span>
                  </div>
                </div>
                <Link to="/community">
                  <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                    Join the Community <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Women entrepreneur" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Women working" 
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600">
                Hear from women entrepreneurs who have transformed their careers and businesses with Virgo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Virgo helped me refine my business pitch and connect with investors. Within three months, I secured funding for my tech startup."
                name="Sarah Johnson"
                title="Founder, TechSavvy Solutions"
                imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              />
              <TestimonialCard
                quote="The resume analysis tool transformed my job search. I landed interviews at three top companies and secured my dream role in product management."
                name="Michelle Lee"
                title="Senior Product Manager"
                imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              />
              <TestimonialCard
                quote="The learning pathways provided me with the skills I needed to scale my e-commerce business. The community support has been invaluable."
                name="Jessica Patel"
                title="CEO, Artisan Accessories"
                imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-virgo-peach">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Entrepreneurial Journey?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Join Virgo today and access powerful AI tools, expert resources, and a supportive community of women entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="btn-gradient">
                    Start Your Journey <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
