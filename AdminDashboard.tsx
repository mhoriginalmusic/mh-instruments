import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Music, ShoppingCart, DollarSign, CheckCircle, XCircle } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage users, content, orders, and withdrawals</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
              </div>
              <Users className="h-12 w-12 text-blue-600 opacity-20" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending Reviews</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
              </div>
              <Music className="h-12 w-12 text-yellow-600 opacity-20" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending Withdrawals</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
              </div>
              <DollarSign className="h-12 w-12 text-green-600 opacity-20" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Custom Orders</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
              </div>
              <ShoppingCart className="h-12 w-12 text-purple-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="grid w-full grid-cols-4 border-b border-gray-200 rounded-none">
              <TabsTrigger value="users" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600">
                <Users className="h-4 w-4 mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600">
                <Music className="h-4 w-4 mr-2" />
                Reviews
              </TabsTrigger>
              <TabsTrigger value="orders" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="withdrawals" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600">
                <DollarSign className="h-4 w-4 mr-2" />
                Withdrawals
              </TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users" className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">User</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Plan</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Joined</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map((item) => (
                      <tr key={item} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">Artist {item}</td>
                        <td className="py-3 px-4">artist{item}@example.com</td>
                        <td className="py-3 px-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Pro</span></td>
                        <td className="py-3 px-4">Jan {item}, 2026</td>
                        <td className="py-3 px-4">
                          <Button variant="outline" size="sm">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">Release {item}</h3>
                        <p className="text-sm text-gray-600">by Artist {item}</p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">In Moderation</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" className="gap-1">
                        <XCircle className="h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">Custom Order #{1000 + item}</h3>
                        <p className="text-sm text-gray-600">Genre: Hip-Hop | Price: $199.99</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">In Progress</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Download Raw File</Button>
                      <Button size="sm" variant="outline">Upload Final Track</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Withdrawals Tab */}
            <TabsContent value="withdrawals" className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">Withdrawal Request #{5000 + item}</h3>
                        <p className="text-sm text-gray-600">Artist {item} • ${500 + item * 100} • Payoneer</p>
                      </div>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Pending</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
                      <Button size="sm" variant="destructive">Reject</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
