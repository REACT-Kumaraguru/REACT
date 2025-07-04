
import WhoAreWe from "./components/landing/WhoAreWe";
import WhoAreYou from "./components/landing/WhoAreYou";
import ThemesPreview from "./components/landing/ThemesPreview";
import Testimonials from "./components/landing/Testimonials";
import Motivations from "./components/landing/Motivations";
import Footer from "./components/landing/Footer";
import Hero from "./components/landing/Hero";
import TimelineSection from "./components/landing/TimelineSection";
import Navigation from "./components/landing/Navigation";


export default function Home() {
  return (
    <main>
      <Navigation/>
      <Hero />
      <WhoAreWe />
      {/* <TimelineSection /> */}
      <WhoAreYou />
      <ThemesPreview />
      <Testimonials />
      <Motivations />
      <Footer />
    </main>
  );
}
