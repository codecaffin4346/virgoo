
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About Virgo</h1>
            <p className="text-lg text-gray-600 mb-8">
              Empowering women entrepreneurs with AI-driven career development tools 
              and a supportive community.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/community">
                <Button className="bg-primary hover:bg-primary/90">
                  Join Our Community
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="border-primary text-primary">
                  Sign Up Today
                </Button>
              </Link>
            </div>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Virgo is dedicated to closing the gender gap in entrepreneurship by providing women 
                with the tools, resources, and community they need to succeed in building and growing 
                their businesses.
              </p>
              <p className="text-gray-600">
                We leverage cutting-edge AI technology to create personalized career development 
                pathways, connect women entrepreneurs with opportunities, and foster a supportive 
                network of like-minded professionals.
              </p>
            </div>
            <div className="bg-virgo-lavender/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <div>
                    <h3 className="font-medium">Empowerment</h3>
                    <p className="text-gray-600">Providing tools and resources that enable women to take control of their professional journeys.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <div>
                    <h3 className="font-medium">Community</h3>
                    <p className="text-gray-600">Building a supportive network where women can connect, collaborate, and grow together.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <div>
                    <h3 className="font-medium">Innovation</h3>
                    <p className="text-gray-600">Leveraging AI technology to create personalized, effective career development solutions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & CEO",
                  bio: "Former tech executive with 15 years of experience in supporting women entrepreneurs."
                },
                {
                  name: "Michelle Chang",
                  role: "Head of AI Development",
                  bio: "AI specialist focused on creating technology that addresses unique challenges women face in business."
                },
                {
                  name: "Priya Patel",
                  role: "Community Director",
                  bio: "Passionate about building inclusive spaces where women entrepreneurs can thrive and collaborate."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="bg-virgo-peach/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">10,000+</p>
                <p className="text-gray-700">Women entrepreneurs supported</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">85%</p>
                <p className="text-gray-700">Report increased business confidence</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">$25M+</p>
                <p className="text-gray-700">In funding secured by our members</p>
              </div>
            </div>
          </section>
          
          <section className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6">Join the Virgo Community</h2>
            <p className="text-gray-600 mb-8">
              Be part of a movement that's changing the landscape for women entrepreneurs. 
              Whether you're just starting out or looking to scale your business, Virgo offers 
              the tools, resources, and community you need to succeed.
            </p>
            <Link to="/signup">
              <Button className="bg-primary hover:bg-primary/90 btn-gradient px-8 py-6 text-lg">
                Get Started Today
              </Button>
            </Link>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
