import { Button } from "./ui/button";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
            <Sparkles className="w-6 h-6 text-amber-500 fill-amber-500" />
            <Users className="w-8 h-8 text-blue-500" />
          </div>
          
          <h1 className="mb-6 text-gray-900 dark:text-white">
            Build Stronger Communities Through Mutual Support
          </h1>
          
          <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with neighbors to share skills, resources, and time. Whether you need help or want to offer it, our platform makes it easy to build meaningful connections and create positive change together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 glass-button-primary">
              I'm Seeking Help
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 glass-button">
              I Can Give
              <Heart className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-gray-900 dark:text-white mb-1">1,247</div>
              <div className="text-gray-600 dark:text-gray-400">Community Members</div>
            </div>
            <div>
              <div className="text-gray-900 dark:text-white mb-1">856</div>
              <div className="text-gray-600 dark:text-gray-400">Connections Created</div>
            </div>
            <div>
              <div className="text-gray-900 dark:text-white mb-1">143</div>
              <div className="text-gray-600 dark:text-gray-400">Active Givers</div>
            </div>
            <div>
              <div className="text-gray-900 dark:text-white mb-1">3,421</div>
              <div className="text-gray-600 dark:text-gray-400">Hours Contributed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
