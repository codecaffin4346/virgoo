
import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Pause, SkipForward, Video, Mic, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InterviewTraining = () => {
  const [activeTab, setActiveTab] = useState("interview-prep");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Interview Training</h1>
          <p className="text-lg text-gray-600 mb-8">
            Practice and perfect your interview skills with our AI coach, tailored for women entrepreneurs.
          </p>
          
          <Tabs defaultValue="interview-prep" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="interview-prep">Interview Preparation</TabsTrigger>
              <TabsTrigger value="pitch-training">Pitch Training</TabsTrigger>
            </TabsList>
            
            <TabsContent value="interview-prep" className="mt-6">
              <Card className="p-6 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Mock Interview Simulator</h2>
                    <p className="text-gray-600 mb-6">
                      Practice your interview skills with our AI interviewer. Get real-time feedback and suggestions to improve your responses.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <div className="bg-virgo-lavender w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">1</span>
                        </div>
                        <span>Select an interview type based on your target role</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-virgo-lavender w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">2</span>
                        </div>
                        <span>Answer questions asked by our AI interviewer</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-virgo-lavender w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">3</span>
                        </div>
                        <span>Receive instant feedback and suggestions</span>
                      </div>
                    </div>
                    
                    <Button className="bg-primary w-full lg:w-auto">Start Mock Interview</Button>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center p-6">
                    <div className="text-center">
                      <Video size={48} className="mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-3">Your mock interview session will appear here</p>
                      <div className="flex justify-center space-x-3">
                        <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                          <Play size={20} className="text-primary" />
                        </button>
                        <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                          <Pause size={20} className="text-gray-600" />
                        </button>
                        <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                          <SkipForward size={20} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <h3 className="text-xl font-semibold mb-4">Popular Interview Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <Mic className="text-primary mb-3" />
                  <h4 className="font-medium mb-1">Leadership Interviews</h4>
                  <p className="text-sm text-gray-600">Practice questions focused on your leadership style and experience.</p>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <FileText className="text-green-500 mb-3" />
                  <h4 className="font-medium mb-1">Technical Interviews</h4>
                  <p className="text-sm text-gray-600">Prepare for role-specific technical questions and scenarios.</p>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <Award className="text-amber-500 mb-3" />
                  <h4 className="font-medium mb-1">Behavioral Interviews</h4>
                  <p className="text-sm text-gray-600">Master STAR method responses to behavioral questions.</p>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="pitch-training" className="mt-6">
              <Card className="p-6 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Business Pitch Simulator</h2>
                    <p className="text-gray-600 mb-6">
                      Refine your business pitch with AI-powered feedback. Perfect your delivery for investors, partners, and customers.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center">
                        <div className="bg-virgo-peach w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">1</span>
                        </div>
                        <span>Upload your pitch deck or start from scratch</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-virgo-peach w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">2</span>
                        </div>
                        <span>Practice your pitch with our AI audience</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-virgo-peach w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          <span className="font-medium">3</span>
                        </div>
                        <span>Get detailed analysis and improvement suggestions</span>
                      </div>
                    </div>
                    
                    <Button className="bg-primary w-full lg:w-auto">Start Pitch Training</Button>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center p-6">
                    <div className="text-center">
                      <Video size={48} className="mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-3">Your pitch practice session will appear here</p>
                      <div className="flex justify-center space-x-3">
                        <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                          <Play size={20} className="text-primary" />
                        </button>
                        <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                          <Pause size={20} className="text-gray-600" />
                        </button>
                        <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                          <SkipForward size={20} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <h3 className="text-xl font-semibold mb-4">Pitch Training Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h4 className="font-medium mb-1">Elevator Pitch Templates</h4>
                  <p className="text-sm text-gray-600">Quick, compelling frameworks to grab attention in 30 seconds.</p>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h4 className="font-medium mb-1">Investor Pitch Decks</h4>
                  <p className="text-sm text-gray-600">Proven structures that have helped secure funding.</p>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <h4 className="font-medium mb-1">Storytelling Techniques</h4>
                  <p className="text-sm text-gray-600">Connect emotionally with your audience through narrative.</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-virgo-lavender/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Pro Tips from Successful Women Entrepreneurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <p className="italic text-gray-700 mb-3">
                  "Confidence isn't about knowing all the answers, it's about being comfortable saying 'I don't know, but I'll find out.'"
                </p>
                <p className="font-medium">Sarah Johnson, CEO of TechSavvy Solutions</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="italic text-gray-700 mb-3">
                  "Practice your pitch until you can deliver it with passion even at 3 AM. Authenticity and preparation are a powerful combination."
                </p>
                <p className="font-medium">Michelle Lee, Founder of GrowthPath Ventures</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InterviewTraining;
