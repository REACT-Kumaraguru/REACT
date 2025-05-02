"use client";

import { useState } from "react";
import HeroImage from "@/react/HeroImage";
import SectionTabs from "@/react/SectionTabs";
import About from "@/react/About";
import Fees from "@/react/Fees";
import AcademicCredits from "@/react/AcademicCredits";
import Footer from "@/components/landing/Footer";
import ThemesTab from "@/react/ThemesTab";
import PhaseOverlay from "@/react/PhaseOverlay";
import ReactHeader from "@/react/ReactHeader";

export default function ReactPage() {
  const [tab, setTab] = useState("about");
  const [showPhaseOverlay, setShowPhaseOverlay] = useState<
    "explore" | "reflect" | "solve" | "apply" | null
  >(null);

  const renderTabContent = () => {
    switch (tab) {
      case "about":
        return (
          <About
            openPhase={(val) => {
              if (val === "Implement") setShowPhaseOverlay("apply");
              else setShowPhaseOverlay(val);
            }}
          />
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

      {/* Hero Section */}
      <HeroImage />

      {/* Tabs */}
      <SectionTabs
        current={tab}
        onChange={(newTab) => setTab(newTab)}
        onOpenThemes={() => setTab("themes")}
      />

      {/* Responsive Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">{renderTabContent()}</div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[240px] border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 pl-0 lg:pl-4">
          <h3 className="text-xl font-semibold mb-4">Become a Part</h3>
          <a
            href="/select-user"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Apply Now
          </a>
        </aside>
      </div>

      {/* Phase Overlay */}
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
