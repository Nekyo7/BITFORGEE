import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { DarkModeProvider } from "./hooks/useDarkMode";
import { HomePage } from "./pages/HomePage";
import { AllSeekersPage } from "./pages/AllSeekersPage";
import { AllGiversPage } from "./pages/AllGiversPage";

export default function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/seekers" element={<AllSeekersPage />} />
            <Route path="/givers" element={<AllGiversPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
}
