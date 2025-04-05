
import { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, PieChart, Globe, BookOpen, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BusinessInsights = () => {
  const [activeTab, setActiveTab] = useState("market-research");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Business Insights</h1>
          <p className="text-lg text-gray-600 mb-8">
            Market research, industry trends, and strategic insights to help women entrepreneurs make informed decisions.
          </p>
          
          <Tabs defaultValue="market-research" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="market-research">Market Research</TabsTrigger>
              <TabsTrigger value="industry-trends">Industry Trends</TabsTrigger>
              <TabsTrigger value="competitor-analysis">Competitor Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="market-research" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Market Research Tools</h2>
                <p className="text-gray-600 mb-6">
                  Resources to help you understand your target market and identify opportunities for growth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-softBlue/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Search className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Market Analysis Tool</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Generate comprehensive market reports for your industry and region.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Generate Report</Button>
                  </div>
                  
                  <div className="bg-virgo-peach/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Users className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Customer Persona Creator</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Build detailed customer personas to guide your marketing and product decisions.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Create Personas</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Survey Templates</h4>
                    <p className="text-sm text-gray-600">Ready-to-use customer research survey templates.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Focus Group Guide</h4>
                    <p className="text-sm text-gray-600">How to conduct effective focus groups for deeper insights.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Market Size Calculator</h4>
                    <p className="text-sm text-gray-600">Estimate your total addressable market (TAM).</p>
                  </Card>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Explore All Research Tools</Button>
              </Card>
              
              <div className="bg-virgo-lavender/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Research Methodologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-5">
                    <h3 className="font-semibold mb-3">Quantitative Research</h3>
                    <p className="text-gray-600 mb-4">Methods for collecting and analyzing numerical data to understand market trends.</p>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Card>
                  
                  <Card className="p-5">
                    <h3 className="font-semibold mb-3">Qualitative Research</h3>
                    <p className="text-gray-600 mb-4">Techniques to gather in-depth insights about customer motivations and preferences.</p>
                    <Button variant="outline" className="w-full">View Guide</Button>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="industry-trends" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Industry Trend Reports</h2>
                <p className="text-gray-600 mb-6">
                  Stay ahead of the curve with our regularly updated industry trend analysis.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-rose/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <TrendingUp className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Growth Sectors</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Discover which industries are experiencing rapid growth and why.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">View Report</Button>
                  </div>
                  
                  <div className="bg-virgo-lavender/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Globe className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Global Market Shifts</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Analysis of international market trends affecting businesses.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Read Analysis</Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg mb-6">
                  <h3 className="font-semibold text-lg mb-3">Featured Reports by Industry</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="w-full justify-start">Technology</Button>
                    <Button variant="outline" className="w-full justify-start">Health & Wellness</Button>
                    <Button variant="outline" className="w-full justify-start">E-commerce</Button>
                    <Button variant="outline" className="w-full justify-start">Education</Button>
                    <Button variant="outline" className="w-full justify-start">Sustainable Goods</Button>
                    <Button variant="outline" className="w-full justify-start">Financial Services</Button>
                    <Button variant="outline" className="w-full justify-start">Food & Beverage</Button>
                    <Button variant="outline" className="w-full justify-start">Creative Services</Button>
                  </div>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Access All Industry Reports</Button>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-5">
                  <h3 className="font-semibold mb-3">Emerging Technologies</h3>
                  <p className="text-gray-600 mb-4">How new technologies are reshaping industries and creating opportunities.</p>
                  <Button variant="outline" className="w-full">Explore Trends</Button>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-3">Consumer Behavior Shifts</h3>
                  <p className="text-gray-600 mb-4">Analysis of changing customer preferences and purchasing patterns.</p>
                  <Button variant="outline" className="w-full">View Insights</Button>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="competitor-analysis" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Competitor Analysis Tools</h2>
                <p className="text-gray-600 mb-6">
                  Understand your competitive landscape and identify opportunities to differentiate your business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-softBlue/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <PieChart className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Competitive Matrix Creator</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Create visual comparisons of your business versus competitors across key metrics.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Create Matrix</Button>
                  </div>
                  
                  <div className="bg-virgo-peach/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <BookOpen className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">SWOT Analysis Guide</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Comprehensive guide to conducting effective SWOT analyses for your business.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">View Guide</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Pricing Analysis</h4>
                    <p className="text-sm text-gray-600">Tools to compare and optimize your pricing strategy.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Feature Comparison</h4>
                    <p className="text-sm text-gray-600">Templates to evaluate your product features against competitors.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Market Positioning</h4>
                    <p className="text-sm text-gray-600">Frameworks to identify your unique position in the market.</p>
                  </Card>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Access All Analysis Tools</Button>
              </Card>
              
              <div className="bg-virgo-lavender/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Strategic Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Finding Your Competitive Edge</h3>
                    <p className="text-gray-600 mb-4">Strategies for identifying and leveraging your unique advantages in the marketplace.</p>
                    <Button variant="outline" className="w-full">Read Article</Button>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Monitoring Competitor Movements</h3>
                    <p className="text-gray-600 mb-4">Tools and techniques to stay informed about competitor activities and strategic shifts.</p>
                    <Button variant="outline" className="w-full">View Resources</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessInsights;
