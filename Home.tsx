import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { Music, Globe, TrendingUp, Zap, Users, Award } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      window.location.href = getLoginUrl();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                  EMBRACE YOUR CREATIVITY
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Release your music globally, earn up to 100% royalties, and connect with your audience. MH Instruments empowers independent artists to take control of their music career.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg"
                  onClick={handleGetStarted}
                >
                  Get Started Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold text-lg"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm">
                <div>
                  <p className="font-bold text-2xl">10K+</p>
                  <p className="text-blue-100">Active Artists</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">1M+</p>
                  <p className="text-blue-100">Monthly Listeners</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">$2M+</p>
                  <p className="text-blue-100">Paid Out</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur-lg opacity-50"></div>
                <div className="relative bg-white rounded-lg p-8 shadow-2xl">
                  <Music className="h-32 w-32 text-blue-600 mx-auto mb-4" />
                  <p className="text-center text-gray-600 font-semibold">Your Music, Your Rules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MH Instruments?</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed as an independent artist</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Distribution",
                description: "Release your music to all major streaming platforms instantly",
              },
              {
                icon: TrendingUp,
                title: "Maximum Royalties",
                description: "Earn 75% on free plan, 100% on Pro plan. No hidden fees.",
              },
              {
                icon: Zap,
                title: "Fast Review",
                description: "Get your music approved and live in hours, not days",
              },
              {
                icon: Users,
                title: "Beat Marketplace",
                description: "Browse and purchase high-quality beats from producers",
              },
              {
                icon: Award,
                title: "Custom Compositions",
                description: "Order original music tailored to your specifications",
              },
              {
                icon: Music,
                title: "Analytics Dashboard",
                description: "Track your earnings and performance in real-time",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works for you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
              <p className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Unlimited releases</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">75% royalty share</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Standard review (5-7 days)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Analytics dashboard</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="border-2 border-blue-600 rounded-lg p-8 relative bg-blue-50">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
              <p className="text-4xl font-bold text-gray-900 mb-2">$8<span className="text-lg text-gray-600">/month</span></p>
              <p className="text-gray-600 mb-6">or $65/year (save 32%)</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Unlimited releases</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">100% royalty share</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Fast review (24 hours)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleGetStarted}>
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Share Your Music?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of independent artists already earning on MH Instruments
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg"
            onClick={handleGetStarted}
          >
            Start for Free Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">MH Instruments</h3>
              <p className="text-sm">Empowering independent artists worldwide</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white">Features</a></li>
                <li><a href="/" className="hover:text-white">Pricing</a></li>
                <li><a href="/beats" className="hover:text-white">Beat Store</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hexaa.mh@gmail.com" className="hover:text-white">Email</a></li>
                <li><a href="https://wa.me/880163211970" className="hover:text-white">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://facebook.com/mhoriginalmusic" className="hover:text-white">Facebook</a></li>
                <li><a href="https://youtube.com/mhoriginalmusic" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 MH Instruments. All rights reserved. | Sub-brand of MH Original Music</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
