
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, ChevronDown, Bot, User, ArrowLeft } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hi there! I'm Virgo's AI assistant. How can I help you today with entrepreneurship, job matching, or learning resources?",
    isUser: false,
    timestamp: new Date(),
  },
];

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call Supabase Edge Function for AI response
      const { data, error } = await supabase.functions.invoke('ai-assistant', {
        body: { message: inputValue },
      });

      if (error) throw error;

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I'm having trouble understanding that. Could you rephrase?",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Error getting AI response:', error);
      toast({
        title: "Error",
        description: "Could not get AI response. Please try again.",
        variant: "destructive",
      });

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having technical difficulties right now. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages(initialMessages);
  };

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all z-50 flex items-center justify-center"
        aria-label="Open chat assistant"
      >
        <MessageCircle size={24} />
        <span className="ml-2 font-medium hidden sm:inline">Ask Virgo</span>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div 
          className={`fixed bottom-6 right-6 ${
            isExpanded ? 'w-full md:w-[600px] h-[80vh]' : 'w-80 sm:w-96 h-96'
          } bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 z-50 transition-all duration-300`}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between bg-primary text-white px-4 py-3 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <h3 className="font-medium">Virgo Assistant</h3>
            </div>
            <div className="flex space-x-1">
              {isExpanded ? (
                <button onClick={toggleExpand} className="p-1 hover:bg-primary-foreground/10 rounded">
                  <ArrowLeft size={18} />
                </button>
              ) : (
                <button onClick={toggleExpand} className="p-1 hover:bg-primary-foreground/10 rounded">
                  <ChevronDown size={18} className="rotate-180" />
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-primary-foreground/10 rounded">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                  } flex gap-2`}
                >
                  {!message.isUser && (
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-virgo-lavender rounded-full flex items-center justify-center">
                        <Bot size={14} className="text-primary" />
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="text-sm sm:text-base">{message.content}</p>
                    <span className="text-xs opacity-70 block mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {message.isUser && (
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <User size={14} className="text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-lg px-4 py-2 border border-gray-200 rounded-tl-none shadow-sm">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat actions */}
          <div className="px-4 py-2 bg-white border-t border-gray-100">
            <div className="flex justify-between items-center">
              <button 
                onClick={clearChat} 
                className="text-xs text-gray-500 hover:text-primary transition-colors"
              >
                Clear chat
              </button>
            </div>
          </div>

          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 bg-white rounded-b-lg">
            <div className="flex items-center space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border-gray-300 focus:border-primary"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputValue.trim()}
                className="bg-primary hover:bg-primary/90 transition-all"
              >
                <Send size={18} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatAssistant;
