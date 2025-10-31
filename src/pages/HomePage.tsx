import { useState } from "react";
import { Hero } from "../components/Hero";
import { CategoryFilter } from "../components/CategoryFilter";
import { SeekerCard } from "../components/SeekerCard";
import { GiverCard } from "../components/GiverCard";
import { StatsSection } from "../components/StatsSection";
import { Testimonials } from "../components/Testimonials";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { mockSeekerPosts, mockGiverPosts } from "../data/mockData";
import { ArrowRight, Users, Handshake, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSeekers = selectedCategory === "all"
    ? mockSeekerPosts.slice(0, 6)
    : mockSeekerPosts.filter(post => post.category === selectedCategory).slice(0, 6);

  const filteredGivers = selectedCategory === "all"
    ? mockGiverPosts.slice(0, 6)
    : mockGiverPosts.filter(post => post.category === selectedCategory).slice(0, 6);

  return (
    <>
      <Hero />

      {/* How It Works Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 dark:text-white mb-4">How Community Connect Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three simple steps to start building meaningful connections in your community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-tile p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Join the Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create your profile and connect with neighbors who share your values of mutual support.
              </p>
            </div>

            <div className="text-center glass-tile p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Seek or Give</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share what you can offer as a Giver or post what you need as a Seeker. Every action matters.
              </p>
            </div>

            <div className="text-center glass-tile p-6 rounded-2xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-gray-900 dark:text-white mb-2">Build Trust</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect safely, help each other, and create lasting relationships in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="seekers" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-gray-900 dark:text-white mb-2">Browse Seekers & Givers</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Discover ways to give or find the support you're seeking
            </p>
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          <Tabs defaultValue="seekers" className="w-full">
            <TabsList className="mb-8 glass-tile">
              <TabsTrigger value="seekers">Seekers ({filteredSeekers.length})</TabsTrigger>
              <TabsTrigger value="givers">Givers ({filteredGivers.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="seekers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSeekers.map((post) => (
                  <SeekerCard key={post.id} post={post} />
                ))}
              </div>
              {filteredSeekers.length === 0 && (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400 glass-tile rounded-lg">
                  No seekers in this category yet.
                </div>
              )}
              <div className="mt-8 text-center">
                <Link to="/seekers">
                  <Button variant="outline" className="glass-button">
                    View All Seekers
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="givers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGivers.map((post) => (
                  <GiverCard key={post.id} post={post} />
                ))}
              </div>
              {filteredGivers.length === 0 && (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400 glass-tile rounded-lg">
                  No givers in this category yet.
                </div>
              )}
              <div className="mt-8 text-center">
                <Link to="/givers">
                  <Button variant="outline" className="glass-button">
                    View All Givers
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of community members who are already making their neighborhoods stronger, 
            one act of kindness at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2 glass-button-primary">
              Join Community
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 glass-button">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
