import AnnouncementBar from "./AnnouncementBar";
import LandingHeader from "./LandingHeader";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import LandingFooter from "./LandingFooter";

const HomePage = () => {
  return (
    <div>
      <AnnouncementBar />
      <div className="min-h-screen pb-20">
        <LandingHeader />
        <HeroSection />
        <FeaturesSection />
      </div>
      <LandingFooter />
    </div>
  );
};

export default HomePage;
