"use client";

import { useState } from "react";
import HeroImage from "@/react/HeroImage";
import SectionTabs from "@/react/SectionTabs";
import About from "@/react/About";
import Fees from "@/react/Fees";
import AcademicCredits from "@/react/AcademicCredits";
import Footer from "@/components/landing/Footer";
import ThemesTab from "@/react/ThemesTab"; // Make sure this exists
import PhaseOverlay from "@/react/PhaseOverlay";
import ReactHeader from "@/react/ReactHeader";

export default function ReactPage() {
  const [tab, setTab] = useState("about");
  const [showPhaseOverlay, setShowPhaseOverlay] = useState<"explore" | "reflect" | "solve" | "apply" | null>(null);

  const renderTabContent = () => {
    switch (tab) {
      case "about":
        return (
          <About />

        );
      case "fees":
        return <Fees />;
      case "credits":
        return <AcademicCredits />;
      case "themes":
        return <ThemesTab />;
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen bg-white">
     <ReactHeader />
      {/* Top Hero Banner */}
      <HeroImage />

      {/* Tab Navigation */}
      <SectionTabs
        current={tab}
        onChange={(newTab) => setTab(newTab)}
        onOpenThemes={() => setTab("themes")}
      />

      {/* Main content and sidebar */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-8">
        <div className="flex-1">{renderTabContent()}</div>

        {/* Apply Sidebar */}
        <aside className="w-[240px] sticky top-20 h-fit self-start border-l pl-4">
          <h3 className="text-xl font-semibold mb-4">Become a Part</h3>
          <a
            href="/select-user"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Apply Now
          </a>
        </aside>
      </div>

      {/* Phase Overlay when button is clicked */}
      {showPhaseOverlay && (
        <PhaseOverlay
          phase={showPhaseOverlay}
          onClose={() => setShowPhaseOverlay(null)}
        />
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}
