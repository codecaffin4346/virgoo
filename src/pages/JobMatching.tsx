
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JobMatching = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock job data - in a real app this would come from Supabase
  const jobs = [
    {
      id: "1",
      title: "Marketing Director",
      company: "TechGrowth Inc.",
      location: "San Francisco, CA (Remote)",
      description: "Lead our marketing team to develop strategic campaigns for our SaaS products.",
      matchScore: 95,
    },
    {
      id: "2",
      title: "Financial Advisor",
      company: "WealthWise Partners",
      location: "New York, NY",
      description: "Provide financial guidance to women entrepreneurs seeking to scale their businesses.",
      matchScore: 88,
    },
    {
      id: "3",
      title: "E-commerce Strategist",
      company: "Digital Retail Solutions",
      location: "Chicago, IL (Hybrid)",
      description: "Help businesses optimize their online sales channels and increase conversion rates.",
      matchScore: 82,
    },
    {
      id: "4",
      title: "Business Development Manager",
      company: "Innovation Hub",
      location: "Austin, TX",
      description: "Connect startups with potential investors and partners to facilitate growth.",
      matchScore: 78,
    },
  ];
  
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Job Matching</h1>
          <p className="text-lg text-gray-600 mb-8">
            Find the perfect job opportunities tailored to your skills, experience, and preferences.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search job titles, companies, or keywords"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filters</span>
              </Button>
              <Button className="bg-primary">Search Jobs</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-virgo-lavender/20 rounded-lg p-4">
                <h3 className="font-medium mb-2">Complete Your Profile</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get better job matches by completing your profile with your skills and preferences.
                </p>
                <Link to="/profile">
                  <Button variant="outline" size="sm" className="text-primary border-primary">
                    Update Profile
                  </Button>
                </Link>
              </div>
              <div className="bg-virgo-peach/20 rounded-lg p-4">
                <h3 className="font-medium mb-2">Upload Your Resume</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Let our AI analyze your resume to find the best job matches for your experience.
                </p>
                <Link to="/resume-analysis">
                  <Button variant="outline" size="sm" className="text-primary border-primary">
                    Upload Resume
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Recommended Jobs for You</h2>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <p className="text-primary font-medium mb-1">{job.company}</p>
                    <p className="text-gray-600 text-sm mb-3">{job.location}</p>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                      {job.matchScore}% Match
                    </div>
                    <Briefcase className="text-gray-400 mb-2" />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button className="bg-primary">View Details</Button>
                  <Button variant="outline" className="border-primary text-primary">Save Job</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobMatching;
