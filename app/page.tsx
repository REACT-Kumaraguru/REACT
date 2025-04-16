
import WhoAreWe from "./components/landing/WhoAreWe";
import WhoAreYou from "./components/landing/WhoAreYou";
import ThemesPreview from "./components/landing/ThemesPreview";
import Testimonials from "./components/landing/Testimonials";
import Motivations from "./components/landing/Motivations";
import Footer from "./components/landing/Footer";
import Hero from "./components/landing/Hero";


export default function Home() {
  return (
    <main>
      <Hero />
      <WhoAreWe />
      <WhoAreYou />
      <ThemesPreview />
      <Testimonials />
      <Motivations />
      <Footer />
    </main>
  );
}
