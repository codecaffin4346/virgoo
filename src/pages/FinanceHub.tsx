
import { useState } from "react";
import { Link } from "react-router-dom";
import { DollarSign, BarChart, Percent, Briefcase, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FinanceHub = () => {
  const [activeTab, setActiveTab] = useState("funding");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Finance Hub</h1>
          <p className="text-lg text-gray-600 mb-8">
            Resources, tools, and guidance to help women entrepreneurs secure funding and manage finances effectively.
          </p>
          
          <Tabs defaultValue="funding" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="funding">Funding Resources</TabsTrigger>
              <TabsTrigger value="financial-planning">Financial Planning</TabsTrigger>
              <TabsTrigger value="investors">Investor Connections</TabsTrigger>
            </TabsList>
            
            <TabsContent value="funding" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Available Funding Opportunities</h2>
                <p className="text-gray-600 mb-6">
                  Discover grants, loans, and investment opportunities specifically designed for women entrepreneurs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-lavender/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <DollarSign className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Small Business Grants</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Non-repayable funds provided by government agencies and private organizations to women-owned businesses.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">View Opportunities</Button>
                  </div>
                  
                  <div className="bg-virgo-peach/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <BarChart className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Angel Investors</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Connect with individual investors who provide capital for startups in exchange for equity ownership.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Find Investors</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Microloans</h4>
                    <p className="text-sm text-gray-600">Small loans with favorable terms for startups and small businesses.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Venture Capital</h4>
                    <p className="text-sm text-gray-600">Investment firms that fund high-growth potential businesses.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Crowdfunding</h4>
                    <p className="text-sm text-gray-600">Raise small amounts from many individuals via online platforms.</p>
                  </Card>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Find Funding Opportunities</Button>
              </Card>
              
              <div className="bg-virgo-lavender/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Featured Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="italic text-gray-700 mb-3">
                      "After securing a small business grant, I was able to scale my company from a local operation to a nationwide service in just 18 months."
                    </p>
                    <p className="font-medium">Rachel Chen, Founder of EcoStyle</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="italic text-gray-700 mb-3">
                      "Connecting with angel investors through Virgo not only provided the capital I needed but also invaluable mentorship and industry connections."
                    </p>
                    <p className="font-medium">Maria Rodriguez, CEO of TechHealth Solutions</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="financial-planning" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Financial Planning Tools</h2>
                <p className="text-gray-600 mb-6">
                  Resources to help you create solid financial plans, manage cash flow, and prepare for funding applications.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-softBlue/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Percent className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Cash Flow Calculator</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Plan and manage your business's cash flow with our interactive calculator.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Open Calculator</Button>
                  </div>
                  
                  <div className="bg-virgo-rose/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Briefcase className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Business Plan Templates</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Download customizable templates to create comprehensive business plans.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Get Templates</Button>
                  </div>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Access All Financial Tools</Button>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-5">
                  <h3 className="font-semibold mb-3">Financial Forecasting</h3>
                  <p className="text-gray-600 mb-4">Learn how to create realistic financial projections for your business growth.</p>
                  <Button variant="outline" className="w-full">View Guide</Button>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-3">Tax Planning</h3>
                  <p className="text-gray-600 mb-4">Strategies to optimize your tax position and maximize deductions.</p>
                  <Button variant="outline" className="w-full">Read Tips</Button>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-3">Pricing Strategies</h3>
                  <p className="text-gray-600 mb-4">Methods to determine optimal pricing for your products or services.</p>
                  <Button variant="outline" className="w-full">Explore Models</Button>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="investors" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Connect with Investors</h2>
                <p className="text-gray-600 mb-6">
                  Build relationships with investors who are specifically interested in supporting women entrepreneurs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-peach/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <FileText className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Pitch Deck Review</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Get expert feedback on your pitch deck before presenting to investors.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Submit Your Deck</Button>
                  </div>
                  
                  <div className="bg-virgo-lavender/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Award className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Investor Matching</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Get matched with investors whose interests align with your business.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Find Your Match</Button>
                  </div>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Join Investor Network</Button>
              </Card>
              
              <h3 className="text-xl font-semibold mb-4">Upcoming Investor Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="p-5">
                  <div className="flex justify-between mb-3">
                    <h4 className="font-semibold text-lg">Women Founders Pitch Night</h4>
                    <span className="text-primary font-medium">May 15, 2025</span>
                  </div>
                  <p className="text-gray-600 mb-4">Present your business to a panel of venture capitalists and angel investors.</p>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </Card>
                
                <Card className="p-5">
                  <div className="flex justify-between mb-3">
                    <h4 className="font-semibold text-lg">Funding Forum</h4>
                    <span className="text-primary font-medium">June 8, 2025</span>
                  </div>
                  <p className="text-gray-600 mb-4">Network with investors and learn about different funding options.</p>
                  <Button variant="outline" className="w-full">Save Your Spot</Button>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FinanceHub;
