import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Music, Trash2, Clock } from "lucide-react";
import { useState } from "react";
import MusicUploadWizard from "@/components/MusicUploadWizard";

export default function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("released");
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">My Music</h1>
            <p className="text-gray-600 mt-2">Manage your releases and tracks</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 gap-2" onClick={() => setWizardOpen(true)}>
            <Plus className="h-5 w-5" />
            Create Release
          </Button>

        <MusicUploadWizard open={wizardOpen} onOpenChange={setWizardOpen} />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Releases</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Plays</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">45.2K</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">This Month</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">$1,240</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Earnings</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">$12,450</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 border-b border-gray-200 rounded-none">
              <TabsTrigger value="released" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600">
                <Music className="h-4 w-4 mr-2" />
                Released
              </TabsTrigger>
              <TabsTrigger value="drafts" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600">
                <Clock className="h-4 w-4 mr-2" />
                Drafts
              </TabsTrigger>
              <TabsTrigger value="deleted" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600">
                <Trash2 className="h-4 w-4 mr-2" />
                Deleted
              </TabsTrigger>
            </TabsList>

            <TabsContent value="released" className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Music className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Track Title {item}</p>
                        <p className="text-sm text-gray-600">Released on Jan {item}, 2026</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">2.5K plays</p>
                      <p className="text-sm text-green-600">+$124.50</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drafts" className="p-6">
              <div className="text-center py-12">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No drafts yet</p>
              </div>
            </TabsContent>

            <TabsContent value="deleted" className="p-6">
              <div className="text-center py-12">
                <Trash2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No deleted releases</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
