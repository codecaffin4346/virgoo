
import { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Users, BarChart, Target, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MarketingToolkit = () => {
  const [activeTab, setActiveTab] = useState("strategies");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Marketing Toolkit</h1>
          <p className="text-lg text-gray-600 mb-8">
            Essential marketing resources and tools to help women entrepreneurs effectively promote their businesses.
          </p>
          
          <Tabs defaultValue="strategies" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="strategies">Marketing Strategies</TabsTrigger>
              <TabsTrigger value="content">Content Creation</TabsTrigger>
              <TabsTrigger value="analytics">Analytics Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="strategies" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Effective Marketing Strategies</h2>
                <p className="text-gray-600 mb-6">
                  Discover proven marketing approaches tailored for women-led businesses in various industries.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-rose/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <TrendingUp className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Growth Marketing</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Data-driven approaches to rapidly scale your business with limited resources.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Learn More</Button>
                  </div>
                  
                  <div className="bg-virgo-lavender/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Users className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Community Building</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Create a loyal customer base through authentic community engagement strategies.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Get Started</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Email Marketing</h4>
                    <p className="text-sm text-gray-600">Build relationships and drive conversions with strategic email campaigns.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Social Media</h4>
                    <p className="text-sm text-gray-600">Platform-specific strategies to maximize your social media presence.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">SEO Fundamentals</h4>
                    <p className="text-sm text-gray-600">Drive organic traffic to your website with search engine optimization.</p>
                  </Card>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Explore All Strategies</Button>
              </Card>
              
              <div className="bg-virgo-peach/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Marketing Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="italic text-gray-700 mb-3">
                      "By implementing the community building strategies from Virgo's toolkit, we grew our customer base by 200% in just 6 months."
                    </p>
                    <p className="font-medium">Lisa Patel, Founder of Sustainable Home</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="italic text-gray-700 mb-3">
                      "The email marketing templates and strategies helped us increase our open rates from 15% to 32%, leading to a significant boost in sales."
                    </p>
                    <p className="font-medium">Jasmine Williams, CEO of BeautyTech</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="content" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Content Creation Resources</h2>
                <p className="text-gray-600 mb-6">
                  Tools and templates to help you create engaging content that resonates with your target audience.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-softBlue/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <MessageCircle className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Social Media Templates</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Customizable templates for consistent, professional social media posts.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Access Templates</Button>
                  </div>
                  
                  <div className="bg-virgo-rose/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Target className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Content Calendar</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Plan and organize your content strategy with our interactive calendar tool.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Create Calendar</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Blog Post Templates</h4>
                    <p className="text-sm text-gray-600">Formats for different types of engaging blog content.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Email Sequences</h4>
                    <p className="text-sm text-gray-600">Pre-written email flows for customer nurturing.</p>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium mb-1">Video Script Outlines</h4>
                    <p className="text-sm text-gray-600">Templates for creating compelling video content.</p>
                  </Card>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Access Content Library</Button>
              </Card>
              
              <div className="bg-virgo-lavender/20 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Content Creation Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-5">
                    <h3 className="font-semibold mb-2">AI Writing Assistant</h3>
                    <p className="text-gray-600 mb-4">Generate marketing copy with our AI-powered writing tool.</p>
                    <Button variant="outline" className="w-full">Try It Now</Button>
                  </Card>
                  
                  <Card className="p-5">
                    <h3 className="font-semibold mb-2">Image Creator</h3>
                    <p className="text-gray-600 mb-4">Design professional graphics without graphic design experience.</p>
                    <Button variant="outline" className="w-full">Create Images</Button>
                  </Card>
                  
                  <Card className="p-5">
                    <h3 className="font-semibold mb-2">Content Analyzer</h3>
                    <p className="text-gray-600 mb-4">Get feedback on your content's effectiveness and readability.</p>
                    <Button variant="outline" className="w-full">Analyze Content</Button>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-6">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Marketing Analytics Tools</h2>
                <p className="text-gray-600 mb-6">
                  Measure and optimize your marketing performance with our analytics suite.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-virgo-peach/20 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <BarChart className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Performance Dashboard</h3>
                    </div>
                    <p className="text-gray-700 mb-4">Track all your marketing KPIs in one customizable dashboard.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">View Dashboard</Button>
                  </div>
                  
                  <div className="bg-virgo-softBlue/30 p-5 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-3">
                        <Share2 className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-lg">Social Media Analytics</h3>
                    </div>
                    <p className="text-gray-700 mb-4">In-depth analytics for all your social media platforms in one place.</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Connect Accounts</Button>
                  </div>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90">Access All Analytics Tools</Button>
              </Card>
              
              <h3 className="text-xl font-semibold mb-4">Analytics Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-5">
                  <h3 className="font-semibold mb-3">Understanding Key Metrics</h3>
                  <p className="text-gray-600 mb-4">Learn which metrics matter most for your business type and stage.</p>
                  <Button variant="outline" className="w-full">Read Guide</Button>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-3">Data-Driven Decisions</h3>
                  <p className="text-gray-600 mb-4">How to use marketing data to inform your business strategy.</p>
                  <Button variant="outline" className="w-full">View Tutorial</Button>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-3">ROI Calculation</h3>
                  <p className="text-gray-600 mb-4">Methods to accurately measure the return on your marketing investments.</p>
                  <Button variant="outline" className="w-full">Get Calculator</Button>
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

export default MarketingToolkit;
