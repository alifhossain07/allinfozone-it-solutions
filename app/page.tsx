import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Service from '@/components/Service';
import PortfolioSection from '@/components/PortfolioSection';
import Testimonial from '@/components/Testimonial';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Service />
      <PortfolioSection />
      <Testimonial />
      <ContactSection />
    </>
  );
}
