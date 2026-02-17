import ContactHero from '@/components/contactpage/ContactHero';
import GoogleMaps from '@/components/contactpage/GoogleMaps';
import OurTeam from '@/components/aboutpage/OurTeam';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <GoogleMaps />
      <OurTeam />
      <ContactSection />
    </>
  );
}
