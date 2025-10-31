import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Navigation, ZoomIn, ZoomOut } from "lucide-react";

interface MapLocation {
  id: string;
  lat: number;
  lng: number;
  title: string;
  type: 'seeker' | 'giver';
  category: string;
  user: string;
}

interface MapViewProps {
  locations: MapLocation[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

export function MapView({ locations, center = { lat: 37.7749, lng: -122.4194 }, zoom = 12 }: MapViewProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [currentZoom, setCurrentZoom] = useState(zoom);

  // Google Maps embed URL (this is a static map for prototype purposes)
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${center.lat},${center.lng}&zoom=${currentZoom}`;

  return (
    <div className="relative w-full h-full min-h-[500px] glass-tile rounded-2xl overflow-hidden">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="glass-button"
          onClick={() => setCurrentZoom(Math.min(currentZoom + 1, 20))}
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="glass-button"
          onClick={() => setCurrentZoom(Math.max(currentZoom - 1, 1))}
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="glass-button"
        >
          <Navigation className="w-4 h-4" />
        </Button>
      </div>

      {/* Map Container - Using a styled div for prototype */}
      <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-600"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Location Markers */}
        <div className="absolute inset-0">
          {locations.map((location, index) => {
            // Mock positioning - in real implementation, use actual lat/lng conversion
            const x = 20 + (index % 5) * 15;
            const y = 20 + Math.floor(index / 5) * 20;
            
            return (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className="absolute transform -translate-x-1/2 -translate-y-full transition-all hover:scale-110"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="relative">
                  <MapPin 
                    className={`w-8 h-8 ${
                      location.type === 'seeker' 
                        ? 'text-blue-600 fill-blue-500' 
                        : 'text-purple-600 fill-purple-500'
                    } drop-shadow-lg`}
                  />
                  {selectedLocation?.id === location.id && (
                    <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-current opacity-20 animate-ping" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Map Attribution */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-500 dark:text-gray-400 glass-tile px-3 py-1 rounded">
          <p>📍 Showing {locations.length} locations</p>
        </div>
      </div>

      {/* Selected Location Card */}
      {selectedLocation && (
        <Card className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md glass-tile border-0 shadow-xl">
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={selectedLocation.type === 'seeker' ? 'default' : 'secondary'}>
                    {selectedLocation.type === 'seeker' ? 'Seeker' : 'Giver'}
                  </Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {selectedLocation.category}
                  </span>
                </div>
                <h3 className="text-gray-900 dark:text-white mb-1">
                  {selectedLocation.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  by {selectedLocation.user}
                </p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSelectedLocation(null)}
              >
                ✕
              </Button>
            </div>
            <div className="flex gap-2 mt-3">
              <Button size="sm" className="flex-1 glass-button-primary">
                View Details
              </Button>
              <Button size="sm" variant="outline" className="glass-button">
                Get Directions
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Instructions Overlay for Real Implementation */}
      <div className="absolute top-4 left-4 max-w-xs glass-tile p-3 rounded-lg text-xs text-gray-600 dark:text-gray-400">
        <p className="mb-1">
          <strong className="text-gray-900 dark:text-white">Map Integration:</strong>
        </p>
        <p>
          Replace with Google Maps API by adding your API key and using the Google Maps JavaScript API or react-google-maps library.
        </p>
      </div>
    </div>
  );
}
