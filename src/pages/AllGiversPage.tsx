import { useState } from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { GiverCard } from "../components/GiverCard";
import { MapView } from "../components/MapView";
import { mockGiverPosts } from "../data/mockData";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, Heart, Map, LayoutGrid } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";

export function AllGiversPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  // Filter by category
  let filteredGivers = selectedCategory === "all"
    ? mockGiverPosts
    : mockGiverPosts.filter(post => post.category === selectedCategory);

  // Filter by search query
  if (searchQuery) {
    filteredGivers = filteredGivers.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Givers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h1 className="text-gray-900 dark:text-white">All Givers</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {filteredGivers.length} {filteredGivers.length === 1 ? 'person' : 'people'} offering help in the community
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search givers by title, description, or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass-tile"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-between">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'glass-button-primary' : 'glass-button'}
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('map')}
                className={viewMode === 'map' ? 'glass-button-primary' : 'glass-button'}
              >
                <Map className="w-4 h-4 mr-2" />
                Map
              </Button>
            </div>
          </div>
        </div>

        {/* View Content */}
        {viewMode === 'grid' ? (
          /* Givers Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGivers.map((post) => (
              <GiverCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          /* Map View */
          <div className="h-[600px]">
            <MapView
              locations={filteredGivers
                .filter(post => post.coordinates)
                .map(post => ({
                  id: post.id,
                  lat: post.coordinates!.lat,
                  lng: post.coordinates!.lng,
                  title: post.title,
                  type: 'giver',
                  category: post.category,
                  user: post.user.name,
                }))}
            />
          </div>
        )}

        {/* Empty State */}
        {filteredGivers.length === 0 && (
          <div className="text-center py-16 glass-tile rounded-2xl">
            <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-gray-900 dark:text-white mb-2">No givers found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {searchQuery 
                ? "Try adjusting your search or filter criteria"
                : "No givers in this category yet"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
