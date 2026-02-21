import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, DollarSign, Download, Eye } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

export default function Earnings() {
  const earningsData = [
    { month: "Jan", earnings: 1200, plays: 4000 },
    { month: "Feb", earnings: 1900, plays: 2400 },
    { month: "Mar", earnings: 2200, plays: 2210 },
    { month: "Apr", earnings: 2290, plays: 2290 },
    { month: "May", earnings: 2000, plays: 2000 },
    { month: "Jun", earnings: 2181, plays: 2100 },
  ];

  const trackEarnings = [
    { id: 1, title: "Midnight Vibes", plays: 12500, earnings: 625.00, trend: "+15%" },
    { id: 2, title: "Electric Dreams", plays: 8300, earnings: 415.00, trend: "+8%" },
    { id: 3, title: "Summer Groove", plays: 6200, earnings: 310.00, trend: "-2%" },
    { id: 4, title: "Smooth Jazz", plays: 4100, earnings: 205.00, trend: "+5%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Earnings & Royalties</h1>
          <p className="text-gray-600 mt-2">Track your revenue and performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Earnings</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">$12,450</p>
              </div>
              <DollarSign className="h-12 w-12 text-green-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">This Month</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">$2,181</p>
                <p className="text-sm text-green-600 mt-1">+5.2% from last month</p>
              </div>
              <TrendingUp className="h-12 w-12 text-blue-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Plays</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">45.2K</p>
              </div>
              <Eye className="h-12 w-12 text-purple-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Subscription Plan</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">Free</p>
                <p className="text-sm text-gray-600 mt-1">75% royalty share</p>
              </div>
              <Button size="sm" variant="outline" className="h-8">Upgrade</Button>
            </div>
          </div>
        </div>

        {/* Charts and Details */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Earnings Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Earnings Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="earnings" stroke="#3b82f6" name="Earnings ($)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Subscription Info */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Upgrade to Pro</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-blue-200 font-bold">✓</span>
                <span>Earn 100% royalties (vs 75%)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-200 font-bold">✓</span>
                <span>Fast review (24 hours)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-200 font-bold">✓</span>
                <span>Advanced analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-200 font-bold">✓</span>
                <span>Priority support</span>
              </div>
            </div>
            <div className="bg-white/20 rounded p-3 mb-4">
              <p className="text-sm font-semibold">$8/month or $65/year</p>
            </div>
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold">
              Upgrade Now
            </Button>
          </div>
        </div>

        {/* Earnings by Track */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Earnings by Track</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Track</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Plays</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Earnings</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-900">Trend</th>
                </tr>
              </thead>
              <tbody>
                {trackEarnings.map((track) => (
                  <tr key={track.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{track.title}</td>
                    <td className="py-4 px-6 text-gray-700">{track.plays.toLocaleString()}</td>
                    <td className="py-4 px-6 font-semibold text-gray-900">${track.earnings.toFixed(2)}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        track.trend.startsWith("+") 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {track.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Withdrawal CTA */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Ready to withdraw your earnings?</h3>
            <p className="text-gray-600 mt-1">You have $2,181 available for withdrawal</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
            <Download className="h-4 w-4" />
            Request Withdrawal
          </Button>
        </div>
      </div>
    </div>
  );
}
