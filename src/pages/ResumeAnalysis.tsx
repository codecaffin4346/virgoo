
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FileUp, FileText, Check, Star, AlertCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ResumeAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    
    if (file) {
      toast({
        title: "File selected",
        description: `Selected: ${file.name}`,
      });
    }
  };

  const analyzeResume = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please upload a resume or cover letter first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      
      toast({
        title: "Analysis complete",
        description: "Your resume has been analyzed successfully!",
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-lavender text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">AI-Powered Resume & Cover Letter Analysis</h1>
              <p className="text-base md:text-lg mb-6 md:mb-8">
                Get instant feedback on your resume and cover letter to increase your chances of landing your dream job or business opportunity.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="resume" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 md:mb-8">
                  <TabsTrigger value="resume">Resume Analysis</TabsTrigger>
                  <TabsTrigger value="cover-letter">Cover Letter Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="resume">
                  <Card>
                    <CardContent className="pt-6">
                      {!analysisComplete ? (
                        <div className="text-center p-4 md:p-6">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                            <FileUp className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                          </div>
                          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Upload Your Resume</h2>
                          <p className="text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base">
                            Our AI will analyze your resume and provide personalized feedback to help you stand out in the job market.
                          </p>
                          
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 mb-4 md:mb-6 hover:border-primary transition-colors">
                            <input
                              type="file"
                              id="resume-upload"
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              onChange={handleFileChange}
                            />
                            <label
                              htmlFor="resume-upload"
                              className="cursor-pointer flex flex-col items-center"
                            >
                              <FileText className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mb-3 md:mb-4" />
                              <span className="text-primary font-medium text-sm md:text-base">
                                Click to upload or drag and drop
                              </span>
                              <span className="text-xs md:text-sm text-gray-500 mt-1">
                                PDF, DOC, or DOCX (max 5MB)
                              </span>
                              {selectedFile && (
                                <div className="mt-4 flex items-center text-green-600 text-sm md:text-base">
                                  <Check className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                                  {selectedFile.name}
                                </div>
                              )}
                            </label>
                          </div>
                          
                          <Button 
                            onClick={analyzeResume} 
                            disabled={isAnalyzing || !selectedFile}
                            className="w-full md:w-auto btn-gradient"
                          >
                            {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
                            {!isAnalyzing && <ArrowRight size={16} className="ml-2" />}
                          </Button>
                        </div>
                      ) : (
                        <div className="p-4 md:p-6">
                          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Resume Analysis Results</h2>
                          
                          <div className="mb-6 md:mb-8">
                            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 flex items-center">
                              <Star className="text-yellow-500 mr-2 h-4 w-4 md:h-5 md:w-5" /> Overall Score: 8/10
                            </h3>
                            <div className="bg-gray-200 rounded-full h-3 md:h-4 mb-3 md:mb-4">
                              <div className="bg-primary h-3 md:h-4 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base">
                              Your resume is strong but has some areas for improvement. See detailed feedback below.
                            </p>
                          </div>
                          
                          <div className="space-y-4 md:space-y-6">
                            <div className="border border-green-200 bg-green-50 rounded-lg p-3 md:p-4">
                              <h4 className="font-medium text-green-800 mb-2 flex items-center text-sm md:text-base">
                                <Check className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Strengths
                              </h4>
                              <ul className="list-disc list-inside space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                                <li>Clear and concise experience descriptions</li>
                                <li>Quantifiable achievements with metrics</li>
                                <li>Good use of action verbs</li>
                                <li>Relevant skills highlighted effectively</li>
                              </ul>
                            </div>
                            
                            <div className="border border-amber-200 bg-amber-50 rounded-lg p-3 md:p-4">
                              <h4 className="font-medium text-amber-800 mb-2 flex items-center text-sm md:text-base">
                                <AlertCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Areas for Improvement
                              </h4>
                              <ul className="list-disc list-inside space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                                <li>Professional summary could be more impactful</li>
                                <li>Consider adding more industry-specific keywords</li>
                                <li>Reorganize achievements for better visibility</li>
                                <li>Education section could be more concise</li>
                              </ul>
                            </div>
                            
                            <div className="border border-blue-200 bg-blue-50 rounded-lg p-3 md:p-4">
                              <h4 className="font-medium text-blue-800 mb-2 text-sm md:text-base">ATS Compatibility</h4>
                              <p className="text-gray-700 mb-2 text-xs md:text-sm">
                                Your resume is 75% compatible with Applicant Tracking Systems (ATS).
                              </p>
                              <ul className="list-disc list-inside space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                                <li>Good use of standard headings</li>
                                <li>Improvement needed in keyword optimization</li>
                                <li>Consider using a simpler format for better parsing</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-3 md:gap-4">
                            <Button className="bg-primary hover:bg-primary/90 btn-gradient flex-1">
                              View Enhanced Resume
                            </Button>
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 flex-1">
                              Download Full Analysis
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="cover-letter">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center p-4 md:p-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                          <FileUp className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Upload Your Cover Letter</h2>
                        <p className="text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto text-sm md:text-base">
                          Our AI will analyze your cover letter and provide personalized feedback to help you make a strong impression.
                        </p>
                        
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 mb-4 md:mb-6 hover:border-primary transition-colors">
                          <input
                            type="file"
                            id="cover-letter-upload"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                          <label
                            htmlFor="cover-letter-upload"
                            className="cursor-pointer flex flex-col items-center"
                          >
                            <FileText className="h-10 w-10 md:h-12 md:w-12 text-gray-400 mb-3 md:mb-4" />
                            <span className="text-primary font-medium text-sm md:text-base">
                              Click to upload or drag and drop
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 mt-1">
                              PDF, DOC, or DOCX (max 5MB)
                            </span>
                            {selectedFile && (
                              <div className="mt-4 flex items-center text-green-600 text-sm md:text-base">
                                <Check className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                                {selectedFile.name}
                              </div>
                            )}
                          </label>
                        </div>
                        
                        <Button className="w-full md:w-auto btn-gradient" onClick={analyzeResume} disabled={!selectedFile}>
                          Analyze Cover Letter <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-10 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Use Our AI Resume Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <div className="text-primary font-bold text-lg md:text-xl">1</div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">AI-Powered Insights</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Our advanced AI analyzes your resume based on industry standards and hiring trends to provide personalized feedback.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <div className="text-primary font-bold text-lg md:text-xl">2</div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">ATS Optimization</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Ensure your resume passes through Applicant Tracking Systems with our compatibility check and keyword suggestions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  <div className="text-primary font-bold text-lg md:text-xl">3</div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Customized Templates</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Access professionally designed resume templates tailored for women entrepreneurs and business professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-10 md:py-16 bg-virgo-peach">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Enhance Your Resume?</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                Join Virgo today and get full access to our AI-powered resume tools, templates, and expert guidance.
              </p>
              <Button size="lg" className="btn-gradient">
                Sign Up Now <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResumeAnalysis;
