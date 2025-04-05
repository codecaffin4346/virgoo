
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

    // Simple rule-based responses for common questions
    let response = '';
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi ') || lowerMessage === 'hi') {
      response = "Hello! How can I help you with Virgo today?";
    } else if (lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('work')) {
      response = "Our job matching feature uses AI to find opportunities that match your skills and experience. You can upload your resume for better matches!";
    } else if (lowerMessage.includes('interview') || lowerMessage.includes('prepare')) {
      response = "Our interview training section offers practice sessions, common questions, and feedback to help you ace your interviews.";
    } else if (lowerMessage.includes('learn') || lowerMessage.includes('course') || lowerMessage.includes('skill')) {
      response = "Virgo offers personalized learning paths to help you develop the skills needed for entrepreneurial success. Check out our learning paths section!";
    } else if (lowerMessage.includes('fund') || lowerMessage.includes('grant') || lowerMessage.includes('money') || lowerMessage.includes('invest')) {
      response = "We provide information on various funding resources including grants, loans, and investment opportunities specifically for women entrepreneurs.";
    } else if (lowerMessage.includes('sign up') || lowerMessage.includes('register') || lowerMessage.includes('account')) {
      response = "You can create an account by clicking on 'Sign Up' in the navigation menu. We offer email registration and Google sign-in options.";
    } else if (lowerMessage.includes('google') || lowerMessage.includes('login')) {
      response = "You can sign in with Google by clicking the 'Continue with Google' button on our login page. Make sure pop-ups aren't blocked in your browser.";
    } else if (lowerMessage.includes('thank')) {
      response = "You're welcome! Feel free to ask if you have any other questions about Virgo.";
    } else {
      response = "I'm here to help you navigate Virgo, find job opportunities, prepare for interviews, access learning resources, and discover funding options. What specific area are you interested in?";
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
