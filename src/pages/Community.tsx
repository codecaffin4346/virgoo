
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Users, Calendar, MessageSquare, ArrowRight } from "lucide-react";

const Community = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-lavender text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect with Women Entrepreneurs</h1>
              <p className="text-lg mb-8">
                Join our vibrant community of women entrepreneurs, share experiences, find mentors, and access exclusive resources.
              </p>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input 
                    type="text" 
                    placeholder="Search the community..." 
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-lg text-gray-600">Community Members</p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-primary mb-2">200+</div>
                <p className="text-lg text-gray-600">Expert Mentors</p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <p className="text-lg text-gray-600">Monthly Events</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Community Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Networking</h3>
                <p className="text-gray-600 mb-4">
                  Connect with like-minded women entrepreneurs, share experiences, and build valuable relationships.
                </p>
                <Link to="/networking" className="text-primary flex items-center hover:underline">
                  Explore Networking <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Events</h3>
                <p className="text-gray-600 mb-4">
                  Attend virtual and in-person events, workshops, and masterclasses led by industry experts.
                </p>
                <Link to="/events" className="text-primary flex items-center hover:underline">
                  Browse Events <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discussion Forums</h3>
                <p className="text-gray-600 mb-4">
                  Participate in topic-specific discussions, ask questions, and share your expertise with the community.
                </p>
                <Link to="/forums" className="text-primary flex items-center hover:underline">
                  Join Discussions <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Members Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Community Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Member 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Rebecca Chen" 
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Rebecca Chen</h3>
                <p className="text-gray-600 mb-2">Tech Entrepreneur</p>
                <p className="text-sm text-gray-500 mb-4">Founder of EcoTech Solutions</p>
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                  View Profile
                </Button>
              </div>
              
              {/* Member 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Maya Johnson" 
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Maya Johnson</h3>
                <p className="text-gray-600 mb-2">Marketing Specialist</p>
                <p className="text-sm text-gray-500 mb-4">CEO of Brand Elevate</p>
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                  View Profile
                </Button>
              </div>
              
              {/* Member 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Sofia Rodriguez" 
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Sofia Rodriguez</h3>
                <p className="text-gray-600 mb-2">Finance Expert</p>
                <p className="text-sm text-gray-500 mb-4">Founder of FinWise Consultancy</p>
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                  View Profile
                </Button>
              </div>
              
              {/* Member 4 */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Priya Patel" 
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Priya Patel</h3>
                <p className="text-gray-600 mb-2">E-commerce Specialist</p>
                <p className="text-sm text-gray-500 mb-4">Founder of Artisan Creations</p>
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                  View Profile
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/members">
                <Button size="lg" className="bg-primary hover:bg-primary/90 btn-gradient">
                  View All Members <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="py-16 bg-virgo-lavender/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Event 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-virgo-peach relative">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-primary font-medium text-sm">
                    Virtual
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded">
                    <div className="text-xl font-bold">15</div>
                    <div className="text-xs">May</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mastering Digital Marketing for Small Businesses</h3>
                  <p className="text-gray-600 mb-4">
                    Learn effective digital marketing strategies to grow your small business online presence.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">2:00 PM - 4:00 PM EST</span>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-virgo-rose relative">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-primary font-medium text-sm">
                    In-Person
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded">
                    <div className="text-xl font-bold">22</div>
                    <div className="text-xs">May</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Funding Options for Women-Led Startups</h3>
                  <p className="text-gray-600 mb-4">
                    Explore various funding opportunities available for women entrepreneurs and startups.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">10:00 AM - 12:00 PM PST</span>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Event 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-virgo-softBlue relative">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-primary font-medium text-sm">
                    Virtual
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded">
                    <div className="text-xl font-bold">29</div>
                    <div className="text-xs">May</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Building a Strong Personal Brand</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to develop and leverage your personal brand to advance your career and business.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">1:00 PM - 3:00 PM EST</span>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/events">
                <Button size="lg" className="bg-primary hover:bg-primary/90 btn-gradient">
                  View All Events <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Join CTA Section */}
        <section className="py-16 bg-gradient-peach text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community Today</h2>
              <p className="text-lg mb-8">
                Become part of our vibrant community of women entrepreneurs, access exclusive resources, and connect with like-minded professionals.
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Join Now <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
