import { Heart, Facebook, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <span className="text-white">Community Connect</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              Building stronger communities through mutual support and sharing.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#seekers" className="hover:text-white transition-colors">Become a Seeker</a></li>
              <li><a href="#givers" className="hover:text-white transition-colors">Become a Giver</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; 2025 Community Connect. All rights reserved. Built with love for communities everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
