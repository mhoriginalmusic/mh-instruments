import { Button } from "@/components/ui/button";
import { Music, Play, ShoppingCart, Filter } from "lucide-react";
import { useState } from "react";

export default function BeatStore() {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const genres = ["all", "hip-hop", "pop", "electronic", "r&b", "rock", "indie"];

  const beats = [
    {
      id: 1,
      title: "Midnight Vibes",
      genre: "hip-hop",
      bpm: 95,
      price: 29.99,
      plays: 1200,
    },
    {
      id: 2,
      title: "Electric Dreams",
      genre: "electronic",
      bpm: 128,
      price: 39.99,
      plays: 2100,
    },
    {
      id: 3,
      title: "Smooth Jazz",
      genre: "r&b",
      bpm: 90,
      price: 24.99,
      plays: 890,
    },
    {
      id: 4,
      title: "Summer Groove",
      genre: "pop",
      bpm: 110,
      price: 34.99,
      plays: 3200,
    },
    {
      id: 5,
      title: "Rock Anthem",
      genre: "rock",
      bpm: 120,
      price: 44.99,
      plays: 1500,
    },
    {
      id: 6,
      title: "Indie Sunset",
      genre: "indie",
      bpm: 105,
      price: 27.99,
      plays: 950,
    },
  ];

  const filteredBeats = selectedGenre === "all" 
    ? beats 
    : beats.filter(beat => beat.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Beat Store</h1>
          <p className="text-xl text-blue-100">Browse and purchase high-quality beats from talented producers</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-900">Filter by Genre:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedGenre === genre
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600"
                }`}
              >
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Beats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBeats.map((beat) => (
            <div key={beat.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              {/* Beat Cover */}
              <div className="h-40 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center relative group">
                <Music className="h-16 w-16 text-white opacity-50" />
                <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-white fill-white" />
                </button>
              </div>

              {/* Beat Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{beat.title}</h3>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <span className="capitalize">{beat.genre}</span>
                  <span>{beat.bpm} BPM</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-gray-900">${beat.price}</span>
                  <span className="text-sm text-gray-600">{beat.plays.toLocaleString()} plays</span>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Purchase
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Beat?</h2>
          <p className="text-lg mb-6 text-purple-100">
            Can't find the perfect beat? Order a custom composition tailored to your specifications
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-bold">
            Order Custom Music
          </Button>
        </div>
      </div>
    </div>
  );
}
