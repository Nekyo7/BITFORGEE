import { useState } from "react";
import { Button } from "./ui/button";
import { Heart, Menu, Search, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { SignInModal } from "./SignInModal";
import { SignUpModal } from "./SignUpModal";
import { Link } from "react-router-dom";

export function Navigation() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <nav className="border-b border-border bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <span className="text-gray-900 dark:text-white">Community Connect</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link to="/seekers" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Seekers
              </Link>
              <Link to="/givers" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Givers
              </Link>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#community" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Community
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleDarkMode}
                className="glass-button"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="glass-button">
                <Search className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="hidden sm:inline-flex glass-button"
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </Button>
              <Button 
                className="hidden sm:inline-flex glass-button-primary"
                onClick={() => setShowSignUp(true)}
              >
                Get Started
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden glass-button">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <SignInModal 
        open={showSignIn} 
        onOpenChange={setShowSignIn}
        onSwitchToSignUp={() => {
          setShowSignIn(false);
          setShowSignUp(true);
        }}
      />

      <SignUpModal 
        open={showSignUp} 
        onOpenChange={setShowSignUp}
        onSwitchToSignIn={() => {
          setShowSignUp(false);
          setShowSignIn(true);
        }}
      />
    </>
  );
}
