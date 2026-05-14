import MainLayout from "../layout/MainLayout";

import HeroSection from "../sections/hero/HeroSection";
import ServicesSection from "../sections/services/ServicesSection";
import GallerySection from "../sections/gallery/GallerySection";
import WhyChooseSection from "../sections/whyChoose/WhyChooseSection";
import IndustriesSection from "../sections/industries/IndustriesSection";
import CTASection from "../sections/cta/CTASection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <WhyChooseSection />
      <IndustriesSection />
      <CTASection />
    </MainLayout>
  );
}