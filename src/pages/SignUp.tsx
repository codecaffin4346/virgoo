
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/');
      }
    };
    checkSession();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple validation
    if (!fullName || !email || !password || !agreeTerms) {
      toast({
        title: "Error",
        description: "Please fill in all fields and agree to the terms",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      // Register with Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      if (data) {
        // Trigger welcome email via edge function
        await supabase.functions.invoke('send-welcome-email', {
          body: { email, name: fullName },
        });

        toast({
          title: "Success",
          description: "Please check your email to verify your account",
        });
        
        // In development environments where email verification might be disabled
        navigate('/');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred during sign up",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred with Google sign up",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <span className="font-playfair font-bold text-3xl">
              <span className="text-primary">V</span>irgo
            </span>
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h1>
          <p className="mt-2 text-sm text-gray-600">Join Virgo and start your entrepreneurial journey</p>
        </div>

        <button 
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-70"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="#4285F4" d="M21.35 12.04c0-.8-.07-1.46-.19-2.11H12v3.77h5.24c-.25 1.21-.97 2.23-2.04 2.92v2.43h3.25c1.91-1.76 3-4.31 3-7.01z" />
            <path fill="#34A853" d="M12 21c2.7 0 5-1 6.45-2.95l-3.25-2.43c-.86.58-1.98 1.24-3.2 1.24-2.46 0-4.56-1.67-5.31-3.91H3.32v2.5C4.95 18.98 8.28 21 12 21z" />
            <path fill="#FBBC05" d="M6.69 12.95c-.19-.58-.3-1.19-.3-1.83 0-.64.11-1.25.3-1.83V6.79H3.32C2.7 8.26 2.01 10.01 2.01 12c0 1.99.69 3.74 1.95 5.21l3.73-2.26z" />
            <path fill="#EA4335" d="M12 6.68c1.36 0 2.58.51 3.55 1.37l2.8-2.8C16.79 3.77 14.6 3 12 3 8.28 3 4.95 5.02 3.32 8.68l3.37 2.44c.75-2.24 2.85-3.91 5.31-3.91z" />
          </svg>
          {loading ? 'Processing...' : 'Continue with Google'}
        </button>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-gray-300 absolute w-full"></div>
          <span className="bg-white px-3 text-gray-500 text-sm relative z-10">or sign up with email</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <div className="relative">
                  <User className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-10"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <Mail className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <Lock className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                    disabled={loading}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters long with a mix of letters, numbers, and symbols.
                </p>
              </div>

              <div className="flex items-center">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  disabled={loading}
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree to the{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full btn-gradient group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white"
              disabled={loading}
            >
              {loading ? 'Creating account...' : 'Sign Up'}
              {!loading && <ArrowRight size={16} />}
            </Button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
