
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // More comprehensive rule-based responses
    let response = '';
    const lowerMessage = message.toLowerCase();
    
    // General greetings and introductions
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi ') || lowerMessage === 'hi') {
      response = "Hello! I'm Virgo's AI assistant. How can I help you today with entrepreneurship, job matching, or learning resources?";
    } 
    // Help responses
    else if (lowerMessage.includes('help') || lowerMessage.includes('assist') || lowerMessage.includes('support')) {
      response = "I can help you navigate Virgo's features, answer questions about entrepreneurship, provide information on our tools, or connect you with resources. What specifically are you looking for help with?";
    }
    // Job and career related questions
    else if (lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('work')) {
      response = "Virgo's job matching feature uses AI to find opportunities that align with your skills and career goals. You can upload your resume for personalized matches, filter by industry or location, and even get application tips. Would you like to try it now?";
    } 
    // Interview preparation
    else if (lowerMessage.includes('interview') || lowerMessage.includes('prepare')) {
      response = "Our interview training section offers AI-powered mock interviews, feedback on your responses, and industry-specific question preparation. You can practice both leadership and technical interviews, and even get feedback on your body language and delivery style.";
    } 
    // Learning and education
    else if (lowerMessage.includes('learn') || lowerMessage.includes('course') || lowerMessage.includes('skill')) {
      response = "Virgo offers personalized learning paths in entrepreneurship, leadership, marketing, finance, and technology. Each path includes curated courses, workshops, and resources designed specifically for women entrepreneurs at different stages of their journey.";
    } 
    // Funding and financial questions
    else if (lowerMessage.includes('fund') || lowerMessage.includes('grant') || lowerMessage.includes('money') || lowerMessage.includes('invest')) {
      response = "Our Finance Hub provides information on grants, loans, angel investors, and venture capital specifically for women entrepreneurs. We also offer financial planning tools, cash flow calculators, and connections to potential investors through our network.";
    } 
    // Account and registration
    else if (lowerMessage.includes('sign up') || lowerMessage.includes('register') || lowerMessage.includes('account')) {
      response = "You can create an account by clicking on 'Sign Up' in the navigation menu. We offer both email registration and Google sign-in options. Your account gives you access to all our tools, saved preferences, and personalized recommendations.";
    } 
    // Google login specifics
    else if (lowerMessage.includes('google') || lowerMessage.includes('login')) {
      response = "To sign in with Google, click the 'Continue with Google' button on our login page. This allows for quick registration and login using your Google account. If you're having trouble, make sure pop-ups aren't blocked in your browser and that you're using a current version.";
    } 
    // Marketing resources
    else if (lowerMessage.includes('market') || lowerMessage.includes('promotion') || lowerMessage.includes('advertis')) {
      response = "Our Marketing Toolkit includes templates for social media, email campaigns, content calendars, and analytics tools. We also offer guides on growth marketing, community building, and digital marketing strategies tailored for women entrepreneurs.";
    }
    // Business insights and research
    else if (lowerMessage.includes('research') || lowerMessage.includes('insight') || lowerMessage.includes('trend') || lowerMessage.includes('analysis')) {
      response = "The Business Insights section provides market research tools, industry trend reports, and competitor analysis resources. You can generate custom reports for your industry, create customer personas, and stay updated on emerging opportunities in your market.";
    }
    // Community features
    else if (lowerMessage.includes('community') || lowerMessage.includes('network') || lowerMessage.includes('connect')) {
      response = "Virgo's community features allow you to connect with other women entrepreneurs, join industry-specific groups, participate in discussions, and attend virtual networking events. It's a supportive space to share experiences and build valuable connections.";
    }
    // Resume analysis
    else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      response = "Our Resume Analysis tool uses AI to evaluate your resume, suggest improvements, highlight strengths, and identify gaps in your experience. It also provides industry-specific recommendations to help your resume stand out to employers and recruiters.";
    }
    // Thank you responses
    else if (lowerMessage.includes('thank')) {
      response = "You're welcome! I'm here to support your entrepreneurial journey. Feel free to ask if you have any other questions about Virgo's features or resources.";
    }
    // About Virgo
    else if (lowerMessage.includes('about') || lowerMessage.includes('virgo')) {
      response = "Virgo is a comprehensive platform designed to empower women entrepreneurs through AI-driven career development tools, learning resources, funding connections, and a supportive community. Our mission is to break barriers and foster success for women in business.";
    }
    // Feedback and improvements
    else if (lowerMessage.includes('feedback') || lowerMessage.includes('suggest') || lowerMessage.includes('improve')) {
      response = "We value your feedback! You can share suggestions through the feedback form in your account settings or email us directly at feedback@virgo.ai. Your input helps us continuously improve our platform to better serve your needs.";
    }
    // Default response for unmatched queries
    else {
      response = "I'm here to help with questions about job matching, interview preparation, learning resources, funding options, marketing tools, business insights, or any other Virgo features. Could you please provide more details about what you're looking for?";
    }

    console.log("AI Assistant responding to:", message);
    console.log("Response:", response);
    
    return new Response(
      JSON.stringify({ response }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error in ai-assistant function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
