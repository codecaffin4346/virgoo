
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Community from "./pages/Community";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import JobMatching from "./pages/JobMatching";
import InterviewTraining from "./pages/InterviewTraining";
import LearningPaths from "./pages/LearningPaths";
import NotFound from "./pages/NotFound";
import AIChatAssistant from "./components/AIChatAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resume-analysis" element={<ResumeAnalysis />} />
          <Route path="/job-matching" element={<JobMatching />} />
          <Route path="/interview-training" element={<InterviewTraining />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
