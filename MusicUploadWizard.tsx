import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, ChevronRight, ChevronLeft, Check } from "lucide-react";

interface MusicUploadWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Step = "details" | "tracklist" | "cover" | "delivery" | "review";

export default function MusicUploadWizard({ open, onOpenChange }: MusicUploadWizardProps) {
  const [step, setStep] = useState<Step>("details");
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    composer: "",
    lyricist: "",
    genre: "",
    language: "",
    label: "MH Original Music",
  });

  const steps: { id: Step; title: string; description: string }[] = [
    { id: "details", title: "Release Details", description: "Basic information about your release" },
    { id: "tracklist", title: "Tracklist", description: "Upload your audio files" },
    { id: "cover", title: "Cover Art", description: "Upload cover image" },
    { id: "delivery", title: "Delivery", description: "Select stores and territories" },
    { id: "review", title: "Review", description: "Confirm and submit" },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === step);

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setStep(steps[currentStepIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setStep(steps[currentStepIndex - 1].id);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Release</DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  idx < currentStepIndex
                    ? "bg-green-600 text-white"
                    : idx === currentStepIndex
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {idx < currentStepIndex ? <Check className="h-4 w-4" /> : idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`w-12 h-1 ${
                    idx < currentStepIndex ? "bg-green-600" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="space-y-6">
          {step === "details" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Release Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter release title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="language">Language *</Label>
                  <Select value={formData.language} onValueChange={(value) => setFormData({ ...formData, language: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="genre">Genre *</Label>
                  <Select value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hip-hop">Hip-Hop</SelectItem>
                      <SelectItem value="pop">Pop</SelectItem>
                      <SelectItem value="rock">Rock</SelectItem>
                      <SelectItem value="electronic">Electronic</SelectItem>
                      <SelectItem value="r&b">R&B</SelectItem>
                      <SelectItem value="indie">Indie</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="artist">Artist Name *</Label>
                  <Input
                    id="artist"
                    placeholder="Your artist name"
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="composer">Composer</Label>
                  <Input
                    id="composer"
                    placeholder="Composer name"
                    value={formData.composer}
                    onChange={(e) => setFormData({ ...formData, composer: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="lyricist">Lyricist</Label>
                  <Input
                    id="lyricist"
                    placeholder="Lyricist name"
                    value={formData.lyricist}
                    onChange={(e) => setFormData({ ...formData, lyricist: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="label">Label</Label>
                  <Input
                    id="label"
                    value={formData.label}
                    disabled
                    className="bg-gray-100 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-600 mt-1">This field is locked and cannot be changed</p>
                </div>
              </div>
            </div>
          )}

          {step === "tracklist" && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-600 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Drag and drop your audio files</p>
                <p className="text-sm text-gray-600">Supported formats: WAV, FLAC</p>
              </div>
              <p className="text-sm text-gray-600">Maximum file size: 500MB per track</p>
            </div>
          )}

          {step === "cover" && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-600 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Upload cover art</p>
                <p className="text-sm text-gray-600">Square image (JPG, PNG)</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                <p className="font-semibold mb-2">Cover Art Guidelines:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Minimum 3000x3000 pixels</li>
                  <li>No social media logos or watermarks</li>
                  <li>Text limited to release title and artist name</li>
                </ul>
              </div>
            </div>
          )}

          {step === "delivery" && (
            <div className="space-y-4">
              <div>
                <Label className="font-semibold mb-3 block">Select Stores</Label>
                <div className="space-y-2">
                  {["Spotify", "Apple Music", "YouTube Music", "Amazon Music", "Tidal"].map((store) => (
                    <label key={store} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                      <span>{store}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <Label className="font-semibold mb-3 block">Select Territories</Label>
                <Select defaultValue="worldwide">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="worldwide">Worldwide</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="americas">Americas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === "review" && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Title:</span>
                  <span className="font-semibold">{formData.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Artist:</span>
                  <span className="font-semibold">{formData.artist}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Genre:</span>
                  <span className="font-semibold">{formData.genre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-semibold">{formData.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Label:</span>
                  <span className="font-semibold">{formData.label}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                By submitting, you confirm that you own all rights to this music and agree to our Terms of Service.
              </p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 mt-8 pt-6 border-t">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {step === "review" ? (
            <Button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 gap-2"
            >
              <Check className="h-4 w-4" />
              Submit Release
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
