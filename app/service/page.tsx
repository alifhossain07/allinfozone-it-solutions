import ServicePage from '@/components/servicepage/ServicePage';
import AllServices from '@/components/servicepage/AllServices';
//import Clients from '@/components/servicepage/Clients';
import WorkProcess from '@/components/servicepage/WorkProcess';
import ContactSection from '@/components/ContactSection';

export default function ServicePageRoute() {
  return (
    <>
      <ServicePage />
      <AllServices />
  {/*    <Clients />*/}
      <WorkProcess />
      <ContactSection />
    </>
  );
}
