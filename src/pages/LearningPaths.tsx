
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen, Clock, Star, ChevronRight, Award, Laptop, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LearningPaths = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock learning paths data - in a real app this would come from Supabase
  const learningPaths = [
    {
      id: "1",
      title: "Business Plan Development",
      description: "Learn how to create a comprehensive business plan that attracts investors and guides your entrepreneurial journey.",
      courses: 5,
      duration: "8 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      progress: 0,
    },
    {
      id: "2",
      title: "Financial Management for Startups",
      description: "Master the essentials of financial planning, cash flow management, and raising capital for your business.",
      courses: 4,
      duration: "6 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      progress: 25,
    },
    {
      id: "3",
      title: "Digital Marketing Strategy",
      description: "Develop a powerful online presence and marketing strategy to reach your target audience and grow your business.",
      courses: 6,
      duration: "10 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      progress: 65,
    },
    {
      id: "4",
      title: "Leadership for Women Entrepreneurs",
      description: "Build the leadership skills needed to inspire teams, negotiate effectively, and overcome gender-based challenges.",
      courses: 4,
      duration: "8 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      progress: 0,
    },
  ];
  
  const filteredPaths = learningPaths.filter(path => 
    path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    path.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    path.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Personalized Learning Paths</h1>
          <p className="text-lg text-gray-600 mb-8">
            Develop the skills you need to succeed as a woman entrepreneur with customized learning journeys.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="flex-grow relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search learning paths by title, topic, or skill level"
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-primary whitespace-nowrap">Find Courses</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-virgo-lavender/20 rounded-lg p-4 flex items-center">
                <BookOpen className="text-primary mr-3" size={20} />
                <div>
                  <h3 className="font-medium">200+ Courses</h3>
                  <p className="text-sm text-gray-600">Designed for women entrepreneurs</p>
                </div>
              </div>
              <div className="bg-virgo-peach/20 rounded-lg p-4 flex items-center">
                <Clock className="text-amber-500 mr-3" size={20} />
                <div>
                  <h3 className="font-medium">Self-Paced Learning</h3>
                  <p className="text-sm text-gray-600">Learn on your own schedule</p>
                </div>
              </div>
              <div className="bg-virgo-rose/20 rounded-lg p-4 flex items-center">
                <Star className="text-yellow-500 mr-3" size={20} />
                <div>
                  <h3 className="font-medium">Expert Instructors</h3>
                  <p className="text-sm text-gray-600">Learn from industry leaders</p>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Continue Your Learning Journey</h2>
          
          <div className="grid grid-cols-1 gap-6 mb-12">
            {filteredPaths.filter(path => path.progress > 0).map((path) => (
              <Card key={path.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={path.image} 
                      alt={path.title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{path.title}</h3>
                      <span className="bg-virgo-lavender/20 text-primary px-2 py-1 rounded text-sm">
                        {path.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    <div className="flex gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <BookOpen size={16} className="mr-1" />
                        <span>{path.courses} Courses</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{path.duration}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-medium">{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>
                    <Link to={`/learning-paths/${path.id}`}>
                      <Button className="bg-primary">
                        Continue Learning
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Explore Learning Paths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {filteredPaths.filter(path => path.progress === 0).map((path) => (
              <Card key={path.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48">
                  <img 
                    src={path.image} 
                    alt={path.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{path.title}</h3>
                    <span className="bg-virgo-lavender/20 text-primary px-2 py-1 rounded text-sm">
                      {path.level}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{path.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      <span>{path.courses} Courses</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{path.duration}</span>
                    </div>
                  </div>
                  <Link to={`/learning-paths/${path.id}`}>
                    <Button className="w-full bg-primary">
                      Enroll Now
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-virgo-peach/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Why Our Learning Paths?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-3 mb-3 shadow-md">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="font-medium mb-2">Tailored for Women Entrepreneurs</h3>
                <p className="text-sm text-gray-600">Content that addresses unique challenges and opportunities for women in business.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-3 mb-3 shadow-md">
                  <Laptop className="text-amber-500" size={24} />
                </div>
                <h3 className="font-medium mb-2">Practical, Actionable Skills</h3>
                <p className="text-sm text-gray-600">Apply what you learn immediately to grow your business and career.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-3 mb-3 shadow-md">
                  <Users className="text-green-500" size={24} />
                </div>
                <h3 className="font-medium mb-2">Supportive Community</h3>
                <p className="text-sm text-gray-600">Learn alongside other women entrepreneurs and share experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearningPaths;
