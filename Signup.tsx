import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Music } from "lucide-react";

export default function Signup() {
  const { isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <Music className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">MH Instruments</h1>
          <p className="text-gray-600">Start Your Music Journey Today</p>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
            <p className="text-gray-600">Join thousands of independent artists</p>
          </div>

          <div className="space-y-4">
            <a href={getLoginUrl()} className="block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold">
                Sign Up with Manus
              </Button>
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Already have an account?</span>
            </div>
          </div>

          <a href={getLoginUrl()}>
            <Button variant="outline" className="w-full h-12 text-base font-semibold">
              Sign In
            </Button>
          </a>

          {/* Benefits */}
          <div className="pt-6 border-t border-gray-200 space-y-3">
            <p className="text-sm text-gray-600 font-semibold">What you get:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">★</span>
                <span>Unlimited music releases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">★</span>
                <span>Global distribution to all platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">★</span>
                <span>Transparent royalty tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">★</span>
                <span>Access to beat marketplace</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">★</span>
                <span>Custom music composition services</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
